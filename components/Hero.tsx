'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-20 right-[10%] w-72 h-72 md:w-96 md:h-96 bg-lavender rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-20 left-[5%] w-64 h-64 md:w-80 md:h-80 bg-blush rounded-full blur-3xl"
        />
      </div>

      <div className="container-narrow mx-auto px-6 md:px-12 pt-24 md:pt-32">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Text content - asymmetric positioning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:col-span-7 md:col-start-1"
          >
            <p className="text-lavender font-medium tracking-wide uppercase text-sm mb-4">
              Public Relations Professional
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-tight mb-6">
              Crafting Stories
              <br />
              <span className="text-lavender">That Resonate</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-lg mb-8">
              I help brands connect with their audiences through strategic communications,
              compelling narratives, and meaningful media relationships.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center px-6 py-3 bg-charcoal text-cream font-medium rounded-full hover:bg-lavender transition-colors duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-charcoal text-charcoal font-medium rounded-full hover:bg-charcoal hover:text-cream transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Visual element - overlapping cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="md:col-span-5 md:col-start-8 relative hidden md:block"
          >
            <div className="relative">
              {/* Decorative card 1 */}
              <motion.div
                initial={{ rotate: -6 }}
                animate={{ rotate: -6 }}
                className="absolute -top-4 -left-8 w-48 h-64 bg-blush/30 rounded-2xl"
              />
              {/* Decorative card 2 */}
              <motion.div
                initial={{ rotate: 3 }}
                animate={{ rotate: 3 }}
                className="absolute -bottom-4 -right-4 w-48 h-64 bg-lavender/30 rounded-2xl"
              />
              {/* Main image placeholder */}
              <div className="relative z-10 w-56 h-72 bg-gradient-to-br from-charcoal/20 to-charcoal/5 rounded-2xl flex items-center justify-center border border-charcoal/10">
                <span className="text-charcoal/40 text-sm text-center px-4">
                  Photo Coming Soon
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-charcoal/50 hover:text-lavender transition-colors"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
