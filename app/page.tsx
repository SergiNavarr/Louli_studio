import { Header } from "@/components/louli/header"
import { Hero } from "@/components/louli/hero"
import { Services } from "@/components/louli/services"
import { Results } from "@/components/louli/results"
import { Location } from "@/components/louli/location"
import { Testimonials } from "@/components/louli/testimonials"
import { Footer } from "@/components/louli/footer"
import { WhatsAppButton } from "@/components/louli/whatsapp-button"

export default function LouliStudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
