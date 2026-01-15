import fs from "fs";
import path from "path";
import { marked } from "marked";
import Link from "next/link";
import { ArrowLeft, Calendar, Mail, Globe, Shield, Scale } from "lucide-react";
import * as motion from "framer-motion/client";

// Define strict types for our extracted data
interface PrivacyData {
  title: string;
  lastUpdated: string;
  owner: string;
  contactEmail: string;
  website: string;
  contentHtml: string;
  toc: { id: string; title: string }[];
}

/**
 * Parses the raw markdown to extract metadata and generate a clean HTML body.
 */
async function getPrivacyData(): Promise<PrivacyData> {
  const filePath = path.join(
    process.cwd(),
    "content",
    "polityka-prywatnosci.md"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Split metadata (before first ---) and content (after)
  // We assume the file is structured with metadata at the top followed by "---"
  const parts = fileContent.split("---");
  // If parsing fails (no ---), treat whole file as content
  const metaSection = parts.length > 1 ? parts[0] : "";
  const contentParts = parts.length > 1 ? parts.slice(1) : parts;
  const rawContent = contentParts.join("---");

  // Manual Parsing of the simple metadata header used in the markdown
  // Expected format:
  // # **Title**
  // **Label:** Value
  const titleMatch = metaSection.match(/# \*\*(.*?)\*\*/);
  const updatedMatch = metaSection.match(/Ostatnia aktualizacja:\*\*\s*(.*)/);
  const ownerMatch = metaSection.match(/Właściciel strony:\*\*\s*(.*)/);
  const siteMatch = metaSection.match(/Adres strony:\*\*\s*\[(.*?)\]/);
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
  // Look for email in the whole file if not in top metadata, though usually it is at top
  const emailMatch = fileContent.match(emailRegex);

  // Generate Table of Contents from H2 headers
  const toc: { id: string; title: string }[] = [];
  const renderer = new marked.Renderer();

  // Override heading renderer to add IDs for scrolling
  renderer.heading = ({ text, depth }) => {
    if (depth === 2) {
      // Remove generic bold tags for the ID but keep text clean
      // We strip both markdown syntax (** or __) and HTML tags (<strong>)
      const cleanText = text
        .replace(/<\/?strong>/g, "")
        .replace(/\*\*/g, "")
        .replace(/__/g, "")
        .trim();

      const id = cleanText
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      toc.push({ id, title: cleanText }); // Use clean text for TOC

      // Use cleanText for display as well to avoid "My **Header**" looking like raw md
      // Added font-extrabold, mt-16 (reduced from 24), mb-8 for spacing and weight
      return `<h2 id="${id}" class="scroll-mt-32 relative group font-extrabold mb-8 mt-16 text-foreground">
        <span class="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-primary-color dark:text-brand">#</span>
        ${cleanText}
      </h2>`;
    }
    return `<h${depth}>${text}</h${depth}>`;
  };

  // Configure marked
  const html = await marked(rawContent, { renderer });

  return {
    title: titleMatch ? titleMatch[1] : "Polityka Prywatności",
    lastUpdated: updatedMatch ? updatedMatch[1].trim() : "Nieznana data",
    owner: ownerMatch ? ownerMatch[1].trim() : "Nieznany właściciel",
    website: siteMatch ? siteMatch[1] : "kacperbartlomiejczak.pl",
    contactEmail: emailMatch
      ? emailMatch[1]
      : "kontakt@kacperbartlomiejczak.pl",
    contentHtml: html,
    toc,
  };
}

export default async function PrivacyPolicyPage() {
  const data = await getPrivacyData();

  return (
    <div className="min-h-screen bg-bg-color dark:bg-background pt-24 pb-20 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary-color dark:hover:text-brand transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do strony głównej
          </Link>
        </motion.div>

        {/* Hero / Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Title & Metadata Card */}
          <div className="col-span-1 lg:col-span-12 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left space-y-6 max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                {data.title}
              </h1>
              <p className="text-lg text-secondary max-w-2xl">
                Twoja prywatność jest dla mnie priorytetem. Poniżej znajdziesz
                szczegółowe informacje o tym, jak dbam o Twoje dane.
              </p>

              {/* Metadata Badges */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-zinc-800/50 border border-border backdrop-blur-sm text-sm shadow-sm">
                  <Calendar className="w-4 h-4 text-primary-color dark:text-brand" />
                  <span className="text-secondary-color dark:text-secondary">
                    Aktualizacja:{" "}
                    <strong className="text-foreground">
                      {data.lastUpdated}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-zinc-800/50 border border-border backdrop-blur-sm text-sm shadow-sm">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-secondary-color dark:text-secondary">
                    Właściciel:{" "}
                    <strong className="text-foreground">{data.owner}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-zinc-800/50 border border-border backdrop-blur-sm text-sm shadow-sm hover:bg-white dark:hover:bg-zinc-800 transition-colors">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <a
                    href={`https://${data.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overflow-hidden hover:underline text-secondary-color dark:text-secondary font-medium"
                  >
                    {data.website}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Table of Contents (Desktop) */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block lg:col-span-3 xl:col-span-3"
          >
            <div className="sticky top-32 p-6 rounded-2xl border border-border bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-primary-color dark:text-brand font-bold uppercase tracking-wider text-xs">
                <Scale className="w-4 h-4" />
                Spis treści
              </div>
              <nav className="space-y-1">
                {data.toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-2 px-3 text-sm text-secondary rounded-lg hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground transition-all truncate"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-secondary mb-2">Masz pytania?</p>
                <a
                  href={`mailto:${data.contactEmail}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-color dark:text-brand hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  Napisz do mnie
                </a>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 lg:col-span-9 xl:col-span-8 lg:pl-8 prose prose-lg dark:prose-invert prose-headings:scroll-mt-32 max-w-none 
            prose-headings:font-extrabold prose-h2:mt-16 prose-h2:mb-8 prose-p:leading-relaxed prose-a:text-primary-color dark:prose-a:text-brand prose-a:no-underline hover:prose-a:underline
            prose-li:marker:text-primary-color dark:prose-li:marker:text-brand prose-strong:text-foreground prose-blockquote:border-primary-color dark:prose-blockquote:border-brand"
          >
            <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />

            {/* Bottom Contact Section for Mobile */}
            <div className="lg:hidden mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-4">Masz pytania?</h3>
              <a
                href={`mailto:${data.contactEmail}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-color dark:bg-brand text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                Napisz na: {data.contactEmail}
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
