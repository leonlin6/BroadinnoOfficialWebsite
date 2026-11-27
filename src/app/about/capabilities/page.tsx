import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  Database,
  Landmark,
  Layers3,
  Network,
  UsersRound,
} from "lucide-react";
import styles from "./capabilities.module.css";

export const metadata: Metadata = {
  title: "專業能力",
  description:
    "博創數科結合數據分析、數位轉型、金融科技與專案管理，協助企業從洞察走向執行。",
  alternates: { canonical: "/about/capabilities/" },
};

const strengths = [
  {
    icon: ChartNoAxesCombined,
    title: "AI 與資料應用能力",
    points: [
      "從資料盤點到分析與應用，建立清楚的決策依據",
      "評估 AI 與機器學習在行銷、風控與營運的應用",
      "整合客戶洞察與營運指標，支持企業持續優化",
    ],
  },
  {
    icon: Database,
    title: "模型與數據治理能力",
    points: [
      "串聯數據整合、分析模型與品質治理",
      "連結金融服務、新興支付與實際業務需求",
      "從洞察與分析出發，推動可執行的改善方案",
    ],
  },
  {
    icon: UsersRound,
    title: "專案與策略落地能力",
    points: [
      "理解流程、系統與組織之間的連動",
      "透過專案治理協調進度、資源與跨部門合作",
      "將策略轉成有節奏的行動，持續推進成果",
    ],
  },
];

const services = [
  {
    icon: ChartNoAxesCombined,
    number: "01",
    title: "數據分析",
    text: "從資料盤點到分析與應用，協助企業建立更清楚的客戶洞察、營運指標與決策依據。",
    href: "/data-analytics/",
    link: "探索數據分析服務",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "數位轉型",
    text: "理解流程、系統與組織的連動，評估科技應用如何支持企業的轉型目標。",
    href: "/management-consulting/",
    link: "探索管理顧問服務",
  },
  {
    icon: Landmark,
    number: "03",
    title: "金融科技",
    text: "關注金融服務、新興支付、AI 與區塊鏈的應用，連結技術發展與實際業務需求。",
    href: "/main-experties/",
    link: "探索主要諮詢領域",
  },
  {
    icon: Network,
    number: "04",
    title: "專案管理",
    text: "透過專案治理、進度與資源協調，協助企業把策略轉成有節奏的行動。",
    href: "/project-manager/",
    link: "探索專案辦公室服務",
  },
];

export default function Capabilities() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="capabilities-title">
        <Image
          className={styles.heroImage}
          src="/images/capabilities-team.jpg"
          alt="博創數科專業顧問團隊於現代辦公空間合影"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroWash} aria-hidden="true" />
        <div className={styles.heroFacet} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h1 id="capabilities-title">專業能力</h1>
            <p>
              結合產業經驗、數據科技與專案管理，
              <br />
              提供從策略、規劃到落地的完整服務，
              <br />
              協助企業實現數位與營運升級。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.experience} aria-label="產業與專案經驗">
        <div className={`container ${styles.experienceInner}`}>
          <div className={styles.experienceItem}>
            <Award aria-hidden="true" size={49} strokeWidth={1.5} />
            <div>
              <strong>
                30<span>+</span>
                <small>年</small>
              </strong>
              <p>金融及支付產業工作經驗</p>
            </div>
          </div>
          <div className={styles.experienceDivider} aria-hidden="true" />
          <div className={styles.experienceItem}>
            <Layers3 aria-hidden="true" size={49} strokeWidth={1.5} />
            <div>
              <strong>
                20<span>+</span>
                <small>年</small>
              </strong>
              <p>專案管理經驗</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.coreSection} aria-labelledby="core-title">
        <div className="container">
          <div className={styles.sectionIntro}>
            <h2 id="core-title" data-scroll-title data-scroll-title-center>經歷及核心能力</h2>
            <p>
              結合團隊級專案實戰、資料應用與 AI 技術，
              <br className={styles.desktopBreak} />
              提供從策略規劃、模型建置到數位轉型落地的完整支援。
            </p>
          </div>
          <div className={styles.coreGrid}>
            <figure className={styles.mixFigure}>
              <Image
                className={styles.mixImage}
                src="/images/capabilities-donut-chart.png"
                alt="核心能力組合：AI 應用 28%、資料分析 20%、模型風控 15%、數位轉型 15%、專案管理 12%、策略規劃 10%"
                width={1254}
                height={1254}
                sizes="(max-width: 800px) 100vw, 500px"
              />
            </figure>
            <div className={styles.strengths}>
              {strengths.map(({ icon: Icon, title, points }) => (
                <section
                  className={styles.strength}
                  key={title}
                  aria-label={title}
                >
                  <div className={styles.strengthHeading}>
                    <span>
                      <Icon size={29} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3>{title}</h3>
                  </div>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>
                        <Check size={15} strokeWidth={3} aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.servicesSection}
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className={styles.servicesIntro}>
            <h2 id="services-title" data-scroll-title data-scroll-title-center>四個服務方向</h2>
            <p>依企業目標、資料與組織現況，搭配適合的專業能力。</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map(({ icon: Icon, number, title, text, href, link }) => (
              <article className={styles.serviceCard} key={number}>
                <div className={styles.serviceTop}>
                  <span>{number}</span>
                  <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={href}>
                  {link}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Cta
        headingId="capabilities-cta-title"
        title="以實戰經驗與專業能力，成為企業數位轉型的最佳夥伴"
        buttonLabel="與我們聯繫"
      />
    </main>
  );
}
