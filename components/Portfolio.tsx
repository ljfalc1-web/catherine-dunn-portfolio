'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { portfolioItems } from '@/lib/data'
import { PortfolioItem as PortfolioItemType } from '@/lib/types'
import FilterTabs from './FilterTabs'
import PortfolioItem from './PortfolioItem'
import PortfolioModal from './PortfolioModal'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  const handleItemClick = (item: PortfolioItemType) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedItem(null), 300)
  }

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-lavender font-medium tracking-wide uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            Featured Work
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            A selection of campaigns and projects across digital, print, social media,
            influencer partnerships, and events.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FilterTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <PortfolioItem
                  key={item.id}
                  item={item}
                  onClick={() => handleItemClick(item)}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {filteredItems.length === 0 && (
          <p className="text-center text-charcoal/50 py-12">
            No items found in this category.
          </p>
        )}
      </div>

      <PortfolioModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
