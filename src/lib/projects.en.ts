// English text of the case studies. It is merged into the Russian structure
// (lib/projects.ts) block by block, so images, links and ordering stay in one
// place. localizeProject() checks at build time that every block lines up.

import type { ProjectText } from "./projects";

const luCards: ProjectText = {
  title: "LU Cards",
  description:
    "LU Cards case study: a daily-card mechanic with a reveal animation that lifted DAU by 35% and took the app into the App Store top 100.",
  meta: [
    {
      label: "Role",
      value:
        "I worked on the daily-interaction concept and interface design together\nwith the art director",
    },
    { label: "Period", value: "March 2024 — September 2024" },
    { label: "Team", value: "Art director, project manager and development teams" },
    { label: "Platforms", value: "iOS, Android" },
    { label: "Status", value: "Launched" },
  ],
  metrics: [
    { value: "+35%", label: "DAU after the mechanic launched" },
    { value: "Top 100", label: "Lifestyle\nApp Store" },
    { value: "2×", label: "Reveal mechanics:\nice, fog" },
  ],
  summary: {
    problem:
      "Users came to the app situationally, when a need arose, and had no reason to return every day",
    did: "Together with the art director, designed a daily-card mechanic: collecting a unique deck where a new star opens each day, and two reveal animations, ice and fog",
    result:
      "Users came back to the app more often, and the app climbed into the top of its category in the Russian App Store",
  },
  blocks: [
    {
      kind: "text",
      title: "Context",
      paragraphs: [
        "LU Cards is a mobile app for working with metaphorical cards: a psychological tool for reflection, self-discovery and working with associations",
        "Users came to the app situationally, when a need arose. There was no reason to come back to the app every day",
      ],
    },
    {
      kind: "figure",
      caption: "Home screen before the mechanic",
      alt: "LU Cards home screen before the daily-card mechanic",
    },
    {
      kind: "text",
      title: "Task",
      paragraphs: [
        "Create a mechanic that builds a daily habit without a feeling of compulsion",
        "“LU Cards users already came for a ritual,\nso we needed to give them a reason to return every day”",
      ],
    },
    {
      kind: "steps",
      title: "Process",
      steps: [
        {
          title: "01 Brainstorm with the team",
          text: "We looked for a mechanic with a daily ritual without pressure.\nReferences: Duolingo's streak, but without compulsion",
        },
        {
          title: "02 Collecting as motivation",
          text: "We took the space theme proposed by the client as the basis. Every day the user gets a new star with a card hidden behind it. Gradually the stars form constellations and the cards form a themed deck. We added intermediate achievements to keep interest on the way to the full collection",
        },
        {
          title: "03 Emotional interaction",
          text: "Instead of the usual card opening we developed two reveal mechanics: the user breaks ice or wipes away fog. This turns the daily card into a self-contained interactive experience",
        },
      ],
    },
    {
      kind: "figure",
      caption: "The unique deck is available from the home screen and from the profile",
      alt: "App screens with entry points to the new daily-card mechanic",
    },
    {
      kind: "text",
      title: "Solution",
      paragraphs: [
        "We built the concept around three levels of motivation: curiosity before opening a new card, the emotional pleasure of interaction and gradual progress in collecting the deck",
        "This produced a daily scenario that fit the product's psychological context naturally: it motivates returning without obligations and without penalties for missed days",
      ],
    },
    {
      kind: "figure-pair",
      items: [
        {
          caption: "The “Ice” mechanic",
          alt: "Space background of the LU Cards deck",
          screenAlt: "Screen recording of the “Ice” mechanic: the card has to be freed from ice",
        },
        {
          caption: "The “Fog” mechanic",
          alt: "Space background of the LU Cards deck",
          screenAlt: "Screen recording of the “Fog” mechanic: wipe the fogged card",
        },
      ],
    },
    {
      kind: "text",
      title: "Result",
      paragraphs: [
        "After the unique deck launched, the app's DAU grew by 35%",
        "During this period LU Cards also entered the top 100 of the Lifestyle category of the Russian App Store",
      ],
    },
    {
      kind: "figure",
      caption: "The concept of collecting a unique deck is a series of small wins",
      alt: "Screens of the unique-deck collecting mechanic in LU Cards",
    },
    {
      kind: "text",
      title: "Reflection",
      paragraphs: [
        "The most important decision turned out to be not the daily card opening itself but the balance between short-term and long-term motivation. One big goal could take too long before the first achievement, so we split the collection into small stages",
        "In future projects I would pay even more attention to testing such mechanics on early prototypes and measuring their effect on repeat use",
      ],
    },
  ],
};

const barcaMobile: ProjectText = {
  title: "Barça Mobile",
  description:
    "Barça Mobile case study: how a superapp for football fans became a telecom product six weeks before launch, and why the team's work was not lost.",
  meta: [
    {
      label: "Role",
      value:
        "Product designer, and design team lead from the middle of the project. I led the project from research to developer handoff",
    },
    { label: "Period", value: "June 2024 — January 2026" },
    {
      label: "Team",
      value:
        "Designers (a middle, a junior and an intern joined mid-project), art director, analyst and project manager",
    },
    {
      label: "Communication",
      value:
        "In English, with the client, the club's marketing team and the team that took over development",
    },
    { label: "Platforms", value: "iOS, Android, web, admin panel" },
    {
      label: "Status",
      value:
        "Launched in April 2025, available on the App Store and Google Play. Since 2026 another team develops the product",
    },
  ],
  metrics: [
    { value: "1M+", label: "downloads\non Google Play" },
    { value: "19 languages", label: "in the app\nand on the website" },
    { value: "4 platforms", label: "iOS, Android, web\nand admin panel" },
  ],
  summary: {
    problem:
      "Six weeks before launch, a superapp for football fans had to become a telecom product without losing the work already done",
    did: "Ran JTBD interviews, rebuilt the navigation around eSIM, designed a mandatory onboarding, led the design team and the design system",
    result:
      "Launched in April 2025 on the App Store and Google Play. Support complaints dropped noticeably after the onboarding",
  },
  blocks: [
    { kind: "figure", placeholder: "ILL-1 · Case cover" },
    {
      kind: "text",
      title: "Context",
      paragraphs: [
        "A football club with a multimillion-strong audience was launching its own virtual mobile operator. The original idea was ambitious: a superapp for fans. Matches and stats, match tickets, merch, trips to away games, bank cards and mobile connectivity in one app",
        "The strategy had two steps. First, the app was to become a familiar service for fans, built around football content. Once loyalty appeared, the club planned to launch commercial products, starting with eSIM and bank cards",
      ],
    },
    { kind: "figure", placeholder: "ILL-2 · Information architecture map of the superapp" },
    {
      kind: "text",
      title: "Task",
      paragraphs: [
        "Design an app fans would come back to every day and lay the groundwork in it for the club's commercial services. After the pivot the task changed: release a telecom product in six weeks without losing the work already done",
      ],
    },
    {
      kind: "steps",
      title: "Process",
      steps: [
        {
          title: "01 Understanding the fans",
          text: "Before the project the team had no clear picture of the audience. I ran in-depth interviews using JTBD and Job Stories with two types of users: a die-hard fan and an average football lover. The first reads everything about the club and about sports sites in general, and uses stats apps. The second mostly just watches matches, follows lineup changes and statistics less, and does not use dedicated apps\n\nKey findings:\n\n• **Notification delay.** If a fan has goal and key-event notifications on, the app can accidentally spoil the match. The internet beats the TV broadcast by seconds, sometimes by minutes, so a goal notification arrives before the goal is shown on TV. We designed a configurable notification delay. After the pivot, however, the feature went to the backlog along with most of the football stats\n• **Monetization model.** The client wanted the app to be paid from day one. The interviews showed that without unique content fans would not pay for what competitors give away for free. Our arguments were quotes from the interviews and a comparison with popular apps of a similar kind: they have a large audience, but they are free and earn on services and unique features. The client agreed, and we settled on monetizing the app through special features and services such as mobile data and banking",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-3 · Research findings" },
    {
      kind: "steps",
      steps: [
        {
          title: "02 Designing the superapp",
          text: "Based on the research we built an app architecture with four tabs — Club, Matches, Services and Profile — and designed most of the football scenarios: the schedule and match screen, the league table, the lineup, news and notification settings",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-4 · Superapp prototypes before the pivot" },
    {
      kind: "steps",
      steps: [
        {
          title: "03 The pivot, six weeks before launch",
          text: "When most of the football scenarios were ready, the client decided to launch with telecom products. Travel eSIM had not been designed yet; only a contractor for the API had been found\n\nThe decision matched one of the jobs from the interviews: “When I travel to a match in another country, I don't want to worry about mobile connectivity.” So the telecom product was both a business decision and an answer to a need the fans had named themselves\n\nIn the remaining six weeks we rebuilt the navigation around telecom and designed buying and installing an eSIM. We did not throw the football content away; we moved it to the Services section as groundwork for future releases",
        },
      ],
    },
    {
      kind: "figure",
      placeholder: "ILL-5 · Navigation before and after the pivot",
      caption:
        "Before: “Club · Matches · Services · Profile”. After: “Travel eSIM · My products · Services · Profile”",
    },
    {
      kind: "text",
      paragraphs: [
        "The pivot changed the app's logic too: services moved to the front on every screen. The client also decided to refresh the visual style. The art director and I proposed our own concept: a “My services” screen with balance, connectivity, eSIM and the loyalty program, a Discovery feed and matches. The client, however, went with the version from the club's marketing team",
      ],
    },
    { kind: "figure", placeholder: "ILL-10 · Visual concept after the pivot" },
    {
      kind: "steps",
      steps: [
        {
          title: "04 Team and system",
          text: "Once the work plan took shape, three more designers joined the project — a middle, a junior and an intern — and besides designing I took on the lead role. I distributed tasks by experience level, took the most complex flows of the app and the website myself, and reviewed the team's work. Football is a specific topic, so I also introduced the team to the domain I had studied in the first months\n\nI built the library with an atomic approach. I had discussed the idea with the art director before, and the project turned out to be the right scale to try it. Every component had all its settings, states and constraints described from the start. That turned out to be convenient for development, and almost no duplicates appeared even when five designers worked in one file. The price was speed. New components took a long time to create, newcomers found the settings cumbersome, and a mistake in a base component then had to be fixed in every layout\n\nThe Android version was adapted following Material Design. Onboarding for it differed too, because Android had no one-tap eSIM installation and no way to delete an eSIM from the app. We handed the layouts and the library to the iOS, Android and web developers ourselves, and at the end of the project I handed them over to the new team the client gave development to",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-6 · Design system" },
    {
      kind: "steps",
      title: "Solution",
      steps: [
        {
          title: "eSIM onboarding: fewer support requests",
          text: "The client brought a problem from the support team: after buying an eSIM, users often wrote that it did not work. The most common cause was that people forgot to turn on data roaming\n\nI designed an onboarding and built it right into the purchase flow, and at the client's insistence it became mandatory. After payment the user lands straight on the screen of their eSIM with an installation guide that cannot be swiped through in the first seconds. Turning on data roaming is highlighted as the key step. For those for whom something went wrong, I added a “Problems with installation?” checklist to the eSIM screen: it lets people check their settings themselves before contacting support\n\n• **Purchase.** Country → plan → payment → identity verification (for some countries)\n• **Onboarding.** A guide with a swipe delay and an emphasis on roaming\n• **Installation.** On iOS: by QR code, in one tap or manually. On Android: by QR code or manually\n\nAccording to the client, support complaints dropped noticeably after the onboarding launched",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-7 · Purchase flow, onboarding and eSIM installation" },
    { kind: "figure", placeholder: "ILL-7b · “Problems with installation?” checklist" },
    {
      kind: "steps",
      steps: [
        {
          title: "Website and admin panel",
          text: "Half a year into the work, a website and an admin panel were added to the app. The website was made in two versions: one for the whole world and one for Spain, where besides eSIM mobile service and home internet are available\n\nFor the admin panel I put together a starter library with universal components that repeat in most admin panels. A junior designer worked with it, and a short guide in the file was enough for them to assemble screens on their own. My role in the admin panel was this starter and reviewing",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-8 · Website for the world and for Spain" },
    { kind: "figure", placeholder: "ILL-9 · Starter library for the admin panel" },
    {
      kind: "text",
      title: "Result",
      paragraphs: [
        "Barça Mobile was officially launched in April 2025. The app is available on the App Store and Google Play in 19 languages, and on Google Play it has over a million downloads. At the start of 2026 I handed the project to a new team, and the product is now developed without our involvement, so the current store version may differ from the layouts in this case",
        "• **The monetization model from the research held.** The app is free; only eSIM and SIM cards are paid\n• **The football part was not lost.** It became groundwork for future releases, and La Liga matches stayed in the product\n• **eSIM onboarding noticeably reduced complaints,** by the client's estimate",
      ],
    },
    {
      kind: "text",
      title: "Reflection",
      paragraphs: [
        "**On the design system.** The atomic approach paid off for development but slowed down design and confused newcomers. Now I would start with a simple layer of base components and make the system more complex gradually, along with onboarding the team",
        "**On the pivot.** I would formally fix the MVP scope with the client earlier. Then the change of focus would have cost less rework",
        "**On the external API.** We agreed the data set for the interface with the contractor in advance, but they did not implement it by launch. The user saw only the plan's validity: the purchase date and period, and we could not add even a usage bar ourselves. The usage bar, the day countdown and the notification about the package running out appeared later, when the manager and the analyst got the contractor to finish the work. Takeaway: if an interface depends on an external API, design a fallback right away for the case when the data does not arrive on time, so the user is not left without key information",
      ],
    },
  ],
};

const evSuperapp: ProjectText = {
  title: "EV superapp",
  description:
    "NDA case: found the causes of the SUS drop and laid a shared design system for the mobile app and the dashboard of an electric car.",
  meta: [
    {
      label: "Role",
      value:
        "Product designer in a team of 3–6 designers. I reworked key flows after research, audited the component library and owned the foundational sections of the new design system",
    },
    { label: "Period", value: "December 2022 — May 2024" },
    {
      label: "Team",
      value:
        "Designers, product and project managers, analysts, UX researchers, Flutter developers; adjacent SWP, web and marketing teams",
    },
    { label: "Platforms", value: "iOS, Android, software dashboard (SWP)" },
    { label: "Status", value: "In development, release planned for 2027" },
    { label: "NDA", value: "The layouts are anonymized and show intermediate iterations" },
  ],
  metrics: [
    { value: "84 → 75", label: "SUS drop, whose causes\nwe broke down\nby scenario" },
    { value: "−20%", label: "library size after\nthe audit, even though\nthe system became fuller" },
    { value: "4 teams", label: "mobile, SWP, web and\nmarketing work with\none library" },
  ],
  summary: {
    problem:
      "SUS fell from 84 to 75 while mobile, SWP, web and marketing designed by their own rules",
    did: "Worked with the researchers to break the causes down into three pain zones, reworked the key screens, audited the component library and owned the foundational parts of the new design system",
    result:
      "The causes of the SUS drop were broken down into three zones, and the teams started designing scenarios together instead of handing over finished screens",
  },
  blocks: [
    { kind: "figure", placeholder: "ILL-1 · Case cover" },
    {
      kind: "text",
      title: "Context",
      paragraphs: [
        "The project is a next-generation electric-car gadget, around which a digital ecosystem is built: a mobile app and a software dashboard (SWP). Through them the driver controls the car, climate, charging, access and routes",
        "When I joined the project, the product was growing fast but unsystematically. Requirements were written before research, the team tried to ship as many features as possible, and UX tests were run only after development. Mobile, SWP, web and marketing lived by their own rules: each platform had its own logic, visual style and tone of voice",
        "The alarm signal came from the tests. After the February growth, SUS fell from 84 to 75 points in just two months. New releases added more barriers than value: the product was growing while the user experience fell apart",
      ],
    },
    {
      kind: "figure",
      placeholder: "ILL-2 · SUS chart across three waves",
      caption: "SUS dynamics: 79 → 84 → 75 points (December 2022 — April 2023)",
    },
    {
      kind: "text",
      title: "Task",
      paragraphs: [
        "Find the causes of the SUS drop and create a foundation on which the product can grow without losing coherence: shared rules and components for the app, the dashboard and adjacent teams",
        "“Fixing individual screens was not enough. As long as every team designs by its own rules, the regression will repeat”",
      ],
    },
    {
      kind: "steps",
      title: "Process",
      intro: [
        "The work went in three stages: from breaking down the causes to shared rules, and then to a system that locks those rules in",
      ],
      steps: [
        {
          title: "01 Breaking down the causes",
          text: "UX researchers compared three waves of usability tests: SUS and observations for each scenario. They presented the results to the design team, and we took them into work. That moved discussions from “it seems to me” to specific problems\n\nThe research showed three pain zones:\n\n• **Navigation.** After the redesign, 5 of 9 users could not find “Garage”, where the car settings were hidden, on their own\n• **Climate.** The “Manual” button was replaced with “Climate control”, which broke the mental model: 2 of 3 users started configuring the automatic mode, thinking it was manual\n• **Icons.** Unclear icons carried over from wave to wave: 3 of 5 did not recognize the charging port, 4 of 9 the service mode\n\nTogether with the researchers we formulated and prioritized hypotheses, and I reworked the key screens: the home screen, “Garage” and the climate settings",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-3 · Insight cards for the three pain zones" },
    {
      kind: "figure",
      placeholder: "ILL-4 · Layouts after the first iterations",
      caption: "Home screen, “Garage” and climate settings after the first iterations",
    },
    {
      kind: "steps",
      steps: [
        {
          title: "02 Putting the library in order",
          text: "The breakdown showed the issue was not only individual screens. Several designers worked in parallel, and the library had grown duplicates. I audited all components: found duplicates, missing states and places where solutions were effectively left to development. After the cleanup, the library shrank by about 20%\n\nAround that time structural changes began at the company, and the task of making the teams work together appeared. In workshops with SWP, web and marketing it became clear that components cannot be moved directly between platforms: a phone and a dashboard have different contexts. So we decided to start with a shared base: buttons, controls and input fields",
        },
      ],
    },
    {
      kind: "figure",
      placeholder: "ILL-5 · Library before and after the audit",
      caption: "Before the audit, one component had several twins; after it, none were left",
    },
    {
      kind: "steps",
      steps: [
        {
          title: "03 Locking rules into the design system",
          text: "We built the new design system as a whole team. Many decisions were discussed together with designers and developers so that components came out as universal as possible. I led buttons, input fields and controls — checkboxes, radio buttons and sliders — as well as colors, spacing and corner radii. Buttons, controls and input fields were exactly the shared base with which alignment with SWP began\n\nThe system became fuller than the old library: it gained scales for spacing, text sizes and corner radii. We built dark and light themes in from the start through Figma Variables, because in tests some users preferred the light one. I mapped the color palettes of mobile and SWP so the product looks unified on both screens\n\nSo that all teams could use the system, we put together a hub page for quick search and a legend by which the documentation of each component is written",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-6 · My sections of the design system" },
    { kind: "figure", placeholder: "ILL-7 · Mapping the mobile and SWP palettes" },
    {
      kind: "steps",
      title: "Solution",
      steps: [
        {
          title: "Home screen: widgets instead of icons",
          text: "The first hypotheses about navigation — moving the car settings or renaming “Garage” — turned out not to work. So we went further and rebuilt the home screen: instead of a grid of pictograms, cards and widgets with explanatory text and explicit controls. That closed two problems at once: unclear icons that repeated in all three waves of tests, and searching for the needed functions across sections. The set and order of widgets relied on card sorting, where users chose the most in-demand functions. And by the time I left, after the requirements were revisited, there was no separate “Garage” section in the product anymore",
        },
      ],
    },
    {
      kind: "figure",
      placeholder: "ILL-8 · Evolution of the home screen",
      caption: "From a grid of icons to widgets with clear labels",
    },
    {
      kind: "steps",
      steps: [
        {
          title: "Climate: presets for preparing the car",
          text: "The confusion with modes forced us to rethink the scenario itself. Most often the driver and passenger set up climate manually, already sitting in the car. So in the app the focus shifted to presets for preparing the car: warm it up in winter, cool it down in the heat",
        },
        {
          title: "Navigation: one route on two devices",
          text: "The goal was for the dashboard to become an extension of the phone and the phone an extension of the dashboard. Navigation became the scenario where we tested this idea\n\nThe user parks in the city center, a 15-minute walk from the destination. When they turn the car off, the app builds a walking route to the destination. When they are done, they open the navigator, and their car is first in the list of suggestions\n\nThe final point can be set in advance, for example home. Then the app shows the total travel time — on foot to the car and then in the car — and you can warn your family beforehand. When the user starts the car, the navigator on the dashboard opens with the route home already built\n\nThe key decision: the user does not have to carry anything over manually; the route moves from phone to car and back by itself. To make that work, I designed the mobile part in sync with the SWP designer instead of handing over finished screens",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-9 · Storytelling of the “phone → car” scenario" },
    {
      kind: "figure",
      placeholder: "ILL-10 · Navigation layouts in the app",
      caption: "Walking route to the car, shared route to the final point and route guidance",
    },
    {
      kind: "steps",
      steps: [
        {
          title: "Charging: a scenario on the new components",
          text: "I built the charging scenario already on the components of the new system, and it became a stress test for it. There was no real charging infrastructure yet, so the scenario was built on competitor analysis and the analysts' requirements. It has four states: connecting the connector, starting the session, the charging process and delayed charging. While the car charges, the app suggests what to do nearby\n\nThe test worked: the layouts showed that error toasts fell short on contrast. That is how we tested the system on live tasks",
        },
      ],
    },
    {
      kind: "figure",
      placeholder: "ILL-11 · Charging scenario",
      caption: "Four charging states built on the components of the new design system",
    },
    {
      kind: "text",
      title: "Result",
      paragraphs: [
        "After the reorganization the company deliberately changed its strategy: instead of a race for features, an MVP and a shared foundation for the product. SUS measurements were postponed until the final solutions appear, and this stage was spent making sure the regression would not repeat:",
        "• **The causes of the SUS drop are broken down.** Instead of arguments about “what is better”, the team has three problem zones and a prioritized list of hypotheses\n• **The library became about 20% more compact,** even though the system expanded with scales for spacing, typography and corner radii\n• **One library for four teams:** mobile, SWP, web and marketing\n• **The teams started working together.** Scenarios with SWP were designed in sync instead of being handed over as finished screens",
        "When leaving the project, I handed the design team a documented design system and a backlog of hypotheses",
        "Following this work I wrote an article about when a company needs a design system and how to build one. The article is published on the T-Bank Secrets blog (in Russian)",
      ],
    },
    { kind: "figure", placeholder: "ILL-12 · Link card to the article" },
    {
      kind: "text",
      title: "Reflection",
      paragraphs: [
        "The main takeaway: a UX regression is rarely caused by one unsuccessful screen. More often the cause is that teams design in isolation. So you have to fix not only the interface but also the rules by which it is created",
        "What I would do differently. Because of the reorganization most hypotheses stayed untested. Now I would push for quick checks on prototypes right after the breakdown, without waiting for the next wave of tests. And I would involve the SWP team in the usability breakdown from the start: shared insights would have sped up alignment",
      ],
    },
  ],
};

const cuverse: ProjectText = {
  title: "Cuverse",
  description:
    "Cuverse case study: a UX redesign of a mobile app that turns bitcoin mining into an understandable investment tool for people with no crypto background.",
  meta: [
    {
      label: "Role",
      value: "Product designer. I led the project from scenarios and prototypes to the visual concept",
    },
    { label: "Period", value: "November 2025 — January 2026" },
    {
      label: "Team",
      value: "Art director, analyst and project manager. On the client side, the business owner",
    },
    { label: "Platform", value: "iOS" },
    { label: "Status", value: "Prototypes accepted and used as the basis for development" },
  ],
  metrics: [
    { value: "3 months", label: "from kickoff to accepted\nprototypes of the whole app" },
    { value: "5 flows", label: "designed\nfrom scratch" },
    { value: "2 audiences", label: "newcomer\nand experienced investor" },
  ],
  summary: {
    problem:
      "The old app barely worked, and people without a technical background had to understand at any moment what they had earned, what they spent on electricity and what to do next",
    did: "Redesigned the app from scratch in short cycles with the client: the home screen, electricity payment, miner purchase, onboarding and uptime settings. On my own initiative I also made a visual concept",
    result:
      "The prototypes of the whole app were accepted as final and became the basis for development",
  },
  blocks: [
    { kind: "figure", placeholder: "ILL-1 · Case cover" },
    {
      kind: "text",
      title: "Context",
      paragraphs: [
        "Cuverse is a platform for investing in bitcoin mining. The user buys a miner, and Cuverse hosts and maintains it in its own data center. The user pays for electricity and receives mined bitcoin every day",
        "The audience is people ready to invest in crypto but not ready to dig into technical details: hashrate, uptime, network difficulty",
        "The old mobile app barely worked: it froze, and even logging into an account was a problem. Using it as a source of knowledge about the product was extremely difficult",
      ],
    },
    { kind: "figure", placeholder: "ILL-2 · Diagram: how mining works in Cuverse" },
    {
      kind: "text",
      title: "Task",
      paragraphs: [
        "Redesign the app so that a person without a technical background understands three things at any moment: how much they have earned, how much they spend on electricity and what to do next",
      ],
    },
    {
      kind: "steps",
      title: "Process",
      intro: [
        "The work went in short cycles: decisions were born in the team, checked with the client and refined right away",
      ],
      steps: [
        {
          title: "01 A foundation instead of the old app",
          text: "Since the old app did not work, two sources became the foundation. The first was the current Cuverse website, which another company was redoing in parallel: I used it to understand the product's logic. The second was the client, a mining expert I talked to directly",
        },
        {
          title: "02 Short cycles with the client",
          text: "Once a week the team had a call: the art director, the analyst, the project manager and I. In those meetings I rehearsed decisions before showing them. I presented the work to the client myself once or twice a week. The client's comments as an expert in their field strongly influenced product decisions",
        },
        {
          title: "03 Iterations where it is hard",
          text: "The home screen and other complex screens went through up to five iterations. Technical screens came together quickly. That made it possible to design the whole app in three months without losing depth where it matters",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-3 · Home screen iterations" },
    {
      kind: "steps",
      title: "Solution",
      steps: [
        {
          title: "Home screen: which chart to show",
          text: "The dashboard is the main screen, and everything on it concerns the user's profit. The first idea was to show payback (ROI)\n\nWe dropped it for two reasons. Payback takes more than a year, so the chart would look almost flat and demotivate. And above all, an honest ROI cannot be calculated: the user withdraws bitcoin to any third-party wallet, and the rate at which they sell it is not tracked\n\nThe decision was to show bitcoin accumulated over all time. Such a curve always grows or levels off and never falls. It is honest, motivating and feasible. The client approved the decision\n\nSo that the user sees the whole economics, the miners screen compares income in bitcoin with electricity costs for each group of miners, without trying to calculate payback",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-4 · Payback chart versus accumulated BTC chart" },
    { kind: "figure", placeholder: "ILL-5 · Home screen" },
    {
      kind: "steps",
      steps: [
        {
          title: "Paying for electricity: honest about limits",
          text: "“UX should honestly explain a product's limits, not hide them”\n\nThe user pays for electricity based on a duration: “$1,230 will last 30 days.” At 100% uptime that is an exact calculation. But at 65% the miners go into standby during peak-tariff hours, and the forecast becomes approximate. The client foresaw that without an explanation this would turn into user dissatisfaction and complaints about the product\n\nWe closed this risk on three levels. The copy everywhere speaks about a forecast: “will last about…”. Next to the amount there is a ≈ sign. And a question icon opens a sheet explaining when and why miners stop and why revenue at 65% is about 40% lower but mining still stays profitable. This way the user understands the product's logic in advance instead of learning it from charges. It protects both the user and the client",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-6 · Electricity payment screen and the uptime bottom sheet" },
    {
      kind: "steps",
      steps: [
        {
          title: "Cart with an income calculator",
          text: "When buying a miner, the user sets the term and the forecast bitcoin rate and immediately sees the expected income and payback. The buying decision is made in the moment, without external calculators",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-7 · Cart with the calculator" },
    {
      kind: "steps",
      steps: [
        {
          title: "Onboarding for two types of users",
          text: "The app explains the product to newcomers and offers to try mining for $69.99 for 14 days. Experienced investors skip onboarding. This lowers the entry barrier for those with no crypto background and does not get in the way of those already in the context",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-8 · Onboarding" },
    {
      kind: "steps",
      steps: [
        {
          title: "Uptime settings",
          text: "The user chooses a mining strategy — 65%, 100% or mixed — for all miners at once or for each one separately. A forecast of income and expenses is shown next to the choice, so the decision is informed",
        },
      ],
    },
    { kind: "figure", placeholder: "ILL-9 · Uptime settings" },
    {
      kind: "text",
      title: "Visual concept",
      paragraphs: [
        "While the client was deciding how to develop the project, I developed on my own initiative a visual concept of the future app. It shows the direction: from a technical tool to a clear and visually strong investment product. The data in the concept is simplified for clarity: if the work continued, it should be grounded in the real figures from the prototypes",
      ],
    },
    { kind: "figure", placeholder: "ILL-10 · Visual concept: home screen and electricity top-up" },
    {
      kind: "text",
      title: "Result",
      paragraphs: [
        "The client accepted the prototypes of the whole app as final and received a visual concept for its development. They decided to continue development with another contractor, and our prototypes became its basis",
        "• **Five key flows** designed from scratch: the home screen, electricity payment, miner purchase, onboarding and uptime settings\n• **Complex product limits** are explained in the interface instead of hidden: from the impossibility of an honest ROI to the approximate forecast at 65% uptime\n• **The whole app** was designed in three months",
      ],
    },
    {
      kind: "text",
      title: "Reflection",
      paragraphs: [
        "The main takeaway: in complex domains like fintech and crypto, UX must honestly explain a product's limits. Info blocks and bottom sheets here are not a crutch but part of the product solution",
        "An art director's advice that I now apply all the time: if you found a problem, come to the client right away with a solution, and better with several. A business owner is an expert in their field, and a pause on our side reads as an invitation to design the interface themselves. When the designer brings ready options, the client's expertise works where it is strongest: in judging solutions from the business point of view",
      ],
    },
  ],
};

export const projectsEn: Record<string, ProjectText> = {
  "lu-cards": luCards,
  "barca-mobile": barcaMobile,
  "ev-superapp": evSuperapp,
  cuverse,
};
