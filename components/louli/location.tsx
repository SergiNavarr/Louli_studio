import { MapPin, Clock, Phone } from "lucide-react"

export function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Te Espero
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un rincón de paz en el centro de Corrientes, pensado para que te sientas como en casa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-lg bg-card h-80 lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.8976559358917!2d-58.8344!3d-27.4676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI4JzAzLjQiUyA1OMKwNTAnMDQuMCJX!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Louli Studio"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Dirección</h3>
                <p className="text-muted-foreground">
                  Salta 885, Corrientes Capital
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  A pasos del centro, fácil acceso y estacionamiento cercano
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Horarios</h3>
                <p className="text-muted-foreground">
                  Lunes a Viernes: 9:00 - 20:00
                </p>
                <p className="text-muted-foreground">
                  Sábados: 9:00 - 14:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Contacto</h3>
                <a 
                  href="https://wa.me/5493794000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  +54 9 379 400-0000
                </a>
                <p className="text-muted-foreground text-sm mt-1">
                  Respondemos en minutos por WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
