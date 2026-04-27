import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "917997694788";
  const message = "Hello Breath Formulations! I'm interested in your pharmaceutical products.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        boxShadow: [
          "0px 0px 0px rgba(37, 211, 102, 0)",
          "0px 0px 20px rgba(37, 211, 102, 0.4)",
          "0px 0px 0px rgba(37, 211, 102, 0)"
        ]
      }}
      transition={{ 
        animate: { duration: 0.5 },
        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 cursor-pointer"
      title="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <img 
        src="https://www.image2url.com/r2/default/images/1777296870648-3ddda87e-98a8-4cc2-a772-66eaff80901c.png" 
        alt="WhatsApp Chat"
        className="w-full h-full object-contain relative z-10"
      />

      
      {/* Optional "Chat with us" tooltip that appears on hover */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl border border-gray-100 font-bold text-sm whitespace-nowrap pointer-events-none hidden md:block"
      >
        Chat with us!
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
