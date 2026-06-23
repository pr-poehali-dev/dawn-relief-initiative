const navLinks = [
  { href: "#features", label: "Услуги" },
  { href: "#clients", label: "Клиенты" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#pricing", label: "Тарифы" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-3 sm:px-6 rounded-full bg-white/90 border border-gray-200 backdrop-blur-md shadow-sm">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/files/c5707feb-c7d1-42f2-b8ee-7975a0549d48.jpg"
            alt="C2R Logistics"
            className="h-7 w-7 rounded-md object-cover"
          />
          <span className="font-display text-base sm:text-lg font-semibold text-gray-900 hidden sm:inline">
            C2R Logistics
          </span>
        </a>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors text-gray-500 hover:text-gray-900 hidden sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-[#0B5C95] text-white font-medium hover:bg-[#0F75BB] transition-colors"
          >
            Рассчитать
          </a>
        </div>
      </nav>
    </header>
  )
}
