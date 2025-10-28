import Nav from "@/components/nav/nav";
import Header from "@/components/header/header";
import Projects from "@/components/projects/projects";
import AboutMe from "@/components/aboutme/aboutme";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
export default function Home() {
  return (
    <main className="w-screen relative">
      <Nav />
      <Header />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}
