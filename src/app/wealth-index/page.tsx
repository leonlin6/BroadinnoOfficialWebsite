import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BarChart3, FileSpreadsheet, FileUp, Info, Layers3,
  MapPin, SearchCheck, ShieldCheck,
} from "lucide-react";
import { WealthRequestForm } from "./WealthRequestForm";
import styles from "./wealth-index.module.css";

export const metadata: Metadata = {
  title: "區域財富指數查詢｜數據分析服務",
  description: "了解博創數科區域財富指數服務：26 級相對分級、全台區域分析與批次地址比對，並提出報告申請需求。",
  alternates: { canonical: "/wealth-index/" },
};

const islandPath = "M 177 19 C 197 21 218 43 221 64 C 219 84 205 101 208 122 C 215 143 210 169 201 197 C 193 225 181 252 169 278 C 158 302 151 329 137 353 C 125 378 116 401 105 422 C 91 415 79 402 75 384 C 68 357 64 333 66 307 C 68 282 75 259 80 236 C 79 210 86 188 89 162 C 94 138 96 117 112 96 C 127 77 137 56 154 42 C 164 32 168 22 177 19 Z";

const features = [
  { icon: Layers3, title: "26 級相對分級", text: "以 A–Z 共 26 個等級，提供細緻的區域財富相對參考指標。" },
  { icon: MapPin, title: "全台區域分析", text: "依縣市、鄉鎮市區及指定地址，討論合適的分析範圍。" },
  { icon: FileUp, title: "批次地址比對", text: "有多筆地址時，可洽詢 CSV／XLS 資料整理與批次比對方式。" },
];

const steps = [
  { icon: MapPin, number: "01", title: "選擇分析區域", text: "告訴我們希望了解的縣市、鄉鎮市區或指定地址範圍。" },
  { icon: FileSpreadsheet, number: "02", title: "提供資料需求", text: "說明資料格式、地址筆數與使用情境，確認合適的分析方式。" },
  { icon: BarChart3, number: "03", title: "取得指標報告", text: "由顧問確認範圍與交付內容後，提供區域財富指數報告。" },
];

const sampleRows = [
  { id: "001", city: "宜蘭縣", district: "宜蘭市", address: "範例地址 01", grade: "A" },
  { id: "002", city: "宜蘭縣", district: "羅東鎮", address: "範例地址 02", grade: "C" },
  { id: "003", city: "宜蘭縣", district: "礁溪鄉", address: "範例地址 03", grade: "F" },
];

function TaiwanMapGraphic() {
  return <div className={styles.mapGraphic} aria-hidden="true">
    <div className={styles.mapGrid} />
    <svg className={styles.taiwanMap} viewBox="0 0 280 450" focusable="false">
      <defs>
        <linearGradient id="wealth-map-gradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#54d9f8" /><stop offset=".55" stopColor="#168df0" /><stop offset="1" stopColor="#0754c9" /></linearGradient>
        <clipPath id="wealth-island-clip"><path d={islandPath} /></clipPath>
      </defs>
      <path d={islandPath} fill="url(#wealth-map-gradient)" stroke="#fff" strokeWidth="4" />
      <g clipPath="url(#wealth-island-clip)" opacity=".46">
        <path d="M 93 89 C 141 107 174 87 226 103 L 225 154 C 183 126 151 150 83 127 Z" fill="#68e7f5" />
        <path d="M 78 171 C 124 182 168 163 216 176 L 201 231 C 149 212 111 240 73 215 Z" fill="#0062d8" />
        <path d="M 70 266 C 106 246 159 276 191 256 L 174 317 C 129 301 99 327 60 315 Z" fill="#75dff5" />
        <path d="M 64 348 C 95 359 132 333 156 355 L 120 429 L 62 418 Z" fill="#0645af" />
      </g>
      <g clipPath="url(#wealth-island-clip)" fill="none" stroke="#d9faff" strokeWidth="2" opacity=".84">
        <path d="M 99 102 C 136 124 176 97 216 119 M 89 147 C 134 161 174 139 211 157 M 82 196 C 119 210 166 184 204 199 M 76 241 C 115 257 152 233 189 247 M 70 283 C 107 293 145 275 174 294 M 66 326 C 100 341 134 319 156 338 M 77 373 C 102 372 118 362 136 371" />
        <path d="M 139 42 C 125 112 143 154 120 211 C 103 258 112 315 92 383 M 179 45 C 170 113 180 167 159 215 C 146 260 147 310 121 380" />
      </g>
      <g fill="#fff" stroke="#55d6ff" strokeWidth="3"><circle cx="183" cy="84" r="8" /><circle cx="139" cy="208" r="8" /><circle cx="112" cy="326" r="8" /></g>
    </svg>
    <div className={`${styles.floatCard} ${styles.gradeCard}`}><Layers3 size={23} /><div><strong>26 級相對分級</strong><span>A 為最高等級，依序分級至 Z</span></div></div>
    <div className={`${styles.floatCard} ${styles.mapCard}`}><MapPin size={23} /><div><strong>全台區域分析</strong><span>從縣市到指定地址</span></div></div>
    <div className={styles.legendCard}><strong>財富等級 <small>示意</small></strong><div className={styles.gradeScale}><i /><i /><i /><i /><i /><i /><i /></div><span>A（相對較高）　→　Z（相對較低）</span></div>
  </div>;
}

export default function WealthIndexPage() {
  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="wealth-title"><div className={"container " + styles.heroGrid}>
      <div className={styles.heroCopy}>
        <nav className={styles.breadcrumb} aria-label="麵包屑"><Link href="/">首頁</Link><ArrowRight size={13} /><Link href="/data-analytics/">數據分析服務</Link><ArrowRight size={13} /><span>區域財富指數</span></nav>
        <span className={styles.eyebrow}>DATA INTELLIGENCE / WEALTH INDEX</span>
        <h1 id="wealth-title" data-scroll-title>用數據，<br />洞察區域<span>財富潛力</span></h1>
        <p>整合人口、地理與經濟相關公開資料，協助企業理解區域差異，將複雜資訊轉化為更清楚的決策參考。</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="#request-form">提出查詢需求 <ArrowRight size={18} /></a><a className={styles.secondaryButton} href="#method">了解指標方法 <BarChart3 size={18} /></a></div>
      </div>
      <TaiwanMapGraphic />
    </div></section>

    <section className={styles.featureSection} aria-label="區域財富指數服務重點"><div className={"container " + styles.featureGrid}>{features.map(({ icon: Icon, title, text }) => <article className={styles.featureCard} key={title}><Icon size={32} strokeWidth={1.65} /><div><h2>{title}</h2><p>{text}</p></div></article>)}</div></section>

    <section className={styles.processSection} id="method" aria-labelledby="method-title"><div className="container"><div className={styles.sectionHeading}><span>HOW IT WORKS</span><h2 id="method-title" data-scroll-title data-scroll-title-center>從需求到洞察，三步完成分析</h2><p>先釐清分析範圍與資料內容，再確認可交付的指標報告。</p></div><div className={styles.stepGrid}>{steps.map(({ icon: Icon, number, title, text }) => <article className={styles.stepCard} key={number}><span className={styles.stepNumber}>{number}</span><Icon size={36} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className={styles.exampleSection} aria-labelledby="example-title"><div className={"container " + styles.exampleGrid}><div className={styles.exampleCopy}><span className={styles.eyebrow}>EXAMPLE</span><h2 id="example-title" data-scroll-title>資料範例與輸出結果</h2><p>依需求取得指定區域的相對財富等級，或提供多筆地址，討論批次比對與報告交付方式。</p><div className={styles.examplePoint}><FileSpreadsheet size={22} /><div><strong>支援資料格式</strong><span>可洽詢 CSV／XLS 批次資料整理方式</span></div></div><div className={styles.examplePoint}><ShieldCheck size={22} /><div><strong>資料安全</strong><span>交付方式與資料處理範圍由顧問確認</span></div></div></div><div className={styles.reportWrap}><div className={styles.reportCard}><div className={styles.reportTitle}><FileSpreadsheet size={21} /><strong>財富指數報告</strong><span>示意資料</span></div><div className={styles.tableScroll}><table><thead><tr><th scope="col">編號</th><th scope="col">縣市</th><th scope="col">鄉鎮市區</th><th scope="col">地址</th><th scope="col">財富等級</th></tr></thead><tbody>{sampleRows.map((row) => <tr key={row.id}><td>{row.id}</td><td>{row.city}</td><td>{row.district}</td><td>{row.address}</td><td><span className={`${styles.gradePill} ${row.grade === "A" ? styles.gradeA : row.grade === "C" ? styles.gradeC : styles.gradeF}`}>{row.grade}</span></td></tr>)}</tbody></table></div></div><p className={styles.sampleNotice}><Info size={17} />以上資料僅為版面示意，並非實際查詢結果或正式財富等級。</p></div></div></section>

    <section className={styles.requestSection} id="request-form" aria-labelledby="request-title"><div className={"container " + styles.requestGrid}><div className={styles.requestCopy}><span className={styles.eyebrow}>GET STARTED</span><h2 id="request-title" data-scroll-title>開始探索您的區域商機</h2><p>說明您想分析的區域、地址資料與使用情境。我們會先確認需求，再與您討論資料範圍、指標解讀及報告交付方式。</p><div className={styles.requestHighlights}><span><SearchCheck size={19} />指定區域分析</span><span><FileSpreadsheet size={19} />批次地址比對</span><span><ShieldCheck size={19} />資料處理確認</span></div></div><div className={styles.formCard}><WealthRequestForm /></div></div></section>

    <p className={styles.footnote}><Info size={16} />區域財富指數為相對分級參考，並非絕對財富值；A 為相對較高、Z 為相對較低。實際分析內容依資料可用性與需求確認。</p>
  </div>;
}
