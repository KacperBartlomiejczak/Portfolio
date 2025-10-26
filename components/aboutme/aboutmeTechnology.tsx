import {
  ReactLogo,
  TailwindLogo,
  ScssLogo,
  NextjsLogo,
  TypescriptLogo,
} from "@/public/svg/logos";
import { inter } from "@/app/ui/fonts";

export default function AboutMeTechnology() {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center p-4 my-4">
      <h3 className={`${inter.className} font-bold text-base md:text-lg`}>
        Technologie
      </h3>
      <ul className="flex flex-row gap-4 flex-wrap">
        <li>
          <ReactLogo width="46" />
        </li>
        <li>
          <TailwindLogo width="46" />
        </li>
        <li>
          <NextjsLogo width="46" />
        </li>
        <li>
          <ScssLogo width="46" />
        </li>
        <li>
          <TypescriptLogo width="46" />
        </li>
      </ul>
    </div>
  );
}
