import { 
  FaHtml5, FaCss3, FaJs, FaBootstrap, FaWordpress, FaPython
} from "react-icons/fa";
import { 
  SiTailwindcss, SiPhp, SiJupyter, SiPostgresql, SiStreamlit, SiDjango, SiTensorflow, SiGooglecolab 
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import powerbi from "../assets/SkillsAsset/1.png";
import keras from "../assets/SkillsAsset/2.png";


const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3 />, color: "text-blue-500" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
    { name: "WordPress", icon: <FaWordpress />, color: "text-blue-400" },
    { name: "MySQL", icon: <GrMysql />, color: "text-blue-600" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
    { name: "Python", icon: <FaPython />, color: "text-blue-400" },
    { name: "Google Colab", icon: <SiGooglecolab />, color: "text-yellow-500" },
    { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-500" },
    { name: "Django", icon: <SiDjango />, color: "text-green-500" },
    { name: "Streamlit", icon: <SiStreamlit />, color: "text-red-500" },
    { name: "TensorFlow", icon: <SiTensorflow />, color: "text-yellow-600" },
    { name: "Keras", icon: <img src={keras} alt="Keras" className="w-12 h-12" /> },
    { name: "Power BI", icon: <img src={powerbi} alt="Power BI" className="w-12 h-12" /> },
  ];


  return (
    <section id="skills" className="relative py-12 bg-transparent">
      
      <div className="container mx-auto px-6 relative py-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          data-aos="fade-up" 
          data-aos-offset="200">
          Skills & Technologies
          </h2>
          <div 
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-sky-400 mx-auto mt-4 rounded-full"
            data-aos="zoom-in" 
            data-aos-offset="100"
          ></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 ease-out hover:border-blue-500/50"
              data-aos="zoom-in-up"
              data-aos-delay={`${index * 50}`} 
              data-aos-offset="150"
              data-aos-duration="600"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className={`text-5xl mb-5 transition-all duration-300 group-hover:scale-110 ${skill.color}`}>
                  {skill.icon}
                </div>
                
                <h3 className="text-base font-semibold text-gray-200 text-center leading-tight">
                  {skill.name}
                </h3>
                
                <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mt-4 group-hover:w-10 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;