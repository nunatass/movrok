'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ArrowPathIcon, PauseIcon } from '@heroicons/react/24/outline';

interface SubscriptionOptionProps {
  id: string;
  label: string;
  price: number;
  originalPrice: number;
  discount: number;
  perMonth: number;
  deliveryText: string;
  badge?: string | null;
  isSelected: boolean;
  isExpanded: boolean;
  onSelect: () => void;
  onToggle: () => void;
}

export function SubscriptionOption({
  id,
  label,
  price,
  originalPrice,
  discount,
  perMonth,
  deliveryText,
  badge,
  isSelected,
  isExpanded,
  onSelect,
  onToggle,
}: SubscriptionOptionProps) {
  return (
    <div className="relative">
      {/* Badge */}
      {badge && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded z-10 font-medium">
          {badge}
        </div>
      )}

      <motion.div
        layout
        className={`w-full rounded border transition-all cursor-pointer overflow-hidden ${
          isSelected ? 'border-black bg-white' : 'border-gray-300 bg-white hover:border-gray-400'
        }`}
        onClick={onToggle}
      >
        {/* Main Content */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            {/* Left side - Radio + Label */}
            <div className="flex items-center gap-3">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect();
                }}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  isSelected ? 'border-black' : 'border-gray-400'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="radio-selected"
                    className="w-3 h-3 rounded-full bg-black"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
              <div className="text-left">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base">{label}</span>
                  <span className="text-sm text-red-600 font-medium">Save {discount}%</span>
                </div>
              </div>
            </div>

            {/* Right side - Price */}
            <div className="text-right">
              <div className="font-bold text-xl">
                ${perMonth}
                <span className="text-base font-normal">/mo</span>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
                <span className="text-sm font-semibold">${price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.3, ease: 'easeInOut' },
                opacity: { duration: 0.2, ease: 'easeInOut' },
              }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 pt-2 border-t border-gray-200">
                <div className="space-y-3">
                  {/* Delivery Info */}
                  <div className="flex items-start gap-3">
                    <ArrowPathIcon className="w-5 h-5 mt-0.5 shrink-0 text-gray-700" />
                    <span className="text-sm text-gray-700">{deliveryText}</span>
                  </div>

                  {/* Pause/Cancel Info */}
                  <div className="flex items-start gap-3">
                    <PauseIcon className="w-5 h-5 mt-0.5 shrink-0 text-gray-700" />
                    <span className="text-sm text-gray-700">Pause or cancel at any time</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

