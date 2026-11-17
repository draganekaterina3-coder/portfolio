import StoreLinks from "@/components/StoreLinks";
import FloatingContact from "@/components/FloatingContact";
import { inter } from "@/lib/fonts";
import type { Lang } from "@/lib/i18n";

// The <html>/<head>/<body> frame both language layouts share. Each language
// has its own root layout (route groups (ru) and (en)) so the server-rendered
// <html lang> is right for screen readers and search engines.
export default function SiteShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={inter.variable}>
      {/* eslint-disable-next-line @next/next/no-head-element -- this IS the root layout (app router), where <head> is the supported way to add the font link */}
      <head>
        {/* General Sans (Fontshare) — not on next/font/google, so it's
            loaded as a real <link> (discovered by the browser during HTML
            parsing) instead of a CSS @import (only discovered once the CSS
            engine reaches it, later in the critical path). preconnect opens
            the connection to api.fontshare.com in parallel with everything
            else instead of waiting for the stylesheet request to start it. */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@500&display=swap"
        />
      </head>
      <body>
        {children}
        <FloatingContact lang={lang} />
        <StoreLinks />
      </body>
    </html>
  );
}
