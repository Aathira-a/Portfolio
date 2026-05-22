import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="w-full h-screen snap-start flex items-center justify-center overflow-hidden relative text-slate-100 bg-[#07020f]"
    >
      {/* ─── RED-DOMINANT BACKGROUND LAYERS ─── */}
      <div className="absolute top-[-15%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-br from-red-950/30 via-rose-900/10 to-transparent rounded-full blur-[160px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[65vw] h-[65vw] bg-gradient-to-tl from-orange-900/20 via-red-500/5 to-transparent rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-1/2 w-[45vw] h-[45vw] bg-red-500/5 rounded-full blur-[140px] animate-pulse" />

      {/* subtle grid overlay for portfolio feel */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,80,80,0.05)_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

      {/* vignette edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* ─── MAIN CONTAINER ─── */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-5 gap-14 items-center px-6 w-full">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-4 text-center md:text-left">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-rose-300 uppercase tracking-[0.35em] text-xs font-bold animate-pulse">
            Academic Journey
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            My{" "}
            <span className="bg-gradient-to-r from-red-400 via-rose-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(239,68,68,0.35)]">
              Education
            </span>
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-red-500 via-orange-400 to-rose-400 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse" />
        </div>

        {/* RIGHT */}
        <div className="md:col-span-3 space-y-12 pt-2 w-full">

          {/* CARD */}
          <div className="relative pl-8 md:pl-10 group p-6 md:p-8 rounded-2xl overflow-hidden
            bg-gradient-to-br from-red-950/20 via-black/40 to-orange-950/10
            border border-red-500/10 hover:border-red-400/30
            backdrop-blur-xl shadow-[0_0_60px_rgba(255,0,80,0.08)]
            transition-all duration-500 hover:scale-[1.02]">

            {/* animated glow sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute -inset-40 bg-gradient-to-r from-transparent via-red-500/10 to-transparent rotate-12 animate-pulse" />
            </div>

            {/* top highlight line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />

            {/* timeline line */}
            <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-red-500 via-orange-500/30 to-transparent" />

            {/* node */}
            <div className="absolute -left-[4px] top-10 w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_18px_rgba(239,68,68,1)] group-hover:scale-150 transition-all duration-500" />

            {/* CONTENT (unchanged) */}
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide group-hover:text-red-300 transition">
              Diploma in Computer Engineering
            </h3>

            <p className="text-base md:text-lg font-medium text-orange-200/80 mt-2 group-hover:text-rose-300 transition">
              Government Women's Polytechnic College Kaimanom
            </p>

            <p className="text-rose-100/40 text-sm md:text-base mt-4 leading-relaxed font-light group-hover:text-slate-200 transition">
              Focused on programming, software development, teamwork,
              communication skills, and modern technologies while building
              strong technical knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;