'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding bg-charcoal" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lavender font-medium tracking-wide uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-xl mx-auto">
              I&apos;m always interested in hearing about new opportunities, projects, and partnerships.
              If you&apos;re intereseted in crafting storytelling moments that connect audiences and build community, let&apos;s connect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:catherinendunn@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 bg-cream text-charcoal font-medium rounded-full hover:bg-lavender hover:text-cream transition-colors duration-300"
            >
              <Mail size={20} />
              <span>catherinendunn@gmail.com</span>
              <ArrowUpRight
                size={18}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/-catherinedunn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 border-2 border-cream text-cream font-medium rounded-full hover:bg-cream hover:text-charcoal transition-colors duration-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
              <ArrowUpRight
                size={18}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
