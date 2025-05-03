
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Case Studies', path: '/#case-studies' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/f42849d6-8b74-4d8e-b187-fbf980166891.png" 
            alt="Saillent Logo" 
            className="h-10 md:h-12"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-700 hover:text-saillent-blue font-medium transition-colors"
              onClick={(e) => {
                if (link.path.startsWith('/#')) {
                  e.preventDefault();
                  const element = document.getElementById(link.path.substring(2));
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#contact" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        'md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 pt-20',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-700 hover:text-saillent-blue text-xl font-medium"
              onClick={(e) => {
                if (link.path.startsWith('/#')) {
                  e.preventDefault();
                  const element = document.getElementById(link.path.substring(2));
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
                closeMenu();
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#contact" 
            className="btn-primary mt-4"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
              closeMenu();
            }}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
