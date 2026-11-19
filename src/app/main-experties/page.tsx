import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollUnderline } from "@/components/ScrollUnderline";
import {
  ArrowRight, BarChart3, Blocks, BrainCircuit, Check, CreditCard, Heart,
  Landmark, Layers3, Rocket, Target, Trophy, UsersRound,
} from "lucide-react";
import styles from "./main-experties.module.css";

export const metadata: Metadata = {
  title: "主要專業領域",
  description: "博創數科結合金融科技、支付、人工智慧、區塊鏈、數據分析與數位轉型能力，協助企業探索可落地的商業方案。",
  alternates: { canonical: "/main-experties/" },
};

const focus = [
  { icon: Landmark, title: "深厚產業理解", text: "聚焦金融、支付等多元產業，掌握市場趨勢與實務挑戰" },
  { icon: BarChart3, title: "數據驅動決策", text: "以數據洞察累積證據，提升決策品質與成效" },
  { icon: Layers3, title: "跨域技術整合", text: "串聯金融、AI、區塊鏈等技術，打造完整解決方案" },
  { icon: Target, title: "可執行的方案", text: "從策略、規劃到落地執行，讓創新產生實質價值" },
  { icon: UsersRound, title: "長期陪跑夥伴", text: "以顧問與實作並進的方式，持續優化企業成長的路徑" },
];

const domains = [
  { id: "finance-payments", icon: Landmark, image: "/images/home-case-finance.png", alt: "金融商業大樓", title: "金融科技 FinTech", text: "結合金融產業洞察與科技創新，協助金融機構探索數位服務及資料應用。", points: ["金融業務數位化與流程優化", "新型金融服務與產品設計", "風險管理與合規分析", "提升營運效率與客戶體驗"] },
  { id: "finance-payments", icon: CreditCard, image: "/images/expertise-payments.png", alt: "手機感應支付", title: "支付應用／新興支付", text: "關注多元支付場景與支付使用體驗，串聯線上線下需求，探索新的服務方向。", points: ["多元支付整合（線上／線下／行動）", "新興支付模式評估與導入", "支付流程優化與體驗提升", "交易安全與風險控管"] },
  { id: "ai-data", icon: BrainCircuit, image: "/images/expertise-ai.png", alt: "AI 分析儀表板", title: "人工智慧 AI 應用", text: "運用 AI 與機器學習，協助企業在行銷、風控、營運等場景評估智慧應用。", points: ["業務與營運流程智能化", "風險偵測與預警模型建置", "客戶洞察與精準行銷", "自動化與營運效率提升"] },
  { id: "blockchain-digital", icon: Blocks, image: "/images/expertise-blockchain.png", alt: "鏈結與區塊技術", title: "區塊鏈應用", text: "結合可信任機制與分散式技術，探索在金融、支付、資產及供應鏈場景的應用。", points: ["數位資產與價值代幣化", "交易與資料的可信記錄", "供應鏈與跨機構協作", "提升透明度與信任機制"] },
  { id: "ai-data", icon: BarChart3, image: "/images/service-data.png", alt: "數據分析儀表板", title: "數據分析", text: "建構完整的數據分析與洞察機制，將數據轉化為可執行的業務策略與營運改善。", points: ["數據整合與品質治理", "客戶與市場行為分析", "營運績效分析與優化", "交易視覺化與決策支援"] },
  { id: "blockchain-digital", icon: Layers3, image: "/images/home-about-building.png", alt: "現代企業辦公建築", title: "數位轉型", text: "從策略規劃、流程優化到系統導入，協助企業建立敏捷、數據化與創新的營運能力。", points: ["數位轉型策略與藍圖規劃", "關鍵流程優化與自動化", "系統整合與數位工具導入", "組織與人才的數位能力提升"] },
];

const applications = [
  { id: "finance-payments", image: "/images/expertise-payments.png", alt: "手機支付", title: "金融與支付創新，\n提升服務效率與客戶體驗", text: "結合金融科技與多元支付應用，協助企業優化交易流程、拓展服務場景，打造更便利且安全的客戶體驗。", points: ["優化支付流程與降低交易成本", "導入新興支付，拓展多元應用場景", "強化風險控管與交易安全", "提升客戶滿意度與服務黏著度"] },
  { id: "ai-data", image: "/images/expertise-ai.png", alt: "人工智慧與數據分析", title: "AI 與數據分析，\n驅動企業決策升級", text: "運用 AI 與數據分析，從大量資料中挖掘商業洞察，協助企業精準判斷、快速應變，提升營運效率與成長。", points: ["建置 AI 模型與智能應用場景", "整合與分析多元數據，洞察商機", "強化預測與風險預警能力", "以數據驅動更快、更準的決策"] },
  { id: "blockchain-digital", image: "/images/home-about-building.png", alt: "企業數位轉型", title: "區塊鏈與數位轉型，\n打造可持續的未來能力", text: "導入區塊鏈提升可信度與協作效率，並以數位轉型重塑營運模式，為企業建立長期、可持續的競爭優勢。", points: ["透過區塊鏈強化資料可信與透明度", "建構跨組織的協作與新模式", "推動營運流程數位化與自動化", "建立敏捷、可擴展的長期營運能力"] },
];

const outcomes = [
  { icon: BarChart3, title: "提升決策效率", text: "以數據與分析洞察，加速判斷與資源配置" },
  { icon: UsersRound, title: "強化跨部門協作", text: "整合流程與資訊，提升溝通效率與執行力" },
  { icon: Rocket, title: "加速創新落地", text: "從策略到實作，縮短導入時程並創造效益" },
  { icon: Heart, title: "優化客戶體驗", text: "打造更便捷、安全、個人化的服務體驗" },
  { icon: Trophy, title: "建立長期競爭力", text: "強化營運韌性與創新能力，支持企業持續成長" },
];

function CenterHeading({ title, description }: { title: string; description?: string }) {
  return <div className={styles.centerHeading}><div className={styles.titleUnderlineGroup}><h2>{title}</h2><ScrollUnderline className={styles.titleUnderline} /></div>{description && <p>{description}</p>}</div>;
}

export default function MainExpertise() {
  return <>
    <section className={styles.hero}><Image className={styles.heroImage} src="/images/consulting-hero.png" alt="顧問向企業團隊說明數據分析" fill priority sizes="100vw" /><div className={styles.heroShade} /><div className={"container " + styles.heroInner}><div className={styles.heroCopy}><h1 data-scroll-title>主要<span>專業領域</span></h1><h2>整合數據、數位工具與科技，<br />落地可執行的商業解決方案</h2><p>博創數科（Broadinno）結合產業洞察、數據能力與多元技術，協助企業將金融科技、支付、AI、區塊鏈與數據分析等技術，轉化為可落地、可衡量的業務價值，加速企業數位轉型與創新成長。</p><div className={styles.heroActions}><Link href="/consultation-appointment/" className={styles.primaryAction}>預約專案諮詢 <ArrowRight size={17} /></Link><Link href="#domains" className={styles.secondaryAction}>了解服務內容 <ArrowRight size={17} /></Link></div></div></div><div className={styles.heroChips} aria-label="專業領域摘要"><span><Landmark size={15} />金融科技</span><span><CreditCard size={15} />支付</span><span><BrainCircuit size={15} />AI</span><span><Blocks size={15} />區塊鏈</span><span><BarChart3 size={15} />數據分析</span><span><Layers3 size={15} />數位轉型</span></div></section>

    <section className={styles.focusStrip}><div className={"container " + styles.focusGrid}>{focus.map(({ icon: Icon, title, text }) => <div className={styles.focusItem} key={title}><Icon size={31} strokeWidth={1.65} /><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></section>

    <section className={styles.domains} id="domains"><div className="container"><CenterHeading title="我們的專業領域" description="以金融科技為基礎，整合支付、AI、區塊鏈、數據分析與數位轉型，提供從策略規劃到落地執行的全方位服務，協助企業創造可持續的商業價值。" /><div className={styles.domainGrid}>{domains.map(({ id, icon: Icon, image, alt, title, text, points }) => <article className={styles.domainCard} key={title}><div className={styles.domainImage}><Image src={image} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><div className={styles.domainBody}><div className={styles.domainTitle}><Icon size={29} strokeWidth={1.6} /><h3>{title}</h3></div><p>{text}</p><ul>{points.map((point) => <li key={point}><Check size={14} strokeWidth={2.6} />{point}</li>)}</ul><a href={"#" + id} className={styles.domainArrow} aria-label={"了解" + title + "的應用情境"}><ArrowRight size={17} /></a></div></article>)}</div></div></section>

    <section className={styles.applications}><div className="container"><CenterHeading title="專業落地，創造真實業務價值" /><div className={styles.applicationList}>{applications.map((item, index) => <article className={styles.applicationRow} id={item.id} key={item.id}><div className={styles.applicationImage}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className={styles.applicationCopy}><h3>{item.title.split("\n").map((line, lineIndex) => <span key={line}>{lineIndex > 0 && <br />}{line}</span>)}</h3><p>{item.text}</p></div><ul className={styles.applicationPoints}>{item.points.map((point) => <li key={point}><Check size={17} strokeWidth={2.5} />{point}</li>)}</ul><span className={styles.rowNumber}>0{index + 1}</span></article>)}</div></div></section>

    <section className={styles.outcomes}><div className="container"><CenterHeading title="為企業帶來的關鍵成效" /><div className={styles.outcomeGrid}>{outcomes.map(({ icon: Icon, title, text }) => <article className={styles.outcomeCard} key={title}><Icon size={32} strokeWidth={1.7} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.cta}><div className={"container " + styles.ctaInner}><h2 data-scroll-title>讓專業領域成為企業成長的核心動能</h2><p>與博創數科的專業顧問團隊對談，<br />共同探索最適合企業的創新與數位轉型方案。</p><Link href="/consultation-appointment/">立即預約諮詢 <ArrowRight size={18} /></Link></div></section>
  </>;
}
