import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <Link className="brand brand-logo-link footer-logo-link" href="/" aria-label="博創數科 Broadinno，返回首頁"><span className="brand-logo"><Image src="/images/broadinno-logo-transparent.png" alt="" fill sizes="(max-width: 350px) 170px, (max-width: 650px) 190px, (max-width: 1100px) 215px, 245px" /></span></Link>
          <p>博創數科（Broadinno）結合產業洞察、管理方法與數據應用，協助企業釐清問題、規劃策略並推動執行。</p>
        </div>
        <div className="footer-links"><strong>網站導覽</strong><Link href="/">首頁</Link><Link href="/data-analytics/">數據分析服務</Link><Link href="/about/company/">公司介紹</Link><Link href="/about/capabilities/">專業能力</Link><Link href="/case-studies/">客戶案例</Link></div>
        <div className="footer-links"><strong>核心服務</strong><Link href="/management-consulting/">管理顧問</Link><Link href="/project-manager/">專案辦公室</Link><Link href="/service-industries/">主要服務產業</Link><Link href="/main-experties/">主要專業領域</Link></div>
        <div className="footer-links"><strong>聯絡資訊</strong><span className="footer-contact-line"><MapPin size={15} />台北市中山區復興北路48號7樓</span><Link href="/consultation-appointment/">線上預約諮詢 <ArrowUpRight size={15} /></Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} 博創數科有限公司</span><Link href="/policy-privacy/">隱私權聲明</Link></div>
    </footer>
  );
}
