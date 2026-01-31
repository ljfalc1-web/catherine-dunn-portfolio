'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blush/20 rounded-2xl -rotate-3" />
              <div className="relative aspect-[4/5] bg-gradient-to-br from-charcoal/10 to-charcoal/5 rounded-2xl flex items-center justify-center border border-charcoal/10">
                <span className="text-charcoal/40 text-sm">Photo Coming Soon</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <p className="text-lavender font-medium tracking-wide uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Building Brands Through
              <br />
              <span className="text-blush">Strategic Storytelling</span>
            </h2>
            <div className="space-y-4 text-charcoal/70">
              <p>
                With over 8 years of experience in public relations, I&apos;ve had the privilege of
                working with brands across beauty, technology, hospitality, and lifestyle sectors.
                My approach combines data-driven strategy with creative storytelling to deliver
                measurable results.
              </p>
              <p>
                I believe in building authentic relationships — both with the media and the
                audiences we&apos;re trying to reach. Every campaign I lead starts with understanding
                the unique story a brand has to tell, then finding the perfect channels and
                moments to share it.
              </p>
              <p>
                When I&apos;m not crafting press releases or coordinating influencer partnerships,
                you&apos;ll find me exploring local coffee shops, attending industry events, or
                staying up-to-date on the latest digital trends.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-charcoal/10">
              <div>
                <p className="font-display text-3xl md:text-4xl text-lavender">8+</p>
                <p className="text-sm text-charcoal/60 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-lavender">50+</p>
                <p className="text-sm text-charcoal/60 mt-1">Brands Served</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-lavender">100M+</p>
                <p className="text-sm text-charcoal/60 mt-1">Media Impressions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
