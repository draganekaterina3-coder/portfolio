"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { homeHref, type Lang } from "@/lib/i18n";

const copy: Record<Lang, { text: string; home: string; switchLabel: string; switchTitle: string }> = {
  ru: {
    text: "Такой страницы нет или она переехала",
    home: "На главную",
    switchLabel: "EN",
    switchTitle: "English version",
  },
  en: {
    text: "This page does not exist or has moved",
    home: "Back to home",
    switchLabel: "RU",
    switchTitle: "Русская версия",
  },
};

/*
  Content of the 404 page. The page has no layout around it and can't know the
  visitor's language, so it follows the address (/en/... shows English) and the
  language switch in the header changes it on the spot, like the switch on the
  rest of the site.
*/
export default function NotFoundScreen() {
  const pathname = usePathname() ?? "";
  const [chosen, setChosen] = useState<Lang | null>(null);
  const lang: Lang = chosen ?? (pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru");
  const t = copy[lang];

  return (
    <main className="nf" lang={lang}>
      <div className="container-1280 responsive-px nf__inner">
        <header className="nf__top">
          <Link href={homeHref(lang)} className="nf__name">
            Dragan Ekaterina
          </Link>
          <button
            type="button"
            className="lang-switch"
            title={t.switchTitle}
            aria-label={t.switchTitle}
            onClick={() => setChosen(lang === "ru" ? "en" : "ru")}
          >
            {t.switchLabel}
          </button>
        </header>

        <div className="nf__main">
          <h1 className="nf__code" aria-label="404">
            <span>4</span>
            <span className="nf__zero">0</span>
            <span>4</span>
          </h1>
          <p className="nf__text">{t.text}</p>
          <div className="hero-cta nf__cta">
            <Link href={homeHref(lang)} className="hero-cta__primary">
              <span>{t.home}</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
