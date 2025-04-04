import ProfileLogo from "../assets/Profil.png";

const About = () => {
  return (
    <>
    <div id="about" className="container mx-auto md:mt-40 h-auto mt-20">
    <h1 className="md:text-5xl text-4xl font-extrabold text-center text-sky-200 pt-6">
    About
    </h1>

    </div>
    <section className="container mx-auto mt-16 md:mt-12 h-auto flex justify-between flex-wrap lg:flex-nowrap p-4">
    <div className=" w-full lg:w-1/3 h-auto flex items-center justify-center lg:justify-start">
    <div className="rounded-3xl max-w-4/5 h-auto flex items-center justify-center bg-blue-700 bg-opacity-20 border-2 lg:my-12 hover:scale-105 transition-transform duration-500 ease-in-out">
    <img src={ProfileLogo} 
    alt="Profile" 
    width="300px" className="lg:w-[450px]" />
    </div>
    </div>

     <div className="w-full lg:w-2/3 h-auto text-white p-6 text-justify flex items-center">
        <h1 className="font-bold lg:text-2xl text-md lg:ms-9 mt-12 lg:mt-none">I am a 5-th Information System student at President University with GPA 3,92. Dedicated and detail- oriented, with a strong desire to organize and manage information. Passion in designing systems that are precisely organized and easily accessible. As an individual who is dedicated and has good attention to detail, I am very adept at quick and precise calculations.
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
