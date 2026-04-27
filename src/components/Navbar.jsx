import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
    { name: 'Enquiry', path: '/enquiry' },
  ];

  const logoUrl = "https://www.image2url.com/r2/default/images/1777294303429-e6002328-9e19-448c-833b-bcb65b03da5b.png";


  return (
    <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logoUrl} 
            alt="Breath Formulations Logo" 
            className="h-20 w-auto md:h-24 object-contain transition-transform group-hover:scale-105"


            onError={(e) => {

              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <span className="hidden text-brand-blue font-heading font-bold text-xl hidden group-hover:block transition-all">BF</span>
          <div className="hidden h-10 w-10 bg-brand-blue text-white items-center justify-center rounded-lg font-bold text-xl">BF</div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-semibold tracking-tight transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all hover:after:w-full ${
                location.pathname === link.path ? 'text-brand-blue after:w-full' : 'text-brand-text/80 hover:text-brand-blue'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link to="/enquiry" className="btn-primary py-2 px-6">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col p-8 animate-in fade-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-12">
            <img src={logoUrl} alt="Logo" className="h-10" />
            <button onClick={() => setIsMobileMenuOpen(false)}><X size={28} /></button>
          </div>
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-heading font-semibold ${
                  location.pathname === link.path ? 'text-brand-blue' : 'text-brand-text'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/enquiry" 
              className="btn-primary mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
