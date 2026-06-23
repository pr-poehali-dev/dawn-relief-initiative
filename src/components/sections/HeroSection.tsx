import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8">
          <Icon name="Truck" className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-zinc-400">Доставка из Китая в Россию «под ключ»</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-zinc-100 block">Помогаем бизнесу</span>
          <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text text-transparent">
            увеличить прибыль
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Поиск товара и поставщика, беспроцентный выкуп, консолидация груза, фулфилмент и доставка. Полный цикл логистики из Китая, чтобы вы достигали максимальных результатов.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing">
            <LiquidCtaButton>Рассчитать доставку</LiquidCtaButton>
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Как мы работаем</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Delivery route illustration */}
        <div className="mt-16 relative max-w-2xl mx-auto">
          <div className="absolute -top-3 right-2 sm:right-6 z-10 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-2.5 text-left shadow-xl">
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Доставка от</p>
            <p className="font-display text-lg font-bold text-white leading-none">0.9 $/кг</p>
          </div>

          <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-zinc-100">Гуанчжоу</p>
                  <p className="text-[10px] text-zinc-500">CN</p>
                </div>
              </div>

              <div className="flex-1 relative mx-2 flex items-center">
                <div className="w-full border-t border-dashed border-zinc-700" />
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Icon name="Plane" className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-zinc-100">Москва</p>
                  <p className="text-[10px] text-zinc-500">RU</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {["Авиа", "Море", "Авто", "Ж/Д"].map((mode, i) => (
                <span
                  key={mode}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    i === 0
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-800/70 text-zinc-300 border border-zinc-700"
                  }`}
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-4 left-2 sm:left-6 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center">
              <Icon name="Package" className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-zinc-500">Трек C2R-8842</p>
              <p className="text-sm font-semibold text-zinc-100">На складе в Москве</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}