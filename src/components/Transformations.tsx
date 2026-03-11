import { Sparkles } from 'lucide-react';

export default function Transformations() {
  const transformations = [
    {
      before: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=300',
      after: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=300',
      client: 'Sneha Kapoor',
      description: 'Elegant bridal makeup transformation for a dream wedding ceremony.',
    },
    {
      before: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      after: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=300',
      client: 'Riya Malhotra',
      description: 'Stunning reception look with contemporary bridal makeup artistry.',
    },
    {
      before: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=300',
      after: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300',
      client: 'Pooja Verma',
      description: 'Glamorous party makeup with bold eyes and flawless finish.',
    },
  ];

  return (
    <section id="transformations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-pink mb-4">
            Beauty Transformations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-deep-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Witness the magic of our expert makeup artistry and styling that transforms dreams into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="relative group">
                    <img
                      src={transformation.before}
                      alt="Before"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                      <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold text-sm">
                        Before
                      </span>
                    </div>
                  </div>
                  <div className="relative group">
                    <img
                      src={transformation.after}
                      alt="After"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-pink/70 to-magenta/70 rounded-lg flex items-center justify-center">
                      <span className="bg-white text-deep-pink px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-1">
                        <Sparkles size={14} />
                        <span>After</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{transformation.client}</h3>
                <p className="text-gray-600 leading-relaxed">{transformation.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 italic mb-4">
            "Every woman deserves to feel beautiful and confident"
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-deep-pink to-magenta text-white px-6 py-3 rounded-full">
            <Sparkles size={20} />
            <span className="font-semibold">Your transformation awaits</span>
          </div>
        </div>
      </div>
    </section>
  );
}
