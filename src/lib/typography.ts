// Russian typographic rules applied at render time, so the copy in the source
// stays plain readable text.
//
//  1. Short words (up to three Russian letters, and the common English articles
//     and prepositions) are glued to the NEXT word with a non-breaking space,
//     so a line never ends on "в", "на", "и", "не", "я", "мы", "уже", "a", "the"…
//  2. A dash never starts a line: the space BEFORE "—" is non-breaking.
//  3. A number stays with the word after it ("14 дней", "2027 г.", "5 лет").
//  4. A few fixed pairs never split ("App Store", "Google Play", "Barça Mobile", "LU Cards").
//  5. A number range never breaks at its en dash ("3–6").
//  6. A hyphenated word never breaks at its hyphen ("арт-директор", "бизнес-модель"):
//     a word joiner (U+2060, invisible) right after the hyphen removes the break point.
//
// Only the ordinary space (U+0020) is touched — "\n" and existing non-breaking
// characters are left alone.

const NBSP = " ";

const WJ = "\u2060";

const L = "A-Za-zА-Яа-яЁё";

const SHORT_WORDS = [
  // Any Russian word of up to three letters: prepositions, conjunctions,
  // particles, pronouns, short adverbs and numerals ("в", "на", "не", "я",
  // "мы", "уже", "три", "был"...). This is the usual typesetters' rule.
  "[А-Яа-яЁё]{1,3}",
  // The same idea for English: articles, prepositions, conjunctions.
  "a", "an", "the", "of", "to", "in", "on", "at", "by", "for", "and", "or",
  "I", "is", "as", "if", "it", "we", "so", "my", "up",
].join("|");

const shortWord = new RegExp(`(?<![${L}])(${SHORT_WORDS}) `, "gi");
const dash = / —(?=[ \n]|$)/g;
const numberThenWord = new RegExp(`(\\d%?) (?=[${L}])`, "g");
const hyphenated = new RegExp(`(?<=[${L}])-(?=[${L}])`, "g");
const numberRange = /(?<=\d)–(?=\d)/g;
const pairs = /\b(App) (Store)\b|\b(Google) (Play)\b|\b(Mobile) (App)\b|\b(Barça) (Mobile)\b|\b(LU) (Cards)\b/g;

export function nb(text: string): string {
  return text
    .replace(dash, `${NBSP}—`)
    .replace(numberRange, `–${WJ}`)
    .replace(hyphenated, `-${WJ}`)
    .replace(numberThenWord, `$1${NBSP}`)
    .replace(pairs, (m) => m.replace(" ", NBSP))
    .replace(shortWord, `$1${NBSP}`);
}
