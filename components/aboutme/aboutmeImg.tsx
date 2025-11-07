import About from "/aboutmeImg.jpg";

import Image from "next/image";

export default function AboutMeImg() {
  return (
    <div className="relative block w-52 h-52 transition-transform duration-300 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-90 xl:w-90">
      <Image
        src="/aboutmeImg.webp"
        alt="Chłopak z koniem na kiju"
        fill
        className="rounded-full object-cover object-center ring-offset-3 transition-all duration-300 hover:ring-2 focus:ring-2 ring-primary-color dark:ring-offset-background"
        sizes="(max-width: 768px) 208px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 360px"
        
      />
    </div>
  );
}
