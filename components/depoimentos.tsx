"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "A Hellen transformou nossa casa em um verdadeiro refugio. Cada detalhe foi pensado com carinho e profissionalismo. O resultado superou todas as nossas expectativas.",
    name: "Mariana Santos",
    location: "Sao Paulo, SP",
    project: "Residencia Jardins",
  },
  {
    quote:
      "Profissionalismo e sensibilidade em cada etapa do projeto. Nossa casa agora reflete exatamente quem somos. Recomendo de olhos fechados.",
    name: "Roberto e Ana Lima",
    location: "Campinas, SP",
    project: "Casa de Campo",
  },
  {
    quote:
      "O paisagismo do nosso jardim ficou impecavel. A integracao com a piscina e a area gourmet criou um espaco perfeito para reunir amigos e familia.",
    name: "Carolina Mendes",
    location: "Ribeirao Preto, SP",
    project: "Jardim Contemporaneo",
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
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-2 text-balance italic">
            Nao somos nos que dizemos.
          </h2>
          <p className="text-white/60">
            Sao os lares que falam.
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

          {/* Author Info */}
          <div className="mb-12">
            <p className="text-[#D3B070] font-medium text-lg mb-1">
              {testimonial.name}
            </p>
            <p className="text-white/60 text-sm mb-1">
              {testimonial.location}
            </p>
            <p className="text-white/40 text-xs tracking-wider uppercase">
              {testimonial.project}
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
              aria-label="Proximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
