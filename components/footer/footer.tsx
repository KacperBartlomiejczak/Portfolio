import { inter } from "@/app/ui/fonts";
export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-primary-color p-4 text-white dark:bg-brand">
      <p
        className={`${inter.className} text-center text-sm md:text-sm lg:text-base`}
      >
        © 2025 Kacper Bartłomiejczak. Zaprojektowano i zakodowano z dbałością o
        każdy detal.
      </p>
    </footer>
  );
}
