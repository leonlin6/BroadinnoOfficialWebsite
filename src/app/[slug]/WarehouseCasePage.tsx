import Link from "next/link";
import {
  ArrowDownUp, ArrowRight, BarChart3, Check, CircleCheck, Coins,
  Database, FileText, Gauge, Gem, Layers3, SearchCheck, Server,
  Settings2, ShieldCheck, Target, UsersRound,
} from "lucide-react";
import styles from "./warehouse-case.module.css";

const challenges = [
  { icon: ArrowDownUp, title: "資料進出管理", text: "資料來源多元、格式不一，進出流程與權責需要清晰。" },
  { icon: Layers3, title: "資料使用效率", text: "資料取得與應用流程複雜，影響業務與分析的即時性與彈性。" },
  { icon: Coins, title: "維運成本", text: "資料倉儲與相關環境的管理與維護成本相對較高。" },
  { icon: Gem, title: "資料價值轉換", text: "資料資產尚未充分發揮，仍有進一步轉化為業務價值的空間。" },
] as const;

const healthStages = [
  { title: "資料來源", icon: Database, items: ["核心業務資料", "周邊系統資料", "外部參考資料"], tone: "blue" },
  { title: "資料品質檢查", icon: SearchCheck, items: ["完整性檢視", "一致性檢查", "正確性驗證", "異常資料識別"], tone: "blue" },
  { title: "整合與治理", icon: Layers3, items: ["資料整合", "主資料管理", "資料標準", "治理規則"], tone: "teal" },
  { title: "分析與應用", icon: BarChart3, items: ["業務分析支援", "客戶洞察應用", "跨域資料整合", "報表與決策支援"], tone: "blue" },
  { title: "Data to Value", icon: Target, items: ["提升資料可用性", "優化資源與成本", "強化業務應用", "創造更多商業價值"], tone: "teal" },
] as const;

const methods = [
  { title: "既有環境評估", text: "檢視資料倉儲或數據中台的整體架構、資料流程與使用現況，盤點資料資產與治理基礎。" },
  { title: "問題辨識", text: "從資料進出、品質、使用效率與維運成本等面向，找出現行管理與應用上的主要課題。" },
  { title: "改善方向", text: "依據企業目標與現況，規劃資料整合、品質治理、流程優化與成本控管等可行方向。" },
  { title: "價值應用", text: "結合業務需求，探索資料在客戶分析、業務經營與管理決策等面向的應用可能，推動資料資產的持續價值。" },
] as const;

const outcomes = [
  { icon: Coins, title: "成本控制方向", text: "檢視維運與資源使用狀況，評估優化作法，尋找更具效益的管理模式。" },
  { icon: Gauge, title: "資料使用效率", text: "簡化資料取得與應用流程，提升業務與分析需求的支援效率。" },
  { icon: Layers3, title: "資料資產價值", text: "強化資料治理與品質，提升資料的可用性與可信度，擴大業務應用範圍。" },
  { icon: Target, title: "決策支援", text: "整合關鍵資料，支援業務分析與經營判斷，提升決策的完整性與時效性。" },
] as const;

function Accent() {
  return <span className={styles.accent} aria-hidden="true" />;
}

export function WarehouseCasePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="warehouse-title">
        <div className={"container " + styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>CASE STUDY / DATA INFRASTRUCTURE</span>
            <h1 id="warehouse-title">金控公司資料倉儲<br />建置及應用</h1>
            <Accent />
            <p>針對金控企業既有資料倉儲與數據中台，進行資料整合、品質治理與使用流程檢視，強化資料資產管理與應用價值，協助企業降低維運成本並拓展資料價值。</p>
          </div>
          <div className={styles.pipelineWrap}>
            <div className={styles.pipeline} aria-label="資料由來源、整合、倉儲進入分析應用的概念流程">
              <div className={styles.pipelineCard}>
                <strong>資料來源</strong>
                <div><Database /><span>核心業務系統</span></div>
                <div><Layers3 /><span>周邊業務系統</span></div>
                <div><FileText /><span>外部資料</span></div>
              </div>
              <ArrowRight className={styles.pipelineArrow} aria-hidden="true" />
              <div className={styles.pipelineCard}>
                <strong>資料整合</strong>
                <div><Settings2 /><span>資料擷取與盤整</span></div>
                <div><CircleCheck /><span>資料清洗與轉換</span></div>
                <div><ShieldCheck /><span>資料品質檢核</span></div>
              </div>
              <ArrowRight className={styles.pipelineArrow} aria-hidden="true" />
              <div className={styles.pipelineCard + " " + styles.warehouseCard}>
                <strong>資料倉儲</strong>
                <Database className={styles.warehouseIcon} strokeWidth={1.35} aria-hidden="true" />
                <span>可用的資料資產</span>
              </div>
              <ArrowRight className={styles.pipelineArrow} aria-hidden="true" />
              <div className={styles.pipelineCard}>
                <strong>分析應用</strong>
                <div><BarChart3 /><span>客戶分析</span></div>
                <div><UsersRound /><span>業務應用</span></div>
                <div><Target /><span>管理決策</span></div>
              </div>
            </div>
            <span className={styles.diagramNote}>概念架構示意・非客戶實際系統</span>
          </div>
        </div>
      </section>

      <section className={styles.context} aria-labelledby="context-title">
        <div className="container">
          <h2 id="context-title">既有環境與治理課題</h2><Accent />
          <div className={styles.contextGrid}>
            <div className={styles.contextLeft}>
              <div className={styles.serverArt} aria-hidden="true">
                <div className={styles.serverStack}><Server /><Server /><Server /></div>
                <div className={styles.serverDatabase}><Database /><BarChart3 /></div>
              </div>
              <div className={styles.contextCopy}>
                <h3>多數金控企業已具備<br />資料倉儲或數據中台</h3>
                <p>作為整合各業務資料、支援分析與決策的重要基礎，但在長期運作與業務需求變化下，仍需持續檢視資料治理與應用效能。</p>
              </div>
            </div>
            <div className={styles.challengeList}>
              <h3>常見的管理與維護挑戰</h3>
              {challenges.map(({ icon: Icon, title, text }) => <div className={styles.challenge} key={title}><span><Icon size={25} strokeWidth={1.8} /></span><div><strong>{title}</strong><p>{text}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.health} aria-labelledby="health-title">
        <div className={"container " + styles.healthPanel}>
          <h2 id="health-title">Data Health Check｜從資料治理走向價值</h2>
          <p>透過系統化的資料健檢，檢視資料的完整性、品質、治理與應用，協助企業找到成本控制與資料價值提升的方向。</p>
          <div className={styles.healthFlow}>
            {healthStages.map(({ title, icon: Icon, items, tone }, index) => (
              <div className={styles.healthStageWrap} key={title}>
                <div className={styles.healthStage}>
                  <strong className={tone === "teal" ? styles.stageTeal : styles.stageBlue}>{title}</strong>
                  <Icon className={styles.stageIcon} size={38} strokeWidth={1.5} aria-hidden="true" />
                  <ul>{items.map((item) => <li key={item}><Check size={14} strokeWidth={3} aria-hidden="true" />{item}</li>)}</ul>
                </div>
                {index < healthStages.length - 1 && <ArrowRight className={styles.flowArrow} size={25} strokeWidth={2.5} aria-hidden="true" />}
              </div>
            ))}
          </div>
          <span className={styles.healthNote}>資料治理基礎，支援後續分析與應用</span>
        </div>
      </section>

      <section className={styles.method} aria-labelledby="method-title">
        <div className={"container " + styles.methodGrid}>
          <div className={styles.sectionIntro}><h2 id="method-title">顧問工作方式</h2><Accent /><p>以資料治理與應用價值為導向，透過階段式的顧問作業，協助企業檢視現況、釐清問題，並提出可行的改善方向與應用場景。</p></div>
          <ol className={styles.methodList}>
            {methods.map(({ title, text }, index) => <li key={title}><span className={styles.methodNumber}>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className={styles.value} aria-labelledby="value-title">
        <div className={"container " + styles.valueGrid}>
          <div className={styles.sectionIntro}><h2 id="value-title">服務價值與預期方向</h2><Accent /><p>透過資料健檢與治理規劃，協助企業在成本、效率、資料資產與決策應用等面向，創造更具深度的資料價值。</p></div>
          <div className={styles.valueItems}>{outcomes.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={42} strokeWidth={1.6} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="warehouse-cta-title">
        <div className={"container " + styles.ctaInner}><h2 id="warehouse-cta-title">讓企業資料，真正轉化為決策價值</h2><Link href="/consultation-appointment/">聯絡顧問 <ArrowRight size={19} /></Link></div>
      </section>
    </div>
  );
}
