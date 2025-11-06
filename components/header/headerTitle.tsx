import { inter, firaCode } from "@/app/ui/fonts";

import Button from "../ui/button";

export default function HeaderTitle() {
  return (
    <div className="flex flex-col items-center p-2 text-center gap-2 lg:flex-1 lg:text-left lg:items-start">
      <h1
        className={`${inter.className} text-secondary-color font-extrabold antialiased text-base md:text-2xl lg:text-3xl xl:text-4xl dark:text-secondary`}
      >
        Twoja nowa strona będzie szybka, czytelna i prosta w codziennym użyciu.
      </h1>
      <p
        className={`${firaCode.className} text-sm/loose mb-4 md:text-lg/loose  xl:w-3/4 dark:text-white`}
      >
        Jestem Kacper, Frontend Developer — robię strony i aplikacje, które
        szybko się ładują, dobrze wyglądają na każdym urządzeniu i są łatwe w
        użyciu.
      </p>
      <Button href="#contact" ariaLabel="Przejdź do sekcji kontaktowej">
        Skontaktuj się
      </Button>
    </div>
  );
}
