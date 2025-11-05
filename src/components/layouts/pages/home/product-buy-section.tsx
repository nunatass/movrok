'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { SubscriptionOption } from './subscription-option';
import { CollapsibleSection } from './collapsible-section';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export function ProductBuySection() {
  const [selectedSupply, setSelectedSupply] = useState('4-month');
  const [expandedSupply, setExpandedSupply] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const supplies = [
    { 
      id: '1-month', 
      label: '1-month supply', 
      price: 112.50, 
      originalPrice: 125,
      perMonth: 112.50, 
      discount: 10,
      deliveryText: '1-month supply delivered monthly',
      badge: null
    },
    { 
      id: '2-month', 
      label: '2-month supply', 
      price: 200, 
      originalPrice: 250,
      perMonth: 100, 
      discount: 20,
      deliveryText: '2-month supply delivered every 2 months',
      badge: null
    },
    { 
      id: '4-month', 
      label: '4-month supply', 
      price: 380, 
      originalPrice: 500,
      perMonth: 95, 
      discount: 24,
      deliveryText: '4-month supply delivered every 4 months',
      badge: 'CLINICALLY RECOMMENDED'
    }
  ];

  return (
    <section id="product-buy-section" className="bg-gray-50 py-4">
      <div className="w-full container mx-auto lg:px-6 px-1 xl:px-8">
        <div className="lg:flex lg:gap-12 lg:items-start">
          {/* Left side - Scrollable Image Grid */}
          <motion.div 
            className="space-y-4 lg:w-[55%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[4/5] bg-gray-200 rounded overflow-hidden max-w-[500px]">
                    <img 
                      src="https://framerusercontent.com/images/uZIcodXSiRUumZ28lHrZkXvhbg.png?width=800" 
                      alt="Product 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] bg-gray-200 rounded overflow-hidden max-w-[500px]">
                    <video 
                      src="https://res.cloudinary.com/dcxo7cldm/video/upload/w_800/v1760536479/4-5_PDP_Softgels_Oct_2025_V2_vw0lzi.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[4/5] bg-gray-200 rounded overflow-hidden max-w-[500px]">
                    <img 
                      src="https://framerusercontent.com/images/WtKQ0cxb5NtRiRa2CgrWMA9f2I.png?width=800" 
                      alt="Product 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] bg-gray-200 rounded overflow-hidden max-w-[500px]">
                    <img 
                      src="https://framerusercontent.com/images/FhIeD9Hw066TbTUVnIBwXD2ILdg.png?width=800" 
                      alt="Product 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                {/* <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[4/5] bg-gray-200 rounded overflow-hidden max-w-[500px]">
                    <img 
                      src="https://framerusercontent.com/images/TJ1rJfqmOlX024hc8ZyXPwLmrbc.png?width=800" 
                      alt="Product 4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] bg-gray-200 rounded overflow-hidden max-w-[500px]">
                    <img 
                      src="https://framerusercontent.com/images/JPrQX6BwbPj9TYXpcGVOkIcsPg.png?width=800" 
                      alt="Product 5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div> */}
          </motion.div>

          {/* Right side - Price Section */}
          <div id="price-selection" className="mt-8 lg:mt-0 lg:w-[45%]">
            <motion.div 
              className="space-y-6 w-full lg:sticky lg:top-4 lg:max-h-screen lg:overflow-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >

                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 border border-black rounded-full">
                    <span className="text-sm font-medium">Bestseller</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold">Try Mitopure Today</h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Improve your cellular health by taking Mitopure in its simplest form with two softgels daily for the recommended dose of Urolithin A (500mg of Mitopure). Each sachet contains 60 softgels.
                  </p>
                </div>

                {/* Supply Options */}
                <div className="space-y-3">
                  {supplies.map((supply) => (
                    <SubscriptionOption
                      key={supply.id}
                      id={supply.id}
                      label={supply.label}
                      price={supply.price}
                      originalPrice={supply.originalPrice}
                      discount={supply.discount}
                      perMonth={supply.perMonth}
                      deliveryText={supply.deliveryText}
                      badge={supply.badge}
                      isSelected={selectedSupply === supply.id}
                      isExpanded={expandedSupply === supply.id}
                      onSelect={() => setSelectedSupply(supply.id)}
                      onToggle={() => {
                        setSelectedSupply(supply.id);
                        setExpandedSupply(expandedSupply === supply.id ? null : supply.id);
                      }}
                    />
                  ))}
                </div>

                {/* Buy Button */}
                <Button className="w-full text-white font-semibold  hover:bg-gray-800 transition-colors uppercase h-12" size="lg">
                  Buy now
                </Button>

                {/* Collapsible Information Sections */}
                <div className="mt-8 space-y-0">
                  {/* Clinically proven benefits */}
                  <CollapsibleSection
                    title="Clinically proven benefits"
                    isExpanded={expandedSection === 'benefits'}
                    onToggle={() => setExpandedSection(expandedSection === 'benefits' ? null : 'benefits')}
                  >
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Following over 15 years of research, groundbreaking discoveries and numerous clinical trials, 
                        we have developed a powerful ingredient that's clinically validated and proven to target the 
                        root causes of aging.{' '}
                        <a href="#" className="underline">Learn more about Mitopure®</a>
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-1 h-6 bg-black shrink-0 mt-0.5"></div>
                          <div>
                            <strong className="text-sm">Cellular energy:</strong>
                            <span className="text-sm text-gray-600"> Induces a signature of improved mitochondria*</span>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-1 h-6 bg-black shrink-0 mt-0.5"></div>
                          <div>
                            <strong className="text-sm">Muscle strength:</strong>
                            <span className="text-sm text-gray-600"> Muscle strength increases by up to 12% after 16 weeks*</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleSection>

                  {/* Key ingredients */}
                  <CollapsibleSection
                    title="Key ingredients"
                    isExpanded={expandedSection === 'ingredients'}
                    onToggle={() => setExpandedSection(expandedSection === 'ingredients' ? null : 'ingredients')}
                  >
                    <div className="space-y-6">
                      {/* Ingredient with image */}
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded shrink-0 flex items-center justify-center overflow-hidden">
                          <Image
                            src="/assets/images/8.avif"
                            alt="Mitopure molecule"
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-base mb-1">Mitopure® (Urolithin A)</h4>
                          <p className="text-sm text-gray-600">
                            Highly pure Urolithin A clinically-validated and proven to target essential root causes of aging.
                          </p>
                        </div>
                      </div>

                      {/* Clean formulation */}
                      <div>
                        <h4 className="font-semibold text-base mb-3">Clean formulation:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-black" />
                            <span className="text-sm">Vegan</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-black" />
                            <span className="text-sm">Non-GMO</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-black" />
                            <span className="text-sm">Gluten free</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-black" />
                            <span className="text-sm">Free of big 8 food allergens</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-black" />
                            <span className="text-sm">Lactose free</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleSection>

                  {/* How to use */}
                  <CollapsibleSection
                    title="How to use"
                    isExpanded={expandedSection === 'howto'}
                    onToggle={() => setExpandedSection(expandedSection === 'howto' ? null : 'howto')}
                  >
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Take two vegan softgels daily for the recommended dose of Urolithin A (500mg of Mitopure).
                    </p>
                  </CollapsibleSection>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}