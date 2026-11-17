import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, Database, Search, Waypoints } from "lucide-react";
import { Cta } from "@/components/Cta";
import styles from "../new-pages.module.css";

export const metadata: Metadata = {
  title: "數據分析服務",
  description: "博創數科從資料盤點、分析到業務應用，協助企業將數據轉化為可行的決策依據。",
  alternates: { canonical: "/data-analytics/" },
};

const steps = [
  { icon: Search, number: "01", title: "釐清業務問題", text: "從企業目標與使用情境出發，確認需要回答的問題與決策需求。" },
  { icon: Database, number: "02", title: "盤點與整合資料", text: "理解資料來源、品質與管理方式，建立後續分析可使用的基礎。" },
  { icon: ChartNoAxesCombined, number: "03", title: "分析並形成洞察", text: "透過分群、指標或模型等方法，探索資料背後的趨勢與關係。" },
  { icon: Waypoints, number: "04", title: "連結行動與追蹤", text: "將分析結果放進業務流程，並設定檢視成效的方式。" },
];

export default function DataAnalytics() {
  return <>
    <section className={styles.featureHero}><div className={"container " + styles.featureHeroGrid}><div className={styles.featureHeroCopy}><div className={styles.crumb}><Link href="/">首頁</Link><ArrowRight size={13} />數據分析服務</div><span className={styles.eyebrow}>DATA ANALYTICS</span><h1>讓資料被理解，<br />讓洞察能採取行動。</h1><p>企業擁有的資料，只有連結具體問題與決策，才能真正發揮價值。博創數科結合數據分析、產業理解與管理觀點，協助企業從資料中找到下一步。</p><Link className={styles.lightButton} href="/consultation-appointment/">討論數據需求 <ArrowUpRight size={18} /></Link></div><div className={styles.featureHeroVisual}><Image src="/images/service-data.png" alt="數據分析儀表板" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>

    <section className={styles.editorialSection}><div className={"container " + styles.introGrid}><div><span className={styles.eyebrowDark}>FROM DATA TO DECISION</span><h2>從資料出發，<br />回到企業真正要解決的問題。</h2></div><div><p>資料倉儲、數據中台、分析模型和儀表板，各自解決不同層面的需求。我們重視資料的可用性，也重視分析結果能否幫助團隊做出更清楚的判斷。</p><p>服務方向可依企業現況調整，從資料盤點與管理、客戶分群、模型優化，到指標設計與業務應用，逐步連結資料與實際行動。</p></div></div></section>

    <section className={styles.paleSection}><div className="container"><div className={styles.sectionHead}><span className={styles.eyebrowDark}>OUR APPROACH</span><h2>數據分析的四個環節</h2><p>以清楚的問題與可用的資料為基礎，讓分析成果更容易走進日常決策。</p></div><div className={styles.stepGrid}>{steps.map(({ icon: Icon, number, title, text }) => <article className={styles.stepCard} key={number}><span>{number}</span><Icon size={30} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.editorialSection}><div className="container"><div className={styles.sectionHead}><span className={styles.eyebrowDark}>APPLICATIONS</span><h2>讓分析貼近實際業務情境</h2><p>以下是既有官網公開的數據分析相關案例主題。</p></div><div className={styles.applicationGrid}><Link href="/customer-data-warehouse/" className={styles.applicationCard}><span>資料管理與價值</span><h3>資料倉儲建置與應用</h3><p>從資料系統的管理、成本與使用效率出發，探索 Data to Value 的應用機會。</p><b>閱讀案例 <ArrowUpRight size={17} /></b></Link><Link href="/customer-appliance/" className={styles.applicationCard}><span>客戶洞察</span><h3>客戶分群與行銷推廣</h3><p>以客戶與家庭維度理解需求，結合公開資料尋找銷售熱點與機會。</p><b>閱讀案例 <ArrowUpRight size={17} /></b></Link><Link href="/customer-loan-credit/" className={styles.applicationCard}><span>模型分析</span><h3>市場分析與信用評分</h3><p>整合多維度資料及領域知識，思考既有分析模型的調整方向。</p><b>閱讀案例 <ArrowUpRight size={17} /></b></Link></div></div></section>
    <Cta />
  </>;
}
