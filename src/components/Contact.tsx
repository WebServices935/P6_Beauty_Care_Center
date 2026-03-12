import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-pink mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-deep-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us or reach out for appointments and consultations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Beauty Care Salon</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-gradient-to-br from-pink-50 to-white p-4 rounded-xl">
                  <MapPin className="text-deep-pink flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Address</p>
                    <p className="text-gray-600">
                      #18, 1st Floor<br />
                      Brigade Road<br />
                      Bangalore, Karnataka - 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-pink-50 to-white p-4 rounded-xl">
                  <Phone className="text-deep-pink flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Phone</p>
                    <a href="tel:+919731268151" className="text-gray-600 hover:text-deep-pink transition-colors">
                      +91 97312 68151
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-pink-50 to-white p-4 rounded-xl">
                  <Mail className="text-deep-pink flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email</p>
                    <a href="mailto:info@beautycarecenter.in" className="text-gray-600 hover:text-deep-pink transition-colors">
                      info@beautycarecenter.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <a
                href="https://wa.me/919731268151"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-300 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+919731268151"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-deep-pink to-magenta text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 hover:scale-105"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>

            <div className="pt-6">
              <p className="font-semibold text-gray-800 mb-4">Follow Us</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gradient-to-br from-pink-100 to-white p-3 rounded-full hover:bg-gradient-to-br hover:from-deep-pink hover:to-magenta hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-br from-pink-100 to-white p-3 rounded-full hover:bg-gradient-to-br hover:from-deep-pink hover:to-magenta hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-br from-pink-100 to-white p-3 rounded-full hover:bg-gradient-to-br hover:from-deep-pink hover:to-magenta hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-96 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9358058634947!2d77.59970431482185!3d12.971598990858964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBrigade%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beauty Care Salon Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
