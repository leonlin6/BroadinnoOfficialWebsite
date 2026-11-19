import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "隱私權聲明", description: "博創數科網站隱私權聲明。", alternates: { canonical: "/policy-privacy/" } };

const sections = [
  { title: "適用範圍", text: "本聲明適用於瀏覽或使用博創數科網站服務時，涉及的個人資料蒐集、處理、利用與保護。連結至其他網站時，請另行參閱該網站的隱私權聲明。" },
  { title: "資料蒐集", text: "單純瀏覽網站時，網站不會主動蒐集您的身分資料。送出預約諮詢表單時，會蒐集您填寫的姓名、Email、聯絡電話（選填）、偏好時間、諮詢主題及需求描述，並記錄同意狀態與送出時間。基於網站運作及安全管理，系統可能記錄連線設備的 IP 位址等使用資訊。" },
  { title: "預約資料處理", text: "預約資料會經由 Cloudflare Worker 傳送至博創數科管理的 Google 試算表，供團隊聯繫、確認時間與處理諮詢需求。網站不會將表單內容公開顯示。" },
  { title: "資料選擇與利用", text: "除已取得同意或有合法依據外，博創數科不會將個人資料用於未告知的目的，也不會任意出售、交換或出租個人資料。" },
  { title: "資料安全", text: "博創數科採取合理的管理與安全措施，限制資料存取權限，以降低未經授權存取、竄改、毀損或洩漏的風險。" },
  { title: "Cookie 與聲明更新", text: "網站可能使用 Cookie 維持正常運作與改善使用體驗。聲明內容可能因法令或技術變化調整，更新日期會標示於頁面。" },
];

export default function Privacy() {
  return <><PageHero eyebrow="PRIVACY POLICY" title="隱私權聲明" description="我們重視您的個人資料與網站使用隱私。" /><section className="section"><div className="container privacy-layout"><aside><span className="eyebrow">PRIVACY</span><h2 data-scroll-title>保護資料，<br />也是建立信任的一部分。</h2><p>本頁說明網站目前的資料處理方式。正式營運前，仍須確認完整法律條款。</p><small>頁面內容更新日期：2026/11/17</small></aside><div className="privacy-content"><p className="privacy-lead">博創數科尊重並保護使用者的隱私。預約諮詢資料僅用於聯繫與處理您的需求。</p>{sections.map((section, index) => <article key={section.title}><span>0{index + 1}</span><div><h3>{section.title}</h3><p>{section.text}</p></div></article>)}</div></div></section></>;
}
