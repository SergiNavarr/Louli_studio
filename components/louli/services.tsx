import { Sparkles, Eye, Heart, Flower2, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const num = '5493795131914';

const services = [
  {
    icon: Sparkles,
    title: "Cejas",
    description: "Perfilado de cejas. Resaltá ti mirada com elegancia y naturalidad.",
    num: num,
  },
  {
    icon: Eye,
    title: "Pestañas",
    description: "Realzá tu mirada con diseño de lifting de pestañas. Lucí natural y radiante todos los días.",
    num: num,
  },
  {
    icon: Heart,
    title: "Diseño de uñas",
    description: "Dale a tus manos un toque de glamour con nuestro diseño de uñas. Elegí entre una variedad de estilos y colores para lucir siempre impecable.",
    num: '5493794063454',
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Mis Tratamientos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada tratamiento está pensado con cariño para que vivas una experiencia única de cuidado personal
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="group bg-card border-border/50 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href={`https://wa.me/${service.num}?text=Hola!%20Quiero%20consultar%20sobre%20el%20tratamiento%20de%20${service.title}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Consultar
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
