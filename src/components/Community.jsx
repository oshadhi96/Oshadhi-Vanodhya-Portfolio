import { memo } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Mic, Users, Camera } from "lucide-react";
import { InstagramTile } from "./ui/motifs";

// Static animation configuration - created once, never recreated
const CAMERA_ANIMATION_STYLE = {
  animationDuration: '4s'
} as const;

const INSTAGRAM_ANIMATION_STYLE = {
  animationDuration: '6s'
} as const;

// Scroll animation configurations - immutable
const SECTION_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
} as const;

const CONTENT_ANIMATION = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay: 0.2 }
} as const;

const IMAGES_ANIMATION = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay: 0.3 }
} as const;

// Image card data - static
const COMMUNITY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=400",
    alt: "Speaking at conference",
    colorClass: "bg-violet-500/10",
    translateClass: "translate-y-8"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
    alt: "Mentoring session",
    colorClass: "bg-indigo-500/10",
    translateClass: ""
  }
] as const;

// Memoized ImageCard component
const ImageCard = memo(function ImageCard({ 
  src, 
  alt, 
  colorClass, 
  translateClass 
}: { 
  src: string; 
  alt: string; 
  colorClass: string; 
  translateClass: string;
}) {
  return (
    <div className={`rounded-[2rem] overflow-hidden aspect-[3/4] ${translateClass} bg-slate-900 border border-white/5 relative group`}>
      <div className={`absolute inset-0 ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay`}></div>
      <img 
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
      />
    </div>
  );
});

export function Community() {
  return (
    <section id="community" className="py-24 relative bg-black/20 overflow-hidden">
      <div className="container mx-auto max-w-8xl px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...CONTENT_ANIMATION}>
             <div className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-300 mb-6">
               Community & Giving Back
             </div>
            <h2 className="text-3xl md:text-4xl font-['Newsreader',_serif] italic tracking-tight text-white mb-6">Speaking & Mentoring</h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
              I believe in growing the design community by sharing knowledge and experiences. 
              I actively speak at conferences and mentor aspiring designers.
            </p>
            
            <div className="space-y-8 relative">
              {/* Decorative Microphone Watermark */}
              <Mic className="absolute -top-10 -left-20 w-64 h-64 text-violet-500/5 -z-10 rotate-12" strokeWidth={1} />
              
              <div className="flex gap-5 group">
                <div className="mt-1 h-12 w-12 shrink-0 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <Mic className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-white mb-2 group-hover:text-violet-400 transition-colors">Public Speaking</h4>
                  <p className="text-slate-400 mb-3 font-light">
                    Available for talks on UX for AI, Enterprise Design, and Career Growth.
                  </p>
                  <div className="text-sm font-medium text-violet-200/80 bg-violet-900/30 px-3 py-1 rounded w-fit border border-violet-500/20">
                    Recent: "Maximizing ROI: Design AI solutions that deliver impact @ Australia '24
                  </div>
                </div>
              </div>

              <div className="flex gap-5 group">
                 <div className="mt-1 h-12 w-12 shrink-0 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-white mb-2 group-hover:text-indigo-400 transition-colors">Mentorship</h4>
                  <p className="text-slate-400 mb-3 font-light">
                    I provide guidance to students and junior designers entering the field.
                  </p>
                  
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button asChild className="rounded-full bg-white text-slate-900 hover:bg-violet-50 hover:text-violet-900 px-8 h-12">
                <a href="/contact">
                  Invite to Speak
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div {...IMAGES_ANIMATION} className="relative">
            {/* Floating Motifs */}
            <div className="absolute -top-10 -right-10 z-0 animate-pulse" style={CAMERA_ANIMATION_STYLE}>
                <Camera className="w-20 h-20 text-indigo-500/10 rotate-12" strokeWidth={1} />
            </div>
            <div className="absolute -bottom-10 -left-10 z-0 animate-pulse" style={INSTAGRAM_ANIMATION_STYLE}>
                <InstagramTile className="w-24 h-24 text-violet-500/10 -rotate-12" strokeWidth={1} />
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {COMMUNITY_IMAGES.map((image) => (
                <ImageCard
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  colorClass={image.colorClass}
                  translateClass={image.translateClass}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}