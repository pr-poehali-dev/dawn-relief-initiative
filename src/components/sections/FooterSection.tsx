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
    <footer className="px-6 py-16 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <img
                src="https://cdn.poehali.dev/files/427ea0b2-b75b-4412-a3f4-b5766d2bd66a.png"
                alt="C2R Logistics"
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Доставка товаров из Китая в Россию «под ключ». Помогаем бизнесу увеличить прибыль и достичь максимальных результатов.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-gray-900 mb-4">Навигация</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-[#0B5C95] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-gray-900 mb-4">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-[#0B5C95] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-gray-900 mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-[#0B5C95] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} C2R Logistics. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-[#0B5C95] transition-colors" aria-label="Telegram">
              <Send className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#0B5C95] transition-colors" aria-label="Телефон">
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#0B5C95] transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
