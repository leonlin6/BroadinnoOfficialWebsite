import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, Heart, Landmark, Layers3,
  Rocket, Target, Trophy, UsersRound,
} from "lucide-react";
import { ScrollUnderline } from "@/components/ScrollUnderline";
import titles from "../service-titles.module.css";
import styles from "./main-experties.module.css";

export const metadata: Metadata = {
  title: "主要專業領域",
  description: "博創數科結合金融科技、支付、人工智慧、區塊鏈、數據分析與數位轉型能力，協助企業探索可落地的商業方案。",
  alternates: { canonical: "/main-experties/" },
};

const domains = [
  {
    number: "01",
    title: "金融科技 FinTech",
    focus: "數位金融・風險管理・客戶體驗",
    image: "/images/main-expertise-finance.jpg",
    alt: "金融專業團隊討論數據分析與業務策略",
    text: "結合金融產業洞察與科技創新，協助金融機構探索數位服務及資料應用。",
    points: ["金融業務數位化與流程優化", "新型金融服務與產品設計", "風險管理與合規分析", "提升營運效率與客戶體驗"],
  },
  {
    number: "02",
    title: "支付應用／新興支付",
    focus: "支付整合・服務體驗・交易安全",
    image: "/images/main-expertise-payments.jpg",
    alt: "手機在收銀櫃檯完成感應支付",
    text: "關注多元支付場景與支付使用體驗，串聯線上線下需求，探索新的服務方向。",
    points: ["多元支付整合（線上／線下／行動）", "新興支付模式評估與導入", "支付流程優化與體驗提升", "交易安全與風險控管"],
  },
  {
    number: "03",
    title: "人工智慧 AI 應用",
    focus: "智能應用・風險預警・營運自動化",
    image: "/images/main-expertise-ai.jpg",
    alt: "專業人員檢視人工智慧分析畫面",
    text: "運用 AI 與機器學習，協助企業在行銷、風控、營運等場景評估智慧應用。",
    points: ["業務與營運流程智能化", "風險偵測與預警模型建置", "客戶洞察與精準行銷", "自動化與營運效率提升"],
  },
  {
    number: "04",
    title: "區塊鏈應用",
    focus: "可信記錄・跨機構協作・數位資產",
    image: "/images/main-expertise-blockchain.jpg",
    alt: "以相連的透明方塊呈現區塊鏈技術",
    text: "結合可信任機制與分散式技術，探索在金融、支付、資產及供應鏈場景的應用。",
    points: ["數位資產與價值代幣化", "交易與資料的可信記錄", "供應鏈與跨機構協作", "提升透明度與信任機制"],
  },
  {
    number: "05",
    title: "數據分析",
    focus: "數據治理・市場洞察・決策支援",
    image: "/images/main-expertise-data.jpg",
    alt: "數據分析團隊檢視企業營運儀表板",
    text: "建構完整的數據分析與洞察機制，將數據轉化為可執行的業務策略與營運改善。",
    points: ["數據整合與品質治理", "客戶與市場行為分析", "營運績效分析與優化", "交易視覺化與決策支援"],
  },
  {
    number: "06",
    title: "數位轉型",
    focus: "策略藍圖・流程優化・系統整合",
    image: "/images/main-expertise-digital.jpg",
    alt: "跨領域團隊討論企業數位轉型規劃",
    text: "從策略規劃、流程優化到系統導入，協助企業建立敏捷、數據化與創新的營運能力。",
    points: ["數位轉型策略與藍圖規劃", "關鍵流程優化與自動化", "系統整合與數位工具導入", "組織與人才的數位能力提升"],
  },
] as const;

const focus = [
  { icon: Landmark, title: "深厚產業理解", text: "聚焦金融、支付等多元產業，掌握市場趨勢與實務挑戰" },
  { icon: BarChart3, title: "數據驅動決策", text: "以數據洞察累積證據，提升決策品質與成效" },
  { icon: Layers3, title: "跨域技術整合", text: "串聯金融、AI、區塊鏈等技術，打造完整解決方案" },
  { icon: Target, title: "可執行的方案", text: "從策略、規劃到落地執行，讓創新產生實質價值" },
  { icon: UsersRound, title: "長期陪跑夥伴", text: "以顧問與實作並進的方式，持續優化企業成長的路徑" },
];

const applications = [
  { id: "finance-payments", image: "/images/main-expertise-payments.jpg", alt: "手機支付", title: "金融與支付創新，\n提升服務效率與客戶體驗", text: "結合金融科技與多元支付應用，協助企業優化交易流程、拓展服務場景，打造更便利且安全的客戶體驗。", points: ["優化支付流程與降低交易成本", "導入新興支付，拓展多元應用場景", "強化風險控管與交易安全", "提升客戶滿意度與服務黏著度"] },
  { id: "ai-data", image: "/images/main-expertise-ai.jpg", alt: "人工智慧與數據分析", title: "AI 與數據分析，\n驅動企業決策升級", text: "運用 AI 與數據分析，從大量資料中挖掘商業洞察，協助企業精準判斷、快速應變，提升營運效率與成長。", points: ["建置 AI 模型與智能應用場景", "整合與分析多元數據，洞察商機", "強化預測與風險預警能力", "以數據驅動更快、更準的決策"] },
  { id: "blockchain-digital", image: "/images/main-expertise-digital.jpg", alt: "企業數位轉型", title: "區塊鏈與數位轉型，\n打造可持續的未來能力", text: "導入區塊鏈提升可信度與協作效率，並以數位轉型重塑營運模式，為企業建立長期、可持續的競爭優勢。", points: ["透過區塊鏈強化資料可信與透明度", "建構跨組織的協作與新模式", "推動營運流程數位化與自動化", "建立敏捷、可擴展的長期營運能力"] },
];

const outcomes = [
  { icon: BarChart3, title: "提升決策效率", text: "以數據與分析洞察，加速判斷與資源配置" },
  { icon: UsersRound, title: "強化跨部門協作", text: "整合流程與資訊，提升溝通效率與執行力" },
  { icon: Rocket, title: "加速創新落地", text: "從策略到實作，縮短導入時程並創造效益" },
  { icon: Heart, title: "優化客戶體驗", text: "打造更便捷、安全、個人化的服務體驗" },
  { icon: Trophy, title: "建立長期競爭力", text: "強化營運韌性與創新能力，支持企業持續成長" },
];

export default function MainExpertise() {
  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="expertise-title">
      <Image className={styles.heroImage} src="/images/main-expertise-hero.jpg" alt="" fill priority sizes="100vw" />
      <div className={styles.heroWash} aria-hidden="true" />
      <div className={styles.heroFacet} aria-hidden="true" />
      <svg className={styles.heroChart} viewBox="0 0 450 175" preserveAspectRatio="none" aria-hidden="true">
        <path className={styles.chartGrid} d="M0 30H450M0 75H450M0 120H450M50 0V175M145 0V175M240 0V175M335 0V175" />
        <path className={styles.chartLine} d="M0 136 C65 144 82 78 140 100 S205 130 255 76 S338 79 450 17" />
      </svg>
      <div className={`container ${styles.heroInner}`}>
        <div className={titles.heroCopy}>
          <h1 id="expertise-title" data-scroll-title>主要專業領域</h1>
          <p>結合產業洞察、數據能力與多元技術，<br />為企業打造可落地的數位轉型與創新方案。</p>
        </div>
      </div>
    </section>

    <section className={styles.domains} id="domains" aria-labelledby="domains-title">
      <div className="container">
        <div className={styles.sectionIntro}>
          <div className={titles.titleUnderlineGroup}><h2 id="domains-title">以產業洞察與數位技術，驅動企業轉型與創新</h2><ScrollUnderline className={titles.titleUnderline} /></div>
          <p>博創數科（Broadinno）結合金融科技、支付、AI、區塊鏈、數據分析與數位轉型能力，<br className={styles.desktopBreak} />從策略規劃到落地執行，協助企業探索適合的商業應用與成長方向。</p>
        </div>
        <div className={styles.domainList}>
          {domains.map((domain, index) => {
            const visual = <div className={styles.domainImage} key="visual"><Image src={domain.image} alt={domain.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>;
            const copy = <div className={styles.domainCopy} key="copy">
              <div className={titles.titleLine}><span className={titles.number}>{domain.number}</span><span className={titles.titleRule} aria-hidden="true" /><h3 data-scroll-title>{domain.title}</h3></div>
              <p className={styles.domainFocus}>{domain.focus}</p>
              <p className={styles.domainDescription}>{domain.text}</p>
              <ul className={styles.domainPoints} aria-label={`${domain.title}服務重點`}>{domain.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>;
            return <article className={styles.domainRow} key={domain.number}>{index % 2 === 1 ? <>{copy}{visual}</> : <>{visual}{copy}</>}</article>;
          })}
        </div>
      </div>
    </section>

    <section className={styles.focusSection} aria-labelledby="focus-title"><div className="container">
      <div className={styles.secondaryHeading}><div className={titles.titleUnderlineGroup}><h2 id="focus-title">從理解需求到推動落地</h2><ScrollUnderline className={titles.titleUnderline} /></div></div>
      <div className={styles.focusGrid}>{focus.map(({ icon: Icon, title, text }) => <article className={styles.focusItem} key={title}><Icon size={28} strokeWidth={1.7} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className={styles.applications} aria-labelledby="applications-title"><div className="container">
      <div className={styles.secondaryHeading}><div className={titles.titleUnderlineGroup}><h2 id="applications-title">專業落地，創造業務價值</h2><ScrollUnderline className={titles.titleUnderline} /></div><p>讓不同領域的專業能力，回應企業實際的服務、決策與營運需求。</p></div>
      <div className={styles.applicationGrid}>{applications.map((item) => <article className={styles.applicationCard} id={item.id} key={item.id}>
        <div className={styles.applicationImage}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
        <div className={styles.applicationBody}><h3>{item.title.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h3><p>{item.text}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
      </article>)}</div>
    </div></section>

    <section className={styles.outcomes} aria-labelledby="outcomes-title"><div className="container">
      <div className={styles.secondaryHeading}><div className={titles.titleUnderlineGroup}><h2 id="outcomes-title">為企業帶來的關鍵成效</h2><ScrollUnderline className={titles.titleUnderline} /></div></div>
      <div className={styles.outcomeGrid}>{outcomes.map(({ icon: Icon, title, text }) => <article className={styles.outcomeItem} key={title}><Icon size={27} strokeWidth={1.7} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className={styles.cta} aria-labelledby="expertise-cta-title"><div className={`container ${styles.ctaInner}`}>
      <h2 className={titles.ctaTitle} id="expertise-cta-title" data-scroll-title data-scroll-title-center>讓專業領域成為企業成長的核心動能</h2>
      <p>與博創數科的專業顧問團隊對談，共同探索適合企業的創新與數位轉型方案。</p>
      <Link href="/consultation-appointment/">立即預約諮詢 <ArrowRight size={18} aria-hidden="true" /></Link>
    </div></section>
  </div>;
}
