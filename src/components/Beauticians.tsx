import { Award, Star } from 'lucide-react';

export default function Beauticians() {
  const beauticians = [
    {
      name: 'Priya Sharma',
      role: 'Senior Makeup Artist',
      experience: '12 Years',
      specialization: 'Bridal & Party Makeup',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Anjali Reddy',
      role: 'Bridal Makeup Specialist',
      experience: '10 Years',
      specialization: 'Traditional & Contemporary Bridal',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Kavita Menon',
      role: 'Hair Styling Expert',
      experience: '8 Years',
      specialization: 'Hair Styling & Treatments',
      image: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Deepa Nair',
      role: 'Skin Care Therapist',
      experience: '9 Years',
      specialization: 'Facials & Skin Treatments',
      image: 'https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="beauticians" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-pink mb-4">
            Our Expert Beauticians
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-deep-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of highly skilled and certified beauty professionals dedicated to your transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beauticians.map((beautician, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={beautician.image}
                  alt={beautician.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-gold to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Award size={14} />
                  <span>{beautician.experience}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{beautician.name}</h3>
                <p className="text-deep-pink font-semibold mb-2">{beautician.role}</p>
                <p className="text-gray-600 text-sm mb-4">{beautician.specialization}</p>

                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
