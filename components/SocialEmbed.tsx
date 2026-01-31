'use client'

import { useState, useEffect, useRef } from 'react'
import { Instagram, Video } from 'lucide-react'

interface SocialEmbedProps {
  type: 'instagram' | 'tiktok'
  url?: string
}

export default function SocialEmbed({ type, url }: SocialEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Placeholder when no URL provided
  if (!url) {
    return (
      <div
        ref={containerRef}
        className="w-full max-w-sm aspect-[9/16] bg-charcoal/5 rounded-xl flex flex-col items-center justify-center gap-4 border border-charcoal/10"
      >
        {type === 'instagram' ? (
          <Instagram className="text-charcoal/30" size={48} />
        ) : (
          <Video className="text-charcoal/30" size={48} />
        )}
        <p className="text-charcoal/40 text-sm text-center px-4">
          {type === 'instagram' ? 'Instagram' : 'TikTok'} embed coming soon
        </p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full max-w-sm">
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="aspect-[9/16] bg-charcoal/5 rounded-xl flex items-center justify-center animate-pulse">
          {type === 'instagram' ? (
            <Instagram className="text-charcoal/20" size={32} />
          ) : (
            <Video className="text-charcoal/20" size={32} />
          )}
        </div>
      )}

      {/* Lazy-loaded embed */}
      {isVisible && (
        <div className={isLoaded ? 'block' : 'hidden'}>
          {type === 'instagram' ? (
            <iframe
              src={`${url}/embed`}
              className="w-full aspect-[9/16] rounded-xl border-0"
              onLoad={handleLoad}
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <iframe
              src={url}
              className="w-full aspect-[9/16] rounded-xl border-0"
              onLoad={handleLoad}
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      )}
    </div>
  )
}
