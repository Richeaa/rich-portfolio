import { motion } from "framer-motion";
import Img1 from '../assets/CertificateAsset/1.jpg'
import Img2 from '../assets/CertificateAsset/2.jpg'
import Img3 from '../assets/CertificateAsset/3.jpg'
import Img4 from '../assets/CertificateAsset/4.jpg'
import Img5 from '../assets/CertificateAsset/5.png'
import Img6 from '../assets/CertificateAsset/6.jpg'
import { CiLinkedin } from "react-icons/ci";

const handleSpotlight = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

const certificates = [
  { id: 1, img: Img1, alt: "Dicoding Certificate" },
  { id: 2, img: Img4, alt: "Event Certificate" },
  { id: 3, img: Img2, alt: "Dicoding Certificate" },
  { id: 4, img: Img5, alt: "Event Certificate" },
  { id: 5, img: Img3, alt: "Event Certificate" },
  { id: 6, img: Img6, alt: "Achievement" },
];

const Certificate = () => {
  return (
    <section id="certificate" className="container mx-auto px-4 md:px-6 py-20 md:py-28">
      <div className="text-center mb-14" data-aos="fade-up">
        <p className="text-brand-400 text-xs font-mono tracking-wider uppercase mb-3">
          My Achievements
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Certifications
        </h2>
        <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            onMouseMove={handleSpotlight}
            className="bento-card p-3 group"
          >
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src={cert.img}
                loading="lazy"
                alt={cert.alt}
                className="w-full h-auto rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center" data-aos="fade-up">
        <a>
          href="https://www.linkedin.com/in/richea/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3.5 bg-surface-800 border border-surface-border rounded-full hover:border-brand-400/40 hover:bg-surface-700 transition-all duration-300 group"
        >
          <CiLinkedin className="text-2xl text-slate-300 group-hover:text-brand-400 transition-colors" />
          <span className="text-slate-300 group-hover:text-white font-medium transition-colors">
            More on LinkedIn
          </span>
        </a>
      </div>
    </section>
  );
};

export default Certificate;
