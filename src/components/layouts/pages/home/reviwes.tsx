"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface Review {
  type: 'text-only' | 'video-large' | 'video-medium' | 'image';
  title?: string;
  text?: string;
  author?: string;
  image?: string;
  watermark?: string;
  hasPlayButton?: boolean;
  index?: number;
}

const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yOffset = index % 3 === 0 ? 30 : index % 3 === 1 ? 15 : 20;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);

  const renderStars = () => (
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-black text-xs">★</span>
      ))}
    </div>
  );

  // Large video card (tallest) - portrait format
  if (review.type === 'video-large') {
    return (
      <motion.div ref={cardRef} style={{ y }} className="w-full">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <div className="relative w-full aspect-[9/16]">
            <img 
              src={review.image} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent ml-0.5"></div>
              </div>
            </div>
            {review.watermark && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-[10px] tracking-wider opacity-50" 
                   style={{ writingMode: 'vertical-rl' }}>
                {review.watermark}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Medium video card - portrait format (no text)
  if (review.type === 'video-medium') {
    return (
      <motion.div ref={cardRef} style={{ y }} className="w-full">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <div className="relative w-full aspect-[9/16]">
            <img 
              src={review.image} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent ml-0.5"></div>
              </div>
            </div>
            {review.watermark && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-[10px] tracking-wider opacity-50" 
                   style={{ writingMode: 'vertical-rl' }}>
                {review.watermark}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Image card
  if (review.type === 'image') {
    return (
      <motion.div ref={cardRef} style={{ y }} className="w-full">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <div className="relative w-full" style={{ height: '240px' }}>
            <img 
              src={review.image} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {review.hasPlayButton && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent ml-0.5"></div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4">
            {renderStars()}
            <h3 className="text-sm font-semibold mb-1.5 text-gray-900">
              {review.title}
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">
              {review.text}
            </p>
            <p className="text-xs font-medium text-gray-900">
              {review.author}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Text only card
  return (
    <motion.div ref={cardRef} style={{ y }} className="w-full">
      <div className="bg-white p-4 shadow-sm border border-gray-200" style={{ borderRadius: '12px' }}>
        {renderStars()}
        <h3 className="text-sm font-semibold mb-1.5 text-gray-900">
          {review.title}
        </h3>
        <p className="text-gray-600 text-xs leading-relaxed mb-2">
          {review.text}
        </p>
        <p className="text-xs font-medium text-gray-900">
          {review.author}
        </p>
      </div>
    </motion.div>
  );
};

export function ReviewsSection() {
  const [cols, setCols] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      if (w >= 1280) setCols(4);
      else if (w >= 768) setCols(3);
      else if (w >= 640) setCols(2);
      else setCols(1);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const reviews: Review[] = [
    {
      type: 'text-only',
      title: "I feel like I have gotten younger",
      text: "I simply feel like I have more energy to do everything. This is like a caffeine jolt without any of the side effects. I am hoping these results continue and build...",
      author: "Kathryn C."
    },
    {
      type: 'video-large',
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=500&h=900&fit=crop"
    },
    {
      type: 'image',
      title: "I can tell a huge difference",
      text: "I can tell a huge difference in how good my legs feel since I have been taking the mitopure. I am able to cycle much faster...",
      author: "Megan A.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&h=500&fit=crop",
      hasPlayButton: true
    },
    {
      type: 'video-medium',
      image: "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=500&h=700&fit=crop"
    },
    {
      type: 'image',
      title: "Increased muscle and performance for athletes",
      text: "I finally reached the four month mark of consistently taking Mitopure every single day, and I have to say that I have noticed...",
      author: "Susan P.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop"
    },
    {
      type: 'video-medium',
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=700&fit=crop"
    },
    {
      type: 'video-large',
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=900&fit=crop"
    },
    {
      type: 'text-only',
      title: "Obsessed with this supplement",
      text: "Love this supplement. I take 2 capsules of Mitopure every morning and I'm obsessed. I've increased my load at my CrossFit...",
      author: "Mercedes J."
    }
  ];

  const distributeItems = () => {
    const columns: Review[][] = Array.from({ length: cols }, () => []);
    const heights = Array(cols).fill(0);
    
    const getEstimatedHeight = (review: Review) => {
      // Portrait videos (9:16 aspect ratio) - no text
      if (review.type === 'video-large') return 600;
      if (review.type === 'video-medium') return 600;
      if (review.type === 'image') return 350;
      return 160;
    };
    
    reviews.forEach((review, i) => {
      const shortestCol = heights.indexOf(Math.min(...heights));
      columns[shortestCol].push({ ...review, index: i });
      heights[shortestCol] += getEstimatedHeight(review) + 20;
    });
    
    return columns;
  };

  const columnData = distributeItems();

  return (
    <div className="w-full py-12 px-4 flex justify-center" style={{ backgroundColor: '#efeee9' }}>
      {/* Main container: max 1896x942 */}
      <div className="w-full flex flex-col items-center container mx-auto lg:px-20 px-1 xl:px-40">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900"
        >
          Loved by our community
        </motion.h2>

        {/* Reviews container with gradient blur */}
        <div className="relative w-full max-w-[1440px]">
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isExpanded ? '100%' : '684px'
            }}
          >
            <div className="grid gap-5" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
              {columnData.map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-5">
                  {column.map((review, idx) => (
                    <ReviewCard key={`${colIdx}-${idx}`} review={review} index={review.index ?? idx} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Gradient blur overlay - only show when not expanded */}
          {!isExpanded && (
            <div 
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, #efeee9 0%, rgba(239, 238, 233, 0.95) 40%, rgba(239, 238, 233, 0.6) 70%, transparent 100%)'
              }}
            />
          )}
        </div>

        {/* Show More button - hide when expanded */}
        {!isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-10 w-full px-4 md:px-0"
          >
            <Button 
              onClick={() => setIsExpanded(true)}
              variant="outline"
              className="w-full md:w-auto px-10 py-3 border border-gray-900 text-gray-900 text-xs font-semibold rounded hover:bg-gray-900 hover:text-white transition-all uppercase tracking-wider"
            >
              Show More
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}