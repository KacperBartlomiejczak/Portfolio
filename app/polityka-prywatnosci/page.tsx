import fs from "fs";
import path from "path";
import { marked } from "marked";

export default async function Page() {
  const filePath = path.join(
    process.cwd(),
    "content",
    "polityka-prywatnosci.md"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const html: string = await marked(fileContent);

  // Dodaj klasy do mailto linków i usuń wcześniejsze modyfikacje nagłówków.
  // Jeśli <a> już ma class=... - dopisz tam nasze klasy, inaczej dodaj nowy atrybut class.
  const processedHtml = html.replace(
    /<a\s+([^>]*?)href=["']mailto:([^"']+)["']([^>]*)>/gi,
    (match, beforeHref = "", email = "", afterHref = "") => {
      const combined = `${beforeHref} ${afterHref}`.trim();

      // jeśli istnieje class="..."/class='...' w atrybutach, dopisz klasy
      const classAttrMatch = combined.match(/class=(["'])(.*?)\1/);
      if (classAttrMatch) {
        const quote = classAttrMatch[1];
        const existing = classAttrMatch[2];
        const newClass = `${existing} text-primary-color dark:text-brand`.trim();
        // zastąp istniejący class attr w oryginalnym match
        return match.replace(/class=(["'])(.*?)\1/, `class=${quote}${newClass}${quote}`);
      }

      // w przeciwnym wypadku dodaj nowy atrybut class na końcu tagu otwierającego <a ... >
      // zachowaj wszystkie inne atrybuty (beforeHref i afterHref)
      const attrs = `${beforeHref} href="mailto:${email}" ${afterHref}`.trim();
      return `<a ${attrs} class="text-primary-color dark:text-brand">`;
    }
  );

  // Add classes to h1 and h2: make them bold and a bit larger.
  // If tag already has class attribute, append our classes; otherwise add a new class attribute.
  const withHeadings = processedHtml
    .replace(/<h1([^>]*)>/gi, (match, attrs = "") => {
      if (/class=(['\"]).*?\1/.test(attrs)) {
        return match.replace(/class=(['\"])(.*?)\1/, (_m, q, existing) => {
          return `class=${q}${existing} font-bold text-3xl md:text-4xl mt-6${q}`;
        });
      }
      return `<h1${attrs} class="font-bold text-3xl md:text-4xl mt-6">`;
    })
    .replace(/<h2([^>]*)>/gi, (match, attrs = "") => {
      if (/class=(['\"]).*?\1/.test(attrs)) {
        return match.replace(/class=(['\"])(.*?)\1/, (_m, q, existing) => {
          return `class=${q}${existing} font-bold text-2xl md:text-3xl mt-5${q}`;
        });
      }
      return `<h2${attrs} class="font-bold text-2xl md:text-3xl mt-5">`;
    });

  return (
    <article className="prose prose-invert mx-auto p-6 max-w-4xl pt-24">
      <div className="container">
        {/* space-y-6 dodaje odstępy pomiędzy kolejnymi blokami (h1, h2, p itp.) */}
        <div className="space-y-6" dangerouslySetInnerHTML={{ __html: processedHtml }} />
      </div>
    </article>
  );
}
