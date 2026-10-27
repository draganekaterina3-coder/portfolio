import Image from "next/image";
import Link from "next/link";

type Layer =
  | { kind: "image"; src: string; opacity?: number; objectPosition?: string }
  | { kind: "tint"; color: string; blur?: number };

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  fullWidth?: boolean;
  layers: Layer[];
  imageWidth?: number;
  imageHeight?: number;
  buttonText?: string;
  buttonIcon?: boolean;
  tagBorderColor?: string;
  /** Only the true above-the-fold LCP candidate should set this. */
  priority?: boolean;
};

const ArrowIcon = ({ color = "#010101" }: { color?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProjectCard({
  title,
  description,
  tags,
  href = "#",
  fullWidth = false,
  layers,
  imageWidth = 2360,
  imageHeight = 1328,
  buttonText = "Посмотреть проект",
  buttonIcon = false,
  tagBorderColor = "rgba(255,255,255,0.4)",
  priority = false,
}: ProjectCardProps) {
  const cardWidth = fullWidth ? 1180 : 580;
  // Matches how wide this card actually renders at each breakpoint (see
  // .project-card--full/--half in globals.css) so the browser fetches an
  // appropriately-sized image instead of always the largest candidate.
  const sizes = fullWidth
    ? "(max-width: 768px) 100vw, (max-width: 1279px) 90vw, 1180px"
    : "(max-width: 768px) 100vw, (max-width: 1279px) 45vw, 580px";

  return (
    // Whole card is one clickable link; the "button" below is a visual CTA only.
    // The outer <a> carries the hover-lift transform but NOT overflow/radius —
    // isolating the transform from the corner clip avoids a Chromium/WebKit
    // bug where transform + overflow:hidden + border-radius on the same
    // element can leave un-clipped slivers at the corners. The actual clip
    // lives on the static inner .project-card__clip.
    <Link
      href={href}
      className={`project-card ${fullWidth ? "project-card--full" : "project-card--half"}`}
      style={{
        position: "relative",
        width: `${cardWidth}px`,
        height: "664px",
        borderRadius: "16px",
        border: "2px solid rgba(232,247,210,0.12)",
        flexShrink: 0,
        backgroundColor: "#141414",
      }}
    >
      <div className="project-card__clip">
        {/* Idle layers: images + tints, in Figma layer order */}
        {layers.map((layer, i) =>
          layer.kind === "image" ? (
            <Image
              key={i}
              src={layer.src}
              alt=""
              width={imageWidth}
              height={imageHeight}
              sizes={sizes}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: layer.objectPosition ?? "center top",
                opacity: layer.opacity ?? 1,
              }}
              priority={priority}
            />
          ) : (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: layer.color,
                backdropFilter: layer.blur ? `blur(${layer.blur}px)` : undefined,
                WebkitBackdropFilter: layer.blur ? `blur(${layer.blur}px)` : undefined,
              }}
            />
          )
        )}

        {/* Hover overlay: dark + blur, fades in first */}
        <div
          className="project-card__overlay"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />

        {/* Text block: fades/slides in second */}
        <div
          className="project-card__text"
          style={{
            position: "absolute",
            left: "28px",
            top: "48px",
            width: fullWidth ? "550px" : "520px",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {title && (
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
                {title}
              </h3>
            )}

            {description && (
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.3",
                  color: "#f2fff6",
                }}
              >
                {description}
              </p>
            )}
          </div>

          {tags.length > 0 && (
            <div style={{ display: "flex", gap: "8px" }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "8px 16px",
                    border: `1px solid ${tagBorderColor}`,
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
          )}
        </div>

        {/* Button: visual CTA only, fades/slides in last. left=28, top=554 */}
        <div
          className="project-card__button"
          style={{
            position: "absolute",
            left: "28px",
            top: "554px",
            zIndex: 2,
            width: "fit-content",
            whiteSpace: "nowrap",
            backgroundColor: "#f2fff6",
            borderRadius: "48px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            fontFamily: "var(--font-general-sans)",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "1.4",
            letterSpacing: "-1.2px",
            color: "#010101",
          }}
        >
          <span>{buttonText}</span>
          {buttonIcon && <ArrowIcon color="#010101" />}
        </div>
      </div>
    </Link>
  );
}
