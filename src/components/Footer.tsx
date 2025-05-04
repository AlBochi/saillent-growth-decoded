
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Case Studies', path: '/#case-studies' },
    { name: 'Contact', path: '/#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/saillent' }
  ];

  return (
    <footer className="bg-saillent-blue text-white">
      <div className="container py-12 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/6f88bc1a-24fd-4db7-9e17-e67cbbc2ca98.png" 
              alt="Saillent Logo" 
              className="h-16 mb-6"
            />
            <p className="text-white/80 max-w-xs">
              Saillent helps businesses reduce customer churn, improve retention, and 
              drive sustainable growth through data-driven strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-white/80 hover:text-white transition-colors"
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
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center text-white/80">
                <span className="mr-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <a href="mailto:albochi@saillent.com" className="hover:text-white">albochi@saillent.com</a>
              </p>
              <p className="flex items-center text-white/80">
                <span className="mr-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <a href="tel:+16133011944" className="hover:text-white">+1 (613) 301-1944</a>
              </p>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:opacity-80 transition-opacity"
                  >
                    {link.icon === 'linkedin' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {currentYear} Saillent. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
        
        {/* Large logo in bottom right */}
        <div className="hidden md:block absolute bottom-12 right-0">
          <img 
            src="/lovable-uploads/6f88bc1a-24fd-4db7-9e17-e67cbbc2ca98.png" 
            alt="Saillent Logo" 
            className="h-28 opacity-90"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
