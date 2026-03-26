import { Card, CardContent } from "@/components/ui/card"

const results = [
  { id: 1, treatment: "Limpieza Facial" },
  { id: 2, treatment: "Lifting de Pestañas" },
  { id: 3, treatment: "Diseño de Cejas" },
  { id: 4, treatment: "Tratamiento Facial" },
]

export function Results() {
  return (
    <section id="resultados" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Antes y Después
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reales de clientas que confiaron en Louli Studio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result) => (
            <Card 
              key={result.id}
              className="group bg-card border-border/50 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {/* Before side */}
                    <div className="w-1/2 bg-gradient-to-br from-secondary to-accent/10 flex items-center justify-center border-r border-border/30">
                      <span className="text-muted-foreground text-xs font-medium">Antes</span>
                    </div>
                    {/* After side */}
                    <div className="w-1/2 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                      <span className="text-primary text-xs font-medium">Después</span>
                    </div>
                  </div>
                  {/* Vertical divider */}
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-card transform -translate-x-1/2" />
                </div>
                <div className="p-4 text-center">
                  <p className="font-medium text-foreground text-sm">{result.treatment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
