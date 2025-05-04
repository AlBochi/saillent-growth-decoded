
import React from 'react';
import { cn } from '@/lib/utils';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-commerce Churn Reduction',
      description: 'Helped Deliveroo reduce churn by 25% within 6 months, resulting in $500K in retained revenue.',
      metrics: [
        { label: 'Churn Reduction', value: '25%' },
        { label: 'Revenue Retained', value: '$500K' },
        { label: 'Customer Satisfaction', value: '+32%' }
      ],
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'SaaS Growth Strategy',
      description: 'Implemented data-driven retention strategy for Babbel GmbH, increasing customer lifetime value by 40%.',
      metrics: [
        { label: 'LTV Increase', value: '40%' },
        { label: 'Retention Rate', value: '+15%' },
        { label: 'Revenue Growth', value: '22%' }
      ],
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'HR Software Customer Acquisition',
      description: 'Developed targeted acquisition strategies for Palm.hr, resulting in 1000 new customers acquired in 1 year.',
      metrics: [
        { label: 'New Customers', value: '1000+' },
        { label: 'Acquisition Cost', value: '-30%' },
        { label: 'Conversion Rate', value: '+42%' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Cosmetic Surgery Patient Retention',
      description: 'Optimized patient engagement process for The Godek Center, increasing patient retention by 40% through targeted communication.',
      metrics: [
        { label: 'Patient Retention', value: '+40%' },
        { label: 'Referral Increase', value: '+45%' },
        { label: 'Satisfaction Score', value: '92%' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const testimonials = [
    {
      quote: "Saillent transformed our data into actionable strategies that boosted our retention rates significantly. Highly recommend!",
      author: "Connie R. Burgoyne",
      company: "Growth at Camunda",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      quote: "The insights provided by Saillent's analytics revolutionized our approach to customer engagement. The ROI has been remarkable.",
      author: "Perry Reed",
      company: "CMO of GBN",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      quote: "Working with Saillent helped us identify exactly why customers were leaving and how to fix it. Our retention is now at an all-time high.",
      author: "Emily Garcia",
      company: "CTO of DataFlow",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section id="case-studies" className="bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-lg text-gray-600">
            See how we've helped businesses identify issues, implement solutions, and achieve measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transform transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-bold text-saillent-blue">{metric.value}</p>
                      <p className="text-sm text-gray-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Header image before testimonials */}
        <div className="w-full flex justify-center mb-16">
          <img 
            src="/lovable-uploads/e5396fc7-9483-405d-bc37-a2819a208962.png"
            alt="Saillent Header" 
            className="w-full max-w-5xl"
          />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "bg-saillent-lightGray rounded-lg p-6 relative",
                "before:content-[''] before:absolute before:w-8 before:h-8",
                "before:bg-saillent-lightGray before:rotate-45 before:top-[-16px] before:left-12"
              )}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="rounded-full w-12 h-12 object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
