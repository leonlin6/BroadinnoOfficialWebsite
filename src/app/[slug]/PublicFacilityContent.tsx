import Image from "next/image";
import { Cta } from "@/components/Cta";
import {
  ChartNoAxesColumnIncreasing, ChevronRight, CreditCard, Database,
  Factory, Handshake, Layers, Leaf, MapPin, ShieldCheck, Target, UsersRound, Wifi, Zap,
} from "lucide-react";
import type { CaseStudy } from "@/lib/content";
import styles from "./public-facility.module.css";

const overview = [
  { title: "產業情境", icon: Factory, text: "公用事業具備穩定且廣大的客戶基礎，涵蓋企業、家庭與個人等不同客群，服務與產品組合多元。" },
  { title: "資料觀察", icon: Database, text: "整合客戶基本資料、使用量、繳費頻率、繳費行為與地理區域等資料，有助於描繪客戶價值與需求輪廓。" },
  { title: "服務策略", icon: Target, text: "運用 RFM 分群與地理區域分析，識別高價值與潛力客群，並規劃跨產品／服務的交叉銷售策略。" },
];

const insightIcons = [UsersRound, ChartNoAxesColumnIncreasing, Layers, Handshake];
const sources = [
  { icon: Database, label: "客戶資料" }, { icon: Zap, label: "使用行為", detail: "用電、用水、用氣" },
  { icon: CreditCard, label: "繳費記錄" }, { icon: MapPin, label: "地理區域" },
];
const segments = [
  ["高價值客群", "高頻・高額"], ["穩定客群", "中頻・穩定"], ["潛力客群", "低頻・可開發"],
];
const opportunities = [
  { icon: Wifi, label: "網路服務", detail: "家庭上網、商用網路" },
  { icon: ShieldCheck, label: "居家安全", detail: "監控、智慧居家" },
  { icon: Leaf, label: "節能方案", detail: "節電、節能設備" },
];

function SegmentationDiagram() {
  return (
    <div className={styles.segmentation}>
      <ul className={styles.sources}>
        {sources.map(({ icon: Icon, label, detail }) => (
          <li key={label}><Icon aria-hidden="true" /><span>{label}{detail && <small>{detail}</small>}</span></li>
        ))}
      </ul>
      <div className={styles.donut}>
        <div><UsersRound aria-hidden="true" /><strong>客戶分群</strong><small>RFM × 區域 × 行為</small></div>
      </div>
      <ul className={styles.segments}>
        {segments.map(([label, detail]) => <li key={label}><strong>{label}</strong><small>{detail}</small></li>)}
      </ul>
    </div>
  );
}

function OpportunityDiagram() {
  return (
    <div className={styles.opportunities}>
      <div className={styles.region}>
        <h4>地理區域 × 客群機會</h4>
        <div className={styles.map}>
          <Image src="/images/utility-region-map.webp" alt="臺灣不同區域的需求熱度" width={94} height={146} />
          <div className={styles.legend}><strong>需求熱度</strong>{["高", "中", "低"].map(label => <span key={label}>{label}</span>)}</div>
        </div>
      </div>
      <div className={styles.funnel}>
        <h4>交叉銷售機會</h4>
        <ul>{opportunities.map(({ icon: Icon, label, detail }) => (
          <li key={label}><Icon aria-hidden="true" /><span><strong>{label}</strong><small>{detail}</small></span></li>
        ))}</ul>
      </div>
    </div>
  );
}

export function PublicFacilityContent({ item }: { item: Extract<CaseStudy, { slug: "customer-public-facility" }> }) {
  const [segmentation, crossSelling] = item.sections[3].points;
  return (
    <div className={styles.content}>
      <div className={`container ${styles.body}`}>
        <section aria-labelledby="utility-overview">
          <p className={styles.eyebrow}>PROJECT OVERVIEW / {item.category}</p>
          <h2 className={styles.heading} id="utility-overview">案例課題、服務方向與相關經驗。</h2>
          <div className={styles.overview}>
            {overview.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <span className={styles.iconTile}><Icon aria-hidden="true" /></span>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="utility-insights">
          <h2 className={styles.heading} id="utility-insights">核心洞察：公用事業客戶分群的關鍵重點</h2>
          <div className={styles.insights}>
            {item.sections.map(({ label, text }, index) => {
              const Icon = insightIcons[index];
              return (
                <article key={label}>
                  <span className={styles.ribbon} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{label}</h3><Icon className={styles.insightIcon} aria-hidden="true" /><p>{text}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section aria-labelledby="utility-flow">
          <h2 className={styles.heading} id="utility-flow">服務流程與解決方案</h2>
          <div className={styles.flow}>
            <article><h3><b>1</b>{segmentation}</h3><SegmentationDiagram /></article>
            <ChevronRight className={styles.flowArrow} aria-hidden="true" />
            <article><h3><b>2</b>{crossSelling}</h3><OpportunityDiagram /></article>
          </div>
        </section>
      </div>
      <Cta
        headingId="utility-consultation"
        title="從一個問題開始，一起找到下一步。"
        description="讓我們了解您的需求，探索適合企業的解決方向。"
      />
    </div>
  );
}
