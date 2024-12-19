import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import FadeIn from '../animations/FadeIn';

export default function BlogSection() {
  const { posts, addPhotoToBlogPost } = useBlogPosts();
  const [selectedPost, setSelectedPost] = React.useState<string | null>(null);
  const [isAdmin] = React.useState(() => {
    // In a real app, this would be determined by authentication
    return localStorage.getItem('isAdmin') === 'true';
  });

  const handleAddPhoto = (postId: string, photoUrl: string) => {
    addPhotoToBlogPost(postId, photoUrl);
  };

  const selectedPostData = posts.find(post => post.id === selectedPost);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Recent Updates</h2>
        </FadeIn>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              onClick={() => setSelectedPost(post.id)}
            />
          ))}
        </motion.div>
      </div>

      {selectedPostData && (
        <BlogModal
          post={selectedPostData}
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          isAdmin={isAdmin}
          onAddPhoto={(photoUrl) => handleAddPhoto(selectedPostData.id, photoUrl)}
        />
      )}
    </section>
  );
}