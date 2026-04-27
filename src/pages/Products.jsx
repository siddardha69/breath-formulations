import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Pill, Box, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'Analgesic', 'Antipyretic', 'Antibiotics', 'Gastro', 'PPI', 'Bacillus Clausii', 'Calcium', 'Iron'
  ];

  const products = [
    // Analgesic / Antipyretic
    { id: 1, name: 'BREATHPARA 500', category: 'Antipyretic', comp: 'Paracetamol 500mg', pack: '10×10 Strip' },
    { id: 2, name: 'BREATHPARA 650', category: 'Antipyretic', comp: 'Paracetamol 650mg', pack: '10×10 Strip' },
    { id: 3, name: 'BREATHFLEX-P', category: 'Analgesic', comp: 'Aceclofenac 100mg + Paracetamol 325mg', pack: '10×10 Strip' },
    { id: 4, name: 'BREATHFLEX-SP', category: 'Analgesic', comp: 'Aceclofenac + Paracetamol + Serratiopeptidase', pack: '10×10 Strip' },
    
    // Antibiotics
    { id: 5, name: 'BREATHMOX 500', category: 'Antibiotics', comp: 'Amoxycillin 500mg', pack: '10×10 Strip' },
    { id: 6, name: 'BREATHCLAV 625', category: 'Antibiotics', comp: 'Amoxycillin 500mg + Clavulanate 125mg', pack: '10×6 Strip' },
    { id: 7, name: 'BREATHCEF 200', category: 'Antibiotics', comp: 'Cefixime 200mg', pack: '10×10 Strip' },
    { id: 8, name: 'BREATHAZITH 500', category: 'Antibiotics', comp: 'Azithromycin 500mg', pack: '3s Strip' },
    
    // Gastro
    { id: 9, name: 'BREATHRAB-D', category: 'Gastro', comp: 'Rabeprazole 20mg + Domperidone 30mg SR', pack: '10×10 Cap' },
    { id: 10, name: 'BREATHPAN-D', category: 'Gastro', comp: 'Pantoprazole 40mg + Domperidone 30mg SR', pack: '10×10 Cap' },
    
    // PPI
    { id: 11, name: 'BREATHRAB 20', category: 'PPI', comp: 'Rabeprazole Sodium 20mg EC', pack: '10×10 Tab' },
    { id: 12, name: 'BREATHPAN 40', category: 'PPI', comp: 'Pantoprazole 40mg', pack: '10×10 Tab' },
    
    // Bacillus Clausii
    { id: 13, name: 'BREATHCLAUS', category: 'Bacillus Clausii', comp: 'Bacillus Clausii 2 Billion Spores', pack: '5s Sachet' },
    { id: 14, name: 'BREATHCLAUS FORTE', category: 'Bacillus Clausii', comp: 'Bacillus Clausii 4 Billion Spores', pack: '5s Sachet' },
    
    // Calcium
    { id: 15, name: 'BREATHCAL-D3', category: 'Calcium', comp: 'Calcium Carbonate 500mg + Vitamin D3 250 IU', pack: '10×10 Tab' },
    { id: 16, name: 'BREATHCAL XT', category: 'Calcium', comp: 'Calcium Carbonate + Zinc + Magnesium + Vitamin D3', pack: '10×10 Tab' },
    
    // Iron
    { id: 17, name: 'BREATHFER XT', category: 'Iron', comp: 'Ferrous Ascorbate + Folic Acid', pack: '10×10 Tab' },
    { id: 18, name: 'BREATHFER-Z', category: 'Iron', comp: 'Iron + Zinc + Folic Acid', pack: '10×10 Tab' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.comp.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="pb-20">
       {/* Banner */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container-custom">
           <nav className="flex gap-2 text-brand-muted text-sm mb-4 font-medium">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-text">Products</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="text-5xl font-heading font-extrabold text-brand-text mb-4">Our Products</h1>
            <p className="text-lg text-brand-muted">Browse our range of high-quality pharmaceutical formulations designed for optimal therapeutic outcomes.</p>
          </div>
        </div>
      </section>

      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-[80px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
        <div className="container-custom flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by product name, category, or composition..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories Pill Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                    : 'bg-gray-100 text-brand-text hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-8 flex justify-between items-center">
            <p className="text-brand-muted">Showing <span className="font-bold text-brand-text">{filteredProducts.length}</span> products</p>
          </div>

          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
                  >
                    {/* Visual Card Top */}
                    <div className="h-40 bg-gradient-to-br from-brand-light to-white p-8 relative overflow-hidden flex items-center justify-center">
                       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-brand-blue uppercase tracking-wider border border-brand-blue/10">
                          {product.category}
                       </div>
                       <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                          <Pill size={32} />
                       </div>
                       {/* Abstract Background Design */}
                       <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl"></div>
                       <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-green/5 rounded-full blur-xl"></div>
                    </div>

                    <div className="p-8 flex-grow space-y-4">
                       <div>
                          <h3 className="text-xl font-heading font-bold text-brand-text group-hover:text-brand-blue transition-colors">{product.name}</h3>
                          <p className="text-brand-muted italic text-sm mt-1 leading-relaxed">{product.comp}</p>
                       </div>
                       
                       <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                          <div className="flex items-center gap-2 text-xs font-bold text-brand-text/60 uppercase">
                             <Box size={14} className="text-brand-blue" />
                             {product.pack}
                          </div>
                       </div>
                    </div>

                    <div className="px-8 pb-8">
                       <Link 
                        to="/enquiry"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-light text-brand-blue font-bold text-sm hover:bg-brand-blue hover:text-white transition-all group/btn"
                       >
                         Enquire Now <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                       </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-brand-light rounded-[2rem] border-2 border-dashed border-gray-200">
               <FlaskConical size={48} className="mx-auto text-gray-300 mb-4" />
               <h3 className="text-xl font-bold text-brand-text">No products found</h3>
               <p className="text-brand-muted">Try adjusting your search or category filter.</p>
               <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                className="mt-6 text-brand-blue font-bold underline"
               >
                 Clear all filters
               </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Request CTA */}
      <section className="container-custom mt-20">
         <div className="bg-brand-text rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 space-y-4">
               <h2 className="text-3xl font-heading font-bold">Can't find what you're looking for?</h2>
               <p className="text-gray-400 max-w-xl mx-auto">We specialize in custom formulations and bulk supplies. Contact our pharmaceutical experts for a personalized quote.</p>
               <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <Link to="/enquiry" className="btn-primary">Request Custom Formulation</Link>
                  <button className="text-white font-bold border-b-2 border-brand-blue pb-1">Download Catalog PDF</button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Products;
