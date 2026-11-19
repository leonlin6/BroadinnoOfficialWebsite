import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Database, MapPinned, Search, Waypoints } from "lucide-react";
import { Cta } from "@/components/Cta";
import styles from "../new-pages.module.css";
import trackStyles from "./data-analytics.module.css";

export const metadata: Metadata = {
  title: "數據分析服務",
  description: "博創數科提供區域財富指數查詢與即問即答 AI 預測規劃，協助企業將數據轉化為可行的決策依據。",
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
    <section className={styles.featureHero}><div className={"container " + styles.featureHeroGrid}><div className={styles.featureHeroCopy}><div className={styles.crumb}><Link href="/">首頁</Link><ArrowRight size={13} />數據分析服務</div><span className={styles.eyebrow}>DATA ANALYTICS</span><h1 data-scroll-title>讓資料被理解，<br />讓洞察能採取行動。</h1><p>從區域財富指數查詢，到即問即答的 AI 預測，博創數科結合數據分析、產業理解與管理觀點，協助企業從資料中找到下一步。</p><Link className={styles.lightButton} href="#analysis-paths">選擇分析服務 <ArrowUpRight size={18} /></Link></div><div className={styles.featureHeroVisual}><Image src="/images/service-data.webp" alt="數據分析儀表板" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>

    <section className={trackStyles.paths} id="analysis-paths" aria-labelledby="analysis-paths-title"><div className="container">
      <div className={trackStyles.pathsHeading}><span>CHOOSE YOUR PATH</span><h2 id="analysis-paths-title" data-scroll-title data-scroll-title-center>兩種分析方向，找到適合的入口</h2><p>依照您目前要解決的問題，選擇區域指數查詢或 AI 預測應用。</p></div>
      <div className={trackStyles.pathGrid}>
        <Link className={trackStyles.pathCard} href="/wealth-index/"><span className={trackStyles.pathIcon}><MapPinned size={31} strokeWidth={1.7} /></span><span className={trackStyles.pathNumber}>01 / WEALTH INDEX</span><h3>財務指數查詢</h3><p>以區域財富指數理解縣市、鄉鎮市區與指定地址的相對等級，支援選址、市場分析與批次比對需求。</p><strong>查看財富指數服務 <ArrowUpRight size={19} /></strong></Link>
        <Link className={`${trackStyles.pathCard} ${trackStyles.aiPath}`} href="/ai-prediction/"><span className={trackStyles.pathIcon}><BrainCircuit size={31} strokeWidth={1.7} /></span><span className={trackStyles.pathNumber}>02 / AI PREDICTION</span><h3>即問即答之 AI 預測</h3><p>將問題轉化為可分析的任務，結合企業資料與預測模型，規劃更快速的查詢、推估與決策方式。</p><strong>查看 AI 預測模組 <ArrowUpRight size={19} /></strong></Link>
      </div>
    </div></section>

    <section className={styles.editorialSection}><div className={"container " + styles.introGrid}><div><span className={styles.eyebrowDark}>FROM DATA TO DECISION</span><h2 data-scroll-title>從資料出發，<br />回到企業真正要解決的問題。</h2></div><div><p>資料倉儲、數據中台、分析模型和儀表板，各自解決不同層面的需求。我們重視資料的可用性，也重視分析結果能否幫助團隊做出更清楚的判斷。</p><p>服務方向可依企業現況調整，從資料盤點與管理、客戶分群、模型優化，到指標設計與業務應用，逐步連結資料與實際行動。</p></div></div></section>

    <section className={styles.paleSection}><div className="container"><div className={styles.sectionHead}><span className={styles.eyebrowDark}>OUR APPROACH</span><h2 data-scroll-title data-scroll-title-center>數據分析的四個環節</h2><p>以清楚的問題與可用的資料為基礎，讓分析成果更容易走進日常決策。</p></div><div className={styles.stepGrid}>{steps.map(({ icon: Icon, number, title, text }) => <article className={styles.stepCard} key={number}><span>{number}</span><Icon size={30} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.editorialSection}><div className="container"><div className={styles.sectionHead}><span className={styles.eyebrowDark}>APPLICATIONS</span><h2 data-scroll-title data-scroll-title-center>讓分析貼近實際業務情境</h2><p>以下是既有官網公開的數據分析相關案例主題。</p></div><div className={styles.applicationGrid}><Link href="/customer-data-warehouse/" className={styles.applicationCard}><span>資料管理與價值</span><h3>金控資料倉儲與應用</h3><p>以 Health Check 檢視既有系統的成本與使用效率，尋找 Data to Value 的機會。</p><b>閱讀案例 <ArrowUpRight size={17} /></b></Link><Link href="/customer-appliance/" className={styles.applicationCard}><span>客戶洞察</span><h3>客戶分群與行銷推廣</h3><p>以客戶與家庭維度理解需求，結合公開資料尋找銷售熱點與機會。</p><b>閱讀案例 <ArrowUpRight size={17} /></b></Link><Link href="/customer-loan-credit/" className={styles.applicationCard}><span>模型分析</span><h3>市場分析與信用評分</h3><p>整合多維度資料及領域知識，思考既有分析模型的調整方向。</p><b>閱讀案例 <ArrowUpRight size={17} /></b></Link></div></div></section>
    <section className={trackStyles.aiSection} id="ai-prediction" aria-labelledby="ai-prediction-title"><div className={"container " + trackStyles.aiInner}><span className={trackStyles.aiIcon}><BrainCircuit size={34} strokeWidth={1.5} /></span><div><span className={trackStyles.aiEyebrow}>AI PREDICTION</span><h2 id="ai-prediction-title" data-scroll-title>從提問到預測，規劃適合企業的 AI 應用</h2><p>可依據資料現況與業務情境，討論自然語言提問、模型預測與結果解讀的導入方式。</p></div><Link href="/ai-prediction/">查看 AI 預測模組 <ArrowUpRight size={18} /></Link></div></section>
    <Cta />
  </>;
}
