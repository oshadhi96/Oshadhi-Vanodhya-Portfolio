import { motion } from "motion/react";
import { memo, useRef, useState } from "react";
import { Clock, Users, TrendingUp } from "lucide-react";

const metrics = [
  {
    id: 1,
    value: "1.1 mo",
    label: "R&D Onboarding",
    description:
      "Reduced time for R&D teams through UX improvements for an AI developer portal.",
    icon: Clock,
  },
  {
    id: 2,
    value: "33%",
    label: "First Contact Resolution",
    description:
      "Improvement achieved for a sustainability focused SaaS product.",
    icon: Users,
  },
  {
    id: 3,
    value: "$300M",
    label: "Revenue Potential",
    description:
      "Influenced over 300M AUD in partner revenue through UX and design systems.",
    icon: TrendingUp,
  },
];

export function ImpactMetrics() {
  return (
    <section className="relative z-20 -mt-20 px-4 md:px-6 mb-20">
      <div className="container mx-auto max-w-8xl">
        <ul className="grid grid-cols-1 sm:mt-24 md:mt-16 md:grid-cols-3 gap-6 mx-[0px] my-[12px] sm:my-[0px]">
          {metrics.map((metric, index) => (
            <li key={metric.id} className="h-full">
              <SpotlightCard metric={metric} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// --- Spotlight Card Component ---
const SpotlightCard = memo(function SpotlightCard({ metric, index }) {
  const Icon = metric.icon;
  const divRef = useRef(null);

  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => setOpacity(1);
  const handleBlur = () => setOpacity(0);
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden"
      tabIndex={0}
    >
      {/* 1. Spotlight Border Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.4), transparent 40%)`,
        }}
      />

      {/* 2. Content Container */}
      <div className="relative h-full bg-slate-950/90 backdrop-blur-md rounded-[15px] p-6 md:p-8 m-[1px]">
        {/* 3. Inner Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`,
          }}
        />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/20 text-violet-400">
              <Icon className="w-6 h-6" />
            </div>
          </div>

          <div className="mt-auto">
            <h3 className="text-4xl md:text-5xl font-serif italic text-white mb-2 tracking-tight">
              {metric.value}
            </h3>

            <p className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-2">
              {metric.label}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              {metric.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
