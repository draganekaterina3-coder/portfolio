import Image from "next/image";
import Link from "next/link";
import { nb } from "@/lib/typography";

/*
  LU Cards — composite card per Figma structure (node 11:104 default / 11:355 hover):
  ┌─ card 580×664, border 2px rgba(232,247,210,0.12), radius 16px ──┐
  │  [0] LU Cards_bg.png (opacity 90%) — fills card                 │
  │  [1] idle tint: blur(10.8px) rgba(35,31,66,0.2) — always on     │
  │  [2] LU Cards_phone.png — phone mockup, fills card              │
  │  [3] GIF — clipped to the screen window, ON TOP of the phone    │
  │      (doesn't rely on the phone PNG having real alpha — the gif │
  │      itself is masked to the screen rect via overflow+radius)  │
  │  [4] hover overlay: blur(10px) rgba(2,0,19,0.7)                 │
  │  [5] hover text + button (staggered fade-in)                    │
  └────────────────────────────────────────────────────────────────┘
  Whole card is one clickable link; the "button" is a visual CTA only.

  Clipping note: the outer <a> carries the hover lift (transform) but NOT
  overflow/radius — Chromium/WebKit can mis-clip rounded corners on an
  element that has both an active transform and overflow:hidden at once.
  The actual corner clip lives on the static inner .project-card__clip.
*/

type LuCardsCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  /** Only the true above-the-fold LCP candidate should set this. */
  priority?: boolean;
};

// Renders at the same width as ProjectCard's half variant (see
// .project-card--half in globals.css) — same sizes value.
const IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1279px) 45vw, 580px";

export default function LuCardsCard({
  title,
  description,
  tags,
  href = "#",
  priority = false,
}: LuCardsCardProps) {
  return (
    <Link
      href={href}
      className="project-card project-card--half"
      style={{
        position: "relative",
        width: "580px",
        height: "664px",
        borderRadius: "16px",
        border: "2px solid rgba(232,247,210,0.12)",
        flexShrink: 0,
        backgroundColor: "#141414",
      }}
    >
      <div className="project-card__clip">
        {/* Layer 0 — card background, 90% opacity */}
        <Image
          src="/projects/LU Cards_bg.png"
          alt=""
          width={1160}
          height={1328}
          sizes={IMAGE_SIZES}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.9,
          }}
          priority={priority}
        />

        {/* Layer 1 — idle tint, always visible */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(35,31,66,0.2)",
            backdropFilter: "blur(10.8px)",
            WebkitBackdropFilter: "blur(10.8px)",
          }}
        />

        {/* Layer 2 — phone mockup, opaque, fills card */}
        <Image
          src="/projects/LU Cards_phone.png"
          alt=""
          width={1160}
          height={1328}
          sizes={IMAGE_SIZES}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
          priority={priority}
        />

        {/* Layer 3 — GIF, masked to the screen window, drawn on top of the
            phone so it reads as playing inside the display regardless of
            whether the phone PNG itself has a transparent cutout.
            Percentages (not fixed px) so the window tracks the phone
            mockup as the card scales fluidly below 1280px — fixed px
            offsets made the gif drift/vanish as the card shrank. */}
        <div
          style={{
            position: "absolute",
            left: "17.59%",
            top: "11.14%",
            width: "65%",
            height: "123.49%",
            /* horizontal% / vertical% — percentage border-radius resolves
               against width and height separately, so a single value would
               stretch into an ellipse on this non-square window. This pair
               reproduces the original 36px circular corner at any size. */
            borderRadius: "9.55% / 4.39%",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/LU Cards_animation.gif"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Layer 4 — hover overlay: dark + blur, fades in first */}
        <div
          className="project-card__overlay"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />

        {/* Layer 5a — text: fades/slides in second */}
        <div
          className="project-card__text"
          style={{
            position: "absolute",
            left: "28px",
            top: "48px",
            width: "520px",
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3
              style={{
                fontFamily: "var(--font-general-sans)",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "1.2",
                letterSpacing: "-2px",
                color: "#f2fff6",
              }}
            >
              {nb(title)}
            </h3>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "1.3",
                color: "#f2fff6",
              }}
            >
              {nb(description)}
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 16px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  borderRadius: "100px",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  color: "#f2fff6",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Layer 5b — button: visual CTA only, fades/slides in last. left=28, top=554 */}
        <div
          className="project-card__button"
          style={{
            position: "absolute",
            left: "28px",
            top: "554px",
            zIndex: 4,
            width: "fit-content",
            whiteSpace: "nowrap",
            backgroundColor: "#f2fff6",
            borderRadius: "48px",
            display: "flex",
            alignItems: "center",
            padding: "12px 20px",
            fontFamily: "var(--font-general-sans)",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "1.4",
            letterSpacing: "-1.2px",
            color: "#010101",
          }}
        >
          <span>Посмотреть проект</span>
        </div>
      </div>
    </Link>
  );
}
