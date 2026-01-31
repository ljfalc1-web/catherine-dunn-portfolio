'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PortfolioItem as PortfolioItemType } from '@/lib/types'
import { ExternalLink } from 'lucide-react'

interface PortfolioItemProps {
  item: PortfolioItemType
  onClick: () => void
}

export default function PortfolioItem({ item, onClick }: PortfolioItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-lavender text-xs font-medium uppercase tracking-wide mb-1">
              {item.category}
            </span>
            <h3 className="text-cream font-display text-lg mb-1">{item.title}</h3>
            <p className="text-cream/80 text-sm">{item.client}</p>
            {item.externalLink && (
              <ExternalLink className="absolute top-4 right-4 text-cream" size={18} />
            )}
          </div>
        </div>

        {/* Mobile-visible content */}
        <div className="p-4 md:hidden">
          <span className="text-lavender text-xs font-medium uppercase tracking-wide">
            {item.category}
          </span>
          <h3 className="text-charcoal font-display text-lg mt-1">{item.title}</h3>
          <p className="text-charcoal/60 text-sm">{item.client}</p>
        </div>
      </div>
    </motion.div>
  )
}
