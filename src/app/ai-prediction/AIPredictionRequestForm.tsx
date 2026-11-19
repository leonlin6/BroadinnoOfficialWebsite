"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import styles from "./ai-prediction.module.css";

type Feedback = { kind: "success" | "error"; title: string; message: string };

export function AIPredictionRequestForm() {
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
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

    const form = event.currentTarget;
    const values = new FormData(form);
    const requestType = String(values.get("requestType") || "").trim();
    const question = String(values.get("question") || "").trim();
    const description = `即問即答 AI 預測模組諮詢｜洽詢項目：${requestType}｜問題與需求：${question || "希望與顧問討論資料現況、預測情境及導入方式。"}`;
    requestId.current ??= crypto.randomUUID();
    submitting.current = true;
    setPending(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: requestId.current,
          name: values.get("name"),
          email: values.get("email"),
          phone: "",
          preferredTime: values.get("preferredTime"),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          topic: "資料治理與數據應用",
          description,
          consent: values.has("consent"),
          website: values.get("website"),
        }),
      });
      const result = await response.json() as { ok?: boolean };
      if (!response.ok || !result.ok) throw new Error("Submission failed");

      form.reset();
      requestId.current = null;
      setFeedback({ kind: "success", title: "諮詢需求已送出", message: "我們已收到您的 AI 預測服務需求，將透過 Email 與您確認後續討論。" });
    } catch {
      setFeedback({ kind: "error", title: "送出結果未確認", message: "目前無法確認是否收件成功。請稍後重試，或以 Email 聯絡我們。" });
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }

  return <>
    <form className={styles.requestForm} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label><span>姓名 <b>*</b></span><input name="name" autoComplete="name" placeholder="請輸入您的姓名" required maxLength={80} /></label>
        <label><span>電子郵件 <b>*</b></span><input name="email" type="email" autoComplete="email" placeholder="name@company.com" required maxLength={254} /></label>
        <label><span>洽詢項目 <b>*</b></span><select name="requestType" required defaultValue=""><option value="" disabled>請選擇洽詢項目</option><option>財務預測</option><option>市場行銷預測</option><option>風險評估</option><option>其他 AI 預測應用</option></select></label>
        <label><span>希望聯繫時間 <b>*</b></span><input name="preferredTime" type="datetime-local" required /></label>
        <label className={styles.fullField}><span>想了解的問題或需求</span><textarea name="question" placeholder="例如：想預測哪些結果？目前有哪些資料可供分析？" rows={4} maxLength={350} /></label>
      </div>
      <p className={styles.formHint}>送出後由專人聯繫，確認資料、應用情境與服務方式；此表單不會立即執行 AI 預測。</p>
      <label className={styles.consent}><input name="consent" type="checkbox" required /><span><b>*</b> 我已閱讀並同意<Link href="/policy-privacy/">個資蒐集告知事項與隱私權政策</Link>。</span></label>
      <div className={styles.honeypot} aria-hidden="true"><label>網站網址<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button type="submit" disabled={pending}><Send size={17} />{pending ? "送出中…" : "提交申請"}</button>
    </form>
    <dialog ref={dialogRef} className={styles.feedbackDialog} aria-labelledby="ai-feedback-title" aria-describedby="ai-feedback-message" onClose={() => setFeedback(null)}>
      {feedback?.kind === "success" ? <CheckCircle2 className={styles.successIcon} size={34} /> : <AlertCircle className={styles.errorIcon} size={34} />}
      <h2 id="ai-feedback-title">{feedback?.title}</h2>
      <p id="ai-feedback-message">{feedback?.message}</p>
      <button type="button" onClick={() => dialogRef.current?.close()}>我知道了</button>
    </dialog>
  </>;
}
