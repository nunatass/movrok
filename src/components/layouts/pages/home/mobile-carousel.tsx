"use client"

import Image from "next/image"
import { motion } from 'framer-motion';
import type { EmblaCarouselType } from 'embla-carousel';
import type { TimelineItem } from './types';

interface MobileCarouselProps {
  data: TimelineItem[];
  selected: number;
  setSelected: (index: number) => void;
  emblaRef: (node: HTMLElement | null) => void;
  emblaApi: EmblaCarouselType | undefined;
}

export function MobileCarousel({ data, selected, setSelected, emblaRef, emblaApi }: MobileCarouselProps) {
  return (
    <div className="md:hidden py-8">
      <h3 className="text-2xl font-bold mb-6 px-4">Your cells feel the benefits before you do</h3>
      
      {/* Time Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-2 scrollbar-hide px-4">
        {data.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              setSelected(index);
              emblaApi?.scrollTo(index);
            }}
            className="flex-1 text-center min-w-0"
          >
            {/* Line indicator */}
            <motion.div
              className="h-0.5 w-full mb-2"
              animate={{
                backgroundColor: selected === index ? '#000000' : '#d1d5db'
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Time Display */}
            <motion.div
              animate={{
                opacity: selected === index ? 1 : 0.5
              }}
              className="flex flex-col items-start"
              transition={{ duration: 0.3 }}
            >
              <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide mb-0.5">
                {item.timeUnit}
              </p>
              <p className="text-base">
                {item.timeValue}
              </p>
            </motion.div>
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.map((item, index) => {
            const isSelected = selected === index;
            
            return (
              <div 
                key={item.id} 
                className="flex-[0_0_66.66%] min-w-0 pl-4 pr-2 cursor-pointer"
                onClick={() => {
                  setSelected(index);
                  emblaApi?.scrollTo(index);
                }}
              >
                <div className={`relative w-full aspect-square rounded-lg overflow-hidden ${item.bgColor} mb-4 transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'opacity-50'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                
                {/* Content - always visible */}
                <div className={`transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-40'}`}>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

