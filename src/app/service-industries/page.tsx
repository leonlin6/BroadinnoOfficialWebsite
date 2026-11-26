import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollUnderline } from "@/components/ScrollUnderline";
import styles from "./service-industries.module.css";

export const metadata: Metadata = {
  title: "主要服務產業",
  description: "博創數科結合產業知識、顧問經驗與數據科技，為金融、零售與資訊服務業探索適切的解決方向。",
  alternates: { canonical: "/service-industries/" },
};

const industries = [
  {
    number: "01",
    title: "金融",
    focus: "風險管理・客戶洞察・數據治理",
    description: "協助金融機構強化風險控管與法規遵循，整合客戶數據以深化客戶洞察，並建立完善的數據治理機制，提升營運效率與服務價值。",
    tags: ["風險管理", "客戶洞察", "數據治理"],
    image: "/images/industry-finance.jpg",
    imageAlt: "金融分析辦公室內的雙螢幕工作站與城市景觀",
  },
  {
    number: "02",
    title: "零售",
    focus: "顧客分群・精準行銷・營運分析",
    description: "運用數據分析洞察消費行為，進行顧客分群與個人化行銷，並透過營運數據分析優化商品、庫存與門市營運，提升顧客體驗與整體營運效益。",
    tags: ["顧客分群", "精準行銷", "營運分析"],
    image: "/images/industry-retail.jpg",
    imageAlt: "採光明亮的生活選物零售店面與商品展示",
  },
  {
    number: "03",
    title: "資訊服務",
    focus: "系統整合・流程優化・數位轉型",
    description: "協助資訊服務業整合異質系統、優化內部營運流程，並規劃數位轉型藍圖，提升服務交付效率與市場競爭力。",
    tags: ["系統整合", "流程優化", "數位轉型"],
    image: "/images/industry-information.jpg",
    imageAlt: "資訊團隊在辦公室協作檢視電腦上的分析畫面",
  },
] as const;

export default function ServiceIndustries() {
  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="industries-title">
      <Image className={styles.heroImage} src="/images/home-case-finance.webp" alt="" fill priority sizes="100vw" />
      <div className={styles.heroWash} aria-hidden="true" />
      <div className={styles.heroFacet} aria-hidden="true" />
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <h1 id="industries-title" data-scroll-title>主要服務產業</h1>
          <p>深入產業情境，結合數據與科技，<br />創造企業成長價值。</p>
        </div>
      </div>
    </section>

    <section className={styles.industriesSection} aria-labelledby="industry-intro-title">
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.titleUnderlineGroup}>
            <h2 id="industry-intro-title">理解產業需求，提供適切解決方案</h2>
            <ScrollUnderline className={styles.titleUnderline} />
          </div>
          <p>結合產業知識、顧問經驗與數據科技，深入掌握產業營運情境與關鍵挑戰，<br className={styles.desktopBreak} />協助企業提升營運效率、強化客戶價值，並創造可持續的成長動能。</p>
        </div>

        <div className={styles.industryList}>
          {industries.map((industry, index) => {
            const visual = <div className={styles.visual} key="visual"><Image src={industry.image} alt={industry.imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>;
            const copy = <div className={styles.industryCopy} key="copy">
              <div className={styles.titleLine}><span className={styles.number}>{industry.number}</span><span className={styles.titleRule} aria-hidden="true" /><h3 data-scroll-title>{industry.title}</h3></div>
              <p className={styles.focus}>{industry.focus}</p>
              <p className={styles.description}>{industry.description}</p>
              <ul className={styles.tags} aria-label={`${industry.title}服務重點`}>{industry.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>;
            return <article className={styles.industryRow} key={industry.number}>{index % 2 === 1 ? <>{copy}{visual}</> : <>{visual}{copy}</>}</article>;
          })}
        </div>
      </div>
    </section>

    <section className={styles.cta} aria-labelledby="industry-cta-title">
      <div className={`container ${styles.ctaInner}`}>
        <h2 id="industry-cta-title" >從產業挑戰出發，找到下一步</h2>
        <p>與我們的顧問團隊對談，探索適合您產業與企業現況的解決方向。</p>
        <Link href="/consultation-appointment/">預約諮詢 <ArrowRight size={19} aria-hidden="true" /></Link>
      </div>
    </section>
  </div>;
}
