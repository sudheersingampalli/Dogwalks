import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Group Training Success: Teaching Basic Commands',
    date: '2024-03-15',
    excerpt: 'Had a fantastic group training session today with five dogs mastering basic commands like "sit" and "stay".',
    content: `Today was an incredible day of group training! We worked with five wonderful dogs of various breeds and ages, focusing on mastering essential commands. The session began with individual assessments to understand each dog's current skill level.

    Throughout the two-hour session, we practiced:
    - Sitting on command
    - Staying in position
    - Coming when called
    - Walking politely on a leash

    It was amazing to see how quickly the dogs picked up these commands through positive reinforcement training. The highlight was watching shy Max, a 6-month-old Border Collie, gain confidence and successfully complete a 30-second stay!`,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
    images: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
      'https://images.unsplash.com/photo-1553882809-a4f57e59501d'
    ],
    tags: ['Training', 'Group Session', 'Basic Commands']
  },
  {
    id: '2',
    title: 'Adventure Walk at Werribee Park',
    date: '2024-03-12',
    excerpt: 'Explored the beautiful trails at Werribee Park with Max and Luna. Both dogs enjoyed the scenic route!',
    content: `What a perfect day for an adventure walk at Werribee Park! Max, a energetic Golden Retriever, and Luna, a gentle Giant Schnauzer, were my companions for this exciting expedition.

    We covered nearly 5 kilometers of varied terrain, including:
    - Shaded woodland paths
    - Open grassland areas
    - Gentle hills perfect for building stamina

    Both dogs showed excellent trail etiquette and maintained their energy throughout the walk. We took regular water breaks and practiced recall commands in new environments.`,
    image: 'https://images.unsplash.com/photo-1602268381389-c10e9d41c1c8',
    tags: ['Adventure Walk', 'Nature', 'Dog Exercise']
  },
  {
    id: '3',
    title: 'New Service: Puppy Socialization Walks',
    date: '2024-03-10',
    excerpt: 'Introducing our new puppy socialization walks! Perfect for young dogs to learn social skills.',
    content: `I'm excited to announce our new Puppy Socialization Walks service! These specialized sessions are designed specifically for puppies aged 12-20 weeks, focusing on crucial early socialization experiences.

    Each session includes:
    - Controlled introductions to new environments
    - Supervised interaction with other puppies
    - Basic leash training
    - Positive exposure to various sounds and surfaces

    These walks are kept short (30 minutes) and take place in safe, controlled environments. We maintain small groups of 2-3 puppies to ensure individual attention and proper supervision.`,
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd',
    tags: ['New Service', 'Puppies', 'Socialization']
  }
];