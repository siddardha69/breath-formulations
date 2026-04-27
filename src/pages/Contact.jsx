import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    object.access_key = "0d188c4d-89fd-430b-a009-b350dac2dfab";
    object.subject = "New Website Contact Inquiry - Breath Formulations";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(object)
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
      } else {
        setFormState('idle');
        alert("Submission failed. Please check your Web3Forms dashboard.");
      }
    } catch (error) {
      setFormState('idle');
      alert("Network error. Please try again.");
    }
  };



  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pb-20">
      {/* Hero Banner */}
      <section className="bg-brand-light py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white px-4 py-2 rounded-full font-bold text-brand-blue text-sm mb-6 shadow-sm border border-brand-blue/10"
          >
            Connect With Us
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-brand-text mb-6">
            Partnering for <span className="text-brand-blue">Pharmaceutical Excellence</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            Our team of clinical specialists is ready to assist with your custom formulation and global supply needs.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0 -mt-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeInUp} className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-heading font-bold text-brand-text">Get In Touch</h2>
                <p className="text-lg text-brand-muted leading-relaxed">
                  Reach us for product enquiries, distributor partnerships, or general information about our therapeutic formulations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <MapPin />, label: 'Address', value: 'Vizianagaram, 535005, Andhra Pradesh, India' },
                  { icon: <Phone />, label: 'Phone', value: '+91 79976 94788' },
                  { icon: <Mail />, label: 'Email', value: 'breathformulations@gmail.com' },
                  { icon: <Clock />, label: 'Hours', value: 'Mon–Sat, 9:00 AM – 6:00 PM' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text mb-1">{item.label}</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-brand-light border border-gray-100 group shadow-inner">
                 <div className="absolute inset-0 bg-brand-blue/5 flex items-center justify-center p-8 text-center transition-transform group-hover:scale-105 duration-1000">
                    <div className="space-y-4">
                       <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-brand-blue shadow-lg">
                          <MapPin size={32} />
                       </div>
                       <div>
                          <p className="font-bold text-brand-text">Breath Formulations HQ</p>
                          <p className="text-sm text-brand-muted italic">Vizianagaram, Andhra Pradesh</p>
                       </div>
                       <div className="pt-4">
                          <button className="text-brand-blue font-bold text-sm underline">View on Google Maps</button>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-blue/5 border border-gray-100">
                {formState === 'success' ? (
                  <div className="text-center py-20 space-y-6">
                    <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full mx-auto flex items-center justify-center">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-brand-text">Message Sent!</h3>
                    <p className="text-brand-muted">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="btn-outline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text ml-1">Full Name</label>
                        <input 
                          required
                          name="full_name"
                          type="text" 
                          placeholder="Dr. Julian Vane"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text ml-1">Phone Number</label>
                        <input 
                          required
                          name="phone"
                          type="tel" 
                          placeholder="+91 00000 00000"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text ml-1">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="name@email.com"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-brand-text ml-1">City / State</label>
                        <input 
                          required
                          name="location"
                          type="text" 
                          placeholder="Vizianagaram, AP"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-text ml-1">Inquiry Details</label>
                      <textarea 
                        required
                        name="message"
                        rows="4"
                        placeholder="Briefly describe your formulation requirements or supply chain inquiries..."
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full btn-primary py-5 flex items-center justify-center gap-3 text-lg disabled:opacity-70"
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
