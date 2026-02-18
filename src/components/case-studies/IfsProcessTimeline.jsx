import React from "react";
import {
  Circle,
  Flag,
  Search,
  Users,
  Image as ImageIcon,
  Users2,
  Map,
  LayoutTemplate,
  Route,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

export function IfsProcessTimeline() {
  const lanes = [
    {
      id: "discovery",
      label: "Discovery",
      icon: <Search className="w-3.5 h-3.5" />,
      textColor: "text-blue-400",
      lineColor: "bg-blue-500/20",
      dotColor: "bg-blue-400",
      nodes: [
        { label: "Process Alignment", type: "dot" },
        { label: "EDA Artefacts", type: "dot" },
        { label: "Stakeholder Interviews", type: "dot" },
      ],
    },
    {
      id: "research",
      label: "Research",
      icon: <Users className="w-3.5 h-3.5" />,
      textColor: "text-teal-400",
      lineColor: "bg-teal-500/20",
      dotColor: "bg-teal-400",
      nodes: [
        { label: "JTBD & PM", type: "dot" },
        { label: "User Interviews (2)", type: "dot" },
        { label: "Personas", subLabel: "6 Roles", type: "card-stack" },
        { label: "Market Research", type: "dot" },
        { label: "Mood Board", type: "image-thumbnail" },
      ],
    },
    {
      id: "design",
      label: "Design",
      icon: <Circle className="w-3.5 h-3.5" />,
      textColor: "text-emerald-400",
      lineColor: "bg-emerald-500/20",
      dotColor: "bg-emerald-400",
      nodes: [
        {
          label: "User Story Map",
          type: "box-icon",
          icon: <Map className="w-3 h-3 text-emerald-100" />,
        },
        {
          label: "Low-fi Wireframes",
          type: "box-icon",
          icon: <LayoutTemplate className="w-3 h-3 text-emerald-100" />,
        },
        {
          label: "Demo Flow",
          type: "box-icon",
          icon: <Route className="w-3 h-3 text-emerald-100" />,
        },
        {
          label: "UX Audits",
          subLabel: "Recommended",
          type: "pill",
          icon: <ShieldCheck className="w-3 h-3 text-emerald-400" />,
        },
      ],
    },
    {
      id: "alignment",
      label: "Alignment",
      icon: <Flag className="w-3.5 h-3.5" />,
      textColor: "text-slate-400",
      lineColor: "bg-slate-500/20",
      dotColor: "bg-slate-400",
      nodes: [
        { label: "Focus Group Board", type: "thumbnail-board" },
        { label: "NPS & KPI Chart", type: "thumbnail-chart" },
        { label: "Journey Map", type: "thumbnail-map" },
        {
          label: "24R2 EA Testing",
          subLabel: "17 Improvements",
          type: "box-icon",
          icon: <ClipboardCheck className="w-3 h-3 text-slate-300" />,
        },
      ],
    },
  ];

  const renderNodeMarker = (node, color, laneColor) => {
    // laneColor is like "bg-emerald-400"
    const borderColor = laneColor.replace("bg-", "border-");
    const shadowColor = laneColor.replace("bg-", "text-"); // approx

    switch (node.type) {
      case "card-stack":
        return (
          <div className="relative w-6 h-6 flex items-center justify-center cursor-default group/node">
            <div className="absolute top-0 right-0 w-4 h-5 bg-slate-800 border border-slate-600 rounded-sm rotate-12 opacity-60 transition-transform group-hover/node:rotate-[20deg] group-hover/node:translate-x-1" />
            <div className="absolute top-0.5 right-0.5 w-4 h-5 bg-slate-800 border border-slate-600 rounded-sm rotate-6 opacity-80 transition-transform group-hover/node:rotate-[10deg] group-hover/node:translate-x-0.5" />
            <div className="relative w-4 h-5 bg-slate-800 border border-teal-500/50 rounded-sm flex items-center justify-center z-10 shadow-lg group-hover/node:scale-110 transition-transform">
              <Users2 className="w-2.5 h-2.5 text-teal-400" />
            </div>
          </div>
        );

      case "image-thumbnail":
        return (
          <div className="relative w-8 h-6 bg-slate-800 border border-teal-500/50 rounded-sm flex items-center justify-center shadow-lg group/node cursor-default transition-transform hover:scale-110 z-10">
            <div className="grid grid-cols-2 gap-0.5 w-full h-full p-1 opacity-50">
              <div className="bg-teal-400/20 rounded-[1px]" />
              <div className="bg-blue-400/20 rounded-[1px]" />
              <div className="bg-emerald-400/20 rounded-[1px]" />
              <div className="bg-slate-400/20 rounded-[1px]" />
            </div>
            <ImageIcon className="absolute w-3 h-3 text-white/70" />
          </div>
        );

      case "box-icon":
        return (
          <div
            className={`relative w-6 h-6 bg-slate-800 border ${borderColor} rounded-sm flex items-center justify-center shadow-lg group/node cursor-default transition-transform hover:scale-110 z-10 hover:border-white/40`}
          >
            {node.icon}
          </div>
        );

      case "pill":
        return (
          <div
            className={`relative px-2 py-1 bg-slate-900 border ${borderColor} rounded-full flex items-center gap-1.5 shadow-lg group/node cursor-default transition-transform hover:scale-110 z-10`}
          >
            {node.icon}
            <span
              className={`text-[9px] font-bold uppercase tracking-wider ${shadowColor}`}
            >
              Audit
            </span>
          </div>
        );

      case "thumbnail-board":
        return (
          <div className="relative w-7 h-5 bg-slate-800 border border-slate-600 rounded-sm flex items-center justify-center shadow-lg group/node cursor-default transition-transform hover:scale-110 z-10">
            <div className="flex gap-0.5 justify-center items-center h-full w-full px-1">
              <div className="w-1.5 h-3 bg-slate-500/50 rounded-[1px]" />
              <div className="w-1.5 h-3 bg-slate-500/50 rounded-[1px]" />
              <div className="w-1.5 h-3 bg-slate-500/50 rounded-[1px]" />
            </div>
          </div>
        );

      case "thumbnail-chart":
        return (
          <div className="relative w-7 h-5 bg-slate-800 border border-slate-600 rounded-sm flex items-center justify-center shadow-lg group/node cursor-default transition-transform hover:scale-110 z-10">
            <div className="flex gap-0.5 items-end justify-center h-full w-full pb-1">
              <div className="w-1 h-1.5 bg-slate-500 rounded-[1px]" />
              <div className="w-1 h-3 bg-slate-400 rounded-[1px]" />
              <div className="w-1 h-2 bg-slate-500 rounded-[1px]" />
            </div>
          </div>
        );

      case "thumbnail-map":
        return (
          <div className="relative w-7 h-5 bg-slate-800 border border-slate-600 rounded-sm flex items-center justify-center shadow-lg group/node cursor-default transition-transform hover:scale-110 z-10">
            <svg
              className="w-full h-full p-1 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12c3-3 6-3 9 0s6 3 9 0" />
            </svg>
          </div>
        );

      case "dot":
      default:
        return (
          <div
            className={`w-3 h-3 rounded-full border border-slate-900 ${color} ring-4 ring-slate-900 shadow-[0_0_10px_-2px_rgba(0,0,0,0.5)] z-20 transition-transform duration-300 hover:scale-150 cursor-default`}
          />
        );
    }
  };

  return (
    <div className="w-full mt-16 mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-px bg-teal-500/50" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
          Process Overview
        </h3>
        <div className="w-full h-px bg-gradient-to-r from-teal-500/50 to-transparent opacity-20" />
      </div>

      <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 md:p-8 overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto pb-4 -mb-4 scrollbar-hide">
          <div className="min-w-[800px] space-y-10">
            {lanes.map((lane) => (
              <div
                key={lane.id}
                className="relative grid grid-cols-[120px_1fr] gap-8 items-center group"
              >
                <div
                  className={`flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider ${lane.textColor} transition-opacity duration-300 opacity-80 group-hover:opacity-100`}
                >
                  {lane.icon}
                  <span>{lane.label}</span>
                </div>

                <div className="relative h-6 flex items-center">
                  <div
                    className={`absolute left-0 right-0 h-0.5 ${lane.lineColor} rounded-full`}
                  />

                  <div className="relative z-10 w-full flex justify-between px-2">
                    {lane.nodes.map((node, idx) => (
                      <div
                        key={idx}
                        className="relative flex flex-col items-center gap-3"
                      >
                        {node.label || node.type ? (
                          renderNodeMarker(
                            node,
                            lane.dotColor,
                            lane.lineColor.replace("/20", "/40"),
                          )
                        ) : (
                          <div
                            className={`w-3 h-3 rounded-full border border-slate-900 ${lane.dotColor} opacity-30 ring-4 ring-slate-900 z-10`}
                          />
                        )}

                        <div className="absolute top-8 w-32 text-center pointer-events-none">
                          {node.label ? (
                            <>
                              <span className="text-[10px] font-medium text-slate-400 leading-tight block tracking-wide">
                                {node.label}
                              </span>
                              {node.subLabel && (
                                <span className="text-[9px] text-slate-500 block mt-0.5">
                                  {node.subLabel}
                                </span>
                              )}
                            </>
                          ) : (
                            <div className="opacity-30">
                              <div className="h-1.5 w-12 mx-auto bg-white/5 rounded-full mb-1" />
                              <div className="h-1.5 w-8 mx-auto bg-white/5 rounded-full" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden mt-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-wide text-slate-500">
            Scroll to explore
          </span>
        </div>
      </div>
    </div>
  );
}
