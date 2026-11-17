import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Cta() {
  return <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">LET’S WORK TOGETHER</span><h2>從一個問題開始，<br />一起找到下一步。</h2><p>讓我們了解您的需求，探索適合企業的解決方向。</p></div><Link className="button button-white" href="/consultation-appointment/">預約諮詢 <ArrowUpRight size={18} /></Link><div className="cta-decor" aria-hidden="true" /></div></section>;
}
