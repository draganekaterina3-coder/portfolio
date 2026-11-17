// Every piece of copy that isn't a case study lives here, once per language.
// Case studies have their own files: lib/projects.ts (RU, with all structure
// and images) and lib/projects.en.ts (the English text, merged into the same
// structure so the two can never drift apart).

export type Lang = "ru" | "en";

export const otherLang = (lang: Lang): Lang => (lang === "ru" ? "en" : "ru");

export const homeHref = (lang: Lang) => (lang === "ru" ? "/" : "/en");
export const sectionHref = (lang: Lang, id: string) => `${homeHref(lang)}#${id}`;
export const projectHref = (lang: Lang, slug: string) =>
  lang === "ru" ? `/projects/${slug}` : `/en/projects/${slug}`;

export const links = {
  telegram: "https://t.me/ekt_dr",
  resume: { ru: "/ekaterina-dragan-resume-ru.pdf", en: "/ekaterina-dragan-resume-en.pdf" },
  hh: "https://spb.hh.ru/resume/3be0c8a0ff07562ef40039ed1f38766d784658",
  behance: "https://www.behance.net/221a97bb",
  linkedin: "https://www.linkedin.com/in/ekaterina-dragan-218448272/",
  article: "https://secrets.tbank.ru/blogi-kompanij/kakoj-kompanii-nuzhna-dizajn-sistema/",
  talk: "https://www.youtube.com/watch?v=mH8yUnlu5-w",
  frank: "https://frankmeat.ru/",
  flaweryApple:
    "https://apps.apple.com/ru/app/%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2-flawery-%D1%86%D0%B2%D0%B5%D1%82%D1%8B/id1293147226",
  flaweryAndroid:
    "https://play.google.com/store/apps/details?id=ru.flawery.client.app&pcampaignid=web_share",
};

// A paragraph of the About text, as segments so links and bold keep working
// in both languages.
export type Seg = string | { b: string } | { a: string; href: string };

export type Card = {
  title: string;
  description: string;
  tags: string[];
  // The one number that sells the project; shown on the card at all times.
  metric?: string;
};

export type Dict = {
  htmlTitle: string;
  htmlDescription: string;
  locale: string;
  switchLabel: string; // label of the link to the OTHER language
  switchTitle: string;
  nav: { home: string; works: string; about: string; contact: string };
  menu: { open: string; close: string };
  hero: {
    lead: string;
    status: string;
    primary: string;
    secondary: { label: string; href: string };
  };
  works: {
    featured: string;
    other: string;
    view: string;
    site: string;
    store: string;
  };
  cards: {
    barca: Card;
    lucards: Card;
    cuverse: Card;
    ev: Card;
    frank: Card;
    flawery: Card;
  };
  about: {
    name: string;
    role: string;
    photoAlt: string;
    facts: { value: string; label: string }[];
    paragraphs: Seg[][];
  };
  footer: {
    headline: string;
    cta: string;
    role: string;
  };
  float: { pill: string; cta: string };
  project: {
    next: string;
    summary: string;
    problem: string;
    did: string;
    result: string;
    illustration: string;
  };
};

export const dict: Record<Lang, Dict> = {
  ru: {
    htmlTitle: "Dragan Ekaterina — Product Designer",
    htmlDescription:
      "Портфолио Екатерины Драган — продуктового дизайнера с опытом в мобильных приложениях, дизайн-системах и UX research.",
    locale: "ru_RU",
    switchLabel: "EN",
    switchTitle: "English version",
    nav: { home: "Главная", works: "Работы", about: "Обо мне", contact: "Связаться" },
    menu: { open: "Открыть меню", close: "Закрыть меню" },
    hero: {
      lead: "Продуктовый дизайнер. Проектирую мобильные приложения и дизайн-системы: от исследования до передачи в разработку",
      status: "Открыта к предложениям",
      primary: "Написать в Telegram",
      secondary: { label: "Резюме", href: links.resume.ru },
    },
    works: {
      featured: "Избранные проекты",
      other: "Другие проекты",
      view: "Посмотреть проект",
      site: "Перейти на сайт",
      store: "Перейти в Store",
    },
    cards: {
      barca: {
        title: "Barça Mobile",
        description:
          "Суперапп для футбольных фанатов за полтора месяца до релиза стал телеком-продуктом, а онбординг eSIM снизил нагрузку на поддержку",
        tags: ["iOS", "Android", "Web", "Admin panel"],
        metric: "1M+ скачиваний · 19 языков",
      },
      lucards: {
        title: "LU Cards",
        description:
          "Механика с ежедневной картой увеличила возвращаемость: reveal-анимация превратила открытие карты в ритуал и подняла приложение в топ-100 App Store",
        tags: ["iOS", "Android"],
        metric: "+35% DAU · топ-100 App Store",
      },
      cuverse: {
        title: "Cuverse",
        description:
          "UX-редизайн приложения для инвестиций в майнинг биткоина: пять ключевых сценариев за три месяца, прототипы приняты как финальные",
        tags: ["iOS", "Android"],
        metric: "5 сценариев · 3 месяца",
      },
      ev: {
        title: "Суперапп электромобиля",
        description:
          "Диагностировали падение SUS с 84% до 75% и построили омниканальную дизайн-систему для экосистемы электромобиля — мобайл и SWP",
        tags: ["Кроссплатформа", "SWP"],
        metric: "4 команды · одна система",
      },
      frank: {
        title: "Frank by БАСТА",
        description:
          "4 режима заказа: доставка, самовывоз, групповой, блюдо за баллы. Решение CRM-ограничений через контекстный сбор данных пользователя",
        tags: ["Web", "Кроссплатформа"],
      },
      flawery: {
        title: "Flawery",
        description:
          "Работа велась параллельно со студией-конкурентом — по результатам прототипов и концепции наша команда выиграла право дальнейшей разработки приложения",
        tags: ["iOS", "Android"],
      },
    },
    about: {
      name: "Екатерина Драган",
      role: "продуктовый дизайнер",
      photoAlt: "Екатерина Драган, продуктовый дизайнер",
      facts: [
        { value: "5 лет", label: "в продуктовом дизайне" },
        { value: "2 года", label: "менторства" },
      ],
      paragraphs: [
        [{ b: "Работаю в полном цикле разработки: " }, "от ux‑исследований и гипотез до запуска и дальнейшего развития продукта"],
        ["Специализируюсь на мобильных приложениях, но имею опыт работы и с веб‑сервисами и сложными экосистемами"],
        ["Создаю продукты в различных сферах: ", { b: "e‑commerce, финтехе, крипто, телеком и даже суперапп" }, " для электромобиля"],
        [
          "Строю ",
          { b: "дизайн‑системы с нуля и с легаси" },
          ". Написала статью «Дизайн‑система или UI‑кит: что выбрать бизнесу». ",
          { a: "Почитать на Т‑Бизнес секреты", href: links.article },
        ],
        [
          "Была ментором младшего дизайнера в компании, выступила с докладом о своём опыте в Dprofile. ",
          { a: "Посмотреть на YouTube", href: links.talk },
        ],
      ],
    },
    footer: {
      headline: "Открыта к предложениям: рассматриваю позицию продуктового дизайнера",
      cta: "Связаться со мной",
      role: "Product Designer",
    },
    float: { pill: "Связаться", cta: "Связаться со мной" },
    project: {
      next: "Следующий проект",
      summary: "Кейс за 30 секунд",
      problem: "Проблема",
      did: "Что сделала",
      result: "Результат",
      illustration: "ИЛЛ",
    },
  },

  en: {
    htmlTitle: "Dragan Ekaterina — Product Designer",
    htmlDescription:
      "Portfolio of Ekaterina Dragan, a product designer focused on mobile apps, design systems and UX research.",
    locale: "en_US",
    switchLabel: "RU",
    switchTitle: "Русская версия",
    nav: { home: "Home", works: "Works", about: "About", contact: "Contact" },
    menu: { open: "Open menu", close: "Close menu" },
    hero: {
      lead: "Product designer. I design mobile apps and design systems, from research to developer handoff",
      status: "Open to new roles",
      primary: "Message me on Telegram",
      secondary: { label: "Resume", href: links.resume.en },
    },
    works: {
      featured: "Selected projects",
      other: "Other projects",
      view: "View case study",
      site: "Visit website",
      store: "Open in store",
    },
    cards: {
      barca: {
        title: "Barça Mobile",
        description:
          "A fan superapp became a telecom product six weeks before launch, and eSIM onboarding cut the load on support",
        tags: ["iOS", "Android", "Web", "Admin panel"],
        metric: "1M+ downloads · 19 languages",
      },
      lucards: {
        title: "LU Cards",
        description:
          "A daily-card mechanic brought users back: a reveal animation turned opening a card into a ritual and lifted the app into the App Store top 100",
        tags: ["iOS", "Android"],
        metric: "+35% DAU · App Store top 100",
      },
      cuverse: {
        title: "Cuverse",
        description:
          "UX redesign of an app for investing in bitcoin mining: five core flows in three months, prototypes accepted as final",
        tags: ["iOS", "Android"],
        metric: "5 flows · 3 months",
      },
      ev: {
        title: "EV superapp",
        description:
          "Diagnosed a SUS drop from 84 to 75 and built an omnichannel design system for an electric-car ecosystem: mobile and the in-car dashboard (SWP)",
        tags: ["Cross-platform", "SWP"],
        metric: "4 teams · one system",
      },
      frank: {
        title: "Frank by БАСТА",
        description:
          "Four ordering modes: delivery, pickup, group order, dish for points. CRM limits solved by collecting user data in context",
        tags: ["Web", "Cross-platform"],
      },
      flawery: {
        title: "Flawery",
        description:
          "We worked in parallel with a competing studio. After the prototypes and concept review, our team won the right to continue developing the app",
        tags: ["iOS", "Android"],
      },
    },
    about: {
      name: "Ekaterina Dragan",
      role: "product designer",
      photoAlt: "Ekaterina Dragan, product designer",
      facts: [
        { value: "5 years", label: "in product design" },
        { value: "2 years", label: "mentoring" },
      ],
      paragraphs: [
        [{ b: "I work across the full product cycle: " }, "from UX research and hypotheses to launch and the product's further growth"],
        ["I specialize in mobile apps, and I have also worked on web services and complex ecosystems"],
        ["I have built products in e‑commerce, fintech, crypto, telecom and even ", { b: "an EV superapp" }],
        [
          "I build ",
          { b: "design systems from scratch and on top of legacy" },
          ". I wrote an article on choosing between a design system and a UI kit (in Russian). ",
          { a: "Read it on T-Bank Secrets", href: links.article },
        ],
        [
          "I mentored a junior designer at work and gave a talk about that experience at Dprofile (in Russian). ",
          { a: "Watch on YouTube", href: links.talk },
        ],
      ],
    },
    footer: {
      headline: "Open to new roles: looking for a product designer position",
      cta: "Get in touch",
      role: "Product Designer",
    },
    float: { pill: "Contact", cta: "Get in touch" },
    project: {
      next: "Next project",
      summary: "The case in 30 seconds",
      problem: "Problem",
      did: "What I did",
      result: "Result",
      illustration: "ILL",
    },
  },
};
