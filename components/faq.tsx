"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o processo de contratacao?",
    answer:
      "O processo comeca com uma reuniao inicial para entender suas necessidades e expectativas. Apos a aprovacao da proposta, iniciamos o desenvolvimento do projeto com etapas bem definidas, sempre com sua participacao e aprovacao em cada fase.",
  },
  {
    question: "Qual e o prazo medio para um projeto residencial?",
    answer:
      "O prazo varia de acordo com a complexidade do projeto. Em media, um projeto residencial completo leva de 60 a 120 dias. Projetos de interiores podem ser concluidos em 30 a 60 dias. Sempre apresentamos um cronograma detalhado na proposta.",
  },
  {
    question: "Voces acompanham a execucao da obra?",
    answer:
      "Sim! Oferecemos servico de acompanhamento de obra para garantir que o projeto seja executado exatamente como planejado. Realizamos visitas periodicas e coordenamos com os profissionais envolvidos na construcao.",
  },
  {
    question: "Como e definido o valor do investimento?",
    answer:
      "O valor e calculado com base na metragem do projeto, complexidade, escopo dos servicos e prazo de entrega. Apos a reuniao inicial, apresentamos uma proposta detalhada com todos os valores e condicoes de pagamento.",
  },
  {
    question: "Atendem em quais regioes?",
    answer:
      "Atendemos principalmente a regiao metropolitana de Sao Paulo, mas tambem realizamos projetos em outras cidades e estados. Para projetos fora de Sao Paulo, podemos fazer reunioes online e visitas programadas.",
  },
  {
    question: "Posso fazer alteracoes durante o projeto?",
    answer:
      "Sim, entendemos que ajustes podem ser necessarios. Incluimos rodadas de revisao em cada etapa do projeto. Alteracoes significativas fora do escopo inicial podem ser negociadas separadamente.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F2DFB6]/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-[#D3B070] tracking-[0.2em] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#501021] mb-4 text-balance italic">
            Duvidas Frequentes
          </h2>
          <p className="text-[#7D1935] max-w-xl mx-auto">
            Reunimos as principais perguntas que recebemos. Se nao encontrar o
            que procura, entre em contato conosco.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-[#F2DFB6] rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-normal text-[#501021] hover:text-[#7D1935] py-6 hover:no-underline italic">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#7D1935] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
