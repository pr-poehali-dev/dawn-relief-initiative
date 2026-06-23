import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6">Готовы везти из Китая выгодно?</h2>
        <p className="text-lg text-zinc-400 mb-10 text-balance">
          Оставьте заявку — рассчитаем стоимость доставки вашего товара и возьмём весь процесс на себя. Помогаем бизнесу увеличить прибыль.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing">
            <LiquidCtaButton>Рассчитать доставку</LiquidCtaButton>
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Узнать про услуги</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}