import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from '../assets/ProjectAsset/1.png';
import Image2 from '../assets/ProjectAsset/2.jpg';
import Image3 from '../assets/ProjectAsset/3.png';
import Image4 from '../assets/ProjectAsset/4.jpg';
import Image5 from '../assets/ProjectAsset/5.png';
import Image6 from '../assets/ProjectAsset/6.png';
import Image7 from '../assets/ProjectAsset/7.png';
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { id: 1, title: "Basic Semantic Website", tools: ["Html", "Css"], description: "A modern web app.", link: "https://richeaa.github.io/SimpleSemanticWeb/", image: Image2, span: "row-span-2" },
  { id: 2, title: "AkuLapar", tools: ["Php", "JavaScript", "MySql"], description: "A website where users can find a lot of restaurant around Indonesia.", link: "https://github.com/Richeaa/Restaurant-Food-Website", image: Image1, span: "row-span-2 " },
  { id: 3, title: "Bicycle Usage Pattern", tools: ["Python", "Streamlit"], description: "Data analysis project that focuses on bicycle usage patterns based on various factors such as weather, weekdays, etc.", link: "https://richcode.streamlit.app/", image: Image3, span: "row-span-2" },
  { id: 4, title: "Flick Tutor", tools: ["Bootstrap"], description: "A static website that showcases a variety of services and features designed to connect students with expert tutors across multiple subjects.", link: "https://richeaa.github.io/Tutor-Website/", image: Image4, span: "row-span-2 " },
  { id: 5, title: "Toko Mega Makmur", tools: ["Wordpress", "Hostinger"], description: "Website that provides all handyman equipment needs.", link: "https://tokomegamakmur.com/", image: Image5, span: "row-span-2" },
  { id: 6, title: "Portofolio", tools: ["React", "Vite"], description: "Portofolio website", link: "#", image: Image6, span: "row-span-2" },
  { id: 7, title: "Machine Learning", tools: ["Python", "Django"], description: "Group project for data science students where we have to create a web including models, views, predictions, etc using django framework.", link: "https://github.com/Richeaa/dsproject", image: Image7, span: "row-span-2" },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="container mx-auto my-12 p-4 lg:mt-36 mt-16 md:py-12">
    <div className="text-center mb-12">
      <h2 className="md:text-5xl text-4xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent pt-4 p-2" 
    data-aos="fade-up">
      Projects
      </h2>
       <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-sky-400 mx-auto mt-4" data-aos="zoom-in" data-aos-offset="200"></div>
    </div>
    

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[120px] md:auto-rows-[170px] px-3 md:px-0 gap-y-8 md:gap-y-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay = {index * 80}
            className={`bg-slate-800 bg-opacity-75 border border-gray-700 p-4 rounded-lg  flex flex-col items-center cursor-pointer border-2  hover:border-blue-200  ${project.span}`}
            onClick={() => setSelectedProject(project)}
          >
            
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg " />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 px-5 md:px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-md w-full relative text-white border border-gray-700"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <button
                className="absolute top-2 right-3 text-gray-400 hover:text-gray-200"
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-lg opacity-90" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-4">{selectedProject.title}</h3>
              <p className="mt-2">{selectedProject.description}</p>
              <p className="mt-2">
                <span className="font-semibold">Tools:</span> {selectedProject.tools.join(", ")}
              </p>
              <a
                href={selectedProject.link}
                className="block mt-4 bg-sky-500 text-white text-center py-2 rounded-lg hover:bg-sky-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center items-center gap-1">
                <span>View Project</span>
                <FaExternalLinkAlt className="text-sm" />
                </div>

              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;