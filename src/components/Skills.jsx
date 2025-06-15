import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaWordpress, FaPython, } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiJupyter, SiPostgresql, SiStreamlit, SiDjango } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import powerbi from '../assets/SkillsAsset/1.png';

const Skills = () => {
  const skills = [
    { name: "Html", icon: <FaHtml5 className="text-orange-600" /> }, 
    { name: "Css", icon: <FaCss3 className="text-blue-600" /> }, 
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-300" /> }, 
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> }, 
    { name: "Php", icon: <SiPhp className="text-blue-500" /> }, 
    { name: "Wordpress", icon: <FaWordpress className="text-cyan-400" /> }, 
    { name: "Sql", icon: <GrMysql className="text-cyan-500" /> },
    { name: "PostgreSql", icon: <SiPostgresql className="text-sky-500" /> }, 
    { name: "Python", icon: <FaPython className="text-blue-300" /> }, 
    { name: "Jupyter", icon: <SiJupyter className="text-orange-400" /> }, 
    { name: "Django", icon: <SiDjango className="text-green-600" /> }, 
    { name: "Power BI", icon: <img src={powerbi} alt="Power BI" className="w-8 h-8" /> },
    { name: "Streamlit", icon: <SiStreamlit className="text-red-500" /> }, 
];


  return (
    <section id="skills" className="md:py-12">
      <div className="container mx-auto px-6 lg:mt-36 mt-16">
        <h2 className="md:text-5xl text-4xl font-extrabold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent pt-6" data-aos="fade-up" data-aos-offset="200" >Skills & Tools</h2>
         <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-sky-400 mx-auto mt-4" data-aos="zoom-in" data-aos-offset="200"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-12 mt-16 md:mt-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-slate-800 bg-opacity-75 rounded-lg shadow-md"  data-aos="zoom-in" data-aos-offset="300"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-lg font-bold text-white mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
