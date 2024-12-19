import React from 'react';
import { MapPin, Clock, Users, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Individual Walks",
      price: "$25",
      duration: "30 minutes",
      features: ["One-on-one attention", "Flexible scheduling", "Daily updates", "Treat included"]
    },
    {
      title: "Group Walks",
      price: "$20",
      duration: "45 minutes",
      features: ["Socialization", "Small groups only", "Park visits", "Exercise & play"]
    },
    {
      title: "Adventure Hikes",
      price: "$40",
      duration: "1 hour",
      features: ["Nature trails", "Extended exercise", "Photo updates", "Water breaks"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Services & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
              <p className="text-gray-600 mb-6">{service.duration}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Heart className="h-5 w-5 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}