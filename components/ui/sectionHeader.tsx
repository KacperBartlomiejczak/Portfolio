import { inter } from "@/app/ui/fonts";

interface SectionHeader {
  children: React.ReactNode;
}

export default function SectionHeader({ children, ...props }: SectionHeader) {
  return (
    <h2
      className={`relative ${inter.className} font-bold antialiased text-lg md:text-xl lg:text-2xl text-secondary-color before:absolute before:w-full before:h-0.5 before:bg-primary-color before:bottom-[-0.2em] md:before:h-[3px] before:rounded-xl hover:text-primary-color focus:text-primary-color transition-colors `}
      {...props}
    >
      {children}
    </h2>
  );
}
