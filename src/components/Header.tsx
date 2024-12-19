import React from 'react';
import { PawPrint } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Happy Tails Walking</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['about', 'services', 'gallery', 'blog', 'reviews', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-600 hover:text-blue-600 capitalize transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}