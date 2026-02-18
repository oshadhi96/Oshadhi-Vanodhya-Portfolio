import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Users, Layers, TrendingUp, Smartphone, Globe, LayoutGrid, Monitor } from "lucide-react";
import { cn } from "../ui/utils";
import { 
  PlaceholderJourneyMap, 
  PlaceholderScreenFlow, 
  PlaceholderGeneric, 
  PlaceholderBeforeAfter,
  PlaceholderWorkshop 
} from "./AssetPlaceholders";

export function BrpSystemsCaseStudy() {
  const metrics = [
    { value: "2M+", label: "End Users", description: "Active members across the Nordic region" },
    { value: "2,000+", label: "Gym Facilities", description: "Powered by the BRP platform" },
    { value: "100%", label: "White Label", description: "Fully themeable UI architecture" },
  ];

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 pb-32">
      
      {/* 1. TOP: Impact Summary & Metrics */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <LayoutGrid className="w-4 h-4" />
            <span>B2B Platform Redesign</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Redefining the Nordic fitness experience at scale
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            We created a scalable, white-label ready fitness ecosystem that empowers over 2,000 gyms to deliver a premium digital experience across mobile and web.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-400 mb-2">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div className="text-sm text-slate-500">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-cyan-900/20">
           <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" alt="BRP Systems Fitness App" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
           <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
              <span className="text-sm font-mono text-slate-400 bg-black/50 px-3 py-1 rounded border border-white/10">BRP Fitness Platform</span>
           </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* 2. CONTEXT & ROLE */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Layers className="w-6 h-6 text-cyan-500" />
              Context
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">The Ecosystem</h3>
                <p>BRP Systems provides the backend and frontend software for major gym chains across the Nordics. The system needs to serve three distinct groups: Gym Owners (customization), Staff (management), and Members (booking/training).</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">The Challenge</h3>
                <p>The previous legacy system was rigid and visually dated. Gym chains were frustrated by the lack of brand flexibility, and users found the interface clunky.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-cyan-500" />
              My Role
            </h2>
             <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Responsibilities</h3>
                <p>Lead UX/UI Designer, Design System Architect.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Key Activities</h3>
                <p>Stakeholder Workshops, Cultural Research, Requirements Management, UI Design.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 STRATEGIC DECISIONS */}
        <section className="bg-slate-900/50 border-y border-white/5 py-12 -mx-4 sm:-mx-8 px-4 sm:px-8">
             <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-serif text-white mb-8">Strategic Decisions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-cyan-400 font-medium">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>The "White Label" Core</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            We decided to build a "neutral" base design system that looks elegant in grayscale but comes alive when a gym applies their primary brand color. This avoided the "cheap template" look.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-cyan-400 font-medium">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Mobile & Web Parity</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            Previously, the web shop and mobile app were totally different. We unified the UX so a user booking a class on their phone or buying a membership on their laptop had the exact same experience.
                        </p>
                    </div>
                </div>
             </div>
        </section>

        {/* 3. PROCESS & STORY */}
        <section className="space-y-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif text-white mb-6">Process & Story</h2>
            <p className="text-lg text-slate-400">
                A deep dive into Scandinavian fitness culture to build a system that feels local, yet scales globally.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 space-y-20 pl-8 md:pl-12 ml-4">
            
            {/* Phase 1 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center">
                    <Globe className="w-3 h-3 text-cyan-500" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4">Research & Culture</h3>
                <p className="mb-8">
                    We conducted workshops to understand the unique "Group Training" culture in the Nordics. Unlike the US where solo gym time is king, Nordic users rely heavily on social, scheduled classes. This insight shifted our focus to the "Booking" flow as the primary feature.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PlaceholderGeneric caption="Cultural Research Findings" className="aspect-video" />
                    <PlaceholderWorkshop caption="Stakeholder Requirements Workshop" className="aspect-video" />
                </div>
            </div>

            {/* Phase 2 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center">
                     <Smartphone className="w-3 h-3 text-cyan-500" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4">The App Experience</h3>
                <p className="mb-8">
                    The mobile app was completely reimagined. We moved from a hamburger menu to a clear bottom tab navigation, prioritizing Schedule, My Bookings, and Digital ID (for gym access).
                </p>
                
                <PlaceholderBeforeAfter caption="Mobile App: Class Booking Flow" className="aspect-[2/1]" />
            </div>

            {/* Phase 3 */}
            <div className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center">
                    <Monitor className="w-3 h-3 text-cyan-500" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4">Web Shop Overhaul</h3>
                <p className="mb-8">
                    The web shop needed to handle complex membership logic (family plans, corporate discounts, regional access) while remaining simple for the user. We introduced a step-by-step wizard that guided users through the purchase.
                </p>

                <PlaceholderBeforeAfter caption="Web Shop: Membership Purchase" className="aspect-[2/1]" />
            </div>
          </div>
        </section>

        {/* 4. COLLABORATION DETAILS */}
        <section className="bg-slate-900/30 -mx-4 sm:-mx-8 p-8 sm:p-12 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
                <Users className="w-6 h-6 text-cyan-500" />
                Stakeholder Management
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-white mb-2">Requirement Gathering</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        With over 2,000 gyms, the "Feature Wishlist" was endless. I facilitated prioritization workshops to group requests into "Core Features" vs. "Custom Extensions," preventing scope creep.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">Design System Handover</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        I created a comprehensive Figma library and Zeroheight documentation for the development team, ensuring that "Themeability" was baked into the CSS variables from Day 1.
                    </p>
                </div>
            </div>
        </section>

        {/* 5. OUTCOMES */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
             <div>
                <h2 className="text-3xl font-serif text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-cyan-500" />
                    Impact
                </h2>
                <div className="prose prose-invert">
                    <p>
                        The new platform has been successfully rolled out to major chains like Fitness24Seven and Nordic Wellness.
                    </p>
                    <p>
                        The "White Label" architecture reduced the deployment time for a new gym app from <strong className="text-cyan-400">weeks to days</strong>.
                    </p>
                </div>
             </div>

             <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">Future Vision</h3>
                    <p className="text-slate-400">
                        The foundation is now laid for advanced features like AI-driven workout recommendations and integration with wearables, which are currently on the roadmap.
                    </p>
                </div>
             </div>
        </section>

        {/* Footer Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-center">
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                </div>
                <span>Previous: Expert Republic</span>
             </a>
             <a href="#" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <span>Back to Home</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500">
                    <ArrowRight className="w-4 h-4" />
                </div>
             </a>
        </div>

      </main>
    </article>
  );
}
