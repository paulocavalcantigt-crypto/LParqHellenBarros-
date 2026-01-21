import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Contato() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-[#7D1935]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm text-[#D3B070] tracking-[0.2em] uppercase mb-4 block">
            Vamos Conversar
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 text-balance italic">
            Pronto para viver o projeto que voce merece?
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            De o primeiro passo para transformar seu sonho em realidade. Nossa
            equipe esta pronta para criar um projeto unico, feito especialmente
            para voce.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#D3B070] text-[#501021] hover:bg-[#D3B070]/90 px-10"
          >
            <Link href="mailto:contato@hellenbarros.com.br">
              Fale com a Gente Agora
            </Link>
          </Button>
          <p className="text-white/60 text-sm mt-6">
            Resposta garantida em ate 24 horas uteis.
          </p>
        </div>
      </div>
    </section>
  )
}
