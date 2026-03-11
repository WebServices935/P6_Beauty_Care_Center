export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Bridal Makeup',
      category: 'Bridal',
    },
    {
      url: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Facial Treatment',
      category: 'Skincare',
    },
    {
      url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Hair Styling',
      category: 'Hair',
    },
    {
      url: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Makeup Products',
      category: 'Products',
    },
    {
      url: 'https://images.pexels.com/photos/3992866/pexels-photo-3992866.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Salon Interior',
      category: 'Salon',
    },
    {
      url: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Client Session',
      category: 'Session',
    },
    {
      url: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Professional Makeup',
      category: 'Makeup',
    },
    {
      url: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Beauty Treatment',
      category: 'Treatment',
    },
    {
      url: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Spa Experience',
      category: 'Spa',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-pink mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-deep-pink mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful transformations and luxurious salon services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-pink/80 via-magenta/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="text-center">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                  <span className="text-white/90 text-sm">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-4">
            Follow us on social media for more updates
          </p>
          <div className="flex justify-center space-x-4">
            {['Instagram', 'Facebook', 'YouTube'].map((platform) => (
              <span
                key={platform}
                className="bg-gradient-to-r from-deep-pink to-magenta text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
