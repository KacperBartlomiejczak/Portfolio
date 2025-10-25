import Nav from "@/components/nav/nav";
import Header from "@/components/header/header";
import Projects from "@/components/projects/projects";
import AboutMe from "@/components/aboutme/aboutme";
export default function Home() {
  return (
    <main className="w-screen relative">
      <Nav />
      <Header />
      <Projects />
      <AboutMe />
    </main>
  );
}
