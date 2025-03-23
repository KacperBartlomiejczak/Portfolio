export default function HeaderText() {
  return (
    <div className="p-2 flex flex-col justify-center items-center text-white text-balance md:ml-6 md:items-start">
      <h1 className="text-lg font-bold mb-1  text-wrap text-[#CE4A4B] text-center md:text-2xl md:text-left md:text-wrap md:mb-2 lg:text-3xl">
        Hi, I am Kacper and I am{" "}
        <span className="text-[#CE4A4B]">front-end developer</span>
      </h1>
      <p className="text-sm text-wrap text-center px-2 md:text-left  md:px-0 md:text-wrap md:text-lg/relaxed ">
        I am a self-taught front-end developer with a passion for creating
        beautiful and functional websites. I am constantly learning new
        technologies and improving my skills.
      </p>
    </div>
  );
}
