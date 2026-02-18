import { useState, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  TrendingUp,
  Search,
  Leaf,
  Target,
  Lock,
  Lightbulb,
  Workflow,
  MessageSquare,
  Clock,
  Quote,
} from "lucide-react";
import { cn } from "../ui/utils";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CaseStudySnippet } from "./CaseStudySnippet";
import {
  PlaceholderJourneyMap,
  PlaceholderScreenFlow,
  PlaceholderGeneric,
  PlaceholderBeforeAfter,
  PlaceholderWorkshop,
  PlaceholderUserQuote,
  PlaceholderUserStoryMap,
  PlaceholderWireframeStrip,
  PlaceholderFinalUI,
} from "./AssetPlaceholders";
import { IfsProcessTimeline } from "./IfsProcessTimeline";
import { IfsImpactWrapUp } from "./IfsImpactWrapUp";

export function IfsSustainabilityCaseStudy() {
  const [isUnlocked, setIsUnlocked] = useState(true); // Default unlocked for portfolio view

  // ✅ JS version (no TS union)
  const [readTime, setReadTime] = useState("5min");

  // ✅ JS version (no <HTMLDivElement>)
  const contentStartRef = useRef(null);

  const [announcement, setAnnouncement] = useState("");

  // ✅ JS version (no typed param)
  const handleReadTimeChange = (id) => {
    setReadTime(id);
    setAnnouncement(
      `Now showing ${
        id === "2min"
          ? "2 minute summary"
          : id === "5min"
            ? "5 minute read"
            : "10 minute deep dive"
      }`,
    );

    if (contentStartRef.current) {
      const y =
        contentStartRef.current.getBoundingClientRect().top +
        window.scrollY -
        100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const showStandard = readTime === "10min";
  const showDeepDive = readTime === "10min";

  return (
    <div className="relative min-h-screen bg-[#020617]">
      {isUnlocked && (
        <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-emerald-500/30 pb-32">
          <div className="sr-only" role="status" aria-live="polite">
            {announcement}
          </div>

          {/* Confidentiality Banner */}
          <div
            className="relative pt-28 pb-3 px-4 bg-amber-950/20 border-b border-amber-500/10 print:hidden"
            role="status"
            aria-label="Confidentiality Notice"
          >
            <div className="container mx-auto flex items-center justify-center gap-2.5 text-xs md:text-sm font-medium text-amber-200/90 tracking-wide">
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              <p>
                This work is confidential. Screens and some data are blurred or
                redacted, but the story and impact are real.
              </p>
            </div>
          </div>

          {/* 1. HERO & BEGINNING */}
          <header className="relative pt-8 pb-16 md:pt-12 md:pb-20 px-4 md:px-6 container mx-auto">
            <div className="max-w-12xl mb-16">
              {/* HERO: Impact & Overview (Pyramid Top) */}
              <div className="flex flex-col gap-6 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/30 border border-teal-500/20 text-teal-400 text-sm font-medium w-fit">
                  <Leaf className="w-4 h-4" />
                  <span>Sustainability Management</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  From uncertainty to certainty with IFS Sustainability
                  Management
                </h1>

                {/* Executive Summary / Impact Statement */}
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-6xl">
                  Shaping a new sustainability offering that reached 6M EUR TCV
                  and 1M EUR ARR within 11 months, and improving first contact
                  resolution by 33% for sustainability support.
                </p>

                {/* Role Summary */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-400 font-mono mt-2">
                  <span className="text-teal-500 font-bold uppercase tracking-wider text-xs">
                    My Role
                  </span>
                  <span className="text-slate-500">|</span>
                  <span>
                    UX strategy, stakeholder interviews, design workshops, user
                    research, focus group prep, service design and mentoring a
                    new UX designer.
                  </span>
                </div>
              </div>

              {/* Key Metrics - The "Answer" */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {[
                  {
                    label: "Total contract value influenced",
                    value: "6M EUR",
                  },
                  {
                    label: "Annual recurring revenue (11 mo)",
                    value: "1M EUR",
                  },
                  {
                    label: "Improved first contact resolution",
                    value: "33%",
                  },
                  {
                    label: "Customer interest (3.7/5 NPS)",
                    value: "74%",
                  },
                ].map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-slate-900/40 border border-white/10 rounded-2xl flex flex-col justify-center transition-colors hover:bg-slate-900/60 hover:border-white/20"
                  >
                    <div className="text-3xl lg:text-4xl font-serif text-teal-400 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-400 font-medium leading-snug">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 md:px-6 space-y-20 md:space-y-32">
            {/* READ LENGTH TOGGLE */}
            <div
              ref={contentStartRef}
              className="sticky top-6 z-40 flex justify-center -mt-20 mb-12 md:mb-20"
            >
              <div
                className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex gap-1 shadow-2xl ring-1 ring-white/5 w-full max-w-md md:w-auto"
                role="radiogroup"
                aria-label="Select read time"
              >
                {[
                  { id: "2min", label: "2 min summary", icon: false },
                  { id: "5min", label: "5 min read", icon: true },
                  { id: "10min", label: "10 min deep dive", icon: false },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleReadTimeChange(option.id)}
                    aria-checked={readTime === option.id}
                    role="radio"
                    className={cn(
                      "relative flex-1 md:flex-none px-4 py-3 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 min-h-[44px] flex items-center justify-center",
                      readTime === option.id
                        ? "bg-teal-600 text-white shadow-lg"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5",
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {option.icon && (
                        <Clock className="w-3.5 h-3.5 hidden md:block" />
                      )}
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 1. TWO MIN SUMMARY */}
            {readTime === "2min" && (
              <div className="pt-10 border-t border-white/5 space-y-10 animate-in fade-in duration-500">
                <div className="max-w-6xl">
                  <h2 className="text-3xl font-serif text-teal-400 mb-6">
                    Setting the Stage
                  </h2>

                  <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                    <p>
                      When I joined the IFS Sustainability initiative, we had a
                      big investment ahead of us, a new collaboration with PwC
                      and a lot of unresolved questions. We were still figuring
                      out what sustainability management should look like in
                      practice, which regulations in line with CSRD directive
                      mattered most and how customers would actually use a
                      solution like this in their day to day work.
                    </p>
                    <p>
                      On top of that, my time was limited to roughly 1.5–2 days
                      per week, the domain was new for many of us and design
                      maturity around UX research and service design in this
                      space was still emerging.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-teal-500" />
                    Focus Areas
                  </h3>
                  <ul className="space-y-4 text-slate-400 max-w-4xl">
                    <li className="flex gap-3 items-start ">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                      <span>
                        Streamlining the design thinking process and documenting
                        the right artefacts for the EDA submission so
                        stakeholders could see a clear story, not just scattered
                        slides.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                      <span>
                        Planning and running research with end users, defining
                        jobs to be done and building personas so we could design
                        for real roles like Sustainability Manager, Auditor and
                        Data Provider instead of abstract “users”.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                      <span>
                        Co-designing a customer focus group to test viability
                        and priorities, which resulted in a 3.7 out of 5 NPS and
                        74% of customers saying they were interested in the
                        platform.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                      <span>
                        Analysing support CSM data plus community posts to
                        uncover a critical blocker in the Emission Tracker and
                        recommending changes to documentation, naming and
                        service flows.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-950/20 rounded-2xl p-8 border border-teal-500/10">
                  <h3 className="text-xl font-bold text-teal-100 mb-6 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-teal-400" />
                    Impact & Results
                  </h3>
                  <ul className="space-y-4 text-teal-100/80 max-w-4xl">
                    <li className="flex gap-3 items-start ">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Helped unblock a key enterprise client and improved
                        first contact resolution for the sustainability product
                        by 33%, which team hadn’t known before
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Helped to improve adoption of IFS Cloud Emission
                        Tracker, the Early access SKU by removing customer
                        blockers in Service journey
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Team reached 6M EUR in total contract value and 1M EUR
                        in ARR within 11 months of release.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>
                        Created design artefacts and practices (personas, user
                        story maps, wireframes, focus group framework) that were
                        reused in later emission related work, reducing
                        onboarding time for other UX and service design teams.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-slate-300 font-medium italic border-t border-white/10 pt-8">
                  This project took us from “we have a big sustainability
                  initiative but many unknowns” to a clearer, evidence backed
                  direction that customers and internal teams could align
                  around.
                </p>
              </div>
            )}

            {/* 5 MIN READ CONTENT */}
            {readTime === "5min" && (
              <div className="pt-10 border-t border-white/5 space-y-12 animate-in fade-in duration-500">
                {/* Intro */}
                <div className="max-w-6xl">
                  <h2 className="text-3xl font-serif text-white mb-6">
                    The Challenge
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    When I started working on the Sustainability initiative at
                    IFS, it felt like walking into a moving train. 🤯
                  </p>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    There was a large investment plan, a visible collaboration
                    with PwC and high expectations from leadership. At the same
                    time, we were still forming our understanding of
                    sustainability regulations and CSRD, customer and user needs
                    and how all this should integrate with IFS Cloud.
                  </p>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    I was allocated around 1.5–2 days per week across six
                    months, which meant I had to be selective and focus on
                    activities that would unlock clarity for multiple teams at
                    once.
                  </p>
                </div>

                {/* What made this hard */}
                <section>
                  <h3 className="text-2xl font-serif text-white mb-6">
                    What made this hard
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Three constraints shaped everything:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 max-w-8xl">
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                      <h4 className="text-teal-400 font-bold mb-2">
                        New domain
                      </h4>
                      <p className="text-sm text-slate-400">
                        IFS was relatively new to fast changing CSRD
                        sustainability directive impacting EU customers.
                        Different teams had pockets of knowledge, but there was
                        no shared picture of what “sustainability management”
                        should actually support for customers.
                      </p>
                    </div>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                      <h4 className="text-teal-400 font-bold mb-2">
                        Limited time
                      </h4>
                      <p className="text-sm text-slate-400">
                        I split my time between other product work and this
                        initiative, so I needed to pick high leverage moves, not
                        try to do everything.
                      </p>
                    </div>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                      <h4 className="text-teal-400 font-bold mb-2">
                        Low design maturity
                      </h4>
                      <p className="text-sm text-slate-400">
                        Stakeholders were experienced in product and program
                        management, but UX research, design thinking and service
                        design methods were not yet embedded in this space.
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-slate-400 italic max-w-6xl">
                    The risk was simple: we could spend a lot of money and
                    effort building something that looked good in slides but did
                    not match how sustainability teams actually work, or what
                    they would pay for.
                  </p>
                </section>

                {/* What I did */}
                <section className="space-y-8 max-w-6xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-serif text-white">
                      What I did
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold uppercase">
                      Strategy & Execution
                    </span>
                  </div>
                  <p className="text-slate-400 text-lg">
                    I focused on creating structure, insight and shared
                    understanding.
                  </p>

                  <div className="space-y-12">
                    {/* 1. Structured discovery */}
                    <div className="group">
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-teal-400 text-sm border border-white/10">
                          1
                        </span>
                        Structured discovery and EDA artefacts
                      </h4>
                      <div className="pl-11 space-y-4 text-slate-400">
                        <p>
                          I worked with stakeholders to map all potential input
                          sources into one canvas: support backlog, ideas in
                          Aha, direct customer contacts, community posts,
                          quantitative UX data, interviews and CRM.
                        </p>
                        <p>
                          From there I helped select and document the most
                          important design artefacts for the EDA submission, so
                          we could show not just “screens” but the reasoning
                          behind them.
                        </p>
                      </div>
                    </div>

                    {/* 2. Jobs to be done */}
                    <div className="group">
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-teal-400 text-sm border border-white/10">
                          2
                        </span>
                        Jobs to be done, personas and interviews
                      </h4>
                      <div className="pl-11 space-y-4 text-slate-400">
                        <p>
                          Together with the Product Manager, I finalised jobs to
                          be done for key roles, then planned and conducted two
                          end user interviews with a colleague to bring those
                          jobs to life.
                        </p>
                        <p>
                          We then created personas such as Sustainability
                          Manager, Sustainability Lead, Auditor, Data Provider,
                          Data Authoriser and CSO, and added them to the UX
                          research repository so they could inform future work,
                          not just this initiative.
                        </p>
                      </div>
                    </div>

                    {/* 3. Focus group */}
                    <div className="group">
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-teal-400 text-sm border border-white/10">
                          3
                        </span>
                        Focus group and prioritisation
                      </h4>
                      <div className="pl-11 space-y-4 text-slate-400">
                        <p>
                          When a programme manager suggested running a customer
                          focus group, I initially did not know the internal
                          process. Instead of stepping back, I volunteered to
                          design the questions. I drafted prompts in FigJam that
                          focused on challenges, perceived value, viability and
                          feature priorities, making sure they were unbiased and
                          actionable.
                        </p>
                        <div className="bg-teal-950/20 p-4 rounded-lg border border-teal-500/10">
                          <p className="text-teal-200">
                            The session produced a Net Promoter Score of 3.7 out
                            of 5 and showed that 74 percent of customers were
                            interested in the platform. Customers repeatedly
                            highlighted the simplicity of the proposed concept.
                          </p>
                        </div>
                        <p>
                          This helped programme managers prioritise which KPIs
                          and features to tackle first.
                        </p>
                      </div>
                    </div>

                    {/* 4. Service design */}
                    <div className="group">
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-teal-400 text-sm border border-white/10">
                          4
                        </span>
                        Service design and Emission Tracker journey
                      </h4>
                      <div className="pl-11 space-y-4 text-slate-400">
                        <p>
                          I also analysed support and CSM data plus IFS
                          Community threads to understand where customers were
                          struggling with the Emission Tracker and early access
                          SKUs.
                        </p>
                        <p>
                          By mapping the customer support journey, we uncovered
                          a critical blocker that was preventing an enterprise
                          client from adopting the solution. Addressing it
                          increased first contact resolution for the
                          sustainability product by 33% and reduced the risk of
                          CSAT dropping on a high visibility topic.
                        </p>
                        <p>
                          During this work we also saw that customers were
                          confused by the name “Sustainability Hub”, which
                          influenced the decision to rename the module to
                          “Sustainability Management” in 24R2.
                        </p>
                      </div>
                    </div>

                    {/* 5. Leadership */}
                    <div className="group">
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-teal-400 text-sm border border-white/10">
                          5
                        </span>
                        Leadership, collaboration and mentoring
                      </h4>
                      <div className="pl-11 space-y-4 text-slate-400">
                        <p>While doing the hands on work, I:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Advocated using wireframes early so we could iterate
                            faster on architecture and scope.
                          </li>
                          <li>
                            Led the push for a user centred story map that
                            helped prioritise work and align business and user
                            needs.
                          </li>
                          <li>
                            Mentored a new R&D UX designer, supporting him as he
                            led wireframing, collaborated with developers and
                            presented designs to PwC when the team lost an
                            experienced expert.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* What changed */}
                <section className="bg-gradient-to-br from-teal-950/30 to-slate-900/50 p-8 rounded-2xl border border-teal-500/10 ">
                  <h3 className="text-2xl font-serif text-white mb-6">
                    What changed
                  </h3>
                  <div className="space-y-6 text-slate-300 max-w-6xl">
                    <p className="text-xl font-light text-white">
                      Within 11 months of release, the initiative contributed to
                      6M EUR in total contract value and 1M EUR in ARR.
                    </p>
                    <p>
                      We unblocked a key client, improved first contact
                      resolution by 33 percent, and created design artefacts and
                      practices that were reused in later emission related
                      projects, reducing onboarding time for central UX and
                      service design teams.
                    </p>
                    <p className="text-sm opacity-60">
                      Some screens and data are intentionally blurred or
                      redacted in this portfolio to protect confidentiality, but
                      the underlying methods and impact are visible through the
                      story, metrics and artefact placeholders.
                    </p>
                  </div>
                </section>
              </div>
            )}

            {/* SECTION: BEGINNING (Setting the Stage) */}
            {showStandard && (
              <div className="pt-10 border-t border-white/5">
                <div className="flex items-center gap-3 mb-8 opacity-80">
                  <div className="h-px bg-teal-500/50 w-8"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-500">
                    Setting the Stage
                  </span>
                  <div className="h-px bg-teal-500/50 flex-1"></div>
                </div>

                {/* Narrative */}
                <p className="text-slate-400 leading-relaxed mb-10 max-w-6xl text-lg">
                  When I joined the Sustainability initiative at IFS, the
                  question on everyone’s mind was simple and uncomfortable:{" "}
                </p>
                <div className="text-slate-400 leading-relaxed mb-10 max-w-6xl text-lg space-y-6">
                  <p>
                    What exactly is the value we are bringing to customers and
                    users through sustainability, and how will we know if we
                    have built the right thing?
                  </p>

                  <div>
                    <p className="text-slate-400 leading-relaxed mb-10 max-w-6xl text-lg">
                      We had:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        A big investment plan to bring sustainability into IFS
                        products.
                      </li>
                      <li>
                        A partnership with PwC and presales teams that brought
                        both expertise and pressure.
                      </li>
                      <li>
                        Multiple programme managers, product managers and UX
                        designers, all with slightly different perspectives and
                        open questions.
                      </li>
                    </ul>
                  </div>
                  <p>
                    On paper, it looked like a well resourced initiative. In
                    reality, the problem space was messy and the domain was
                    still new for many of us.
                  </p>
                  <p>
                    My allocation was about 1.5–2 days per week over roughly six
                    months, which meant I needed to be deliberate. I could not
                    attend every meeting or own every artefact, so my focus was
                    to create clarity and momentum where it would matter most.
                  </p>
                </div>

                {/* Stakes */}
                <div className="flex items-center gap-4 p-5 bg-teal-950/20 border border-teal-500/10 rounded-xl">
                  <div className="p-2 rounded-full bg-teal-500/10">
                    <TrendingUp className="w-5 h-5 text-teal-400" />
                  </div>
                  <p className="text-base text-teal-100/90 font-medium">
                    Getting this wrong would impact customer trust, CSAT and
                    ROI.
                  </p>
                </div>
              </div>
            )}

            {/* 2. CONTEXT & CONSTRAINTS (Expanded) */}
            {showStandard && (
              <section className="overflow-hidden">
                <div className="flex items-center gap-3 mb-8">
                  <Layers className="w-6 h-6 text-teal-500" />
                  <h2 className="text-2xl font-serif text-white">
                    Context & Constraints: What made this hard
                  </h2>
                </div>
                {/* Constraints Visual */}
                <div className="grid md:grid-cols-3 gap-6 mb-10 ">
                  <div className="p-5 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
                      <Target className="w-4 h-4 text-teal-500" />
                      New Domain
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Navigating evolving sustainability regulations with
                      forming domain knowledge.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
                      <Clock className="w-4 h-4 text-teal-500" />
                      Time Pressure
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      1.5–2 days per week across 6 months.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm">
                      <Layers className="w-4 h-4 text-teal-500" />
                      Low Maturity
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Design maturity around UX research and service design was
                      mixed.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed">
                  <div className="space-y-6">
                    <p>
                      IFS was learning sustainability regulations and
                      expectations at the same time as many customers. There
                      were many requirements, but not all of them translated
                      into clear user needs.{" "}
                    </p>
                    <p>
                      I was not dedicated full time to the initiative. That
                      meant I had to choose activities with leverage: ones that
                      would influence decisions across product, program and UX,
                      not just create nice documentation.{" "}
                    </p>
                  </div>
                  <div className="space-y-6">
                    <p>
                      Colleagues were experienced and thoughtful, but methods
                      like user interviews, focus groups, story mapping and
                      service design were not yet standard for sustainability
                      work. I needed to introduce these without slowing the team
                      down.{" "}
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-teal-950/20 border border-teal-900/30 rounded-lg text-sm text-teal-300/80 italic">
                  Note: These constraints were not excuses, but design inputs
                  that shaped the way I approached the work.
                </div>
              </section>
            )}

            {/* Deep Dive Timeline */}
            {showDeepDive && <IfsProcessTimeline />}

            {/* 4. KEY MOVES: When things got complicated */}
            {showStandard && (
              <section className="space-y-16 md:space-y-24">
                <div className="max-w-6xl">
                  <h2 className="text-3xl font-serif text-white mb-6">
                    When things got complicated
                  </h2>
                  <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                    <p>
                      There was a palpable tension between the pressure to move
                      fast and the internal uncertainty about what customers
                      actually needed. We were building features, but we weren't
                      sure if they were viable for the market or just usable in
                      a vacuum.
                    </p>
                    <p>
                      I realized that simply designing screens wouldn't solve
                      this. I had to step out of my lane—designing research
                      protocols where none existed and challenging assumptions
                      with partners like PwC—to pivot the product direction.
                    </p>
                  </div>
                </div>

                <div className="relative space-y-12 md:space-y-16">
                  {/* Visual Line */}
                  <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent hidden md:block" />

                  {/* Moment 1 */}
                  <div className="grid md:grid-cols-[60px_1fr] gap-6 relative">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-teal-500 bg-slate-900 flex items-center justify-center z-10 shadow-[0_0_15px_-3px_rgba(20,184,166,0.3)]">
                        <Search className="w-5 h-5 text-teal-400" />
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 md:p-6 relative">
                        {/* Mobile Dot */}
                        <div className="absolute -left-3 top-6 w-6 h-6 rounded-full border-2 border-teal-500 bg-slate-900 md:hidden" />

                        <div className="text-xs font-bold text-teal-500 uppercase tracking-wider mb-2">
                          Moment 1: Data & Systems thinking
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          From scattered inputs to a shared discovery map
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                          Early on, it was clear that we had a lot of data, but
                          it lived in silos. To move from opinions to informed
                          decisions, I worked with stakeholders to list and
                          visualise all potential input sources:
                          <br></br>
                          <br></br>- Support backlog
                          <br></br>- Ideas portal in Aha
                          <br></br>- Direct contacts with customers
                          <br></br>- Community posts
                          <br></br>- Quantitative UX data, for example Surveys,
                          user interviews, surveys, etc.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                          Seeing everything on one canvas changed the
                          conversation.
                          <br></br>
                          <br></br>
                          From there, I helped select which design artefacts
                          should go into the EDA submission so they reflected
                          this structured view of opportunity and risk, not just
                          polished UI.
                        </p>
                        <PlaceholderUserStoryMap
                          caption="User Story Mapping"
                          className="w-full aspect-video rounded-lg border border-white/5 bg-black/20"
                        />
                      </div>
                      {/* Artefact/Visual Column */}
                      <div className="space-y-3">
                        <PlaceholderUserQuote
                          caption="Key Insight: Data Trust"
                          className="h-full min-h-[300px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Moment 2 */}
                  <div className="grid md:grid-cols-[60px_1fr] gap-6 relative">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-teal-500 bg-slate-900 flex items-center justify-center z-10 shadow-[0_0_15px_-3px_rgba(20,184,166,0.3)]">
                        <Users className="w-5 h-5 text-teal-400" />
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 md:p-6 relative">
                        <div className="text-xs font-bold text-teal-500 uppercase tracking-wider mb-2">
                          Moment 2: The Focus Group Gamble
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          Leaning into a focus group I did not know how to run
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                          At one point, the VP proposed running a customer focus
                          group to validate viability. She asked if I knew how
                          to plan such a session within IFS. At that moment, I
                          did not.
                        </p>
                        <div className="text-slate-400 leading-relaxed mb-6 space-y-6">
                          <p>
                            Instead of stepping back, I said something closer
                            to:{" "}
                            <span className="italic text-slate-300">
                              “I might not know the internal process, but I can
                              help design the questions so we get answers to the
                              right uncertainties.”
                            </span>
                          </p>
                          <div className="space-y-3">
                            <p>
                              I drafted the question set in FigJam, focusing on:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-400">
                              <li>
                                Current challenges and how customers handle them
                                today.
                              </li>
                              <li>Perceived value of our proposed concept.</li>
                              <li>Priorities across KPIs and features.</li>
                              <li>
                                Signals that would help programme managers
                                descope or sequence work.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="text-slate-400 leading-relaxed mb-6 space-y-6">
                          <p>
                            The focus group was led by programme managers, but
                            the structure meant we could turn qualitative
                            feedback into clear direction. The results:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-slate-400">
                            <li>Net Promoter Score of 3.7 out of 5.</li>
                            <li>
                              74 percent of participants interested in the
                              platform.
                            </li>
                            <li>
                              Repeated positive feedback on the simplicity of
                              the proposed solution, along with areas flagged
                              for future usability testing.
                            </li>
                          </ul>
                          <p>
                            This helped us answer{" "}
                            <span className="italic text-slate-300">
                              “Is this worth investing in?”
                            </span>{" "}
                            with more confidence, not just{" "}
                            <span className="italic text-slate-300">
                              “Do people understand the UI?”
                            </span>
                            .
                          </p>
                        </div>

                        <PlaceholderWorkshop className="w-full aspect-video rounded-lg border border-white/5 bg-black/20" />
                      </div>
                      <div className="space-y-3">
                        <PlaceholderWireframeStrip
                          caption="Concept Testing Wireframes"
                          className="h-full min-h-[250px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Moment 3 */}
                  <div className="grid md:grid-cols-[60px_1fr] gap-6 relative">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-teal-500 bg-slate-900 flex items-center justify-center z-10 shadow-[0_0_15px_-3px_rgba(20,184,166,0.3)]">
                        <Workflow className="w-5 h-5 text-teal-400" />
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 md:p-6 relative">
                        <div className="text-xs font-bold text-teal-500 uppercase tracking-wider mb-2">
                          Moment 3: The Emission Tracker Roadblock
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                          Discovering an Emission Tracker blocker in support
                          data
                        </h3>
                        <div className="text-slate-400 leading-relaxed mb-6 space-y-6">
                          <p>
                            In parallel, we saw noise around the Emission
                            Tracker and sustainability developments in community
                            and support channels. I analysed support and CSM
                            data, looked at community questions and mapped the
                            customer service journey, especially for early
                            access SKUs.
                          </p>
                          <div className="space-y-3">
                            <p>
                              That journey map surfaced a critical blocker that
                              had not been obvious from roadmaps alone. Fixing
                              it meant:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-400">
                              <li>Unblocking a key enterprise client.</li>
                              <li>
                                Increasing first contact resolution for the
                                sustainability product by 33 percent.
                              </li>
                              <li>
                                Reducing the risk of CSAT dropping in an area
                                that already had over 1000 views on a related
                                community article.
                              </li>
                            </ul>
                          </div>
                          <p>
                            Along the way we also discovered that the name
                            “Sustainability Hub” will be confusing to customers.
                            That insight directly contributed to renaming the
                            module to “Sustainability Management”.
                          </p>
                        </div>
                        <PlaceholderJourneyMap
                          caption="Journey Analysis"
                          className="w-full aspect-video rounded-lg border border-white/5 bg-black/20"
                        />
                      </div>
                      <div className="space-y-3">
                        <PlaceholderFinalUI
                          caption="Final Implementation"
                          className="h-full min-h-[250px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {/* 5. LEADERSHIP & COLLABORATION BAND */}
            {showStandard && (
              <section className="relative -mx-4 sm:-mx-8 lg:-mx-12 py-12 md:py-16 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 border-y border-white/5">
                <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
                  <div className="flex items-center gap-3 mb-10 justify-center">
                    <Users className="w-6 h-6 text-teal-500" />
                    <h2 className="text-2xl font-serif text-white">
                      How I showed up as a lead?{" "}
                    </h2>
                  </div>
                  <p>
                    Beyond the artefacts, a big part of my contribution was
                    leadership.
                  </p>
                  <br></br>
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Leadership */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-4">
                        <Target className="w-5 h-5 text-teal-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        Strategic Leadership
                      </h3>
                      <ul className="space-y-4 text-sm text-slate-400 leading-relaxed">
                        <li className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-teal-500/50 mt-0.5 flex-shrink-0" />
                          <span>
                            I helped streamline the design thinking process for
                            the Sustainability investment so work flowed more
                            clearly from discovery to design to validation.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-teal-500/50 mt-0.5 flex-shrink-0" />
                          <span>
                            I pushed for a user story map in a user centred
                            format, which became a shared reference point for
                            prioritisation.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-teal-500/50 mt-0.5 flex-shrink-0" />
                          <span>
                            I advocated for starting with wireframes to enable
                            fast iteration and architectural decisions, rather
                            than locking into high fidelity screens too early.
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Mentoring */}
                    <div className="space-y-4 text-center md:text-left">
                      <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-4">
                        <Lightbulb className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        Mentoring & Growth
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Mentored a new R&D UX designer who led wireframes,
                        collaborated with developers, and presented designs to
                        PwC.
                      </p>
                      <div className="text-xs font-medium text-purple-300 bg-purple-500/10 px-3 py-2 rounded-lg border border-purple-500/20 inline-block">
                        Growing internal UX capability, not just delivering
                        screens.
                      </div>
                    </div>

                    {/* Collaboration (Stakeholder Cluster) */}
                    <div className="space-y-4 text-center md:text-left">
                      <div className="mx-auto md:mx-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-4">
                        <Users className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        Stakeholder Collaboration
                      </h3>

                      <div className="relative pt-2">
                        <PlaceholderWorkshop
                          caption="Stakeholder Workshop"
                          className="w-full aspect-[4/3]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {/* OUTCOMES & LEARNINGS */}
            {showStandard && (
              <section className="space-y-12 md:space-y-16 py-12 border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                  {/* Outcomes */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-serif text-white flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-teal-500" />
                      Outcomes
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                      By the time the early release cycle was complete, we had:
                    </p>
                    <ul className="space-y-4 text-slate-400 leading-relaxed">
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Validated key aspects of viability through the focus
                          group, gaining a 3.7 / 5 NPS and 74 percent interest.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span>
                          33% Increase in First Contact Resolution and reduced
                          CSAT risk after fixing clarity of module.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Contributed to achieving 6M EUR in total contract
                          value and 1M EUR in ARR within 11 months of release.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Created reusable artefacts and practices that reduced
                          onboarding time for central UX and service design
                          teams in later emission related initiatives.
                        </span>
                      </li>
                    </ul>
                    <p className="text-slate-400 leading-relaxed italic">
                      We also built a clearer, more user centred story of what
                      “Sustainability Management” means for IFS customers, which
                      could be used by marketing, presales and product.
                    </p>
                  </div>

                  {/* What I learned */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-serif text-white flex items-center gap-3">
                      <Lightbulb className="w-6 h-6 text-teal-500" />
                      What I learned
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                      This project reinforced a few things for me:
                    </p>
                    <ul className="space-y-4 text-slate-400 leading-relaxed">
                      <li className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                        <span>
                          In new domains, it is more honest and more effective
                          to say “I do not know yet, but here is how we will
                          find out” than to pretend expertise.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                        <span>
                          Design leadership is often about choosing a few high
                          leverage activities and doing them deeply rather than
                          trying to touch everything.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                        <span>
                          Service design, research and analytics are powerful
                          when combined. A single journey map built from support
                          data can unlock as much value as a big feature.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                        <span>
                          Mentoring and enabling others, like the new UX
                          designer who led much of the execution, multiplies
                          impact far beyond what one person can do.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Closing Note */}
                <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6 md:p-8">
                  <p className="text-slate-400 leading-relaxed italic">
                    Because this work is confidential, visual examples in my
                    portfolio blur or redact specific data, Jira IDs, and
                    customer names. However, the structure, metrics and story
                    here give an honest view of how I work in complex, ambiguous
                    initiatives and how I show up as a lead leaning product
                    designer.
                  </p>
                </div>
              </section>
            )}

            {/* 6. QUOTES & TESTIMONIALS */}
            {showStandard && (
              <section className="space-y-12 py-12 border-t border-white/5">
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <MessageSquare className="w-6 h-6 text-teal-500" />
                  <h2 className="text-2xl font-serif text-white">
                    Voices from the Process
                  </h2>
                </div>

                <div className="grid gap-6">
                  {/* Featured Quote */}
                  <div className="p-6 md:p-10 rounded-2xl bg-gradient-to-br from-teal-950/30 to-slate-900/50 border border-teal-500/20 text-center relative overflow-hidden group shadow-2xl shadow-teal-900/10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-50" />
                    <Quote className="w-12 h-12 text-teal-500/20 absolute top-6 left-6 -scale-x-100" />

                    <blockquote className="relative z-10 text-xl md:text-2xl font-serif text-teal-100 leading-relaxed mb-6 max-w-6xl mx-auto">
                      "Oshadhi stepped into a complex, ambiguous environment and
                      immediately brought structure and clarity. Her
                      collaborative, user-centred approach was instrumental in
                      defining our early direction, ensuring we built a solution
                      that was not just technically feasible, but commercially
                      vital."
                    </blockquote>

                    <div className="flex flex-col items-center gap-1">
                      <cite className="not-italic text-sm font-bold text-white tracking-wide">
                        Program Director
                      </cite>
                      <span className="text-xs text-slate-400">
                        IFS Sustainability R&D
                      </span>
                    </div>
                  </div>

                  {/* Smaller Quotes Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        quote:
                          "Finally I can trace where this data comes from. The lineage view is exactly what my auditor asks for.",
                        role: "Finance Controller",
                        context: "User Testing",
                      },
                      {
                        quote:
                          "I was skeptical about the focus group, but seeing them ignore the AI features to find the export button was a wake-up call.",
                        role: "Product Manager",
                        context: "Team Workshop",
                      },
                      {
                        quote:
                          "The definition of 'Scope 3' varies by region. This flexibility saves us hours of manual Excel work.",
                        role: "Sustainability Lead",
                        context: "Beta Customer",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 md:p-6 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col justify-between gap-4 hover:border-white/10 transition-colors"
                      >
                        <p className="text-sm text-slate-300 leading-relaxed">
                          "{item.quote}"
                        </p>
                        <div>
                          <div className="text-xs font-bold text-white">
                            {item.role}
                          </div>
                          <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
                            {item.context}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Footer Navigation */}
            <div className="border-t border-white/10 pt-12 flex justify-between items-center">
              <Link
                to="/work/ifs-ai"
                className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors min-h-[44px] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 px-2 -ml-2"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-teal-500">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </div>
                <span>Previous: ifs.ai Portal</span>
              </Link>
              <Link
                to="/work/bleep-med"
                className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors min-h-[44px] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 px-2 -mr-2"
              >
                <span>Next: BleepMed Telehealth</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-teal-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </main>
        </article>
      )}
    </div>
  );
}
