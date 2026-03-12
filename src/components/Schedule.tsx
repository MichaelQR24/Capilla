import { Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Schedule() {
  const scheduleData = [
    {
      day: 'Lunes a Viernes',
      times: ['7:00 AM', '7:00 PM'],
    },
    {
      day: 'Sábados',
      times: ['7:00 AM', '6:00 PM'],
    },
    {
      day: 'Domingos',
      times: ['8:00 AM', '10:00 AM', '12:00 PM', '7:00 PM'],
    },
  ];

  return (
    <section id="schedule" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-chapel-gold uppercase mb-3"
          >
            Horarios
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-chapel-text"
          >
            Celebración de la Misa
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {scheduleData.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-chapel-beige rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-chapel-gold">
                <Clock size={28} />
              </div>
              <h4 className="text-2xl font-serif text-chapel-text mb-6">
                {item.day}
              </h4>
              <div className="space-y-3">
                {item.times.map((time) => (
                  <div
                    key={time}
                    className="text-lg font-medium text-chapel-muted bg-white py-2 px-4 rounded-lg inline-block w-full"
                  >
                    {time}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-chapel-muted"
        >
          <p>Confesiones: Media hora antes de cada misa o previa cita en el despacho parroquial.</p>
        </motion.div>
      </div>
    </section>
  );
}
