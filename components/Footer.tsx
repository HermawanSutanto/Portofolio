import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 md:px-12 py-6 text-center text-medium">
        <p>&copy; {currentYear} Hermawan Sutanto.</p>
      </div>
    </footer>
  );
};

export default Footer;
