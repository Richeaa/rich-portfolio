import ProfileLogo from "../assets/AboutAsset/Profil.png";

const About = () => {
  const highlights = [
    { 
      number: "3.91", 
      label: "GPA",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    { 
      number: "7th", 
      label: "Semester",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      number: "6+", 
      label: "Volunteer Experience",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      number: "10+", 
      label: "Projects Completed",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
  ];

  return (
    <>
      <div id="about" className="lg:mt-36 relative overflow-hidden py-20 lg:py-16">
        <div className="absolute inset-0"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3"
            data-aos="fade-up">
            Get to Know Me
            </p>
            <h1 
              className="text-2xl md:text-4xl font-extrabold text-white  mb-4"
              data-aos="fade-up" 
              data-aos-offset="200"
            >
              About
            </h1>
            <div 
            className="w-16 h-1 bg-blue-500 mx-auto"
            data-aos="zoom-in" 
            data-aos-delay="200"
          ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-8 items-center mb-16">
        
            <div 
              className="order-1 flex justify-center lg:justify-start"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                <div className="bg-gray-900 rounded-2xl p-3">
                  <img 
                    src={ProfileLogo} 
                    alt="Profile"  
                    className="w-full rounded-xl shadow-2xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>
            </div>

            <div 
              className="order-2 space-y-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="space-y-6 text-center lg:text-justify">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Hello! I'm <span className="bg-gradient-to-r from-blue-400 to-sky-600 bg-clip-text text-transparent">Rich</span>
                </h2>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-base lg:text-lg">
                    <strong className="text-white">7th-semester Information System student</strong> at President University with a GPA of 3.91, concentrating in Data Science.
                  </p>
                  
                  <p className="text-base lg:text-lg">
                    Dedicated and detail-oriented, with a strong passion for organizing and analyzing data. During my college years, i have learned start from web development, business process, and analyze data. Currently focuses on data analysis using Python, SQL, Excel, and Power BI to derive insights and support data-driven decisions.
                  </p>
                  
                  <p className="text-base lg:text-lg">
                    Besides that, I've actively participated in internal organizations and internship, which have honed my skills in leadership, teamwork, andproblem-solving.
                  </p>
                </div>

          
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <a 
                    href="#projects" 
                    className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 text-center shadow-lg shadow-blue-500/25"
                  >
                    View Projects
                  </a>
                  <a 
                    href="#contact" 
                    className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 text-center"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>

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
                <div className="flex justify-center mb-4 text-white group-hover:text-blue-500 transition-colors">
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