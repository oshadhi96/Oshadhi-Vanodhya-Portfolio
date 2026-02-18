import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, X, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PasswordModal({
  isOpen,
  onClose,
  onUnlock,
  onViewAsGuest,
  projectTitle,
  guestOverviewPath,
}) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPassword("");
      setError("");
      setShowPassword(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password.trim()) {
      setError("Please enter a password");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const success = await onUnlock(password);
      if (!success) {
        setError("Incorrect password. Please try again.");
      }
    } catch (err) {
      setError("Failed to validate password. Please try again.");
      // eslint-disable-next-line no-console
      console.error("Password validation error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewAsGuest = () => {
    setPassword("");
    setError("");

    // If a guest overview path is provided, navigate to it
    if (guestOverviewPath) {
      navigate(guestOverviewPath);
      return;
    }

    // Otherwise use the original callback
    if (onViewAsGuest) onViewAsGuest();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border-0 sm:border border-white/10 w-full h-full sm:h-auto sm:rounded-2xl shadow-2xl max-w-md relative overflow-hidden flex flex-col justify-center sm:block"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white z-10"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-violet-400" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white text-center mb-2">
                  Password Protected
                </h2>
                <p className="text-slate-400 text-center mb-6 text-sm">
                  {projectTitle}
                </p>

                {/* Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Enter Password
                    </label>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Only allow alphanumeric characters and limit to 8 characters
                          const sanitized = value
                            .replace(/[^a-zA-Z0-9]/g, "")
                            .slice(0, 8);
                          setPassword(sanitized);
                          setError("");
                        }}
                        placeholder="••••••••"
                        maxLength={8}
                        className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all pr-12"
                        autoFocus
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white transition-colors"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2"
                      >
                        {error}
                      </motion.p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Unlocking..." : "Unlock Full Case Study"}
                  </button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-slate-900 text-slate-500">or</span>
                  </div>
                </div>

                {/* Guest View Button */}
                {!String(projectTitle || "")
                  .toLowerCase()
                  .includes("design leadership") && (
                  <button
                    type="button"
                    onClick={() => {
                      const title = String(projectTitle || "");

                      if (title.includes("Sustainability")) {
                        navigate("/work/ifs-sustainability-guest-overview");
                        return;
                      }
                      if (title.includes("IFS.ai")) {
                        navigate("/work/ifs-ai-guest-overview");
                        return;
                      }

                      handleViewAsGuest();
                    }}
                    className="w-full px-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-white/10 text-white rounded-lg font-medium transition-colors"
                  >
                    View Overview as Guest
                  </button>
                )}

                <p className="text-xs text-slate-500 text-center mt-4">
                  Contact me for access to full case studies
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
