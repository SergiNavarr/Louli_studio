import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Script from "next/script" 

export function Results() {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Mirá los resultados reales del día a día en nuestro estudio. 
            Actualizamos nuestra galería constantemente.
          </p>
          
          <Button variant="outline" className="gap-2 rounded-full" asChild>
            <a href="https://instagram.com/loulibyln" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-4 h-4" />
              Seguinos en Instagram
            </a>
          </Button>
        </div>

        <div className="w-full max-w-6xl mx-auto min-h-[400px] bg-card border-border/50 rounded-3xl shadow-sm p-2 md:p-4 overflow-hidden">
          
          <div className="elfsight-app-f2eee1ef-65ed-490d-bdca-33c4c43d10f2" data-elfsight-app-lazy></div>
          
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

        </div>
      </div>
    </section>
  )
}