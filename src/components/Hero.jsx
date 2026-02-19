import TypeWriter from "typewriter-effect";
import Lottie from "lottie-react";
import animation from "../assets/Animation.json";
import CV from '../assets/CV/RichEdrickAnthonios_CurriculumVitae.pdf'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container mx-auto md:mt-48 mt-20 h-auto flex justify-between flex-wrap">

      <div className="w-full lg:w-3/5 h-auto order-2 lg:order-1 text-sky-100 p-6 text-center lg:text-left flex flex-col justify-center lg:ps-16">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold lg:text-5xl text-2xl mt-8 lg:mt-36 mb-5"
        >
          Hola! 欢迎
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold lg:text-5xl text-2xl mb-5"
        >
          I'm <span className="text-sky-300">Rich</span> Edrick Anthonios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold lg:text-4xl text-xl text-sky-300 mb-10"
        >
          <TypeWriter
            options={{
              strings: ["Data Enthusiast", "Front-End Developer", "WordPress Developer"],
              autoStart: true,
              loop: true,
              cursor: "|",
            }}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex justify-center lg:justify-start"
        >
          <a
            href={CV}
            download="RichEdrickAnthonios_CurriculumVitae.pdf"
            className="flex gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black lg:px-7 lg:py-5 px-3 py-3 rounded-full border border-sky-600 hover:scale-105 duration-200 hover:border-blue-950 hover:from-sky-600 hover:to-cyan-500">
            Download CV
            <svg className="animate-bounce" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="white">
              <path d="M5 20h14v-2H5v2Zm7-4 5-5h-3V4h-4v7H7l5 5Z"></path>
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="w-full lg:w-2/5 h-auto order-1 lg:order-2 flex items-center justify-center lg:justify-end lg:mt-8 mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4/5 h-auto flex items-center justify-center lg:my-10"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Lottie
              animationData={animation}
              loop={true}
              className="lg:h-[400px] lg:w-[410px] h-[320px] w-[250px]"
            />
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;