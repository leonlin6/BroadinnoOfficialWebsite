# 預約諮詢接收至 Google 試算表

網站的表單會 POST 到同網域的 `/api/consultation`。Cloudflare Worker 驗證資料後，使用保存在 Worker 的密鑰呼叫 Google Apps Script；只有 Apps Script 會寫入試算表。訪客的瀏覽器不會取得密鑰或 Apps Script 網址。

## Google 試算表與 Apps Script

1. 建立一份 Google 試算表，從網址 `https://docs.google.com/spreadsheets/d/試算表ID/edit` 複製 ID。
2. 在試算表中開啟「擴充功能 → Apps Script」，將 [consultation-google-sheet.gs](consultation-google-sheet.gs) 的內容貼到 `Code.gs` 並儲存。
3. 在 Apps Script 的「專案設定 → 指令碼屬性」加入：
   - `SPREADSHEET_ID`：第 1 步的試算表 ID。
   - `WEBHOOK_SECRET`：自行產生的長隨機字串；不要提交到 Git。
4. 選「部署 → 新增部署 → 網頁應用程式」。執行身分選「我」，存取權選「任何人」（包含未登入者），完成授權並複製結尾為 `/exec` 的網址。Cloudflare Worker 需要能以伺服器身分呼叫此網址；密鑰會阻止未授權的寫入請求。
5. 往後修改 Apps Script 程式時，需更新網頁應用程式部署版本，否則正式網址仍執行舊版。

第一次成功送出時，程式會建立名為「預約諮詢」的工作表和標題列。相同申請編號重送不會新增第二列。資料包含姓名、Email、電話、偏好時間、主題、需求描述及同意紀錄。

## Cloudflare Workers

先把本專案的變更 commit 並 push 到 Cloudflare 監聽的分支，等第一次部署成功。這次 `wrangler.jsonc` 新增了 `main: ./worker/index.ts`，會將原本只有靜態檔案的 Worker 改成同時有程式碼與靜態資產的 Worker。部署前若看到「Variables cannot be added to a Worker that only has static assets」，屬於目前舊版本的限制；請先完成這次部署。

部署成功後，在名稱為 `broadinno-website` 的 Worker「Settings → Variables and Secrets」建立兩個 **Secret**：

| 名稱 | 值 |
| --- | --- |
| `GOOGLE_SCRIPT_URL` | Apps Script 網頁應用程式的 `/exec` 網址 |
| `GOOGLE_SCRIPT_SECRET` | 與 Apps Script `WEBHOOK_SECRET` 完全相同的字串 |

Cloudflare Git 建置設定維持 **Build command** `npm run build`、**Deploy command** `npx wrangler deploy`，Root directory 留空。`wrangler.jsonc` 已讓 `/api/*` 由 Worker 處理，其餘網址繼續使用 `out/` 靜態檔案。設定 Secret 後再送出一筆測試預約，確認試算表出現資料列。

本機若要連同 API 檢查，可在專案根目錄建立不提交的 `.dev.vars`，格式為 `GOOGLE_SCRIPT_URL="..."` 與 `GOOGLE_SCRIPT_SECRET="..."` 各一行；先執行 `npm run build`，再執行 `npx wrangler dev`。單獨執行 `npm run dev` 只會啟動 Next.js 頁面，不會啟動 Worker API。

正式上線前，請確認試算表分享權限、Apps Script 部署版本、Cloudflare secrets，以及隱私權聲明內容。表單提交後會顯示收件結果；實際諮詢時間仍需人工回覆確認。
