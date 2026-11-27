import Image from "next/image";
import { Cta } from "@/components/Cta";
import { ExperienceBadge } from "@/components/ExperienceBadge";
import { cases } from "@/lib/content";
import {
  CalendarDays, Check, Gift, Heart,
  House, Info, Layers3, RefreshCw, ShoppingCart, Store,
  Target, UserRound, UsersRound,
} from "lucide-react";
import { CaseStudyLabel } from "./CaseStudyLabel";
import styles from "./appliance-case.module.css";

const challenges = [
  { icon: CalendarDays, title: "回購週期較長", text: "家電產品耐用度高，客戶回購週期長，更需要了解客戶貢獻度。" },
  { icon: UserRound, title: "客戶忠誠度經營", text: "將管理視角提升至 HouseHold / Family 維度，培養忠誠度並尋找更多銷售機會。" },
  { icon: Store, title: "通路與經銷商依賴", text: "對通路、經銷商依賴度高，直接價格的掌控力低。" },
  { icon: ShoppingCart, title: "線上及實體通路競爭", text: "網路直銷也面臨與實體通路競爭的困局。" },
] as const;

const signals = [
  { icon: UsersRound, title: "家庭成員", items: ["父母", "子女", "同住家人"] },
  { icon: House, title: "家電持有情況", items: ["冰箱、洗衣機", "空調、電視", "廚房家電"] },
  { icon: ShoppingCart, title: "消費偏好", items: ["節能省電", "智慧家電", "品質與售後"] },
  { icon: Target, title: "潛在需求", items: ["升級節能機型", "添購生活家電", "成家／換屋添購"] },
] as const;

const personas = [
  { image: "/images/appliance-newlywed.webp", alt: "新婚夫妻在家中", icon: House, title: "新成家族群", text: "剛成立家庭，規劃家電基礎配置，關注功能性與預算。", tags: ["首次購買", "整套規劃"] },
  { image: "/images/appliance-replacement.webp", alt: "家庭討論家電選購", icon: RefreshCw, title: "家庭換購族群", text: "既有家電使用多年，關注升級、節能與更便利的智慧功能。", tags: ["汰舊換新", "效能升級"] },
  { image: "/images/appliance-loyal.webp", alt: "熟齡夫妻在家中", icon: Heart, title: "長期品牌客戶", text: "對品牌有高度信任，重視服務與長期使用體驗。", tags: ["品牌忠誠", "加值服務"] },
] as const;

const segmentBars = [
  { label: "新成家族群", value: 34 },
  { label: "家庭換購族群", value: 41 },
  { label: "長期品牌客戶", value: 25 },
] as const;

function Accent() {
  return <span className={styles.accent} aria-hidden="true" />;
}

export function ApplianceCasePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="appliance-title">
        <Image className={styles.heroImage} src="/images/appliance-family-hero.webp" alt="一家人在明亮的家中使用筆電" fill priority sizes="100vw" />
        <div className={styles.heroFade} aria-hidden="true" />
        <div className={"container " + styles.heroInner}>
          <div className={styles.heroCopy}>
            <CaseStudyLabel />
            <h1 id="appliance-title" >家電產業客戶分群<br />及行銷推廣</h1>
            <Accent />
            <p>從客戶貢獻度與較長的回購週期出發，以 HouseHold / Family 維度理解客戶，再結合 Open Data 尋找銷售熱點與區域。</p>
            <div className={styles.heroTags}><span>家電產業</span><span>客戶分群</span><span>精準行銷</span><span>忠誠經營</span></div>
            <ExperienceBadge {...cases[1].experience} className={styles.experience} />
          </div>
      
        </div>
      </section>

      <section className={styles.challengeSection} aria-labelledby="challenge-title">
        <div className={"container " + styles.challengeGrid}>
          <div className={styles.sectionIntro}><Accent /><span>產業挑戰</span><h2 id="challenge-title">家電業如何更貼近<br />家庭客戶的真實需求？</h2></div>
          <div className={styles.challengeCards}>{challenges.map(({ icon: Icon, title, text }) => <article key={title}><span className={styles.iconCircle}><Icon size={32} strokeWidth={1.7} /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className={styles.householdSection} aria-labelledby="household-title">
        <div className={"container " + styles.householdPanel}>
          <div className={styles.householdIntro}><Accent /><span>家庭客戶分群分析</span><h2 id="household-title">以家庭為單位，<br />描繪完整的消費輪廓</h2><p>建立 HouseHold 等級的客戶分群，結合 Open Data 補充區域資訊，提供銷售熱點與可評估的銷售區域。</p></div>
          <div className={styles.householdDiagram} aria-label="家庭客群由家庭成員、家電持有、消費偏好與潛在需求組成的概念圖">
            {signals.map(({ icon: Icon, title, items }, index) => <div className={`${styles.signalCard} ${styles[`signal${index + 1}`]}`} key={title}><strong><Icon size={18} />{title}</strong><ul>{items.map((item) => <li key={item}><Check size={13} aria-hidden="true" />{item}</li>)}</ul></div>)}
            <div className={styles.familyCore}><House size={112} strokeWidth={1.25} aria-hidden="true" /><UsersRound size={66} strokeWidth={1.45} aria-hidden="true" /><strong>家庭帳戶</strong></div>
          </div>
        </div>
      </section>

      <section className={styles.personaSection} aria-labelledby="persona-title">
        <div className={"container " + styles.personaGrid}>
          <div className={styles.personaIntro}><Accent /><span>客群輪廓</span><h2 id="persona-title">從生活情境<br />發掘不同客群機會</h2></div>
          <div className={styles.personaCards}>{personas.map(({ image, alt, icon: Icon, title, text, tags }) => <article className={styles.personaCard} key={title}><div className={styles.personaImage}><Image src={image} alt={alt} fill sizes="(max-width: 650px) 100vw, 25vw" /></div><div className={styles.personaBody}><h3><Icon size={27} strokeWidth={1.7} />{title}</h3><p>{text}</p><div>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </div>
      </section>

      <section className={styles.insightSection} aria-labelledby="insight-title">
        <div className={"container " + styles.insightGrid}>
          <div className={styles.insightIntro}><Accent /><span>行銷洞察應用</span><h2 id="insight-title" >數據驅動的<br />精準行銷規劃</h2><p>運用客戶分級制度與 Reward Program Tracking 的相關經驗，結合客戶分群與區域熱點，規劃行銷推廣方向。</p></div>
          <div className={styles.dashboard} aria-label="行銷分析儀表板，圖表數值不代表實際成果">
            <div className={styles.dashboardTitle}>行銷分析儀表板 </div>
            <div className={styles.dashboardGrid}>
              <div className={styles.regionPanel}><h3>區域銷售熱點</h3><div className={styles.mapBox}><Image className={styles.mapImage} src="/images/appliance-region-sales-heatmap.png" alt="區域銷售熱點示意圖，藍綠色分區與高低熱度圖例" width={1208} height={1302} sizes="(max-width: 420px) 100vw, (max-width: 900px) 50vw, 20vw" /></div></div>
              <div className={styles.middlePanels}><div><h3><Layers3 size={24} />Open Data 整合</h3><p>結合公開資料，補充區域、人口與生活型態資訊。</p></div><div><h3><UsersRound size={24} />客戶分群</h3>{segmentBars.map(({ label, value }) => <div className={styles.segmentRow} key={label}><span>{label}</span><i><b style={{ width: `${value * 2}%` }} /></i><strong>{value}%</strong></div>)}</div></div>
              <div className={styles.rewardPanel}><h3><Gift size={23} />Reward Program 追蹤</h3><span>會員參與率</span><strong>72%</strong><div className={styles.miniChart} aria-hidden="true">{[22,28,35,31,42,56,64,76].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        headingId="appliance-cta-title"
        title="善用客戶數據，讓家電行銷更貼近生活"
        description="與我們的顧問團隊討論，打造適合您品牌的客戶洞察與行銷策略。"
      />
    </div>
  );
}
