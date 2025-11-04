import Button from "../ui/button";
import { inter } from "@/app/ui/fonts";
export default function AboutMeHeading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-6 p-2 lg:items-start lg:max-w-[700px] flex-2">
      <h2
        className={`${inter.className} text-secondary-color font-bold text-xl text-center md:text-2xl lg:text-left dark:text-secondary`}
      >
        Pasja do kodu, obsesja na punkcie detali.
      </h2>
      <p className="text-sm/loose text-center mb-4 px-8 md:text-base/loose lg:text-left md:px-0">
        Mam 21 lat i pochodzę z Polski. Dla mnie kodowanie to nie tylko praca,
        ale pasja, która napędza mnie do tworzenia coraz lepszych rozwiązań. Mój
        wiek to gwarancja świeżego spojrzenia i biegłości w najnowszych
        technologiach.
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
