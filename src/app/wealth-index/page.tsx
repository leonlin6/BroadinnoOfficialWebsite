import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  FileSpreadsheet,
  FileUp,
  Info,
  Layers3,
  MapPin,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { WealthRequestForm } from "./WealthRequestForm";
import { WealthRequestExamples } from "./WealthRequestExamples";
import editorialStyles from "../new-pages.module.css";
import trackStyles from "../data-analytics/data-analytics.module.css";
import styles from "./wealth-index.module.css";

export const metadata: Metadata = {
  title: "區域財富指數查詢｜數據分析服務",
  description:
    "了解博創數科區域財富指數服務：26 級相對分級、全台區域分析與批次地址比對，並提出報告申請需求。",
  alternates: { canonical: "/wealth-index/" },
};

const features = [
  {
    icon: Layers3,
    title: "26 級相對分級",
    text: "以 A–Z 共 26 個等級，提供細緻的區域財富相對參考指標。",
  },
  {
    icon: MapPin,
    title: "全台區域分析",
    text: "依縣市、鄉鎮市區及指定地址，討論合適的分析範圍。",
  },
  {
    icon: FileUp,
    title: "批次地址比對",
    text: "有多筆地址時，可洽詢 CSV／XLS 資料整理與批次比對方式。",
  },
];

const steps = [
  {
    icon: MapPin,
    number: "01",
    title: "資料來源與模型",
    text: "我們整合人口統計、地理區域與經濟發展等開放資料（Open Data），建立統計模型，推估各地點的相對財富水準。",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "分級方式",
    text: "指標共分 26 級，A 級最高，B 級次之，依序排列至最低的 Z 級。等級用於比較地區之間的相對差異，無法換算為實際財富金額。",
  },
  {
    icon: FileSpreadsheet,
    number: "03",
    title: "資料基準與客製化",
    text: "這項靜態指標以您提出需求的前一季季末為基準，反映當時的區域財富水準。如需納入其他分析面向，您可提供相關資料，由我們依需求重新計算。",
  },
];

export default function WealthIndexPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="wealth-title">
        <Image
          className={styles.heroImage}
          src="/images/wealth-index-banner.webp"
          alt="台灣 22 縣市區域財富分級圖，A 為相對較高等級，Z 為相對較低等級。"
          width={1938}
          height={812}
          priority
        />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="麵包屑">
              <Link href="/">首頁</Link>
              <ArrowRight size={13} />
              <Link href="/data-analytics/">數據分析服務</Link>
              <ArrowRight size={13} />
              <span>區域財富指數</span>
            </nav>
            <span className={styles.eyebrow}>
              DATA INTELLIGENCE / WEALTH INDEX
            </span>
            <h1 id="wealth-title" data-scroll-title>
              用數據
              <br />
              洞察區域<span>財富潛力</span>
            </h1>
            <p>
              申購區域財富指數查詢服務，比較不同地點的相對財富等級。顧問將依查詢範圍與交付內容提供報價。
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#request-form">
                洽詢價格與申購 <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.featureSection}
        aria-label="區域財富指數服務重點"
      >
        <div className={"container " + styles.featureGrid}>
          {features.map(({ icon: Icon, title, text }) => (
            <article className={styles.featureCard} key={title}>
              <Icon size={32} strokeWidth={1.65} />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.processSection}
        id="method"
        aria-labelledby="method-title"
      >
        <div className="container">
          <div className={styles.sectionHeading}>
            <span>HOW IT WORKS</span>
            <h2 id="method-title" data-scroll-title data-scroll-title-center>
              從需求到洞察，三步完成分析
            </h2>
            <p>
              透過區域財富指標，您可以比較不同地區的財富水準，作為業務拓展與策略管理的參考。
            </p>
          </div>
          <div className={styles.stepGrid}>
            {steps.map(({ icon: Icon, number, title, text }) => (
              <article className={styles.stepCard} key={number}>
                <span className={styles.stepNumber}>{number}</span>
                <Icon size={36} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.exampleSection}
        aria-labelledby="example-title"
      >
        <div className="container">
          <div className={styles.exampleHeader}>
            <span className={styles.eyebrow}>REQUEST EXAMPLES</span>
            <h2 id="example-title" data-scroll-title>
              需求提出範例
            </h2>
            <p>
              您可以依分析目的提出區域查詢、批次地址比對，或其他特定地點的需求。
            </p>
          </div>
          <WealthRequestExamples />
        </div>
      </section>

      <section
        className={`${editorialStyles.editorialSection} ${styles.purchaseSection}`}
        aria-labelledby="purchase-title"
      >
        <div className={"container " + editorialStyles.introGrid}>
          <div>
            <span className={editorialStyles.eyebrowDark}>HOW TO PURCHASE</span>
            <h2 id="purchase-title" data-scroll-title>
              如何詢價與申購
            </h2>
          </div>
          <ol className={trackStyles.purchaseSteps}>
            <li>
              <span>1</span>
              <div>
                <strong>提出需求</strong>
                在服務頁填寫分析區域、地址筆數，或想預測的業務問題與可用資料。
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>顧問確認內容並報價</strong>
                顧問與您確認分析範圍、資料及交付內容，再提供對應報價。
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>確認後申購</strong>
                您確認服務內容與價格後，即可透過顧問辦理申購。
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section
        className={styles.requestSection}
        id="request-form"
        aria-labelledby="request-title"
      >
        <div className={"container " + styles.requestGrid}>
          <div className={styles.requestCopy}>
            <span className={styles.eyebrow}>GET STARTED</span>
            <h2 id="request-title" data-scroll-title>
              洽詢價格與申購
            </h2>
            <p>
              請說明想分析的區域、地址筆數與使用情境。顧問會與您確認分析範圍、交付內容及價格，待您確認報價後辦理申購。
            </p>
            <div className={styles.requestHighlights}>
              <span>
                <SearchCheck size={19} />
                指定區域分析
              </span>
              <span>
                <FileSpreadsheet size={19} />
                批次地址比對
              </span>
              <span>
                <ShieldCheck size={19} />
                資料處理確認
              </span>
            </div>
          </div>
          <div className={styles.formCard}>
            <WealthRequestForm />
          </div>
        </div>
      </section>

      <p className={styles.footnote}>
        <Info size={16} />
        區域財富指數為相對分級參考，並非絕對財富值；A 為相對較高、Z
        為相對較低。實際分析內容依資料可用性與需求確認。
      </p>
    </div>
  );
}
