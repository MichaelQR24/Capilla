import { ChevronDown, Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';

const primaryLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Párroco', href: '#parroco' },
  { name: 'Horarios', href: '#schedule' },
  { name: 'Sacramentos', href: '#sacraments' },
];

const moreLinks = [
  { name: 'Eventos', href: '#events' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Donaciones', href: '#donations' },
  { name: 'Noticias', href: '#news' },
  { name: 'Contacto', href: '#location' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-chapel-gold flex items-center justify-center text-white font-serif font-bold text-base">
              B
            </div>
            <span className="font-serif font-bold text-base text-chapel-text leading-tight">
              Parroquia la Buena Nueva
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-chapel-text hover:text-chapel-gold hover:bg-chapel-gold/5 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}

            {/* Más dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-chapel-text hover:text-chapel-gold hover:bg-chapel-gold/5 rounded-lg transition-all"
              >
                Más
                <ChevronDown size={13} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                  {moreLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-chapel-text hover:text-chapel-gold hover:bg-chapel-gold/5 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-chapel-text hover:text-chapel-gold focus:outline-none p-1"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-3 py-2 grid grid-cols-2 gap-1">
            {[...primaryLinks, ...moreLinks].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-xs font-semibold uppercase tracking-wide text-chapel-text hover:text-chapel-gold hover:bg-chapel-gold/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
