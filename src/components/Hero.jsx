import TypeWriter from "typewriter-effect";
import Lottie from "lottie-react";
import animation from "../assets/Animation.json";
import CV from "../assets/CV/RichEdrickAnthonios_CurriculumVitae.pdf";
import { motion } from "framer-motion";

const handleSpotlight = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 md:pt-44 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-5">

        {/* Tile 1 — Intro utama */}
        <motion.div
          {...fadeUp(0.05)}
          onMouseMove={handleSpotlight}
          className="bento-card bg-noise lg:col-span-4 p-8 md:p-12 flex flex-col justify-center"
        >
          <p className="relative z-10 font-mono text-xs tracking-wider text-brand-400 uppercase mb-4">
            Hola! 欢迎 — Data Analytics &amp; BI
          </p>

          <h1 className="relative z-10 font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
            I&apos;m <span className="text-brand-400">Rich</span> Edrick Anthonios
          </h1>

          <div className="relative z-10 font-semibold text-xl md:text-2xl text-slate-300 mb-8">
            <TypeWriter
              options={{
                strings: [
                  "Data Analyst",
                  "Business Intelligence Enthusiast",
                  "Front-End Developer",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-wrap gap-3">
            
              href={CV}
              download="RichEdrickAnthonios_CurriculumVitae.pdf"
              className="flex items-center gap-2 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 px-6 py-3.5 rounded-full transition-colors duration-200 shadow-glow-brand"
            >
              Download CV
              <svg viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M5 20h14v-2H5v2Zm7-4 5-5h-3V4h-4v7H7l5 5Z"></path>
              </svg>
            </a>
            
              href="#contact"
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 border border-surface-border hover:border-brand-400/50 hover:text-white px-6 py-3.5 rounded-full transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Tile 2 — Lottie visual */}
        <motion.div
          {...fadeUp(0.15)}
          onMouseMove={handleSpotlight}
          className="bento-card lg:col-span-2 flex items-center justify-center p-6 min-h-[260px]"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Lottie
              animationData={animation}
              loop
              className="w-[200px] h-[200px] md:w-[230px] md:h-[230px]"
            />
          </motion.div>
        </motion.div>

        {/* Tile 3 — Status */}
        <motion.div
          {...fadeUp(0.25)}
          onMouseMove={handleSpotlight}
          className="bento-card lg:col-span-2 p-6 flex flex-col justify-between min-h-[170px]"
        >
          <div className="relative z-10 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500" />
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Status
            </span>
          </div>
          <div className="relative z-10">
            <p className="text-white font-semibold text-lg">Open to Work</p>
            <p className="text-slate-500 text-sm font-mono mt-1">
              Jakarta, ID · replies &lt; 24h
            </p>
          </div>
        </motion.div>

        {/* Tile 4 — "Live query" terminal, elemen khas BI/data */}
        <motion.div
          {...fadeUp(0.35)}
          onMouseMove={handleSpotlight}
          className="bento-card lg:col-span-2 p-0 flex flex-col min-h-[170px] overflow-hidden"
        >
          <div className="relative z-10 flex items-center gap-1.5 px-4 py-3 border-b border-surface-border">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="ml-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              query.sql
            </span>
          </div>
          <div className="relative z-10 flex-1 flex items-center px-4 py-3 font-mono text-[13px] text-brand-300 overflow-hidden">
            <span className="text-slate-600 mr-2">$</span>
            <TypeWriter
              options={{
                strings: [
                  "SELECT insight FROM data WHERE curious = TRUE;",
                  "df.groupby('trend').mean() # finding patterns",
                  "CALCULATE(SUM(Sales), Region = \"ID\")",
                ],
                autoStart: true,
                loop: true,
                delay: 35,
                deleteSpeed: 12,
                cursor: "▍",
              }}
            />
          </div>
        </motion.div>

        {/* Tile 5 — Mini KPI preview, link ke About */}
        <motion.a
          href="#about"
          {...fadeUp(0.45)}
          onMouseMove={handleSpotlight}
          className="bento-card lg:col-span-2 p-6 flex items-center justify-around min-h-[170px] group cursor-pointer"
        >
          <div className="relative z-10 text-center">
            <p className="font-mono text-2xl md:text-3xl font-bold text-white tabular-nums">
              3.92
            </p>
            <p className="text-slate-500 text-xs mt-1">GPA</p>
          </div>
          <div className="relative z-10 h-10 w-px bg-surface-border" />
          <div className="relative z-10 text-center">
            <p className="font-mono text-2xl md:text-3xl font-bold text-white tabular-nums">
              12+
            </p>
            <p className="text-slate-500 text-xs mt-1">Projects</p>
          </div>
          <svg
            className="relative z-10 w-4 h-4 text-slate-600 group-hover:text-brand-400 group-hover:translate-x-1 transition-all absolute right-4"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>

      </div>
    </div>
  );
};

export default Hero;
