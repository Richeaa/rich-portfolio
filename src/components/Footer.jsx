import Wavify from 'react-wavify';
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="relative text-white pt-20 pb-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Let&apos;s Connect
          </h2>
          <p
            className="mb-8 text-slate-400 max-w-md md:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Interested in working together or have any questions? Feel free to reach out!
          </p>

          <div className="flex space-x-4 mb-10" data-aos="zoom-in" data-aos-delay="200">
            {[
              { href: "https://wa.me/6281522555130", Icon: FaWhatsapp },
              { href: "https://instagram.com/rich.ea", Icon: FaInstagram },
              { href: "https://www.linkedin.com/in/richea/", Icon: FaLinkedin },
              { href: "https://github.com/Richeaa", Icon: FaGithub },
            ].map(({ href, Icon }) => (
              <a>
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-surface-800 border border-surface-border text-slate-400 hover:text-brand-400 hover:border-brand-400/40 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-slate-500 font-mono" data-aos="fade-up" data-aos-delay="300">
            © {new Date().getFullYear()} Richeaa. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Wavify
          fill="#0a84ff"
          paused={false}
          options={{ height: 30, amplitude: 50, speed: 0.2, points: 5 }}
          style={{ position: 'absolute', bottom: 0, width: '100%', opacity: 0.35 }}
        />
        <Wavify
          fill="#0052b4"
          paused={false}
          options={{ height: 40, amplitude: 40, speed: 0.15, points: 4 }}
          style={{ position: 'absolute', bottom: 0, width: '100%', opacity: 0.25 }}
        />
      </div>
    </section>
  );
};

export default Footer;
