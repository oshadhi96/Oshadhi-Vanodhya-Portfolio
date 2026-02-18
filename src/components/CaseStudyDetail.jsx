import { ReadTimeToggles } from "./case-study/ReadTimeToggles";
import { Footer } from "./Footer";

const SECTIONS = [
  { id: "summary", label: "Summary", duration: "2 min" },
  { id: "full-story", label: "Full Story", duration: "5 min" },
  { id: "deep-dive", label: "Deep Dive", duration: "Technical" },
];

export function CaseStudyDetail() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300">
      {/* Hero */}
      <header className="pt-32 pb-20 px-4 container mx-auto text-center">
        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-violet-400 bg-violet-950/30 border border-violet-500/20 rounded-full">
            Case Study
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Construction ERP Transformation
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Modernizing a legacy construction management platform for better usability in the field.
        </p>
      </header>

      {/* Sticky Navigation */}
      <ReadTimeToggles sections={SECTIONS} />

      <main className="container mx-auto px-4 max-w-3xl pb-32 space-y-32">
        {/* 2 Minute Summary */}
        <section id="summary" className="scroll-mt-32">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-serif text-white mb-8 border-l-4 border-violet-500 pl-6">
              The 2-Minute Summary
            </h2>
            <p className="text-xl leading-relaxed text-white font-light mb-8">
              We redesigned the core field reporting workflow for BuildCo, reducing the time to submit a daily report from <strong className="text-violet-400">45 minutes to 8 minutes</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">-78%</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">Time on Task</div>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">4.8/5</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">Field Adoption Score</div>
                </div>
            </div>

            <p>
              The solution involved a complete shift from tabular data entry to a visual, map-based interface that works offline on iPads. This aligned with the mental model of site supervisors who think in terms of "locations" rather than "list items".
            </p>
          </div>
        </section>

        {/* 5 Minute Full Story */}
        <section id="full-story" className="scroll-mt-32">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-serif text-white mb-8 border-l-4 border-blue-500 pl-6">
              The Full Story
            </h2>
            
            <h3 className="text-xl font-bold text-white mt-12 mb-4">The Challenge</h3>
            <p>
              BuildCo's legacy ERP was powerful but built for desktop. Site supervisors were reverting to pen and paper because the software was too cumbersome to use while walking a site. This caused data delays, accuracy issues, and a disconnect between the field and HQ.
            </p>
            
            <h3 className="text-xl font-bold text-white mt-12 mb-4">Discovery</h3>
            <p>
               I spent 3 days on construction sites in Austin and Denver, shadowing supervisors. I observed them carrying blueprints, taking photos with their phones, and then spending hours at the end of the day transcribing these into the ERP.
            </p>
            
            <div className="my-12 p-8 bg-indigo-900/20 rounded-2xl border border-indigo-500/20 italic text-indigo-200 text-center">
                "I just want to point at the map and say 'fix this here'. Instead I have to fill out a 40-field form."
                <br />
                <span className="not-italic text-sm text-indigo-400 mt-4 block">— Site Superintendent</span>
            </div>

            <h3 className="text-xl font-bold text-white mt-12 mb-4">The Solution</h3>
            <p>
              We moved the core "Daily Log" feature to a mobile-first, offline-capable PWA. The interface centers around the site plan. Users tap a room to log an issue.
            </p>
          </div>
        </section>

        {/* Deep Dive */}
        <section id="deep-dive" className="scroll-mt-32">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-serif text-white mb-8 border-l-4 border-fuchsia-500 pl-6">
              Deep Dive: Technical & Process
            </h2>
            
            <h3 className="text-xl font-bold text-white mt-12 mb-4">Offline First Architecture</h3>
            <p>
                Connectivity on construction sites is notoriously spotty. We utilized IndexedDB for local storage and a custom conflict resolution strategy for when the device comes back online.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
                <li><strong>Optimistic UI:</strong> Actions feel instant.</li>
                <li><strong>Background Sync:</strong> Service workers handle the upload queue.</li>
                <li><strong>Conflict Resolution:</strong> "Last write wins" for simple fields, manual merge for text logs.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-12 mb-4">Design System Adaptation</h3>
            <p>
                We had to adapt the "Deep Ocean" enterprise design system for high-glare outdoor environments. This meant introducing a "High Contrast Mode" that automatically triggers based on ambient light sensors.
            </p>
            
            <div className="mt-12 p-6 bg-slate-900 border border-white/10 rounded-lg">
                <code className="text-sm text-pink-400 font-mono">
                    @media (prefers-contrast: more) &#123;<br/>
                    &nbsp;&nbsp;--primary: #000000;<br/>
                    &nbsp;&nbsp;--background: #FFFFFF;<br/>
                    &#125;
                </code>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
