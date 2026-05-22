import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#07020f] border-t border-red-500/10 py-10 relative overflow-hidden text-red-200/60">

      {/* ─── RED GLOW BASE ACCENT ─── */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[20vw] bg-gradient-to-t from-red-600/15 via-rose-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,80,80,0.05)_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

      {/* ─── MAIN CONTAINER ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* LEFT */}
        <div>
          <a href="#home">
            <h3 className="text-lg md:text-xl font-black tracking-tight text-white group">
              ATHIRA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-orange-400 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.6)] transition">
                .RS
              </span>
            </h3>
          </a>

          <p className="text-xs text-red-200/40 mt-1 font-light tracking-wide">
            Computer Engineering Portfolio
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-medium tracking-widest uppercase">

          {["About", "Skills", "Education", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative group transition text-red-200/50 hover:text-white"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-red-400 to-orange-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}

        </div>

        {/* RIGHT */}
        <div className="text-right text-[11px] tracking-wider font-mono text-red-200/40">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;