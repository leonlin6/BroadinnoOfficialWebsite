"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { aboutLinks, cases, coreServiceLinks } from "@/lib/content";

const dataAnalyticsLinks = [
  { label: "服務總覽", href: "/data-analytics/" },
  { label: "申購區域財富指數查詢", href: "/wealth-index/" },
  { label: "申購即問即答 AI 預測", href: "/ai-prediction/" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dataAnalyticsMenu = useRef<HTMLDetailsElement>(null);
  const servicesMenu = useRef<HTMLDetailsElement>(null);
  const aboutMenu = useRef<HTMLDetailsElement>(null);
  const casesMenu = useRef<HTMLDetailsElement>(null);

  const isActive = (href: string) =>
    pathname === href || pathname === href.slice(0, -1);
  const closeMenus = () => {
    dataAnalyticsMenu.current?.removeAttribute("open");
    servicesMenu.current?.removeAttribute("open");
    aboutMenu.current?.removeAttribute("open");
    casesMenu.current?.removeAttribute("open");
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand brand-logo-link"
          href="/"
          aria-label="博創數科 Broadinno，返回首頁"
          onClick={closeMenus}
        >
          <span className="brand-logo">
            <Image
              src="/images/broadinno-logo-transparent.png"
              alt=""
              fill
              priority
              sizes="(max-width: 350px) 170px, (max-width: 650px) 190px, (max-width: 1100px) 215px, 245px"
            />
          </span>
        </Link>

        <nav
          className="desktop-nav"
          aria-label="主要導覽"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeMenus();
          }}
        >
          <Link
            href="/"
            className={isActive("/") ? "nav-active" : ""}
            aria-current={isActive("/") ? "page" : undefined}
          >
            首頁
          </Link>
          <details
            ref={dataAnalyticsMenu}
            className={
              "nav-dropdown nav-data-dropdown" +
              (dataAnalyticsLinks.some((item) => isActive(item.href))
                ? " nav-service-active"
                : "")
            }
            onMouseEnter={(event) => {
              servicesMenu.current?.removeAttribute("open");
              aboutMenu.current?.removeAttribute("open");
              casesMenu.current?.removeAttribute("open");
              event.currentTarget.open = true;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.open = false;
            }}
          >
            <summary>
              數據分析服務 <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel">
              {dataAnalyticsLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className={isActive(item.href) ? "nav-active" : ""}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <details
            ref={servicesMenu}
            className={
              "nav-dropdown" +
              (coreServiceLinks.some((item) => isActive(item.href))
                ? " nav-service-active"
                : "")
            }
            onMouseEnter={(event) => {
              dataAnalyticsMenu.current?.removeAttribute("open");
              aboutMenu.current?.removeAttribute("open");
              casesMenu.current?.removeAttribute("open");
              event.currentTarget.open = true;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.open = false;
            }}
          >
            <summary>
              核心服務 <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel">
              {coreServiceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className={isActive(item.href) ? "nav-active" : ""}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <details
            ref={aboutMenu}
            className={
              "nav-dropdown" +
              (aboutLinks.some((item) => isActive(item.href))
                ? " nav-service-active"
                : "")
            }
            onMouseEnter={(event) => {
              dataAnalyticsMenu.current?.removeAttribute("open");
              servicesMenu.current?.removeAttribute("open");
              casesMenu.current?.removeAttribute("open");
              event.currentTarget.open = true;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.open = false;
            }}
          >
            <summary>
              關於我們 <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel">
              {aboutLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className={isActive(item.href) ? "nav-active" : ""}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <details
            ref={casesMenu}
            className={
              "nav-dropdown nav-case-dropdown" +
              (isActive("/case-studies/") ||
              cases.some((item) => isActive(`/${item.slug}/`))
                ? " nav-service-active"
                : "")
            }
            onMouseEnter={(event) => {
              dataAnalyticsMenu.current?.removeAttribute("open");
              servicesMenu.current?.removeAttribute("open");
              aboutMenu.current?.removeAttribute("open");
              event.currentTarget.open = true;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.open = false;
            }}
          >
            <summary>
              客戶案例 <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="nav-dropdown-panel">
              <Link
                href="/case-studies/"
                onClick={closeMenus}
                className={isActive("/case-studies/") ? "nav-active" : ""}
                aria-current={isActive("/case-studies/") ? "page" : undefined}
              >
                案例總覽
              </Link>
              {cases.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}/`}
                  onClick={closeMenus}
                  className={isActive(`/${item.slug}/`) ? "nav-active" : ""}
                  aria-current={isActive(`/${item.slug}/`) ? "page" : undefined}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <Link
          className="header-cta"
          href="/consultation-appointment/"
          aria-current={
            isActive("/consultation-appointment/") ? "page" : undefined
          }
        >
          預約諮詢
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-site-nav"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="mobile-nav"
          id="mobile-site-nav"
          aria-label="行動版主要導覽"
        >
          <Link href="/" onClick={closeMenus}>
            首頁
          </Link>
          <details className="mobile-nav-group">
            <summary>
              數據分析服務 <ChevronDown size={17} aria-hidden="true" />
            </summary>
            <div>
              {dataAnalyticsLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <details className="mobile-nav-group">
            <summary>
              核心服務 <ChevronDown size={17} aria-hidden="true" />
            </summary>
            <div>
              {coreServiceLinks.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenus}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <details className="mobile-nav-group">
            <summary>
              關於我們 <ChevronDown size={17} aria-hidden="true" />
            </summary>
            <div>
              {aboutLinks.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenus}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <details className="mobile-nav-group">
            <summary>
              客戶案例 <ChevronDown size={17} aria-hidden="true" />
            </summary>
            <div>
              <Link href="/case-studies/" onClick={closeMenus}>
                案例總覽
              </Link>
              {cases.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}/`}
                  onClick={closeMenus}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/consultation-appointment/" onClick={closeMenus}>
            預約諮詢
          </Link>
        </nav>
      )}
    </header>
  );
}
