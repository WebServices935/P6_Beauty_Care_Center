import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Beauticians', id: 'beauticians' },
    { label: 'Transformations', id: 'transformations' },
    { label: 'Timings', id: 'timings' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img
            src="/ChatGPT_Image_Mar_11,_2026,_10_30_36_PM.png"
            alt="Beauty Care Salon"
            className="h-12 w-auto"
          />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-deep-pink transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('contact')}
          className="hidden lg:block bg-gradient-to-r from-deep-pink to-magenta text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 hover:scale-105"
        >
          Book Appointment
        </button>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-deep-pink transition-colors duration-300 font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-deep-pink to-magenta text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-pink-300 transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
