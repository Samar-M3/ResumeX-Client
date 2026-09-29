import { AiOutlineThunderbolt } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import {
  HiOutlineDocumentCheck,
  HiOutlineSparkles,
  HiOutlineBriefcase,
  HiOutlinePresentationChartBar,
  HiOutlineUserGroup,
  HiOutlineKey,
} from "react-icons/hi2";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router";

function Home() {
  const cards = [
    {
      name: "ATS Compatibility",
      caption:
        "Ensure your resume passes the initial automated screening with our precise parser simulation.",
      icon: <HiOutlineDocumentCheck className="size-6 text-indigo-600" />,
      badgeBg: "bg-indigo-50",
    },
    {
      name: "Smart Rewriter",
      caption:
        "Transform bullet points from basic duties to high-impact achievements with AI.",
      icon: <HiOutlineSparkles className="size-6 text-purple-600" />,
      badgeBg: "bg-purple-50",
    },
    {
      name: "Job Matching",
      caption:
        "Paste any job description and get a customized gap analysis and keyword strategy.",
      icon: <HiOutlineBriefcase className="size-6 text-emerald-600" />,
      badgeBg: "bg-emerald-50",
    },
    {
      name: "Skill Gap Analysis",
      caption:
        "Instantly see which core competencies you are missing for your target roles.",
      icon: <HiOutlinePresentationChartBar className="size-6 text-amber-600" />,
      badgeBg: "bg-amber-50",
    },
    {
      name: "Role Specific Advice",
      caption:
        "Get tailored feedback whether you are a developer, designer, or sales professional.",
      icon: <HiOutlineUserGroup className="size-6 text-blue-600" />,
      badgeBg: "bg-blue-50",
    },
    {
      name: "Keyword Optimization",
      caption:
        "Automatically identify the most critical buzzwords missing from your CV.",
      icon: <HiOutlineKey className="size-6 text-rose-600" />,
      badgeBg: "bg-rose-50",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50/50 pb-20 pt-28 sm:pt-32">
      {/* Background decorative gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-emerald-200/30 blur-3xl opacity-70 -z-10" />

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm sm:text-base font-semibold shadow-xs mb-6 hover:bg-indigo-100/70 transition-colors">
          <AiOutlineThunderbolt className="size-4 text-indigo-600 animate-pulse" />
          <span>GPT-4 Powered Resume Analysis</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
          Optimize Your Resume <br className="hidden sm:inline" /> with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500">
            AI Precision
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mt-6 leading-relaxed font-normal">
          Get ATS scores, skill gap analysis, AI-powered recommendations, and
          job matching in seconds. Stop guessing, start landing interviews.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-8 sm:mt-10">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3.5 rounded-full shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
          >
            <span>Upload Resume</span>
            <FiArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="text-base sm:text-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-full font-semibold shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
            Try Demo
          </button>
        </div>

        {/* Micro highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs sm:text-sm text-slate-500 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <FiCheck className="text-emerald-500 stroke-[3]" /> Real-time ATS score
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FiCheck className="text-emerald-500 stroke-[3]" /> 100% Free preview
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FiCheck className="text-emerald-500 stroke-[3]" /> No credit card required
          </span>
        </div>
      </div>

      {/* Image / Showcase Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="relative rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-indigo-100/80 via-slate-100/60 to-white border border-slate-200/80 shadow-2xl shadow-indigo-500/10 overflow-hidden">
          <div className="relative w-full h-[360px] sm:h-[460px] rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Background cover image */}
            <img
              src="/gradient-bg.jpg"
              alt="Resume preview background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft gradient mask for depth */}
            <div className="absolute inset-0 bg-slate-900/15 backdrop-blur-[2px]" />

            {/* Floating Glassmorphic ATS Score Card */}
            <div className="relative z-10 w-[90%] max-w-md bg-white/95 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/60">
              <div className="flex justify-between items-center text-sm sm:text-base font-semibold text-slate-700">
                <span className="text-slate-500 uppercase tracking-wider text-xs font-bold">
                  ATS Score Analysis
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Excellent
                </span>
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  94
                </span>
                <span className="text-slate-400 text-lg font-medium">/ 100</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-2.5 mt-3 overflow-hidden p-0.5">
                <div className="w-[94%] h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-1000" />
              </div>

              {/* Recommendation pill */}
              <div className="flex gap-3 items-start mt-4 p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl">
                <FcApproval className="size-6 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Your resume is highly optimized for <strong className="font-semibold text-slate-900">Product Manager</strong> roles. 3 key impact skills identified.
                </p>
              </div>

              {/* Quick tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-600">
                <span className="bg-slate-100 px-2 py-0.5 rounded-md">✓ Keywords: 96%</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded-md">✓ ATS Formatting: Safe</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded-md">✓ Impact Verbs: High</span>
              </div>
            </div>

            {/* Bottom soft gradient fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Cards heading */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 sm:mt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything you need to land the interview
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            ResumeX combines advanced language models with deep applicant tracking system (ATS) knowledge to maximize your hiring success.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {cards.map((el) => (
            <div
              key={el.name}
              className="group relative bg-white border border-slate-200/80 hover:border-indigo-300 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl ${el.badgeBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200`}
                >
                  {el.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {el.name}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5">
                  {el.caption}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600 group-hover:gap-1.5 transition-all">
                <span>Learn more</span>
                <span className="text-sm">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-20 sm:mt-28">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-8 sm:p-12 text-center shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to supercharge your resume?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-indigo-200">
              Join thousands of job seekers who secured interviews at top tech companies using ResumeX.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-white text-indigo-950 font-bold px-7 py-3 rounded-full hover:bg-indigo-50 shadow-lg hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                <span>Get Started for Free</span>
                <FiArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          {/* Subtle background glow circle */}
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Home;

