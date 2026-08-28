import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from '../assets/ProjectAsset/1.png';
import Image2 from '../assets/ProjectAsset/2.png';
import Image3 from '../assets/ProjectAsset/3.png';
import Image4 from '../assets/ProjectAsset/4.jpg';
import Image5 from '../assets/ProjectAsset/5.png';
import Image6 from '../assets/ProjectAsset/6.png';
import Image7 from '../assets/ProjectAsset/7.png';
import Image8 from '../assets/ProjectAsset/8.png';
import Image9 from '../assets/ProjectAsset/9.png';
import Image10 from '../assets/ProjectAsset/10.png';
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const handleSpotlight = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

const projects = [
  {
    id: 1,
    title: "Academic Schedule Optimization",
    tools: ["Python", "Django", "PostgreSQL"],
    description: "Academic website application that helps lecturers to be assigned to courses and class schedules whether it's manually or automatically using random forest algorithm.",
    link: "https://github.com/Richeaa/academic-project",
    image: Image10,
    category: "Web Development & Machine Learning",
    featured: true,
  },
  {
    id: 2,
    title: "Amazon Sales Analysis Dashboard",
    tools: ["Power BI", "DAX", "Power Query"],
    description: "A comprehensive Power BI dashboard that visualizes Amazon's sales performance related to sales patterns, product performance, and regional trends.",
    link: "https://github.com/Richeaa/amazon-sales-dashboard",
    image: Image9,
    category: "Data Analyst & Visualization",
    featured: true,
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    tools: ["Python", "Streamlit", "Jupyter Notebook"],
    description: "An intelligent movie recommendation engine that suggests similar films based on user preferences using cosine similarity algorithms.",
    link: "https://rich-movie-recommend-system.streamlit.app/",
    image: Image8,
    category: "Machine Learning",
  },
  {
    id: 4,
    title: "Machine Learning Web Based",
    tools: ["Python", "Django", "Tailwind CSS", "PostgreSQL"],
    description: "A collaborative data science platform featuring machine learning models, data visualization, and predictive analytics tools.",
    link: "https://github.com/Richeaa/dsproject",
    image: Image7,
    category: "Machine Learning",
  },
  {
    id: 5,
    title: "Vehicle Classifier",
    tools: ["TensorFlow", "Streamlit", "Jupyter Notebook"],
    description: "A sophisticated image classification application that accurately distinguishes between cars and motorcycles using advanced deep learning models.",
    link: "https://vehicleclassifier.streamlit.app/",
    image: Image2,
    category: "Machine Learning",
  },
  {
    id: 6,
    title: "AkuLapar",
    tools: ["PHP", "JavaScript", "MySQL"],
    description: "A comprehensive restaurant discovery platform that helps users find and explore dining options across Indonesia with detailed information and reviews.",
    link: "https://github.com/Richeaa/Restaurant-Food-Website",
    image: Image1,
    category: "Web Development",
  },
  {
    id: 7,
    title: "Flick Tutor",
    tools: ["Bootstrap"],
    description: "A modern, responsive website connecting students with expert tutors across multiple subjects with an intuitive matching system.",
    link: "https://richeaa.github.io/Tutor-Website/",
    image: Image4,
    category: "Web Development",
  },
  {
    id: 8,
    title: "Toko Mega Makmur",
    tools: ["WordPress", "Hostinger", "Google Search Console", "SEO"],
    description: "A comprehensive e-commerce platform specializing in handyman equipment with integrated inventory management and customer support.",
    link: "https://tokomegamakmur.id/",
    image: Image5,
    category: "E-commerce",
  },
  {
    id: 9,
    title: "Portfolio",
    tools: ["React", "Vite"],
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and clean design.",
    link: "#",
    image: Image6,
    category: "Web Development",
  },
  {
    id: 10,
    title: "Bicycle Usage Pattern",
    tools: ["Python", "Streamlit"],
    description: "An in-depth data analysis project examining bicycle usage patterns influenced by weather conditions, weekdays, and seasonal factors.",
    link: "https://richcode.streamlit.app/",
    image: Image3,
    category: "Data Visualization",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="container mx-auto px-4 md:px-6 py-20 md:py-28">
      <div className="text-center mb-14" data-aos="fade-up">
        <p className="text-brand-400 text-xs font-mono tracking-wider uppercase mb-3">
          Explore My Work
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            onMouseMove={handleSpotlight}
            onClick={() => setSelectedProject(project)}
            className={`bento-card group cursor-pointer ${
              project.featured ? "sm:col-span-2" : ""
            }`}
          >
            <div className={`relative overflow-hidden ${project.featured ? "h-56" : "h-44"}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />

              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 bg-ink-950/70 backdrop-blur-sm border border-surface-border text-brand-300 text-[11px] font-mono rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-3 right-3 z-10 w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExternalLinkAlt className="text-white text-xs" />
              </div>
            </div>

            <div className="relative z-10 p-5">
              <h3 className="text-white font-semibold mb-2 group-hover:text-brand-400 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tools.slice(0, 3).map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 bg-surface-700/60 text-slate-400 text-[11px] font-mono rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-ink-950/85 backdrop-blur-sm z-[90] p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="bg-surface-900 border border-surface-border rounded-4xl shadow-bento max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 md:h-64 object-cover rounded-t-4xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent rounded-t-4xl" />

                <button
                  className="absolute top-4 right-4 w-9 h-9 bg-ink-950/70 backdrop-blur-sm text-slate-300 hover:text-white hover:bg-ink-950 rounded-full flex items-center justify-center transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </button>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-brand-500/90 backdrop-blur-sm text-white text-xs font-mono rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-surface-800 border border-surface-border text-slate-300 text-xs font-mono rounded-lg"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                
                  href={selectedProject.link}
                  className="group inline-flex items-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3.5 rounded-full font-medium transition-colors duration-200 shadow-glow-brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project</span>
                  <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-200 text-sm" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
