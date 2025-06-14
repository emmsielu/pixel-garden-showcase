
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About & Contact' },
  { to: '/cv', label: 'CV' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: 'hsl(var(--primary))',
    fontWeight: 'bold',
    // removed underline and underline offset
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 text-2xl font-serif font-bold text-foreground">
            Emms Bevan
            <span className="hidden sm:inline text-2xl font-sans font-light text-primary ml-2 uppercase tracking-wider">
              Senior Product Designer
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-lg text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <span className="text-2xl font-sans font-light text-primary mr-3 uppercase tracking-wider">
              Senior Product Designer
            </span>
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background"
          >
            <nav className="flex flex-col items-center space-y-4 py-4 border-t border-border">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="text-lg text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

