import { useState } from 'react';
import { blogPosts as initialPosts } from '../data/blogPosts';
import { BlogPost } from '../types/blog';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : initialPosts;
  });

  const addPhotoToBlogPost = (postId: string, photoUrl: string) => {
    setPosts(currentPosts => {
      const updatedPosts = currentPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            images: [...(post.images || [post.image]), photoUrl].filter(Boolean)
          };
        }
        return post;
      });
      
      // Save to localStorage
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  };

  return {
    posts,
    addPhotoToBlogPost
  };
}