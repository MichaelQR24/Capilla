import { CreditCard, Heart, QrCode } from 'lucide-react';
import { motion } from 'motion/react';

export default function Donations() {
  return (
    <section id="donations" className="py-24 bg-chapel-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-chapel-gold uppercase mb-3 flex items-center justify-center gap-2"
          >
            <Heart size={16} /> Apoyo a la Parroquia
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-chapel-text mb-4"
          >
            Donaciones y Diezmo
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-chapel-muted max-w-2xl mx-auto"
          >
            "Dios ama al que da con alegría" (2 Corintios 9:7). 
            Tu generosa contribución nos ayuda a mantener nuestra capilla y continuar con nuestras obras de caridad en la comunidad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bank Accounts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-chapel-beige rounded-full flex items-center justify-center text-chapel-gold">
                <CreditCard size={24} />
              </div>
              <h4 className="text-2xl font-serif text-chapel-text">Cuentas Bancarias</h4>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="font-semibold text-chapel-text mb-1">BCP - Banco de Crédito del Perú</p>
                <p className="text-sm text-chapel-muted mb-2">Cuenta Corriente Soles</p>
                <p className="font-mono text-lg text-chapel-gold tracking-wider">193-12345678-0-12</p>
                <p className="text-xs text-gray-400 mt-1">CCI: 002-193-001234567812-11</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="font-semibold text-chapel-text mb-1">BBVA - Banco Continental</p>
                <p className="text-sm text-chapel-muted mb-2">Cuenta Corriente Soles</p>
                <p className="font-mono text-lg text-chapel-gold tracking-wider">0011-0123-0100123456</p>
                <p className="text-xs text-gray-400 mt-1">CCI: 011-123-000100123456-11</p>
              </div>
              <p className="text-xs text-center text-chapel-muted italic">
                A nombre de: Parroquia San Gabriel Arcángel Miraflores
              </p>
            </div>
          </motion.div>

          {/* Digital Wallets (Yape / Plin) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-chapel-beige rounded-full flex items-center justify-center text-chapel-gold">
                <QrCode size={24} />
              </div>
              <h4 className="text-2xl font-serif text-chapel-text">Yape y Plin</h4>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center h-full pb-8">
              <div className="text-center group">
                <div className="w-40 h-40 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-3 mb-4 flex items-center justify-center group-hover:border-[#742384] transition-colors">
                  {/* Placeholder for Yape QR */}
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YAPE_DONATION_LINK_EXAMPLE" alt="QR Yape" className="w-full h-full opacity-80 mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#742384]"></div>
                  <span className="font-bold text-[#742384]">YAPE</span>
                </div>
                <p className="font-mono font-medium text-chapel-text">987 654 321</p>
              </div>

              <div className="hidden sm:block w-px h-32 bg-gray-100"></div>

              <div className="text-center group">
                <div className="w-40 h-40 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-3 mb-4 flex items-center justify-center group-hover:border-[#00e396] transition-colors">
                  {/* Placeholder for Plin QR */}
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PLIN_DONATION_LINK_EXAMPLE" alt="QR Plin" className="w-full h-full opacity-80 mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#00e396]"></div>
                  <span className="font-bold text-[#00e396]">PLIN</span>
                </div>
                <p className="font-mono font-medium text-chapel-text">987 654 321</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
