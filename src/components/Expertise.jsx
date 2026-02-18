import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Expertise() {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[#020617]/50" />
      


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-['Newsreader',_serif] italic tracking-tight text-white mb-6">Expertise & Methodology</h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
            I combine strategic thinking with pixel-perfect execution to deliver products that are both usable and viable.
          </p>
          
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-medium text-lg group"
          >
            Explore my detailed expertise and process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
