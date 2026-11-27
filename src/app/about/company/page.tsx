import type { Metadata } from "next";
import {
  BarChart3,
  CalendarDays,
  ClipboardCheck,
  Cpu,
  Flag,
  Landmark,
  Layers3,
  Sprout,
  Target,
  UsersRound,
} from "lucide-react";
import styles from "./company.module.css";

export const metadata: Metadata = {
  title: "公司介紹",
  description:
    "認識博創數科 Broadinno：以淵博知識與創新思維，提供數據分析、數位轉型、金融科技及專案管理服務。",
  alternates: { canonical: "/about/company/" },
};

const values = [
  {
    character: "博",
    title: "淵博的知識",
    description: "以廣泛而深厚的專業知識為基礎，洞察產業與趨勢，提供更全面的觀點。",
  },
  {
    character: "創",
    title: "創新的想法與做法",
    description: "以開放與創新的思維，結合數據、數位與科技，為客戶設計更有效、更具前瞻的解決方案。",
  },
];

const storyFacts = [
  { icon: Flag, title: "成立原由", description: "為客戶找到答案，提供建議。" },
  { icon: CalendarDays, title: "成立時間", description: "2024 年底。" },
  {
    icon: UsersRound,
    title: "團隊特質",
    description: "豐富經驗、開放心態、顧問方法、分享熱誠、務實執行。",
  },
];

const services = [
  {
    icon: BarChart3,
    title: "數據分析",
    description: "從數據中發掘洞察，支持決策與業務成長。",
  },
  {
    icon: Layers3,
    title: "數位轉型",
    description: "規劃並推動數位化，提升營運效率與競爭力。",
  },
  {
    icon: Landmark,
    title: "金融科技",
    description: "結合金融與科技，打造創新應用與服務模式。",
  },
  {
    icon: ClipboardCheck,
    title: "專案管理",
    description: "以專業方法與執行力，確保專案目標如期達成。",
  },
];

const vision = [
  { icon: Cpu, text: "運用 AI 及科技提供整合顧問與管理服務。" },
  { icon: Layers3, text: "We are SI, but Solution Integration。" },
  { icon: UsersRound, text: "培養各世代獨立管理顧問。" },
  { icon: Target, text: "專注 AI 應用及金融科技，成為客戶夥伴。" },
  { icon: Sprout, text: "永續經營，持續提供有質量的專業服務。" },
];

export default function CompanyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="company-title">
        <div className={"container " + styles.heroInner}>
          <h1 id="company-title">關於博創</h1>
          <p>以淵博知識與創新思維，整合最佳解決方案</p>
        </div>
      </section>

      <section className={styles.overview} aria-labelledby="overview-title">
        <div className={"container " + styles.overviewGrid}>
          <div className={styles.overviewCopy}>
            <span className={styles.eyebrow}>COMPANY</span>
            <h2 id="overview-title" data-scroll-title>公司簡介</h2>
            <p>
              博創數科（Broadinno）是一家管理顧問公司，提供整合數據、數位與科技的專業顧問服務，協助企業在變動的環境中釐清問題、擬定策略、落實解決方案，創造可落地的業務價值。
            </p>
          </div>
          <div className={styles.nameValues}>
            {values.map(({ character, title, description }) => (
              <div className={styles.nameValue} key={character}>
                <span className={styles.valueGlyph} aria-hidden="true">
                  {character}
                </span>
                <span className={styles.valueSlash} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.story} aria-labelledby="story-title">
        <div className={"container " + styles.storyGrid}>
          <div className={styles.storyImageSpace} aria-hidden="true" />
          <div className={styles.storyHeading}>
            <span className={styles.eyebrow}>BRAND STORY</span>
            <h2 id="story-title" data-scroll-title>品牌故事</h2>
          </div>
          <div className={styles.storyFacts}>
            {storyFacts.map(({ icon: Icon, title, description }) => (
              <div className={styles.storyFact} key={title}>
                <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div className="container">
          <div className={styles.servicesHeading}>
            <span className={styles.eyebrow}>SERVICES</span>
            <h2 id="services-title" data-scroll-title>專業服務領域</h2>
          </div>
          <div className={styles.serviceGrid}>
            {services.map(({ icon: Icon, title, description }) => (
              <article className={styles.serviceCard} key={title}>
                <div className={styles.serviceCardHeading}>
                  <Icon size={39} strokeWidth={1.55} aria-hidden="true" />
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.vision} aria-labelledby="vision-title">
        <div className={"container " + styles.visionGrid}>
          <div className={styles.visionHeading}>
            <span className={styles.eyebrow}>OUR VISION</span>
            <h2 id="vision-title" data-scroll-title>我們的願景</h2>
          </div>
          <ul className={styles.visionList}>
            {vision.map(({ icon: Icon, text }) => (
              <li key={text}>
                <span className={styles.visionIcon}>
                  <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
