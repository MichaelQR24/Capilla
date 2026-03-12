import { Book, HeartHandshake, Users, UsersRound } from 'lucide-react';
import { motion } from 'motion/react';

export default function Activities() {
  const activities = [
    {
      title: 'Grupos de Estudio Bíblico',
      description: 'Profundiza en la Palabra de Dios y fortalece tu fe en comunidad.',
      icon: Book,
    },
    {
      title: 'Ministerio Juvenil',
      description: 'Espacio de encuentro, formación y servicio para jóvenes.',
      icon: Users,
    },
    {
      title: 'Programas de Caridad',
      description: 'Apoyo y asistencia a familias locales en situación de vulnerabilidad.',
      icon: HeartHandshake,
    },
    {
      title: 'Preparación Matrimonial',
      description: 'Acompañamiento a parejas que se preparan para el sacramento del matrimonio.',
      icon: UsersRound,
    },
  ];

  return (
    <section id="activities" className="py-24 bg-chapel-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-chapel-gold uppercase mb-3"
          >
            Comunidad
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-chapel-text"
          >
            Actividades Parroquiales
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all group border border-gray-100"
            >
              <div className="w-14 h-14 bg-chapel-beige text-chapel-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-chapel-gold group-hover:text-white transition-colors">
                <activity.icon size={24} />
              </div>
              <h4 className="text-xl font-serif text-chapel-text mb-3">
                {activity.title}
              </h4>
              <p className="text-chapel-muted leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
