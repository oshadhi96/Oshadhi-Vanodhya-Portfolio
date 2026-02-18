import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Users, Layers, TrendingUp } from "lucide-react";
import { cn } from "../ui/utils";
import { 
  PlaceholderJourneyMap, 
  PlaceholderScreenFlow, 
  PlaceholderGeneric, 
  PlaceholderBeforeAfter 
} from "../case-studies/AssetPlaceholders";

// Types for the template data
export interface Metric {
  value: string;
  label: string;
  description?: string;
}

export interface CaseStudyBaseProps {
  title?: string;
  summary?: string;
  metrics?: Metric[];
  heroImage?: string;
}

const DEFAULT_METRICS = [
  { value: "45%", label: "Increase in Retention", description: "Day 30 retention rates post-launch" },
  { value: "2.5x", label: "Faster Workflow", description: "Reduced average task time from 12m to 5m" },
  { value: "$1.2M", label: "Annual Savings", description: "Projected operational cost reduction" },
];

export function CaseStudyBase({
  title = "Project Title Placeholder",
  summary = "A high-level impact summary goes here. Following the Pyramid Principle, start with the conclusion: We solved [Problem] for [User] by creating [Solution], resulting in [Impact].",
  metrics = DEFAULT_METRICS,
  heroImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
}: CaseStudyBaseProps) {
  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-violet-500/30 pb-32">
      
      {/* 1. TOP: Impact Summary & Metrics */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span>Case Study</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            {summary}
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
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-violet-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-400 mb-2">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div className="text-sm text-slate-500">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-violet-900/20">
           <img src={heroImage} alt="Project Hero" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* 2. CONTEXT & ROLE */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Layers className="w-6 h-6 text-violet-500" />
              Context
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">The Product</h3>
                <p>Describe the product and its maturity stage (e.g., 0-1, scaling, redesign).</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Users</h3>
                <p>Primary personas and their core needs/pain points.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Constraints</h3>
                <p>Technical limitations, tight deadlines, or regulatory requirements.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-violet-500" />
              My Role
            </h2>
             <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Responsibilities</h3>
                <p>Lead Designer, UX Research, Prototyping, Design Systems.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Team Setup</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>1 PM</li>
                  <li>4 Engineers (FE/BE)</li>
                  <li>1 Data Scientist</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Collaboration</h3>
                <p>Worked closely with engineering on feasibility and PM on scope definition.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROCESS & KEY DECISIONS */}
        <section className="space-y-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif text-white mb-6">Process & Key Decisions</h2>
            <p className="text-lg text-slate-400">
                A timeline of the key moves we made to de-risk the project and validate our hypothesis.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 space-y-20 pl-8 md:pl-12 ml-4">
            {/* Phase 1 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500" />
                <h3 className="text-xl font-bold text-white mb-4">Discovery & Definition</h3>
                <p className="mb-8">
                    We started by interviewing 10 stakeholders to align on the problem statement.
                    <br/><span className="italic text-slate-500">Key Decision: Narrowed scope to mobile-first based on field research.</span>
                </p>
                
                <PlaceholderJourneyMap className="aspect-[2/1]" />
            </div>

            {/* Phase 2 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500" />
                <h3 className="text-xl font-bold text-white mb-4">Exploration & Wireframing</h3>
                <p className="mb-8">
                    Explored 3 distinct directions before converging on the "Card-based" UI.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PlaceholderScreenFlow caption="Exploration A" className="aspect-[4/3]" />
                    <PlaceholderScreenFlow caption="Exploration B" className="aspect-[4/3]" />
                </div>
            </div>

            {/* Quote Insert */}
            <div className="relative py-8">
                 <blockquote className="border-l-4 border-violet-500 pl-6 italic text-xl text-slate-300">
                    "This new workflow saves me about 2 hours every Friday. I can actually go home on time."
                    <footer className="text-sm font-normal text-slate-500 mt-2 not-italic">— Senior Field Technician</footer>
                 </blockquote>
            </div>

            {/* Phase 3 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500" />
                <h3 className="text-xl font-bold text-white mb-4">Final Design & Handoff</h3>
                <p className="mb-8">
                    High-fidelity prototyping in Figma and component documentation for the dev team.
                </p>

                <PlaceholderGeneric caption="High Fidelity UI Composition" className="aspect-video shadow-2xl" />
            </div>
          </div>
        </section>

        {/* 4. COLLABORATION DETAILS */}
        <section className="bg-slate-900/30 -mx-4 sm:-mx-8 p-8 sm:p-12 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
                <Users className="w-6 h-6 text-violet-500" />
                Cross-Functional Collaboration
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h4 className="font-bold text-white mb-2">With Product Management</h4>
                    <p className="text-sm text-slate-400">
                        Co-created the roadmap and defined MVP requirements. Weekly syncs to prioritize backlog items based on user feedback.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">With Engineering</h4>
                    <p className="text-sm text-slate-400">
                        Established a "Design QA" step in the CI/CD pipeline. Regular desk checks to ensure implementation matched the design intent.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">With Data Science</h4>
                    <p className="text-sm text-slate-400">
                        Defined tracking events for the new features. Analyzed funnel drop-off points to inform iteration 2.
                    </p>
                </div>
            </div>
        </section>

        {/* 5. OUTCOMES & LEARNINGS */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
             <div>
                <h2 className="text-3xl font-serif text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-emerald-500" />
                    Outcomes
                </h2>
                <div className="prose prose-invert">
                    <p>
                        The launch was a success, achieving <strong className="text-emerald-400">120% of our adoption target</strong> in the first month.
                    </p>
                    <p>
                        Beyond the metrics, the qualitative feedback highlighted a significant reduction in cognitive load for users.
                    </p>
                </div>
             </div>

             <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">What I learned</h3>
                    <p className="text-slate-400">
                        The importance of involving engineering early in the "Discovery" phase to understand technical feasibility of offline-mode features.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">What I'd do next</h3>
                    <p className="text-slate-400">
                        I would explore adding voice-to-text capabilities for the reporting feature to further reduce input time.
                    </p>
                </div>
             </div>
        </section>

        {/* Footer Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-center">
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-violet-500">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                </div>
                <span>Previous Project</span>
             </a>
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span>Next Project</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-violet-500">
                    <ArrowRight className="w-4 h-4" />
                </div>
             </a>
        </div>

      </main>
    </article>
  );
}
