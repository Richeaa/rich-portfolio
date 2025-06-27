import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaWordpress, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiJupyter, SiPostgresql, SiStreamlit, SiDjango } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import powerbi from '../assets/SkillsAsset/1.png';

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
    { name: "CSS3", icon: <FaCss3 />, color: "text-blue-600" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "PHP", icon: <SiPhp />, color: "text-blue-500" },
    { name: "WordPress", icon: <FaWordpress />, color: "text-cyan-400" },
    { name: "MySQL", icon: <GrMysql />, color: "text-cyan-500" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-500" },
    { name: "Python", icon: <FaPython />, color: "text-blue-400" },
    { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-500" },
    { name: "Django", icon: <SiDjango />, color: "text-green-600" },
    { name: "Power BI", icon: <img src={powerbi} alt="Power BI" className="w-8 h-8" />, color: "text-yellow-500" },
    { name: "Streamlit", icon: <SiStreamlit />, color: "text-red-500" },
  ];

  return (
    <section id="skills" className="relative mt-16 py-16 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 ">
          <h2 
            className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            data-aos="fade-up" 
            data-aos-offset="100"
          >
            Skills & Technologies
          </h2>
          <div 
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-sky-400 mx-auto mt-4 rounded-full"
            data-aos="zoom-in" 
            data-aos-offset="100"
          ></div>
        </div>

 
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/20 hover:translate-y-[-5px]"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              data-aos-offset="100"
            >
             
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${skill.color}`}></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={`lg:text-5xl text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white text-center">{skill.name}</h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;