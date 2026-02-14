import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import LazySection from "@/components/ui/lazySection";

// Dynamic imports for below-the-fold sections
const Projects = dynamic(() => import("@/components/projects/projects"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  ),
});

const AboutMe = dynamic(() => import("@/components/aboutme/aboutme"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/contact/contact"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Header />
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <AboutMe />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
      <Footer />
    </>
  );
}
