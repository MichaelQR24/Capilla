import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-chapel-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://picsum.photos/seed/chapel-interior/800/1000"
                alt="Interior de la Capilla"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-4 border-white/20 rounded-2xl m-4 pointer-events-none"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-chapel-gold/10 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-chapel-gold uppercase mb-3">
                Nuestra Historia
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-chapel-text leading-tight">
                Sirviendo a la comunidad de Miraflores
              </h3>
            </div>

            <div className="space-y-6 text-chapel-muted text-lg leading-relaxed">
              <p>
                La Parroquia la Buena Nueva ha sido un faro de luz y esperanza en el corazón de San Juan de Lurigancho durante décadas. Fundada con el propósito de brindar un espacio de recogimiento y oración, nuestra parroquia acoge a todos aquellos que buscan un encuentro personal con Dios.
              </p>
              <p>
                Nuestra misión es vivir y compartir el Evangelio, fomentando una comunidad unida en el amor, la fe y el servicio al prójimo. Valoramos la acogida, la solidaridad y el crecimiento espiritual de cada persona que cruza nuestras puertas.
              </p>
              <p className="font-medium text-chapel-text italic border-l-4 border-chapel-gold pl-4 py-2">
                "Que este lugar sea siempre una casa de oración, un refugio de paz y un hogar para todos los hijos de Dios en Lima."
              </p>
            </div>
            
            <div className="pt-4">
              <a href="#contact" className="text-chapel-gold hover:text-chapel-gold-dark font-medium inline-flex items-center gap-2 transition-colors">
                Conoce más sobre nosotros
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
