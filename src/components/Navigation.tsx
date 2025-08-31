import React, { useState } from "react";

type NavigationLinksProps = {
  setActiveSection: (section: string) => void;
  closeMenu?: () => void;
};

const Menu = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const X = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  setActiveSection,
  closeMenu,
}) => (
  <>
    {[
      "Home",
      "Products",
      "Quality",
      "Infrastructure",
      "About",
      "Enquiry",
      "Contact",
    ].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium block md:inline"
        onClick={() => {
          setActiveSection(item.toLowerCase());
          if (closeMenu) closeMenu();
        }}
      >
        {item}
      </a>
    ))}
  </>
);

const logoUrl = "https://res.cloudinary.com/df6yjgcmv/image/upload/c_crop,w_550,h_300/v1756637587/esteempackerslogo_orqay0.png"
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //@ts-ignore
  const [activeSection, setActiveSection] = useState("home");

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src={logoUrl}
              alt="Esteem Packers Logo"
              className="h-7 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Esteem Packers
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavigationLinks setActiveSection={setActiveSection} />
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <NavigationLinks
              setActiveSection={setActiveSection}
              closeMenu={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
