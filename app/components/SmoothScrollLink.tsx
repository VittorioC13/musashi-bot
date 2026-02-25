"use client";

import type { MouseEvent, ReactNode } from "react";

type SmoothScrollLinkProps = {
  targetId: string;
  className?: string;
  children: ReactNode;
  durationMs?: number;
  offset?: number;
};

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function SmoothScrollLink({
  targetId,
  className,
  children,
  durationMs = 1200,
  offset = 0,
}: SmoothScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY + offset;
    const startY = window.scrollY;
    const distance = targetY - startY;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, targetY);
      return;
    }

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
