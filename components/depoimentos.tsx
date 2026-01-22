"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Excelente receptividade e profissionalismo, com projetos de encher os olhos, muito bom!",
    name: "Engenheiro Tiago Holanda",
    timeAgo: "há 2 anos",
    rating: 5,
  },
  {
    quote:
      "Profissional extremamente qualificada e experiente no mercado da arquitetura e desenvolvimento de projetos. E que realmente se preocupa com a necessidade do cliente, orientando-o a encontrar as melhores alternativas para a elaboração e execução do projeto, acompanhando a obra do início ao fim. Recomendo.",
    name: "Anderson Silva",
    timeAgo: "há 2 anos",
    rating: 5,
  },
  {
    quote:
      "Hellen é maravilhosa! Se empenha muito em atender às nossas necessidades e realizar o projeto dos sonhos. Além do mais é flexível e paciente, o que é muito importante para clientes indecisos.",
    name: "Alessandra Azevedo",
    timeAgo: "há 2 anos",
    rating: 5,
  },
]

export function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-[#D3B070] tracking-[0.3em] uppercase mb-6 block">
            Avaliações no Google
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-2 text-balance italic">
            Não somos nós que dizemos.
          </h2>
          <p className="text-white/60">
            São os lares que falam.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <svg 
              className="w-16 h-16 text-[#D3B070]/40" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
          </div>

          {/* Quote Text */}
          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-10 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Stars Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
            ))}
          </div>

          {/* Author Info */}
          <div className="mb-12">
            <p className="text-[#D3B070] font-medium text-lg mb-1">
              {testimonial.name}
            </p>
            <p className="text-white/40 text-sm">
              {testimonial.timeAgo}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D3B070] hover:text-[#D3B070] transition-colors text-white/60"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 h-2 bg-[#D3B070] rounded-full"
                      : "w-2 h-2 bg-white/30 rounded-full hover:bg-white/50"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#D3B070] hover:text-[#D3B070] transition-colors text-white/60"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Google Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-white/40 text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Avaliações verificadas do Google
          </div>
        </div>
      </div>
    </section>
  )
}
