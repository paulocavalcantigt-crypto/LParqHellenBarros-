import { Home, Palette, Trees } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Arquitetura Residencial",
    description:
      "Projetos que traduzem sua personalidade em cada ambiente. Do conceito à execução, criamos lares que são extensões de quem você é.",
  },
  {
    icon: Palette,
    title: "Design de Interiores",
    description:
      "Ambientes que encantam e funcionam. Selecionamos materiais, mobiliário e iluminação para criar atmosferas únicas e acolhedoras.",
  },
  {
    icon: Trees,
    title: "Paisagismo",
    description:
      "Jardins que contam histórias. Integramos natureza e arquitetura para criar espaços externos que inspiram e relaxam.",
  },
]

export function Servicos() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-[#D3B070] tracking-[0.2em] uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#501021] mb-4 text-balance italic">
            Transformamos sonhos em realidade
          </h2>
          <p className="text-[#7D1935] max-w-xl mx-auto">
            Oferecemos soluções completas em arquitetura e design, sempre com
            foco na excelência e na satisfação de nossos clientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-[#F2DFB6] rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[#D3B070]/20 flex items-center justify-center mb-6 group-hover:bg-[#D3B070]/30 transition-colors">
                <service.icon className="w-7 h-7 text-[#7D1935]" />
              </div>
              <h3 className="font-serif text-xl font-normal text-[#501021] mb-4 italic">
                {service.title}
              </h3>
              <p className="text-[#7D1935] leading-relaxed mb-6">
                {service.description}
              </p>
              <Button
                asChild
                variant="link"
                className="p-0 h-auto text-[#D3B070] hover:text-[#7D1935]"
              >
                <Link href="#contato">Ver detalhes &rarr;</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
