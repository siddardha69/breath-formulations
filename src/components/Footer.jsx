import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-text text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-heading font-bold">Breath Formulations</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Caring Life. Dedicated pharmaceutical company committed to delivering high-quality, affordable medicines across India.
            </p>
            <div className="flex gap-4">
              <div className="h-8 w-8 bg-brand-blue/20 rounded-full flex items-center justify-center border border-brand-blue/30 text-brand-blue">
                <span className="font-bold text-xs">WHO</span>
              </div>
              <div className="h-8 w-8 bg-brand-blue/20 rounded-full flex items-center justify-center border border-brand-blue/30 text-brand-blue">
                <span className="font-bold text-xs">GMP</span>
              </div>
              <div className="h-8 w-8 bg-brand-blue/20 rounded-full flex items-center justify-center border border-brand-blue/30 text-brand-blue">
                <span className="font-bold text-xs">ISO</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/enquiry" className="text-gray-400 hover:text-white transition-colors">Enquiry</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Product Range</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Analgesic & Antipyretic</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Antibiotics</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Gastro & PPI</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Nutritional Supplements</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Probiotics</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-blue shrink-0 mt-1" size={20} />
                <span className="text-gray-400">Vizianagaram, 535005,<br />Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-blue shrink-0" size={20} />
                <span className="text-gray-400">+91 79976 94788</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-blue shrink-0" size={20} />
                <span className="text-gray-400">breathformulations@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Breath Formulations. All Rights Reserved. | Dedicated to Healthcare Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
