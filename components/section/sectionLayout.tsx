import SectionHeader from "./sectionHeader";

interface SectionLayoutProps {
  children?: React.ReactNode;
  title: string;
  id: string;
  center?: boolean;
  className?: string;
}

export default function SectionLayout({
  title,
  id,
  center,
  children,
  className = "",
}: SectionLayoutProps) {
  return (
    <section
      className={`w-full p-4 scroll-mt-32 md:scroll-mt-36 lg:scroll-mt-40 bg-bg-color dark:bg-background ${className}`}
      id={id}
    >
      <div
        className={`container mx-auto flex flex-col gap-4 ${
          center ? "items-center" : "items-start"
        }`}
      >
        <SectionHeader>{title}</SectionHeader>
        {children}
      </div>
    </section>
  );
}
