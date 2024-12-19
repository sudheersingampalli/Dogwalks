import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition-colors"
          aria-label={`Follow us on ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}