import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, parent, animatedUnderline = true, className, children }: { eyebrow: string; title: string; description: string; parent?: { label: string; href: string }; animatedUnderline?: boolean; className?: string; children?: ReactNode }) {
  return (
    <section className={className ? `page-hero ${className}` : "page-hero"}>
      <div className="container">
        <div className="breadcrumbs"><Link href="/">首頁</Link><ArrowRight size={13} />{parent && <><Link href={parent.href}>{parent.label}</Link><ArrowRight size={13} /></>}<span>{title}</span></div>
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1 data-scroll-title={animatedUnderline ? "" : undefined}>{title}</h1>
        <p>{description}</p>
        {children}
        <div className="page-hero-decor" aria-hidden="true" />
      </div>
    </section>
  );
}
