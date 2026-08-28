import Img1 from '../assets/CertificateAsset/1.jpg'
import Img2 from '../assets/CertificateAsset/2.jpg'
import Img3 from '../assets/CertificateAsset/3.jpg'
import Img4 from '../assets/CertificateAsset/4.jpg'
import Img5 from '../assets/CertificateAsset/5.png'
import Img6 from '../assets/CertificateAsset/6.jpg'
import { CiLinkedin } from "react-icons/ci";

const Certificate = () => {
  const certificates = [
    { id: 1, img: Img1, alt: "Dicoding Certificate" },
    { id: 2, img: Img4, alt: "Event Certificate" },
    { id: 3, img: Img2, alt: "Dicoding Certificate" },
    { id: 4, img: Img5, alt: "Event Certificate" },
    { id: 5, img: Img3, alt: "Event Certificate" },
    { id: 6, img: Img6, alt: "Achievement" },
  ];

  return (
    <>
      <section id="certificate" className="container mx-auto my-12 p-4 lg:mt-34 mt-16 md:py-12">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-3"
            data-aos="fade-up">
            My Achievements
          </p>
          <h2 
            className="md:text-4xl text-2xl font-extrabold text-white mb-4" 
            data-aos="fade-up" 
            data-aos-offset="200"
          >
            Certifications
          </h2>
          <div 
            className="w-16 h-1 bg-blue-500 mx-auto"
            data-aos="zoom-in" 
            data-aos-delay="200"
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 px-4 md:px-0">  
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              className="group bg-slate-700/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-offset="150"
            >
              <div className="p-3">
                <img
                  src={cert.img}
                  loading="lazy"
                  alt={cert.alt}
                  className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
  <a 
    href="https://www.linkedin.com/in/richea/" 
    className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 group"
  >
    <CiLinkedin className="text-2xl md:text-3xl text-white" />
    <span className="text-lg md:text-xl text-white font-medium">
      More on LinkedIn
    </span>
  </a>
</div>

      </section>
    </>
  );
};

export default Certificate;