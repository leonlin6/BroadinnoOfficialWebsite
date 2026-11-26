"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ExperienceBadge } from "@/components/ExperienceBadge";
import { cases } from "@/lib/content";
import styles from "./case-studies.module.css";

const filters = ["全部", "金融服務", "消費與零售", "公用事業", "汽車產業"] as const;
type Filter = (typeof filters)[number];

const imageBySlug: Record<string, { src: string; alt: string }> = {
  "customer-data-warehouse": { src: "/images/case-warehouse.webp", alt: "資料中心與資料倉儲視覺化圖像" },
  "customer-appliance": { src: "/images/home-case-appliance.webp", alt: "家電展示門市" },
  "customer-public-facility": { src: "/images/case-utility.webp", alt: "夕陽下的電力輸送設施" },
  "customer-loan-credit": { src: "/images/case-loan.webp", alt: "分析信用貸款資料的筆電與圖表" },
  "customer-potential": { src: "/images/home-case-credit.webp", alt: "分析理財相關資料的會議桌" },
  "customer-motor-industry": { src: "/images/case-automotive.webp", alt: "汽車製造產線" },
};

const categoryBySlug: Record<string, Filter> = {
  "customer-data-warehouse": "金融服務",
  "customer-appliance": "消費與零售",
  "customer-public-facility": "公用事業",
  "customer-loan-credit": "金融服務",
  "customer-potential": "金融服務",
  "customer-motor-industry": "汽車產業",
};

const categoryToneBySlug: Record<string, string> = {
  "customer-data-warehouse": styles.categoryFinance,
  "customer-appliance": styles.categoryAppliance,
  "customer-public-facility": styles.categoryUtility,
  "customer-loan-credit": styles.categoryCredit,
  "customer-potential": styles.categoryFinance,
  "customer-motor-industry": styles.categoryAutomotive,
};

export function CaseFilterGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("全部");
  const visibleCases = cases.filter((item) => activeFilter === "全部" || categoryBySlug[item.slug] === activeFilter);

  return (
    <>
      <div className={styles.allCasesHeading}>
        <span className={styles.eyebrow}>CASE STUDIES</span>
        <h2 id="all-cases-title" data-scroll-title>{activeFilter === "全部" ? "全部案例" : `${activeFilter}案例`}</h2>
      </div>
      <div className={styles.filters} role="group" aria-label="依產業篩選客戶案例">
        {filters.map((filter) => (
          <button
            className={`${styles.filterButton} ${activeFilter === filter ? styles.filterActive : ""}`}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >{filter}</button>
        ))}
      </div>
      <div className={styles.caseGrid} aria-live="polite">
        {visibleCases.map((item) => {
          const image = imageBySlug[item.slug];
          const isWideCard = item.experience.rating === 5;
          return (
            <Link
              className={`${styles.caseCard} ${isWideCard ? styles.wideCard : ""}`}
              href={`/${item.slug}/`}
              key={item.slug}
              aria-label={`探索案例：${item.title}。${item.summary} 經驗值 ${item.experience.rating} 顆星，${item.experience.note}`}
            >
              <span className={styles.caseImage}><Image src={image.src} alt={image.alt} fill sizes={isWideCard ? "(max-width: 750px) 100vw, 67vw" : "(max-width: 750px) 100vw, 30vw"} /></span>
              <div className={styles.caseContent}>
                <span className={`${styles.category} ${categoryToneBySlug[item.slug]}`}>{categoryBySlug[item.slug]}</span>
                <strong>{item.title}</strong>
                <p className={styles.caseDescription}>{item.summary}</p>
                <ExperienceBadge {...item.experience} className={styles.cardExperience} />
                <span className={styles.caseLink}>探索案例 <ArrowUpRight size={18} strokeWidth={1.8} /></span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
