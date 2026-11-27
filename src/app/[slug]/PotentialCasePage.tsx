import Image from "next/image";
import { Cta } from "@/components/Cta";
import {
  ChartNoAxesCombined, Database, GitCompareArrows,
  Handshake, Layers3, Laptop, Network, Package, Store, Target, UsersRound,
} from "lucide-react";
import { ExperienceBadge } from "@/components/ExperienceBadge";
import type { CaseStudy } from "@/lib/content";
import { CaseStudyLabel } from "./CaseStudyLabel";
import styles from "./potential-case.module.css";

type PotentialCase = Extract<CaseStudy, { slug: "customer-potential" }>;

const insightIcons = {
  推論: GitCompareArrows,
  應用: Handshake,
  "Data Can Tell": ChartNoAxesCombined,
  "Social Resource": Network,
};

const steps = [
  { label: "客戶行為", icon: Laptop },
  { label: "需求推論", icon: Layers3 },
  { label: "潛在理財客群", icon: UsersRound },
  { label: "商業機會", icon: Target },
];

const opportunities = [
  { label: "新合作", icon: Handshake },
  { label: "新通路", icon: Store },
  { label: "新產品", icon: Package },
];

export function PotentialCasePage({ item }: { item: PotentialCase }) {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="potential-title">
        <div className={styles.heroArt}>
          <Image src="/images/customer-potential-banner.webp" alt="" fill priority sizes="(max-width: 1318px) 88vw, 1160px" />
        </div>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <CaseStudyLabel />
            <h1 id="potential-title">{item.title}</h1>
            <p>從客戶行為推論理財需求，探索跨業合作與新產品、新通路。</p>
            <ExperienceBadge {...item.experience} className={styles.award} />
          </div>
        </div>
      </section>

      <section className={`container ${styles.overview}`} aria-labelledby="potential-overview">
        <div>
          <span className={styles.eyebrow}>PROJECT OVERVIEW</span>
          <div className={styles.headingRow}>
            <h2 id="potential-overview">專案概要</h2>
            <span className={styles.category}><Database size={18} aria-hidden="true" />{item.category}</span>
          </div>
          <p className={styles.bodyCopy}>運用客戶行為資料，建立行為與理財需求的關聯邏輯，辨識具理財潛力的客群，並據此探索跨業合作、新通路與新產品的可能性，為金融服務拓展更多成長機會。</p>
        </div>
        <div className={styles.overviewArt}>
          <Image src="/images/customer-potential-overview.webp" alt="城市中的兩位客戶與客群資料分析圖" fill sizes="(max-width: 740px) 100vw, 57vw" />
        </div>
      </section>

      <section className={styles.insights} aria-labelledby="potential-insights">
        <div className={`container ${styles.insightsInner}`}>
          <div>
            <span className={styles.eyebrow}>CORE INSIGHTS</span>
            <h2 id="potential-insights">關鍵觀點</h2>
          </div>
          <div className={styles.cards}>
            {item.sections.map(({ label, text }, index) => {
              const Icon = insightIcons[label];
              return (
                <article key={label} className={styles.card}>
                  <div className={styles.cardCopy}>
                    <h3><span>0{index + 1}</span>{label}</h3>
                    <p>{text}</p>
                  </div>
                  <Icon className={styles.cardIcon} strokeWidth={1.6} aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`container ${styles.workflow}`} aria-labelledby="potential-workflow">
        <div className={styles.workflowIntro}>
          <div>
            <span className={styles.eyebrow}>WORKFLOW</span>
            <h2 id="potential-workflow">分析流程與應用</h2>
          </div>
          <p className={styles.bodyCopy}>從客戶的日常行為出發，推論潛在的理財需求，鎖定具潛力的客群，並延伸出多元的商業機會。</p>
        </div>
        <div className={styles.flow}>
          <ol className={styles.steps}>
            {steps.map(({ label, icon: Icon }) => (
              <li key={label}><Icon aria-hidden="true" /><span>{label}</span></li>
            ))}
          </ol>
          <ul className={styles.branches} aria-label="商業機會的三個方向">
            {opportunities.map(({ label, icon: Icon }) => (
              <li key={label}><Icon size={24} aria-hidden="true" />{label}</li>
            ))}
          </ul>
        </div>
      </section>

      <Cta
        headingId="potential-cta"
        title="從一個問題開始，一起找到下一步。"
      />
    </div>
  );
}
