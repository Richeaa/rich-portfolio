import ProfileLogo from "../assets/Profil.png";

const About = () => {
  const highlights = [
    { number: "3.90", label: "GPA", icon: "🎓" },
    { number: "6th", label: "Semester", icon: "📚" },
    { number: "6+", label: "Volunteer Experience", icon: "🔎" },
    { number: "8+", label: "Projects Completed", icon: "🚀" }
  ];

  return (
    <>
      <div id="about" className="lg:mt-36 relative overflow-hidden py-20 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 
              className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              data-aos="fade-up" 
              data-aos-offset="200"
            >
              About Me
            </h1>
            <div 
            className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-sky-400 mx-auto mt-4 rounded-full"
            data-aos="zoom-in" 
            data-aos-offset="100"
          ></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-8 items-center mb-16">
        
            <div 
              className="order-1 flex justify-center lg:justify-start"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-2 border border-gray-700/50">
                  <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-4 hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img 
                      src={ProfileLogo} 
                      alt="Profile"  
                      className="w-full max-w-sm mx-auto rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-ping"></div>
              </div>
            </div>

            <div 
              className="order-2 space-y-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="space-y-6 text-center lg:text-justify">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Hello! I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rich</span>
                </h2>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-base lg:text-lg">
                    <strong className="text-white">6th-semester Information System student</strong> at President University with a <strong className="text-blue-400">GPA of 3.90</strong>, concentrating in <strong className="text-purple-400">Data Science</strong>.
                  </p>
                  
                  <p className="text-base lg:text-lg">
                    Dedicated and detail-oriented, with a strong passion for organizing and analyzing data. I specialize in <strong className="text-green-400">Python</strong> and <strong className="text-blue-400">SQL</strong>, with extensive experience using analytics tools like <strong className="text-orange-400">Power BI</strong> to derive insights and support data-driven decisions.
                  </p>
                  
                  <p className="text-base lg:text-lg">
                    During my college years, I've actively participated in internal organizations and internship, which have honed my skills in <strong className="text-indigo-400">leadership</strong>, <strong className="text-pink-400">teamwork</strong>, and <strong className="text-cyan-400">problem-solving</strong>.
                  </p>
                </div>

          
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <a 
                    href="#projects" 
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                  >
                    View My Projects
                  </a>
                  <a 
                    href="#contact" 
                    className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 text-center"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {item.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;