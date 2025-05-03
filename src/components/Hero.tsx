
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-saillent-lightGray to-white z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-saillent-blue opacity-5 blur-3xl"></div>
      <div className="absolute bottom-[15%] left-[10%] w-80 h-80 rounded-full bg-saillent-orange opacity-5 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block text-saillent-blue">Decoding churn.</span>
              <span className="block">Driving growth.</span>
              <span className="block">Empowering success.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Transforming data into actionable strategies for sustainable success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="btn-primary text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </a>
              <a 
                href="#about" 
                className="btn-secondary text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative z-10">
              <svg className="w-full h-auto" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0,0)">
                  {/* Data visualization elements */}
                  <circle cx="250" cy="250" r="180" fill="#F3F4F6" />
                  <circle cx="250" cy="250" r="150" fill="none" stroke="#1E40AF" strokeWidth="3" strokeDasharray="8 4" />
                  
                  {/* Data points and connections */}
                  {[45, 90, 135, 180, 225, 270, 315, 360].map((angle, i) => {
                    const radian = (angle * Math.PI) / 180;
                    const x1 = 250 + 100 * Math.cos(radian);
                    const y1 = 250 + 100 * Math.sin(radian);
                    const x2 = 250 + 180 * Math.cos(radian);
                    const y2 = 250 + 180 * Math.sin(radian);
                    return (
                      <g key={i} className={`opacity-${60 + i * 5}`}>
                        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1E40AF" strokeWidth="1" />
                        <circle cx={x2} cy={y2} r="5" fill="#FF7F50" />
                      </g>
                    );
                  })}
                  
                  {/* Growth chart */}
                  <path 
                    d="M130,350 C170,300 200,340 240,260 S300,200 370,150" 
                    fill="none" 
                    stroke="#FF7F50" 
                    strokeWidth="3" 
                  />
                  
                  {/* Center focus */}
                  <circle cx="250" cy="250" r="40" fill="#1E40AF" fillOpacity="0.1" />
                  <circle cx="250" cy="250" r="20" fill="#FF7F50" fillOpacity="0.3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L12 19M12 19L18 13M12 19L6 13" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
