import { Heart, Shield, Clock, Award } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Heart,
    title: "Passionate Care",
    description: "Every dog receives individual attention and care tailored to their needs"
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Your pets are protected with comprehensive insurance coverage"
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Available 7 days a week with convenient booking options"
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Decade of professional experience in dog walking and pet care"
  }
];