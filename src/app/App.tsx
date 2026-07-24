import { LyvraNav } from "./components/LyvraNav";
import { LyvraHero } from "./components/LyvraHero";
import { LyvraIntro } from "./components/LyvraIntro";
import { LyvraCredibility } from "./components/LyvraCredibility";
import { LyvraTestimonials } from "./components/LyvraTestimonials";
import { LyvraStatistics } from "./components/LyvraStatistics";
import { LyvraPressure } from "./components/LyvraPressure";
import { LyvraServices } from "./components/LyvraServices";
import { LyvraOutcomes } from "./components/LyvraOutcomes";
import { LyvraMethodology } from "./components/LyvraMethodology";
import { LyvraAbout } from "./components/LyvraAbout";
import { LyvraLeadMagnet } from "./components/LyvraLeadMagnet";
import { LyvraContact } from "./components/LyvraContact";
import { LyvraFooter } from "./components/LyvraFooter";
import { LyvraScrollReveal } from "./components/LyvraScrollReveal";

export default function App() {
  return (
    <>
      <LyvraScrollReveal />
      <LyvraNav />
      <LyvraHero />
      <LyvraIntro />
      <LyvraStatistics />
      <LyvraPressure />
      <LyvraMethodology />
      <LyvraCredibility />
      <LyvraTestimonials />
      <LyvraServices />
      <LyvraOutcomes />
      <LyvraAbout />
      <LyvraLeadMagnet />
      <LyvraContact />
      <LyvraFooter />
    </>
  );
}
