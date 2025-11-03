import { inter } from "@/app/ui/fonts";

import Button from "../ui/button";

export default function HeaderTitle() {
  return (
    <div className="flex flex-col items-center p-2 text-center gap-2 lg:flex-1 lg:text-left lg:items-start">
      <h1
        className={`${inter.className} text-secondary-color font-extrabold antialiased text-base md:text-2xl lg:text-3xl xl:text-4xl dark:text-secondary`}
      >
        Tworzę interfejsy, z których chce się korzystać.
      </h1>
      <p className="text-sm/loose mb-4 md:text-lg/loose  xl:w-3/4 dark:text-white">
        Nazywam się Kacper Bartłomiejczak i jako Frontend Developer specjalizuję
        się w budowaniu szybkich, responsywnych i intuicyjnych aplikacji
        internetowych.
      </p>
      <Button href="#contact">Skontaktuj się</Button>
    </div>
  );
}
