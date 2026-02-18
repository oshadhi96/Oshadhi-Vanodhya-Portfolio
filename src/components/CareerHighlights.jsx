import { motion } from "motion/react";
import { Award, Mic, Zap, Star, TrendingUp, Users, Trophy, Rocket, Lightbulb } from "lucide-react";
import { cn } from "./ui/utils";

export function CareerHighlights() {
  const highlights = [
    {
      icon: Users,
      title: "Scaled Design Team 1→4",
      source: "Startup Growth",
      type: "leadership",
      description: "Helped scale a startup design agency from 1 to 4 within 2 years.",
    },
        {
      icon: Lightbulb,
      title: "AI Recruitment - Pending Patent",
      source: "Innovation & IP",
      type: "innovation",
      description: "Contributed to an AI-driven recruitment product which led to a pending patent.",
    },
    {
      icon: Award,
      title: "Gold Award - NBQSA 2021",
      source: "Expert Republic Enterprise",
      type: "award",
      description: "Won the Gold Award for 'Expert Republic Enterprise' product at NBQSA.",
    },
    {
      icon: Trophy,
      title: "Product Hunt #2",
      source: "Product Hunt 2020",
      type: "award",
      description: "Achieved No. 2 Product of the Day on Product Hunt in 2020.",
    },
    {
      icon: Star,
      title: "1st Place - Global Hack",
      source: "E-Residency Recognition",
      type: "award",
      description: "Awarded 1st place at The Global Hack 2020, recognized by E-Residency.",
    },
    {
      icon: Mic,
      title: "Taught 1600+ Learners",
      source: "UX Education & Mentorship",
      type: "education",
      description: "Taught UX to over 2500+ learners and mentored early-career designers.",
    },

  ];

  return (
    <section className="py-20 border-y border-white/5 bg-[#03081c] relative overflow-hidden">
      {/* Background decoration: Subtle wave or path */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent -translate-y-1/2 hidden md:block" />
      
      <section aria-labelledby="highlights-heading" className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center md:text-left">
           <h2 id="highlights-heading" className="text-2xl font-serif text-white italic">Notable Wins & Career Highlights</h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {highlights.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-slate-900/80 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
              tabIndex={0}
            >
              {/* Connector dot for desktop */}
              <div className="absolute -top-[33px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#03081c] border-2 border-teal-500/50 hidden md:block group-hover:border-teal-400 group-hover:bg-teal-900 transition-colors" aria-hidden="true" />
              <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 h-8 w-px bg-teal-500/20 hidden md:block" aria-hidden="true" />

              <div className="flex items-start justify-between mb-4">
                 <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    <item.icon className="w-5 h-5" />
                 </div>
                 <span className="text-xs uppercase font-bold tracking-widest text-slate-400 bg-white/5 px-2 py-1 rounded">
                    {item.type}
                 </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-200 transition-colors">
                {item.title}
              </h3>
              <div className="text-sm font-medium text-teal-400 mb-3">{item.source}</div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </section>
    </section>
  );
}