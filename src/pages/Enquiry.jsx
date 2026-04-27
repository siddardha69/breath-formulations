import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, Plus, Minus, Send, Package, Globe, Headphones } from 'lucide-react';

const Enquiry = () => {
  const [formState, setFormState] = useState('idle');
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    
    // Convert multiple checkbox values into a string
    const interests = formData.getAll('interest');
    if (interests.length > 0) {
      object.interest = interests.join(', ');
    }

    object.access_key = "0d188c4d-89fd-430b-a009-b350dac2dfab";
    object.subject = "New Distributor Application - Breath Formulations";

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



  const faqs = [
    { q: "What documents are required to become a distributor?", a: "A valid drug license, GST registration, and a signed partnership agreement are required to initiate the partnership." },
    { q: "Do you offer PAN India distribution?", a: "Yes, we supply to distributors and stockists across all major states in India from our centralized distribution hub." },
    { q: "What is the minimum order quantity (MOQ)?", a: "MOQ varies by product category. Generally, we maintain flexible MOQs to support growing distributors. Please fill the form for specific details." },
    { q: "How long does delivery take?", a: "Typically 5–7 working days depending on your location and the order volume." },
    { q: "Are your products WHO-GMP certified?", a: "Yes, all our formulations are manufactured in WHO-GMP compliant facilities with rigorous quality control measures." },
    { q: "Can I get samples before placing a bulk order?", a: "Sample requests can be made through this enquiry form or by calling our distribution team directly." },
    { q: "What are your payment terms?", a: "We offer flexible payment terms for registered distributors based on partnership duration and order volume." },
    { q: "Who do I contact for urgent orders?", a: "For urgent requirements, please call us directly at +91 79976 94788 for priority handling." },
  ];

  const categories = ['Analgesic', 'Antipyretic', 'Antibiotics', 'Gastro', 'PPI', 'Bacillus Clausii', 'Calcium', 'Iron'];

  return (
    <div className="pb-20">
      {/* Banner */}
      <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-blue-200 font-bold uppercase tracking-widest text-sm mb-4 block">Partnership Opportunity</span>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-8">Become a Distributor</h1>
          <p className="text-xl text-blue-100">
            Join our global network of excellence and bring precision pharmaceutical care to your region.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 -mt-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Competitive Pricing', desc: 'Optimized manufacturing processes allow us to offer premium margins for our partners.', icon: <Package className="text-brand-blue" /> },
              { title: 'Wide Range', desc: 'Access an extensive catalog of therapeutic and nutritional formulations designed for clinical safety.', icon: <Globe className="text-brand-blue" /> },
              { title: 'Dedicated Support', desc: 'Benefit from priority logistics, marketing assets, and a dedicated account manager.', icon: <Headphones className="text-brand-blue" /> },
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-xl shadow-brand-blue/5 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-text">{benefit.title}</h3>
                <p className="text-brand-muted leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distributor Form */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-heading font-bold text-brand-text">Partner Application</h2>
            <p className="text-brand-muted">Please complete the professional inquiry form below. Our business development team will review your application within 48 hours.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-100">
            {formState === 'success' ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-24 h-24 bg-brand-green/10 text-brand-green rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 size={56} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-brand-text">Application Received</h3>
                <p className="text-lg text-brand-muted">Your enquiry has been successfully logged. Our distribution team will contact you shortly to discuss potential synergy.</p>
                <button onClick={() => setFormState('idle')} className="btn-primary">Back to Form</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text">Full Name</label>
                    <input required name="full_name" type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text">Business / Company Name</label>
                    <input required name="company_name" type="text" placeholder="Global Health Ltd" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text">Phone Number</label>
                    <input required name="phone" type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text">Email Address</label>
                    <input required name="email" type="email" placeholder="partnership@company.com" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-bold text-brand-text">Product Categories Interested In</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer hover:bg-white hover:border-brand-blue/30 transition-all">
                        <input type="checkbox" name="interest" value={cat} className="w-5 h-5 accent-brand-blue rounded" />
                        <span className="text-sm font-medium text-brand-text">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text">City & State</label>
                    <input required name="location" type="text" placeholder="Vizianagaram, AP" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text">Monthly Requirement</label>
                    <select name="requirement" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl appearance-none cursor-pointer">
                      <option>&lt; 500 units</option>
                      <option>500–2000 units</option>
                      <option>2000+ units</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-text">Additional Message</label>
                  <textarea name="message" rows="4" placeholder="Tell us about your distribution experience..." className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl resize-none" />
                </div>

                <button type="submit" className="w-full btn-primary py-5 text-xl flex items-center justify-center gap-3">
                  Submit Application <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-text mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-muted">Everything you need to know about partnering with Breath Formulations.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`rounded-2xl border transition-all duration-300 ${
                  openFaq === i ? 'border-brand-blue bg-brand-blue/5' : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className={`text-lg font-bold ${openFaq === i ? 'text-brand-blue' : 'text-brand-text'}`}>
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-brand-blue' : 'text-gray-400'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-brand-muted leading-relaxed border-t border-brand-blue/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
