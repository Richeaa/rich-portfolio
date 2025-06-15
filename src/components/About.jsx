import ProfileLogo from "../assets/Profil.png";

const About = () => {
  return (
    <>
    <div id="about" className="container mx-auto md:mt-40 h-auto mt-20">
    <div>
    <h1 className="md:text-5xl text-4xl font-extrabold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent pt-6"
        data-aos="fade-up" data-aos-offset="200">
        About Me
    </h1>
    <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-sky-400 mx-auto mt-4" data-aos="zoom-in" data-aos-offset="200"></div>
</div>

    </div>
    <section className="container mx-auto mt-16 md:mt-0 h-auto flex justify-between flex-wrap lg:flex-nowrap p-4">
    <div className=" w-full lg:w-1/3 h-auto flex items-center justify-center lg:justify-start"  data-aos="zoom-in"
    data-aos-delay="100" >
    <div className="rounded-3xl max-w-4/5 h-auto flex items-center justify-center bg-blue-700 bg-opacity-20 border-2 lg:my-12 hover:scale-105 transition-transform duration-500 ease-in-out">
    <img src={ProfileLogo} 
    alt="Profile" 
    width="300px" className="lg:w-[450px]" />
    </div>
    </div>

     <div className="w-full lg:w-2/3 h-auto text-white p-6 text-justify flex items-center" data-aos="fade-left"
    data-aos-delay="200" >
        <h1 className="font-bold lg:text-2xl text-md lg:ms-9 mt-12 lg:mt-none">6-th Information System student at President University with GPA 3,92. Dedicated and detail- oriented, with a strong desire to organize and manage information. Passion in designing systems that are precisely organized and easily accessible. As an individual who is dedicated and has good attention to detail, I am very adept at quick and precise calculations.
        <br></br> 
        <br></br>
        During my college year, i actively participated in internal organizations and internship which honed my skills in leadership, teamwork, and problem-solving.
        </h1>
        </div>
       
     </section>
    </>
  );
}

export default About;
