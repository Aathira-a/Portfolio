import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    const parent = document.getElementById("home")?.parentElement;
    if (parent) {
      parent.classList.add(
        "h-screen",
        "overflow-y-scroll",
        "scroll-smooth",
        "snap-y",
        "snap-mandatory"
      );
      parent.style.scrollbarWidth = "none";
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#07020f] text-slate-100 overflow-hidden selection:bg-red-500/30 selection:text-red-200 snap-start shrink-0">

      {/* ─── RED CINEMATIC BACKGROUND SYSTEM ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,80,80,0.18),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff000008_1px,transparent_1px),linear-gradient(to_bottom,#ff000008_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />

      {/* glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-br from-red-600/25 via-rose-500/10 to-transparent rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-bl from-orange-500/15 via-red-500/10 to-transparent rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-red-500/10 rounded-full blur-[140px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

      {/* ─── NAVBAR ─── */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-[#07020f]/60 backdrop-blur-xl border-b border-red-500/10 px-6 md:px-16 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <a href="#home">
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-red-50 hover:scale-[1.02] transition">
              ATHIRA<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-orange-400">
                .RS
              </span>
            </h2>
          </a>

          <ul className="flex gap-6 md:gap-10 text-xs md:text-sm font-semibold tracking-widest uppercase text-red-200/60">
            {["About", "Skills", "Education", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-red-50 transition group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-red-400 to-orange-400 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

        </div>
      </nav>

      {/* ─── HERO ─── */}
      <header
        id="home"
        className="h-full w-full flex items-center justify-center px-6 pt-24 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center space-y-10">

          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/5 border border-red-400/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
              Computer Engineering Portfolio
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-b from-red-50 via-red-200 to-red-300 bg-clip-text text-transparent">
              ATHIRA
            </span>
            <span className="bg-gradient-to-r from-red-400 via-rose-500 to-orange-400 bg-clip-text text-transparent">
              .RS
            </span>
          </h1>

          {/* DIVIDER */}
          <div className="flex justify-center items-center gap-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_20px_rgba(239,68,68,1)] animate-pulse" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent via-red-500/50 to-red-400" />
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-2xl md:text-4xl font-extralight tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-red-100 to-orange-200">
              Designing the future of digital infrastructure.
            </p>
            <p className="text-sm md:text-base text-red-200/50">
              Specializing in clean architectures, intelligent systems, and seamless user experiences built with high-performance code.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex px-10 py-4 rounded-xl font-bold tracking-widest uppercase text-red-50
            bg-gradient-to-r from-red-500 via-rose-500 to-orange-400
            shadow-[0_0_40px_rgba(239,68,68,0.25)]
            hover:shadow-[0_0_70px_rgba(239,68,68,0.4)]
            transition transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-red-300/40">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll Down</span>
          <div className="w-[2px] h-14 bg-gradient-to-b from-red-400 via-orange-400/30 to-transparent animate-bounce" />
        </div>
      </header>
    </div>
  );
}

export default Home;