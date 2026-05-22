import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="w-full h-screen snap-start flex items-center justify-center overflow-hidden relative text-slate-100 bg-[#07020f]"
    >

      
      <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-gradient-to-bl from-red-600/20 via-rose-500/10 to-transparent rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[65vw] h-[65vw] bg-gradient-to-tr from-orange-500/10 via-red-500/10 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] bg-red-500/5 rounded-full blur-[120px] animate-pulse" />

      {/* grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,80,80,0.06)_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

      {/* ─── MAIN CONTAINER ─── */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-5 gap-14 items-center px-6 w-full">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-6 text-center md:text-left">

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-orange-300 uppercase tracking-[0.35em] text-xs font-bold drop-shadow-[0_0_20px_rgba(239,68,68,0.25)]">
            What I Know
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            My{" "}
            <span className="bg-gradient-to-r from-red-400 via-rose-500 to-orange-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-red-500 via-orange-400 to-rose-400 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)]" />

          <p className="text-red-200/50 text-lg leading-relaxed font-light max-w-md">
            I enjoy learning modern technologies and improving my technical
            and communication abilities through continuous practice and teamwork.
          </p>

        </div>

        {/* RIGHT */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto pr-2">

          {/* CARD TEMPLATE STYLE */}
          {[
            {
              title: "HTML & CSS",
              desc: "Creating responsive and modern web designs.",
              color: "red",
            },
            {
              title: "Python",
              desc: "Problem-solving and programming fundamentals.",
              color: "rose",
            },
            {
              title: "Java",
              desc: "Object-oriented programming concepts and applications.",
              color: "orange",
            },
            {
              title: "C Programming",
              desc: "Strong understanding of programming logic and syntax.",
              color: "red",
            },
          ].map((skill, i) => (
            <div
              key={i}
              className="group relative p-5 rounded-xl backdrop-blur-xl
              bg-gradient-to-br from-red-950/20 via-black/40 to-orange-950/10
              border border-red-500/10 hover:border-red-400/30
              shadow-[0_0_40px_rgba(255,0,80,0.08)]
              transition-all duration-500 hover:scale-[1.03]"
            >

              {/* glow sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -inset-40 bg-gradient-to-r from-transparent via-red-500/10 to-transparent rotate-12" />
              </div>

              {/* top line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />

              <h3 className="text-xl font-bold text-red-300 group-hover:text-white transition">
                {skill.title}
              </h3>

              <p className="text-red-100/50 text-sm mt-2 font-light leading-relaxed group-hover:text-slate-200 transition">
                {skill.desc}
              </p>

            </div>
          ))}

          {/* FULL WIDTH CARD */}
          <div className="sm:col-span-2 group relative p-5 rounded-xl backdrop-blur-xl
            bg-gradient-to-br from-red-950/20 via-black/40 to-orange-950/10
            border border-red-500/10 hover:border-red-400/30
            shadow-[0_0_40px_rgba(255,0,80,0.08)]
            transition-all duration-500 hover:scale-[1.02]">

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />

            <h3 className="text-xl font-bold text-orange-300 group-hover:text-white transition">
              Communication Skills
            </h3>

            <p className="text-red-100/50 text-sm mt-2 font-light leading-relaxed group-hover:text-slate-200 transition">
              Team collaboration, leadership, and effective communication.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;