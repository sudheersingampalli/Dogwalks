import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;
  
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="h-8 w-8 text-blue-600 mb-2" />
      <h3 className="font-semibold mb-1">{feature.title}</h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </div>
  );
}