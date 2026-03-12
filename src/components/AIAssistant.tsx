import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { Bot, Map, MessageCircle, Send, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

type Message = {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
  links?: { title: string; uri: string }[];
};

type ChatMode = 'spiritual' | 'location';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>('spiritual');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de la Capilla San Gabriel Arcángel. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      let responseText = '';
      let links: { title: string; uri: string }[] = [];

      if (mode === 'spiritual') {
        const response = await ai.models.generateContent({
          model: 'gemini-3.1-pro-preview',
          contents: userMessage,
          config: {
            systemInstruction: `Eres el asistente virtual de la Capilla San Gabriel Arcángel en Miraflores, Lima, Perú. 
            Responde preguntas sobre la fe católica, sacramentos, horarios de misa y actividades de manera amable, respetuosa y espiritual.
            Horarios de misa: Lunes a Viernes 7am y 7pm. Sábados 7am y 6pm. Domingos 8am, 10am, 12pm y 7pm.
            Confesiones: Media hora antes de cada misa.
            Dirección: Av. La Paz 845, Miraflores, Lima.
            Teléfono: +51 987 654 321.`,
            thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
          }
        });
        responseText = response.text || 'Lo siento, no pude procesar tu solicitud.';
      } else {
        // Location mode using gemini-2.5-flash with googleMaps
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: userMessage,
          config: {
            systemInstruction: `Eres un asistente local para la Capilla San Gabriel Arcángel (Av. La Paz 845, Miraflores, Lima). 
            Ayuda a los usuarios a encontrar lugares cercanos, estacionamientos, restaurantes o indicaciones para llegar a la capilla.`,
            tools: [{ googleMaps: {} }],
            toolConfig: {
              retrievalConfig: {
                latLng: {
                  latitude: -12.1264, // Approximate coordinates for Miraflores
                  longitude: -77.0253
                }
              }
            }
          }
        });
        
        responseText = response.text || 'Lo siento, no pude encontrar información sobre esa ubicación.';
        
        // Extract maps links
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (chunks) {
          chunks.forEach((chunk: any) => {
            if (chunk.web?.uri && chunk.web?.title) {
              links.push({ title: chunk.web.title, uri: chunk.web.uri });
            }
            if (chunk.maps?.uri && chunk.maps?.title) {
              links.push({ title: chunk.maps.title, uri: chunk.maps.uri });
            }
          });
        }
      }

      setMessages(prev => [...prev, { role: 'model', text: responseText, links: links.length > 0 ? links : undefined }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Ocurrió un error al procesar tu mensaje. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-chapel-gold text-white rounded-full shadow-lg flex items-center justify-center hover:bg-chapel-gold-dark transition-all z-50 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-6 right-6 w-full max-w-[380px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-100"
        >
          {/* Header */}
          <div className="bg-chapel-text text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-chapel-gold rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-serif font-bold">Asistente Virtual</h3>
                <p className="text-xs text-gray-300">San Gabriel Arcángel</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Mode Selector */}
          <div className="flex border-b border-gray-100 bg-gray-50 p-2 gap-2">
            <button
              onClick={() => setMode('spiritual')}
              className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg flex items-center justify-center gap-2 transition-colors ${mode === 'spiritual' ? 'bg-chapel-gold text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <MessageCircle size={14} />
              Consultas Generales
            </button>
            <button
              onClick={() => setMode('location')}
              className={`flex-1 py-2 px-3 text-xs font-medium rounded-lg flex items-center justify-center gap-2 transition-colors ${mode === 'location' ? 'bg-chapel-gold text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <Map size={14} />
              Explorar Zona
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-chapel-beige/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-chapel-gold text-white rounded-br-none' : 'bg-white text-chapel-text shadow-sm border border-gray-100 rounded-bl-none'}`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-3 space-y-2 border-t border-gray-100 pt-2">
                      <p className="text-xs font-semibold text-gray-500">Enlaces relacionados:</p>
                      {msg.links.map((link, lidx) => (
                        <a key={lidx} href={link.uri} target="_blank" rel="noopener noreferrer" className="block text-xs text-blue-600 hover:underline truncate">
                          • {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-chapel-text shadow-sm border border-gray-100 p-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                  <div className="w-2 h-2 bg-chapel-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-chapel-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-chapel-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  {mode === 'spiritual' && <span className="text-xs text-gray-400 ml-2">Pensando profundamente...</span>}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 bg-white">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full border border-gray-200 px-4 py-2 focus-within:border-chapel-gold focus-within:ring-1 focus-within:ring-chapel-gold transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={mode === 'spiritual' ? "Pregunta sobre la capilla..." : "Busca lugares cercanos..."}
                className="flex-1 bg-transparent outline-none text-sm text-chapel-text placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="text-chapel-gold hover:text-chapel-gold-dark disabled:text-gray-300 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
