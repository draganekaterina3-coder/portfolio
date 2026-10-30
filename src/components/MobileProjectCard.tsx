import Image from "next/image";
import Link from "next/link";
import { nb } from "@/lib/typography";

/*
  Purpose-built mobile card (<=768px) — NOT an automatic collapse of the
  desktop hover card. Content is always visible (no tap-to-reveal):
  image → title → description → tags → button. Same radius/border/colors/
  typography language as desktop.

  Each card gets its own composition (aspectRatio/objectPosition/scale) —
  no universal crop. Pass `imageSlot` to fully override the image area with
  a bespoke layered composition (used by LU Cards for its phone+GIF mockup).

  No text truncation: description isn't line-clamped, so cards may end up
  with different heights depending on copy length — intentional.
*/

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="#010101"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type MobileProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageOpacity?: number;
  objectPosition?: string;
  imageScale?: number;
  aspectRatio?: string;
  tintColor?: string;
  tintBlendMode?: React.CSSProperties["mixBlendMode"];
  imageSlot?: React.ReactNode;
  href?: string;
  /** Opens in a new tab (links that leave the site). */
  external?: boolean;
  /** Play Store link for visitors who are not on Apple devices (see StoreLinks). */
  androidHref?: string;
  buttonText?: string;
  buttonIcon?: boolean;
};

export default function MobileProjectCard({
  title,
  description,
  tags,
  image,
  imageWidth = 1160,
  imageHeight = 1328,
  imageOpacity = 1,
  objectPosition = "center top",
  imageScale = 1,
  // Same ratio as the LU Cards phone composite (580/664) — every mobile
  // card cover is this ratio now so the covers read as one consistent
  // row instead of each card having a different height.
  aspectRatio = "580 / 664",
  tintColor,
  tintBlendMode = "normal",
  imageSlot,
  href = "#",
  external = false,
  androidHref,
  buttonText = "Посмотреть проект",
  buttonIcon = false,
}: MobileProjectCardProps) {
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      data-android-href={androidHref}
      className="mobile-project-card"
    >
      <div className="mobile-project-card__clip">
        <div className="mobile-project-card__image" style={{ aspectRatio }}>
          {imageSlot ? (
            imageSlot
          ) : (
            <>
              {image && (
                <Image
                  src={image}
                  alt=""
                  width={imageWidth}
                  height={imageHeight}
                  sizes="100vw"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition,
                    opacity: imageOpacity,
                    transform: imageScale !== 1 ? `scale(${imageScale})` : undefined,
                  }}
                />
              )}
              {tintColor && (
                <div
                  className="mobile-project-card__tint"
                  style={{ backgroundColor: tintColor, mixBlendMode: tintBlendMode }}
                />
              )}
              {/* Image doesn't cut off abruptly — fades into the card body's
                  own dark background just before the text starts. */}
              <div className="mobile-project-card__fade" />
            </>
          )}
        </div>

        <div className="mobile-project-card__body">
          <h3 className="mobile-project-card__title">{nb(title)}</h3>
          <p className="mobile-project-card__desc">{nb(description)}</p>

          {tags.length > 0 && (
            <div className="mobile-project-card__tags">
              {tags.map((tag) => (
                <span key={tag} className="mobile-project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mobile-project-card__button">
            <span>{nb(buttonText)}</span>
            {buttonIcon && <ArrowIcon />}
          </div>
        </div>
      </div>
    </Link>
  );
}
