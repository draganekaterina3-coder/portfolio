"use client";

import { useEffect, useRef, useState } from "react";

/*
  Wraps a block-level section/row so it fades + lifts in once scrolled
  into view. Purely additive: adds one wrapper div per usage, doesn't
  change the sizing/positioning of its children (they still lay out
  exactly as before once revealed).
*/
export default function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal${visible ? " scroll-reveal--visible" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
