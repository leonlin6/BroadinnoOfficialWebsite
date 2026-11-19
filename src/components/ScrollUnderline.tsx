"use client";

import { useEffect, useRef } from "react";

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
      const clamp = (value: number) => Math.max(0, Math.min(1, value));
      // Grow as the title enters the viewport, then shrink while it exits above.
      const entering = clamp((viewportHeight * .90 - centerY) / (viewportHeight * .28));
      const leaving = clamp((centerY - viewportHeight * .025) / (viewportHeight * .06));
      const progress = Math.min(entering, leaving);
      underline.style.setProperty("--underline-scale", String(.12 + progress * .88));
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
