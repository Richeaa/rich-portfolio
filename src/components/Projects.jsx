import { useState } from "react";
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

const projects = [
  { 
    id: 1, 
    title: "Academic Schedule Optimization", 
    tools: ["Python", "Django", "PostgreSQL"], 
    description: "Academic website application that helps lecturers to be assigned to courses and class schedules whether it's manually or automatically using random forest algorithm.", 
    link: "https://github.com/Richeaa/academic-project", 
    image: Image10, 
    category: "Web Development & Machine Learning" 
  },
  { 
    id: 2, 
    title: "Amazon Sales Analysis Dashboard", 
    tools: ["Power BI", "DAX", "Power Query"], 
    description: "A comprehensive Power BI dashboard that visualizes Amazon's sales performance related to sales patterns, product performance, and regional trends.", 
    link: "https://github.com/Richeaa/amazon-sales-dashboard", 
    image: Image9, 
    category: "Data Analyst & Visualization" 
  },
  { 
    id: 3, 
    title: "Movie Recommendation System", 
    tools: ["Python", "Streamlit", "Jupyter Notebook"], 
    description: "An intelligent movie recommendation engine that suggests similar films based on user preferences using cosine similarity algorithms.", 
    link: "https://rich-movie-recommend-system.streamlit.app/", 
    image: Image8, 
    category: "Machine Learning" 
  },
  { 
    id: 4, 
    title: "Machine Learning Web Based", 
    tools: ["Python", "Django", "Tailwind CSS", "PostgreSQL"], 
    description: "A collaborative data science platform featuring machine learning models, data visualization, and predictive analytics tools.", 
    link: "https://github.com/Richeaa/dsproject", 
    image: Image7, 
    category: "Machine Learning" 
  },
  { 
    id: 5, 
    title: "Vehicle Classifier", 
    tools: ["TensorFlow", "Streamlit", "Jupyter Notebook"], 
    description: "A sophisticated image classification application that accurately distinguishes between cars and motorcycles using advanced deep learning models.", 
    link: "https://vehicleclassifier.streamlit.app/", 
    image: Image2, 
    category: "Machine Learning" 
  },
  { 
    id: 6, 
    title: "AkuLapar", 
    tools: ["PHP", "JavaScript", "MySQL"], 
    description: "A comprehensive restaurant discovery platform that helps users find and explore dining options across Indonesia with detailed information and reviews.", 
    link: "https://github.com/Richeaa/Restaurant-Food-Website", 
    image: Image1, 
    category: "Web Development" 
  },
  { 
    id: 7, 
    title: "Flick Tutor", 
    tools: ["Bootstrap"], 
    description: "A modern, responsive website connecting students with expert tutors across multiple subjects with an intuitive matching system.", 
    link: "https://richeaa.github.io/Tutor-Website/", 
    image: Image4, 
    category: "Web Development" 
  },
  { 
    id: 8, 
    title: "Toko Mega Makmur", 
    tools: ["WordPress", "Hostinger", "Google Search Console", "SEO"], 
    description: "A comprehensive e-commerce platform specializing in handyman equipment with integrated inventory management and customer support.", 
    link: "https://tokomegamakmur.id/", 
    image: Image5, 
    category: "E-commerce" 
  },
  { 
    id: 9, 
    title: "Portfolio", 
    tools: ["React", "Vite"], 
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and clean design.", 
    link: "#", 
    image: Image6, 
    category: "Web Development" 
  },
  { 
    id: 10, 
    title: "Bicycle Usage Pattern", 
    tools: ["Python", "Streamlit"], 
    description: "An in-depth data analysis project examining bicycle usage patterns influenced by weather conditions, weekdays, and seasonal factors.", 
    link: "https://richcode.streamlit.app/", 
    image: Image3, 
    category: "Data Visualization" 
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 
            className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            data-aos="fade-up" 
          >
            Featured Projects
          </h2>

          <div 
            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full"
            data-aos="zoom-in" 
            data-aos-offset="100"
          ></div>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              data-aos="fade-up"
              data-aos-delay={project.id * 50}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {project.description.length > 80 
                    ? `${project.description.substring(0, 80)}...` 
                    : project.description
                  }
                </p>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <FaExternalLinkAlt className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4"
          onClick={() => setSelectedProject(null)}
          data-aos="fade"
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            data-aos="zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-64 object-cover rounded-t-2xl" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-t-2xl" />
              
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-slate-800/80 backdrop-blur-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-full flex items-center justify-center transition-all duration-200"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-blue-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h4 className="text-slate-400 font-medium mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={selectedProject.link}
                className="group inline-flex items-center gap-3 bg-blue-600/80 hover:bg-blue-500 text-white text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Project</span>
                <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;