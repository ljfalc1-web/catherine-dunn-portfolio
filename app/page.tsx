import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getPortfolioItems } from '@/lib/sheets'

export default async function Home() {
  const portfolioItems = await getPortfolioItems()

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Portfolio items={portfolioItems} />
      <Contact />
      <Footer />
    </main>
  )
}
