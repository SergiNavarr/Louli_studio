"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const num = '5493795131914';

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative h-16 w-48 transition-transform hover:scale-105">
            <Image
              src="/logo_1.svg"
              alt="Louli Studio Logo"
              fill
              className="object-contain" 
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Servicios
            </a>
            <a href="#resultados" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Resultados
            </a>
            <a href="#ubicacion" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Ubicación
            </a>
            <Button
              className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a
                href={`https://wa.me/${num}?text=Hola!%20Quiero%20reservar%20un%20turno`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Turno
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <a
              href="#servicios"
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#resultados"
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </a>
            <a
              href="#ubicacion"
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ubicación
            </a>
            <Button
              className="rounded-full w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a
                href={`https://wa.me/${num}?text=Hola!%20Quiero%20reservar%20un%20turno`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Turno
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
