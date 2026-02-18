import { cn } from "../ui/utils";
import {
  Map,
  GitMerge,
  Users,
  ArrowLeftRight,
  Image as ImageIcon,
  Quote,
  Layout,
  PenTool,
  Monitor,
} from "lucide-react";

export function PlaceholderJourneyMap({
  caption = "User Journey Map",
  className,
}) {
  return (
    <div
      className={cn(
        "group w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 relative",
        className,
      )}
    >
      <div className="absolute inset-0 bg-slate-950/50 z-0" />
      <div className="relative z-10 w-full max-w-8xl h-full min-h-[200px] flex flex-col items-center justify-center p-8">
        {/* Abstract Chart SVG */}
        <svg
          className="w-full  h-auto opacity-20 group-hover:opacity-30 transition-opacity"
          viewBox="0 0 400 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 80 C 100 80, 100 20, 200 50 S 300 80, 390 20"
            stroke="currentColor"
            strokeWidth="2"
            className="text-violet-500"
            strokeDasharray="4 4"
          />
          <circle cx="10" cy="80" r="4" className="fill-violet-500" />
          <circle cx="200" cy="50" r="4" className="fill-violet-500" />
          <circle cx="390" cy="20" r="4" className="fill-violet-500" />
          {/* Grid lines */}
          <line
            x1="0"
            y1="90"
            x2="400"
            y2="90"
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate-700"
          />
        </svg>
        <div className="mt-4 flex items-center gap-2 text-slate-500">
          <Map className="w-4 h-4" />
          <span className="text-sm font-mono uppercase tracking-wider">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PlaceholderScreenFlow({
  caption = "Screen Flow Diagram",
  className,
}) {
  return (
    <div
      className={cn(
        "group w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 relative",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/20 to-transparent opacity-50" />
      <div className="relative z-10 w-full h-full min-h-[300px] flex flex-col items-center justify-center p-8">
        {/* Abstract Flow SVG */}
        <svg
          className="w-full max-w-xs h-auto opacity-20 group-hover:opacity-30 transition-opacity"
          viewBox="0 0 300 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="20"
            y="20"
            width="60"
            height="100"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-400"
          />
          <rect
            x="120"
            y="50"
            width="60"
            height="100"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-400"
          />
          <rect
            x="220"
            y="80"
            width="60"
            height="100"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-400"
          />
          {/* Arrows */}
          <path
            d="M85 70 H 115"
            stroke="currentColor"
            strokeWidth="2"
            className="text-violet-500"
            markerEnd="url(#arrow)"
          />
          <path
            d="M185 100 H 215"
            stroke="currentColor"
            strokeWidth="2"
            className="text-violet-500"
            markerEnd="url(#arrow)"
          />
        </svg>
        <div className="mt-4 flex items-center gap-2 text-slate-500">
          <GitMerge className="w-4 h-4" />
          <span className="text-sm font-mono uppercase tracking-wider">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PlaceholderWorkshop({
  caption = "Workshop & Whiteboarding",
  className,
}) {
  return (
    <div
      className={cn(
        "group w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 relative",
        className,
      )}
    >
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 w-full h-full min-h-[250px] flex flex-col items-center justify-center p-8">
        {/* Abstract Sticky Notes */}
        <div className="relative w-32 h-32 opacity-30 group-hover:opacity-40 transition-opacity transform rotate-3">
          <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-500/20 border border-yellow-500/40 rounded transform -rotate-6" />
          <div className="absolute top-4 right-0 w-16 h-16 bg-pink-500/20 border border-pink-500/40 rounded transform rotate-12" />
          <div className="absolute bottom-0 left-4 w-16 h-16 bg-blue-500/20 border border-blue-500/40 rounded transform -rotate-3" />
        </div>

        <div className="mt-4 flex items-center gap-2 text-slate-500">
          <Users className="w-4 h-4" />
          <span className="text-sm font-mono uppercase tracking-wider">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PlaceholderBeforeAfter({
  caption = "Before & After Comparison",
  className,
}) {
  return (
    <div
      className={cn(
        "group w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 relative",
        className,
      )}
    >
      <div className="relative z-10 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzM0ODA5NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt={caption}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
          <div className="flex items-center gap-2 text-slate-300">
            <ArrowLeftRight className="w-4 h-4" />
            <span className="text-sm font-mono uppercase tracking-wider">
              {caption}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaceholderGeneric({
  caption = "Image Placeholder",
  className,
}) {
  return (
    <div
      className={cn(
        "group w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 relative",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent" />
      <div className="relative z-10 w-full h-full min-h-[250px] flex flex-col items-center justify-center p-8">
        <ImageIcon className="w-12 h-12 text-slate-700 mb-4 group-hover:text-slate-600 transition-colors" />
        <div className="flex items-center gap-2 text-slate-500">
          <span className="text-sm font-mono uppercase tracking-wider">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PlaceholderUserQuote({ caption = "User Quote", className }) {
  return (
    <div
      className={cn(
        "group w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 relative p-8 flex flex-col items-center justify-center",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-50" />
      <Quote className="w-12 h-12 text-teal-500/30 mb-4" />
      <div className="w-3/4 space-y-2 opacity-30 group-hover:opacity-40 transition-opacity">
        <div className="h-2 bg-slate-400 rounded-full w-full" />
        <div className="h-2 bg-slate-400 rounded-full w-5/6 mx-auto" />
        <div className="h-2 bg-slate-400 rounded-full w-4/6 mx-auto" />
      </div>
      <div className="mt-6 flex items-center gap-2 text-slate-500 relative z-10">
        <span className="text-sm font-mono uppercase tracking-wider">
          {caption}
        </span>
      </div>
    </div>
  );
}

export function PlaceholderUserStoryMap({
  caption = "User Story Map",
  className,
}) {
  return (
    <div
      className={cn(
        "group w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 relative",
        className,
      )}
    >
      <div className="relative z-10 w-full h-full min-h-[200px] flex flex-col items-center justify-center p-8">
        {/* Grid of cards */}
        <div className="grid grid-cols-4 gap-2 opacity-30 group-hover:opacity-40 transition-opacity scale-90 md:scale-100">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-8 h-6 rounded bg-slate-600",
                i % 2 === 0 ? "bg-blue-400/50" : "bg-teal-400/50",
              )}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={i + 8}
              className={cn(
                "w-8 h-12 rounded bg-slate-700",
                i % 3 === 0 ? "bg-slate-600" : "",
              )}
            />
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-slate-500">
          <Layout className="w-4 h-4" />
          <span className="text-sm font-mono uppercase tracking-wider">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PlaceholderWireframeStrip({
  caption = "Wireframes",
  className,
}) {
  return (
    <div
      className={cn(
        "group w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 relative",
        className,
      )}
    >
      <div className="relative z-10 w-full h-full min-h-[200px] flex flex-col items-center justify-center p-8">
        <div className="flex gap-4 opacity-30 group-hover:opacity-40 transition-opacity overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-24 h-32 border-2 border-dashed border-slate-500 rounded flex flex-col gap-2 p-2"
            >
              <div className="w-full h-2 bg-slate-600 rounded-full" />
              <div className="w-1/2 h-2 bg-slate-600 rounded-full" />
              <div className="flex-1 border border-slate-700 rounded" />
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-slate-500">
          <PenTool className="w-4 h-4" />
          <span className="text-sm font-mono uppercase tracking-wider">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PlaceholderFinalUI({ caption = "Final UI", className }) {
  return (
    <div
      className={cn(
        "group w-full rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 relative",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800/50" />
      <div className="relative z-10 w-full h-full min-h-[250px] flex flex-col items-center justify-center p-8">
        {/* UI Window Abstract */}
        <div className="w-48 h-32 bg-slate-800 rounded-lg shadow-2xl border border-slate-700 flex flex-col overflow-hidden opacity-60 group-hover:opacity-80 transition-opacity">
          <div className="h-4 bg-slate-700 border-b border-slate-600 flex items-center gap-1 px-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 p-2 flex gap-2">
            <div className="w-1/4 h-full bg-slate-700/50 rounded" />
            <div className="flex-1 h-full bg-slate-700/30 rounded" />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2 text-slate-500">
          <Monitor className="w-4 h-4" />
          <span className="text-sm font-mono uppercase tracking-wider">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}
