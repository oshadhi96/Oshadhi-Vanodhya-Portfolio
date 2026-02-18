import { motion } from "motion/react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Front-End Engineering",
    value: 0.8,
    label: ["Front-End", "Engineering"],
  },
  { name: "Product Strategy", value: 1.3, label: ["Product", "Strategy"] },
  { name: "UX Research", value: 1.0, label: ["UX", "Research"] },
  { name: "UX Design", value: 1.7, label: ["UX", "Design"], highlight: true },
  { name: "UI Design", value: 1.7, label: ["UI", "Design"], highlight: true },
  { name: "Brand Design", value: 0.6, label: ["Brand", "Design"] },
  { name: "Graphic Design", value: 1.0, label: ["Graphic", "Design"] },
  { name: "Digital Marketing", value: 1.5, label: ["Digital", "Marketing"] },
];

const CustomXAxisTick = ({ x, y, payload }) => {
  const item = data[payload.index];
  const isHighlight = item?.highlight;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={-25}
        textAnchor="middle"
        className={`text-xs md:text-sm font-medium ${
          isHighlight ? "fill-teal-400 font-bold" : "fill-slate-400"
        }`}
      >
        {item.label.map((line, i) => (
          <tspan x={0} dy={i === 0 ? 0 : 14} key={i}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

const CustomYAxisTick = () => {
  return null;
};

export function SkillsGraph() {
  return (
    <section className="py-20 bg-slate-900/20 border-y border-white/5">
      <div className="container mx-auto max-w-9xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-2">
            Here's the spread of my core skills:
          </h2>
        </div>

        <div className="w-full max-w-8xl mx-auto relative overflow-x-auto pb-4">
          <div className="min-w-[800px] h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 60,
                  right: 20,
                  left: 100,
                  bottom: 20,
                }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="name"
                  orientation="top"
                  axisLine={false}
                  tickLine={false}
                  tick={<CustomXAxisTick />}
                  interval={0}
                />

                <YAxis hide domain={[0, 2]} />

                {/* Lead line */}
                <ReferenceLine
                  y={1.5}
                  stroke="#334155"
                  strokeDasharray="3 3"
                  label={({ viewBox }) => {
                    const { x, y } = viewBox;
                    return (
                      <text
                        x={x - 10}
                        y={y + 4}
                        textAnchor="end"
                        className="fill-slate-400 text-xs md:text-sm font-medium"
                      >
                        I've done enough to lead
                      </text>
                    );
                  }}
                />

                {/* Hang line */}
                <ReferenceLine
                  y={0.5}
                  stroke="#334155"
                  strokeDasharray="3 3"
                  label={({ viewBox }) => {
                    const { x, y } = viewBox;
                    return (
                      <text
                        x={x - 10}
                        y={y}
                        textAnchor="end"
                        className="fill-slate-400 text-xs md:text-sm font-medium"
                      >
                        <tspan x={x - 10} dy="-0.2em">
                          I know
                        </tspan>
                        <tspan x={x - 10} dy="1.2em">
                          enough to hang
                        </tspan>
                      </text>
                    );
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2dd4bf"
                  strokeWidth={3}
                  fill="url(#colorValue)"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            I'm also into{" "}
            <span className="text-teal-400 font-medium">coaching teams</span>,{" "}
            <span className="text-teal-400 font-medium">mentoring</span>,{" "}
            <span className="text-teal-400 font-medium">lottie animations</span>
            , and{" "}
            <span className="text-teal-400 font-medium">content creation</span>.
          </h3>
        </div>
      </div>
    </section>
  );
}
