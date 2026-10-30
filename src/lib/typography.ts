// Russian typographic rules applied at render time, so the copy in the source
// stays plain readable text.
//
//  1. Short prepositions / conjunctions / particles are glued to the NEXT word
//     with a non-breaking space — a line never ends on "в", "на", "и", "не"…
//  2. A dash never starts a line: the space BEFORE "—" is non-breaking.
//  3. A number stays with the word after it ("14 дней", "2027 г.", "5 лет").
//  4. A few fixed pairs never split ("App Store", "Google Play", "Mobile App").
//  5. A hyphenated word never breaks at its hyphen ("арт-директор", "бизнес-модель"):
//     a word joiner (U+2060, invisible) right after the hyphen removes the break point.
//
// Only the ordinary space (U+0020) is touched — "\n" and existing non-breaking
// characters are left alone.

const NBSP = " ";

const WJ = "\u2060";

const L = "A-Za-zА-Яа-яЁё";

const SHORT_WORDS = [
  "в", "во", "к", "ко", "с", "со", "у", "о", "об", "обо", "и", "а", "но", "на", "за",
  "по", "из", "от", "до", "не", "ни", "же", "бы", "ли", "для", "при", "про", "без",
  "над", "под", "или", "как", "что",
].join("|");

const shortWord = new RegExp(`(?<![${L}])(${SHORT_WORDS}) `, "gi");
const dash = / —(?=[ \n]|$)/g;
const numberThenWord = new RegExp(`(\\d%?) (?=[${L}])`, "g");
const hyphenated = new RegExp(`(?<=[${L}])-(?=[${L}])`, "g");
const pairs = /\b(App) (Store)\b|\b(Google) (Play)\b|\b(Mobile) (App)\b/g;

export function nb(text: string): string {
  return text
    .replace(dash, `${NBSP}—`)
    .replace(hyphenated, `-${WJ}`)
    .replace(numberThenWord, `$1${NBSP}`)
    .replace(pairs, (_m, a1, b1, a2, b2, a3, b3) =>
      a1 ? `${a1}${NBSP}${b1}` : a2 ? `${a2}${NBSP}${b2}` : `${a3}${NBSP}${b3}`,
    )
    .replace(shortWord, `$1${NBSP}`);
}
