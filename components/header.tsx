"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#manifesto", label: "Sobre" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#servicos", label: "Servicos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col">
            <span className={`font-serif text-xl font-semibold transition-colors ${
              isScrolled ? "text-[#501021]" : "text-white"
            }`}>
              Hellen Barros
            </span>
            <span className={`text-xs tracking-[0.2em] uppercase transition-colors ${
              isScrolled ? "text-[#7D1935]" : "text-white/70"
            }`}>
              Arquitetura & Design
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isScrolled 
                    ? "text-[#501021] hover:text-[#D3B070]" 
                    : "text-white hover:text-[#D3B070]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button 
              asChild 
              variant="outline"
              className={`border transition-colors ${
                isScrolled
                  ? "border-[#D3B070] text-[#501021] hover:bg-[#D3B070] hover:text-[#501021] bg-transparent"
                  : "border-[#D3B070] text-white hover:bg-[#D3B070] hover:text-[#501021] bg-transparent"
              }`}
            >
              <Link href="#contato">Fale Conosco</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-[#501021]" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-[#501021]" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#F2DFB6]">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#501021] hover:text-[#D3B070] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              className="mt-4 bg-[#D3B070] hover:bg-[#D3B070]/90 text-[#501021]"
            >
              <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                Fale Conosco
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
