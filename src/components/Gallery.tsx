import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

type Category = 'all' | 'architecture' | 'community' | 'seasonal';

const photos = [
  {
    id: 1,
    category: 'architecture',
    src: 'https://picsum.photos/seed/chapel-altar/800/600',
    title: 'El Altar Mayor',
    description: 'El corazón de nuestra capilla, donde celebramos la Eucaristía.',
  },
  {
    id: 2,
    category: 'architecture',
    src: 'https://picsum.photos/seed/chapel-glass/800/600',
    title: 'Vitrales Históricos',
    description: 'Hermosos vitrales que iluminan el interior con luz celestial.',
  },
  {
    id: 3,
    category: 'community',
    src: 'https://picsum.photos/seed/chapel-youth/800/600',
    title: 'Encuentro Juvenil',
    description: 'Jóvenes compartiendo su fe y alegría en el retiro anual.',
  },
  {
    id: 4,
    category: 'community',
    src: 'https://picsum.photos/seed/chapel-charity/800/600',
    title: 'Labor Social',
    description: 'Nuestra comunidad preparando donaciones para familias necesitadas.',
  },
  {
    id: 5,
    category: 'seasonal',
    src: 'https://picsum.photos/seed/chapel-christmas/800/600',
    title: 'Navidad en la Capilla',
    description: 'El tradicional nacimiento y decoración durante el tiempo de Adviento.',
  },
  {
    id: 6,
    category: 'seasonal',
    src: 'https://picsum.photos/seed/chapel-easter/800/600',
    title: 'Domingo de Resurrección',
    description: 'El altar adornado con lirios blancos celebrando la Pascua.',
  },
];

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'architecture', label: 'Arquitectura' },
  { id: 'community', label: 'Comunidad' },
  { id: 'seasonal', label: 'Temporadas' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredPhotos = photos.filter(
    (photo) => activeCategory === 'all' || photo.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-chapel-gold uppercase mb-3"
          >
            Galería
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-chapel-text"
          >
            Momentos de Fe
          </motion.h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-chapel-gold text-white shadow-md'
                  : 'bg-chapel-beige text-chapel-muted hover:bg-chapel-gold/20 hover:text-chapel-text'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all aspect-[4/3] bg-gray-100"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-xl font-serif text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {photo.title}
                  </h4>
                  <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
