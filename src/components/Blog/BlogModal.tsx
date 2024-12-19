import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogModalProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
  onAddPhoto?: (photo: string) => void;
}

export default function BlogModal({ post, isOpen, onClose, isAdmin, onAddPhoto }: BlogModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [newPhotoUrl, setNewPhotoUrl] = React.useState('');
  
  const images = post.images || [post.image];
  
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddPhoto = () => {
    if (newPhotoUrl && onAddPhoto) {
      onAddPhoto(newPhotoUrl);
      setNewPhotoUrl('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {images.length > 0 && (
                <div className="relative h-[400px]">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={images[currentImageIndex]}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                </div>
              )}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <time className="text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
              
              <div className="prose max-w-none mb-6">
                {post.content}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {isAdmin && (
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Add New Photo</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newPhotoUrl}
                      onChange={(e) => setNewPhotoUrl(e.target.value)}
                      placeholder="Enter photo URL"
                      className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <button
                      onClick={handleAddPhoto}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Add Photo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}