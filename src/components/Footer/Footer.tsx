import React from 'react';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';
import { PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Happy Tails Walking</span>
          </div>
          
          <SocialLinks />
          
          <Copyright />
        </div>
      </div>
    </footer>
  );
}