import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Search",
    title: "Поиск товара и поставщика",
    description: "Найдём нужный товар и надёжного производителя в Китае, проверим и согласуем условия.",
  },
  {
    icon: "Wallet",
    title: "Беспроцентный выкуп",
    description: "Выкупаем товар у поставщика за вас — без процентов и скрытых комиссий.",
  },
  {
    icon: "Boxes",
    title: "Консолидация груза",
    description: "Собираем заказы от разных поставщиков в одну партию для экономии на доставке.",
  },
  {
    icon: "Warehouse",
    title: "Фулфилмент",
    description: "Приёмка, хранение, упаковка и маркировка под маркетплейсы и розницу.",
  },
  {
    icon: "Truck",
    title: "Доставка под ключ",
    description: "Авиа, море, авто и Ж/Д — подберём оптимальный маршрут до вашего склада.",
  },
  {
    icon: "ShieldCheck",
    title: "Прозрачность и контроль",
    description: "Отслеживание груза по трек-номеру на каждом этапе пути из Китая в Россию.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[#075339] uppercase tracking-wider mb-4">Услуги</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Полный цикл доставки из Китая
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-balance">
            Берём на себя всё — от поиска товара до доставки на ваш склад. Вам остаётся только продавать.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="group h-full overflow-hidden border-gray-200 bg-white hover:border-[#8AC4ED] hover:shadow-md transition-all duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-[#EBF2FB] flex items-center justify-center mb-4 group-hover:bg-[#C0E6F7] transition-colors">
                    <Icon name={service.icon} className="w-5 h-5 text-[#0B5C95]" />
                  </div>
                  <p className="font-heading font-semibold text-gray-900 mb-2">{service.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
