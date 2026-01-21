"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Residencia Vale Verde",
    category: "Arquitetura Residencial",
    description: "Projeto contemporaneo que integra natureza e design em harmonia perfeita.",
    image: "/images/portfolio-1.jpg",
  },
  {
    id: 2,
    title: "Cozinha Gourmet Jardins",
    category: "Design de Interiores",
    description: "Ambiente sofisticado com materiais nobres e funcionalidade excepcional.",
    image: "/images/portfolio-2.jpg",
  },
  {
    id: 3,
    title: "Suite Master Alphaville",
    category: "Design de Interiores",
    description: "Espaco de descanso que combina conforto e elegancia em cada detalhe.",
    image: "/images/portfolio-3.jpg",
  },
  {
    id: 4,
    title: "Jardim Contemplativo",
    category: "Paisagismo",
    description: "Integracao perfeita entre arquitetura e natureza para momentos de paz.",
    image: "/images/portfolio-4.jpg",
  },
]

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      <section id="portfolio" className="py-24 md:py-32 bg-[#F2DFB6]/30">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-[#D3B070] tracking-[0.2em] uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#501021] mb-4 text-balance italic">
              Prova Visual de Autoridade
            </h2>
            <p className="text-[#7D1935] max-w-xl mx-auto">
              Do traco ao toque final, cada projeto e uma historia bem contada.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    hoveredId === project.id ? "scale-110" : "scale-100"
                  }`}
                />
                
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#501021]/80 via-[#501021]/20 to-transparent transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-70"
                  }`}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <span className="text-white/80 text-sm tracking-wider uppercase mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-white font-normal italic">
                    {project.title}
                  </h3>
                  <span
                    className={`text-sm text-[#D3B070] mt-3 transition-all duration-300 flex items-center gap-2 ${
                      hoveredId === project.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    Ver detalhes <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/10]">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-[#501021] rounded-sm flex items-center justify-center hover:bg-[#7D1935] transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <span className="text-sm text-[#D3B070] tracking-[0.2em] uppercase mb-2 block">
                {selectedProject.category}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#501021] font-normal mb-4 italic">
                {selectedProject.title}
              </h3>
              <p className="text-[#7D1935] mb-6">
                {selectedProject.description}
              </p>
              <Button
                asChild
                className="bg-[#D3B070] hover:bg-[#D3B070]/90 text-[#501021] px-8"
              >
                <Link href="#contato" onClick={() => setSelectedProject(null)}>
                  Quero algo assim <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
