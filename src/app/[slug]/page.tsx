import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/Cta";
import { ExperienceBadge } from "@/components/ExperienceBadge";
import { PageHero } from "@/components/PageHero";
import { cases } from "@/lib/content";
import { WarehouseCasePage } from "./WarehouseCasePage";
import { ApplianceCasePage } from "./ApplianceCasePage";
import { LoanCreditCasePage } from "./LoanCreditCasePage";
import styles from "./case-detail.module.css";

export function generateStaticParams() { return cases.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.summary, alternates: { canonical: `/${slug}/` } };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) notFound();
  if (slug === "customer-data-warehouse") return <WarehouseCasePage />;
  if (slug === "customer-appliance") return <ApplianceCasePage />;
  if (slug === "customer-loan-credit") return <LoanCreditCasePage />;
  return (
    <>
      <PageHero eyebrow={`CASE STUDY / ${item.number}`} title={item.title} description={item.summary} parent={{ label: "客戶案例", href: "/case-studies/" }}>
        <ExperienceBadge {...item.experience} className={styles.experience} />
      </PageHero>
      <section className="section">
        <div className="container case-detail-grid">
          <aside className="case-detail-aside">
            <span className="eyebrow">PROJECT OVERVIEW</span>
            <strong>{item.category}</strong>
            <p>案例課題、服務方向與相關經驗。</p>
            <Link href="/case-studies/"><ArrowLeft size={17} /> 返回案例總覽</Link>
          </aside>
          <div className="case-detail-content">
            <div className="case-detail-intro"><span>{item.number}</span><h2 data-scroll-title>從產業情境出發，<br />找到問題的核心。</h2></div>
            {item.sections.map((section, index) => (
              <article className="case-detail-section" key={section.label}>
                <div><span>0{index + 1}</span><h3>{section.label}</h3></div>
                <div className={styles.sectionBody}>
                  <p>{section.text}</p>
                  {"points" in section && <ol className={styles.points}>{section.points.map((point) => <li key={point}>{point}</li>)}</ol>}
                </div>
              </article>
            ))}
            <Link className="button button-outline" href="/consultation-appointment/">討論相似需求 <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
