"use client";

import { useEffect, useRef } from "react";
import { getUnderlineScale } from "./underlineScale";

export function ScrollUnderline({ className }: { className: string }) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const underline = underlineRef.current;
    const heading = underline?.parentElement;
    if (!underline || !heading) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = heading.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewportHeight = window.innerHeight;
      underline.style.setProperty("--underline-scale", String(getUnderlineScale(centerY, viewportHeight)));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={underlineRef} className={className} aria-hidden="true" />;
}
