import { Hero } from "./Hero";
import { ImpactMetrics } from "./ImpactMetrics";
import { HowIWork } from "./HowIWork";
import { WorkPreview } from "./WorkPreview";
import { SpeakingAndJournal } from "./SpeakingAndJournal";
import { Testimonials } from "./Testimonials";
import { ContactTeaser } from "./ContactTeaser";

export function Home() {
  return (
    <main>
      <Hero />
      <ImpactMetrics />
      <HowIWork />
      <WorkPreview />
      <SpeakingAndJournal />
      <Testimonials />
      <ContactTeaser />
    </main>
  );
}