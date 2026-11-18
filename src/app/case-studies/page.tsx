import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { cases } from "@/lib/content";
import { CaseFilterGrid } from "./CaseFilterGrid";
import styles from "./case-studies.module.css";

export const metadata: Metadata = {
  title: "客戶案例",
  description: "探索博創數科在金融服務、消費與零售、公用事業及汽車產業的數據分析與管理顧問案例。",
  alternates: { canonical: "/case-studies/" },
};

const featured = cases[0];

export default function CaseStudies() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="case-studies-title">
        <div className={"container " + styles.introGrid}>
          <div>
            <span className={styles.eyebrow}>SELECTED WORK <span>/</span> 客戶案例</span>
            <h1 id="case-studies-title">實務經驗，<br />驅動企業價值</h1>
            <span className={styles.accentLine} aria-hidden="true" />
          </div>
          <div className={styles.introAside}>
            <p>結合數據、產業知識與實務落地經驗，協助金融、零售、公用事業、汽車等多元產業，以數據驅動營運、深化客戶價值，並創造可持續的業務成長。</p>
            <a href="#all-cases">探索所有案例 <ArrowDown size={18} strokeWidth={1.8} /></a>
          </div>
        </div>
      </section>

      <section className={styles.featured} aria-labelledby="featured-case-title">
        <div className={"container " + styles.featuredGrid}>
          <Link className={styles.featuredImage} href={`/${featured.slug}/`} aria-label={`查看案例：${featured.title}`}>
            <Image src="/images/case-warehouse.png" alt="資料中心與資料倉儲視覺化圖像" fill priority sizes="(max-width: 750px) 100vw, 57vw" />
          </Link>
          <div className={styles.featuredCopy}>
            <div className={styles.featuredLabel}><span>FEATURED CASE</span><i aria-hidden="true" /></div>
            <span className={`${styles.category} ${styles.categoryFinance}`}>{featured.category}</span>
            <h2 id="featured-case-title">{featured.title}</h2>
            <p>整合資料資產，推動數據應用與決策。</p>
            <Link className={styles.textLink} href={`/${featured.slug}/`}>探索案例 <ArrowUpRight size={19} strokeWidth={1.8} /></Link>
          </div>
        </div>
      </section>

      <section className={styles.allCases} id="all-cases" aria-labelledby="all-cases-title">
        <div className="container">
          <div className={styles.rule} />
          <div className={styles.allCasesHeading}>
            <div><span className={styles.eyebrow}>CASE STUDIES</span><h2 id="all-cases-title">全部案例</h2></div>
            <CaseFilterGrid />
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="case-cta-title">
        <div className={"container " + styles.ctaInner}>
          <div><span className={styles.accentLine} aria-hidden="true" /><h2 id="case-cta-title">讓下一個成功案例，<br className={styles.mobileBreak} />從您的企業開始。</h2></div>
          <Link href="/consultation-appointment/">聯絡顧問 <ArrowRight size={20} strokeWidth={1.7} /></Link>
        </div>
      </section>
    </div>
  );
}
