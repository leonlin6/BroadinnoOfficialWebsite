import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeIntro } from "@/components/HomeIntro";
import { ScrollUnderline } from "@/components/ScrollUnderline";
import {
  ArrowRight, BarChart3, Blocks, CreditCard, Gem, Landmark, Layers3,
  Lightbulb, Network, Rocket, Search, Settings2, Target, UsersRound,
} from "lucide-react";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: { absolute: "博創數科 Broadinno｜以數據與科技驅動企業創新" },
  description: "博創數科結合管理顧問、專案辦公室與數據科技，協助企業釐清問題、規劃策略並推動轉型落地。",
  alternates: { canonical: "/" },
};

const strengths = [
  { icon: BarChart3, title: "數據驅動", text: "以數據洞察支持策略與決策" },
  { icon: UsersRound, title: "專業顧問", text: "跨領域顧問團隊與實務經驗" },
  { icon: Layers3, title: "數位創新", text: "結合金融科技、AI 等創新應用" },
  { icon: Target, title: "執行落地", text: "從規劃到執行，確保策略實現" },
];

const principles = [
  { icon: Gem, title: "專業洞察", text: "以產業經驗與數據分析，掌握商業機會與挑戰" },
  { icon: Lightbulb, title: "創新思維", text: "結合新興科技與趨勢，設計具競爭力的解決方案" },
  { icon: Settings2, title: "務實執行", text: "重視落地與成效，陪客戶共同展現價值" },
];

const expertise = [
  { icon: Landmark, title: "金融科技 FinTech", text: "結合金融業務與科技創新，協助金融機構優化服務、提升營運效率並拓展數位金融應用。" },
  { icon: CreditCard, title: "新興支付", text: "聚焦多元支付場景與創新模式，協助企業規劃與導入新型支付解決方案，提升支付體驗與營運效益。" },
  { icon: Blocks, title: "人工智慧 AI 應用", text: "運用 AI 與數據分析，協助企業在行銷、風控、營運等場景導入智慧應用，提升決策與營運效率。" },
  { icon: Network, title: "區塊鏈應用", text: "結合區塊鏈技術特性，探索在金融、支付、資料信任與流程優化等領域的創新應用。" },
];

const featuredCases = [
  { href: "/customer-data-warehouse/", image: "/images/home-case-finance.webp", alt: "金融商業大樓", category: "金融業", tagClass: styles.caseTagFinance, title: "金控資料倉儲與數據應用", text: "盤點既有資料系統，透過 Health Check 尋找成本控制與 Data to Value 的機會。" },
  { href: "/customer-appliance/", image: "/images/home-case-appliance.webp", alt: "家電展示門市", category: "家電產業", tagClass: styles.caseTagAppliance, title: "家電產業客群分析與行銷", text: "透過客戶分群與公開資料，探索銷售熱點與更精準的行銷方向。" },
  { href: "/customer-loan-credit/", image: "/images/home-case-credit.webp", alt: "分析信用貸款資料", category: "金融業", tagClass: styles.caseTagCredit, title: "信用貸款模型分析與優化", text: "整合不同維度資料與領域知識，優化市場分析和信用評分模型。" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className={styles.sectionTitle}><div className={styles.titleUnderlineGroup}><h2>{children}</h2><ScrollUnderline className={styles.sectionUnderline} /></div></div>;
}

export default function Home() {
  return <>
    <HomeIntro />
    <section className={styles.hero}>
      <Image className={styles.heroImage} src="/images/consulting-hero.webp" alt="顧問與團隊討論企業數據策略" fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={"container " + styles.heroInner}><div className={styles.heroCopy}>
        <h1>以數據與科技，<br />驅動企業<span>持續創新</span></h1>
        <h2>從策略諮詢到落地執行，陪伴企業穩健轉型</h2>
        <p>博創數科提供管理顧問、專案辦公室（PMO）、數據分析與數位轉型顧問服務，結合金融科技、AI 與創新技術，協助企業以數據驅動決策，提升營運效能並創造長期價值。</p>
        <div className={styles.heroActions}><Link className={styles.primaryAction} href="/consultation-appointment/">預約專家諮詢 <ArrowRight size={17} /></Link></div>
      </div></div>
    </section>

    <section className={styles.strengthStrip} aria-label="博創數科服務特色"><div className={"container " + styles.strengthGrid}>{strengths.map(({ icon: Icon, title, text }) => <div className={styles.strength} key={title}><Icon size={29} strokeWidth={1.7} /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></section>

    <section className={styles.about} id="about"><Image className={styles.aboutImage} src="/images/home-about-building.webp" alt="現代辦公建築" fill sizes="(max-width: 700px) 100vw, 50vw" /><div className={styles.aboutShade} /><div className={"container " + styles.aboutGrid}><div className={styles.aboutCopy}><span className={styles.eyebrow}>ABOUT BROADINNO</span><div className={styles.titleUnderlineGroup}><h2>關於博創數科</h2><ScrollUnderline className={styles.aboutUnderline} /></div><p>博創數科（Broadinno）成立於 2024 年底，專注於管理顧問、專案管理辦公室（PMO）、數據分析與數位轉型顧問服務，並深耕金融科技、新興支付、AI 應用與區塊鏈等領域。</p><p>我們結合數據、數位工具、科技應用與策略執行，協助企業洞察機會、擬定策略、推動落地，成為企業推動創新與轉型的長期夥伴。</p></div><div className={styles.principleList}>{principles.map(({ icon: Icon, title, text }) => <div className={styles.principle} key={title}><span><Icon size={26} strokeWidth={1.6} /></span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></div></section>

    <section className={styles.enterpriseValues} id="enterprise-values" aria-labelledby="enterprise-values-title">
      <div className="container">
        <div className={styles.valueIntro}>
          <div className={styles.valueHeading}>
            <span className={styles.eyebrow}>OUR VALUES</span>
            <div className={styles.titleUnderlineGroup}>
              <h2 id="enterprise-values-title">企業價值</h2>
              <ScrollUnderline className={styles.valueUnderline} />
            </div>
          </div>
        </div>
        <div className={styles.valueDiagram}>
          <Image
            className={styles.valueImage}
            src="/images/enterprise-values.webp"
            alt="企業價值：01 創新變革、積極突破；02 數據驅動、精準分析；03 秉持專業、信賴服務；04 持續交流、解決難題。"
            width={1920}
            height={753}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
        <div className={styles.valueCopy}>
          <p>我們的目標是成為企業最值得信賴的策略夥伴，提供專業的顧問服務，協助客戶在數位轉型、金融科技、人工智慧及專案管理領域中取得競爭優勢。我們秉持專業、創新與數據驅動的精神，為企業量身打造最適合的解決方案，確保每一次決策都能帶來長遠的價值。</p>
          <p>透過深厚的產業知識與先進科技的應用，致力於幫助企業提升營運效率、強化市場競爭力，並實現可持續發展。我們的願景是培養各世代的獨立管理顧問，推動業界標準的提升，成為企業成長與轉型的核心推動力。透過專業服務，不僅提供解決方案，更與客戶並肩前行，共同創造更卓越的未來。</p>
        </div>
      </div>
    </section>

    <section className={styles.services} id="services"><div className="container"><SectionTitle>以專業顧問服務，協助企業創造價值</SectionTitle><div className={styles.serviceGrid}><Link className={styles.serviceCard} href="/management-consulting/"><div className={styles.serviceImage}><Image src="/images/home-management.webp" alt="管理顧問討論策略文件" fill sizes="(max-width: 700px) 100vw, 25vw" /></div><div className={styles.serviceCopy}><h3>管理顧問</h3><p>從策略規劃、營運與流程優化、數據應用到數位轉型，提供兼具洞察與實務經驗的顧問服務，協助企業強化競爭力、拓展新機會。</p><span>了解服務 <ArrowRight size={17} /></span></div></Link><Link className={styles.serviceCard} href="/project-manager/"><div className={styles.serviceImage}><Image src="/images/pmo-governance.webp" alt="專案辦公室儀表板" fill sizes="(max-width: 700px) 100vw, 25vw" /></div><div className={styles.serviceCopy}><h3>專案辦公室 PMO</h3><p>建立專案治理與管理機制，統籌專案計畫、進度、資源、跨部門協作與風險控管，確保關鍵專案有效推進並達成預期目標。</p><span>了解服務 <ArrowRight size={17} /></span></div></Link></div></div></section>

    <section className={styles.expertise}><div className="container"><SectionTitle>主要專業領域</SectionTitle><div className={styles.expertiseGrid}>{expertise.map(({ icon: Icon, title, text }) => <article className={styles.expertiseCard} key={title}><Icon size={32} strokeWidth={1.65} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.cases}><div className="container"><div className={styles.casesHeading}><SectionTitle>精選客戶案例</SectionTitle><Link href="/case-studies/">探索更多案例 <ArrowRight size={17} /></Link></div><div className={styles.caseGrid}>{featuredCases.map((item) => <Link className={styles.caseCard} href={item.href} key={item.href}><div className={styles.caseImage}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className={styles.caseCopy}><span className={`${styles.caseTag} ${item.tagClass}`}>{item.category}</span><h3>{item.title}</h3><p>{item.text}</p><span className={styles.caseArrow}><ArrowRight size={17} /></span></div></Link>)}</div></div></section>

    <section className={styles.method}><div className={"container " + styles.methodGrid}><h2>讓策略不只停留在規劃，<br />更能轉化為成果</h2><div className={styles.methodStep}><span><Search size={26} /></span><div><strong>洞察需求</strong><p>理解企業目標與挑戰，釐清關鍵議題</p></div></div><ArrowRight className={styles.methodArrow} size={21} /><div className={styles.methodStep}><span><Target size={26} /></span><div><strong>擬定策略</strong><p>結合數據與產業洞察，設計可行的轉型策略</p></div></div><ArrowRight className={styles.methodArrow} size={21} /><div className={styles.methodStep}><span><Rocket size={26} /></span><div><strong>推動落地</strong><p>以專案管理與資源整合，確保策略有效執行並創造價值</p></div></div></div></section>

    <section className={styles.cta} id="contact"><div className={"container " + styles.ctaInner}><h2>攜手博創，開啟企業成長新篇章</h2><p>無論您正面臨數位轉型、營運優化或創新業務的挑戰，<br />我們都能提供一對一專業諮詢，與您共同擬定最合適的解決方案。</p><Link href="/consultation-appointment/">立即預約諮詢 <ArrowRight size={18} /></Link></div></section>
  </>;
}
