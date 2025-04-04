import TypeWriter from "typewriter-effect";
import Lottie from "lottie-react";
import animation from "../assets/Animation.json";
import CV from '../assets/CV/CV_Rich Edrick Anthonios.pdf'

const Hero = () => {
  return (
    <div className="container mx-auto md:mt-32 h-auto flex justify-between flex-wrap">

      <div className=" w-full lg:w-3/5 h-auto order-2 lg:order-1 text-sky-100 p-6 text-center lg:text-left">
        <h1 className="font-bold lg:text-5xl text-2xl mt-8 lg:mt-36 lg:ms-9 mb-5">Hi! 欢迎</h1>
        <h1 className="font-bold lg:text-5xl text-2xl lg:ms-9 mb-5">
          I'm <span className="text-sky-300">Rich</span> Edrick Anthonios
        </h1>
        <p className="lg:ms-9 font-semibold lg:text-4xl text-xl text-sky-300 mb-10">
          <TypeWriter
            options={{
              strings: ["Data Enthusiast", "Front-End Developer", "WordPress Developer"],
              autoStart: true,
              loop: true,
              cursor: "|",
            }}
          />
        </p>
        
      <div className="flex justify-center lg:justify-start lg:ms-8">
        <a 
        href={CV}
        download="CV_RichEdrickAnthonios.pdf" 
        className="flex gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:px-7 lg:py-5 px-3 py-3 rounded-full border border-sky-600 hover:scale-105 duration-200 hover:border-blue-950 hover:from-sky-600 hover:to-cyan-500 ">
        Download CV
        <svg className="animate-bounce" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="white">
        <path d="M5 20h14v-2H5v2Zm7-4 5-5h-3V4h-4v7H7l5 5Z"></path>
        </svg>
        </a>
        </div>
      </div>

      <div className=" w-full lg:w-2/5 h-auto order-1 lg:order-2 flex items-center justify-center lg:mt-8 mt-16 ">
      <div className="max-w-4/5 h-auto flex items-center justify-center   lg:my-10">
      <Lottie 
      animationData={animation}
      loop={true}
      className="lg:h-[400px] lg:w-[410px] h-[320px] w-[250px]"
      />
        </div>
      </div>
    </div>
  );
};

export default Hero;
