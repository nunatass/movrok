'use client';

import { motion, AnimatePresence } from 'motion/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function CollapsibleSection({
  title,
  isExpanded,
  onToggle,
  children,
}: CollapsibleSectionProps) {
  return (
    <div className="border-t border-dotted border-gray-400 py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <motion.div
          initial={false}
          animate={{ rotate: isExpanded ? 0 : 0 }}
          className="shrink-0"
        >
          {isExpanded ? (
            <MinusIcon className="w-6 h-6 text-gray-600" />
          ) : (
            <PlusIcon className="w-6 h-6 text-gray-600" />
          )}
        </motion.div>
      </button>

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
            <div className="pt-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

