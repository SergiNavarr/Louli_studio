import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              Tu espacio de bienestar en el corazón de{" "}
              <span className="text-primary">Corrientes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hola, soy Lourdes y te ayudo a resaltar tu mejor versión con tratamientos
              pensados especialmente para vos. Un espacio donde el cuidado personal
              se convierte en un momento de paz.
            </p>
            <div className="pt-4 w-full flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-full w-full sm:w-auto h-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a
                  href="https://wa.me/5493795131914?text=Hola!%20Quiero%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-center"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Agendá tu cita por WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <Image
                src="/estudio.jpeg"
                alt="Estudio de estética Louli"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-primary/20 rounded-full blur-2xl z-0" />
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-accent/20 rounded-full blur-2xl z-0" />
          </div>
        </div>
      </div>
    </section>
  )
}