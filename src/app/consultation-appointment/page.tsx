import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Building2, CalendarDays, ChartNoAxesCombined,
  ChevronDown, ClipboardCheck, Database, ExternalLink, Flag,
  Mail, MapPin, Pencil, Phone, Send, Settings2, ShieldCheck,
  Tag, UserRound, UsersRound,
} from "lucide-react";
import styles from "./consultation.module.css";

export const metadata: Metadata = {
  title: "預約諮詢",
  description: "與博創數科討論企業的數據治理、客戶分析、風險評分與數位轉型需求。",
  alternates: { canonical: "/consultation-appointment/" },
};

const topics = [
  { icon: Database, title: "資料治理與數據應用", text: "資料整合、品質治理、數據價值發現" },
  { icon: UsersRound, title: "客戶分析與行銷應用", text: "客戶分群、行為分析、精準行銷策略" },
  { icon: ChartNoAxesCombined, title: "風險與信用評分", text: "信用風險評估、評分模型與應用" },
  { icon: Settings2, title: "營運優化與數位轉型", text: "流程改善、系統導入與應用規劃" },
] as const;

const process = [
  { icon: ClipboardCheck, title: "1. 提出需求", text: "以電子郵件說明課題" },
  { icon: Mail, title: "2. 確認聯繫", text: "與您確認需求" },
  { icon: UsersRound, title: "3. 顧問交流", text: "安排諮詢討論" },
  { icon: Flag, title: "4. 方向建議", text: "提供後續規劃建議" },
] as const;

function Accent() {
  return <span className={styles.accent} aria-hidden="true" />;
}

function PreviewField({ label, placeholder, icon: Icon, required = false, full = false, multiline = false, select = false }: {
  label: string;
  placeholder: string;
  icon: typeof UserRound;
  required?: boolean;
  full?: boolean;
  multiline?: boolean;
  select?: boolean;
}) {
  return <div className={[styles.field, full ? styles.fullField : ""].join(" ")}>
    <span className={styles.fieldLabel}>{label}{required && <b aria-label="必填"> *</b>}</span>
    <div className={[styles.fakeControl, multiline ? styles.multiline : ""].join(" ")}><Icon size={17} strokeWidth={1.9} aria-hidden="true" /><span>{placeholder}</span>{select && <ChevronDown size={18} aria-hidden="true" />}</div>
  </div>;
}

export default function Consultation() {
  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="consultation-title"><div className={"container " + styles.heroInner}><span className={styles.eyebrow}>CONSULTATION / 預約諮詢</span><h1 id="consultation-title">讓我們一起討論您的下一步</h1><p>分享您的需求與挑戰，與顧問團隊交流合適的解決方向。</p><Accent /></div></section>

    <section className={styles.mainSection} aria-label="諮詢服務與預約表單"><div className={"container " + styles.mainGrid}>
      <div className={styles.introColumn}>
        <h2>專業諮詢・從需求出發</h2>
        <p>我們結合產業經驗與數據分析能力，協助企業釐清問題、評估方案，並規劃可落地的執行方向。</p>
        <div className={styles.topicBlock}><Accent /><h3>諮詢涵蓋領域</h3><div className={styles.topicList}>{topics.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={31} strokeWidth={1.7} aria-hidden="true" /><div><strong>{title}</strong><span>{text}</span></div></article>)}</div></div>
      </div>

      <section className={styles.formCard} id="consultation-form" aria-labelledby="form-title"><div className={styles.formHead}><div><CalendarDays size={30} strokeWidth={1.7} /><h2 id="form-title">預約諮詢</h2></div><span><b>*</b> 為必填欄位</span></div>
        <p className={styles.previewNotice}><ShieldCheck size={17} aria-hidden="true" />表單目前為版型預覽，不會蒐集或送出資料。您可透過下方電子郵件聯絡我們。</p>
        <div className={styles.formGrid}>
          <PreviewField label="姓名" placeholder="請輸入您的姓名" icon={UserRound} required />
          <PreviewField label="Email" placeholder="請輸入 Email（例：name@company.com）" icon={Mail} required />
          <PreviewField label="聯絡電話" placeholder="請輸入聯絡電話（選填）" icon={Phone} />
          <PreviewField label="預約時段" placeholder="請選擇方便的時段" icon={CalendarDays} required select />
          <PreviewField label="主要問題" placeholder="請選擇諮詢主題" icon={Tag} required full select />
          <PreviewField label="詳細描述" placeholder="請簡要說明目前的需求、挑戰或想討論的議題（至少 20 個字）" icon={Pencil} required full multiline />
        </div>
        <div className={styles.characterCount}>0 / 500</div>
        <div className={styles.agreement}><span className={styles.emptyCheck} aria-hidden="true" /><span><b>*</b> 我已閱讀並同意「<Link href="/policy-privacy/">個資蒐集告知事項與隱私權政策</Link>」。</span></div>
        <button className={styles.submitPreview} type="button" disabled><Send size={18} aria-hidden="true" />送出諮詢申請 <span>（尚未開放）</span></button>
      </section>
    </div></section>

    <section className={styles.detailsSection} aria-label="諮詢流程與聯絡資訊"><div className={"container " + styles.detailsGrid}><div className={styles.process}><h2>諮詢流程</h2><Accent /><div className={styles.processSteps}>{process.map(({ icon: Icon, title, text }, index) => <div className={styles.processStep} key={title}><span><Icon size={32} strokeWidth={1.7} aria-hidden="true" /></span><strong>{title}</strong><p>{text}</p>{index < process.length - 1 && <ArrowRight className={styles.processArrow} size={20} strokeWidth={2.3} aria-hidden="true" />}</div>)}</div></div><div className={styles.contact}><h2>聯絡資訊</h2><Accent /><div className={styles.contactLines}><div><Building2 size={22} aria-hidden="true" /><strong>博創數科有限公司</strong></div><div><MapPin size={22} aria-hidden="true" /><span>台北市中山區復興北路48號7樓</span></div><a href="mailto:service@broadinno.com.tw"><Mail size={22} aria-hidden="true" />service@broadinno.com.tw</a></div><Link className={styles.privacyLink} href="/policy-privacy/"><ShieldCheck size={20} aria-hidden="true" />隱私權聲明 <ExternalLink size={15} aria-hidden="true" /></Link></div></div></section>

    <section className={styles.cta}><div className={"container " + styles.ctaInner}><h2>從一個問題開始，找到適合您的解決方向。</h2><a href="mailto:service@broadinno.com.tw?subject=%E9%A0%90%E7%B4%84%E8%AB%AE%E8%A9%A2">透過 Email 聯絡 <ArrowRight size={20} aria-hidden="true" /></a></div></section>
  </div>;
}
