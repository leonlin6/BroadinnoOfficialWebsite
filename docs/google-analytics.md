# 透過 GTM 將網站連接 Google Analytics 4

本站只在 HTML 安裝 GTM 容器。GA4 的 Google 代碼與量測 ID 在 GTM 後台設定；網站不另外安裝 `gtag.js`，因此 GA4 追蹤只需現有的 `NEXT_PUBLIC_GTM_ID`，不需要將 GA4 ID 加進 `.env.local`。請確認 Cloudflare 的建置變數也有相同的 GTM ID，並重新建置部署。

## 1. 建立 GA4 Google 代碼

1. 在 GA4「管理 → 資料串流 → 網頁」找到這個網站的評估 ID（`G-...`）。若沿用 Webnode 時期的 GA4 資源，確認選的是原本要延續的資料串流。
2. 在對應的 GTM 網頁容器中，新增「Google 代碼」標籤；標籤 ID 填入上述 `G-...`，觸發條件選「Initialization - All Initialization Events」。儲存後先使用 GTM「預覽」檢查。若容器已有指向相同 ID 的 Google 代碼，使用既有標籤即可，不要建立第二份。
3. 確認無誤後，在 GTM 提交並發布容器版本。只有儲存而未發布的標籤不會出現在一般訪客的網站上。

Google 官方操作：[在 GTM 設定 GA4](https://support.google.com/tagmanager/answer/9442095)。

## 2. 追蹤 Next.js 站內換頁

本站使用 `next/link`，部分換頁不會重新載入整份 HTML。請採用 GTM 的 History Change 追蹤，並確保 GA4 只送出一筆換頁瀏覽：

1. 在 GA4 網頁資料串流的「加強型評估 → 網頁瀏覽 → 顯示進階設定」，關閉「根據瀏覽器歷史記錄事件變更網頁」。保留「網頁載入」的瀏覽量。
2. 在 GTM 啟用內建 History 變數，新增「History Change」觸發條件。
3. 依 [Google 的 GTM SPA 指南](https://developers.google.com/analytics/devguides/collection/ga4/measure-spa-gtm) 建立「Google 代碼 - SPA 更新」標籤：使用同一個 GA4 ID，設定 `page_location={{Page URL}}`、`page_title={{Page Title}}`、`update=true`，不要直接給這個標籤觸發條件。
4. 再建立「Google Analytics: GA4 事件」標籤，事件名稱 `page_view`，觸發條件為 History Change；在「進階設定 → 標籤順序」設定先觸發前一步的 SPA 更新標籤。

在 GTM 預覽和 GA4 DebugView 逐頁點選網站，確認首次載入與每次站內換頁各只有一筆 `page_view`，並檢查 `page_location`、`page_title` 是否對應新頁面。

## 3. 追蹤成功送出的表單

網站只在 `/api/consultation` 回覆成功時推送以下 `dataLayer` 事件；驗證失敗或 API 錯誤不會推送：

| `event` | `form_type` | 表單 |
| --- | --- | --- |
| `lead_submit_success` | `consultation` | 預約諮詢 |
| `lead_submit_success` | `wealth_index` | 區域財富指數申請 |
| `lead_submit_success` | `ai_prediction` | AI 預測服務諮詢 |

在 GTM 新增資料層變數 `form_type`、自訂事件觸發條件 `lead_submit_success`，再新增「Google Analytics: GA4 事件」標籤：事件名稱設為 GA4 建議的 `generate_lead`，事件參數 `form_type` 設為剛建立的資料層變數，並使用上述自訂事件觸發條件。若要將它列為轉換，在 GA4 將 `generate_lead` 標記為重要事件。

網站不會將姓名、Email、電話或表單內容推送到 `dataLayer`。表單不應再用 GTM 的一般「Form Submission」觸發條件送出另一筆相同轉換。相關說明：[GTM 自訂事件](https://support.google.com/tagmanager/answer/7679219)、[GA4 `generate_lead`](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead)。

正式啟用追蹤前，仍須依實際使用的分析與廣告功能檢視網站的 Cookie 同意方式及隱私權聲明。
