'use client';

import { useCallback } from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';

interface Product {
  id: string;
  title: string;
  badge: string;
  image: string;
  benefits: string[];
}

const products: Product[] = [
  {
    id: 'longevity-supplement',
    title: 'SUPLEMENTO DE LONGEVIDADE',
    badge: 'Longevity Supplement',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=800&fit=crop',
    benefits: [
      'Bem-estar geral',
      'Apoio à longevidade saudável baseado nos principais mecanismos do envelhecimento',
      'Desempenho cognitivo',
      'Hidratação e elasticidade da pele',
      'Regeneração, resiliência e saúde celular'
    ]
  },
  {
    id: 'fasting-support',
    title: 'SUPORTE PARA JEJUM',
    badge: 'Fasting Support',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=800&fit=crop',
    benefits: [
      'Energia física e mental sustentada',
      'Saciedade (Redução da fome)',
      'Flexibilidade metabólica (queima de gordura)',
      'Ambiente favorável à preservação da massa muscular',
      'Efeitos do jejum potencializados a nível celular',
      'Apoio à longevidade saudável'
    ]
  }
];

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      className="flex-shrink-0 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Product Image Card with off-white background */}
      <div className="relative w-full aspect-square rounded-lg overflow-hidden" style={{ backgroundColor: '#f5f4f0' }}>
        <div className="w-full h-full flex items-center justify-center p-8">
          <img 
            src={product.image} 
            alt={product.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Product Info - Outside the card, below */}
      <div className="mt-6">
        {/* Title and Badge */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            {product.title}
          </h3>
          <div className="inline-block px-3 py-1 border border-gray-900 rounded-full">
            <span className="text-xs font-medium">{product.badge}</span>
          </div>
        </div>

        {/* Benefits Section - Always visible, no collapse */}
        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold text-base mb-3">Ativos</h4>
          <div className="space-y-2 mb-6">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-gray-600 text-sm mt-1">•</span>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buy Button */}
        <button 
          onClick={() => {
            const buySection = document.getElementById('product-buy-section');
            buySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="w-full bg-black text-white font-semibold py-3 rounded hover:bg-gray-800 transition-colors uppercase text-sm tracking-wider"
        >
          Comprar
        </button>
      </div>
    </motion.div>
  );
}

export function ProductSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    slidesToScroll: 1
  });

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section className="relative bg-gray-50 py-16">
      <div className="w-full container mx-auto lg:px-6 px-4 xl:px-8">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Nossos Produtos
        </motion.h2>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Mobile: Embla Carousel with next item preview */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="flex-[0_0_calc(100%-60px)] min-w-0"
                  onClick={() => scrollTo(index)}
                >
                  <ProductCard
                    product={product}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
