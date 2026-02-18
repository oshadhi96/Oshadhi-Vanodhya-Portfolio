import { motion } from "motion/react";
import { ArrowRight, Users, TrendingUp, Heart, Lightbulb, GraduationCap, Network } from "lucide-react";
import { cn } from "../ui/utils";
import { 
  PlaceholderGeneric,
  PlaceholderWorkshop 
} from "./AssetPlaceholders";

export function LeadershipCaseStudy() {
  const metrics = [
    { value: "3x", label: "Team Growth", description: "Scaled the design team from 2 to 6 designers" },
    { value: "95%", label: "Retention Rate", description: "Maintained zero churn during high-growth phase" },
    { value: "Ladders", label: "Career Growth", description: "Implemented competency matrices for all levels" },
  ];

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-yellow-500/30 pb-32">
      
      {/* 1. TOP: Leadership Header */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/30 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Design Leadership</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Growing teams and design culture with intention
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            Scaling a design team is about more than just hiring. It's about building the operational scaffolding, psychological safety, and growth paths that allow designers to do their best work.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-yellow-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-amber-200 mb-2">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div className="text-sm text-slate-500">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Hero Visual: Team Culture */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-white/10 shadow-2xl shadow-yellow-900/20">
           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" alt="Design Team Collaboration" className="w-full h-full object-cover opacity-80" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
           <div className="absolute bottom-8 left-8">
              <span className="text-sm font-mono text-slate-400 bg-black/50 px-3 py-1 rounded border border-white/10">Team Workshop 2023</span>
           </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* 2. CONTEXT & PHILOSOPHY */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Philosophy
            </h2>
            <p className="text-slate-400 leading-relaxed">
              <strong>People First, Pixels Second.</strong><br/>
              My leadership style is servant-based. My job isn't to design the screens; it's to clear the roadblocks, advocate for the user, and help my team grow.
            </p>
            <p className="text-slate-400">
               When the team feels safe and supported, the quality of the work naturally follows.
            </p>
          </div>
          <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 flex flex-col justify-center">
             <h3 className="text-lg font-bold text-white mb-4">The Challenge</h3>
             <p className="text-slate-300">
                Scaling from a "Service Bureau" (where PMs dictate solutions) to a "Strategic Partner" (where Design drives strategy) requires a cultural shift and rigorous operations.
             </p>
          </div>
        </section>

        {/* 3. INITIATIVES & RITUALS */}
        <section className="space-y-24">
            
            {/* Initiative 1: Design Ops */}
            <div className="space-y-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase">Operations</span>
                        <h2 className="text-3xl font-serif text-white">Design Ops & Onboarding</h2>
                    </div>
                    <p className="text-lg text-slate-400">
                        Chaos is the enemy of creativity. I established "The Design Handbook"—a living notion doc covering everything from file naming conventions to "How we critique."
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                     <PlaceholderGeneric caption="The Design Handbook (Notion)" className="aspect-video" />
                     <div className="bg-slate-900/50 p-6 rounded-xl border-l-2 border-yellow-500 flex flex-col justify-center">
                        <h4 className="text-white font-bold mb-4">The "First 30 Days"</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            New hires often feel lost. We created a structured 4-week onboarding plan ensuring every new designer ships a small feature to production in their first month.
                        </p>
                     </div>
                </div>
            </div>

             {/* Initiative 2: Mentorship & Growth */}
            <div className="space-y-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase">Growth</span>
                        <h2 className="text-3xl font-serif text-white">Career Ladders</h2>
                    </div>
                    <p className="text-lg text-slate-400">
                        Ambiguity in career progression leads to churn. I worked with HR to define clear competency matrices for Individual Contributors (IC) vs Managers, so everyone knew exactly what "Next Level" looked like.
                    </p>
                </div>
                <PlaceholderGeneric caption="Competency Matrix & Growth Tracks" className="aspect-[21/9]" />
            </div>

            {/* Initiative 3: Rituals */}
            <div className="space-y-8">
                 <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase">Culture</span>
                        <h2 className="text-3xl font-serif text-white">Rituals that stick</h2>
                    </div>
                    <p className="text-lg text-slate-400">
                        We replaced "Status Updates" with "Show & Tells" to focus on the work, not the timeline.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-900 p-6 rounded-xl border border-white/5">
                        <Heart className="w-8 h-8 text-yellow-500 mb-4" />
                        <h4 className="text-white font-bold mb-2">Design Critique</h4>
                        <p className="text-xs text-slate-400">Safe space for early feedback. "Critique the work, not the person."</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-white/5">
                         <GraduationCap className="w-8 h-8 text-yellow-500 mb-4" />
                        <h4 className="text-white font-bold mb-2">Design Lunch</h4>
                        <p className="text-xs text-slate-400">Weekly learning sessions (e.g. "Intro to Framer" or "Accessibility 101").</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-white/5">
                         <Network className="w-8 h-8 text-yellow-500 mb-4" />
                        <h4 className="text-white font-bold mb-2">PM Syncs</h4>
                        <p className="text-xs text-slate-400">Weekly triad syncs to align on strategy before execution.</p>
                    </div>
                </div>
            </div>

        </section>

        {/* 4. LEARNINGS */}
        <section className="bg-yellow-950/10 -mx-4 sm:-mx-8 p-8 sm:p-12 rounded-3xl border border-yellow-500/20">
            <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-500" />
                The Outcome
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                By investing in culture, we moved from being "Ticket Takers" to "Problem Solvers".
            </p>
            <p className="text-slate-400">
                Design is now involved in the roadmap planning process, and we've seen a measurable increase in product quality and team happiness.
            </p>
        </section>

        {/* Footer Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-center">
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                </div>
                <span>Previous: AI Ways of Working</span>
             </a>
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span>Back to Home</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500">
                    <ArrowRight className="w-4 h-4" />
                </div>
             </a>
        </div>

      </main>
    </article>
  );
}
