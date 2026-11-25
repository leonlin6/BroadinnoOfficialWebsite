"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { trackLeadSubmission } from "@/lib/analytics";
import styles from "./consultation.module.css";

const topics = [
  "資料治理與數據應用",
  "客戶分析與行銷應用",
  "風險與信用評分",
  "營運優化與數位轉型",
  "其他",
];

type SubmissionFeedback = {
  kind: "success" | "error";
  title: string;
  message: string;
};

export function ConsultationForm() {
  const [description, setDescription] = useState("");
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<SubmissionFeedback | null>(null);
  const requestId = useRef<string | null>(null);
  const submitting = useRef(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (feedback && dialog && !dialog.open) dialog.showModal();
  }, [feedback]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    if (description.trim().length < 20) {
      setFeedback({ kind: "error", title: "請確認表單內容", message: "詳細描述請至少輸入 20 個字。" });
      return;
    }
    submitting.current = true;
    setPending(true);

    const form = event.currentTarget;
    const values = new FormData(form);
    requestId.current ??= crypto.randomUUID();

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: requestId.current,
          name: values.get("name"),
          email: values.get("email"),
          phone: values.get("phone"),
          preferredTime: values.get("preferredTime"),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          topic: values.get("topic"),
          description: values.get("description"),
          consent: values.has("consent"),
          website: values.get("website"),
        }),
      });
      const result = await response.json() as { ok?: boolean };
      if (!response.ok || !result.ok) throw new Error("Submission failed");

      trackLeadSubmission("consultation");
      form.reset();
      setDescription("");
      setFeedback({ kind: "success", title: "預約需求已送出", message: "已收到您的諮詢需求，我們會透過 Email 與您確認時間。" });
      requestId.current = null;
    } catch {
      setFeedback({ kind: "error", title: "送出結果未確認", message: "目前無法確認是否收件成功。請稍後重試，或使用下方 Email 聯絡我們。" });
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  return <>
  <form onSubmit={handleSubmit}>
    <p className={styles.previewNotice}><ShieldCheck size={17} aria-hidden="true" />填寫後會將資料送交博創數科，用於聯繫及安排諮詢。選擇的時間為偏好時段，實際安排以回覆確認為準。</p>
    <div className={styles.formGrid}>
      <label className={styles.field}><span className={styles.fieldLabel}>姓名 <b>*</b></span><input className={styles.formControl} name="name" autoComplete="name" placeholder="請輸入您的姓名" required maxLength={80} /></label>
      <label className={styles.field}><span className={styles.fieldLabel}>Email <b>*</b></span><input className={styles.formControl} name="email" type="email" autoComplete="email" placeholder="name@company.com" required maxLength={254} /></label>
      <label className={styles.field}><span className={styles.fieldLabel}>聯絡電話</span><input className={styles.formControl} name="phone" type="tel" autoComplete="tel" placeholder="選填" maxLength={40} /></label>
      <label className={styles.field}><span className={styles.fieldLabel}>希望諮詢時間 <b>*</b></span><input className={styles.formControl} name="preferredTime" type="datetime-local" required /></label>
      <label className={[styles.field, styles.fullField].join(" ")}><span className={styles.fieldLabel}>主要問題 <b>*</b></span><select className={styles.formControl} name="topic" required defaultValue=""><option value="" disabled>請選擇諮詢主題</option>{topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}</select></label>
      <label className={[styles.field, styles.fullField].join(" ")}><span className={styles.fieldLabel}>詳細描述 <b>*</b></span><textarea className={[styles.formControl, styles.textarea].join(" ")} name="description" placeholder="請簡要說明需求或挑戰（至少 20 個字）" required minLength={20} maxLength={500} value={description} onChange={(event) => setDescription(event.target.value)} /></label>
    </div>
    <div className={styles.characterCount}>{description.length} / 500</div>
    <label className={styles.agreement}><input type="checkbox" name="consent" required /><span><b>*</b> 我已閱讀並同意「<Link href="/policy-privacy/">個資蒐集告知事項與隱私權政策</Link>」。</span></label>
    <div className={styles.honeypot} aria-hidden="true"><label>網站網址<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button className={styles.submitButton} type="submit" disabled={pending}><Send size={18} aria-hidden="true" />{pending ? "送出中…" : "送出諮詢申請"}</button>
  </form>
  <dialog
    ref={dialogRef}
    className={[styles.submissionDialog, feedback?.kind === "success" ? styles.dialogSuccess : styles.dialogError].join(" ")}
    aria-labelledby="consultation-dialog-title"
    aria-describedby="consultation-dialog-message"
    onClose={() => setFeedback(null)}
  >
    <div className={styles.dialogIcon} aria-hidden="true">
      {feedback?.kind === "success" ? <CheckCircle2 size={30} /> : <AlertCircle size={30} />}
    </div>
    <h2 id="consultation-dialog-title">{feedback?.title}</h2>
    <p id="consultation-dialog-message">{feedback?.message}</p>
    <button className={styles.dialogButton} type="button" onClick={() => dialogRef.current?.close()}>我知道了</button>
  </dialog>
  </>;
}
