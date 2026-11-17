import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, CalendarDays, Check, ChevronRight, ClipboardList,
  Eye, Flag, Gauge, Layers3, Network, Rocket, Search, ShieldCheck,
  UsersRound,
} from "lucide-react";
import styles from "./project-manager.module.css";

export const metadata: Metadata = {
  title: "專案辦公室服務 PMO",
  description: "博創數科的專案辦公室服務協助企業建立專案治理、管理進度與風險、整合跨部門資源，讓策略有效落地。",
  alternates: { canonical: "/project-manager/" },
};

const pillars = [
  { icon: Layers3, title: "專案治理", text: "建立治理機制與決策體系" },
  { icon: CalendarDays, title: "進度管理", text: "掌握時程，確保如期交付" },
  { icon: ShieldCheck, title: "風險控管", text: "及早識別與降低專案風險" },
  { icon: UsersRound, title: "跨部門協作", text: "整合資源與溝通，提升執行力" },
];

const services = [
  { icon: Network, title: "專案治理", text: "建立專案治理架構與決策機制，明確管理原則與推動規則，確保專案與企業策略一致。" },
  { icon: CalendarDays, title: "專案計畫與進度管理", text: "協助制定可執行的專案計畫，里程碑與時程控管，持續追蹤進度，確保如期達成目標。" },
  { icon: UsersRound, title: "跨部門協作", text: "建立跨單位溝通與協調機制，促進資訊透明與資源整合，提升整體執行效率。" },
  { icon: ShieldCheck, title: "風險與議題管理", text: "系統化識別、評估與追蹤風險及議題，提前擬定應對策略，降低專案延誤與影響。" },
  { icon: Layers3, title: "資源整合", text: "盤點與調度人力、預算、系統等關鍵資源，提升資源使用效率，支持專案順利推進。" },
  { icon: BarChart3, title: "成效追蹤與決策支援", text: "建立專案績效指標與追蹤機制，以數據提供管理洞察，協助高層快速掌握進度與做出決策。" },
];

const governance = [
  { title: "制度建立", text: "建構符合企業需求的 PMO 運作制度與流程。" },
  { title: "角色權責", text: "明確 PMO、專案負責人與相關單位的職責分工。" },
  { title: "會議節奏", text: "設計決策、進度與議題會議節奏，強化推進力。" },
  { title: "管理標準化", text: "導入專案管理方法與工具，建立一致的管理標準。" },
];

const process = [
  { icon: Search, title: "需求盤點", text: "釐清專案目標與專案範圍，確認關鍵需求與成功條件。" },
  { icon: ClipboardList, title: "專案規劃", text: "制定專案計畫、時程、資源與里程碑，建立執行基礎。" },
  { icon: Rocket, title: "執行推進", text: "依計畫協調資源與推動執行，促進跨部門合作與問題解決。" },
  { icon: BarChart3, title: "進度追蹤", text: "定期檢視進度與關鍵指標，掌握專案狀態並即時調整。" },
  { icon: ShieldCheck, title: "風險管理", text: "持續監控風險與議題，啟動應對機制，降低對專案的影響。" },
  { icon: Flag, title: "成果驗收", text: "確認交付成果與目標達成，進行成效檢視與經驗沉澱。" },
];

const benefits = [
  { icon: Eye, title: "提升專案透明度", text: "即時掌握進度、資源與風險狀態，讓管理更具可視性。", tag: "更清晰" },
  { icon: UsersRound, title: "強化跨部門協同", text: "建立一致的溝通與協作機制，減少資訊落差與重工。", tag: "更順暢" },
  { icon: ShieldCheck, title: "降低風險與延誤", text: "提前識別並管理風險與議題，提升專案交付穩定性。", tag: "更可控" },
  { icon: Layers3, title: "提高資源使用效率", text: "整合並優化人力、預算與系統資源，發揮更高的投入效益。", tag: "更高效" },
  { icon: Gauge, title: "加速策略落地", text: "將企業策略轉化為可執行的專案組合，加速累積實際成果。", tag: "更即時" },
];

function SectionHeading({ title, description }: { title: string; description: string }) {
  return <div className={styles.sectionHeading}><h2>{title}</h2><span aria-hidden="true" /><p>{description}</p></div>;
}

export default function ProjectManager() {
  return <>
    <section className={styles.hero}>
      <Image className={styles.heroImage} src="/images/pmo-hero.png" alt="專案辦公室顧問向團隊簡報" fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={"container " + styles.heroInner}><div className={styles.heroCopy}>
        <span className={styles.heroTag}>服務項目｜專案辦公室服務</span>
        <h1>專案辦公室服務 PMO</h1>
        <h2>協助企業提升專案執行效率與成功率，<br />讓策略有效落地。</h2>
        <p>博創數科的 PMO（Project Management Office）為企業提供專案治理、時程控管、跨部門協調與資源配置的核心機制。以制度化、標準化與數據化的管理規劃，確保專案穩定推進，提升整體執行效能與成果達成率。</p>
        <div className={styles.heroActions}><Link className={styles.heroPrimary} href="/consultation-appointment/">預約專案諮詢 <ArrowRight size={17} /></Link><Link className={styles.heroSecondary} href="#pmo-process">了解服務流程</Link></div>
      </div></div>
    </section>

    <section className={styles.pillarStrip} aria-label="專案辦公室服務重點"><div className={"container " + styles.pillarGrid}>{pillars.map(({ icon: Icon, title, text }) => <div className={styles.pillar} key={title}><Icon size={30} strokeWidth={1.7} /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></section>

    <section className={styles.services}><div className="container"><SectionHeading title="我們如何協助企業建立高效 PMO" description="以專業的方法論與實務經驗，從治理、規劃、協作到資源與成效管理，協助企業建置貼合組織需求的 PMO 運作機制，讓專案更可控、成果更可預期。" /><div className={styles.serviceGrid}>{services.map(({ icon: Icon, title, text }) => <article className={styles.serviceCard} key={title}><span className={styles.serviceIcon}><Icon size={33} strokeWidth={1.7} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.governance}><div className={styles.governanceCopy}><div className={styles.governanceContent}><span className={styles.outlineTag}>PMO 價值</span><h2>建立專案治理基礎，<br />讓執行更有秩序、成果更可控</h2><p>PMO 不只是專案的管理單位，更是企業推動變革與落實策略的重要機制。博創數科協助企業梳理流程與資訊落差，透過明確規範的專案治理體系，提升專案的可視性、可控性與成功率。</p><ul>{governance.map((item) => <li key={item.title}><span><Check size={13} strokeWidth={3} /></span><p><strong>{item.title}：</strong>{item.text}</p></li>)}</ul></div></div><div className={styles.governanceVisual}><Image src="/images/pmo-governance.png" alt="專案治理儀表板" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></section>

    <section className={styles.process} id="pmo-process"><div className="container"><SectionHeading title="PMO 服務流程" description="以系統化的專案管理流程，從需求確認到成果驗收，全程協助企業掌握進度、控管風險並確保目標達成。" /><div className={styles.processGrid}>{process.map(({ icon: Icon, title, text }, index) => <div className={styles.processItem} key={title}><article className={styles.processCard}><span className={styles.processIcon}><Icon size={29} strokeWidth={1.6} /></span><h3>{title}</h3><p>{text}</p></article>{index < process.length - 1 && <ChevronRight className={styles.processArrow} size={23} aria-hidden="true" />}</div>)}</div></div></section>

    <section className={styles.benefits}><div className="container"><SectionHeading title="導入 PMO 的服務效益" description="透過專業的 PMO 機制，協助企業提升專案管理成熟度，帶來更高的執行效率與業務價值。" /><div className={styles.benefitGrid}>{benefits.map(({ icon: Icon, title, text, tag }) => <article className={styles.benefitCard} key={title}><Icon size={31} strokeWidth={1.7} /><h3>{title}</h3><p>{text}</p><span>{tag}</span></article>)}</div></div></section>

    <section className={styles.cta}><Image src="/images/contact-building.png" alt="現代玻璃辦公大樓" fill sizes="100vw" /><div className={styles.ctaShade} /><div className={"container " + styles.ctaInner}><div><h2>讓專案管理成為企業成長的推進器</h2><p>無論是數位轉型、系統導入、業務升級或創新專案，<br />博創數科的 PMO 服務，協助您以更高的執行力與整合力，<br />將策略轉化為可衡量的成果。</p></div><Link href="/consultation-appointment/">立即預約諮詢 <ArrowRight size={18} /></Link></div></section>
  </>;
}
