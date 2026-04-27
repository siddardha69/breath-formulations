import { motion } from 'framer-motion';
import { ShieldCheck, Truck, LayoutGrid, ArrowRight, Activity, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const categories = [
    { name: 'Analgesic', desc: 'Effective pain management solutions', icon: <Activity className="text-brand-blue" /> },
    { name: 'Antibiotics', desc: 'Broad-spectrum anti-bacterial formulations', icon: <ShieldCheck className="text-brand-blue" /> },
    { name: 'Gastro', desc: 'Advanced digestive health care', icon: <Activity className="text-brand-blue" /> },
    { name: 'PPI', desc: 'Proton Pump Inhibitors for acid control', icon: <ShieldCheck className="text-brand-blue" /> },
    { name: 'Calcium', desc: 'Bone health and density support', icon: <Award className="text-brand-blue" /> },
    { name: 'Iron', desc: 'Nutritional supplements for vitality', icon: <Award className="text-brand-blue" /> },
    { name: 'Antipyretic', desc: 'Rapid fever reduction formulations', icon: <Activity className="text-brand-blue" /> },
    { name: 'Bacillus Clausii', desc: 'Probiotics for gut health restoration', icon: <ShieldCheck className="text-brand-blue" /> },
  ];

  const stats = [
    { label: 'Product Categories', value: '8+', icon: <LayoutGrid size={24} /> },
    { label: 'Products in Portfolio', value: '50+', icon: <ShieldCheck size={24} /> },
    { label: 'Distribution Reach', value: 'PAN India', icon: <Globe size={24} /> },
    { label: 'Quality Assured', value: '100%', icon: <Award size={24} /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-image-bg pt-20">





        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2 
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent pb-2"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Breath Formulations
              </motion.h2>
              <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full font-semibold text-sm">
                Trusted Pharmaceutical Partner
              </div>
            </div>


            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-brand-text leading-tight">
              Caring Life, <span className="text-brand-blue">Crafting Medicine</span>
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed max-w-xl">
              Quality pharma formulations across analgesics, antibiotics, gastro, and nutritional supplements — serving healthcare professionals across India with precision and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary flex items-center gap-2 group">
                Explore Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-text">
                <ShieldCheck size={18} className="text-brand-blue" /> WHO-GMP Compliant
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-text">
                <Truck size={18} className="text-brand-blue" /> PAN India Delivery
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-text">
                <LayoutGrid size={18} className="text-brand-blue" /> 8+ Categories
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square bg-white/40 backdrop-blur-3xl rounded-full flex items-center justify-center p-20 shadow-2xl border border-white">
              {/* CSS Pill Illustration */}
              <div className="w-full h-full relative animate-pulse">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-80 bg-brand-blue rounded-full rotate-45 flex flex-col overflow-hidden shadow-2xl">
                  <div className="h-1/2 bg-brand-dark flex items-center justify-center">
                    <div className="w-16 h-4 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="h-1/2 bg-brand-blue flex items-center justify-center">
                    <div className="w-16 h-4 bg-white/20 rounded-full"></div>
                  </div>
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 border-4 border-brand-blue/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-10 border-2 border-brand-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-blue py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white relative group"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-4xl md:text-5xl font-heading font-extrabold">{stat.value}</div>
                  <div className="text-blue-100 font-medium text-sm md:text-base">{stat.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/20"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] bg-brand-light group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-dark opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6 text-brand-blue">
                    <Activity size={40} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-brand-text">Pharmaceutical Excellence</h4>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">BF</div>
                  <div>
                    <p className="font-bold text-brand-text">Breath Formulations</p>
                    <p className="text-sm text-brand-muted">Est. 2024 • Vizianagaram</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-6">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">Our Identity</span>
            <h2 className="text-4xl font-heading font-bold text-brand-text leading-tight">
              Precision-Driven Health Excellence
            </h2>
            <p className="text-brand-muted leading-relaxed text-lg">
              Breath Formulations is a dedicated pharmaceutical company based in Hyderabad, Telangana. We are committed to delivering high-quality, affordable medicines across therapeutic and nutritional categories — reaching patients and healthcare professionals across India.
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Rigorous Compliance', desc: 'Every batch undergoes multi-stage quality verification for absolute safety.' },
                { title: 'Global Standards', desc: 'Formulations designed following international pharmaceutical guidelines.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 h-6 w-6 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text">{item.title}</h4>
                    <p className="text-sm text-brand-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-blue font-bold group">
              Learn More About Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-blue font-bold uppercase tracking-widest text-sm">Portfolio</span>
            <h2 className="text-4xl font-heading font-bold text-brand-text">Comprehensive Product Range</h2>
            <p className="text-brand-muted">Strategically developed therapeutic solutions across multiple specialized medicine categories.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
                className="card group"
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-brand-blue transition-colors">{cat.name}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-heading font-bold text-brand-text">Why Healthcare Professionals Trust Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Quality Assurance', desc: 'Every product meets strict quality standards with proper documentation and batch testing.', icon: <ShieldCheck size={32} /> },
              { title: 'Wide Portfolio', desc: 'From analgesics to probiotics, we cover the essential therapeutic and nutritional needs.', icon: <LayoutGrid size={32} /> },
              { title: 'Reliable Supply', desc: 'Consistent and timely delivery to distributors and stockists across Telangana.', icon: <Truck size={32} /> },
            ].map((feature, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{feature.title}</h3>
                <p className="text-brand-muted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50">
            <div className="flex items-center gap-2 font-bold text-brand-text">
              <ShieldCheck size={24} className="text-brand-blue" /> WHO-GMP COMPLIANT
            </div>
            <div className="flex items-center gap-2 font-bold text-brand-text">
              <ShieldCheck size={24} className="text-brand-blue" /> ISO CERTIFIED
            </div>
            <div className="flex items-center gap-2 font-bold text-brand-text">
              <ShieldCheck size={24} className="text-brand-blue" /> PAN INDIA REACH
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom mb-20">
        <motion.div
          {...fadeInUp}
          className="bg-brand-blue rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold max-w-2xl mx-auto">Looking to Partner or Distribute?</h2>
            <p className="text-xl text-blue-100 max-w-xl mx-auto">
              Join our growing network of healthcare distributors and bring quality formulations to your region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enquiry" className="bg-white text-brand-blue px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Become a Distributor
              </Link>
              <Link to="/contact" className="border-2 border-white/30 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Inquire Now
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
