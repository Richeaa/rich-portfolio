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
    <section id="certificate" className="container mx-auto my-12 p-4 lg:mt-36 mt-16 md:py-12" >
    <h2 className="md:text-5xl text-4xl font-extrabold text-center text-sky-200 pt-6 mb-12" data-aos="fade-up">
    Certificates
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-16 md:mt-12 mb-12 px-3 md:px-0">  
    {certificates.map((cert, index) => (
          <img
            key={cert.id}
            src={cert.img}
            loading="lazy"
            alt={cert.alt}
            className="rounded-lg hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          />
        ))}
    </div>

      <div className="container flex justify-center" data-aos="fade-up"
    data-aos-delay="200">
      <a href="https://www.linkedin.com/in/richea/" className="flex justify-center items-center gap-2 transition-all duration-300 hover:scale-105">
      <CiLinkedin className = "text-3xl md:text-5xl text-white font-extrabold" />
      <p className="text-lg md:text-xl text-white font-bold">More on Linkedin</p>
      </a>
      </div>
      </section>
      </>
    );
    
}

export default Certificate;