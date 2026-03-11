import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Meera Patel',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      review: 'This salon is amazing! The bridal makeup was absolutely perfect. Highly recommended!',
    },
    {
      name: 'Aisha Khan',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      review: 'Best beauty salon in Bangalore! The staff is so professional and the services are top-notch.',
    },
    {
      name: 'Divya Krishnan',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      review: 'I got my bridal makeup done here and I looked stunning! Thank you Beauty Care Center.',
    },
    {
      name: 'Neha Sharma',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      review: 'Excellent service! The facial treatment made my skin glow. Will definitely come back.',
    },
    {
      name: 'Priyanka Joshi',
      image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      review: 'The hair styling was fabulous! Very skilled beauticians and beautiful ambiance.',
    },
    {
      name: 'Sana Mirza',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      review: 'Loved the spa experience here. So relaxing and rejuvenating. Highly recommend!',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-pink mb-4">
            Client Reviews
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-deep-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our beautiful clients have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative"
            >
              <Quote className="absolute top-6 right-6 text-pink-200" size={40} />

              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-deep-pink"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{review.name}</h3>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed italic">"{review.review}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="text-2xl font-bold text-deep-pink mb-2">5.0 Rating</p>
            <p className="text-gray-600">Based on 500+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
