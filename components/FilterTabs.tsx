'use client'

import { motion } from 'framer-motion'
import { categories } from '@/lib/data'

interface FilterTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function FilterTabs({ activeCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
            activeCategory === category
              ? 'text-cream'
              : 'text-charcoal hover:text-lavender'
          }`}
        >
          {activeCategory === category && (
            <motion.span
              layoutId="activeTab"
              className="absolute inset-0 bg-charcoal rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  )
}
