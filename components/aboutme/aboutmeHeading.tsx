import Button from "../ui/button";
import { inter, firaCode } from "@/app/ui/fonts";
import classes from "@/components/ui/button.module.css";

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
      <a
        href="/KacperCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        aria-label="Sprawdź moje cv"
        className={`flex bg-cta px-4 py-2 rounded-xl font-bold text-white cursor-pointer ${inter.className} antialiased hover:bg-[#2b8883] transition-colors focus:bg-[#2b8883]  md:px-6 md:py-3 ${classes.buttonAnimation} text-lg lg:px-8 lg:py-3 xl:px-10 xl:text-xl dark:bg-accent dark:hover:bg-[#2cb68d]`}
      >
        Pobierz CV
      </a>
    </div>
  );
}
