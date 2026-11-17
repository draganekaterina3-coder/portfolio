"use client";

import { useEffect, useRef } from "react";

/*
  A silent, looping screen recording that behaves like the GIFs it replaced
  (autoplay, loop, no controls) at about a ninth of the weight.

  - Plays only while it's on screen, so a page full of recordings doesn't keep
    decoding video it isn't showing.
  - If the visitor asked their system for reduced motion, it never plays: the
    poster frame is shown instead.
  - `autoPlay` + `muted` + `playsInline` are what let iOS and Chrome start it
    without a tap; the observer then only pauses it while it's off screen.
*/
export default function AutoVideo({
  src,
  poster,
  label,
  className,
  style,
}: {
  src: string;
  poster: string;
  /** Describes the recording for screen readers (the old <img> alt text). */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      video.pause();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    />
  );
}
