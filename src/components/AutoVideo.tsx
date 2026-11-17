"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribe = (notify: () => void) => {
  const media = window.matchMedia(REDUCED);
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
};
const prefersReducedMotion = () => window.matchMedia(REDUCED).matches;

/*
  A silent, looping screen recording that behaves like the GIFs it replaced
  (autoplay, loop, no controls) at about a ninth of the weight.

  - Plays only while it's on screen, so a page full of recordings doesn't keep
    decoding video it isn't showing.
  - A visitor whose system asks for reduced motion doesn't get it autoplayed.
    Where the recording IS the content (`manual`, the case page), a Play
    button appears over the still poster so they can start it on purpose;
    decorative thumbnails (the home card) simply stay still.
  - `autoPlay` + `muted` + `playsInline` are what let iOS and Chrome start it
    without a tap; the observer then only pauses it while it's off screen.
*/
export default function AutoVideo({
  src,
  poster,
  label,
  manual = false,
  className,
  style,
}: {
  src: string;
  poster: string;
  /** Describes the recording for screen readers (the old <img> alt text). */
  label?: string;
  /** Offer a Play/Pause button to visitors who prefer reduced motion. */
  manual?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useSyncExternalStore(subscribe, prefersReducedMotion, () => false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
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
  }, [reduced]);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setPlaying(true), () => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const english = typeof document !== "undefined" && document.documentElement.lang === "en";
  const buttonLabel = playing ? (english ? "Pause" : "Пауза") : english ? "Play" : "Воспроизвести";

  return (
    <>
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
      {manual && reduced && (
        <button type="button" className="av-toggle" onClick={toggle}>
          <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
          {buttonLabel}
        </button>
      )}
    </>
  );
}
