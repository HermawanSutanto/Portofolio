
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS } from '../constants';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Hubungi Saya">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-medium mb-8">
          Saya selalu terbuka untuk mendiskusikan proyek baru, peluang kreatif, atau sekadar bertukar sapa. Jangan ragu untuk menghubungi saya!
        </p>
        <a 
          href="mailto:alex.doe@example.com" 
          className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 mb-10"
        >
          Kirim Email
        </a>
        <div className="flex justify-center items-center gap-8">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300">
            <FaGithub size={32} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300">
            <FaLinkedin size={32} />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300">
            <FaTwitter size={32} />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
