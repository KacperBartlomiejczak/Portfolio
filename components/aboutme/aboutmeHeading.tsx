import Button from "../ui/button";
import { inter, firaCode } from "@/app/ui/fonts";

export default function AboutMeHeading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-6 p-2 lg:items-start lg:max-w-[700px] flex-2">
      <h2
        className={`${inter.className} text-secondary-color font-bold text-xl text-center md:text-2xl lg:text-left dark:text-secondary`}
      >
        Pasja do kodu, obsesja na punkcie detali.
      </h2>
      <p
        className={`${firaCode.className} text-sm/loose text-center mb-4 px-2 md:text-base/loose lg:text-left md:px-0`}
      >
        Cześć, tu Kacper — frontend developer z Torunia. Buduję szybkie i
        dostępne strony w React/Next.js, dbając o SEO, wydajność i czysty kod.
        Na co dzień studiuję informatykę na UMK, a po godzinach testuję pomysły
        na hackathonach i w podróży (lubię kodować tam, gdzie kawiarnia ma dobry
        internet i jeszcze lepszą kawę). Lubię projekty, w których design
        spotyka się z użytecznością: czytelna nawigacja, porządny Lighthouse i
        realny wpływ na biznes.
      </p>
      <Button
        href="/KacperCV.pdf"
        variant="cta"
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Sprawdź moje cv"
      >
        Pobierz CV
      </Button>
    </div>
  );
}
