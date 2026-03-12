import { Mail, MapPin, Phone } from 'lucide-react';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 bg-chapel-beige p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-chapel-gold shadow-sm flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-chapel-text mb-2">Dirección</h4>
                <p className="text-chapel-muted leading-relaxed">
                  Av. La Paz 845<br />
                  Miraflores, Lima<br />
                  Perú
                </p>
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
                  contacto@capillasan-gabriel.pe
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
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-white"
          >
            <iframe 
              title="Mapa de ubicación de la Capilla San Gabriel Arcángel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.687612711718!2d-77.03606675204481!3d-12.11749871510364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81729b19e93%3A0xe549bd00832a8f89!2sAv.%20la%20Paz%20845%2C%20Miraflores%2015074!5e0!3m2!1ses-419!2spe!4v1709400000000!5m2!1ses-419!2spe" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
