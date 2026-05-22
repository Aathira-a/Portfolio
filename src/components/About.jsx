import React from "react";

function About() {
  return (
    <section
      id="about"
      className="w-full h-screen snap-start flex items-center justify-center overflow-hidden relative text-slate-100 bg-[#07020f]"
    >

      {/* ─── RED CINEMATIC BACKGROUND SYSTEM ─── */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-br from-red-600/20 via-rose-500/10 to-transparent rounded-full blur-[150px]" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[65vw] h-[65vw] bg-gradient-to-tl from-orange-500/10 via-red-500/10 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-1/4 right-1/3 w-[40vw] h-[40vw] bg-red-500/5 rounded-full blur-[120px] animate-pulse" />

      {/* grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,80,80,0.06)_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

      {/* ─── MAIN CONTAINER ─── */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center px-6 w-full">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-4 text-center md:text-left">

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-orange-300 uppercase tracking-[0.35em] text-xs font-bold drop-shadow-[0_0_20px_rgba(239,68,68,0.25)]">
            Welcome To My Portfolio
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
            About{" "}
            <span className="bg-gradient-to-r from-red-400 via-rose-500 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.25)]">
              Me
            </span>
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-red-500 via-orange-400 to-rose-400 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
        </div>

        {/* RIGHT */}
        <div className="md:col-span-3">

          <div className="relative group p-6 md:p-8 rounded-2xl
            bg-gradient-to-br from-red-950/20 via-black/40 to-orange-950/10
            border border-red-500/10 hover:border-red-400/30
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(255,0,80,0.08)]
            transition-all duration-500 hover:scale-[1.02]">

            {/* glow sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute -inset-40 bg-gradient-to-r from-transparent via-red-500/10 to-transparent rotate-12" />
            </div>

            {/* top line glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />

            <p className="text-lg md:text-xl leading-relaxed font-light tracking-wide text-red-100/70 text-center md:text-left group-hover:text-slate-100 transition-colors duration-500">
              I am a motivated and hardworking individual with strong interest
              in learning new technologies and improving my skills. I am
              passionate about teamwork, communication, and problem-solving.
              I always try to give my best in every opportunity.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;