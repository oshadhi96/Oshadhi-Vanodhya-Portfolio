import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Briefcase,
  Heart,
  Camera,
  Mic,
  MapPin,
  Coffee,
  Star,
  Compass,
  CheckCircle2,
  Cpu,
  Layout,
  Users,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react";

import { cn } from "./ui/utils";
import { SkillsSection } from "./SkillsSection";
import { SkillsGraph } from "./SkillsGraph";
import { CareerHighlights } from "./CareerHighlights";

import profileImage from "figma:asset/55b0832fbd1bb098b6f6961c22eaa1a1bb63c6b2.png";
import mcgImage from "figma:asset/d80010668a032127fd2a112275edb4f656b5fb2c.png";
import gangImage from "figma:asset/06f507965d4651157b1f7f6451d3420a17210432.png";
import panelImage from "figma:asset/972dbe56e157c2720a291d9eccc963f7446adc1a.png";
import concertImage from "figma:asset/47aa556c3faf518dd1720b34a490f2875487e8a8.png";
import ceilingImage from "figma:asset/cdc485201be523d2faad1eae43ff3ae56478a204.png";
import oceanImage from "figma:asset/0505d1faed5a922095c6ea3f080f65fd51459bc2.png";
import beachImage from "figma:asset/3b0a6b6817c3a7b97a4e82e7d82ae23ef914c091.png";

/**
 * ✅ JS-only version (no TS types)
 */
const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex w-max will-change-transform"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export function AboutPage() {
  const valueProps = [
    {
      title: "User-First Thinking",
      description:
        "I advocate user-first thinking in cross-functional teams, ensuring we solve real problems with empathy and data-driven insights.",
      icon: Heart,
    },
    {
      title: "Design Workshops & Alignment",
      description:
        "I facilitate design workshops to drive alignment and innovation, bringing stakeholders together to create shared understanding.",
      icon: Users,
    },
    {
      title: "Scalable Design & Coaching",
      description:
        "I build scalable designs and coach teams on design maturity, creating systems that help organizations grow efficiently.",
      icon: Briefcase,
    },
    {
      title: "Data & Storytelling",
      description:
        "I bring data, usability testing, and storytelling into every decision, making complex insights accessible and actionable.",
      icon: Compass,
    },
  ];

  const timeline = [
    {
      year: "Present",
      role: "Graduate Digital Product Design Certificate",
      company: "RMIT (Part-time)",
      description:
        "Deepening expertise in advanced product design methodologies and strategic design thinking.",
    },
    {
      year: "2022 — 2026",
      role: "Senior UX Designer",
      company: "IFS",
      description:
        "IFS Cloud Project Mgmt, IFS Cloud Sustainability Mgmt, ifs.ai Developer Portal, IFS HCM",
    },
    {
      year: "2021",
      role: "Independent UX Contractor",
      company: "HiAcuity",
      description: "AI-based B2B recruitment solution",
    },
    {
      year: "2019 — 2021",
      role: "UI UX Designer",
      company: "Rootcode",
      description:
        "Startup design agency designing solutions for international clients for small to large scale companies.",
    },
    {
      year: "2017 — 2018",
      role: "Industrial Trainee",
      company: "Virtusa",
      description: "Top Tier-1 and Tier-2 Banks in UK, Europe and ASEAN",
    },
  ];

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-teal-500/30 pb-32">
      {/* 1. HERO & BIO */}
      <header className="relative pt-[178px] pb-[80px] px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl pr-[32px] pl-[32px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-7 space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight italic">
              Hello, I'm <span className="text-teal-400">Oshi</span>.
            </h1>

            <div className="space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed">
              <p>
                I'm a{" "}
                <strong className="text-white">Senior Product Designer</strong>{" "}
                passionate about shaping intuitive, high-impact digital
                experiences.
              </p>

              <p>
                With <strong className="text-white">7+ years</strong> in the
                industry — from startups to global enterprise — I specialize in
                transforming complex problems into thoughtful, scalable
                solutions that balance user needs with business outcomes.
              </p>

              <p>
                Leveraging AI-workflows, I design beautiful digital products for
                fast moving product teams. I’m driven by natural curiosity, my
                passion for human-centred design, and a continuous desire to
                improve my craft.
              </p>

              <p>
                I have contributed to shipping{" "}
                <span className="text-purple-300 font-semibold">
                  consumer-focused & SaaS enterprise products
                </span>{" "}
                with a people-focused mentality to create lasting, meaningful
                impacts on people, society, and the world.
              </p>

              <div className="pt-4 space-y-3">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                  Domain Experience
                </h3>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label="List of domain experience"
                >
                  {[
                    "Virtual Consultations",
                    "AI",
                    "Sustainability",
                    "Fitness",
                    "Health",
                    "Gamification",
                    "Construction",
                    "Education",
                    "Insurance",
                    "E-commerce",
                    "Fintech",
                    "Open Banking",
                  ].map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-slate-400 border border-white/10 hover:border-teal-500/30 hover:text-teal-400 transition-colors cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group perspective-1000">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-teal-500/10 blur-[60px] rounded-full opacity-50 pointer-events-none" />

              <div className="relative w-64 sm:w-72 lg:w-80 aspect-[3/4]">
                <div className="absolute inset-0 border border-teal-500/20 rounded-full translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />

                <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 bg-slate-800 shadow-2xl relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <motion.img
                    src={profileImage}
                    alt="Oshadhi Vanodhya"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    animate={{
                      filter: [
                        "brightness(1) saturate(1)",
                        "brightness(1.2) saturate(1.3)",
                        "brightness(1) saturate(1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-teal-500/30 mix-blend-soft-light z-10"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 1.5 HIGHLIGHTS BAND */}
      <CareerHighlights />

      <main className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 space-y-32 pt-20 relative">
        {/* keep the rest of your page exactly as you already had it */}
        {/* ... your remaining sections ... */}

        {/* 6. PERSONAL INTERESTS REEL */}
        <section className="py-20 overflow-hidden relative">
          <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 italic">
              When I am not designing 🏖️
            </h2>
          </div>

          <div className="flex relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

            <InfiniteLoopSlider duration={40}>
              {[
                { src: gangImage, caption: "Bold try-outs", rotation: -2 },
                { src: panelImage, caption: "Mentoring", rotation: 1 },
                {
                  src: concertImage,
                  caption: "Listening to BnS music",
                  rotation: -1,
                },
                {
                  src: ceilingImage,
                  caption: "Ticking Bucket list",
                  rotation: 2,
                },
                {
                  src: oceanImage,
                  caption: "Capturing blue oceans",
                  rotation: -2,
                },
                { src: beachImage, caption: "Mobile Photography", rotation: 1 },
                { src: mcgImage, caption: "Enoy with family", rotation: -1 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative w-40 md:w-52 flex-shrink-0 mx-4"
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                >
                  <div className="bg-white p-2.5 pb-6 rounded shadow-xl transition-transform hover:scale-105 hover:z-10 duration-300">
                    <div className="aspect-[3/4] overflow-hidden bg-slate-100 mb-3">
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-center font-serif italic text-slate-800 text-base">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </InfiniteLoopSlider>
          </div>
        </section>
      </main>
    </article>
  );
}
