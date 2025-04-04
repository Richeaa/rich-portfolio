import Wavify from 'react-wavify';
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="relative  text-white pt-20 pb-32 overflow-hidden">
      <div className="relative z-10">
        <div className="container mx-auto px-3 md:px-0">
          <div className="flex flex-col items-center">
            <h2 className="md:text-4xl text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="mb-8 text-center md:text-2xl text-md px-3">
              Interested in working together or have any questions? Feel free to reach out!
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a href="https://wa.me/628114585676" target="_blank"
                  rel="noopener noreferrer" className="hover:text-sky-200 transition">
                <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href="https://instagram.com/rich.ea" target="_blank"
                  rel="noopener noreferrer" className="hover:text-sky-200 transition">
                <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href="https://www.linkedin.com/in/richea/" target="_blank"
                  rel="noopener noreferrer" className="hover:text-sky-200 transition">
              <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a href="https://github.com/Richeaa" target="_blank"
                  rel="noopener noreferrer" className="hover:text-sky-200 transition">
              <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </div>
            
            <p className="md:text-xl text-lg text-sky-100 text-center">
              © {new Date().getFullYear()} Richeaa. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        
        <Wavify
          fill="#0ea5e9"
          paused={false}
          options={{
            height: 30,
            amplitude: 60,
            speed: 0.2,
            points: 5
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            opacity: 0.7
          }}
        />
        
       
        <Wavify
          fill="#0284c7"
          paused={false}
          options={{
            height: 40,
            amplitude: 50,
            speed: 0.15,
            points: 4
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            opacity: 0.5
          }}
        />
      </div>
    </section>
  );
};

export default Footer;