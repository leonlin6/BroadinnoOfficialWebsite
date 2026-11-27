import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Box, CarFront, ChartNoAxesCombined, Check, Coins, Database,
  Gem, Heart, Layers3, Network, Search, Settings, UsersRound, Wallet,
} from "lucide-react";
import styles from "./motor-industry.module.css";

const highlights = [
  { icon: CarFront, title: "汽車產業實戰經驗", text: "理解產業特性與業務場景" },
  { icon: Layers3, title: "數據治理與整合", text: "建立一致、可信的數據基礎" },
  { icon: ChartNoAxesCombined, title: "分析組織與流程", text: "讓分析結果成為業務決策的依據" },
  { icon: Gem, title: "可衡量的業務價值", text: "提升市場價值與經營效益" },
];

const insights = [
  { icon: Database, title: "Hybrid Thinking on Data", image: "data", text: "客戶與車輛各有自己的識別主鍵。透過兩者的對應關係，把客戶行為與車輛資料連起來。" },
  { icon: Coins, title: "Financing Impact", image: "finance", text: "結合融資條件、可支配所得與購車偏好，分析哪些客群適合哪些車款與融資方案。" },
  { icon: Network, title: "i科技", image: "aiot", text: "將 AIoT 設備與車輛資料納入分析，對照駕駛行為，理解客戶如何使用車輛。" },
  { icon: Settings, title: "產品型組織 vs 客戶型組織", image: "organization", text: "依據團隊負責的產品或客群，訂定任務與 KPI，建立從資料分析到業務應用的工作流程。" },
];

const organizations = [
  { icon: Box, title: "產品型組織", points: ["以產品或車型為核心", "追蹤各車型的銷售與獲利", "KPI 涵蓋產品表現、滲透率與利潤貢獻"] },
  { icon: UsersRound, title: "客戶型組織", points: ["以客戶或客群為核心", "經營客戶關係，提升客戶價值", "KPI 涵蓋客戶價值、轉換率、留存率與滿意度"] },
];

const outcomes = ["擬定更精準的客群與產品策略", "改善融資方案與申辦轉換率", "提升客戶終身價值（CLV）", "支援經營決策，提升市場價值"];
const steps = [
  { icon: Search, title: "Health Check", points: ["盤點現有資料、系統與流程", "評估數據治理與分析成熟度", "找出關鍵問題與改善重點"] },
  { icon: Layers3, title: "Re-Engineering on Data", points: ["重整資料架構與治理機制", "建立標準化的分析與產出流程", "整合資料，連結實際業務場景"] },
  { icon: UsersRound, title: "組織調整", points: ["設計分析組織與職責分工", "訂定任務 KPI 與運作機制", "導入新流程並追蹤執行成效"] },
];

function Checklist({ points }: { points: string[] }) {
  return <ul className={styles.checklist}>{points.map(point => (
    <li key={point}><Check size={17} aria-hidden="true" />{point}</li>
  ))}</ul>;
}

export function MotorIndustryContent() {
  return (
    <div className={styles.content}>
      <div className={styles.strip}>
        <ul className={`container ${styles.highlights}`} aria-label="專案特色">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title}><Icon aria-hidden="true" /><div><strong>{title}</strong><span>{text}</span></div></li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.body}`}>
        <section aria-labelledby="motor-insights">
          <h2 id="motor-insights">專案核心觀點</h2>
          <p>從數據、組織與流程三個面向，建立汽車產業的數據驅動營運模式。</p>
          <div className={styles.insights}>
            {insights.map(({ icon: Icon, title, image, text }) => (
              <article key={title} className={styles.insight}>
                <div><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></div>
                <div className={styles.art} style={{ backgroundImage: `url(/images/motor-${image}.webp)` }} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <div className={styles.analysis}>
          <section aria-labelledby="motor-organization">
            <h2 id="motor-organization">產品型組織 vs 客戶型組織</h2>
            <p>依業務目標與應用情境，選擇合適的分工方式、衡量指標與分析流程。</p>
            <div className={styles.comparison}>
              {organizations.map(({ icon: Icon, title, points }) => (
                <article key={title}><h3><Icon aria-hidden="true" />{title}</h3><Checklist points={points} /></article>
              ))}
              <span className={styles.vs} aria-hidden="true">VS</span>
            </div>
          </section>
          <section aria-labelledby="motor-financing">
            <h2 id="motor-financing">Financing Impact：從數據到價值</h2>
            <p>把購車預算、融資條件與行為偏好放在一起分析，讓模型貼近市場與客戶需求。</p>
            <div className={styles.impact}>
              <figure className={styles.venn} aria-label="融資、可支配所得與行為偏好三個面向的交集">
                <div><Database aria-hidden="true" /><strong>融資</strong><small>Financing</small></div>
                <div><Wallet aria-hidden="true" /><strong>可支配所得</strong><small>Disposable Income</small></div>
                <div><Heart aria-hidden="true" /><strong>行為偏好</strong><small>Behavior Preference</small></div>
                <span><CarFront size={22} aria-hidden="true" /></span>
              </figure>
              <ArrowRight className={styles.flowArrow} aria-hidden="true" />
              <article className={styles.outcome}><h3><ChartNoAxesCombined aria-hidden="true" />分析部門創造的價值</h3><Checklist points={outcomes} /></article>
            </div>
          </section>
        </div>

        <section className={styles.solution} aria-labelledby="motor-solution">
          <h2 id="motor-solution">方案：從診斷到組織落地的整體規劃</h2>
          <p>先盤點資料與系統，再重整資料流程，最後將分析任務與責任分配到團隊。</p>
          <ol className={styles.steps}>
            {steps.map(({ icon: Icon, title, points }, index) => (
              <li key={title}>
                <h3><Icon aria-hidden="true" /><span><small>{String(index + 1).padStart(2, "0")}</small>{title}</span></h3>
                <Checklist points={points} />
              </li>
            ))}
          </ol>
        </section>
        <Link className={styles.back} href="/case-studies/"><ArrowLeft size={17} aria-hidden="true" />返回案例總覽</Link>
      </div>
    </div>
  );
}
