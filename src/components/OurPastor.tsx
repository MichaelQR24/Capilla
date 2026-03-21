import { motion } from 'motion/react';
import { BookOpen, Heart, Mail, Phone } from 'lucide-react';

const PASTOR_NAME = 'P. Juan María Ríos';
const PASTOR_ROLE = 'Párroco — Parroquia la Buena Nueva';

const highlights = [
  {
    icon: BookOpen,
    label: 'Formación',
    value: 'Pontificia Universidad Católica del Perú – Teología',
  },
  {
    icon: Heart,
    label: 'Vocación',
    value: 'Más de 20 años al servicio de la comunidad',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+51 987 654 321',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'parroco@capillasangabriel.pe',
  },
];

export default function OurPastor() {
  return (
    <section id="parroco" className="py-24 bg-white relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-chapel-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-chapel-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-chapel-gold uppercase mb-3"
          >
            Comunidad Parroquial
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-chapel-text"
          >
            Nuestro Párroco
          </motion.h2>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Marco decorativo dorado */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-chapel-gold/30 pointer-events-none" />

            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/pastor.png"
                alt={`Foto de ${PASTOR_NAME}`}
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-chapel-text/70 via-transparent to-transparent" />

              {/* Nombre sobre la foto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-bold tracking-widest uppercase text-chapel-gold mb-1">
                  Párroco
                </p>
                <h3 className="text-3xl font-serif leading-tight">
                  {PASTOR_NAME}
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  Parroquia la Buena Nueva
                </p>
              </div>
            </div>

            {/* Blob dorado */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-chapel-gold/15 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* Descripción e info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge de rol */}
            <div className="inline-flex items-center gap-2 bg-chapel-gold/10 text-chapel-gold-dark px-4 py-1.5 rounded-full text-sm font-semibold">
              ✝ {PASTOR_ROLE}
            </div>

            <div className="space-y-5 text-chapel-muted text-lg leading-relaxed">
              <p>
                El <strong className="text-chapel-text">{PASTOR_NAME}</strong> es el párroco de la Parroquia la Buena Nueva en San Juan de Lurigancho desde el año 2015. Con una profunda vocación de servicio y una espiritualidad centrada en el Evangelio, ha liderado nuestra comunidad con amor, humildad y cercanía.
              </p>
              <p>
                Ordenado sacerdote en 2003, ha dedicado su vida a la pastoral parroquial, la educación en la fe y el acompañamiento de familias en los momentos más significativos de su vida.
              </p>
              <blockquote className="font-medium text-chapel-text italic border-l-4 border-chapel-gold pl-5 py-2">
                "Mi mayor alegría es ver a nuestra comunidad crecer en el amor de Dios, unidos como una sola familia en Cristo."
              </blockquote>
            </div>

            {/* Tarjetas de datos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-chapel-beige border border-gray-100 hover:border-chapel-gold/40 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-chapel-gold/10 text-chapel-gold rounded-full flex items-center justify-center">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-chapel-gold uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-chapel-text leading-snug">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#location"
                className="inline-flex items-center gap-2 bg-chapel-gold text-white font-medium px-6 py-3 rounded-full hover:bg-chapel-gold-dark transition-colors shadow-md hover:shadow-lg"
              >
                Escríbele al Padre {PASTOR_NAME.split(' ')[1]}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
