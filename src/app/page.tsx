import Header from "@/components/header";
import HeroSection from "@/components/hero/HeroSection"
import { StatsSection } from "@/components/stats/StatsSection";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Header/>
        <main className="flex max-w-7xl w-full flex-col mt-8 sm:mt-10 lg:mt-12 gap-[32px] row-start-2 items-center sm:items-start">
          <HeroSection />
          <StatsSection/>
          <Experience/>
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
    </div>
  );
}
