'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ExternalLink, Calendar } from 'lucide-react'
import { PortfolioItem } from '@/lib/types'
import SocialEmbed from './SocialEmbed'

interface PortfolioModalProps {
  item: PortfolioItem | null
  isOpen: boolean
  onClose: () => void
}

export default function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!item) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', bounce: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cream rounded-2xl shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-cream/90 rounded-full text-charcoal hover:text-lavender transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative aspect-square md:aspect-auto md:min-h-[500px]">
                {item.embedType ? (
                  <div className="h-full flex items-center justify-center bg-charcoal/5 p-4">
                    <SocialEmbed type={item.embedType} url={item.embedUrl} />
                  </div>
                ) : (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>

              {/* Details side */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-lavender/10 text-lavender text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-charcoal/50 text-sm">
                    <Calendar size={14} />
                    {item.year}
                  </span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
                  {item.title}
                </h2>
                <p className="text-lavender font-medium mb-4">{item.client}</p>

                <p className="text-charcoal/70 mb-6">{item.description}</p>

                {/* Results */}
                {item.results && item.results.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-charcoal uppercase tracking-wide mb-3">
                      Key Results
                    </h3>
                    <ul className="space-y-2">
                      {item.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-charcoal/70"
                        >
                          <span className="w-1.5 h-1.5 bg-blush rounded-full flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* External link */}
                {item.externalLink && (
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-cream font-medium rounded-full hover:bg-lavender transition-colors"
                  >
                    View Live Work
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
