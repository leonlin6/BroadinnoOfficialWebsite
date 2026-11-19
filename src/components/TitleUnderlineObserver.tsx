"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function TitleUnderlineObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const titles = Array.from(document.querySelectorAll<HTMLElement>("main [data-scroll-title]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const clamp = (value: number) => Math.max(0, Math.min(1, value));

      for (const title of titles) {
        const rect = title.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const entering = clamp((viewportHeight * .90 - centerY) / (viewportHeight * .28));
        const leaving = clamp((centerY - viewportHeight * .10) / (viewportHeight * .06));
        title.style.setProperty("--underline-scale", String(.12 + Math.min(entering, leaving) * .88));
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
