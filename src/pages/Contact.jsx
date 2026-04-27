import { motion } from 'framer-motion';
import { Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pb-20">
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
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone Number</p>
                    <p className="text-brand-text font-bold">+91 94906 62886</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Headquarters</p>
                    <p className="text-brand-text font-bold leading-relaxed">
                      Breath Formulations,<br />
                      14-20-641/C, Rajiv Gandhi Nagar,<br />
                      Borabanda, Allapur, PO: Santhnagar,<br />
                      Malkajgiri, Telangana - 500018
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Breath+Formulations+14-20-641/C+Rajiv+Gandhi+Nagar+Borabanda+Allapur+Santhnagar+500018"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue text-sm font-bold hover:underline mt-2 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
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
                      <p className="text-sm text-brand-muted italic">Telangana, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-blue/5 border border-gray-100">
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                  <input type="hidden" name="access_key" value="d159f9f1-1352-46ea-93b2-1d85dfd9048b" />
                  <input type="hidden" name="subject" value="New Contact Inquiry" />
                  <input type="hidden" name="from_name" value="Breath Formulations" />
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-text ml-1">Full Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Dr. jury"
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
                        placeholder="hyderabad , telangana"
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
                    className="w-full btn-primary py-5 flex items-center justify-center gap-3 text-lg"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
