import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#501021] text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-semibold text-white italic">
                Hellen Barros
              </span>
              <span className="text-xs text-white/60 tracking-[0.2em] uppercase">
                Arquitetura & Design
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-md">
              Transformamos sonhos em realidade atraves de projetos que unem
              sofisticacao, funcionalidade e alma. Cada espaco que criamos e uma
              extensao de quem voce e.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-white mb-4">Navegacao</h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="#manifesto"
                className="text-white/70 hover:text-[#D3B070] transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="#portfolio"
                className="text-white/70 hover:text-[#D3B070] transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#servicos"
                className="text-white/70 hover:text-[#D3B070] transition-colors"
              >
                Servicos
              </Link>
              <Link
                href="#faq"
                className="text-white/70 hover:text-[#D3B070] transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-white mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contato@hellenbarros.com.br"
                className="text-white/70 hover:text-[#D3B070] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                contato@hellenbarros.com.br
              </a>
              <a
                href="tel:+5511999999999"
                className="text-white/70 hover:text-[#D3B070] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D3B070] hover:text-[#501021] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D3B070] hover:text-[#501021] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Hellen Barros Arquitetura. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
