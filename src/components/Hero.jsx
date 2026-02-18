import React, { useEffect, useMemo, useRef } from "react";
import { ArrowRight, Zap, Heart, MessageCircle } from "lucide-react";
import imgProfile from "figma:asset/1890d7cb6410d0099d2a0774f1b11e270f3ac316.png";
import { motion } from "motion/react";

const floatingAnimation = {
  initial: { y: 0, rotate: 0 },
  animate: (i) => ({
    y: [0, -15, 0],
    rotate: [0, i % 2 === 0 ? 2 : -2, 0],
    transition: {
      duration: 5 + i,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

// Animation configurations - extracted outside component for better performance
const ANIMATION_CONFIG = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
  transition: {
    duration: 0.8,
    ease: [0.25, 0.4, 0.25, 1],
  },
};

export function Hero() {
  // ✅ Correct JS ref
  const audioRef = useRef(null);

  // Initialize audio once
  useEffect(() => {
    const audio = new Audio(
      "https://www.soundjay.com/communication/sounds/pencil-1.mp3",
    );
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        try {
          audioRef.current.pause();
        } catch {}
        audioRef.current = null;
      }
    };
  }, []);

  // Memoized transition variants with delays
  const transitionDelay0 = useMemo(
    () => ({ ...ANIMATION_CONFIG.transition, delay: 0 }),
    [],
  );
  const transitionDelay01 = useMemo(
    () => ({ ...ANIMATION_CONFIG.transition, delay: 0.1 }),
    [],
  );
  const transitionDelay02 = useMemo(
    () => ({ ...ANIMATION_CONFIG.transition, delay: 0.2 }),
    [],
  );
  const transitionDelay04 = useMemo(
    () => ({ ...ANIMATION_CONFIG.transition, delay: 0.4 }),
    [],
  );

  const playHoverAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      a.currentTime = 0;
      a.play().catch(() => {});
    } catch {}
  };

  const stopHoverAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      a.pause();
      a.currentTime = 0;
    } catch {}
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden mt-[-20px] pt-32 pb-12 md:pt-[130px] md:pb-32 min-h-[90dvh] flex items-center"
    >
      {/* Background Ambient Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto max-w-8xl p-[0px] md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 px-[16px] py-[0px]">
            <div className="space-y-6">
              <motion.div
                initial={ANIMATION_CONFIG.initial}
                animate={ANIMATION_CONFIG.animate}
                transition={transitionDelay0}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm w-fit"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-medium text-violet-200 tracking-wide uppercase">
                  Open to work
                </span>
              </motion.div>

              <motion.h1
                initial={ANIMATION_CONFIG.initial}
                animate={ANIMATION_CONFIG.animate}
                transition={transitionDelay01}
                className="text-5xl md:text-6xl lg:text-7xl font-serif italic tracking-tight text-white leading-[1.1] text-glow relative"
              >
                Turning complexity into clear, adoption-ready experiences
                <br className="hidden md:block" />
              </motion.h1>

              <motion.p
                initial={ANIMATION_CONFIG.initial}
                animate={ANIMATION_CONFIG.animate}
                transition={transitionDelay02}
                className="text-md md:text-xl text-slate-300/90 max-w-[600px] leading-relaxed font-light"
              >
                Senior Product Designer (7+ years) designing AI-forward features
                for consumer and enterprise products used by 3.5M+ end users
              </motion.p>
            </div>

            <motion.div
              initial={ANIMATION_CONFIG.initial}
              animate={ANIMATION_CONFIG.animate}
              transition={transitionDelay04}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary Action */}
              <a
                href="/#work"
                className="shiny-cta group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("work");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                  else window.location.href = "/#work";
                }}
                onMouseEnter={playHoverAudio}
                onMouseLeave={stopHoverAudio}
                aria-label="View case studies"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-center">
                  View case studies
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] mt-12 lg:mt-16 w-full block perspective-1000">
            {/* Main Portrait Card */}
            <motion.div
              custom={1}
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="absolute top-4 left-1/2 -translate-x-1/2 lg:top-10 lg:left-10 lg:translate-x-0 w-72 lg:w-80 h-[400px] lg:h-[450px] bg-white rounded-[2rem] shadow-2xl p-4 rotate-[-3deg] z-20"
            >
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <img
                  src={imgProfile}
                  alt="Portrait of Oshadhi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg">
                  <p className="text-xs font-bold text-slate-900">
                    Oshadhi Vanodhya
                  </p>
                  <p className="text-[10px] text-slate-600">
                    Australia / Europe / APAC
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Secondary "Moment" Card */}
            <motion.div
              custom={2}
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="absolute top-64 right-1/2 translate-x-1/2 lg:top-32 lg:right-0 lg:translate-x-0 w-60 lg:w-64 h-64 lg:h-80 bg-white rounded-[2rem] shadow-xl p-3 rotate-[6deg] z-10"
            >
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-slate-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                  alt="Work workshop"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium text-sm">
                    Strategy Workshops
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Stickers */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-4 lg:right-10 bg-yellow-400 text-yellow-950 px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12 z-30 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Problem Solver</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 lg:bottom-20 left-4 lg:left-0 bg-pink-600 text-white px-5 py-3 rounded-full font-bold shadow-lg transform -rotate-6 z-30 flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Empathy First</span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-32 right-8 lg:bottom-40 lg:right-20 bg-white p-3 rounded-2xl shadow-xl z-30"
            >
              <div className="bg-blue-100 rounded-xl p-2 text-blue-600">
                <MessageCircle className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
