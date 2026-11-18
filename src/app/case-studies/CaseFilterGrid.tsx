"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cases } from "@/lib/content";
import styles from "./case-studies.module.css";

const filters = ["全部", "金融服務", "消費與零售", "公用事業", "汽車產業"] as const;
type Filter = (typeof filters)[number];

const imageBySlug: Record<string, { src: string; alt: string }> = {
  "customer-appliance": { src: "/images/home-case-appliance.png", alt: "家電展示門市" },
  "customer-public-facility": { src: "/images/case-utility.png", alt: "夕陽下的電力輸送設施" },
  "customer-loan-credit": { src: "/images/case-loan.png", alt: "分析信用貸款資料的筆電與圖表" },
  "customer-potential": { src: "/images/home-case-credit.png", alt: "分析理財相關資料的會議桌" },
  "customer-motor-industry": { src: "/images/case-automotive.png", alt: "汽車製造產線" },
};

const categoryBySlug: Record<string, Filter> = {
  "customer-appliance": "消費與零售",
  "customer-public-facility": "公用事業",
  "customer-loan-credit": "金融服務",
  "customer-potential": "金融服務",
  "customer-motor-industry": "汽車產業",
};

const categoryToneBySlug: Record<string, string> = {
  "customer-appliance": styles.categoryAppliance,
  "customer-public-facility": styles.categoryUtility,
  "customer-loan-credit": styles.categoryCredit,
  "customer-potential": styles.categoryFinance,
  "customer-motor-industry": styles.categoryAutomotive,
};

export function CaseFilterGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("全部");
  const visibleCases = cases.slice(1).filter((item) => activeFilter === "全部" || categoryBySlug[item.slug] === activeFilter);

  return (
    <>
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
          return (
            <Link
              className={`${styles.caseCard} ${item.number === "04" ? styles.wideCard : ""}`}
              href={`/${item.slug}/`}
              key={item.slug}
              aria-label={`探索案例：${item.title}`}
            >
              <span className={styles.caseImage}><Image src={image.src} alt={image.alt} fill sizes={item.number === "04" ? "(max-width: 750px) 100vw, 67vw" : "(max-width: 750px) 100vw, 30vw"} /></span>
              <span className={styles.caseContent}>
                <span className={`${styles.category} ${categoryToneBySlug[item.slug]}`}>{categoryBySlug[item.slug]}</span>
                <span className={styles.caseNumber}>{item.number}</span>
                <strong>{item.title}</strong>
                <span className={styles.caseLink}>探索案例 <ArrowUpRight size={18} strokeWidth={1.8} /></span>
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
