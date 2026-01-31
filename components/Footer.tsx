'use client'

import { navItems } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal border-t border-cream/10">
      <div className="container-narrow mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a
              href="#"
              className="font-display text-lg text-cream hover:text-lavender transition-colors"
            >
              Catherine Dunn
            </a>
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-cream/60 hover:text-lavender transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <p className="text-sm text-cream/40">
            © {currentYear} Catherine Dunn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
