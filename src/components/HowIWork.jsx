import { motion, useScroll, useSpring } from "motion/react";
import { useRef, memo, useMemo } from "react";
import { UserSearch, Target, MessageSquareMore, Sparkles } from "lucide-react";

const principles = [
  {
    id: 1,
    title: "User First",
    step: "01",
    description:
      "I advocate for real users by running dedicated research sessions, analyzing usage metrics, and diving deep into support data.",
    icon: UserSearch,
  },
  {
    id: 2,
    title: "Outcome Driven",
    step: "02",
    description:
      "Every pixel serves a purpose. I connect design decisions directly to business outcomes like increased adoption and workflow efficiency.",
    icon: Target,
  },
  {
    id: 3,
    title: "Collaborative & Clear",
    step: "03",
    description:
      "I bring clarity to chaos. I facilitate workshops to align stakeholders and create structure in complex initiatives.",
    icon: MessageSquareMore,
  },
];

// Shared animation configurations
const HEADER_ANIMATION = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const CARD_ANIMATION_BASE = {
  initial: { opacity: 0, y: 50, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-10%" },
};

const CARD_TRANSITION_BASE = {
  duration: 0.8,
  ease: [0.25, 0.4, 0.25, 1],
};

// Scroll configuration constants
const SCROLL_CONFIG = {
  offset: ["start center", "end center"],
};

const SPRING_CONFIG = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

export function HowIWork() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: SCROLL_CONFIG.offset,
  });

  const scaleY = useSpring(scrollYProgress, SPRING_CONFIG);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32 relative bg-[#020617] overflow-hidden"
    >
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] bg-violet-600/5 rounded-[100%] blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-8xl px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          {...HEADER_ANIMATION}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span className="text-xs font-medium text-violet-200 tracking-wide uppercase">
              Methodology
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-white mb-6 tracking-tight">
            How I bridge{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              chaos & clarity
            </span>
          </h2>

          <p className="text-[rgb(208,215,225)] text-base md:text-lg font-light leading-relaxed max-w-sm md:max-w-none mx-auto">
            A non-linear process built on empathy, data, and clear
            communication.
          </p>
        </motion.div>

        {/* --- The Timeline Layout --- */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Beam (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2 z-0">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-violet-500 shadow-[0_0_20px_2px_rgba(139,92,246,0.3)] will-change-transform"
            />
          </div>

          <ol
            className="space-y-12 md:space-y-32 list-none m-0 p-0"
            aria-label="Process steps"
          >
            {principles.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <li key={item.id}>
                  <TimelineCard item={item} index={index} isEven={isEven} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

// Memoized TimelineCard component
const TimelineCard = memo(function TimelineCard({ item, index, isEven }) {
  const Icon = item.icon;

  const cardTransition = useMemo(
    () => ({ ...CARD_TRANSITION_BASE, delay: index * 0.1 }),
    [index],
  );

  return (
    <motion.div
      {...CARD_ANIMATION_BASE}
      transition={cardTransition}
      className={`relative flex flex-row items-start md:items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Spacer on desktop */}
      <div className="hidden md:block flex-1 w-full" />

      {/* Central Node */}
      <div className="absolute left-8 md:relative md:left-auto md:mx-8 w-4 h-4 md:w-16 md:h-16 flex items-center justify-center shrink-0 z-10 -translate-x-1/2 mt-8 md:mt-0">
        {/* Desktop Node */}
        <div className="hidden md:flex absolute inset-0 bg-[#020617] rounded-full border border-slate-700" />
        <div className="hidden md:flex absolute inset-2 bg-slate-900 rounded-full items-center justify-center border border-white/5 shadow-inner">
          <Icon className="w-5 h-5 text-slate-500 group-hover:text-violet-400 transition-colors" />
        </div>

        {/* Mobile Node Dot */}
        <div className="md:hidden w-4 h-4 rounded-full bg-[#020617] border-2 border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

        {/* Glow Halo */}
        <div className="absolute inset-[-4px] md:inset-0 rounded-full border border-violet-500/30 animate-pulse" />
      </div>

      {/* Content Card */}
      <div className="flex-1 w-full pl-16 md:pl-0">
        <div className="group relative bg-[#0B1021]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(124,58,237,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          <div className="relative z-10">
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-between mb-4 gap-2 md:gap-0">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-violet-400 md:hidden" />
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  {item.title}
                </h3>
              </div>
              <span className="text-3xl md:text-4xl font-serif italic text-white/5 group-hover:text-violet-500/20 transition-colors duration-500">
                {item.step}
              </span>
            </div>

            <p className="text-[rgb(208,215,225)] leading-relaxed font-light text-base md:text-lg">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
