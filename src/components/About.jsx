import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProfileLogo from "../assets/AboutAsset/Profil.png";

const handleSpotlight = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

const CountUp = ({ numeric, suffix = "", decimals = 0, duration = 1.2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(numeric * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, numeric, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const About = () => {
  const highlights = [
    {
      numeric: 3.92,
      decimals: 2,
      suffix: "",
      label: "GPA",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      numeric: 8,
      decimals: 0,
      suffix: "th",
      label: "Semester",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      numeric: 6,
      decimals: 0,
      suffix: "+",
      label: "Volunteer Experience",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      numeric: 12,
      decimals: 0,
      suffix: "+",
      label: "Projects Completed",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-20 md:py-28">
      <div className="text-center mb-12">
        <p className="text-brand-400 text-xs font-mono tracking-wider uppercase mb-3" data-aos="fade-up">
          Get to Know Me
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up">
          About
        </h2>
        <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full" data-aos="zoom-in" data-aos-delay="150" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-5">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleSpotlight}
          className="bento-card lg:col-span-2 p-4 flex items-center justify-center"
        >
          <div className="relative z-10 w-full">
            <img
              src={ProfileLogo}
              alt="Rich Edrick Anthonios"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onMouseMove={handleSpotlight}
          className="bento-card bg-noise lg:col-span-4 p-8 md:p-10 flex flex-col justify-center"
        >
          <h3 className="relative z-10 text-xl lg:text-2xl font-bold text-white mb-4">
            Hello! I&apos;m <span className="text-brand-400">Rich</span>
          </h3>

          <div className="relative z-10 space-y-4 text-slate-400 leading-relaxed text-sm lg:text-base">
            <p>
              <strong className="text-white font-semibold">
                Final-Year Information System student
              </strong>{" "}
              at President University with a GPA of 3.92, concentrating in Data Science.
            </p>
            <p>
              Dedicated and detail-oriented, with a strong passion for organizing and
              analyzing data. Currently focused on data analysis using Python, SQL,
              Excel, and Power BI to derive insights and support data-driven decisions.
            </p>
            <p>
              Also active in internal organizations and internships, sharpening
              leadership, teamwork, and problem-solving skills.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-3 mt-6">
            <a>
              href="#projects"
              className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-full transition-colors"
            >
              View Projects
            </a>
            
              href="#contact"
              className="px-5 py-2.5 border border-surface-border hover:border-brand-400/50 text-slate-300 hover:text-white text-sm font-semibold rounded-full transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {highlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
            onMouseMove={handleSpotlight}
            className="bento-card lg:col-span-2 md:col-span-1 p-6 flex flex-col justify-between min-h-[140px] group"
          >
            <div className="relative z-10 text-slate-500 group-hover:text-brand-400 transition-colors">
              {item.icon}
            </div>
            <div className="relative z-10">
              <p className="text-2xl lg:text-3xl font-bold text-white">
                <CountUp
                  numeric={item.numeric}
                  decimals={item.decimals}
                  suffix={item.suffix}
                />
              </p>
              <p className="text-slate-500 text-xs mt-1">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
