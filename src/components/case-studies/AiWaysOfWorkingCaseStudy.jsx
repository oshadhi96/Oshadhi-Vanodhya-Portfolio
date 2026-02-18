import { motion } from "motion/react";
import { ArrowRight, Users, Scale, Zap, MessageSquare, BrainCircuit, HeartHandshake } from "lucide-react";
import { cn } from "../ui/utils";
import { 
  PlaceholderGeneric,
  PlaceholderWorkshop 
} from "./AssetPlaceholders";

export function AiWaysOfWorkingCaseStudy() {
  const impacts = [
    { value: "-30%", label: "Delivery Time", description: "Reduced friction between Design & Data Science" },
    { value: "100%", label: "Ethical Compliance", description: "Risk assessments integrated into Jira" },
    { value: "Triad", label: "Collaboration", description: "Established the Design-Eng-Data model" },
  ];

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-rose-500/30 pb-32">
      
      {/* 1. TOP: Methodology Header */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/30 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
            <HeartHandshake className="w-4 h-4" />
            <span>Methodology & Culture</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Improving ways of working in AI product teams
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            AI products require a new operating model. I help teams bridge the gap between deterministic design and probabilistic data, ensuring ethics and explainability are bake-in, not bolted-on.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-rose-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-pink-400 mb-2">
                {item.value}
              </div>
              <div className="text-white font-medium mb-2">{item.label}</div>
              <div className="text-sm text-slate-500">{item.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Hero Visual: The Triad */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-white/10 shadow-2xl shadow-rose-900/20 bg-slate-900 flex items-center justify-center">
            {/* Conceptual Abstract Graphic */}
            <div className="relative w-full max-w-lg aspect-video flex items-center justify-center">
                <div className="absolute top-0 text-center">
                    <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500 flex items-center justify-center mx-auto mb-2 text-rose-400"><Users /></div>
                    <span className="text-xs uppercase tracking-widest text-slate-400">Design</span>
                </div>
                <div className="absolute bottom-0 left-0 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center mx-auto mb-2 text-blue-400"><BrainCircuit /></div>
                    <span className="text-xs uppercase tracking-widest text-slate-400">Data Science</span>
                </div>
                 <div className="absolute bottom-0 right-0 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto mb-2 text-emerald-400"><Zap /></div>
                    <span className="text-xs uppercase tracking-widest text-slate-400">Engineering</span>
                </div>
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M50 20 L20 80 L80 80 Z" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
                 <div className="z-10 bg-slate-950 px-4 py-2 rounded-full border border-white/10 text-white text-sm font-semibold shadow-xl">
                    The Product Triad
                </div>
            </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* 2. CONTEXT: The Challenge */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Scale className="w-6 h-6 text-rose-500" />
              The AI Challenge
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Traditional software is <strong>Deterministic</strong> (Input A always = Output B).<br/>
              AI products are <strong>Probabilistic</strong> (Input A might = Output B, 80% of the time).
            </p>
            <p className="text-slate-400">
              This fundamental difference breaks standard agile workflows. Designers design "Happy Paths" that models can't guarantee, and Engineers build pipelines without knowing the final UX.
            </p>
          </div>
          <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 flex flex-col justify-center">
             <h3 className="text-lg font-bold text-white mb-4">The Solution</h3>
             <p className="text-slate-300">
                Shift from "Handoffs" to "Co-Creation". Establishing a shared vocabulary and rituals where failure modes are defined <em>before</em> pixel-perfect design begins.
             </p>
          </div>
        </section>

        {/* 3. FRAMEWORKS & RITUALS */}
        <section className="space-y-24">
            
            {/* Ritual 1: Model Cards */}
            <div className="space-y-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded bg-rose-500/20 text-rose-400 text-xs font-bold uppercase">Ritual</span>
                        <h2 className="text-3xl font-serif text-white">The "Model Card" Workshop</h2>
                    </div>
                    <p className="text-lg text-slate-400">
                        Before a single wireframe is drawn, the Triad meets to fill out a "Model Card". This document defines the model's intended use, limitations, and bias risks.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                     <PlaceholderWorkshop caption="Workshop: Defining Model Limitations" className="aspect-video" />
                     <div className="space-y-6">
                        <div className="bg-slate-900/50 p-6 rounded-xl border-l-2 border-rose-500">
                            <h4 className="text-white font-bold mb-2">Questions we ask:</h4>
                            <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                                <li>What data was this trained on?</li>
                                <li>Where will this model fail? (Edge cases)</li>
                                <li>Who might be excluded by this model?</li>
                            </ul>
                        </div>
                     </div>
                </div>
            </div>

             {/* Ritual 2: Real Data Prototyping */}
            <div className="space-y-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded bg-rose-500/20 text-rose-400 text-xs font-bold uppercase">Process</span>
                        <h2 className="text-3xl font-serif text-white">Designing with Real Data</h2>
                    </div>
                    <p className="text-lg text-slate-400">
                        Lorem Ipsum is dangerous in AI. We created a workflow where Data Scientists export "weird" but real data samples for Designers to use in Figma. This exposes UI breaks early.
                    </p>
                </div>
                <PlaceholderGeneric caption="Figma Plugin: Real Data Injection" className="aspect-[21/9]" />
            </div>

            {/* Ritual 3: Explainability Patterns */}
            <div className="space-y-8">
                 <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded bg-rose-500/20 text-rose-400 text-xs font-bold uppercase">Framework</span>
                        <h2 className="text-3xl font-serif text-white">Explainability (XAI) Library</h2>
                    </div>
                    <p className="text-lg text-slate-400">
                        We built a shared library of XAI patterns to standardise how we explain AI decisions to users. "Why did I get this recommendation?" shouldn't be a mystery.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-900 p-6 rounded-xl border border-white/5">
                        <MessageSquare className="w-8 h-8 text-rose-500 mb-4" />
                        <h4 className="text-white font-bold mb-2">Natural Language</h4>
                        <p className="text-xs text-slate-400">"We chose this because you liked X and Y."</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-white/5">
                         <BrainCircuit className="w-8 h-8 text-rose-500 mb-4" />
                        <h4 className="text-white font-bold mb-2">Feature Contribution</h4>
                        <p className="text-xs text-slate-400">Visual highlighting of key factors.</p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-white/5">
                         <Scale className="w-8 h-8 text-rose-500 mb-4" />
                        <h4 className="text-white font-bold mb-2">Confidence Scores</h4>
                        <p className="text-xs text-slate-400">"We are 85% sure this matches."</p>
                    </div>
                </div>
            </div>

        </section>

        {/* 4. LEARNINGS */}
        <section className="bg-rose-950/10 -mx-4 sm:-mx-8 p-8 sm:p-12 rounded-3xl border border-rose-500/20">
            <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <HeartHandshake className="w-6 h-6 text-rose-500" />
                The Human Element
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The biggest improvement wasn't in the tools, but in the empathy between disciplines.
            </p>
            <p className="text-slate-400">
                When Designers understand <em>False Positives</em>, and Data Scientists understand <em>User Friction</em>, the product improves exponentially.
            </p>
        </section>

        {/* Footer Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-center">
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose-500">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                </div>
                <span>Previous: AutoML Vision</span>
             </a>
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span>Back to Home</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose-500">
                    <ArrowRight className="w-4 h-4" />
                </div>
             </a>
        </div>

      </main>
    </article>
  );
}
