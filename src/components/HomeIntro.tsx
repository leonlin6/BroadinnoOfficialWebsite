"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./home-intro.module.css";

const FLY_START_MS = 3750;
const FINISH_MS = 5000;
const BOUNCE_SETTLE_MS = 1120;

export function HomeIntro() {
  const [visible, setVisible] = useState(false);
  const [flying, setFlying] = useState(false);
  const [stepsSettled, setStepsSettled] = useState(false);
  const [symbolSettled, setSymbolSettled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const frame = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const dialog = dialogRef.current;
    const logo = logoRef.current;
    if (!dialog || !logo) return;

    dialog.showModal();
    document.documentElement.dataset.homeIntro = "active";

    const flyTimer = window.setTimeout(() => {
      const headerLogo = document.querySelector<HTMLElement>(".site-header .brand-logo");
      if (!headerLogo) {
        setVisible(false);
        return;
      }

      const start = logo.getBoundingClientRect();
      const end = headerLogo.getBoundingClientRect();
      logo.style.setProperty("--intro-x", `${end.left + end.width / 2 - start.left - start.width / 2}px`);
      logo.style.setProperty("--intro-y", `${end.top + end.height / 2 - start.top - start.height / 2}px`);
      logo.style.setProperty("--intro-scale-x", String(end.width / start.width));
      logo.style.setProperty("--intro-scale-y", String(end.height / start.height));
      setFlying(true);
    }, FLY_START_MS);
    const finishTimer = window.setTimeout(() => setVisible(false), FINISH_MS);

    return () => {
      window.clearTimeout(flyTimer);
      window.clearTimeout(finishTimer);
      if (dialog.open) dialog.close();
      delete document.documentElement.dataset.homeIntro;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible || !stepsSettled) return;
    const settleTimer = window.setTimeout(() => setSymbolSettled(true), BOUNCE_SETTLE_MS);
    return () => window.clearTimeout(settleTimer);
  }, [visible, stepsSettled]);

  if (!visible) return null;

  return <dialog
    ref={dialogRef}
    className={`${styles.overlay} ${flying ? styles.flying : ""}`}
    aria-label="博創數科開場動畫"
    onCancel={(event) => { event.preventDefault(); setVisible(false); }}
  >
    <button className={styles.skip} type="button" disabled={flying} onClick={() => setVisible(false)}>略過動畫</button>
    <div className={`${styles.logo} ${stepsSettled ? styles.stepsStopped : ""} ${symbolSettled ? styles.settled : ""}`} ref={logoRef} aria-hidden="true">
      <svg className={styles.icon} viewBox="0 0 245 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="intro-blue-square-clip" clipPathUnits="userSpaceOnUse">
            <path d="M 41.5 4.1 L 58.3 20.6 L 41.5 37.1 L 24.7 20.6 Z" />
          </clipPath>
          <clipPath id="intro-escalator-clip">
            <rect x="34" y="0" width="64" height="60" />
          </clipPath>
          <clipPath id="intro-black-steps-clip" clipPathUnits="userSpaceOnUse">
            <rect x="58.5" y="9.2" width="22.5" height="23.6" />
            <rect x="44" y="35.4" width="23.4" height="22.8" />
          </clipPath>
        </defs>
        <g className={styles.movingSteps} clipPath="url(#intro-escalator-clip)">
          <rect className={`${styles.escalatorStep} ${styles.stepOne}`} onAnimationIteration={() => setStepsSettled(true)} x="60.4" y="11.25" width="18.5" height="19.8" fill="none" stroke="#15426a" strokeWidth="2.25" />
          <rect className={`${styles.escalatorStep} ${styles.stepTwo}`} x="60.4" y="11.25" width="18.5" height="19.8" fill="none" stroke="#15426a" strokeWidth="2.25" />
          <rect className={`${styles.escalatorStep} ${styles.stepThree}`} x="60.4" y="11.25" width="18.5" height="19.8" fill="none" stroke="#15426a" strokeWidth="2.25" />
        </g>
        <g className={styles.staticSteps} clipPath="url(#intro-black-steps-clip)">
          <image href="/images/broadinno-logo-transparent.png" x="0" y="-38.94" width="245" height="137.89" />
        </g>
        <g className={styles.rollingSquare}>
          <image href="/images/broadinno-logo-transparent.png" x="0" y="-38.94" width="245" height="137.89" clipPath="url(#intro-blue-square-clip)" />
        </g>
      </svg>
      <div className={styles.finalSymbol}>
        <Image src="/images/broadinno-logo-transparent.png" alt="" fill sizes="(max-width: 710px) 92vw, 650px" />
      </div>
      <div className={styles.wordmark}>
        <Image src="/images/broadinno-logo-transparent.png" alt="" fill sizes="(max-width: 710px) 92vw, 650px" />
      </div>
      <div className={styles.finalLogo}>
        <Image src="/images/broadinno-logo-transparent.png" alt="" fill sizes="(max-width: 710px) 92vw, 650px" />
      </div>
    </div>
  </dialog>;
}
