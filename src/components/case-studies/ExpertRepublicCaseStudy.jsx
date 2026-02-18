import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Users, Layers, TrendingUp, Smartphone, LifeBuoy, Palette, Zap } from "lucide-react";
import { cn } from "../ui/utils";
import { 
  PlaceholderJourneyMap, 
  PlaceholderScreenFlow, 
  PlaceholderGeneric, 
  PlaceholderBeforeAfter,
  PlaceholderWorkshop 
} from "./AssetPlaceholders";

export function ExpertRepublicCaseStudy() {
  const metrics = [
    { value: "+300%", label: "Conversion Rate", description: "Increase in booking completion" },
    { value: "-50%", label: "Support Costs", description: "Reduction in onboarding-related tickets" },
    { value: "2x", label: "Expert Activation", description: "Doubled the rate of new expert verification" },
  ];

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500/30 pb-32">
      
      {/* 1. TOP: Impact Summary & Metrics */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/30 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Smartphone className="w-4 h-4" />
            <span>Mobile Marketplace</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Bridging the physical gap during a global crisis
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            We redesigned the core mobile experience to help non-tech-savvy professionals move their businesses online, resulting in a <span className="text-indigo-400 font-medium">300% increase</span> in conversion and significantly reduced support overhead.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-400 mb-2">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div className="text-sm text-slate-500">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-indigo-900/20">
           <img src="https://images.unsplash.com/photo-1596524430615-b46476ddff6e?auto=format&fit=crop&q=80&w=2070" alt="Expert Republic App" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
           <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
              <span className="text-sm font-mono text-slate-400 bg-black/50 px-3 py-1 rounded border border-white/10">Expert Republic Mobile App</span>
           </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* 2. CONTEXT & ROLE */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Layers className="w-6 h-6 text-indigo-500" />
              Context
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">The Pivot</h3>
                <p>When COVID-19 hit, fitness trainers, counselors, and tutors lost their income overnight. Expert Republic was their lifeline, but the platform wasn't ready for the massive influx of users.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">The Users</h3>
                <p><strong>Experts:</strong> Often used to face-to-face interactions, not digital tools.<br/><strong>Clients:</strong> Seeking trusted advice remotely.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-indigo-500" />
              My Role
            </h2>
             <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Responsibilities</h3>
                <p>End-to-end Product Design, User Research, Design System Lead.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Focus Areas</h3>
                <p>Onboarding Funnel, Empty States, Video Call Interface, Design System.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 STRATEGIC DECISIONS */}
        <section className="bg-slate-900/50 border-y border-white/5 py-12 -mx-4 sm:-mx-8 px-4 sm:px-8">
             <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-serif text-white mb-8">Strategic Decisions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-indigo-400 font-medium">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Guidance over Flexibility</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            We removed optional fields in the onboarding flow to reduce cognitive load. We prioritized getting experts "bookable" in under 5 minutes.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-indigo-400 font-medium">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Invest in Empty States</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            Instead of blank screens, we designed educational empty states that taught experts how to succeed on the platform (e.g., "Add a photo to get 2x more bookings").
                        </p>
                    </div>
                </div>
             </div>
        </section>

        {/* 3. PROCESS & STORY */}
        <section className="space-y-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif text-white mb-6">Process & Story</h2>
            <p className="text-lg text-slate-400">
                A rapid redesign sprint focused on removing friction and building trust between two strangers connected by a screen.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 space-y-20 pl-8 md:pl-12 ml-4">
            
            {/* Phase 1 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
                    <LifeBuoy className="w-3 h-3 text-indigo-500" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4">Funnel Analysis</h3>
                <p className="mb-8">
                    Data showed a 70% drop-off at the "Profile Details" step. Users were overwhelmed by asking for bank details before they even saw the app's value.
                </p>
                
                <PlaceholderJourneyMap caption="Drop-off Analysis Diagram" className="aspect-[2/1]" />
            </div>

            {/* Phase 2 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
                     <Smartphone className="w-3 h-3 text-indigo-500" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4">Onboarding Redesign</h3>
                <p className="mb-8">
                    We broke the onboarding into bite-sized steps with progress indicators. We moved banking setup to *after* the first booking request to lower the barrier to entry.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                     <PlaceholderScreenFlow caption="Step 1: Bio" className="aspect-[9/16]" />
                     <PlaceholderScreenFlow caption="Step 2: Skills" className="aspect-[9/16]" />
                     <PlaceholderScreenFlow caption="Step 3: Availability" className="aspect-[9/16]" />
                </div>
            </div>

            {/* Quote Insert */}
            <div className="relative py-8">
                 <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-xl text-slate-300">
                    "I was ready to give up on my coaching business. This app saved me. I set up my profile in 10 minutes and had my first client the next day."
                    <footer className="text-sm font-normal text-slate-500 mt-2 not-italic">— Sarah K., Fitness Coach</footer>
                 </blockquote>
            </div>

            {/* Phase 3 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
                    <Palette className="w-3 h-3 text-indigo-500" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4">Design System & Polish</h3>
                <p className="mb-8">
                    To ensure consistency across iOS and Android, I established the "Republic UI" design system. This also included a suite of custom illustrations for empty states to keep the tone friendly and encouraging.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <PlaceholderGeneric caption="Empty State Illustrations" className="aspect-[4/3]" />
                   <PlaceholderGeneric caption="Design System Components" className="aspect-[4/3]" />
                </div>
            </div>
          </div>
        </section>

        {/* 4. COLLABORATION DETAILS */}
        <section className="bg-slate-900/30 -mx-4 sm:-mx-8 p-8 sm:p-12 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
                <Users className="w-6 h-6 text-indigo-500" />
                Team Dynamics
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-white mb-2">Customer Support</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        I sat with the support team (virtually) to tag incoming tickets. We found that 40% of tickets were about "How do I get paid?". We added a clear "Payment Schedule" visual in the wallet tab, which killed those tickets almost instantly.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">Engineering</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Due to the urgency of the pandemic, we worked in 1-week sprints. I delivered "just-in-time" assets and used native components where possible to speed up development.
                    </p>
                </div>
            </div>
        </section>

        {/* 5. OUTCOMES & LEARNINGS */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
             <div>
                <h2 className="text-3xl font-serif text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-indigo-500" />
                    Impact
                </h2>
                <div className="prose prose-invert">
                    <p>
                        The business recovered from the initial shock and saw a <strong className="text-indigo-400">300% increase in conversion</strong> within 2 months of the redesign.
                    </p>
                    <p>
                        More importantly, we helped thousands of professionals maintain their livelihood during an incredibly difficult time.
                    </p>
                </div>
             </div>

             <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">Key Learning</h3>
                    <p className="text-slate-400">
                        <strong>Empathy in Design.</strong> designing for stressed users requires extra care. Clear language, reassuring confirmation messages, and forgiving error states were crucial.
                    </p>
                </div>
             </div>
        </section>

        {/* Footer Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-center">
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                </div>
                <span>Previous: IFS Sustainability</span>
             </a>
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span>Back to Home</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500">
                    <ArrowRight className="w-4 h-4" />
                </div>
             </a>
        </div>

      </main>
    </article>
  );
}
