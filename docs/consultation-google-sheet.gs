// Paste this file into the Apps Script project linked to the booking spreadsheet.
// Script properties required: SPREADSHEET_ID and WEBHOOK_SECRET.
function doPost(e) {
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
      const sheet = spreadsheet.getSheetByName("預約諮詢") || spreadsheet.insertSheet("預約諮詢");
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(["申請編號", "收到時間（台北）", "姓名", "Email", "聯絡電話", "希望諮詢時間", "主要問題", "詳細描述", "同意隱私權政策"]);
        sheet.setFrozenRows(1);
      }

      // A retry uses the same request ID, so it does not create a second booking row.
      if (sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 1).createTextFinder(String(data.requestId)).matchEntireCell(true).findNext()) return reply(true);

      const safeCell = function (value) {
        const text = String(value || "");
        return /^\s*[=+\-@]/.test(text) ? "'" + text : text;
      };
      const preferredTime = String(data.preferredTime).replace("T", " ") + " (" + String(data.timeZone || "Asia/Taipei") + ")";
      sheet.appendRow([
        String(data.requestId),
        Utilities.formatDate(new Date(), "Asia/Taipei", "yyyy-MM-dd HH:mm:ss"),
        safeCell(data.name),
        safeCell(data.email),
        safeCell(data.phone),
        safeCell(preferredTime),
        safeCell(data.topic),
        safeCell(data.description),
        "是",
      ]);
      SpreadsheetApp.flush();
      return reply(true);
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error(error);
    return reply(false);
  }
}

function reply(ok) {
  return ContentService.createTextOutput(JSON.stringify({ ok: ok })).setMimeType(ContentService.MimeType.JSON);
}
