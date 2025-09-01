import React from "react";
import SectionWrapper from "./SectionWrapper";

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="Tentang Saya">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/3">
          <img
            src="../public/pp.jpg"
            alt="Hermawan Sutanto"
            className="rounded-full shadow-2xl mx-auto border-4 border-accent"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-lg text-medium leading-relaxed">
            Dengan pengalaman lebih dari 5 tahun dalam pengembangan Fullstack,
            saya memiliki keahlian dalam mengubah ide-ide kompleks menjadi
            aplikasi web yang elegan, responsif, dan berperforma tinggi.
            Perjalanan saya di dunia teknologi didorong oleh rasa ingin tahu
            yang tak pernah padam dan komitmen untuk terus belajar dan
            beradaptasi dengan teknologi terbaru.
          </p>
          <p className="text-lg text-medium leading-relaxed mt-4">
            Saya berspesialisasi dalam React, TypeScript, dan ekosistem modern
            JavaScript. Saya percaya pada kekuatan kolaborasi dan menikmati
            bekerja dalam tim yang gesit untuk memberikan produk luar biasa yang
            memenuhi kebutuhan pengguna dan tujuan bisnis. Saat tidak sedang
            coding, Anda bisa menemukan saya menjelajahi alam, berkontribusi
            pada proyek open-source, atau menikmati secangkir kopi yang enak.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
