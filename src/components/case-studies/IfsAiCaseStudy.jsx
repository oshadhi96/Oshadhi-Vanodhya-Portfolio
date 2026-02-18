import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  TrendingUp,
  Search,
  Type,
  LayoutTemplate,
  Clock,
  Target,
} from "lucide-react";
import { cn } from "../ui/utils";
import { CaseStudySnippet } from "./CaseStudySnippet";
import {
  PlaceholderJourneyMap,
  PlaceholderScreenFlow,
  PlaceholderGeneric,
  PlaceholderBeforeAfter,
  PlaceholderWorkshop,
} from "./AssetPlaceholders";
import { useState, useRef } from "react";

export function IfsAiCaseStudy() {
  const [readTime, setReadTime] = useState("5min");
  const contentStartRef = useRef(null);
  const [announcement, setAnnouncement] = useState("");

  const handleReadTimeChange = (id) => {
    setReadTime(id);
    setAnnouncement(
      `Now showing ${id === "2min" ? "2 minute summary" : "5 minute read"}`,
    );

    if (contentStartRef.current) {
      const y =
        contentStartRef.current.getBoundingClientRect().top +
        window.scrollY -
        100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-violet-500/30 pb-32">
      <div className="sr-only" role="status" aria-live="polite">
        {announcement}
      </div>

      {/* 1. TOP: Impact Summary & Metrics */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            <span>Internal Tooling</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Accelerating innovation by enhancing developer experience in AI Dev
            Portal
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            By restructuring the information architecture and simplifying
            technical terminology, we cut the onboarding time for R&D engineers
            by <span className="text-emerald-400 font-medium">1.77 months</span>
            .
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-violet-500/30 transition-colors"
          >
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-400 mb-2">
              1.77mo
            </div>
            <div className="text-white font-medium mb-2">Faster Onboarding</div>
            <div className="text-sm text-slate-400">
              Reduction in time-to-productivity for engineers
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-violet-500/30 transition-colors"
          >
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-400 mb-2">
              4.11 / 5
            </div>
            <div className="text-white font-medium mb-2">User Satisfaction</div>
            <div className="text-sm text-slate-400">
              Post-release survey score for overall experience
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-violet-500/30 transition-colors"
          >
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-400 mb-2">
              15
            </div>
            <div className="text-white font-medium mb-2">
              Issues Fixed Pre-Rollout
            </div>
            <div className="text-sm text-slate-400">
              Identified and fixed 5 high, 5 medium, and 5 low priority UX
              issues
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-violet-900/20">
          <PlaceholderBeforeAfter
            caption="Before/After: AI Developer Portal Home Page"
            className="w-full h-full border-0 rounded-none bg-slate-900"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
            <span className="text-sm font-mono text-slate-400 bg-black/50 px-3 py-1 rounded border border-white/10">
              ifs.ai Developer Portal 2.0
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 space-y-32 mt-[48px] pr-[32px] pb-[0px] pl-[32px]">
        {/* READ LENGTH TOGGLE */}
        <div
          ref={contentStartRef}
          className="sticky top-6 z-40 flex justify-center -mt-20 mb-12 md:mb-20"
        >
          <div
            className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex gap-1 shadow-2xl ring-1 ring-white/5 w-full max-w-md md:w-auto"
            role="radiogroup"
            aria-label="Select read time"
          >
            {[
              {
                id: "2min",
                label: "2 min summary",
                icon: false,
              },
              {
                id: "5min",
                label: "5 min read",
                icon: true,
              },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => handleReadTimeChange(option.id)}
                aria-checked={readTime === option.id}
                role="radio"
                className={cn(
                  "relative flex-1 md:flex-none px-4 py-3 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 min-h-[44px] flex items-center justify-center",
                  readTime === option.id
                    ? "bg-teal-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5",
                )}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {option.icon && (
                    <Clock
                      className="w-3.5 h-3.5 hidden md:block"
                      aria-hidden="true"
                    />
                  )}
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 2 MIN SUMMARY CONTENT */}
        {readTime === "2min" && (
          <div className="animate-in fade-in duration-500 space-y-16">
            <div className="max-w-8xl">
              <h2 className="text-3xl font-serif text-violet-400 mb-6">
                Context: Product, Users, Constraints
              </h2>

              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  The{" "}
                  <strong className="text-white">ML Developer Portal</strong> is
                  an internal tool within the IFS.ai ecosystem that helps R&D
                  solution engineers explore data, configure experiments and
                  deploy AI use cases across the product.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h3 className="text-white font-bold mb-2">Primary Users</h3>
                    <p className="text-sm">
                      Internal solution engineers and product specialists with
                      varying ML maturity (from “curious beginner” to
                      “comfortable with Python notebooks”).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Early Signal</h3>
                    <p className="text-sm">
                      Teams loved the innovation but felt the portal was “hard
                      to navigate”, the landing page “looked empty”, and core
                      terms like “EDA” were confusing.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                  <h3 className="text-white font-bold mb-2">Constraints</h3>
                  <p className="text-sm">
                    Internal tool, limited dev capacity, need to ship
                    improvements within existing release trains (24r2), and a
                    strong push to reuse the IFS design system and tokens.
                  </p>
                </div>

                <PlaceholderJourneyMap
                  caption="Persona: ML Solution Engineer Journey"
                  className="h-64 mt-8"
                />
              </div>
            </div>

            <div className="max-w-8xl">
              <h2 className="text-3xl font-serif text-violet-400 mb-6">
                Problem
              </h2>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  The portal was initially developed without any help from a UX
                  designer. Developers could technically complete tasks, but
                  they were burning time figuring out where to start, what “EDA”
                  meant, and how to upload data.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Landing pages looked empty, help was buried, and terminology
                  did not match how they talked about their own workflow. This
                  friction slowed onboarding and hurt confidence in the portal
                  as the foundation for IFS.ai use cases.
                </p>

                <blockquote className="border-l-4 border-violet-500 pl-6 py-2 italic text-xl text-slate-400 my-8 bg-black/20 pr-6 rounded-r-lg">
                  "It’s kind of an empty screen… what are the things I can do
                  here?"
                  <footer className="text-sm font-normal text-slate-400 mt-2 not-italic">
                    — Senior Solution Engineer during initial usability testing
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="max-w-8xl grid md:grid-cols-2 gap-8">
              {/* My Role */}
              <div>
                <h2 className="text-3xl font-serif text-violet-400 mb-6">
                  My Role
                </h2>
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 h-full">
                  <p className="text-lg text-slate-300 mb-6">
                    I led the end-to-end UX and UI design for the ML Developer
                    Portal revamp:
                  </p>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 flex-shrink-0" />
                      <span>
                        Defining the research plan, running usability testing,
                        and synthesizing insights.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 flex-shrink-0" />
                      <span>Restructuring information architecture.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 flex-shrink-0" />
                      <span>
                        Redesigning key flows (home, datasets/EDA, experiments).
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 flex-shrink-0" />
                      <span>Driving design QA with the engineering team.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Team & Timeline */}
              <div>
                <h2 className="text-3xl font-serif text-violet-400 mb-6">
                  Team & Timeline
                </h2>
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 h-full space-y-8">
                  <div>
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Users
                        className="w-5 h-5 text-violet-500"
                        aria-hidden="true"
                      />
                      Team
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li className="flex gap-2 items-center">
                        <span className="w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
                        Programme Manager
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
                        AI Product Specialist
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
                        Tech Lead
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
                        2 Front-end Engineers
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1 h-1 rounded-full bg-violet-500 flex-shrink-0" />
                        Data Scientists
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Layers
                        className="w-5 h-5 text-violet-500"
                        aria-hidden="true"
                      />
                      Collaboration
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li className="flex gap-2 items-start">
                        <span className="w-1 h-1 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                        <span>
                          Bi-weekly design and review sessions with the MLDP
                          squad.
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="w-1 h-1 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                        <span>Syncs with the wider Automation / AI group.</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="w-1 h-1 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                        <span>Alignment with UX guild.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Clock
                        className="w-5 h-5 text-violet-500"
                        aria-hidden="true"
                      />
                      Timeline
                    </h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li className="flex gap-2 items-start">
                        <span className="w-1 h-1 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                        <span>
                          Multi-sprint initiative aligned with a release train.
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="w-1 h-1 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                        <span>
                          From initial usability tests to design QA and dev
                          handoff.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-8xl mx-[0px] my-[64px]">
              <h2 className="text-3xl font-serif text-violet-400 mb-6">
                Process & Key Decisions (High-level)
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Validate the experience with real users
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Ran 6 moderated usability tests (5 solution engineers, 1
                      product specialist), using realistic tasks like “import a
                      dataset and explore it” to reveal friction early.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Fix language and navigation before “polishing UI”
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Renamed confusing concepts (e.g. “EDA Dashboard” to
                      “Datasets”; “New EDA” to “Import dataset”) and simplified
                      the entry point: instead of landing on an empty home,
                      users go straight to a meaningful dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Document interactions and edge cases for devs
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Created journey-level interaction specs, accessibility
                      annotations and dev-friendly documentation using the IFS
                      design system tokens, then followed through with design QA
                      and front-end reviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-8xl">
              <h2 className="text-3xl font-serif text-violet-400 mb-6">
                Collaboration & Leadership
              </h2>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I framed the work around business trade-offs (training time
                  saved, improve consistency with Design System) and used
                  usability clips to build empathy with engineers and
                  stakeholders. I facilitated prioritisation sessions to
                  negotiate which UX issues to tackle first given dev capacity,
                  advocated for accessibility and design tokens, and partnered
                  closely with engineering during implementation (including code
                  reviews and resolving font/accessibility issues).
                </p>
              </div>
            </div>

            <div className="max-w-8xl">
              <h2 className="text-3xl font-serif text-violet-400 mb-6">
                Outcomes & Learnings
              </h2>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 mb-12">
                <ul className="space-y-8">
                  <li className="space-y-2">
                    <h3 className="text-xl font-bold text-white flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-violet-400 mt-2.5 flex-shrink-0" />
                      Developers learned faster
                    </h3>
                    <p className="text-slate-400 leading-relaxed pl-5">
                      Clearer language and flows reduced training time and
                      surfaced a potential{" "}
                      <strong className="text-violet-400">
                        1.77-month reduction
                      </strong>{" "}
                      in total R&D onboarding effort.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <h3 className="text-xl font-bold text-white flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-violet-400 mt-2.5 flex-shrink-0" />
                      Experience felt friendlier and more intuitive
                    </h3>
                    <p className="text-slate-400 leading-relaxed pl-5">
                      The post-release survey scored{" "}
                      <strong className="text-violet-400">4.11 / 5</strong>. One
                      SE shared: “The overall layout design is user friendly.”
                    </p>
                  </li>
                  <li className="space-y-2">
                    <h3 className="text-xl font-bold text-white flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-violet-400 mt-2.5 flex-shrink-0" />
                      Team confidence increased
                    </h3>
                    <p className="text-slate-400 leading-relaxed pl-5">
                      The Dev team felt more proud of the product, and usability
                      insights helped align the wider IFS.ai strategy around
                      developer experience.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="space-y-12">
                <div className="relative">
                  <blockquote className="text-center text-xl md:text-2xl font-serif text-slate-300 max-w-3xl mx-auto italic leading-relaxed">
                    "The overall layout design is user friendly."
                  </blockquote>
                  <div className="mt-4 text-center">
                    <cite className="not-italic text-sm text-slate-400 uppercase tracking-widest font-semibold">
                      — Senior Solution Engineer
                    </cite>
                  </div>
                </div>

                <PlaceholderGeneric
                  caption="Final UI Gallery: Home, Datasets, and Experiment Flow"
                  className="aspect-[16/9]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12"></div>

            <div className="flex justify-center pt-8">
              <button
                onClick={() => handleReadTimeChange("5min")}
                className="flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                Read the full story{" "}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {/* 5 MIN READ CONTENT */}
        {readTime === "5min" && (
          <div className="animate-in fade-in duration-500 space-y-32">
            {/* 2. CONTEXT & ROLE */}
            <section className="grid md:grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-8 p-[0px]">
                <h2 className="text-2xl font-serif text-white flex items-center gap-3">
                  <Layers
                    className="w-6 h-6 text-violet-500"
                    aria-hidden="true"
                  />
                  Context
                </h2>
                <div className="space-y-8 p-[0px]">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Product
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      The ML Developer Portal sits at the heart of the IFS.ai
                      strategy and is used to ideate, explore, prepare data,
                      configure models and deploy ML use cases on top of IFS
                      Cloud. It connects steps like data upload, exploratory
                      data analysis (EDA), experiments and deployment into one
                      workflow for internal teams.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Users
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-400 mb-2">
                      <li>
                        Internal solution engineers working on AI and ML-powered
                        features
                      </li>
                      <li>
                        Product specialists supporting customer scenarios and
                        demos
                      </li>
                      <li>R&D engineers experimenting with data and recipes</li>
                    </ul>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Skill levels ranged from ML beginners (following tutorials
                      and docs) to more advanced practitioners comfortable with
                      scripting and experimentation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      What was messy
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-400">
                      <li>
                        The landing page looked almost empty, leaving new users
                        unsure where to start.
                      </li>
                      <li>
                        “EDA” as a term was not widely understood; 67% of test
                        participants could not confidently explain it.
                      </li>
                      <li>
                        Uploading datasets involved guesswork; users were not
                        sure which page to use or which formats were supported.
                      </li>
                      <li>
                        Help and documentation were not visible at the point of
                        need, despite users relying heavily on tutorials and
                        docs.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Constraints
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-400">
                      <li>Internal product with limited dev capacity.</li>
                      <li>
                        Limited exposure in working with UX Designers or design
                        system.
                      </li>
                      <li>
                        Work had to fit into existing release trains and be
                        realistic for an Angular front-end and current technical
                        stack.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-serif text-white flex items-center gap-3">
                  <Users
                    className="w-6 h-6 text-violet-500"
                    aria-hidden="true"
                  />
                  My Role
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    As the lead UX and UI designer on the ML Developer Portal:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-slate-400 leading-relaxed">
                    <li>
                      I defined the research approach, wrote the usability
                      testing script and moderated all sessions.
                    </li>
                    <li>
                      I synthesised findings into prioritised UX issues, mapped
                      them back to business impact (training time, support load,
                      adoption) and reframed them as design opportunities.
                    </li>
                    <li>
                      I redesigned the information architecture, layouts and
                      microcopy for key flows (home, datasets, experiments),
                      including accessibility annotations and dev specs.
                    </li>
                    <li>
                      I partnered closely with engineers during implementation
                      through design QA, SCSS reviews and helping set up an
                      Angular project with design tokens.
                    </li>
                  </ul>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Team
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-400 mb-3">
                      <li>
                        <span className="text-slate-300 font-medium">
                          Programme Manager
                        </span>{" "}
                        – priorities and stakeholder alignment.
                      </li>
                      <li>
                        <span className="text-slate-300 font-medium">
                          Product specialist
                        </span>{" "}
                        – functional requirements
                      </li>
                      <li>
                        <span className="text-slate-300 font-medium">
                          ML tech lead and data scientists
                        </span>{" "}
                        – constraints around pipelines and ML experimentation.
                      </li>
                      <li>
                        <span className="text-slate-300 font-medium">
                          Front-end engineers
                        </span>{" "}
                        – Angular implementation, responsiveness, token
                        integration.
                      </li>
                    </ul>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      I also shared the work with the Automation / AI group and
                      UX guild, using their feedback to keep the portal aligned
                      with the broader IFS.ai strategy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Timeline
                    </h3>
                    <p className="text-sm text-slate-400 mb-2">
                      A multi-sprint initiative across a release cycle,
                      structured as:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-slate-400">
                      <li>Discovery and scoping</li>
                      <li>Usability testing and synthesis</li>
                      <li>Redesign and interaction specs</li>
                      <li>Dev handoff, design QA and iteration</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <PlaceholderJourneyMap
              caption="Journey map: First login → Import dataset → Run experiment → Review results"
              className="h-48 w-full"
            />

            {/* PROBLEM STATEMENT */}
            <section className="max-w-8xl">
              <h2 className="text-3xl font-serif text-white mb-6">
                Problem statement
              </h2>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 space-y-8">
                <p className="text-lg text-slate-300 leading-relaxed">
                  The portal promised a powerful, end-to-end ML workflow, but
                  the first-time experience was working against developers.
                  People hesitated on the landing page, struggled with
                  terminology like “EDA”, and spent time hunting for where to
                  upload data or where to learn more. This created a gap between
                  the strategic ambition of IFS.ai and the day-to-day reality of
                  developers trying to ship ML use cases.
                </p>

                <PlaceholderGeneric
                  caption="User quote block – several short quotes about confusion and first impressions"
                  className="h-32"
                />
              </div>
            </section>

            {/* 3. PROCESS & KEY DECISIONS */}
            <section className="space-y-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-serif text-white mb-6">
                  Process & Key Decisions
                </h2>
                <p className="text-lg text-slate-400">
                  We approached the redesign like an archaeology project:
                  digging through layers of technical debt to find the core user
                  workflows.
                </p>
              </div>

              <div className="relative border-l-2 border-slate-800 space-y-20 pl-8 md:pl-12 ml-4">
                {/* 1. Frame the research question */}
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center">
                    <Target
                      className="w-3 h-3 text-violet-500"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    1. Frame the research question and align team by pitching
                    usability test
                  </h3>
                  <ul className="space-y-2 text-slate-400 mb-8">
                    <li>
                      <strong className="text-slate-300">Goal:</strong>{" "}
                      understand how quickly a new or intermediate SE can
                      complete core tasks in the portal without training.
                    </li>
                    <li>
                      <strong className="text-slate-300">Output:</strong> a test
                      plan focused on first impressions, dataset import, and
                      experiment creation flows.
                    </li>
                  </ul>
                  <PlaceholderWorkshop
                    caption="Team Workshop: Alignment"
                    className="aspect-[2/1]"
                  />
                </div>

                {/* 2. Run 6 moderated usability sessions */}
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center">
                    <Users
                      className="w-3 h-3 text-violet-500"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    2. Run 6 moderated usability sessions
                  </h3>
                  <ul className="space-y-2 text-slate-400 mb-6">
                    <li>
                      <strong className="text-slate-300">Participants:</strong>{" "}
                      5 SEs (basic–intermediate ML knowledge) and 1 product
                      specialist.
                    </li>
                    <li>
                      <strong className="text-slate-300">Format:</strong>{" "}
                      45-minute remote sessions, semi-structured with predefined
                      tasks and open-ended probing.
                    </li>
                    <li>
                      <strong className="text-slate-300">Key insight:</strong>{" "}
                      the “empty” home page and “EDA” terminology were instant
                      friction points.
                    </li>
                  </ul>
                </div>

                {/* 3. Quantify impact */}
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center">
                    <TrendingUp
                      className="w-3 h-3 text-violet-500"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    3. Quantify impact of terminology and IA issues
                  </h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>67% of users could not clearly explain “EDA”.</li>
                    <li>
                      We compared this to standard language in tooling and
                      documentation (e.g. “Datasets”, “Import dataset”), and
                      estimated training overhead if we had to manually teach
                      the term to every new SE.
                    </li>
                    <li className="text-emerald-400 font-medium pt-2">
                      Result: an estimated 7 days of training time saved across
                      the R&D organisation by using familiar language.
                    </li>
                  </ul>
                </div>

                {/* 4. Redesign */}
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center">
                    <LayoutTemplate
                      className="w-3 h-3 text-violet-500"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    4. Redesign the first-time experience
                  </h3>
                  <ul className="space-y-4 text-slate-400">
                    <li>
                      <strong className="text-slate-300">Decision 1:</strong>{" "}
                      skip the empty home in early releases; land users directly
                      in a meaningful dashboard where their datasets live.
                    </li>
                    <li>
                      <strong className="text-slate-300">Decision 2:</strong>{" "}
                      rename “EDA Dashboard” to “Datasets” and “New EDA” to
                      “Import dataset”, and add explicit labels and format hints
                      (CSV) around data upload.
                    </li>
                    <li>
                      <strong className="text-slate-300">Decision 3:</strong>{" "}
                      add a clear “Help & Documentation” entry in the main
                      navigation for users who prefer to learn through docs and
                      tutorials.
                    </li>
                  </ul>
                </div>

                {/* 5. Design, specs */}
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center">
                    <Type
                      className="w-3 h-3 text-violet-500"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    5. Design, specs and accessibility
                  </h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      Created revamped layouts in Figma using the IFS design
                      system tokens.
                    </li>
                    <li>
                      Documented interaction flows (including edge cases) and
                      annotated accessibility requirements where possible.
                    </li>
                    <li>
                      Provided detailed dev specs to bridge limitations of Figma
                      Dev Mode and the existing Angular components.
                    </li>
                  </ul>
                </div>

                {/* 6. Dev collaboration */}
                <div className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-violet-500 flex items-center justify-center">
                    <CheckCircle2
                      className="w-3 h-3 text-violet-500"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">
                    6. Dev collaboration & visual QA
                  </h3>
                  <ul className="space-y-2 text-slate-400 mb-8">
                    <li>
                      Supported the team by helping set up an Angular project
                      that consumed the design tokens.
                    </li>
                    <li>
                      Conducted visual QA to catch inconsistencies, spacing
                      issues, token mismatches and font rendering problems.
                    </li>
                    <li>
                      Used a DVF-style score to evaluate quality and prioritise
                      refinements within time constraints.
                    </li>
                  </ul>
                  <PlaceholderScreenFlow
                    caption="Wireframes → Mid-fidelity → Final UI"
                    className="aspect-video"
                  />
                </div>
              </div>
            </section>

            {/* 4. COLLABORATION & LEADERSHIP */}
            <section className="bg-slate-900/30 -mx-4 sm:-mx-8 p-8 sm:p-12 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-violet-500" aria-hidden="true" />
                Collaboration and leadership
              </h2>
              <div className="space-y-8">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Throughout the project, I used storytelling and evidence to
                  align stakeholders:
                </p>

                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  <li className="space-y-2">
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide">
                      Evidence-based alignment
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      Shared edited clips and quotes from usability sessions so
                      PMs and engineers could directly hear user confusion and
                      delight.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide">
                      Risk Reframing
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      Framed issues not just as “UX problems” but as time and
                      cost risks: for example, explaining how ambiguous
                      terminology would accumulate into training overhead across
                      610 potential R&D SEs.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide">
                      Prioritisation
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      Facilitated prioritisation workshops to decide which of
                      the 15 UX issues (5 high, 5 medium, 5 low) we would tackle
                      first, and which would be parked for a later iteration.
                    </p>
                  </li>
                  <li className="space-y-2">
                    <h4 className="font-bold text-white text-sm uppercase tracking-wide">
                      Standards Advocacy
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      Advocated for accessibility and responsive design even
                      when it meant acknowledging current technical limitations
                      and planning follow-up work, rather than ignoring them.
                    </p>
                  </li>
                </ul>

                <PlaceholderWorkshop
                  caption="Stakeholder Workshop: Prioritisation Matrix"
                  className="h-64 w-full"
                />
              </div>
            </section>

            {/* 5. OUTCOMES */}
            <section className="space-y-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-serif text-white mb-6 flex items-center gap-3">
                  <TrendingUp
                    className="w-8 h-8 text-emerald-500"
                    aria-hidden="true"
                  />
                  Outcomes
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* For Developers */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">
                    For Developers
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Clearer terminology and navigation made it easier to find
                    where to start, what to do next and how to import data.
                  </p>
                  <blockquote className="border-l-2 border-emerald-500 pl-4 italic text-slate-300">
                    “The overall layout design is user friendly”
                  </blockquote>
                  <p className="text-sm text-slate-400">
                    — confirmed reduced cognitive load
                  </p>
                </div>

                {/* For Business */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">
                    For the Business
                  </h3>
                  <ul className="space-y-3 text-slate-400 list-disc pl-4 text-sm leading-relaxed">
                    <li>
                      Estimated{" "}
                      <strong className="text-emerald-400">
                        305 hours (~1.77 months)
                      </strong>{" "}
                      of R&D training time saved by aligning portal language and
                      flows with how SEs naturally work.
                    </li>
                    <li>
                      Reduced risk of usability defects by identifying issues
                      early through targeted usability testing.
                    </li>
                    <li>
                      Stronger alignment between the ML Developer Portal and the
                      overall IFS.ai strategy.
                    </li>
                  </ul>
                </div>

                {/* For Team */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">
                    For the Team
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The MLDP squad reported feeling more proud of the portal
                    after seeing user reactions to the new experience.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The process became a reference point for how to bring UX
                    research and design into other internal AI tools.
                  </p>
                </div>
              </div>

              <PlaceholderGeneric
                caption="Testimonial: SE and Product Specialist Feedback"
                className="h-32"
              />
            </section>

            <section className="py-12">
              <PlaceholderScreenFlow
                caption="Final UI Walkthrough: End-to-End Experience"
                className="aspect-[21/9] w-full"
              />
            </section>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="border-t border-white/10 pt-12 flex justify-between items-center">
          <a
            href="/work/leadership"
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-violet-500">
              <ArrowRight className="w-4 h-4 rotate-180" aria-hidden="true" />
            </div>
            <span>Previous: Design Leadership</span>
          </a>
          <a
            href="/work/ifs-sustainability"
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span>Next: IFS Sustainability Management</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-violet-500">
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </div>
          </a>
        </div>
      </main>
    </article>
  );
}
