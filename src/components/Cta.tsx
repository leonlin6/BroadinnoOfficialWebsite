import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./cta.module.css";

type CtaProps = {
  title: ReactNode;
  description?: string;
  buttonLabel?: string;
  href?: string;
  id?: string;
  headingId?: string;
};

export function Cta({ title, description, buttonLabel = "預約諮詢", href = "/consultation-appointment/", id, headingId = "consultation-cta-title" }: CtaProps) {
  return (
    <section className={styles.cta} id={id} aria-labelledby={headingId}>
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 className={styles.title} id={headingId} data-scroll-title>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <Link href={href}>
          {buttonLabel}<ArrowRight size={20} strokeWidth={1.7} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
