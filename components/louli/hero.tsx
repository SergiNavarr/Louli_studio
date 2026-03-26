import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
              Tu espacio de bienestar en el corazón de{" "}
              <span className="text-primary">Corrientes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hola, soy Louli y te ayudo a resaltar tu mejor versión con tratamientos 
              pensados especialmente para vos. Un espacio donde el cuidado personal 
              se convierte en un momento de paz.
            </p>
            <div className="pt-4">
              <Button 
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a 
                  href="https://wa.me/5493794000000?text=Hola!%20Quiero%20agendar%20una%20cita" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendá tu cita por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-secondary/50 overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-secondary to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-serif text-5xl text-primary">L</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Foto del estudio</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
