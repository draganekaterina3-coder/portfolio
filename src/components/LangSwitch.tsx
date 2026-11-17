import Link from "next/link";
import { dict, otherLang, type Lang } from "@/lib/i18n";

// Link to the same page in the other language ("EN" on Russian pages, "RU" on
// English ones). `href` is that page's address in the other language.
export default function LangSwitch({ lang, href }: { lang: Lang; href: string }) {
  const other = otherLang(lang);
  return (
    <Link
      href={href}
      hrefLang={other}
      lang={other}
      className="lang-switch"
      title={dict[lang].switchTitle}
      aria-label={dict[lang].switchTitle}
    >
      {dict[lang].switchLabel}
    </Link>
  );
}
