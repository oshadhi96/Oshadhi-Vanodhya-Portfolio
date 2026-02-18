import { motion } from "motion/react";
import { Download, FileText, Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function DownloadResume() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl text-center"
      >
        <Link to="/" className="absolute top-8 left-8 text-slate-500 hover:text-white transition-colors hidden md:block">
            <ArrowLeft className="w-6 h-6" />
        </Link>

        <div className="w-20 h-20 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-teal-400">
            <FileText className="w-10 h-10" />
        </div>

        <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">
          Oshadhi Vanodhya
        </h1>
        <p className="text-teal-400 font-medium tracking-wide uppercase text-sm mb-8">
          Senior UX and Product Designer
        </p>

        <div className="w-16 h-px bg-white/10 mx-auto mb-8"></div>

        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          I am a strategic designer with 7+ years of experience bridging business goals and user needs in complex enterprise environments. 
          <span className="block mt-4 text-white font-medium">
            I am currently seeking Lead Product Designer roles in Melbourne or Perth (requires sponsorship).
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a 
                href="#" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-[#020617] font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
                <Download className="w-5 h-5" />
                Download CV (PDF)
            </a>
            <a 
                href="#" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-all border border-white/10"
            >
                <Linkedin className="w-5 h-5" />
                View LinkedIn
            </a>
        </div>

        <p className="text-sm text-slate-500">
            For a deeper dive into my process and problem-solving approach, <br className="hidden sm:block"/>
            please explore my <Link to="/" className="text-teal-400 hover:underline">case studies</Link>.
        </p>

      </motion.div>
    </div>
  );
}
