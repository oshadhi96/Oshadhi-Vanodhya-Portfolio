import { motion } from "motion/react";
import { Search, Map, PenTool, Users, Code, Layout } from "lucide-react";

export function SkillsSection() {
  const skillGroups = [
    {
      category: "UX Research",
      icon: Search,
      skills: ["User Interviews", "Usability Testing", "Heuristic Evaluation", "Google Analytics", "Fullstory", "Hotjar", "Focus group", "Dovetail"],
    },
    {
      category: "Strategy & Analysis",
      icon: Map,
      skills: ["Journey Mapping", "Design Workshops", "Feature Prioritisation", "Competitive Analysis", "Jobs to be Done", "User story mapping"],
    },
    {
      category: "Interaction & Visual",
      icon: PenTool,
      skills: ["Figma", "Design Systems", "Prototyping", "Responsive UI", "Micro-interactions", "Accessibility (WCAG)", "Lottie", "Responsive UI"],
    },
    {
      category: "Collaboration",
      icon: Users,
      skills: ["Workshop Facilitation", "Design Critiques", "Mentoring", "Stakeholder Management", "Agile/Scrum", "Design Ops"],
    },
    {
      category: "Technical Awareness",
      icon: Code,
      skills: ["HTML/CSS Knowledge", "React Familiarity", "Tailwind CSS", "Design Handoff"],
    },
  ];

  return (
    <section className="py-20">
      <div className="flex items-center gap-3 mb-12">
        <span className="h-px w-8 bg-teal-500/50"></span>
        <span className="text-teal-400 uppercase tracking-widest text-sm font-bold">Skills & Tools</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:bg-slate-900/60 hover:border-teal-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                <group.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">{group.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="px-3 py-1 text-sm text-slate-400 bg-slate-800/50 border border-white/5 rounded-full hover:text-white hover:border-teal-500/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Placeholder for "Always Learning" or similar to fill the grid if needed, 
            or we can let it be uneven. 5 items means 3 on top, 2 on bottom centered? 
            Or just grid. Grid is fine.
        */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center space-y-4"
          >
             <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 animate-pulse">
                <Layout className="w-6 h-6" />
             </div>
             <div>
               <h3 className="text-lg font-bold text-white">Always Learning</h3>
               <p className="text-sm text-slate-400 mt-2">Currently exploring: <br/><span className="text-teal-300">AI Agents & Spatial Design</span></p>
             </div>
          </motion.div>

      </div>
    </section>
  );
}
