import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Landmark, Network, Waypoints } from "lucide-react";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/PageHero";
import styles from "../../new-pages.module.css";

export const metadata: Metadata = {
  title: "專業能力",
  description: "博創數科結合數據分析、數位轉型、金融科技與專案管理，協助企業從洞察走向執行。",
  alternates: { canonical: "/about/capabilities/" },
};

const capabilities = [
  { icon: ChartNoAxesCombined, number: "01", title: "數據分析", text: "從資料盤點到分析與應用，協助企業建立更清楚的客戶洞察、營運指標與決策依據。", href: "/data-analytics/", link: "探索數據分析服務" },
  { icon: BrainCircuit, number: "02", title: "數位轉型", text: "理解流程、系統與組織的連動，評估科技應用如何支持企業的轉型目標。", href: "/management-consulting/", link: "探索管理顧問服務" },
  { icon: Landmark, number: "03", title: "金融科技", text: "關注金融服務、新興支付、AI 與區塊鏈的應用，連結技術發展與實際業務需求。", href: "/main-experties/", link: "探索主要專業領域" },
  { icon: Network, number: "04", title: "專案管理", text: "透過專案治理、進度與資源協調，協助企業把策略轉成有節奏的行動。", href: "/project-manager/", link: "探索專案辦公室服務" },
];

export default function Capabilities() {
  return <><PageHero eyebrow="OUR CAPABILITIES" title="專業能力" description="將數據、科技與管理方法連結起來，協助企業看見問題、規劃方向並推動執行。" parent={{ label: "關於我們", href: "/about/company/" }} /><section className={styles.editorialSection}><div className="container"><div className={styles.sectionHead}><span className={styles.eyebrowDark}>WHAT WE BRING</span><h2 data-scroll-title data-scroll-title-center>四個方向，回應不同階段的企業課題。</h2><p>能力之間可以相互搭配，依企業的目標、資料與組織現況選擇適合的切入點。</p></div><div className={styles.capabilityGrid}>{capabilities.map(({ icon: Icon, number, title, text, href, link }) => <article className={styles.capabilityCard} key={number}><div className={styles.capabilityTop}><span>{number}</span><Icon size={32} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><Link href={href}>{link}<ArrowUpRight size={17} /></Link></article>)}</div></div></section><section className={styles.paleSection}><div className={"container " + styles.capabilityBottom}><div><span className={styles.eyebrowDark}>FROM INSIGHT TO ACTION</span><h2 data-scroll-title>專業能力的價值，<br />來自跨領域協作。</h2></div><div><p>企業的挑戰常橫跨策略、資料、流程與人。博創數科以務實的顧問方式串聯不同專業，協助團隊把洞察變成可以執行的計畫，再透過專案管理持續推進。</p><div className={styles.capabilityFlow}><span>洞察</span><Waypoints size={18} /><span>規劃</span><Waypoints size={18} /><span>落地</span></div></div></div></section><Cta /></>;
}
