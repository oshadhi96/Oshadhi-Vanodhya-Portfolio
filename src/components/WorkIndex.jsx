import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, LayoutGrid } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import { CaseStudyCard } from "./CaseStudyCard";

const FILTERS = [
  "All",
  "Mobile",
  "Web application",
  "Enterprise UX",
  "Consumer UX",
  "B2B",
  "Design agency",
  "AI",
  "Construction",
  "Sustainability",
  "HCM",
  "Leadership",
  "Concept"
];

const PROJECTS = [
  {
    id: 1,
    title: "Construction ERP Transformation",
    company: "BuildCo",
    impact: "Modernizing a legacy construction management platform for better usability in the field.",
    tags: ["Enterprise UX", "B2B", "Construction"],
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1751486403890-793880b12adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-blue-600 to-cyan-500"
  },
];

export function WorkIndex() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12 md:mb-20 space-y-6">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white"
                >
                    Selected <span className="italic text-violet-400">Works</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-2xl text-lg text-slate-400 leading-relaxed"
                >
                    A curated collection of projects across Enterprise, AI, and Consumer domains. 
                    Each case study represents a journey from ambiguity to clarity, solving complex problems with human-centered design.
                </motion.p>
            </div>

            {/* Filters */}
            <div className="mb-12 space-y-4">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Filter className="w-4 h-4" />
                    <span>Filter by Industry & Type</span>
                </div>
                <div className="relative -mx-4 sm:mx-0 px-4 sm:px-0">
                    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mask-linear-fade">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    activeFilter === filter
                                        ? "bg-violet-600 text-white border-violet-500 shadow-[0_0_15px_-3px_rgba(124,58,237,0.4)]"
                                        : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CaseStudyCard
                                {...project}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            
            {filteredProjects.length === 0 && (
                <div className="py-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 text-slate-500 mb-4">
                        <LayoutGrid className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">No projects found</h3>
                    <p className="text-slate-400">Try adjusting your filters to see more work.</p>
                    <Button 
                        variant="link" 
                        onClick={() => setActiveFilter("All")}
                        className="mt-4 text-violet-400"
                    >
                        Clear filters
                    </Button>
                </div>
            )}
        </div>
    </div>
  );
}
