import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-light mb-4">
            Halo, saya <span className="text-accent">Hermawan Sutanto</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-medium mb-8">
            Saya seorang Insinyur Frontend Kreatif
          </h2>
          <p className="text-lg md:text-xl text-light max-w-2xl mx-auto mb-10">
            Saya bersemangat dalam membangun antarmuka pengguna yang indah dan
            fungsional yang menyenangkan pengguna dan mendorong hasil bisnis.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="#projects"
              className="group bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Lihat Proyek Saya{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight />
              </span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-secondary text-light font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              Unduh CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
