import { Sparkles, Scissors, Crown, Heart } from 'lucide-react';

export default function About() {
  const services = [
    {
      icon: Sparkles,
      title: 'Facial & Skin Care',
      description: 'Rejuvenating facials and advanced skincare treatments for glowing, healthy skin.',
    },
    {
      icon: Scissors,
      title: 'Hair Styling',
      description: 'Expert hair styling, coloring, and treatments to enhance your natural beauty.',
    },
    {
      icon: Crown,
      title: 'Bridal Makeup',
      description: 'Exquisite bridal makeup artistry to make your special day truly unforgettable.',
    },
    {
      icon: Heart,
      title: 'Spa & Relaxation',
      description: 'Luxurious spa treatments designed to relax, refresh, and restore your body and mind.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-pink mb-4">
            About Beauty Care Salon
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-deep-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beauty Care Salon is dedicated to providing premium beauty services including skincare, makeup artistry,
            hair styling, and bridal beauty treatments. Our goal is to help every woman look and feel her best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pink-100 group"
            >
              <div className="bg-gradient-to-br from-deep-pink to-magenta p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-deep-pink to-magenta rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-pink-100 to-peach rounded-3xl p-12 shadow-xl">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center">
                <Crown className="mx-auto text-gold mb-4" size={48} />
                <h3 className="text-2xl font-bold text-deep-pink mb-2">Premium Services</h3>
                <p className="text-gray-600">Experience luxury beauty care</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Beauty Care Salon?
            </h3>
            <ul className="space-y-4">
              {[
                'Experienced and certified beauty professionals',
                'Premium quality products and equipment',
                'Personalized beauty consultations',
                'Hygienic and luxurious salon environment',
                'Customized treatments for every skin type',
                'Affordable pricing with exceptional service',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-gradient-to-br from-deep-pink to-magenta rounded-full p-1 mt-1">
                    <Sparkles className="text-white" size={14} />
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
