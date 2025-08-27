import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProjects />
      <Footer />
    </main>
  )
}