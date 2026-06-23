import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 relative bg-white">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBF2FB]/60 via-white to-white pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EBF2FB] border border-[#C0E6F7] mb-8">
          <Icon name="Truck" className="w-4 h-4 text-[#0B5C95]" />
          <span className="text-sm text-[#0B5C95] font-medium">Доставка из Китая в Россию «под ключ»</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
          <span className="block">Помогаем бизнесу</span>
          <span className="text-[#0B5C95]">
            увеличить прибыль
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Поиск товара и поставщика, беспроцентный выкуп, консолидация груза, фулфилмент и доставка. Полный цикл логистики из Китая, чтобы вы достигали максимальных результатов.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="px-8 py-3.5 rounded-full bg-[#0B5C95] text-white font-semibold text-sm hover:bg-[#0F75BB] transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2"
          >
            Рассчитать доставку
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span>Как мы работаем</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Delivery route illustration */}
        <div className="mt-16 relative max-w-2xl mx-auto">
          {/* Price badge */}
          <div className="absolute -top-3 right-2 sm:right-6 z-10 bg-[#0B5C95] border border-[#0B5C95] rounded-2xl px-4 py-2.5 text-left shadow-xl">
            <p className="text-[10px] text-blue-200 uppercase tracking-wider">Доставка от</p>
            <p className="font-display text-lg font-bold text-white leading-none">0.9 $/кг</p>
          </div>

          <div className="rounded-3xl bg-white border border-gray-200 shadow-lg p-6 sm:p-10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-[#0B5C95]" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">Гуанчжоу</p>
                  <p className="text-[10px] text-gray-400">CN</p>
                </div>
              </div>

              <div className="flex-1 relative mx-2 flex items-center">
                <div className="w-full border-t border-dashed border-[#8AC4ED]" />
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#075339] flex items-center justify-center shadow-lg shadow-green-900/20">
                  <Icon name="Plane" className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-[#0B5C95] flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">Москва</p>
                  <p className="text-[10px] text-gray-400">RU</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {["Авиа", "Море", "Авто", "Ж/Д"].map((mode, i) => (
                <span
                  key={mode}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    i === 0
                      ? "bg-[#0B5C95] text-white"
                      : "bg-gray-100 text-gray-600 border border-gray-200"
                  }`}
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>

          {/* Track badge */}
          <div className="absolute -bottom-4 left-2 sm:left-6 bg-white border border-gray-200 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
            <div className="w-9 h-9 rounded-xl bg-[#075339]/10 flex items-center justify-center">
              <Icon name="Package" className="w-5 h-5 text-[#075339]" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-400">Трек C2R-8842</p>
              <p className="text-sm font-semibold text-gray-800">На складе в Москве</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}