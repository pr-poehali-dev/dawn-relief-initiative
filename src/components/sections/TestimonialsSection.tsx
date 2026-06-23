import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Заказывали партию товара для маркетплейса. C2R сами нашли поставщика, выкупили и привезли в Москву за 18 дней. Всё чётко по треку.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий Соколов",
    role: "Селлер на Wildberries",
  },
  {
    text: "Раньше работали с тремя посредниками, теперь всё в одном окне. Беспроцентный выкуп реально экономит деньги на каждой партии.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Марина Левина",
    role: "Владелец интернет-магазина",
  },
  {
    text: "Консолидировали груз от 5 разных фабрик в одну отправку. Сэкономили на логистике почти треть бюджета. Спасибо команде!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Артём Кузнецов",
    role: "Закупщик, оптовая торговля",
  },
  {
    text: "Фулфилмент под Ozon сделали идеально: упаковка, маркировка, отгрузка. Товар приняли на складе без единого замечания.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Елена Воронова",
    role: "Бренд-менеджер",
  },
  {
    text: "Боялись связываться с Китаем сами. C2R взяли весь процесс на себя — от поиска товара до доставки на склад. Очень удобно.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Игорь Мельников",
    role: "Предприниматель",
  },
  {
    text: "Доставка авиа от 0.9 $/кг — лучшее предложение на рынке из тех, что мы нашли. И сроки не подвели ни разу за год работы.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Алексей Тарасов",
    role: "Директор по закупкам",
  },
  {
    text: "Менеджер всегда на связи, по треку видно где груз. Прозрачность на каждом этапе — это то, чего не хватало у прошлых перевозчиков.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Ольга Никитина",
    role: "Логист, розничная сеть",
  },
  {
    text: "Привезли крупногабарит морем без проблем с таможней. Помогли с документами и сертификацией. Рекомендую как надёжного партнёра.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Сергей Павлов",
    role: "Импортёр оборудования",
  },
  {
    text: "Работаем уже второй год. С C2R прибыль выросла, потому что себестоимость доставки стала ниже, а головной боли — меньше.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Наталья Громова",
    role: "Совладелец бизнеса",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["Wildberries", "Ozon", "Яндекс Маркет", "СберМегаМаркет", "Розничные сети", "Оптовые компании"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-blue-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят наши клиенты
          </h2>
          <p className="text-center mt-4 text-zinc-400 text-lg text-balance">
            Реальные отзывы бизнеса, который возит товары из Китая вместе с нами.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Нам доверяют поставщики маркетплейсов и оптовый бизнес</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}