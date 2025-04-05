import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaWordpress, FaPython, } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiGooglecolab, SiJupyter } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Html", icon: <FaHtml5 className="text-orange-600" /> }, 
    { name: "Css", icon: <FaCss3 className="text-blue-600" /> }, 
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> }, 
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> }, 
    { name: "Wordpress", icon: <FaWordpress className="text-cyan-400" /> }, 
    { name: "Sql", icon: <SiMysql className="text-indigo-400" /> }, 
    { name: "Python", icon: <FaPython className="text-blue-300" /> }, 
    { name: "Colab", icon: <SiGooglecolab className="text-yellow-400" /> }, 
    { name: "Jupyter", icon: <SiJupyter className="text-orange-400" /> }, 
];


  return (
    <section id="skills" className="md:py-12">
      <div className="container mx-auto px-6 lg:mt-36 mt-16">
        <h2 className="md:text-5xl text-4xl font-extrabold text-center text-sky-200 pt-6" data-aos="fade-up">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-12 mt-16 md:mt-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-slate-800 bg-opacity-75 rounded-lg shadow-md"  data-aos="zoom-in"
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
