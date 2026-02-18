import React from 'react';
import { 
  Users, 
  GitBranch, 
  MessageSquare, 
  FileText, 
  BookOpen, 
  ArrowRight, 
  Quote, 
  LifeBuoy, 
  Sparkles, 
  Briefcase, 
  Building2, 
  Tags, 
  Layers,
  GraduationCap
} from 'lucide-react';

export function IfsImpactWrapUp() {
  return (
    <div className="w-full space-y-8 mt-16 mb-24">
      
      {/* Grid: Mentoring & Collaboration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mentoring Panel */}
        <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm flex flex-col h-full relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/5 blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-slate-200">Mentoring & Team Growth</h3>
          </div>

          <div className="flex-1 space-y-6">
            {/* Avatars Visual */}
            <div className="flex items-center gap-4 py-2">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center z-10 relative">
                  <span className="text-xs font-bold text-slate-400">OV</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-500 border-2 border-slate-900 flex items-center justify-center">
                  <GitBranch className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="w-8 h-px bg-slate-700"></div>
              <div className="relative">
                 <div className="w-10 h-10 rounded-full bg-slate-800/60 border-2 border-slate-700/60 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-500">New</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                Guided a new UX designer to lead wireframes and presentations to PwC. This mentorship allowed me to focus on strategy while ensuring quality execution.
              </p>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Best Practices Scaled</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Standardized file organisation
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    User story mapping methodology
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    Structured design review cycles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stakeholder Collaboration Panel */}
        <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm flex flex-col h-full relative overflow-hidden">
          <div className="absolute bottom-0 left-0 p-32 bg-teal-500/5 blur-[80px] rounded-full -ml-16 -mb-16 pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-slate-200">Stakeholder Collaboration</h3>
          </div>

          <div className="flex-1 flex items-center justify-center py-4">
            <div className="relative w-full max-w-[320px] aspect-square">
              {/* Center Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-slate-800 border border-teal-500/30 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(20,184,166,0.2)]">
                  <Layers className="w-8 h-8 text-teal-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-slate-900/80 px-2 py-0.5 rounded-full border border-teal-500/20">
                  Product
                </span>
              </div>

              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" className="text-slate-500" strokeDasharray="4 4" />
                <path d="M160 160 L 160 40" stroke="currentColor" className="text-teal-500" />
                <path d="M160 160 L 264 100" stroke="currentColor" className="text-teal-500" />
                <path d="M160 160 L 264 220" stroke="currentColor" className="text-teal-500" />
                <path d="M160 160 L 56 220" stroke="currentColor" className="text-teal-500" />
                <path d="M160 160 L 56 100" stroke="currentColor" className="text-teal-500" />
                <path d="M160 160 L 160 280" stroke="currentColor" className="text-teal-500" />
              </svg>

              {/* Satellites */}
              {/* Top: Product Management */}
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[9px] text-slate-500 font-medium">PM</span>
              </div>

              {/* Top Right: PwC */}
              <div className="absolute top-[28%] right-[10%] -translate-y-1/2 flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[9px] text-slate-500 font-medium">PwC</span>
              </div>

              {/* Bottom Right: Presales */}
              <div className="absolute bottom-[28%] right-[10%] translate-y-1/2 flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                  <Tags className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[9px] text-slate-500 font-medium">Presales</span>
              </div>

              {/* Bottom: Support */}
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                  <LifeBuoy className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[9px] text-slate-500 font-medium">Support</span>
              </div>

              {/* Bottom Left: AI Group */}
              <div className="absolute bottom-[28%] left-[10%] translate-y-1/2 flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[9px] text-slate-500 font-medium">AI Group</span>
              </div>

               {/* Top Left: Core Team */}
               <div className="absolute top-[28%] left-[10%] -translate-y-1/2 flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                  <Users className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-[9px] text-slate-500 font-medium">Core Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Section: Naming, Docs, Quote */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Naming Change */}
        <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/5 opacity-50"></div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 relative z-10">Clarity Update</h4>
          <div className="flex flex-col gap-3 relative z-10">
            <div className="px-3 py-2 rounded bg-slate-800/50 border border-red-500/20 text-slate-400 line-through decoration-red-500/50 text-sm">
              Sustainability Hub
            </div>
            <div className="flex justify-center text-slate-600">
               <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
            </div>
            <div className="px-3 py-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-sm shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)]">
              Sustainability Management
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-4 text-center leading-tight">
            Renamed to reduce customer confusion aligned with ISO standards.
          </p>
        </div>

        {/* Documentation */}
        <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-center backdrop-blur-sm relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
               <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-200 mb-1">Knowledge Transfer</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Created Academy materials and community responses to scale support and reduce ticket load.
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
             <div className="h-1.5 w-12 bg-indigo-500/20 rounded-full"></div>
             <div className="h-1.5 w-8 bg-indigo-500/20 rounded-full"></div>
             <div className="h-1.5 w-4 bg-indigo-500/20 rounded-full"></div>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
           <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5 rotate-180" />
           <blockquote className="relative z-10">
             <p className="text-sm text-slate-300 italic mb-4 leading-relaxed">
               "Oshadhi brought a structural user-centric mindset that not only improved the product but raised our team's standard for design thinking."
             </p>
             <footer className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-400">
                 PM
               </div>
               <div>
                 <div className="text-xs font-bold text-slate-200">Program Manager</div>
                 <div className="text-[10px] text-slate-500">IFS Sustainability</div>
               </div>
             </footer>
           </blockquote>
        </div>

      </div>

      {/* Confidentiality Footer */}
      <div className="text-center pt-8 pb-4 border-t border-white/5">
        <p className="text-xs text-slate-500 max-w-lg mx-auto">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500/50 mr-2"></span>
          More detailed artefacts and flows can be shared in a live conversation due to confidentiality.
        </p>
      </div>

    </div>
  );
}
