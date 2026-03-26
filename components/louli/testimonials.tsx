import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María Laura",
    text: "Louli es una genia. Me hizo sentir súper cómoda desde el primer momento. El lugar es hermoso y los resultados increíbles. ¡Ya reservé mi próxima cita!",
  },
  {
    name: "Carolina",
    text: "Después de probar varios lugares, encontré en Louli Studio mi espacio de confianza. La atención personalizada hace toda la diferencia.",
  },
  {
    name: "Valentina",
    text: "Me encanta el ambiente acogedor y profesional. Cada visita es un momento de paz y siempre salgo renovada. Lo recomiendo al 100%.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Lo que dicen mis clientas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La confianza de quienes me eligen es mi mayor orgullo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name}
              className="bg-card border-border/50 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  {`"${testimonial.text}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-foreground">
                    {testimonial.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
