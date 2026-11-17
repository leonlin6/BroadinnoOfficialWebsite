import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CarFront, HousePlug, Landmark, Zap } from "lucide-react";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/PageHero";
import styles from "../new-pages.module.css";

export const metadata: Metadata = {
  title: "主要服務產業",
  description: "探索博創數科既有網站公開的金融、家電、公用事業與汽車產業案例。",
  alternates: { canonical: "/service-industries/" },
};

const industries = [
  { icon: Landmark, number: "01", title: "金融服務", text: "金融業的資料管理、貸款分析及理財客戶洞察，需要兼顧業務目標、資料使用與管理要求。", cases: [{ label: "金控公司資料倉儲建置及應用", href: "/customer-data-warehouse/" }, { label: "信用貸款市場分析及客戶信用評分", href: "/customer-loan-credit/" }, { label: "潛在理財客戶分析", href: "/customer-potential/" }] },
  { icon: HousePlug, number: "02", title: "家電產業", text: "耐用產品的回購週期較長，從客戶與家庭維度理解需求，有助於探索更適切的行銷方向。", cases: [{ label: "家電產業客戶分群及行銷推廣", href: "/customer-appliance/" }] },
  { icon: Zap, number: "03", title: "公用事業", text: "不同用戶與地理區域的使用行為各有差異，資料分析能協助整理分群與延伸需求。", cases: [{ label: "公用事業客戶分群及交叉銷售", href: "/customer-public-facility/" }] },
  { icon: CarFront, number: "04", title: "汽車產業", text: "數據治理與分析組織的建立，需要同時思考工作流程、角色分工和業務應用。", cases: [{ label: "輔導汽車產業，成立數據治理及數據分析組織及新工作流程", href: "/customer-motor-industry/" }] },
];

export default function ServiceIndustries() {
  return <><PageHero eyebrow="INDUSTRIES" title="主要服務產業" description="從產業情境理解問題，結合數據、科技與管理方法，探索適合的解決方向。" /><section className={styles.editorialSection}><div className="container"><div className={styles.sectionHead}><span className={styles.eyebrowDark}>INDUSTRY CONTEXT</span><h2>不同產業，相同的起點：先理解問題。</h2><p>以下產業依博創數科既有官網公開的案例整理，呈現目前可參考的專案主題。</p></div><div className={styles.industryGrid}>{industries.map(({ icon: Icon, number, title, text, cases }) => <article className={styles.industryCard} key={number}><div className={styles.industryTop}><span>{number} / INDUSTRY</span><Icon size={31} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><div className={styles.industryCases}><strong>相關案例</strong>{cases.map((item) => <Link href={item.href} key={item.href}>{item.label}<ArrowUpRight size={16} /></Link>)}</div></article>)}</div></div></section><Cta /></>;
}
