import styles from "./experience-badge.module.css";

export function ExperienceBadge({ rating, note, className = "" }: { rating: number; note: string; className?: string }) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  return (
    <div className={`${styles.badge} ${className}`}>
      <span className={styles.label}>經驗值</span>
      <div className={styles.frame}>
        <div className={styles.copy}>
          <strong className={styles.stars}><span aria-hidden="true">{stars}</span><span className={styles.srOnly}>{rating} 顆星，滿分 5 顆</span></strong>
          <small className={styles.note}>{note}</small>
        </div>
      </div>
    </div>
  );
}
