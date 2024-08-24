import { AlbumSection } from "./components/album-section";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { LegendSection } from "./components/legend-section";
import { PageLoader } from "./components/loader";
import { PersonalLifeSection } from "./components/personal-life-section";
import { SpiritSection } from "./components/spirit-section";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection />
        <LegendSection />
        <AlbumSection />
        <PersonalLifeSection />
        <SpiritSection />
      </main>
      <Footer />
      <PageLoader />
    </>
  );
}
