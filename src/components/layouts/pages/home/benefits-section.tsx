"use client"

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MobileCarousel } from './mobile-carousel';
import { DesktopTimeline } from './desktop-timeline';
import type { TimelineItem } from './types';

const timelineData: TimelineItem[] = [
  {
    id: 0,
    time: 'Hour 08',
    timeUnit: 'HOUR',
    timeValue: '08',
    title: 'Urolithin A gets absorbed',
    description: "You've just begun taking Mitopure and it's already springing into action. Urolithin A levels peak in your bloodstream, targeting key organs like your muscles.",
    image: '/assets/images/1.avif',
    bgColor: 'bg-red-100'
  },
  {
    id: 1,
    time: 'Day 02',
    timeUnit: 'DAY',
    timeValue: '02',
    title: 'Recycling is activated',
    description: 'In just a day or two, your cells kick-start the recycling and rejuvenation process. Mitophagy begins its course, tagging damaged, worn-out mitochondria for recycling.',
    image: '/assets/images/2.avif',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 2,
    time: 'Day 30',
    timeUnit: 'DAY',
    timeValue: '30',
    title: 'New healthy mitochondria',
    description: 'One month in, your cells are transforming. Damaged mitochondria step aside to make way for healthier ones (mitochondrial biogenesis) optimizing your cellular health.',
    image: '/assets/images/3.avif',
    bgColor: 'bg-pink-50'
  },
  {
    id: 3,
    time: 'Day 60',
    timeUnit: 'DAY',
    timeValue: '60',
    title: 'Enhanced cellular renewal',
    description: "With our mitochondria recharged and renewed, the cells throughout your body are starting to function optimally.",
    image: '/assets/images/4.avif',
    bgColor: 'bg-gray-50'
  },
  {
    id: 4,
    time: 'Day 120',
    timeUnit: 'DAY',
    timeValue: '120',
    title: 'Increased muscle strength',
    description: "Four months in, your muscles are reaping the rewards. You're getting stronger*, recovering faster post-exercise, and experiencing less inflammation - all part of your healthier routine.",
    image: '/assets/images/5.avif',
    bgColor: 'bg-rose-100'
  },
  {
    id: 5,
    time: 'Day 365',
    timeUnit: 'DAY',
    timeValue: '365',
    title: 'Optimal cellular health',
    description: 'Your Mitopure journey comes full circle, marking a year of transformation. Your body thrives on optimal cellular health and organ function. Keep taking our pure and patented Urolithin A for a path toward a healthier, longer life.',
    image: '/assets/images/6.avif',
    bgColor: 'bg-cyan-50'
  }
];

export function BenefitsSection() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps'
  });

  // Calculate base size for small images (13.4621% of container)
  const smallSize = 13.4621;
  const largeSize = 23.6363;

  const handlePrevious = () => {
    setSelected(Math.max(0, selected - 1));
    emblaApi?.scrollPrev();
  }
  const handleNext = () => {
    setSelected(Math.min(timelineData.length - 1, selected + 1));
    emblaApi?.scrollNext();
  }

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <MobileCarousel 
        data={timelineData}
        selected={selected}
        setSelected={setSelected}
        emblaRef={emblaRef}
        emblaApi={emblaApi}
      />
      
      <DesktopTimeline 
        data={timelineData}
        selected={selected}
        setSelected={setSelected}
        hovered={hovered}
        setHovered={setHovered}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        smallSize={smallSize}
        largeSize={largeSize}
      />
    </>
  );
}