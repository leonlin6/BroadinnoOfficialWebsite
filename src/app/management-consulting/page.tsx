import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import Image from "next/image";
import Link from "next/link";
import { ScrollUnderline } from "@/components/ScrollUnderline";
import { ArrowRight, BarChart3, ChartNoAxesCombined, ChevronRight, ClipboardCheck, Database, Layers3, Lightbulb, MessageSquareMore, Network, Rocket, Search, Settings2, ShieldCheck, Target, UsersRound } from "lucide-react";
import styles from "./management-consulting.module.css";

export const metadata: Metadata = {
  title: "管理顧問服務｜博創數科 Broadinno",
  description: "博創數科以策略與管理顧問服務，協助企業從問題診斷、策略規劃到執行落地，建立可持續成長的營運體系。",
  alternates: { canonical: "/management-consulting/" },
};

const positioning = [
  { icon: Search, title: "問題診斷", text: "深入理解企業營運現況，找出影響績效與成長的關鍵問題。" },
  { icon: Target, title: "策略規劃", text: "結合產業趨勢與企業目標，擬定具可行性與優先順序的策略方案。" },
  { icon: Layers3, title: "執行落地", text: "將策略轉化為具體計畫，推動跨部門協作與落實執行。" },
  { icon: BarChart3, title: "成效追蹤", text: "建立指標與追蹤機制，評估成果並持續優化。" },
];

const services = [
  { icon: Target, title: "策略規劃", text: "協助企業明確業務發展方向，規劃轉型重點與行動路線圖，打造可執行且具成長性的策略。", image: "/images/service-strategy.webp", alt: "象徵策略逐步推進的階梯模型" },
  { icon: Settings2, title: "流程優化", text: "分析並重新設計企業關鍵流程，提升作業效率、降低資源浪費，並強化跨部門協同運作。", image: "/images/service-process.webp", alt: "顧問檢視企業流程圖" },
  { icon: ChartNoAxesCombined, title: "數據分析與應用", text: "運用儀表板、KPI 分析與數據洞察，協助企業以數據驅動決策，提升營運透明度與管理精準度。", image: "/images/service-data.webp", alt: "筆記型電腦顯示數據分析儀表板" },
  { icon: UsersRound, title: "組織與管理改善", text: "協助優化組織架構、角色職責、治理機制與管理運作，並提供領導與管理能力的強化支持。", image: "/images/service-organization.webp", alt: "以積木呈現組織架構與團隊分工" },
];

const process = [
  { icon: MessageSquareMore, title: "需求訪談", text: "深入了解企業目標、營運挑戰與利害關係人需求，確認專案範圍與期望成果。" },
  { icon: ClipboardCheck, title: "現況診斷", text: "盤點現有流程、組織、系統與數據，分析問題成因與改善機會，建立客觀現況評估。" },
  { icon: Lightbulb, title: "解決方案規劃", text: "提出整合性的改善方案，包含策略方向、執行計畫、所需資源與預期效益。" },
  { icon: Rocket, title: "執行輔導", text: "協助企業推動方案落地，進行專案管理、變革溝通與能力建置，確保執行順利。" },
  { icon: BarChart3, title: "成效追蹤", text: "依據關鍵指標持續追蹤執行成效，檢視成果並提出優化建議。" },
];

const benefits = [
  { icon: BarChart3, title: "提升決策品質", text: "以數據與分析洞察為依據，協助決策團隊掌握關鍵資訊。" },
  { icon: Settings2, title: "強化流程效率", text: "優化關鍵流程，減少重工與浪費，提升營運效率。" },
  { icon: Database, title: "建立數據驅動管理模式", text: "導入 KPI 與績效儀表板，提升營運透明度與管理精準度。" },
  { icon: Network, title: "支援組織轉型與成長", text: "強化組織協作與執行力，支援企業持續變革與成長。" },
];

function CenterHeading({ title, description }: { title: string; description: string }) {
  return <div className={styles.centerHeading}><div className={styles.titleUnderlineGroup}><h2>{title}</h2><ScrollUnderline className={styles.centerUnderline} /></div><p>{description}</p></div>;
}

export default function ManagementConsulting() {
  return <>
    <section className={styles.hero}>
      <Image className={styles.heroImage} src="/images/consulting-hero.webp" alt="管理顧問與企業團隊討論策略" fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={"container " + styles.heroInner}><div className={styles.heroCopy}>
        <div className={styles.heroEyebrow}>管理顧問服務</div>
        <h1 data-scroll-title>以策略與管理顧問服務，<br />協助企業建立可持續成長<br />的營運體系</h1>
        <p>協助企業釐清關鍵問題、建構可執行的策略、優化營運流程，<br className={styles.desktopBreak} />並運用數據與管理方法提升決策品質，實現穩健且可持續的成長。</p>
        <div className={styles.heroActions}><Link className={styles.primaryButton} href="/consultation-appointment/">立即預約顧問諮詢 <ArrowRight size={18} /></Link><Link className={styles.secondaryButton} href="#service-process">了解服務流程</Link></div>
      </div></div>
    </section>

    <section className={styles.positioning} id="about"><div className="container">
      <div className={styles.positionIntro}><div className={styles.sectionLabel}><div className={styles.titleUnderlineGroup}><h2>服務定位</h2><ScrollUnderline className={styles.labelUnderline} /></div></div><p>博創數科（Broadinno）作為企業的策略顧問夥伴，結合產業洞察、管理方法與數據應用，協助企業從問題定義、策略擬定到執行落地，打造更高效、敏捷且具競爭力的營運體系。</p></div>
      <div className={styles.positionGrid}>{positioning.map(({ icon: Icon, title, text }) => <article className={styles.positionCard} key={title}><div className={styles.positionIcon}><Icon size={31} strokeWidth={1.7} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className={styles.services} id="services"><div className="container">
      <CenterHeading title="核心顧問服務" description="從策略、流程、數據到組織管理，提供整合性的管理顧問服務，協助企業提升營運績效與整體競爭力。" />
      <div className={styles.serviceGrid}>{services.map(({ icon: Icon, title, text, image, alt }) => <article className={styles.serviceCard} key={title}><Image src={image} alt={alt} fill sizes="(max-width: 700px) 100vw, 50vw" /><div className={styles.serviceCardShade} /><div className={styles.serviceCardCopy}><Icon size={34} strokeWidth={1.55} /><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className={styles.process} id="service-process"><div className="container">
      <CenterHeading title="顧問服務流程" description="以系統化、務實的顧問流程，從需求釐清到成效驗證，確保專案能落地執行並創造實質價值。" />
      <div className={styles.processGrid}>{process.map(({ icon: Icon, title, text }, index) => <div className={styles.processItem} key={title}><article className={styles.processCard}><div className={styles.processIcon}><Icon size={27} strokeWidth={1.6} /></div><h3><span>{String(index + 1).padStart(2, "0")}</span>{title}</h3><p>{text}</p></article>{index < process.length - 1 && <ChevronRight className={styles.processArrow} size={22} aria-hidden="true" />}</div>)}</div>
    </div></section>

    <section className={styles.benefits}><div className={"container " + styles.benefitsGrid}><div className={styles.benefitsCopy}><div className={styles.sectionLabel}><div className={styles.titleUnderlineGroup}><h2>顧問服務價值</h2><ScrollUnderline className={styles.labelUnderline} /></div></div><p className={styles.benefitsIntro}>透過專業的管理顧問服務，協助企業在決策、流程、數據與組織面全面提升，創造可衡量的營運與成長價值。</p><div className={styles.benefitList}>{benefits.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={27} strokeWidth={1.6} /><h3>{title}</h3><p>{text}</p></article>)}</div></div><div className={styles.benefitImage}><Image src="/images/service-data.webp" alt="展示分析圖表的營運數據儀表板" fill sizes="(max-width: 800px) 100vw, 50vw" /><div className={styles.benefitImageLabel}><ShieldCheck size={17} /> 數據與策略，連結每一步決策</div></div></div></section>

    <Cta
      id="contact"
      title="立即與博創數科顧問團隊聯繫"
      description="歡迎與我們討論您的企業挑戰與發展目標，我們將提供專業評估與量身規劃的管理顧問解決方案。從策略到落地執行，提供最適合您的管理顧問方案。"
      buttonLabel="預約一對一諮詢"
    />
  </>;
}
