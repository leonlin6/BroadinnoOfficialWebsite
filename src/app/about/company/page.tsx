import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, Compass, Lightbulb, Waypoints } from "lucide-react";
import { Cta } from "@/components/Cta";
import styles from "../../new-pages.module.css";

export const metadata: Metadata = {
  title: "公司介紹",
  description: "認識博創數科 Broadinno：結合淵博知識與創新方法，以數據、數位及科技協助企業尋找解決方案。",
  alternates: { canonical: "/about/company/" },
};

const beliefs = [
  { icon: Compass, title: "理解問題", text: "從企業的現況與目標出發，釐清真正需要處理的課題。" },
  { icon: ChartNoAxesCombined, title: "建立洞察", text: "結合產業經驗與數據分析，讓判斷有更清楚的基礎。" },
  { icon: Waypoints, title: "務實推進", text: "將策略、資源與執行連結，支持方案逐步落地。" },
];

export default function Company() {
  return <>
    <section className={styles.featureHero}><div className={"container " + styles.featureHeroGrid}><div className={styles.featureHeroCopy}><div className={styles.crumb}><Link href="/">首頁</Link><ArrowRight size={13} />關於我們 <ArrowRight size={13} />公司介紹</div><span className={styles.eyebrow}>ABOUT BROADINNO</span><h1>以淵博的知識，<br />探索創新的方法。</h1><p>博創數科以專業服務為核心，透過數據、數位與科技的整合，陪伴企業理解挑戰、找到方向並推動實踐。</p><Link className={styles.lightButton} href="/about/capabilities/">了解專業能力 <ArrowUpRight size={18} /></Link></div><div className={styles.featureHeroVisual}><Image src="/images/home-about-building.png" alt="現代辦公建築" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>

    <section className={styles.editorialSection}><div className={"container " + styles.introGrid}><div><span className={styles.eyebrowDark}>OUR STORY</span><h2>關於博創數科</h2></div><div><p>博創數科有限公司成立於 2024 年底。公司名稱「博創」象徵淵博的知識與創新的方法；我們希望透過數據、數位及科技的整合，為客戶尋找適合的解決方案。</p><p>團隊由具備不同領域經驗、保持開放心態的顧問組成，重視務實執行。無論面對分析、轉型或專案管理課題，我們都從理解企業需求開始，與客戶一起規劃可行的下一步。</p></div></div></section>

    <section className={styles.paleSection}><div className="container"><div className={styles.sectionHead}><span className={styles.eyebrowDark}>WHAT GUIDES US</span><h2>以專業與行動，建立長期合作關係。</h2></div><div className={styles.beliefGrid}>{beliefs.map(({ icon: Icon, title, text }, index) => <article className={styles.beliefCard} key={title}><span>0{index + 1}</span><Icon size={33} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.editorialSection}><div className={"container " + styles.focusLayout}><div><span className={styles.eyebrowDark}>OUR FOCUS</span><h2>跨越管理與科技的顧問視角</h2><p>博創數科聚焦數據分析、數位轉型、金融科技與專案管理四個方向。每一項能力都以企業的實際問題為起點，與其他專業相互補足。</p><Link className={styles.inlineLink} href="/about/capabilities/">探索專業能力 <ArrowUpRight size={18} /></Link></div><div className={styles.focusList}><div><Lightbulb size={24} /><span>數據分析</span></div><div><Lightbulb size={24} /><span>數位轉型</span></div><div><Lightbulb size={24} /><span>金融科技</span></div><div><Lightbulb size={24} /><span>專案管理</span></div></div></div></section>
    <Cta />
  </>;
}
