import HeaderTitle from "./headerTitle";
import HeaderImg from "./headerImg";

export default function Header() {
  return (
    <header className="flex justify-center items-center min-h-screen bg-bg-color dark:bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 p-2 my-8 lg:flex-row-reverse">
        <HeaderImg />
        <HeaderTitle />
      </div>
    </header>
  );
}
