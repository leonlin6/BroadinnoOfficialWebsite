import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <section className="not-found"><div className="container"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1 data-scroll-title>這個頁面暫時找不到。</h1><p>您可以返回首頁，繼續探索博創數科的服務與案例。</p><Link className="button button-primary" href="/"><ArrowLeft size={17} /> 返回首頁</Link></div></section>;
}
