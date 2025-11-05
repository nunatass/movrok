"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { motion } from 'framer-motion';
import type { TimelineItem } from './types';

interface DesktopTimelineProps {
  data: TimelineItem[];
  selected: number;
  setSelected: (index: number) => void;
  hovered: number | null;
  setHovered: (index: number | null) => void;
  handlePrevious: () => void;
  handleNext: () => void;
  smallSize: number;
  largeSize: number;
}

export function DesktopTimeline({ 
  data, 
  selected, 
  setSelected, 
  hovered, 
  setHovered, 
  handlePrevious, 
  handleNext,
  smallSize,
  largeSize 
}: DesktopTimelineProps) {
  return (
    <div className="hidden md:block h-max min-h-[50vh] p-6">
      <div className="flex items-end justify-between">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold w-2/5">Your cells feel the benefits before you do</h3>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="w-12 h-12" onClick={handlePrevious}>
            <ArrowLeftIcon className="w-10 h-10" />
          </Button>
          <Button variant="ghost" className="w-12 h-12 p-0" onClick={handleNext}>
            <ArrowRightIcon className="w-10 h-10" />
          </Button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-1.5 py-6">
        {/* Images Container */}
        <div className="relative" style={{ paddingTop: `${largeSize}%` }}>
          <div className="absolute bottom-0 left-0 right-0 flex gap-4">
            {data.map((item, index) => {
              const isSelected = selected === index;
              const isHovered = hovered === index;
              const size = isSelected ? largeSize : smallSize;
              
              return (
                <motion.div
                  key={item.id}
                  className="cursor-pointer relative"
                  style={{ width: `${size}%` }}
                  animate={{ width: `${size}%` }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  onClick={() => setSelected(index)}
                  onHoverStart={() => setHovered(index)}
                  onHoverEnd={() => setHovered(null)}
                >
                  {/* Image - grows upward from bottom */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 overflow-hidden rounded-lg ${item.bgColor}`}
                    style={{ paddingBottom: '100%' }}
                    animate={{ opacity: isSelected || isHovered ? 1 : 0.8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Text Content Container - flows naturally below images */}
        <div className="mt-4 flex gap-4">
          {data.map((item, index) => {
            const isSelected = selected === index;
            const size = isSelected ? largeSize : smallSize;
            
            return (
              <motion.div
                key={item.id}
                style={{ width: `${size}%` }}
                animate={{ width: `${size}%` }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Divider Line */}
                <motion.div
                  className="mb-4 border-dashed border border-spacing-1.5"
                  animate={{
                    backgroundColor: isSelected ? '#000000' : '#d1d5db'
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Time Label */}
                <motion.div
                  className="mb-4"
                  animate={{
                    color: isSelected ? '#000000' : '#6b7280'
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide opacity-60">
                    {item.timeUnit}
                  </p>
                  <p className="text-lg font-bold">
                    {item.timeValue}
                  </p>
                </motion.div>

                {/* Expandable Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isSelected ? 1 : 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: isSelected ? 0.5 : 0,
                  }}
                  className={isSelected ? 'block' : 'hidden'}
                >
                  <h2 className="text-base lg:text-xl xl:text-2xl font-bold text-gray-900 mb-3 uppercase">
                    {item.title}
                  </h2>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

