# 博創數科官網初版設計

這是以博創數科既有官網內容與提供的需求文件建立的第一版網站設計。首頁 `/` 依 `Broadinno Corporate Transformation Website.png` 製作；管理顧問服務頁 `/management-consulting/` 則保留依 `02_management_consulting.png` 製作的服務定位、核心服務、顧問流程與服務價值。使用的情境圖片為生成素材，並非博創數科實際團隊或專案照片；後續可替換為正式圖片。

專案辦公室頁 `/project-manager/` 依 `Broadinno PMO 服務網站全頁設計.png` 製作，包含 PMO 服務重點、六項服務、專案治理、六步驟流程、五項效益與諮詢區塊。

主要專業領域頁 `/main-experties/` 依 `Broadinno 專業領域服務頁面.png` 製作，展示金融科技、支付、AI、區塊鏈、數據分析與數位轉型六個領域。

客戶案例總覽頁 `/case-studies/` 依提供的設計圖製作，包含精選案例、五個案例卡片、可操作的產業篩選與諮詢入口；案例卡片沿用既有詳細頁網址。

金控公司資料倉儲案例頁 `/customer-data-warehouse/` 依提供的案例頁設計圖製作，包含資料流程、治理課題、Data Health Check、顧問工作方式及服務價值。圖解為網頁元件，不代表客戶實際系統。

家電產業案例頁 `/customer-appliance/` 依提供的案例頁設計圖製作，包含家庭情境首屏、產業挑戰、家庭分群概念、三類示意客群與行銷分析儀表板。照片與儀表板數值均為示意。

信用貸款案例頁 `/customer-loan-credit/` 依提供的設計圖製作，包含信用風險概念儀表板、市場分析維度、信用評分模型流程、模型優化與服務預期方向。圖表為示意，未使用設計圖中未經驗證的績效數字。

預約諮詢頁 `/consultation-appointment/` 依提供的設計圖重做，包含諮詢領域、表單、諮詢流程與聯絡資訊。表單由 Cloudflare Worker 接收，再透過 Google Apps Script 寫入 Google 試算表；設定方式見 [預約諮詢接收設定](docs/google-sheet-consultation.md)。

## 本機啟動

```bash
npm install
npm run dev
```

開啟 <http://localhost:3000>。

## 目前範圍

- 首頁、數據分析服務、管理顧問、專案辦公室、主要服務產業、主要專業領域、公司介紹、專業能力、案例總覽、六個案例頁、預約諮詢版型、隱私權聲明版型。
- 主導覽依「首頁／數據分析服務／核心服務／關於我們／客戶案例／預約諮詢」組織，桌機與手機版均可展開子選單。
- 保留原網站公開頁面路徑，加入響應式導覽與基本 SEO metadata。
- 預約表單需先設定 Google Apps Script 與 Cloudflare Worker secrets，才能正式收件。
- 隱私權聲明目前是初稿，已加入表單資料流向；正式上線前須確認完整條款。

## 後續工作

收到正式圖片後，可替換首頁、服務及案例的視覺區塊。生成圖片與提示詞記錄於 [圖片素材說明](docs/asset-sources.md)。正式營運版本仍須確認完整法律條款與表單資料管理方式；預約資料目前存於 Google 試算表，尚無管理後台。
