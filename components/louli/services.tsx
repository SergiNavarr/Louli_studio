import { Card , CardContent} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const num = '5493795131914';

const services = [
  {
    title: "Lifting de Pestañas",
    description: "Realza tu mirada con un arqueado natural y duradero.",
    image: "/pestanias.jpeg",
    whatsappLink: `https://wa.me/${num}?text=Hola!%20Me%20interesaría%20pedir%20un%20turno%20para%20Lifting%20de%20Pestañas`,
  },
  {
    title: "Perfilado de cejas",
    description: "Define tu forma de cejas con precisión y estilo.",
    image: "/cejas.jpeg",
    whatsappLink: `https://wa.me/${num}?text=Hola!%20Me%20interesaría%20pedir%20un%20turno%20para%20Perfilado%20de%20cejas`,
  },
  {
    title: "Diseño de uñas",
    description: "Transforma tu apariencia con un diseño elegante y duradero.",
    image: "/unias.jpeg",
    whatsappLink: "https://wa.me/5493794063454?text=Hola!%20Me%20interesaría%20pedir%20un%20turno%20para%20Diseño%20de%20uñas",
  },
]

export function Services() {
  return (
    <section className="py-20 px-4" id="servicios">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Mis Tratamientos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <a 
              href={service.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={index}
              className="block no-underline"
            >
              <Card 
                className="group h-full overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-card cursor-pointer"
              >
                {/* Contenedor de Imagen */}
                <div className="p-3 pb-0">
                  <div className="overflow-hidden rounded-2xl"> 
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </AspectRatio>
                  </div>
                </div>

                <CardHeader className="pt-6 px-6">
                  <CardTitle className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground italic">
                    {service.description}
                  </CardDescription>
                  <p className="mt-4 text-xs font-medium text-primary uppercase tracking-wider">
                    Solicitar Turno →
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}