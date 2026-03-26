import { Instagram, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl text-card mb-2">Louli Studio</p>
            <p className="text-card/70 text-sm">
              Estética y bienestar en Corrientes
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/loulistudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Seguinos en Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-card/10 mt-8 pt-8 text-center">
          <p className="text-card/50 text-sm flex items-center justify-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> en Corrientes
          </p>
        </div>
      </div>
    </footer>
  )
}
