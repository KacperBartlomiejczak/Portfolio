import SectionHeader from "./sectionHeader";

interface SectionLayoutProps {
  children?: React.ReactNode;
  title: string;
  id: string;
}

export default function SectionLayout({
  title,
  id,
  children,
}: SectionLayoutProps) {
  return (
    <section className="flex items-center p-4 justify-center scroll-mt-32 md:scroll-mt-36 lg:scroll-mt-40" id={id}>
      <div className="container flex flex-col items-start gap-4">
        <SectionHeader>{title}</SectionHeader>
        {children}
      </div>
    </section>
  );
}
