import { Link } from "@/i18n/routing";
import Image from "next/image";
import { inter } from "@/app/ui/fonts";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

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
          <h1
            className={`${inter.className} font-bold text-center dark:text-white`}
          >
            {t("title")}
          </h1>
          <p className="text-center px-2 mt-2 dark:text-gray-300">
            {t("description")}
          </p>
        </div>
        <Link
          href="/"
          className={`px-4 py-2 bg-primary-color text-white ${inter.className} rounded-xl hover:bg-accent transition-colors dark:bg-brand dark:hover:bg-accent`}
        >
          {t("button")}
        </Link>
      </div>
    </div>
  );
}
