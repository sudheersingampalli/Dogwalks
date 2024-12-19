import React from 'react';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    "https://images.unsplash.com/photo-1552053831-71594a27632d",
    "https://images.unsplash.com/photo-1604848698030-c434ba08ece1",
    "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd",
    "https://images.unsplash.com/photo-1548199956-7a1b4394b5e1",
    "https://images.unsplash.com/photo-1541336318489-083c7153ecae"
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Happy Dogs Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Happy dog ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}