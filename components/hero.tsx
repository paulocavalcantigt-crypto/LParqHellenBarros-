import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Projeto arquitetonico de luxo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-tight mb-6 text-balance italic">
            Arquitetura e<br />Urbanismo com Alma
          </h1>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-sm md:text-base text-white/90">Residencial</span>
            <span className="text-white/60">·</span>
            <span className="text-sm md:text-base text-white/90">Design de Interiores</span>
            <span className="text-white/60">·</span>
            <span className="text-sm md:text-base text-white/90">Paisagismo</span>
          </div>

          <p className="text-base md:text-lg text-white/80 mb-10">
            Projetos que respiram voce.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#D3B070] hover:bg-[#D3B070]/90 text-[#501021] font-medium px-10 py-6 text-sm tracking-wider uppercase"
            >
              <Link href="#contato">Fale Conosco Agora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 hover:text-white px-10 py-6 text-sm tracking-wider uppercase bg-transparent"
            >
              <Link href="#portfolio">Ver Projetos</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link
          href="#manifesto"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </Link>
      </div>
    </section>
  )
}
