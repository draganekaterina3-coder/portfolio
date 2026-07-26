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

  Responsive (<1280px only — desktop above is untouched): plain CSS
  animation drives a continuous, seamless auto-scroll on every device
  below 1280px, including touch — no manual drag/swipe (not needed here,
  simpler and avoids the touch-event edge cases a JS/scrollLeft-driven
  version would have to handle). Pauses on real hover, which only ever
  applies on desktop/trackpad — touch devices simply never trigger
  :hover, so this is a no-op there and auto-scroll just keeps running.
  Respects prefers-reduced-motion. The logo list is duplicated
  (aria-hidden) so the loop wraps without a visible jump.
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

export default function LogoStrip() {
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
