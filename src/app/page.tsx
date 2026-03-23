import { Hero } from '@/components/landing/Hero'
import { FeatureGrid } from '@/components/landing/FeatureGrid'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Hero />
      <FeatureGrid />
    </main>
  )
}