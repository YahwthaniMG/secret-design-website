import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </main>
  )
}