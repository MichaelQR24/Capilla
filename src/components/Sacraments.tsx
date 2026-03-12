import { BookOpen, Droplets, Flame, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Sacraments() {
  const sacraments = [
    {
      title: 'Bautismo',
      description: 'El primer sacramento de iniciación cristiana, puerta a la vida en el Espíritu.',
      icon: Droplets,
    },
    {
      title: 'Primera Comunión',
      description: 'Recibe por primera vez el cuerpo y la sangre de Cristo en la Eucaristía.',
      icon: BookOpen,
    },
    {
      title: 'Confirmación',
      description: 'Fortalece tu fe y recibe los dones del Espíritu Santo para ser testigo de Cristo.',
      icon: Flame,
    },
    {
      title: 'Matrimonio',
      description: 'La unión sagrada entre un hombre y una mujer, bendecida por Dios.',
      icon: Heart,
    },
  ];

  return (
    <section id="sacraments" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-chapel-gold uppercase mb-3"
          >
            Vida Espiritual
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-chapel-text"
          >
            Sacramentos
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sacraments.map((sacrament, index) => (
            <motion.div
              key={sacrament.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start gap-6 p-6 rounded-2xl hover:bg-chapel-beige transition-colors border border-transparent hover:border-gray-100"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-chapel-gold/10 text-chapel-gold rounded-full flex items-center justify-center">
                <sacrament.icon size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-chapel-text mb-2">
                  {sacrament.title}
                </h4>
                <p className="text-chapel-muted leading-relaxed mb-4">
                  {sacrament.description}
                </p>
                <a href="#contact" className="text-sm font-medium text-chapel-gold hover:text-chapel-gold-dark uppercase tracking-wider">
                  Más información &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
