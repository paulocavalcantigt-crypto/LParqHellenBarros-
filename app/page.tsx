import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { Portfolio } from "@/components/portfolio"
import { Servicos } from "@/components/servicos"
import { Depoimentos } from "@/components/depoimentos"
import { FAQ } from "@/components/faq"
import { Contato } from "@/components/contato"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Manifesto />
      <Portfolio />
      <Servicos />
      <Depoimentos />
      <FAQ />
      <Contato />
      <Footer />
    </main>
  )
}
