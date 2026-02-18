import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Users, Smartphone, Heart, ShieldCheck, Calendar, MapPin, FileText, Clock } from "lucide-react";
import { cn } from "../ui/utils";
import { Link } from "react-router-dom";
import { CaseStudySnippet } from "./CaseStudySnippet";
import { 
  PlaceholderScreenFlow, 
  PlaceholderGeneric 
} from "./AssetPlaceholders";

export function BleepMedCaseStudy() {
  const tags = [
    { label: "Role", value: "Lead UX & Product Designer" },
    { label: "Platform", value: "Mobile App (iOS/Android)" },
    { label: "Focus", value: "Telehealth & Logistics" },
  ];

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-emerald-500/30 pb-32">
      
      {/* 1. TOP: Header */}
      <header className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Telehealth Mobile App</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
          Building a telehealth app for booking doctors in the UAE
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          Merging technology with medical services to make care more convenient and affordable for families in the Middle East.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-y border-white/5 py-8">
          {tags.map((tag, idx) => (
            <div key={idx} className="text-center">
              <div className="text-white font-bold">{tag.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{tag.label}</div>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-900/20 aspect-video md:aspect-[21/9]">
             <img src="https://images.unsplash.com/photo-1623915695133-d624f7759fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlaGVhbHRoJTIwYXBwJTIwbW9iaWxlJTIwZG9jdG9yJTIwYm9va2luZ3xlbnwxfHx8fDE3NjU4MzA0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="BleepMed App Context" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply" />
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-24">
        
        <CaseStudySnippet 
          goal="Make it easy for people in the UAE to book trusted doctors from home and manage prescriptions."
          constraints="Busy families, privacy, gender preferences, and fitting into existing clinic workflows."
          keyMove="Designed an end-to-end mobile experience with family profiles, live tracking, and QR check-in."
          outcome="Reduced effort for patients, predictable bookings, and structured visits for clinics."
          color="emerald"
        />

        {/* 2. OVERVIEW & CONTEXT */}
        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-serif text-white mb-6">Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              BleepMed is a healthcare company based in Dubai that wants to merge technology with medical services. Our team at Rootcode designed and built a telehealth mobile app that lets patients find doctors, book in-home visits, pay, and manage prescriptions—all from their phone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-500" />
                The Challenge
              </h3>
              <p className="text-slate-400 leading-relaxed">
                In many Middle Eastern households, healthcare decisions are shared. People are busy caring for elders and children. Visiting a doctor traditionally meant calling multiple clinics, waiting in queues, and managing paper trails. BleepMed wanted to reduce this friction.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                My Role
              </h3>
              <ul className="space-y-2 text-slate-400 list-disc list-inside">
                <li>Shaped the end-to-end patient journey</li>
                <li>Conducted UX research & cultural analysis</li>
                <li>Designed Information Architecture & UI</li>
                <li>Collaborated with engineers on constraints</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. DESIGN SOLUTIONS */}
        <section className="space-y-20">
            <h2 className="text-3xl font-serif text-white text-center">What I Designed</h2>

            {/* Feature 1 */}
            <div className="group">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold border border-emerald-500/20">1</span>
                    <h3 className="text-2xl font-bold text-white">Finding the right doctor without friction</h3>
                </div>
                <p className="text-slate-400 mb-8 pl-12">
                    The doctor search flow lets patients filter by Gender, Experience, and Service Quality. This matches local expectations where gender and perceived reliability play an important role. The list view shows clear details like specialty, location, and rating.
                </p>
                <div className="pl-12">
                   <PlaceholderScreenFlow caption="Doctor Search & Filters" className="aspect-[16/9]" />
                </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold border border-emerald-500/20">2</span>
                    <h3 className="text-2xl font-bold text-white">Booking for extended family</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8 pl-12">
                    <div>
                         <p className="text-slate-400 mb-6">
                            Many families live together, so I designed a booking experience that lets users maintain a list of family members. You can book on behalf of someone else in just a couple of taps, avoiding the "workaround" of using one profile for everyone.
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-white/10">
                        <img src="https://images.unsplash.com/photo-1765421618496-eff8dca7f3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob21lJTIwbGl2aW5nJTIwcm9vbSUyMG1pZGRsZSUyMGVhc3R8ZW58MXx8fHwxNzY1ODMwNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Family Context" className="w-full h-48 object-cover opacity-80" />
                    </div>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold border border-emerald-500/20">3</span>
                    <h3 className="text-2xl font-bold text-white">Payments & Cancellations</h3>
                </div>
                <p className="text-slate-400 mb-6 pl-12">
                    The payments flow supports multiple methods with a clear fee breakdown. Users can cancel up to three hours before without penalty. The copy focuses on reassurance rather than legal jargon.
                </p>
            </div>

            {/* Feature 4 */}
            <div className="group">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold border border-emerald-500/20">4</span>
                    <h3 className="text-2xl font-bold text-white">In-home visit tracking & QR check-in</h3>
                </div>
                <div className="pl-12 space-y-8">
                    <p className="text-slate-400">
                        Once a doctor starts their journey, patients can see live location and ETA. When the doctor arrives, they scan a QR code on the patient's app to confirm the start. This creates a shared reference for timing.
                    </p>
                    <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video">
                        <img src="https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtYXAlMjB0cmFja2luZyUyMGRyaXZlcnxlbnwxfHx8fDE3NjU4MzA0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Map Tracking" className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 right-4 bg-black/80 p-2 rounded-lg border border-white/20">
                            <MapPin className="w-5 h-5 text-emerald-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 5 */}
             <div className="group">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold border border-emerald-500/20">5</span>
                    <h3 className="text-2xl font-bold text-white">Prescription Management</h3>
                </div>
                <p className="text-slate-400 mb-6 pl-12">
                    Prescriptions are sent directly to nearby pharmacies and stored in the app, so patients have a permanent copy without worrying about paper slips.
                </p>
            </div>
        </section>

        {/* 4. OUTCOMES */}
        <section className="bg-slate-900/30 -mx-4 sm:-mx-8 p-8 sm:p-12 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-serif text-white mb-8">Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Heart className="w-4 h-4 text-emerald-500" />
                        Patient Perspective
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Reduces steps to book, respects cultural norms (gender preferences), and makes at-home visits predictable.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-500" />
                        Business Perspective
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Provides a structured way to handle bookings, reduces informal back-and-forth, and creates a clear data trail for improvements.
                    </p>
                </div>
            </div>
        </section>

        {/* 5. LEARNINGS */}
        <section className="space-y-6">
            <h2 className="text-2xl font-serif text-white">Learnings & Next Steps</h2>
             <div className="prose prose-invert max-w-none text-slate-400">
                <p>
                    This project reinforced that <strong>healthcare products are about trust and dignity</strong>, not just efficiency.
                </p>
                <p>
                    If I were to extend this work, I would:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Run in-depth interviews after launch to validate the experience.</li>
                    <li>Explore flows for medication adherence and follow-up care.</li>
                    <li>Co-design accessibility improvements with patients who have different needs.</li>
                </ul>
             </div>
        </section>

        {/* Footer Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-center">
             <Link to="/work/ifs-sustainability" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                </div>
                <span>Previous: IFS Sustainability</span>
             </Link>
             <Link to="/work/expert-republic" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span>Next: Expert Republic</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500">
                    <ArrowRight className="w-4 h-4" />
                </div>
             </Link>
        </div>

      </main>
    </article>
  );
}
