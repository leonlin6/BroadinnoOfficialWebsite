"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { SubmissionDialog, type SubmissionFeedback } from "@/components/SubmissionDialog";
import { trackLeadSubmission } from "@/lib/analytics";
import { ConsultationTimeoutError, submitConsultation } from "@/lib/consultationRequest";
import styles from "./wealth-index.module.css";

export function WealthRequestForm() {
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<SubmissionFeedback | null>(null);
  const requestId = useRef<string | null>(null);
  const submitting = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    const values = new FormData(form);
    const requestType = String(values.get("requestType") || "").trim();
    const area = String(values.get("area") || "").trim();
    const notes = String(values.get("notes") || "").trim();
    const description = `區域財富指數報告申請｜需求類型：${requestType}｜分析範圍：${area || "待確認"}｜需求說明：${notes || "希望了解適合的資料範圍與交付方式。"}`;
    requestId.current ??= crypto.randomUUID();
    submitting.current = true;
    setPending(true);

    try {
      await submitConsultation({
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
      });

      trackLeadSubmission("wealth_index");
      form.reset();
      requestId.current = null;
      setFeedback({ kind: "success", title: "申請需求已送出", message: "我們已收到您的區域財富指數需求，將透過 Email 與您確認分析範圍及後續安排。" });
    } catch (error) {
      setFeedback(error instanceof ConsultationTimeoutError
        ? { kind: "error", title: "等待逾時，送出結果未確認", message: "已等待超過 30 秒，無法確認是否收件成功。請稍後重試，或以 Email 聯絡我們。" }
        : { kind: "error", title: "送出結果未確認", message: "目前無法確認是否收件成功。請稍後重試，或以 Email 聯絡我們。" });
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
        <label><span>需求類型 <b>*</b></span><select name="requestType" required defaultValue=""><option value="" disabled>請選擇申請項目</option><option>指定區域分析</option><option>批次地址比對</option><option>了解分級方法與報告</option></select></label>
        <label><span>希望聯繫時間 <b>*</b></span><input name="preferredTime" type="datetime-local" required /></label>
        <label className={styles.fullField}><span>分析區域或地址資料摘要</span><input name="area" placeholder="例如：台北市信義區、宜蘭縣，或約 200 筆地址" maxLength={100} /></label>
        <label className={styles.fullField}><span>需求說明</span><textarea name="notes" placeholder="請說明預計用途、所需區域或其他需求（選填）" rows={3} maxLength={220} /></label>
      </div>
      <p className={styles.formHint}>若有 CSV／XLS 地址資料，請先描述筆數與需求；顧問確認後再提供交付方式。</p>
      <label className={styles.consent}><input name="consent" type="checkbox" required /><span><b>*</b> 我已閱讀並同意<Link href="/policy-privacy/">個資蒐集告知事項與隱私權政策</Link>。</span></label>
      <div className={styles.honeypot} aria-hidden="true"><label>網站網址<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button type="submit" disabled={pending}><Send size={17} />{pending ? "送出中…" : "送出申請"}</button>
    </form>
    <SubmissionDialog id="wealth-feedback" pending={pending} feedback={feedback} onDismiss={() => setFeedback(null)} />
  </>;
}
