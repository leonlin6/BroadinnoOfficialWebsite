import Link from "next/link";
import { ExperienceBadge } from "@/components/ExperienceBadge";
import { cases } from "@/lib/content";
import {
  ArrowRight, BrainCircuit, ChartNoAxesCombined, Database,
  Globe2, Layers3, MapPin, Network, RefreshCw,
  ShieldCheck, SlidersHorizontal, Target, TrendingUp, UsersRound,
} from "lucide-react";
import styles from "./loan-credit-case.module.css";

const scatterPoints = Array.from({ length: 58 }, (_, index) => ({
  x: 12 + index * 1.48,
  y: 89 - index * 1.08 + Math.sin(index * 2.4) * 12 + Math.cos(index * 0.8) * 5,
}));

const marketFactors = [
  { icon: Globe2, title: "總體經濟", text: "觀察總體經濟環境與景氣變化，掌握市場風險趨勢。", visual: "line" },
  { icon: MapPin, title: "區域發展", text: "結合區域經濟活動與人口特性，分析不同地區的市場機會。", visual: "map" },
  { icon: UsersRound, title: "就業狀況", text: "分析就業市場與收入結構，評估客戶還款能力。", visual: "bars" },
  { icon: Layers3, title: "多重資料來源", text: "整合內外部資料，建立更全面的客戶風險與行為視角。", visual: "data" },
] as const;

const modelSteps = [
  { icon: Database, title: "資料整合", text: "彙整客戶資料、交易紀錄與外部資料。" },
  { icon: SlidersHorizontal, title: "特徵與變數", text: "依據業務與風險經驗，萃取影響信用風險的關鍵特徵。" },
  { icon: Network, title: "模型分析", text: "建立評分模型，分析客戶風險與行為模式。" },
  { icon: ShieldCheck, title: "評分與驗證", text: "產出信用評分，檢視模型辨識能力與穩定性。" },
  { icon: RefreshCw, title: "持續優化", text: "依市場變化與新資料，持續調整與提升模型表現。" },
] as const;

const improvements = [
  { icon: SlidersHorizontal, title: "既有模型調優", text: "檢視模型結構與參數設定，提升風險辨識能力。" },
  { icon: Layers3, title: "不同維度資料整合", text: "整合客戶、交易與外部資料，強化評估的全面性。" },
  { icon: BrainCircuit, title: "可控式 AI 學習模型", text: "在可控與可解釋的基礎上，結合領域知識與實證分析，持續優化模型表現。" },
] as const;

function Accent() {
  return <span className={styles.accent} aria-hidden="true" />;
}

function RiskDashboard() {
  return (
    <div className={styles.dashboard} aria-label="信用風險分析概念儀表板，圖表均為示意資料">
      <div className={styles.dashboardHead}><strong>信用風險分析 <span>概念示意</span></strong><small>非實際客戶資料</small></div>
      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardPanel}><h3>風險分層 <small>示意</small></h3><div className={styles.riskBody}><span className={styles.riskDonut}><b>風險分層</b></span><ul><li><i />低風險</li><li><i />中風險</li><li><i />高風險</li></ul></div></div>
        <div className={styles.dashboardPanel}><h3>變數影響度 <small>示意</small></h3><div className={styles.factorBars}>{[["還款紀錄",90],["負債比例",73],["收入穩定性",61],["往來期間",46]].map(([label,value]) => <div key={label}><span>{label}</span><i><b style={{ width: `${value}%` }} /></i></div>)}</div></div>
        <div className={styles.dashboardPanel}><h3>模型評分分布 <small>示意</small></h3><svg className={styles.scatter} viewBox="0 0 110 100" preserveAspectRatio="none" aria-hidden="true"><path d="M8 8 V93 H106" fill="none" stroke="#5d91a9" strokeWidth="1" />{scatterPoints.map(({ x,y }, index) => <circle cx={x} cy={Math.max(10,Math.min(92,y))} r="1.2" fill={index % 3 === 0 ? "#48e6d6" : "#35a8ed"} key={index} />)}<path d="M10 87 Q55 60 105 21" fill="none" stroke="#00dac9" strokeWidth="1.5" /></svg></div>
        <div className={styles.dashboardPanel}><h3>風險趨勢預測 <small>示意</small></h3><svg className={styles.trend} viewBox="0 0 110 100" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="loanTrendFill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#2fe2d0" stopOpacity=".7" /><stop offset="1" stopColor="#2fe2d0" stopOpacity="0" /></linearGradient></defs><path d="M4 88 C26 85 31 78 45 64 S72 25 106 18 L106 96 L4 96 Z" fill="url(#loanTrendFill)" /><path d="M4 88 C26 85 31 78 45 64 S72 25 106 18" fill="none" stroke="#73ffff" strokeWidth="2" /><path d="M4 96 H108" stroke="#5d91a9" strokeWidth="1" /></svg></div>
      </div>
    </div>
  );
}

export function LoanCreditCasePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="loan-title">
        <div className={"container " + styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>CASE STUDY / 金融服務</span>
            <h1 id="loan-title" data-scroll-title>信用貸款市場分析<br />及客戶信用評分</h1>
            <Accent />
            <p>整合總體經濟、區域發展與就業狀況等多維資料，結合領域知識、專家判斷與實證，優化信用評分模型。</p>
            <div className={styles.heroTags}><span>信用風險</span><span>評分模型</span><span>市場分析</span><span>模型優化</span></div>
            <ExperienceBadge {...cases[3].experience} className={styles.experience} />
          </div>
          <RiskDashboard />
        </div>
      </section>

      <section className={styles.market} aria-labelledby="market-title">
        <div className="container">
          <div className={styles.sectionHead}><div><Accent /><h2 id="market-title" data-scroll-title>市場分析維度</h2></div><p>從多元資料觀察信用貸款市場環境，建立更完整的風險評估與客戶洞察基礎。</p></div>
          <div className={styles.marketGrid}>
            {marketFactors.map(({ icon: Icon, title, text, visual }, index) => <article className={`${styles.marketCard} ${styles[`marketCard${index + 1}`]}`} key={title}><Icon className={styles.factorIcon} size={32} strokeWidth={1.7} /><div><h3>{title}</h3><p>{text}</p></div><span className={`${styles.miniVisual} ${styles[visual]}`} aria-hidden="true">{visual === "line" && <svg viewBox="0 0 100 48"><polyline points="0,43 13,32 23,37 36,16 48,23 61,9 74,17 86,6 100,1" fill="none" stroke="#0baad0" strokeWidth="2" /></svg>}{visual === "bars" && [25,43,61,82].map((height,index) => <i key={index} style={{ height: `${height}%` }} />)}{visual === "map" && <MapPin size={55} />}{visual === "data" && <Database size={55} />}</span></article>)}
            <div className={styles.marketCore}><Database size={48} strokeWidth={1.5} /><strong>信用貸款<br />市場分析</strong></div>
          </div>
        </div>
      </section>

      <section className={styles.model} aria-labelledby="model-title">
        <div className="container"><div className={styles.sectionHead}><div><Accent /><h2 id="model-title" data-scroll-title>信用評分模型概念</h2></div><p>模型與評分準確度來自領域知識、專家判斷、變數選擇與實證分析，並隨資料與市場變化持續動態學習。</p></div><div className={styles.modelFlow}>{modelSteps.map(({ icon: Icon, title, text }, index) => <div className={styles.modelStep} key={title}><div className={styles.modelTop}><Icon size={29} strokeWidth={1.7} /><h3>{title}</h3></div><p>{text}</p><span className={styles.stepVisual} aria-hidden="true">{index === 0 ? <Database /> : index === 1 ? <Layers3 /> : index === 2 ? <ChartNoAxesCombined /> : index === 3 ? <ShieldCheck /> : <TrendingUp />}</span>{index < modelSteps.length - 1 && <ArrowRight className={styles.modelArrow} size={25} strokeWidth={2.4} aria-hidden="true" />}</div>)}</div></div>
      </section>

      <section className={styles.improve} aria-labelledby="improve-title">
        <div className={"container " + styles.improveGrid}>
          <div className={styles.improveIntro}><Accent /><h2 id="improve-title" data-scroll-title>模型優化與精進</h2><p>針對既有模型的限制進行分析與調整，透過更多維度的資料整合與可控式 AI 學習，提升評分模型的穩定性與應用價值。</p></div>
          <div className={styles.challengeCard}><h3><Target size={29} />既有模型的挑戰</h3><ul><li>資料維度有限，客戶風險辨識度不足</li><li>市場環境變化，模型需持續調整</li><li>缺乏跨來源資料整合，影響評估完整性</li></ul></div>
          <div className={styles.improvementList}>{improvements.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={31} strokeWidth={1.65} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className={styles.outcomes} aria-labelledby="outcomes-title"><div className={"container " + styles.outcomesGrid}><div><h2 id="outcomes-title" data-scroll-title>客戶成效</h2><p>結合市場分析、資料整合與信用評分模型調優。</p></div><div><TrendingUp size={44} strokeWidth={1.6} /><strong>2.3 倍</strong><p>業務提升</p></div><div><ShieldCheck size={44} strokeWidth={1.6} /><strong>70%</strong><p>違約率下降</p></div></div></section>

      <section className={styles.cta} aria-labelledby="loan-cta-title"><div className={"container " + styles.ctaInner}><div><h2 id="loan-cta-title" data-scroll-title>讓授信分析更精準，讓風險管理更有依據</h2><p>結合市場洞察、評分模型與顧問經驗，協助金融機構提升授信決策品質。</p></div><Link href="/consultation-appointment/">預約諮詢 <ArrowRight size={19} /></Link></div></section>
    </div>
  );
}
