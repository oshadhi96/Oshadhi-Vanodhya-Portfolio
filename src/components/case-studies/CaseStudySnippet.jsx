import { cn } from "../ui/utils";
import { Target, AlertTriangle, Zap, TrendingUp } from "lucide-react";

export function CaseStudySnippet({
  goal,
  constraints,
  keyMove,
  outcome,
  className,
  color = "indigo",
}) {
  // Map color names to Tailwind classes dynamically
  const colors = {
    teal: "text-teal-400 border-teal-500/30 bg-teal-500/5",
    violet: "text-violet-400 border-violet-500/30 bg-violet-500/5",
    indigo: "text-indigo-400 border-indigo-500/30 bg-indigo-500/5",
    cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
    emerald: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    amber: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    rose: "text-rose-400 border-rose-500/30 bg-rose-500/5",
    yellow: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5",
  };

  const activeColor = colors[color] || colors.indigo;
  const [textColor, borderColor, bgColor] = activeColor.split(" ");

  const items = [
    { label: "Goal", icon: Target, text: goal },
    { label: "Constraints", icon: AlertTriangle, text: constraints },
    { label: "Key Move", icon: Zap, text: keyMove },
    { label: "Outcome", icon: TrendingUp, text: outcome },
  ];

  return (
    <div
      className={cn(
        "w-full rounded-2xl border backdrop-blur-sm p-6 sm:p-8 my-12",
        borderColor,
        bgColor,
        className,
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="relative flex flex-col gap-2">
              {/* Divider for desktop (not on first item) */}
              {idx > 0 && (
                <div className="hidden lg:block absolute left-0 top-2 bottom-2 w-px bg-white/10 -ml-4" />
              )}

              <div className="flex items-center gap-2 mb-1">
                <Icon className={cn("w-4 h-4", textColor)} />
                <h3
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest opacity-70",
                    textColor,
                  )}
                >
                  {item.label}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
