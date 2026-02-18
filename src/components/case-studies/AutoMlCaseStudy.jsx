import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Users, Layers, TrendingUp, Sparkles, Brain, Scale, GitBranch, MessageSquare } from "lucide-react";
import { cn } from "../ui/utils";
import { Link } from "react-router-dom";
import { CaseStudySnippet } from "./CaseStudySnippet";
import { 
  PlaceholderJourneyMap, 
  PlaceholderScreenFlow, 
  PlaceholderGeneric, 
  PlaceholderBeforeAfter,
  PlaceholderWorkshop 
} from "./AssetPlaceholders";

export function AutoMlCaseStudy() {
  const features = [
    { value: "Research", label: "Evidence-based", description: "Built on ACM/arXiv findings" },
    { value: "Conceptual", label: "Project Type", description: "Self-initiated redesign" },
    { value: "Fairness", label: "Core Focus", description: "Human-in-the-loop AI" },
  ];

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500/30 pb-32">
      
      {/* 1. TOP: Impact Summary & Metrics */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/30 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AutoML Platform Redesign</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Opening the black box of automated machine learning
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            A conceptual redesign to help cross-functional teams build models with confidence, clarity, and fairness—without needing a PhD in data science.
          </p>
        </div>

        {/* Key Attributes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-violet-400 mb-2">
                {feature.value}
              </div>
              <div className="text-white font-medium mb-2">{feature.label}</div>
              <div className="text-sm text-slate-500">{feature.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-indigo-900/20">
           <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXNoYm9hcmQlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhcmslMjBVSXxlbnwxfHx8fDE3NjU4MzAyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="AutoML Dashboard Concept" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
           <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
              <span className="text-sm font-mono text-slate-400 bg-black/50 px-3 py-1 rounded border border-white/10">Conceptual Prototype</span>
           </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-32">
        
        <CaseStudySnippet 
          goal="Help product teams configure and ship ML models without getting lost in jargon."
          constraints="Existing tools were opaque and built for experts, reducing trust and adoption."
          keyMove="Redesigned the workflow around 'Conversational Configuration' and fairness checkpoints."
          outcome="A transparent, learnable platform that progressive discloses complexity."
          color="indigo"
        />

        {/* 2. CONTEXT & ROLE */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Layers className="w-6 h-6 text-indigo-500" />
              The Challenge
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">The "Cockpit" Problem</h3>
                <p>Most AutoML tools expose a daunting array of knobs and charts. For product managers and analysts, using them feels like stepping into a pilot's cockpit without flight training.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Research Insight</h3>
                <p>Academic research shows that users struggle to build mental models of what AutoML is actually doing. Without "explainability" and "fairness" features, teams hesitate to trust the results.</p>
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
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Project Type</h3>
                <p>Self-initiated conceptual project.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Activities</h3>
                <p>Literature Review (ACM, arXiv), Information Architecture, UI Design, Prototyping.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DESIGN SOLUTIONS */}
        <section className="space-y-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif text-white mb-6">Designing for Trust</h2>
            <p className="text-lg text-slate-400">
                How might we make AutoML feel like a conversation with a knowledgeable partner rather than a black box?
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 space-y-24 pl-8 md:pl-12 ml-4">
            
            {/* Feature 1 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
                    <GitBranch className="w-3 h-3 text-indigo-500" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4">1. The Experiment Timeline</h3>
                <p className="mb-8">
                    Instead of disjointed tabs, I designed a linear "Experiment Timeline". Each step—Data, Goal, Strategy, Train, Compare—has a clear definition and a single primary action. Users can always visualize where they are in the ML lifecycle.
                </p>
                <img 
                    src="https://images.unsplash.com/photo-1764663908313-4f0abebc4761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lbGluZSUyMHdvcmtmbG93JTIwdXNlciUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjU4MzAyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Timeline UI Concept" 
                    className="rounded-xl border border-white/10 w-full" 
                />
            </div>

            {/* Feature 2 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
                     <MessageSquare className="w-3 h-3 text-indigo-500" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4">2. Guided Path & Conversational UI</h3>
                <p className="mb-8">
                    For first-time users, the system enters a "Guided Mode". It asks simple questions in natural language (e.g., "What do you want to predict?") and translates the answers into technical configurations, abstracting away the initial complexity.
                </p>
                <img 
                    src="https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXJzYXRpb25hbCUyMGludGVyZmFjZSUyMGNoYXQlMjBib3QlMjBVSXxlbnwxfHx8fDE3NjU4MzAyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Conversational Setup UI" 
                    className="rounded-xl border border-white/10 w-full" 
                />
            </div>

            {/* Feature 3 & 4 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
                    <Scale className="w-3 h-3 text-indigo-500" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4">3. Transparency & Fairness Checkpoints</h3>
                <p className="mb-8">
                    To combat the "black box" effect, a side panel explains what the model is doing in real-time. Before deployment, a mandatory "Fairness Checkpoint" prompts users to inspect performance across different user subgroups, ensuring ethical AI practices.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <PlaceholderGeneric caption="Fairness Audit Panel" className="aspect-square" />
                   <PlaceholderScreenFlow caption="Model Comparison Table" className="aspect-square" />
                </div>
            </div>
          </div>
        </section>

        {/* 4. OUTCOMES */}
        <section className="bg-slate-900/30 -mx-4 sm:-mx-8 p-8 sm:p-12 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-indigo-500" />
                Design Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h4 className="font-bold text-white mb-2">Learnability</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Reduces cognitive load by turning a wall of options into a step-by-step narrative path.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">Transparency</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Explains "why" a model was chosen, not just "what" the result is, building trust with stakeholders.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">Responsibility</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Forces critical conversations about bias and fairness before a model can technically go live.
                    </p>
                </div>
            </div>
        </section>

        {/* 5. REFLECTION */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
             <div>
                <h2 className="text-3xl font-serif text-white mb-6">
                    Reflection
                </h2>
                <div className="prose prose-invert">
                    <p>
                        Working on this concept reinforced that <strong>AI tools are for people</strong>. The math might be complex, but the decision-making interface needs to be human-sized.
                    </p>
                    <p>
                        If I were to take this further, I would prototype the "Conversational Setup" with real data scientists to see if the abstractions hold up against real-world edge cases.
                    </p>
                </div>
             </div>
        </section>

        {/* Footer Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-center">
             <Link to="/work/expert-republic" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                </div>
                <span>Previous: Expert Republic</span>
             </Link>
             <Link to="/#work" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span>View All Projects</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500">
                    <ArrowRight className="w-4 h-4" />
                </div>
             </Link>
        </div>

      </main>
    </article>
  );
}
