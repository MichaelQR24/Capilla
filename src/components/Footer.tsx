import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-chapel-text text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-chapel-gold flex items-center justify-center text-white font-serif font-bold text-xl">
                B
              </div>
              <span className="font-serif font-bold text-xl leading-tight">
                Parroquia la<br/>Buena Nueva
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Un lugar de fe, comunidad y esperanza en San Juan de Lurigancho, Lima.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chapel-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chapel-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-chapel-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-chapel-gold">Horario de Despacho</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Lunes a Viernes</span>
                <span>9:00 AM - 1:00 PM<br/>4:00 PM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sábados</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Domingos</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-chapel-gold">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Nuestra Historia</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Horarios de Misa</a></li>
              <li><a href="#sacraments" className="hover:text-white transition-colors">Sacramentos</a></li>
              <li><a href="#activities" className="hover:text-white transition-colors">Actividades Parroquiales</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">Noticias y Eventos</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Parroquia la Buena Nueva. Todos los derechos reservados.</p>
        </div>
      </div>
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-chapel-gold/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}
