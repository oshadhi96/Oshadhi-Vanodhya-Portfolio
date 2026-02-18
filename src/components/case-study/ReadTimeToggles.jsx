import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "../ui/utils";

interface Section {
  id: string;
  label: string;
  duration: string;
}

interface ReadTimeTogglesProps {
  sections: Section[];
}

export function ReadTimeToggles({ sections }: ReadTimeTogglesProps) {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for trigger point

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="sticky top-4 z-50 w-full max-w-fit mx-auto mb-12">
      <nav 
        className="flex items-center p-1 bg-slate-900/80 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl shadow-black/50"
        role="tablist"
        aria-label="Case study read modes"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            role="tab"
            aria-selected={activeSection === section.id}
            aria-controls={section.id}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10",
              activeSection === section.id ? "text-white" : "text-slate-400 hover:text-slate-200"
            )}
          >
            {activeSection === section.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-violet-600 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="flex items-center gap-2">
              {section.label}
              <span className={cn("text-[10px] uppercase opacity-70", activeSection === section.id ? "text-violet-200" : "text-slate-500")}>
                {section.duration}
              </span>
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
