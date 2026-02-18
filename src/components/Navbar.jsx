import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Speaking & Journal", href: "/journal" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/#kind-words" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="relative rounded-full border border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-[0_4px_20px_-1px_rgba(0,0,0,0.3)] px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold tracking-tight text-white hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                O
              </span>
              <span className="hidden sm:inline-block font-serif italic text-lg">
                Oshi Vanodhya
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => {
                  const isHash = link.href.startsWith("/#");
                  const elementId = isHash ? link.href.replace("/#", "") : null;

                  return (
                    <li key={link.name}>
                      {isHash ? (
                        <Link
                          to="/"
                          className="text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors"
                          onClick={(e) => {
                            setTimeout(() => {
                              const el = document.getElementById(elementId);
                              if (el) {
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }, 300);
                          }}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm font-medium text-slate-300 hover:text-violet-400 transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              <Button asChild size="sm" className="rounded-full">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-300 hover:text-white"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#020617] pt-28 px-6 lg:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isHash = link.href.startsWith("/#");
                const elementId = isHash ? link.href.replace("/#", "") : null;

                return (
                  <li key={link.name}>
                    {isHash ? (
                      <Link
                        to="/"
                        className="text-2xl font-serif italic text-slate-300 hover:text-violet-400 block py-2 border-b border-white/5"
                        onClick={() => {
                          setIsOpen(false);
                          setTimeout(() => {
                            const el = document.getElementById(elementId);
                            if (el) {
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }, 300);
                        }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-2xl font-serif italic text-slate-300 hover:text-violet-400 block py-2 border-b border-white/5"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6">
              <Button asChild className="w-full rounded-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
