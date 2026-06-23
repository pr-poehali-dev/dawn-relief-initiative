import { Check } from "lucide-react"

const plans = [
  {
    name: "Авиа",
    description: "Когда важна скорость доставки",
    price: "от 0.9 $/кг",
    period: "",
    features: [
      "Срок 10–18 дней",
      "Для срочных и лёгких грузов",
      "Отслеживание по трек-номеру",
      "Беспроцентный выкуп",
      "Консолидация груза",
    ],
    cta: "Рассчитать авиа",
    highlighted: false,
  },
  {
    name: "Море",
    description: "Оптимально по цене для больших партий",
    price: "по запросу",
    period: "",
    features: [
      "Самая выгодная стоимость за кг",
      "Для крупных и тяжёлых партий",
      "Помощь с документами и таможней",
      "Беспроцентный выкуп",
      "Консолидация груза",
      "Фулфилмент под маркетплейсы",
    ],
    cta: "Рассчитать море",
    highlighted: true,
  },
  {
    name: "Под ключ",
    description: "Полный цикл от поиска товара до склада",
    price: "индивидуально",
    period: "",
    features: [
      "Поиск товара и поставщика",
      "Беспроцентный выкуп",
      "Любой вид транспорта",
      "Фулфилмент и маркировка",
      "Персональный менеджер",
      "Доставка на ваш склад",
    ],
    cta: "Обсудить проект",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4">Тарифы</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Прозрачная стоимость доставки
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-balance text-lg">
            Никаких скрытых комиссий. Выберите подходящий способ доставки или закажите весь цикл под ключ.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                plan.highlighted ? "bg-blue-600 border-blue-600" : "bg-zinc-900/50 border-zinc-800/50"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`font-heading text-xl font-semibold mb-2 ${
                    plan.highlighted ? "text-white" : "text-zinc-100"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-blue-100" : "text-zinc-500"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`font-display text-4xl font-bold ${plan.highlighted ? "text-white" : "text-zinc-100"}`}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-blue-100" : "text-zinc-500"}`}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-white" : "text-blue-400"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-blue-50" : "text-zinc-400"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}