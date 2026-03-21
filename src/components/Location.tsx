import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-chapel-gold uppercase mb-3"
          >
            Contacto
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-chapel-text"
          >
            Encuéntranos
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 bg-chapel-beige p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
          >
            {/* Foto de la parroquia */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md mb-2">
              <img
                src="/parroquia.jpg"
                alt="Parroquia la Buena Nueva"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-chapel-gold shadow-sm flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-chapel-text mb-2">Dirección</h4>
                <p className="text-chapel-muted leading-relaxed">
                  Jr. Roque Sáenz Peña<br />
                  San Juan de Lurigancho<br />
                  Provincia de Lima, Perú<br />
                  <span className="text-xs text-chapel-gold font-mono mt-1 inline-block">3229+MM7, SJL 15446</span>
                </p>
                <a
                  href="https://maps.app.goo.gl/mo6LgUZApR7wDn2d8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-chapel-gold hover:text-chapel-gold-dark transition-colors"
                >
                  Ver en Google Maps <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-chapel-gold shadow-sm flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-chapel-text mb-2">Teléfono y WhatsApp</h4>
                <p className="text-chapel-muted leading-relaxed">
                  +51 987 654 321<br />
                  (01) 444-1234
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-chapel-gold shadow-sm flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-chapel-text mb-2">Correo Electrónico</h4>
                <p className="text-chapel-muted leading-relaxed">
                  contacto@parroquiabuevananueva.pe
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-lg border-4 border-white sticky top-24"
            style={{ height: '500px' }}
          >
            <iframe
              title="Mapa de ubicación de la Parroquia la Buena Nueva"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.96113785651218!2d-76.98090481547605!3d-11.948295619379369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105daccb0224023%3A0x2e3e682012cf9bbd!2sParroquia%20la%20Buena%20Nueva!5e0!3m2!1ses-419!2spe!4v1774102203700!5m2!1ses-419!2spe"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
