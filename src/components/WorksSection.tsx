import Image from "next/image";
import ProjectCard from "./ProjectCard";
import LuCardsCard from "./LuCardsCard";
import LogoStrip from "./LogoStrip";
import MobileProjectCard from "./MobileProjectCard";
import ScrollReveal from "./ScrollReveal";

/*
  LU Cards mobile composition — phone mockup + live GIF, same asset stack
  and proportions as the desktop card (scaled to the mobile image slot),
  clipped by the slot's own overflow so the phone can bleed off the edges
  exactly like it does on desktop.

  z-index note (matches LuCardsCard.tsx): the phone mockup's "screen" area
  isn't reliably transparent, so the GIF has to be explicitly stacked
  ABOVE the phone (zIndex 2 vs 1) rather than relying on default DOM
  paint order. Without this the phone image — last in the DOM — paints
  over the gif and the screen just shows as a solid black rectangle
  instead of playing. This was already handled on desktop; this mobile
  composite just hadn't picked up the same fix.
*/
const LuCardsMobileImage = () => (
  <>
    <Image
      src="/projects/LU Cards_bg.png"
      alt=""
      width={1160}
      height={1328}
      sizes="100vw"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.9,
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(35,31,66,0.2)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    />
    <Image
      src="/projects/LU Cards_phone.png"
      alt=""
      width={1160}
      height={1328}
      sizes="100vw"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: "absolute",
        left: "17.6%",
        top: "11.1%",
        width: "65%",
        height: "123.5%",
        borderRadius: "9.55% / 4.39%",
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/projects/LU Cards_animation.gif"
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
    {/* Fades the composite into the card body, same as every other mobile
        card's image (.mobile-project-card__fade) — this one just needs an
        explicit z-index to actually sit above the phone/gif layers instead
        of painting under them like an unstacked sibling would. */}
    <div className="mobile-project-card__fade" style={{ zIndex: 3 }} />
  </>
);

/*
  Works section internal layout (from Figma metadata):

  Frame 11:100  h=810   heading "Избранные проекты" at y=100 + SuperApp card at y=146
  Frame 11:103  h=684   LuCards (580px) + Cuverse (580px), cards at y=20, gap=20px
  Frame 11:126  h=684   Telecom (1180px), card at y=20
  Frame 11:129  h=96    "Другие проекты" heading at y=70
  Frame 11:131  h=684   Frenk (580px) + Flawery (580px), cards at y=20, gap=20px
  Frame 11:134  h=224   Logo strip (handled by LogoStrip component)

  Responsive (<1280px only — desktop above is untouched):
  - >=769px: same rows, cards become fluid-width via .project-card--full/--half
    (see globals.css), keeping the hover-reveal card as-is.
  - <=768px: hover has no place on touch — the desktop rows (.desktop-only-row)
    are hidden and replaced by purpose-built always-visible MobileProjectCard
    grids, grouped the same way as desktop ("Избранные проекты": SuperApp, LU
    Cards, Cuverse, Telecom; "Другие проекты": Frenk, Flawery).
*/

const headingStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "1.3",
  color: "#ffffff",
  textAlign: "right",
};

export default function WorksSection() {
  return (
    <section id="works" style={{ backgroundColor: "#010101" }}>

      {/* ── Row 1: heading + SuperApp (h=810) ── */}
      <div className="works-top-pad" style={{ paddingTop: "100px" }}>
        <div className="container-1280 responsive-px" style={{ padding: "0 50px" }}>
          <h2 style={headingStyle}>Избранные проекты</h2>
        </div>
        <ScrollReveal>
          <div
            className="container-1280 responsive-px desktop-only-row"
            style={{ marginTop: "20px", padding: "0 50px" }}
          >
            <ProjectCard
              fullWidth
              priority
              layers={[
                { kind: "tint", color: "rgba(0,83,161,0.2)" },
                { kind: "image", src: "/projects/SuperApp.png", opacity: 0.9 },
              ]}
              imageWidth={2360}
              imageHeight={1328}
              title="Суперапп для электромобиля (NDA)"
              href="/projects/atom-ev"
              description="Диагностировали падение SUS с 84% до 75% и построили омниканальную дизайн-систему для экосистемы электромобиля — мобайл и SWP"
              tags={["Кроссплатформа", "SWP"]}
            />
          </div>
        </ScrollReveal>

        {/* ── Row 2: LuCards + Cuverse (h=684) ── */}
        <ScrollReveal>
          <div
            className="container-1280 responsive-px desktop-only-row"
            style={{
              padding: "20px 50px 0",
              display: "flex",
              gap: "20px",
            }}
          >
            <LuCardsCard
              title="LU Cards"
              href="/projects/lu-cards"
              description="Механика с ежедневной картой увеличила возвращаемость: reveal-анимация превратила открытие карты в ритуал и подняла приложение в топ-100 App Store"
              tags={["iOS", "Android"]}
            />
            <ProjectCard
              layers={[
                {
                  kind: "image",
                  src: "/projects/Cuverse.png",
                  objectPosition: "center bottom",
                },
                { kind: "tint", color: "rgba(4,29,27,0.15)" },
              ]}
              imageWidth={1160}
              imageHeight={1328}
              title="Сuverse"
              href="/projects/cuverse"
              description="Спроектировала UX для крипто-продукта с высоким порогом входа — от онбординга до мониторинга хешрейта"
              tags={["iOS", "Android"]}
            />
          </div>
        </ScrollReveal>

        {/* ── Row 3: Telecom (h=684) ── */}
        <ScrollReveal>
          <div
            className="container-1280 responsive-px desktop-only-row"
            style={{ padding: "20px 50px 0" }}
          >
            <ProjectCard
              fullWidth
              layers={[
                { kind: "image", src: "/projects/Telecom.png", opacity: 0.75 },
              ]}
              imageWidth={2360}
              imageHeight={1328}
              title="Европейский телеком (NDA)"
              href="/projects/european-telecom"
              description="Как JTBD-исследование изменило бизнес-модель, а онбординг снизил нагрузку на поддержку"
              tags={["iOS", "Android", "Web", "Admin panel"]}
            />
          </div>
        </ScrollReveal>

        {/* ── Mobile-only grid: featured group (<=768px) ── */}
        <div
          className="mobile-works-grid container-1280 responsive-px"
          style={{ marginTop: "20px", padding: "0 50px" }}
        >
          <MobileProjectCard
            image="/projects/SuperApp.png"
            imageWidth={2360}
            imageHeight={1328}
            imageOpacity={0.9}
            objectPosition="30% center"
            tintColor="rgba(0,83,161,0.25)"
            href="/projects/atom-ev"
            title="Суперапп для электромобиля (NDA)"
            description="Диагностировали падение SUS с 84% до 75% и построили омниканальную дизайн-систему для экосистемы электромобиля — мобайл и SWP"
            tags={["Кроссплатформа", "SWP"]}
          />
          <MobileProjectCard
            imageSlot={<LuCardsMobileImage />}
            href="/projects/lu-cards"
            title="LU Cards"
            description="Механика с ежедневной картой увеличила возвращаемость: reveal-анимация превратила открытие карты в ритуал и подняла приложение в топ-100 App Store"
            tags={["iOS", "Android"]}
          />
          <MobileProjectCard
            image="/projects/Cuverse.png"
            imageWidth={1160}
            imageHeight={1328}
            objectPosition="center bottom"
            tintColor="rgba(4,29,27,0.2)"
            href="/projects/cuverse"
            title="Сuverse"
            description="Спроектировала UX для крипто-продукта с высоким порогом входа — от онбординга до мониторинга хешрейта"
            tags={["iOS", "Android"]}
          />
          <MobileProjectCard
            image="/projects/Telecom.png"
            imageWidth={2360}
            imageHeight={1328}
            imageOpacity={1}
            objectPosition="center 15%"
            href="/projects/european-telecom"
            title="Европейский телеком (NDA)"
            description="Как JTBD-исследование изменило бизнес-модель, а онбординг снизил нагрузку на поддержку"
            tags={["iOS", "Android", "Web", "Admin panel"]}
          />
        </div>
      </div>

      {/* ── "Другие проекты" heading (h=96) ── */}
      <div className="container-1280 responsive-px works-other-heading" style={{ padding: "70px 50px 0" }}>
        <h2 style={headingStyle}>Другие проекты</h2>
      </div>

      {/* ── Row 4: Frenk + Flawery (h=684) ── */}
      <ScrollReveal>
        <div
          className="container-1280 responsive-px desktop-only-row"
          style={{
            padding: "20px 50px 0",
            display: "flex",
            gap: "20px",
          }}
        >
          <ProjectCard
            layers={[{ kind: "image", src: "/projects/Frenk.png" }]}
            imageWidth={1160}
            imageHeight={1328}
            title="Frank by БАСТА"
            description="4 режима заказа: доставка, самовывоз, групповой, блюдо за баллы. Решение CRM-ограничений через контекстный сбор данных пользователя"
            tags={["Web", "Кроссплатформа"]}
            tagBorderColor="rgba(232,247,210,0.4)"
            buttonText="Перейти на сайт"
            buttonIcon
          />
          <ProjectCard
            layers={[
              { kind: "image", src: "/projects/Flawery.png" },
              { kind: "tint", color: "rgba(196,136,147,0.2)" },
              { kind: "image", src: "/projects/Flawery.png" },
            ]}
            imageWidth={1160}
            imageHeight={1328}
            title="Flawery"
            description="Работа велась параллельно со студией-конкурентом — по результатам прототипов и концепции наша команда выиграла право дальнейшей разработки приложения"
            tags={["iOS", "Android"]}
            tagBorderColor="rgba(232,247,210,0.4)"
            buttonText="Перейти в App Store"
            buttonIcon
          />
        </div>
      </ScrollReveal>

      {/* ── Mobile-only grid: other group (<=768px) ── */}
      <div
        className="mobile-works-grid container-1280 responsive-px"
        style={{ padding: "20px 50px 0" }}
      >
        <MobileProjectCard
          image="/projects/Frenk.png"
          imageWidth={1160}
          imageHeight={1328}
          objectPosition="center 78%"
          title="Frank by БАСТА"
          description="4 режима заказа: доставка, самовывоз, групповой, блюдо за баллы. Решение CRM-ограничений через контекстный сбор данных пользователя"
          tags={["Web", "Кроссплатформа"]}
          buttonText="Перейти на сайт"
          buttonIcon
        />
        <MobileProjectCard
          image="/projects/Flawery.png"
          imageWidth={1160}
          imageHeight={1328}
          objectPosition="center 30%"
          tintColor="rgba(196,136,147,0.4)"
          tintBlendMode="soft-light"
          title="Flawery"
          description="Работа велась параллельно со студией-конкурентом — по результатам прототипов и концепции наша команда выиграла право дальнейшей разработки приложения"
          tags={["iOS", "Android"]}
          buttonText="Перейти в App Store"
          buttonIcon
        />
      </div>

      {/* ── Logo strip (h=224) ── */}
      <LogoStrip />

    </section>
  );
}
