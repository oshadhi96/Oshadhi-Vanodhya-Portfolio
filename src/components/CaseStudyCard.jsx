import { motion } from "motion/react";
import { ArrowRight, Clock, Lock } from "lucide-react";
import { cn } from "./ui/utils";
import { Button } from "./ui/button";

export interface CaseStudyCardProps {
  title: string;
  company: string;
  impact: string;
  tags: string[];
  readTime: string;
  image: string;
  color?: string;
  className?: string;
  onClick?: () => void;
  locked?: boolean;
}

export function CaseStudyCard({
  title,
  company,
  impact,
  tags,
  readTime,
  image,
  color = "from-violet-600 to-indigo-600",
  className,
  onClick,
  locked = false
}: CaseStudyCardProps) {
  return (
    <motion.article
      className={cn(
        "group relative flex flex-col h-full rounded-2xl bg-slate-900 border overflow-hidden transition-all duration-300",
        locked 
          ? "border-slate-800 hover:border-slate-700" 
          : "border-white/10 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-900/20",
        "focus-within:ring-2 focus-within:ring-violet-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-950",
        className
      )}
      onClick={locked ? undefined : onClick}
    >
      {/* Clickable Overlay for Accessibility */}
      {!locked && (
        <a href="#" className="absolute inset-0 z-0 focus:outline-none">
          <span className="sr-only">View case study: {title}</span>
        </a>
      )}

      {/* Image Section */}
      <div className="relative h-60 sm:h-64 overflow-hidden">
        <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-20 mix-blend-overlay z-10 transition-opacity duration-300",
            locked ? "opacity-10" : "group-hover:opacity-30",
            color
        )} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60" />
        
        {/* Lock Overlay Background */}
        {locked && (
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm z-10 flex items-center justify-center">
                <Lock className="w-12 h-12 text-slate-500/50" />
            </div>
        )}

        <img 
          src={image} 
          alt="" 
          className={cn(
            "w-full h-full object-cover transform transition-transform duration-700 ease-out",
            !locked && "group-hover:scale-105",
            locked && "blur-sm scale-105 opacity-50"
          )}
        />

        {/* Floating Action Button */}
        <div className="absolute top-4 right-4 z-20">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300",
            locked 
                ? "bg-slate-900 border-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-slate-950/50 backdrop-blur-md border-white/10 group-hover:bg-violet-600 group-hover:border-violet-500 group-hover:scale-110 text-white"
          )}>
            {locked ? (
                <Lock className="w-4 h-4" />
            ) : (
                <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            )}
          </div>
        </div>

        {/* Company Badge */}
        <div className="absolute top-4 left-4 z-20">
             <span className={cn(
                "px-3 py-1 text-xs font-bold tracking-wider backdrop-blur-md rounded-full border uppercase",
                locked 
                    ? "bg-slate-800/80 border-slate-700 text-slate-400"
                    : "text-white bg-slate-950/60 border-white/10"
             )}>
                {company}
             </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 relative z-10">
        {/* Meta Row: Tags & Read Time */}
        <div className="flex items-center justify-between gap-4 mb-4 text-xs text-slate-400">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
          {!locked && (
            <div className="flex items-center gap-1 shrink-0 whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity">
                <Clock className="w-3 h-3" />
                <span>{readTime}</span>
            </div>
          )}
        </div>

        <h3 className={cn(
            "text-xl sm:text-2xl font-semibold mb-2 transition-colors",
            locked ? "text-slate-300" : "text-white group-hover:text-violet-300"
        )}>
          {title}
        </h3>

        <div className="mb-4">
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
                {impact}
            </p>
            {locked && (
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-center gap-2 text-xs text-amber-500/80 bg-amber-950/20 px-3 py-2 rounded border border-amber-900/30">
                        <Lock className="w-3 h-3" />
                        <span>Details available on request due to confidentiality</span>
                    </div>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white"
                        onClick={(e) => {
                            e.stopPropagation();
                            // Trigger contact form logic here
                            const contactSection = document.getElementById('contact');
                            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Request Access
                    </Button>
                </div>
            )}
        </div>
        
        {/* Bottom indicator line */}
        {!locked && (
            <div className="mt-auto h-0.5 w-0 bg-violet-500 group-hover:w-full transition-all duration-500 ease-in-out" />
        )}
      </div>
    </motion.article>
  );
}
