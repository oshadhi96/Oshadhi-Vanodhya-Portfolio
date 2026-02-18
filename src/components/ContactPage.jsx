import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Quote } from "lucide-react";

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();

  const regenerateCaptcha = () => {
    setCaptcha({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1,
    });
  };

  useEffect(() => {
    regenerateCaptcha();

    // Load Tally Embed script (JS-safe)
    const scriptSrc = "https://tally.so/widgets/embed.js";
    const d = document;

    const loadEmbeds = () => {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(
          (el) => {
            el.src = el.dataset.tallySrc;
          },
        );
      }
    };

    if (typeof window !== "undefined" && window.Tally) {
      loadEmbeds();
    } else if (d.querySelector(`script[src="${scriptSrc}"]`) === null) {
      const s = d.createElement("script");
      s.src = scriptSrc;
      s.onload = loadEmbeds;
      s.onerror = loadEmbeds;
      d.body.appendChild(s);
    } else {
      loadEmbeds();
    }
  }, []);

  const onSubmit = async (data) => {
    // captcha validation (when using your form)
    if (data?.captcha != null) {
      const userAnswer = parseInt(String(data.captcha), 10);
      if (Number.isNaN(userAnswer) || userAnswer !== captcha.a + captcha.b) {
        setError("captcha", {
          type: "manual",
          message: "Incorrect answer, please try again.",
        });
        return;
      }
    }

    setIsSubmitting(true);

    // Construct email body
    const subject = `New Inquiry from ${data?.name || "Someone"}`;
    const body = `Name: ${data?.name || ""}
Email: ${data?.email || ""}
Organization: ${data?.organization || "N/A"}
Interests: ${
      data?.interests && data.interests.length > 0
        ? data.interests.join(", ")
        : "None"
    }

Message:
${data?.message || ""}`;

    const mailtoLink = `mailto:oshadhi.ux@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    await new Promise((resolve) => setTimeout(resolve, 1500));

    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    regenerateCaptcha();
  };

  // You can keep this for your old form (currently commented out)
  // const interestOptions = [
  //   "Hiring for a role",
  //   "Freelance collaboration",
  //   "Speaking opportunity",
  //   "Mentoring",
  //   "Other",
  // ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-teal-500/30 pt-32 pb-20">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="h-px w-8 bg-teal-500"></span>
            <span className="text-teal-400 uppercase tracking-widest text-sm font-bold">
              Get in Touch
            </span>
            <span className="h-px w-8 bg-teal-500"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 italic">
            Let's start a conversation
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to hire a lead designer, collaborate on a
            project, invite me to speak, or just want to chat about design—I'd
            love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-slate-900/40 border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">
                  Message Prepared!
                </h3>
                <p className="text-slate-400 mb-8">
                  Your default email client should open shortly with the message
                  details. If it doesn't, please email me manually.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-teal-400 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {/* 
                  If you want to re-enable the custom form instead of Tally:
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">...</form> 
                */}

                {/* Tally embed */}
                <iframe
                  data-tally-src="https://tally.so/embed/mVlzkg?alignLeft=1&hideTitle=1&transparentBackground=0&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="836"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Portfolio"
                />
              </>
            )}
          </motion.div>

          {/* Sidebar Info & Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Email Block */}
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">Prefer email?</h3>
              <p className="text-slate-400 text-sm mb-4">
                You can email me directly at:
              </p>
              <a
                href="mailto:oshadhi.ux@gmail.com"
                className="text-teal-400 hover:text-teal-300 font-medium break-all"
              >
                oshadhi.ux@gmail.com
              </a>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-teal-900/20 to-slate-900/40 border border-teal-500/20 rounded-2xl p-6 relative">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-teal-500/20" />
              <p className="relative z-10 text-slate-300 italic leading-relaxed mb-4 pt-4">
                "Oshadhi is one of those rare designers who is just as
                comfortable talking strategy with executives as she is refining
                pixels. She was a joy to work with."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  JS
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    James Smith
                  </div>
                  <div className="text-slate-500 text-xs">
                    Product Director, TechCo
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Optional: If you ever turn the custom form back on */}
        {/* <form onSubmit={handleSubmit(onSubmit)} /> */}
      </div>
    </div>
  );
}
