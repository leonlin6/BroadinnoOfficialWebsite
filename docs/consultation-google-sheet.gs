// Paste this file into the Apps Script project linked to the booking spreadsheet.
// Script properties: SPREADSHEET_ID, WEBHOOK_SECRET, and NOTIFICATION_EMAILS.
const CONSULTATION_SHEET_NAME = "預約諮詢";
const NOTIFICATION_PENDING = "待寄送";
const NOTIFICATION_SENT = "已寄送";

function doPost(e) {
  if (!e || !e.postData) {
    console.warn("doPost 只能由網站 POST 呼叫；設定寄信請執行 setupNotificationTrigger。");
    return reply(false);
  }
  let saved = false;
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    const properties = PropertiesService.getScriptProperties();
    const secret = properties.getProperty("WEBHOOK_SECRET");
    const spreadsheetId = properties.getProperty("SPREADSHEET_ID");
    if (!secret || !spreadsheetId || data.secret !== secret) return reply(false);
    if (!data.requestId || !data.name || !data.email || !data.preferredTime || !data.topic || !data.description || data.consent !== true) return reply(false);

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      const sheet = spreadsheet.getSheetByName(CONSULTATION_SHEET_NAME) || spreadsheet.insertSheet(CONSULTATION_SHEET_NAME);
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(["申請編號", "收到時間（台北）", "姓名", "Email", "聯絡電話", "希望諮詢時間", "主要問題", "詳細描述", "同意隱私權政策"]);
        sheet.setFrozenRows(1);
      }
      const notificationColumns = ensureNotificationColumns(sheet);

      // A retry uses the same request ID, so it does not create another booking row.
      const existing = sheet.getLastRow() > 1
        ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).createTextFinder(String(data.requestId)).matchEntireCell(true).findNext()
        : null;
      if (existing) {
        saved = true;
      } else {
        const preferredTime = String(data.preferredTime).replace("T", " ") + " (" + String(data.timeZone || "Asia/Taipei") + ")";
        const rowValues = [
          String(data.requestId),
          Utilities.formatDate(new Date(), "Asia/Taipei", "yyyy-MM-dd HH:mm:ss"),
          safeCell(data.name),
          safeCell(data.email),
          safeCell(data.phone),
          safeCell(preferredTime),
          safeCell(data.topic),
          safeCell(data.description),
          "是",
        ];
        while (rowValues.length < notificationColumns.status) rowValues.push("");
        rowValues[notificationColumns.status - 1] = NOTIFICATION_PENDING;
        sheet.appendRow(rowValues);
        SpreadsheetApp.flush();
        saved = true;
      }
    } finally {
      lock.releaseLock();
    }

    // The scheduled trigger sends email after this form request has completed.
    return reply(true);
  } catch (error) {
    console.error(error);
    return reply(saved);
  }
}

function ensureNotificationColumns(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const findOrAdd = function (name) {
    const index = headers.indexOf(name);
    if (index !== -1) return index + 1;
    const next = headers.length + 1;
    if (next > sheet.getMaxColumns()) sheet.insertColumnAfter(sheet.getMaxColumns());
    sheet.getRange(1, next).setValue(name);
    headers.push(name);
    return next;
  };
  return {
    status: findOrAdd("通知狀態"),
    sentAt: findOrAdd("通知寄出時間（台北）"),
    error: findOrAdd("通知錯誤"),
  };
}

function safeCell(value) {
  const text = String(value || "");
  return /^\s*[=+\-@]/.test(text) ? "'" + text : text;
}

function sendPendingNotification(spreadsheet, sheet, row, columns) {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return false;
  try {
    if (sheet.getRange(row, columns.status).getDisplayValue() !== NOTIFICATION_PENDING) return true;
    const recipients = String(PropertiesService.getScriptProperties().getProperty("NOTIFICATION_EMAILS") || "")
      .split(",").map(function (address) { return address.trim(); }).filter(Boolean);
    if (!recipients.length) throw new Error("尚未設定 NOTIFICATION_EMAILS");
    if (MailApp.getRemainingDailyQuota() < recipients.length) throw new Error("今日寄信額度不足");

    const values = sheet.getRange(row, 1, 1, 9).getDisplayValues()[0];
    const applicationUrl = spreadsheet.getUrl() + "#gid=" + sheet.getSheetId() + "&range=A" + row;
    const subject = "【博創數科】新諮詢申請 " + values[0];
    const body = [
      "網站收到新的諮詢申請。",
      "",
      "申請編號：" + values[0],
      "收到時間：" + values[1],
      "姓名：" + values[2],
      "Email：" + values[3],
      "聯絡電話：" + (values[4] || "未提供"),
      "希望諮詢時間：" + values[5],
      "主要問題：" + values[6],
      "",
      "詳細需求與完整資料請至試算表查看：",
      applicationUrl,
    ].join("\n");

    MailApp.sendEmail({ to: recipients.join(","), subject: subject, body: body, name: "博創數科網站" });
    sheet.getRange(row, columns.status).setValue(NOTIFICATION_SENT);
    sheet.getRange(row, columns.sentAt).setValue(Utilities.formatDate(new Date(), "Asia/Taipei", "yyyy-MM-dd HH:mm:ss"));
    sheet.getRange(row, columns.error).clearContent();
    SpreadsheetApp.flush();
    return true;
  } catch (error) {
    console.error("申請編號 " + sheet.getRange(row, 1).getDisplayValue() + " 通知信寄送失敗", error);
    sheet.getRange(row, columns.error).setValue(safeCell(String(error).slice(0, 300)));
    return false;
  } finally {
    lock.releaseLock();
  }
}

// Run once in the Apps Script editor to authorize MailApp and create one retry trigger.
function setupNotificationTrigger() {
  const properties = PropertiesService.getScriptProperties();
  if (!properties.getProperty("SPREADSHEET_ID") || !properties.getProperty("NOTIFICATION_EMAILS")) {
    throw new Error("請先設定 SPREADSHEET_ID 與 NOTIFICATION_EMAILS");
  }
  MailApp.getRemainingDailyQuota();
  if (ScriptApp.getProjectTriggers().some(function (trigger) {
    return trigger.getHandlerFunction() === "retryPendingNotifications";
  })) return;
  ScriptApp.newTrigger("retryPendingNotifications").timeBased().everyMinutes(5).create();
}

function retryPendingNotifications() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
  if (!spreadsheetId) return;
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheetByName(CONSULTATION_SHEET_NAME);
  if (!sheet || sheet.getLastRow() < 2) return;
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const columns = {
    status: headers.indexOf("通知狀態") + 1,
    sentAt: headers.indexOf("通知寄出時間（台北）") + 1,
    error: headers.indexOf("通知錯誤") + 1,
  };
  if (!columns.status || !columns.sentAt || !columns.error) return;
  const statuses = sheet.getRange(2, columns.status, sheet.getLastRow() - 1, 1).getDisplayValues();
  let attempts = 0;
  for (let index = 0; index < statuses.length && attempts < 20; index++) {
    if (statuses[index][0] !== NOTIFICATION_PENDING) continue;
    attempts++;
    if (!sendPendingNotification(spreadsheet, sheet, index + 2, columns)) break;
  }
}

function reply(ok) {
  return ContentService.createTextOutput(JSON.stringify({ ok: ok })).setMimeType(ContentService.MimeType.JSON);
}
