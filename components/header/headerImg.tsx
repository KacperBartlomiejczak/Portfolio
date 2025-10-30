import Image from "next/image";
export default function HeaderImg() {
  return (
    <figure className="relative  w-52 h-52 z-0 md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] rounded-full hover:ring-2 ring-primary-color ring-offset-4 transition-all duration-300 focus:ring-2">
      <Image
        src={"/headerImg.jpg"}
        fill
        alt="Man in suit"
        className="rounded-full object-cover object-center "
        sizes="(max-width: 768px) 208px, (max-width: 1024px) 250px, (max-width: 1280px) 350px, 450px"
        loading="eager"
      />
    </figure>
  );
}
