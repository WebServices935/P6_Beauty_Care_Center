import { Sparkles, Users, Crown, Award } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '5000+' },
    { icon: Crown, label: 'Bridal Makeups', value: '800+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-pink-50 via-white to-peach overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-deep-pink rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="text-gold" size={20} />
            <span className="text-deep-pink font-medium">Premium Beauty Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-deep-pink via-magenta to-deep-pink bg-clip-text text-transparent leading-tight">
            Beauty Care Center
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-elegant italic">
            "Enhancing Your Natural Beauty."
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional beauty care services designed to make every woman feel confident, elegant, and beautiful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-deep-pink to-magenta text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Crown size={20} />
              <span>Book Appointment</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-white text-deep-pink border-2 border-deep-pink px-8 py-4 rounded-full font-semibold text-lg hover:bg-deep-pink hover:text-white transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pink-100"
              >
                <stat.icon className="mx-auto mb-3 text-gold" size={32} />
                <div className="text-3xl font-bold text-deep-pink mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
