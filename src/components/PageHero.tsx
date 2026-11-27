import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactElement, ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string | ReactElement;
  title: string;
  description: string;
  parent?: { label: string; href: string };
  showBreadcrumbs?: boolean;
  animatedUnderline?: boolean;
  className?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, parent, showBreadcrumbs = true, animatedUnderline = true, className, children }: PageHeroProps) {
  return (
    <section className={className ? `page-hero ${className}` : "page-hero"}>
      <div className="container">
        {showBreadcrumbs && (
          <div className="breadcrumbs"><Link href="/">首頁</Link><ArrowRight size={13} />{parent && <><Link href={parent.href}>{parent.label}</Link><ArrowRight size={13} /></>}<span>{title}</span></div>
        )}
        {typeof eyebrow === "string" ? <span className="eyebrow eyebrow-light">{eyebrow}</span> : eyebrow}
        <h1 data-scroll-title={animatedUnderline ? "" : undefined}>{title}</h1>
        <p>{description}</p>
        {children}
        <div className="page-hero-decor" aria-hidden="true" />
      </div>
    </section>
  );
}
