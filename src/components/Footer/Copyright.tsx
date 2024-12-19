import React from 'react';

export default function Copyright() {
  const currentYear = new Date().getFullYear();
  
  return (
    <p className="text-gray-500 text-sm">
      © {currentYear} Happy Tails Walking. All rights reserved.
    </p>
  );
}