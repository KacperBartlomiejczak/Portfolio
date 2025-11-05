import Link from "next/link";
import Image from "next/image";
import { inter } from "./ui/fonts";

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-bg-color dark:bg-background flex justify-center items-center flex-col">
      <div className="container flex flex-col justify-center items-center  gap-4">
        <div className="relative w-64 h-64">
          <Image
            src="/404Img.webp"
            fill
            alt="sad cat"
            className="object-cover object-center rounded-full"
          />
        </div>
        <div>
          <h1 className={`${inter.className} font-bold text-center`}>
            Oops! Nie znaleźliśmy twojej strony
          </h1>
          <p className="text-center px-2 mt-2">
            Przepraszam, ale ta strona nie istnieje
          </p>
        </div>
        <Link
          href="/"
          className={`px-4 py-2 bg-primary-color text-white ${inter.className} rounded-xl hover:bg-accent transition-colors dark:bg-brand dark:hover:bg-accent`}
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}
