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
              src="/images/detail.jpg"
              alt="Hellen Barros - Arquiteta"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="lg:py-8">
            <span className="text-sm text-[#D3B070] tracking-[0.2em] uppercase mb-4 block">
              O Manifesto
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#501021] mb-6 text-balance italic">
              Muito além de plantas e paredes.
            </h2>
            
            <div className="space-y-6 text-[#7D1935] leading-relaxed">
              <p>
                Seu lar pode ser mais do que bonito. Ele pode ser inesquecível. 
                Nós projetamos espaços que contam sua história — com sofisticação, 
                alma e propósito.
              </p>
              <p>
                Cada traço que desenhamos carrega a essência de quem você é. 
                Não criamos apenas ambientes; criamos experiências que transformam 
                o cotidiano em momentos extraordinários.
              </p>
              <p>
                Com mais de uma década de dedicação à arquitetura residencial, 
                entendemos que um projeto bem-sucedido vai além da estética: 
                ele precisa emocionar, funcionar e resistir ao tempo.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-8 border-[#501021]/30 text-[#501021] hover:bg-[#501021]/5 bg-transparent"
            >
              <Link href="#servicos">Conheça nossa essência</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
