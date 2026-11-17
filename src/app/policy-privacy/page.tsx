import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "隱私權聲明", description: "博創數科網站隱私權聲明。", alternates: { canonical: "/policy-privacy/" } };

const sections = [
  { title: "適用範圍", text: "本聲明適用於瀏覽或使用博創數科網站服務時，涉及的個人資料蒐集、處理、利用與保護。連結至其他網站時，請另行參閱該網站的隱私權聲明。" },
  { title: "資料蒐集", text: "單純瀏覽網站時，網站不會主動蒐集您的身分資料。基於網站運作及安全管理，系統可能記錄連線設備的 IP 位址等使用資訊。" },
  { title: "資料選擇與利用", text: "除已取得同意或有合法依據外，博創數科不會將個人資料用於未告知的目的，也不會任意出售、交換或出租個人資料。" },
  { title: "資料安全", text: "博創數科採取合理的管理與安全措施，限制資料存取權限，以降低未經授權存取、竄改、毀損或洩漏的風險。" },
  { title: "Cookie 與聲明更新", text: "網站可能使用 Cookie 維持正常運作與改善使用體驗。聲明內容可能因法令或技術變化調整，更新日期會標示於頁面。" },
];

export default function Privacy() {
  return <><PageHero eyebrow="PRIVACY POLICY" title="隱私權聲明" description="我們重視您的個人資料與網站使用隱私。" /><section className="section"><div className="container privacy-layout"><aside><span className="eyebrow">PRIVACY</span><h2>保護資料，<br />也是建立信任的一部分。</h2><p>以下為原站聲明的重點整理。正式使用前，仍須以經確認的完整法律條款取代。</p><small>原站聲明更新日期：2025/04/09</small></aside><div className="privacy-content"><p className="privacy-lead">博創數科尊重並保護使用者的隱私。這份初版頁面整理現行網站的主要原則，方便先確認版面與資訊結構。</p>{sections.map((section, index) => <article key={section.title}><span>0{index + 1}</span><div><h3>{section.title}</h3><p>{section.text}</p></div></article>)}</div></div></section></>;
}
