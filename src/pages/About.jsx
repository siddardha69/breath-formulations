import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart, CheckCircle2 } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pb-20">
      {/* Sub Hero */}
      <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container-custom relative z-10">
          <nav className="flex gap-2 text-blue-200 text-sm mb-6 font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">About</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-heading font-extrabold mb-6"
          >
            About Breath Formulations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl"
          >
            Our story, our values, and our commitment to quality healthcare for a healthier India.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-brand-text">Who We Are</h2>
            <div className="space-y-4 text-brand-muted text-lg leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between quality pharmaceutical formulations and affordable access for patients across India, Breath Formulations operates out of Vizianagaram, Andhra Pradesh.
              </p>
              <p>
                Established in 2024, we are a dedicated pharmaceutical company committed to delivering high-quality, affordable medicines across therapeutic and nutritional categories. We believe that every patient deserves access to life-saving and life-enhancing medications without compromise on quality.
              </p>
              <p>
                Our team consists of industry veterans and healthcare enthusiasts who bring decades of collective experience in pharmaceutical manufacturing, distribution, and clinical excellence.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
             <div className="bg-brand-light rounded-3xl p-8 flex flex-col justify-center text-center space-y-2">
                <span className="text-4xl font-heading font-extrabold text-brand-blue">2024</span>
                <span className="text-brand-muted font-bold">Founded</span>
             </div>
             <div className="bg-brand-blue text-white rounded-3xl p-8 flex flex-col justify-center text-center space-y-2">
                <span className="text-4xl font-heading font-extrabold">50+</span>
                <span className="text-blue-100 font-bold">Products</span>
             </div>
             <div className="bg-brand-text text-white rounded-3xl p-8 flex flex-col justify-center text-center space-y-2 col-span-2">
                <span className="text-4xl font-heading font-extrabold">Vizianagaram</span>
                <span className="text-gray-400 font-bold">Andhra Pradesh, India</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <motion.div {...fadeInUp} className="bg-brand-blue p-12 rounded-[2rem] text-white space-y-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-heading font-bold">Our Vision</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              To become the most trusted pharma partner for doctors, distributors, and patients across India by setting new benchmarks in quality and accessibility.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-white p-12 rounded-[2rem] border border-gray-200 space-y-6 shadow-sm">
            <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center">
              <Heart size={32} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-brand-text">Our Mission</h3>
            <p className="text-brand-muted text-lg leading-relaxed">
              To manufacture and supply quality-assured pharmaceutical formulations with integrity, consistency, and care, ensuring a healthier tomorrow for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-heading font-bold text-brand-text text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'Transparent practices and honest partnerships are at the core of every decision we make.' },
              { title: 'Quality', desc: 'Every batch is tested, certified, and consistent, meeting the highest regulatory standards.' },
              { title: 'Accessibility', desc: 'We strive to make advanced medicine affordable for every tier of healthcare in India.' },
            ].map((value, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                className="p-10 rounded-3xl bg-brand-light border border-brand-blue/5 hover:border-brand-blue/20 transition-all text-center"
              >
                <h4 className="text-2xl font-heading font-bold text-brand-blue mb-4">{value.title}</h4>
                <p className="text-brand-muted leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding bg-brand-text text-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-heading font-bold mb-8">Why Partner With Us?</h2>
            <div className="space-y-6">
              {[
                'WHO-GMP compliant manufacturing facilities',
                'Wide therapeutic range covering essential needs',
                'Consistent and secure supply chain management',
                'Dedicated support for distributors and stockists',
                'Transparent pricing and proper documentation',
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-brand-blue p-1 rounded-full text-white">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="relative">
             <div className="w-full aspect-video rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-dark/40 border border-white/10 flex items-center justify-center p-12 text-center">
                <div className="space-y-6">
                   <div className="w-20 h-20 bg-brand-blue rounded-full mx-auto flex items-center justify-center shadow-2xl">
                      <ShieldCheck size={40} />
                   </div>
                   <h3 className="text-2xl font-heading font-bold">Certified Excellence</h3>
                   <p className="text-gray-400">All our formulations are manufactured in WHO-GMP compliant facilities with rigorous quality controls.</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
