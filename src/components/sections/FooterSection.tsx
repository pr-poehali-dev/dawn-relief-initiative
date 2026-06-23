import { Send, Phone, Mail } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Услуги", href: "#features" },
    { label: "Клиенты", href: "#clients" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Тарифы", href: "#pricing" },
  ],
  company: [
    { label: "Поиск товара", href: "#features" },
    { label: "Беспроцентный выкуп", href: "#features" },
    { label: "Консолидация груза", href: "#features" },
    { label: "Фулфилмент", href: "#features" },
  ],
  legal: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Договор оферты", href: "#" },
    { label: "Реквизиты", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <img
                src="https://cdn.poehali.dev/files/c5707feb-c7d1-42f2-b8ee-7975a0549d48.jpg"
                alt="C2R Logistics"
                className="h-7 w-7 rounded-md object-cover"
              />
              <span className="font-display text-xl font-semibold text-zinc-100">C2R Logistics</span>
            </a>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Доставка товаров из Китая в Россию «под ключ». Помогаем бизнесу увеличить прибыль и достичь максимальных результатов.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Навигация</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} C2R Logistics. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Telegram">
              <Send className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Телефон">
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}