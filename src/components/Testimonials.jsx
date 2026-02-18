import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { Quote, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// ⚠️ These "figma:asset/..." imports often DON'T work in normal Vite.
// If you get an error, move images to src/assets and import like:
// import adiImage from "../assets/adi.png";
// import michaelImage from "../assets/michael.png";
import adiImage from "figma:asset/8fa0ea6907f49e5ba443dc4837bbaa6a5d8f1aa3.png";
import michaelImage from "figma:asset/5c6ea3751323e2dd448f7f8bda5d6136273a3090.png";

const testimonials = [
  {
    id: 1,
    text: "Oshadhi is a very knowledgeable UX person, and she is also very structured and able to drive progress. When she joined IFS I was impressed of her project management skills and combined with her UX knowledge she become a key to IFS well needed change in mindset. ",
    author: "Thomas Wiberg 🇸🇪",
    role: "VP of Projects group, IFS",
    tags: ["User Centricity", "Leadership"],
  },
  {
    id: 2,
    text: "Oshadhi is an excellent UX designer. She has been instrumental in taking our AI-based web application and putting into a well thought out UX design. She had also provided continuous feedback and helped enhance the user experience.",
    author: "Michael Cooray 🇦🇺",
    role: "CEO, HiAcuity",
    tags: ["Problem solving", "Innovation"],
  },
  {
    id: 3,
    text: "I've worked closely with Oshadi and her desktop design file just lights up the room! It was great working with Oshi, she always exchanged tips about designing and UX.",
    author: "Adi Hettiarachchi 🇦🇺",
    role: "Business Analysy at Australian Physiotherapy Association",
    tags: ["Problem Solving", "Interaction design"],
  },
  {
    id: 4,
    text: "Oshadhi is one of the best UIUX designers I have worked with and what keeps her ahead of many other designers are her her ability to emphasize with user and requirements elicitation at a BA capacity. She keeps learning and adheres with best practices and standards as much as possible. ",
    author: "Nimesh K. 🇱🇰",
    role: "Senior Project Manager, Rootcode",
    tags: ["Systems Thinking", "Process"],
  },
  {
    id: 5,
    text: "You trusted me to become a great UIUX Designer and gave me the chance to be the best I am. Thank you for everything you have taught me so far.",
    author: "Dinushi S.🇱🇰",
    role: "Associate UI /UX Designer, Rootcode ",
    tags: ["Mentoring"],
  },
  {
    id: 6,
    text: "I've seen her play a key role in shaping the early direction of our sustainability management efforts. She demonstrated strong leadership by proactively identifying user needs and translating them into intuituve design flows that aligned with our strategic goals.",
    author: "Champika S.🇱🇰",
    role: "Principal Programme Manager, IFS",
    tags: ["Design Leadership", "User Centricity"],
  },
];

// JS version: no Record<number, string>, just a plain object
const USER_IMAGES = {
  1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TY68Zxf1H9r-1TvRpqASNcuz-WR8A4NfFQ&s", // Thomas
  2: michaelImage, // Michael
  3: adiImage, // Adi
  4: "https://media.licdn.com/dms/image/v2/C5603AQFxbEyIQnhDsg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1620235225601?e=2147483647&v=beta&t=HwvwEOVdTMsFYAmbt-bA7S-oPxHAQupFKN2cyKysBXk", // Nimesh
  5: "https://media.licdn.com/dms/image/v2/D5603AQHPRauYy10hcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702273987897?e=2147483647&v=beta&t=c9M4ZR6RHjzE9cOUCi1ITv5BUllOLyU6VO5pMKL-X98", // Dinushi
  // 6: (no image provided)
};

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Keyboard navigation (JS version: removed KeyboardEvent type)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section
      id="kind-words"
      className="py-24 relative bg-[#020617] overflow-hidden flex flex-col items-center justify-center min-h-[800px]"
    >
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }
        .pause-on-hover:hover,
        .pause-on-hover:focus-within {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left,
          .animate-scroll-right,
          .animate-scroll-up {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-3 h-3 text-violet-300" />
            <span className="text-xs font-medium text-violet-200 uppercase tracking-wider">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6">
            Kind Words
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg font-light">
            Feedback from leaders, colleagues, and clients I&apos;ve had the
            privilege to work with.
          </p>
        </div>

        {/* Desktop: Horizontal Marquees */}
        <div className="hidden md:flex flex-col gap-10 md:gap-14 relative">
          {/* Gradient Masks for edges */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

          {/* Row 1: Leftward Scroll */}
          <div className="flex overflow-hidden group">
            <div className="flex gap-6 md:gap-8 pl-6 md:pl-8 animate-scroll-left pause-on-hover w-max will-change-transform">
              {[...testimonials, ...testimonials]
                .filter((_, i) => i % 2 === 0)
                .map((testimonial, i) => {
                  const imgUrl = USER_IMAGES[testimonial.id];

                  return (
                    <div
                      key={`row1-${testimonial.id}-${i}`}
                      className="w-[350px] md:w-[500px] shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-[23px]"
                      tabIndex={0}
                    >
                      <div className="h-full w-full p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/0 overflow-hidden group/card hover:scale-[1.02] transition-transform duration-300">
                        <div className="relative bg-[#0B1021]/80 backdrop-blur-xl p-8 md:p-10 rounded-[23px] h-full flex flex-col border border-white/5 transition-colors hover:bg-[#0B1021]/90">
                          <Quote className="w-8 h-8 text-violet-400/40 mb-6" />

                          <div className="flex-grow mb-8">
                            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                              &quot;{testimonial.text}&quot;
                            </p>
                          </div>

                          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                            <Avatar className="h-12 w-12 border border-white/10 shadow-lg">
                              {imgUrl && (
                                <img
                                  src={imgUrl}
                                  alt={testimonial.author}
                                  className="aspect-square h-full w-full object-cover"
                                />
                              )}
                              <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-medium">
                                {testimonial.author?.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="text-white font-medium text-base">
                                {testimonial.author}
                              </h4>
                              <p className="text-violet-200 text-sm">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Row 2: Rightward Scroll */}
          <div className="flex overflow-hidden group">
            <div className="flex gap-6 md:gap-8 pl-6 md:pl-8 animate-scroll-right pause-on-hover w-max will-change-transform">
              {[...testimonials, ...testimonials]
                .filter((_, i) => i % 2 !== 0)
                .map((testimonial, i) => {
                  const imgUrl = USER_IMAGES[testimonial.id];

                  return (
                    <div
                      key={`row2-${testimonial.id}-${i}`}
                      className="w-[350px] md:w-[500px] shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-[23px]"
                      tabIndex={0}
                    >
                      <div className="h-full w-full p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/0 overflow-hidden group/card hover:scale-[1.02] transition-transform duration-300">
                        <div className="relative bg-[#0B1021]/80 backdrop-blur-xl p-8 md:p-10 rounded-[23px] h-full flex flex-col border border-white/5 transition-colors hover:bg-[#0B1021]/90">
                          <Quote className="w-8 h-8 text-indigo-400/40 mb-6" />

                          <div className="flex-grow mb-8">
                            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                              &quot;{testimonial.text}&quot;
                            </p>
                          </div>

                          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                            <Avatar className="h-12 w-12 border border-white/10 shadow-lg">
                              {imgUrl && (
                                <img
                                  src={imgUrl}
                                  alt={testimonial.author}
                                  className="aspect-square h-full w-full object-cover"
                                />
                              )}
                              <AvatarFallback className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-medium">
                                {testimonial.author?.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="text-white font-medium text-base">
                                {testimonial.author}
                              </h4>
                              <p className="text-indigo-200 text-sm">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Mobile: Single Vertical Marquee */}
        <div className="md:hidden relative h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-col gap-6 pb-6 animate-scroll-up pause-on-hover will-change-transform">
            {[...testimonials, ...testimonials].map((testimonial, i) => {
              const imgUrl = USER_IMAGES[testimonial.id];

              return (
                <div
                  key={`mobile-${testimonial.id}-${i}`}
                  className="w-full p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-white/0 overflow-hidden shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-[23px]"
                  tabIndex={0}
                >
                  <div className="relative bg-[#0B1021]/90 backdrop-blur-md p-6 rounded-[23px] h-full">
                    <Quote className="w-6 h-6 text-violet-500/30 mb-4" />
                    <p className="text-base text-slate-200 leading-relaxed font-light mb-6">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-white/10">
                        {imgUrl && (
                          <img
                            src={imgUrl}
                            alt={testimonial.author}
                            className="aspect-square h-full w-full object-cover"
                          />
                        )}
                        <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-xs">
                          {testimonial.author?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {testimonial.author}
                        </h4>
                        <p className="text-slate-400 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
