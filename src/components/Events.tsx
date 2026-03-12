import { Calendar, MapPin, Users, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function Events() {
  const eventsInfo = [
    {
      title: 'Retiro Espiritual de Cuaresma',
      date: '15 de Marzo, 9:00 AM - 6:00 PM',
      location: 'Casa de Retiro San José',
      description: 'Un día de profunda reflexión, oración y encuentro con Dios preparándonos para la Semana Santa.',
      icon: Users,
    },
    {
      title: 'Desayuno Solidario',
      date: 'Todos los Domingos, 7:00 AM',
      location: 'Atrio de la Parroquia',
      description: 'Entrega de un desayuno caliente y compañía a las personas más necesitadas de nuestra comunidad.',
      icon: HeartHandshake,
    }
  ];

  const leaders = [
    {
      name: 'P. Juan Pérez',
      role: 'Párroco',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      name: 'María García',
      role: 'Coordinadora de Pastoral Social',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Jefe de Liturgia',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop',
    }
  ];

  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Events Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-chapel-gold uppercase mb-3 flex items-center justify-center gap-2"
          >
            Agenda Parroquial
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-chapel-text mb-4"
          >
            Retiros y Obras Sociales
          </motion.h3>
        </div>

        {/* Highlighted Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {eventsInfo.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-chapel-beige p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <event.icon size={100} />
              </div>
              <h4 className="text-2xl font-serif text-chapel-text mb-4 relative z-10">{event.title}</h4>
              
              <div className="space-y-3 mb-6 relative z-10">
                <div className="flex items-center gap-3 text-chapel-muted">
                  <Calendar size={18} className="text-chapel-gold" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-chapel-muted">
                  <MapPin size={18} className="text-chapel-gold" />
                  <span className="text-sm font-medium">{event.location}</span>
                </div>
              </div>
              
              <p className="text-chapel-muted leading-relaxed relative z-10 border-t border-gray-200 pt-4">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team / Leaders */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
             <motion.h4 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }}
                className="text-2xl font-serif text-chapel-text"
             >
                Equipo Organizador
             </motion.h4>
             <p className="text-chapel-muted mt-2">Guiando a nuestra comunidad con amor y servicio.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-chapel-beige shadow-sm">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h5 className="text-lg font-serif text-chapel-text">{leader.name}</h5>
                <p className="text-xs font-bold uppercase tracking-wider text-chapel-gold mt-1">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
