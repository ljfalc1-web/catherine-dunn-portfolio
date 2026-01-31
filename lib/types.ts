export type PortfolioCategory = 'Digital' | 'Print' | 'Social' | 'Influencer Partnerships' | 'Events'

export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: PortfolioCategory
  description: string
  thumbnail: string
  images?: string[]
  externalLink?: string
  embedType?: 'instagram' | 'tiktok'
  embedUrl?: string
  results?: string[]
  year: number
}

export interface NavItem {
  label: string
  href: string
}
