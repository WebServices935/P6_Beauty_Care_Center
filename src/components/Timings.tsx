import { Clock, Calendar, Crown } from 'lucide-react';

export default function Timings() {
  return (
    <section id="timings" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-pink mb-4">
            Salon Timings
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-deep-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Visit us during our working hours for all your beauty needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-pink-100">
            <div className="bg-gradient-to-br from-deep-pink to-magenta p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Clock className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">Monday - Saturday</h3>
            <p className="text-3xl font-bold text-center text-deep-pink mb-2">10:00 AM - 8:30 PM</p>
            <p className="text-center text-gray-600">All services available</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-pink-100">
            <div className="bg-gradient-to-br from-deep-pink to-magenta p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Calendar className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">Sunday</h3>
            <p className="text-3xl font-bold text-center text-deep-pink mb-2">10:00 AM - 6:00 PM</p>
            <p className="text-center text-gray-600">Regular services</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-deep-pink to-magenta rounded-2xl p-8 text-white text-center shadow-xl">
            <Crown className="mx-auto mb-4 text-gold" size={40} />
            <h3 className="text-2xl font-bold mb-3">Bridal Appointments</h3>
            <p className="text-lg mb-4">
              Special bridal makeup sessions available by advance booking
            </p>
            <p className="text-sm opacity-90">
              Please call us at <span className="font-bold">+91 97312 68151</span> to schedule your bridal consultation
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Walk-ins welcome • Appointments recommended for bridal services
          </p>
        </div>
      </div>
    </section>
  );
}
