import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BarChart3, BrainCircuit, Clock3, Coins, Database,
  Layers3, MessageSquare, ShieldCheck, Target, TrendingUp,
  UsersRound, Zap,
} from "lucide-react";
import { AIPredictionRequestForm } from "./AIPredictionRequestForm";
import styles from "./ai-prediction.module.css";

export const metadata: Metadata = {
  title: "即問即答之 AI 預測模組",
  description: "了解博創數科 AI 預測模組的自然語言提問、預測分析與應用情境，並提出導入需求。",
  alternates: { canonical: "/ai-prediction/" },
};

const process = [
  { icon: MessageSquare, number: "01", title: "提出問題", text: "以自然語言描述想了解的分析議題。" },
  { icon: Database, number: "02", title: "分析數據", text: "結合可用資料與業務脈絡，確認分析依據。" },
  { icon: BarChart3, number: "03", title: "預測事件機率", text: "呈現可能結果及事件發生的相對機率。" },
  { icon: Target, number: "04", title: "輔助決策", text: "將分析結果連結到策略與後續追蹤。" },
];

const benefits = [
  { icon: Clock3, title: "縮短分析時間", text: "快速整理問題與資料，提供可討論的結果。" },
  { icon: TrendingUp, title: "掌握未來趨勢", text: "辨識可能變化與潛在風險。" },
  { icon: Target, title: "支援營運決策", text: "讓團隊有更清楚的分析依據。" },
  { icon: Layers3, title: "多元應用場景", text: "依財務、行銷、風險等情境規劃。" },
];

function PredictionDashboard() {
  return <div className={styles.dashboard} role="img" aria-label="AI 預測模組介面，呈現營收問題、趨勢圖與事件機率">
    <div className={styles.dashboardTop}><strong>BROADINNO <span>AI 預測模組</span></strong></div>
    <div className={styles.dashboardBody}>
      <div className={styles.dashboardSidebar}><span><MessageSquare size={14} />即問即答</span><span><BarChart3 size={14} />預測記錄</span><span><Layers3 size={14} />分析主題</span></div>
      <div className={styles.dashboardMain}>
        <div className={styles.question}><span>您</span>下季營收可能如何變化？</div>
        <div className={styles.answer}><b>AI</b><p>依據歷史資料與情境假設，可比較不同結果的可能性，並持續檢視影響因素。</p></div>
        <div className={styles.dashboardPanels}>
          <div className={styles.trendPanel}><strong>營收變化趨勢</strong><svg viewBox="0 0 230 92" aria-hidden="true"><path d="M 9 75 H 225 M 9 49 H 225 M 9 23 H 225" stroke="#d5e9f9" fill="none" /><path d="M 12 66 L 73 59 L 131 50 L 179 45 L 221 17" fill="none" stroke="#1882eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M 179 45 L 221 17" fill="none" stroke="#26bee8" strokeWidth="3" strokeDasharray="5 4" /><g fill="#1882eb"><circle cx="12" cy="66" r="3.5" /><circle cx="73" cy="59" r="3.5" /><circle cx="131" cy="50" r="3.5" /><circle cx="179" cy="45" r="3.5" /><circle cx="221" cy="17" r="3.5" /></g></svg><div className={styles.chartLabels}><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4 預測</span></div></div>
          <div className={styles.probabilityPanel}><strong>事件發生機率</strong><span>成長 <b>58%</b></span><i className={styles.probabilityGrowth} /><span>持平 <b>30%</b></span><i className={styles.probabilityStable} /><span>下滑 <b>12%</b></span><i className={styles.probabilityDecline} /></div>
        </div>
      </div>
    </div>
  </div>;
}

export default function AIPredictionPage() {
  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="ai-title"><div className={"container " + styles.heroGrid}><div className={styles.heroCopy}>
      <nav className={styles.breadcrumb} aria-label="麵包屑"><Link href="/">首頁</Link><ArrowRight size={13} /><Link href="/data-analytics/">數據分析服務</Link><ArrowRight size={13} /><span>AI 預測模組</span></nav>
      <span className={styles.eyebrow}>AI PREDICTION / 即問即答之 AI 預測模組</span>
      <h1 id="ai-title" data-scroll-title>讓數據回答<br />未來的<span>問題</span></h1><span className={styles.heroAccent} aria-hidden="true" />
      <p>即問即答之 AI 預測模組是一種基於人工智慧的即時分析技術，能迅速分析數據，並提供預測結果。<br/>
        您可以應用於財務預測、市場行銷、風險評估等領域，預測事件之機率。<br/>
        即時的 AI 預測不僅提高準確性，也大幅縮短分析時間，您可快速地掌握關鍵資訊並做出最佳選擇。</p>
      <div className={styles.heroActions}><a href="#request-form" className={styles.primaryButton}><MessageSquare size={18} />洽詢價格與申購 <ArrowRight size={17} /></a></div>
    </div><div className={styles.heroVisual} aria-hidden="true"><div className={styles.laptop}><div className={styles.laptopScreen}><PredictionDashboard /></div><div className={styles.laptopBase} /></div></div></div></section>


    <section className={styles.processSection} aria-labelledby="process-title"><div className={"container " + styles.processGrid}><div className={styles.processHeading}><span>HOW IT WORKS</span><h2 id="process-title" data-scroll-title>從問題到預測<br />四步完成分析</h2></div><div className={styles.processCards}>{process.map(({ icon: Icon, number, title, text }) => <article className={styles.processCard} key={number}><span>{number}</span><Icon size={29} strokeWidth={1.7} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.applicationsSection} id="applications" aria-labelledby="applications-title"><div className={"container " + styles.applicationsGrid}><div className={styles.applicationsHeading}><span>APPLICATION</span><h2 id="applications-title" data-scroll-title>多元應用情境</h2><p>以預測分析協助不同業務面向，提早掌握趨勢與風險。</p></div><article className={styles.applicationCard}><div className={styles.applicationCardHead}><Coins size={29} /><h3>財務預測</h3></div><p>分析財務相關資料，評估營收、需求或資金變化的可能趨勢。</p><div className={styles.financeChart} aria-hidden="true"><span style={{height:"25%"}}/><span style={{height:"44%"}}/><span style={{height:"36%"}}/><span style={{height:"61%"}}/><span style={{height:"74%"}}/><span style={{height:"91%"}}/><svg viewBox="0 0 250 95"><path d="M 8 79 L 51 63 L 92 71 L 132 42 L 170 48 L 211 25 L 244 9" fill="none" stroke="#44e4ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></div></article><article className={styles.applicationCard}><div className={styles.applicationCardHead}><UsersRound size={29} /><h3>市場行銷</h3></div><p>評估目標客群反應與行銷成效，協助規劃更有效的策略。</p><div className={styles.marketingChart} aria-hidden="true"><span>客群 A <i style={{width:"87%"}} />42%</span><span>客群 B <i style={{width:"65%"}} />28%</span><span>客群 C <i style={{width:"44%"}} />18%</span><span>客群 D <i style={{width:"28%"}} />12%</span></div></article><article className={styles.applicationCard}><div className={styles.applicationCardHead}><ShieldCheck size={29} /><h3>風險評估</h3></div><p>針對營運、客戶或外部環境變化，規劃風險預警與機率評估。</p><div className={styles.riskChart} aria-hidden="true">{Array.from({length:16},(_,index)=><i key={index}/>)}</div></article></div></section>

    <section className={styles.showcaseSection} aria-labelledby="showcase-title"><div className={"container " + styles.showcaseGrid}><div className={styles.showcaseDashboard}><PredictionDashboard /></div><div className={styles.showcaseCopy}><span className={styles.eyebrow}>NATURAL LANGUAGE ANALYSIS</span><h2 id="showcase-title" data-scroll-title>自然語言提問，<br />快速取得預測分析</h2><span className={styles.sectionAccent} aria-hidden="true" /><div className={styles.showcaseFeature}><span><Zap size={23} /></span><div><h3>即時分析回應</h3><p>以對話方式提出問題，快速整理可討論的分析結果。</p></div></div><div className={styles.showcaseFeature}><span><BarChart3 size={23} /></span><div><h3>結果清晰呈現</h3><p>透過趨勢圖與機率資訊，輔助理解可能的變化。</p></div></div><div className={styles.showcaseFeature}><span><Layers3 size={23} /></span><div><h3>靈活的分析議題</h3><p>依業務需求，規劃適合不同情境的預測分析。</p></div></div><small>實際功能依資料與導入範圍確認。</small></div></div></section>

    <section className={styles.benefitsSection} aria-labelledby="benefits-title"><div className={"container " + styles.benefitsGrid}><div className={styles.benefitsHeading}><span>服務價值</span><h2 id="benefits-title" data-scroll-title>以 AI 預測，<br />提升決策效率</h2></div>{benefits.map(({ icon: Icon, title, text })=><article className={styles.benefit} key={title}><Icon size={29} strokeWidth={1.7} /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className={styles.requestSection} id="request-form" aria-labelledby="request-title"><div className={"container " + styles.requestGrid}><div className={styles.requestCopy}><span>GET STARTED</span><h2 id="request-title" data-scroll-title>洽詢價格與申購</h2><p>請分享您想預測的業務問題與可用資料。顧問會與您確認預測情境、導入範圍及價格，待您確認報價後辦理申購。</p><div className={styles.requestBadge}><BrainCircuit size={36} strokeWidth={1.4} /><strong>AI PREDICTION</strong></div></div><div className={styles.formCard}><AIPredictionRequestForm /></div></div></section>
    <p className={styles.footnote}>畫面中的機率數值不代表實際分析結果。實際功能與結果依資料品質、模型設計及導入範圍而定。</p>
  </div>;
}
