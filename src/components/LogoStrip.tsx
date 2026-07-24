"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

/*
  Logo strip — static row of company logos on desktop.
  No animation at >=1280px — the row's natural width fits exactly inside
  the fixed 1280px desktop canvas, so there's nothing to scroll there.

  Figma positions within the 2408px strip (logos repeat × 2, we show × 1):
  Logo order (left → right) mapped from Figma frame names & SVG viewBoxes:
    1. mkb.svg        x=0,    w=132  h=42.8  → viewBox 133×43
    2. sber.svg       x=212,  w=239  h=30    → viewBox 239×30
    3. stage.svg      x=531,  w=138  h=64    → viewBox 138×64
    4. il-de-bote.svg x=748,  w=181  h=33    → viewBox 181×33
    5. memphis.svg    x=1009, w=155  h=43    → viewBox 155×43

  Gap between logos: consistently 80px (measured between right edge and next x).

  Container (Frame 11:134): height=224px
    Logo row starts at y=80 → paddingTop: 80px
    Max logo height: 64px (stage.svg)
    Bottom space: 224 - 80 - 64 = 80px → paddingBottom: 80px

  Responsive (<1280px only — desktop above is untouched): the track auto-
  scrolls continuously on every device (including touch — see useAutoScroll
  below) while staying manually draggable/swipeable at the same time. Both
  drive the same scrollLeft, so they can't fight or visibly jump. Pauses on
  hover (desktop) and while the user is actively scrolling/dragging, and is
  skipped entirely under prefers-reduced-motion. The logo list is duplicated
  (aria-hidden) so the loop wraps seamlessly.
*/

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const logos: Logo[] = [
  { src: "/logos/mkb.svg",        alt: "MKB",        width: 133, height: 43 },
  { src: "/logos/sber.svg",       alt: "Sber",       width: 239, height: 30 },
  { src: "/logos/stage.svg",      alt: "Stage",      width: 138, height: 64 },
  { src: "/logos/il-de-bote.svg", alt: "Il de Bote", width: 181, height: 33 },
  { src: "/logos/memphis.svg",    alt: "Memphis",    width: 155, height: 43 },
];

// One full copy of the (duplicated) track should drift past in roughly this
// long — matches the pacing of the marquee this replaces. Below 1280px the
// track has real overflow and this drives it; at >=1280px the track doesn't
// overflow at all, so the scrollLeft writes are no-ops and this hook is
// inert without needing its own width check.
const LOOP_DURATION_MS = 52000;
// How long after the user stops actively scrolling/dragging before
// auto-scroll picks back up — long enough to absorb touch momentum
// scrolling that continues briefly after the finger lifts.
const RESUME_DELAY_MS = 600;

function useAutoScroll(trackRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotionQuery.matches) return;

    let hovering = false;
    let interacting = false;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;
    let rafId: number;
    let lastTime = performance.now();

    const scheduleResume = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        interacting = false;
      }, RESUME_DELAY_MS);
    };

    const onEnter = () => {
      hovering = true;
    };
    const onLeave = () => {
      hovering = false;
    };
    const onInteractionStart = () => {
      interacting = true;
      clearTimeout(resumeTimer);
    };
    const onInteractionEnd = () => {
      scheduleResume();
    };
    // Our own auto-scroll writes also fire "scroll" — only react to it
    // while already `interacting` (real user input already flagged it),
    // so this just extends the resume delay to cover touch momentum
    // instead of re-triggering a pause on every programmatic frame.
    const onScroll = () => {
      if (interacting) scheduleResume();
    };

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("pointerdown", onInteractionStart);
    track.addEventListener("pointerup", onInteractionEnd);
    track.addEventListener("pointercancel", onInteractionEnd);
    track.addEventListener("wheel", onInteractionStart, { passive: true });
    track.addEventListener("wheel", onInteractionEnd, { passive: true });
    track.addEventListener("scroll", onScroll, { passive: true });

    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      const halfWidth = track.scrollWidth / 2;

      if (!hovering && !interacting && halfWidth > 0) {
        track.scrollLeft += (halfWidth / LOOP_DURATION_MS) * dt;
        if (track.scrollLeft >= halfWidth) {
          track.scrollLeft -= halfWidth;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resumeTimer);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("pointerdown", onInteractionStart);
      track.removeEventListener("pointerup", onInteractionEnd);
      track.removeEventListener("pointercancel", onInteractionEnd);
      track.removeEventListener("wheel", onInteractionStart);
      track.removeEventListener("wheel", onInteractionEnd);
      track.removeEventListener("scroll", onScroll);
    };
  }, [trackRef]);
}

export default function LogoStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  useAutoScroll(trackRef);

  return (
    <ScrollReveal>
      <div
        className="container-1280 responsive-px logo-strip-viewport"
        style={{
          height: "224px",
          paddingTop: "80px",
          paddingBottom: "80px",
          paddingLeft: "50px",
        }}
      >
        <div
          ref={trackRef}
          className="logo-strip-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "80px",
            height: "64px",
          }}
        >
          {logos.map((logo) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              style={{
                display: "block",
                flexShrink: 0,
              }}
            />
          ))}
          {/* Clone set — makes the loop seamless below 1280px (see globals.css);
              hidden at >=1280px where the row doesn't scroll at all. */}
          {logos.map((logo) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={`${logo.src}-clone`}
              src={logo.src}
              alt=""
              aria-hidden="true"
              width={logo.width}
              height={logo.height}
              className="logo-strip-clone"
              style={{
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
