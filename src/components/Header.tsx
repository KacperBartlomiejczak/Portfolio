import HeaderText from "./HeaderText";
import HeaderLinks from "./HeaderLinks";

export default function Header() {
  return (
    <section className="w-full min-h-full flex items-start z-20">
      <div className="container mx-auto mt-4 md:mt-2 md:px-8 py-2 md:py-0">
        <div className="flex justify-center flex-col items-center h-full md:flex-row">
          <img
            src="public/logo.jpg"
            alt="A boy in suit with beautiful smile and with blond curly hairs"
            className="w-70 h-70 object-cover rounded-full mb-5 border-5 border-primary hover:shadow-lg hover:shadow-primary transition-shadow duration-300"
          />
          <div className="w-full">
            <HeaderText />
          </div>
        </div>
        <HeaderLinks />
      </div>
    </section>
  );
}
