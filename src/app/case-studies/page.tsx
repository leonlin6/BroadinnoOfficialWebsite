import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CaseFilterGrid } from "./CaseFilterGrid";
import styles from "./case-studies.module.css";

export const metadata: Metadata = {
  title: "客戶案例",
  description: "探索博創數科在金融服務、消費與零售、公用事業及汽車產業的數據分析與管理顧問案例。",
  alternates: { canonical: "/case-studies/" },
};

export default function CaseStudies() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="case-studies-title">
        <div className={"container " + styles.introGrid}>
          <div>
            <span className={styles.eyebrow}>SELECTED WORK <span>/</span> 客戶案例</span>
            <h1 id="case-studies-title" data-scroll-title>實務經驗，<br />驅動企業價值</h1>
            <span className={styles.accentLine} aria-hidden="true" />
          </div>
          <div className={styles.introAside}>
            <p>結合數據、產業知識與實務落地經驗，協助金融、零售、公用事業、汽車等多元產業，以數據驅動營運、深化客戶價值，並創造可持續的業務成長。</p>
            <a href="#all-cases">探索所有案例 <ArrowDown size={18} strokeWidth={1.8} /></a>
          </div>
        </div>
      </section>

      <section className={styles.allCases} id="all-cases" aria-labelledby="all-cases-title">
        <div className="container">
          <div className={styles.rule} />
          <CaseFilterGrid />
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="case-cta-title">
        <div className={"container " + styles.ctaInner}>
          <div><span className={styles.accentLine} aria-hidden="true" /><h2 id="case-cta-title" data-scroll-title>讓下一個成功案例，<br className={styles.mobileBreak} />從您的企業開始。</h2></div>
          <Link href="/consultation-appointment/">聯絡顧問 <ArrowRight size={20} strokeWidth={1.7} /></Link>
        </div>
      </section>
    </div>
  );
}
