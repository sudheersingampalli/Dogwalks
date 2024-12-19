import React from 'react';
import { Heart, Shield, Clock, Award } from 'lucide-react';
import FeatureCard from './About/FeatureCard';
import AboutContent from './About/AboutContent';
import { features } from '../data/features';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d"
              alt="Professional dog walker"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <AboutContent />
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}