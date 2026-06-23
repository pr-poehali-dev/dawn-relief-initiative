import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "200+", label: "довольных клиентов" },
  { value: "0.9 $/кг", label: "от стоимости доставки" },
  { value: "4 вида", label: "транспорта: авиа, море, авто, Ж/Д" },
  { value: "Под ключ", label: "от поиска товара до склада" },
]

export function ClientsSection() {
  return (
    <section id="clients" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-blue-950/40 via-zinc-900/60 to-zinc-900/60 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Icon block */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-28 h-28 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/30">
                  <Icon name="Users" className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-zinc-950 border border-zinc-800 rounded-2xl px-3 py-1.5">
                  <span className="font-display text-xl font-bold text-blue-400">200+</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-3">
                Более 200 довольных клиентов выбирают нас
              </h2>
              <p className="text-zinc-400 max-w-xl text-balance">
                Компании по всей России доверяют C2R Logistics доставку товаров из Китая — потому что мы берём на себя весь процесс и отвечаем за результат.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-zinc-800/70">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-display text-2xl md:text-3xl font-bold text-zinc-100">{stat.value}</p>
                <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
