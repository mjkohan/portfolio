import Header from "@/components/header";
import HeroSection from "@/components/hero/HeroSection"
export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        <Header/>
        <main className="flex max-w-7xl w-full flex-col mt-8 sm:mt-10 lg:mt-12 gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection />

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
