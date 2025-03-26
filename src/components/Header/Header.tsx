import HeaderText from "./HeaderText";
import HeaderLinks from "./HeaderLinks";
import { useDispatch } from "react-redux";

import { openModal } from "../../redux/slices/modalSlice";
import logo from "../../assets/images/logo.jpg";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <section className="w-full min-h-full flex items-start z-20">
      <div className=" mx-auto md:px-8 h-full lg:px-12 lg:max-w-[1200px]">
        <div className="flex justify-center flex-col items-center h-full md:flex-row">
          <img
            src={logo}
            alt="A boy in suit with beautiful smile and with blond curly hairs"
            className="w-45 h-45 md:h-60 md:w-60 lg:h-80 lg:w-80 object-cover rounded-full mb-1 border-5 border-primary hover:shadow-lg hover:shadow-primary transition-shadow duration-300 md:mb-5"
          />
          <div className="w-full px-3">
            <HeaderText />
          </div>
        </div>
        <HeaderLinks onOpen={() => dispatch(openModal())} />
      </div>
    </section>
  );
}
