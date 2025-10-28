import { inter } from "@/app/ui/fonts";
export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-primary-color p-4 text-white">
      <p
        className={`${inter.className} text-center text-sm md:text-base lg:text-lg`}
      >
        © 2025 Kacper Bartłomiejczak. Zaprojektowano i zakodowano z dbałością o
        każdy detal.
      </p>
    </footer>
  );
}
