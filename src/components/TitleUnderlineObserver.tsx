"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getUnderlineScale } from "./underlineScale";

export function TitleUnderlineObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const titles = Array.from(document.querySelectorAll<HTMLElement>("main [data-scroll-title]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      for (const title of titles) {
        const rect = title.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        title.style.setProperty("--underline-scale", String(getUnderlineScale(centerY, viewportHeight)));
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
