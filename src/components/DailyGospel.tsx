import { BookOpen, Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

type GospelData = {
  date: string;
  reference: string;
  text: string;
};

export default function DailyGospel() {
  const [gospel, setGospel] = useState<GospelData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app we would fetch from a Catholic API like 
    // https://feed.evangelizo.org/v2/reader.php?date=20231015&type=reading&lang=SP
    // But for this example we'll simulate the fetch with a delay
    const fetchGospel = async () => {
      try {
        setLoading(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Use static fallback data for the demo
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        setGospel({
          date: today.toLocaleDateString('es-ES', options),
          reference: "Evangelio según San Juan (3,16-18)",
          text: "En aquel tiempo, dijo Jesús a Nicodemo: «Tanto amó Dios al mundo que entregó a su Hijo único para que no perezca ninguno de los que creen en él, sino que tengan vida eterna. Porque Dios no mandó su Hijo al mundo para juzgar al mundo, sino para que el mundo se salve por él. El que cree en él no será juzgado; el que no cree ya está juzgado, porque no ha creído en el nombre del Hijo único de Dios.»",
        });
      } catch (error) {
        console.error("Failed to load gospel", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGospel();
  }, []);

  return (
    <section id="gospel" className="py-20 bg-chapel-beige/50 border-y border-gray-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-8 opacity-5 text-chapel-gold">
             <BookOpen size={120} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-chapel-beige px-4 py-2 rounded-full text-chapel-gold text-sm font-medium tracking-wide mb-8">
              <CalendarIcon size={16} />
              <span className="capitalize">{gospel?.date || "Cargando..."}</span>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="animate-spin text-chapel-gold mb-4" size={32} />
                <p className="text-chapel-muted font-serif">Preparando la Palabra del día...</p>
              </div>
            ) : gospel ? (
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-serif text-chapel-text mb-8">{gospel.reference}</h3>
                
                <div className="relative">
                  <span className="absolute -top-6 -left-4 text-6xl text-chapel-beige/80 font-serif rotate-180">"</span>
                  <p className="text-lg md:text-xl text-chapel-muted leading-relaxed font-serif italic px-6">
                    {gospel.text}
                  </p>
                  <span className="absolute -bottom-10 -right-4 text-6xl text-chapel-beige/80 font-serif">"</span>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-center">
                  <p className="text-sm font-bold tracking-widest text-chapel-gold uppercase">
                    Palabra del Señor
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-chapel-muted">No se pudo cargar el Evangelio en este momento.</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
