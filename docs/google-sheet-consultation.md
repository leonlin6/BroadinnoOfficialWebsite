# 預約諮詢接收與郵件通知

網站的表單會 POST 到同網域的 `/api/consultation`。本機執行 `npm run dev` 時，由本機開發伺服器驗證資料並直接呼叫 Google Apps Script；部署到 Cloudflare 時，由 Worker 做同樣的事。只有 Apps Script 會寫入試算表。訪客的瀏覽器不會取得密鑰或 Apps Script 網址。

## Google 試算表與 Apps Script

1. 建立一份 Google 試算表，從網址 `https://docs.google.com/spreadsheets/d/試算表ID/edit` 複製 ID。
2. 在試算表中開啟「擴充功能 → Apps Script」，將 [consultation-google-sheet.gs](consultation-google-sheet.gs) 的內容貼到 `Code.gs` 並儲存。
3. 在 Apps Script 的「專案設定 → 指令碼屬性」加入：
   - `SPREADSHEET_ID`：第 1 步的試算表 ID。
   - `WEBHOOK_SECRET`：自行產生的長隨機字串；不要提交到 Git。
   - `NOTIFICATION_EMAILS`：要收到新申請通知的信箱，多個地址以半形逗號分隔，例如 `team@example.com,owner@example.com`。此設定只放在 Apps Script，無須加入 `.env.local` 或 Cloudflare Worker Secret。
4. 使用**部署網頁應用程式的同一個 Google 帳號**，在 Apps Script 編輯器的函式選單選 `setupNotificationTrigger` 並執行一次，依畫面完成寄信與建立排程所需的授權。此函式只建立一個每 5 分鐘處理待寄通知的觸發條件，不會寄出測試信；重複執行也不會建立第二個相同觸發條件。
   - 不要在編輯器手動執行 `doPost`；它需要網站送來的 POST 資料，手動執行時沒有 `e.postData`。
5. 初次設定時，選「部署 → 新增部署 → 網頁應用程式」。執行身分選「我」，存取權選「任何人」（包含未登入者），完成授權並複製結尾為 `/exec` 的網址。Cloudflare Worker 需要能以伺服器身分呼叫此網址；密鑰會阻止未授權的寫入請求。若已有部署，請在「管理部署」編輯原部署並選**新版本**，維持原 `/exec` 網址；只儲存程式碼不會更新正式部署。

第一次成功送出時，程式會建立名為「預約諮詢」的工作表和標題列。相同申請編號重送不會新增第二列。資料包含姓名、Email、電話、偏好時間、主題、需求描述及同意紀錄。

## 通知信行為

試算表成功新增資料列後，表單先回覆收件成功；Apps Script 每 5 分鐘處理待寄通知，以**建立觸發條件的 Google 帳號**寄信給 `NOTIFICATION_EMAILS`。信件包含申請編號、姓名、Email、電話、偏好時間、主題及試算表資料列連結；詳細描述仍留在試算表。請確認通知收件者有權讀取該試算表。

程式會在原工作表後方加入「通知狀態」、「通知寄出時間（台北）」、「通知錯誤」三欄。新申請先標為「待寄送」，寄出後改為「已寄送」。若寄信失敗或當日額度不足，錯誤會記在工作表，下次觸發條件會補寄；每次最多處理 20 筆。Apps Script 的時間觸發並非精確計時，實際通知可能稍晚。既有歷史資料不會自動補寄。極少數情況下，若郵件服務已接受信件但狀態寫回試算表失敗，補寄可能再次送出；可用信件主旨中的申請編號辨識。

Google Apps Script `MailApp` 的寄件額度按**收件人數**計算；目前一般 Google 帳號每日 100 位、Google Workspace 每日 1,500 位，實際額度以 Google 當下規定與帳號狀態為準。多個通知信箱會各占一位額度。參考：[MailApp](https://developers.google.com/apps-script/reference/mail/mail-app)、[寄件額度](https://developers.google.com/apps-script/guides/services/quotas)、[時間觸發條件](https://developers.google.com/apps-script/guides/triggers/installable)。

設定完成後，請實際送出一筆新申請，確認試算表新增資料列、通知狀態為「已寄送」，且指定信箱收到通知。若不想等候排程，可在 Apps Script 編輯器手動執行 `retryPendingNotifications`；這個函式會真的寄出待寄信件。若狀態仍為「待寄送」，查看「通知錯誤」與 Apps Script「執行作業」紀錄；確認 Script Properties、授權與部署版本。

## Cloudflare Workers

先把本專案的變更 commit 並 push 到 Cloudflare 監聽的分支，等第一次部署成功。這次 `wrangler.jsonc` 新增了 `main: ./worker/index.ts`，會將原本只有靜態檔案的 Worker 改成同時有程式碼與靜態資產的 Worker。部署前若看到「Variables cannot be added to a Worker that only has static assets」，屬於目前舊版本的限制；請先完成這次部署。

部署成功後，到**實際提供網站網址的 Worker**「Settings → Variables and Secrets」建立兩個 **Secret**。先在該 Worker 的 Domains 確認 `workers.dev` 網址與瀏覽器正在開啟的網站相同；Secret 設在另一個 Worker 不會生效。

| 名稱 | 值 |
| --- | --- |
| `GOOGLE_SCRIPT_URL` | Apps Script 網頁應用程式的 `/exec` 網址 |
| `GOOGLE_SCRIPT_SECRET` | 與 Apps Script `WEBHOOK_SECRET` 完全相同的字串 |

Cloudflare Git 建置設定維持 **Build command** `npm run build`、**Deploy command** `npx wrangler deploy`，Root directory 留空。`wrangler.jsonc` 已讓 `/api/*` 由 Worker 處理，其餘網址繼續使用 `out/` 靜態檔案。設定 Secret 後再送出一筆測試預約，確認試算表出現資料列。

若表單回傳 HTTP 503，表示 Worker 缺少任一 Secret，或 `GOOGLE_SCRIPT_URL` 不是 `https://script.google.com/macros/s/.../exec` 格式；先檢查 Secret 是否設在實際服務該網址的 Worker。Cloudflare 的 Worker 名稱也應與 `wrangler.jsonc` 的 `name` 對應，以避免部署到另一個 Worker。

## 本機測試同一份試算表

1. 將專案根目錄的 `.env.local.example` 複製成 `.env.local`，只在 `.env.local` 填入同一個 Apps Script `/exec` 網址，並把 `GOOGLE_SCRIPT_SECRET` 設成 Apps Script `WEBHOOK_SECRET` 的相同值。不要把真實網址或密鑰填進 `.env.local.example`；它是可提交的範例檔。`.env.local` 已被 Git 忽略，也不要使用 `NEXT_PUBLIC_` 前綴。
2. 執行 `npm run dev`，開啟 `http://localhost:3000/consultation-appointment/` 送出表單。本機 Node.js 伺服器會直接向 Apps Script 送出請求，不會經過已部署的 Cloudflare Worker。若指向同一個 Apps Script，資料就會寫入同一份 Google 試算表。
3. 本機表單回傳 HTTP 503 時，檢查 `.env.local` 的網址與密鑰；設定後重新啟動 `npm run dev`。HTTP 502 表示 Apps Script 未回傳成功，請檢查 Script 部署版本、Script Properties 和執行紀錄。

若要改用本機 Cloudflare Worker 模擬正式環境，可在專案根目錄建立不提交的 `.dev.vars`，格式為 `GOOGLE_SCRIPT_URL="..."` 與 `GOOGLE_SCRIPT_SECRET="..."` 各一行；先執行 `npm run build`，再執行 `npx wrangler dev`。這也不會使用已部署的 Cloudflare Worker。

正式上線前，請確認試算表分享權限、Apps Script 部署版本、Cloudflare secrets，以及隱私權聲明內容。表單提交後會顯示收件結果；實際諮詢時間仍需人工回覆確認。
