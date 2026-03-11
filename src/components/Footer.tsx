import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/ChatGPT_Image_Mar_11,_2026,_10_30_36_PM.png"
                alt="Beauty Care Center"
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Your premier destination for luxury beauty care and transformation.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-gradient-to-r hover:from-deep-pink hover:to-magenta p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gradient-to-r hover:from-deep-pink hover:to-magenta p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gradient-to-r hover:from-deep-pink hover:to-magenta p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-deep-pink transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">More Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-deep-pink transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-deep-pink flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  #18, 1st Floor, Brigade Road<br />
                  Bangalore, Karnataka - 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-deep-pink flex-shrink-0" />
                <a href="tel:+919731268151" className="text-gray-300 hover:text-deep-pink transition-colors text-sm">
                  +91 97312 68151
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-deep-pink flex-shrink-0" />
                <a href="mailto:info@beautycarecenter.in" className="text-gray-300 hover:text-deep-pink transition-colors text-sm">
                  info@beautycarecenter.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>&copy; 2026 Beauty Care Center - All Rights Reserved</span>
              <span className="inline-flex items-center">
                <span className="mx-2">|</span>
                <span>Made with</span>
                <Heart size={16} className="text-deep-pink fill-deep-pink mx-1" />
                <span>in India</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
