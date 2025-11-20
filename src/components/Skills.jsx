import { 
  FaHtml5, FaCss3, FaJs, FaBootstrap, FaWordpress, FaPython, FaReact, FaDocker
} from "react-icons/fa";
import { 
  SiTailwindcss, SiPhp, SiJupyter, SiPostgresql, SiStreamlit, SiDjango, SiTensorflow, SiGooglecolab, SiMiro, SiLooker, SiVite 
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import powerbi from "../assets/SkillsAsset/1.png";
import keras from "../assets/SkillsAsset/2.png";
import lucid from "../assets/SkillsAsset/3.png";
import vite from "../assets/SkillsAsset/4.png";
import sqlserver from "../assets/SkillsAsset/5.png";
import telerik from "../assets/SkillsAsset/6.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3 />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Vite", icon: <img src={vite} alt="Vite" className="w-10 h-10" />  },
      ]
    },
    {
      title: "Backend & CMS",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
        { name: "Python", icon: <FaPython />, color: "text-blue-400" },
        { name: "Django", icon: <SiDjango />, color: "text-green-500" },
        { name: "WordPress", icon: <FaWordpress />, color: "text-blue-400" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
      ]
    },
    {
      title: "Database",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: [
        { name: "MySQL", icon: <GrMysql />, color: "text-blue-600" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
        { name: "SQL Server", icon: <img src={sqlserver} alt="Sql Server" className="w-10 h-10" /> },
      ]
    },
    {
      title: "Data Science & ML",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: [
        { name: "Google Colab", icon: <SiGooglecolab />, color: "text-yellow-500" },
        { name: "Jupyter", icon: <SiJupyter />, color: "text-orange-500" },
        { name: "TensorFlow", icon: <SiTensorflow />, color: "text-yellow-600" },
        { name: "Keras", icon: <img src={keras} alt="Keras" className="w-10 h-10" /> },
        { name: "Streamlit", icon: <SiStreamlit />, color: "text-red-500" },
      ]
    },
    {
      title: "Data Visualization",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      skills: [
        { name: "Power BI", icon: <img src={powerbi} alt="Power BI" className="w-10 h-10" /> },
        { name: "Looker Studio", icon: <SiLooker />, color: "text-sky-400" },
      ]
    },
    {
      title: "Quality Assurance & Testing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      ),
      skills: [
        { name: "Telerik Test Studio", icon: <img src={telerik} alt="Telerik Test Studio" className="w-10 h-10" /> },
      ]
    },
    {
      title: "Design & Collaboration",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      skills: [
        { name: "Lucid Chart", icon: <img src={lucid} alt="Lucid Chart" className="w-10 h-10" /> },
        { name: "Miro", icon: <SiMiro />, color: "bg-yellow-500 rounded-lg" },
      ]
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-transparent">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3"
            data-aos="fade-up">
            My Expertise
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4"
            data-aos="fade-up" 
            data-aos-delay="100">
            Skills & Technologies
          </h2>
          <div 
            className="w-16 h-1 bg-blue-500 mx-auto"
            data-aos="zoom-in" 
            data-aos-delay="200"
          ></div>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gray-800"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                    data-aos="zoom-in"
                    data-aos-delay={skillIndex * 50}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent rounded-xl transition-all duration-300"></div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`text-4xl mb-3 transition-all duration-300 group-hover:scale-110 ${skill.color || 'text-gray-400'}`}>
                        {skill.icon}
                      </div>
                      
                      <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;