import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/images/detail-architecture.jpg"
              alt="Detalhe arquitetonico sofisticado"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:py-8">
            <span className="text-sm text-[#D3B070] tracking-[0.2em] uppercase mb-4 block">
              O Manifesto
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#501021] mb-6 text-balance italic">
              Muito alem de plantas e paredes.
            </h2>
            
            <div className="space-y-6 text-[#7D1935] leading-relaxed">
              <p>
                Seu lar pode ser mais do que bonito. Ele pode ser inesquecivel. 
                Nos projetamos espacos que contam sua historia — com sofisticacao, 
                alma e proposito.
              </p>
              <p>
                Cada traco que desenhamos carrega a essencia de quem voce e. 
                Nao criamos apenas ambientes; criamos experiencias que transformam 
                o cotidiano em momentos extraordinarios.
              </p>
              <p>
                Com mais de uma decada de dedicacao a arquitetura residencial, 
                entendemos que um projeto bem-sucedido vai alem da estetica: 
                ele precisa emocionar, funcionar e resistir ao tempo.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-8 border-[#501021]/30 text-[#501021] hover:bg-[#501021]/5 bg-transparent"
            >
              <Link href="#servicos">Conheca nossa essencia</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
