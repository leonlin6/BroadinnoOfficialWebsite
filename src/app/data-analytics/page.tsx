import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  MapPinned,
  Search,
  Waypoints,
} from "lucide-react";
import { Cta } from "@/components/Cta";
import styles from "../new-pages.module.css";
import trackStyles from "./data-analytics.module.css";

export const metadata: Metadata = {
  title: "數據分析服務申購",
  description:
    "可申購區域財富指數查詢與即問即答 AI 預測服務。兩項服務均由顧問依分析範圍與交付內容報價，確認報價後即可申購。",
  alternates: { canonical: "/data-analytics/" },
};

const steps = [
  {
    icon: Search,
    number: "01",
    title: "釐清業務問題",
    text: "先確認團隊要做哪項決策，以及需要哪些資訊才能做出判斷。",
  },
  {
    icon: Database,
    number: "02",
    title: "盤點與整合資料",
    text: "確認資料來源、欄位與品質，整理出可供分析的資料。",
  },
  {
    icon: ChartNoAxesCombined,
    number: "03",
    title: "分析差異與趨勢",
    text: "依問題選擇分群、指標或預測模型，找出值得關注的差異與趨勢。",
  },
  {
    icon: Waypoints,
    number: "04",
    title: "連結行動與追蹤",
    text: "將分析結果用於業務決策，並選定指標追蹤執行成效。",
  },
];

export default function DataAnalytics() {
  return (
    <>
      <section className={styles.featureHero}>
        <div className={"container " + styles.featureHeroGrid}>
          <div className={styles.featureHeroCopy}>
            <div className={styles.crumb}>
              <Link href="/">首頁</Link>
              <ArrowRight size={13} />
              數據分析服務
            </div>
            <span className={styles.eyebrow}>DATA ANALYTICS</span>
            <h1 data-scroll-title>可申購的數據分析服務</h1>
            <p>
              選擇適合您的數據分析服務。與顧問確認需求、服務內容及價格後，即可申購區域財富指數查詢或即問即答
              AI 預測。
            </p>
          </div>
          <div className={styles.featureHeroVisual}>
            <Image
              src="/images/service-data.webp"
              alt="數據分析儀表板"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section
        className={trackStyles.paths}
        id="analysis-paths"
        aria-labelledby="analysis-paths-title"
      >
        <div className="container">
          <div className={trackStyles.pathsHeading}>
            <span>ANALYTICS SERVICES</span>
            <h2
              id="analysis-paths-title"
              data-scroll-title
              data-scroll-title-center
            >
              可申購的數據分析服務
            </h2>
            <p>比較區域市場，或預測業務趨勢？請依您的分析目標選擇服務。</p>
          </div>
          <div className={trackStyles.pathGrid}>
            <Link className={trackStyles.pathCard} href="/wealth-index/">
              <span className={trackStyles.pathIcon}>
                <MapPinned size={31} strokeWidth={1.7} />
              </span>
              <span className={trackStyles.purchaseBadge}>可申購</span>
              <span className={trackStyles.pathNumber}>01 / WEALTH INDEX</span>
              <h3>區域財富指數查詢</h3>
              <p>
                財富指標(依據地理位置產生) <br />
                這個指標來自於公開資訊的整理與重新組合，並且用統計模型完成比對及驗證。並且已經在服務業及零售市場中實際應用於行銷專案或是產品包裝及促銷，有蠻穩定的解釋力。
                <br />
                可以協助您有效進行市場預測、風險評估與精準行銷。高品質的財富指標數據有助於掌握市場趨勢，提供競爭優勢。
              </p>

              <strong>
                查看服務與申購方式 <ArrowUpRight size={19} />
              </strong>
            </Link>
            <Link
              className={`${trackStyles.pathCard} ${trackStyles.aiPath}`}
              href="/ai-prediction/"
            >
              <span className={trackStyles.pathIcon}>
                <BrainCircuit size={31} strokeWidth={1.7} />
              </span>
              <span className={trackStyles.purchaseBadge}>可申購</span>
              <span className={trackStyles.pathNumber}>02 / AI PREDICTION</span>
              <h3>即問即答 AI 預測</h3>
              <p>
                即問即答之AI預測模組是一種基於人工智慧的即時分析技術，能迅速分析數據，並提供預測結果。
                <br />
                您可以應用於財務預測、市場行銷、風險評估等領域，預測事件之機率。
                <br />
                即時的AI預測不僅提高準確性，也大幅縮短分析時間，您可快速地掌握關鍵資訊並做出最佳選擇。
              </p>
              <strong>
                查看服務與申購方式 <ArrowUpRight size={19} />
              </strong>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.editorialSection}>
        <div className={"container " + styles.introGrid}>
          <div>
            <span className={styles.eyebrowDark}>HOW TO PURCHASE</span>
            <h2 data-scroll-title>如何詢價與申購</h2>
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
                顧問會透過信件與您確認分析範圍、資料及交付內容，再提供對應報價。
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>確認後申購</strong>
                您確認服務內容與價格後，確認辦理申購後，我方將提供付款方式，並完成申購流程後，提供報告給您。
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.paleSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrowDark}>OUR APPROACH</span>
            <h2 data-scroll-title data-scroll-title-center>
              數據分析的四個環節
            </h2>
            <p>從界定問題到追蹤成效，以下是我們與企業合作進行分析的方式。</p>
          </div>
          <div className={styles.stepGrid}>
            {steps.map(({ icon: Icon, number, title, text }) => (
              <article className={styles.stepCard} key={number}>
                <span>{number}</span>
                <h3 className={trackStyles.stepTitle}>
                  <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                  {title}
                </h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.editorialSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrowDark}>APPLICATIONS</span>
            <h2 data-scroll-title data-scroll-title-center>
              數據分析如何用在業務上
            </h2>
            <p>
              透過金融與家電產業的案例，了解企業如何運用資料改善營運、辨識客群與評估風險。
            </p>
          </div>
          <div className={styles.applicationGrid}>
            <Link
              href="/customer-data-warehouse/"
              className={styles.applicationCard}
            >
              <span>資料管理與價值</span>
              <h3>金控資料倉儲與應用</h3>
              <p>
                透過資料倉儲健檢，找出控制系統成本與提升資料使用效率的機會。
              </p>
              <b>
                閱讀案例 <ArrowUpRight size={17} />
              </b>
            </Link>
            <Link
              href="/customer-appliance/"
              className={styles.applicationCard}
            >
              <span>客戶洞察</span>
              <h3>客戶分群與行銷推廣</h3>
              <p>
                從個人與家庭的購買行為辨識客群，再結合公開資料尋找銷售熱點。
              </p>
              <b>
                閱讀案例 <ArrowUpRight size={17} />
              </b>
            </Link>
            <Link
              href="/customer-loan-credit/"
              className={styles.applicationCard}
            >
              <span>模型分析</span>
              <h3>市場分析與信用評分</h3>
              <p>結合經濟、區域與就業資料，運用授信經驗調整信用評分模型。</p>
              <b>
                閱讀案例 <ArrowUpRight size={17} />
              </b>
            </Link>
          </div>
        </div>
      </section>
      <section
        className={trackStyles.aiSection}
        id="ai-prediction"
        aria-labelledby="ai-prediction-title"
      >
        <div className={"container " + trackStyles.aiInner}>
          <span className={trackStyles.aiIcon}>
            <BrainCircuit size={34} strokeWidth={1.5} />
          </span>
          <div>
            <span className={trackStyles.aiEyebrow}>AI PREDICTION</span>
            <h2 id="ai-prediction-title" data-scroll-title>
              您的業務問題適合用 AI 預測嗎？
            </h2>
            <p>
              告訴顧問您想預測什麼，以及預測結果會用在哪項決策。我們會與您討論可行的做法與費用。
            </p>
          </div>
          <Link href="/ai-prediction/#request-form">
            洽詢價格與申購 <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <Cta
        title="向顧問洽詢申購價格"
        description="預約時請註明您感興趣的服務與使用情境，顧問將與您確認需求並提供報價。"
        buttonLabel="預約顧問詢價"
      />
    </>
  );
}
