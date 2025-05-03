
import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alexandra Bochi',
      position: 'CEO',
      bio: 'Visionary leader with 15+ years of experience in data analytics and customer retention strategies.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      bio: 'Tech innovator specializing in machine learning algorithms and predictive analytics solutions.',
      image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
      name: 'Sarah Johnson',
      position: 'COO',
      bio: 'Operations expert with a proven track record in scaling data-focused consulting practices.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300'
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Saillent</h2>
          <p className="text-lg text-gray-600">
            We decode churn, optimize retention, and drive growth through data-driven strategies. 
            Saillent is a premier data-driven consultancy specializing in helping businesses reduce 
            customer churn, improve retention, and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-saillent-orange font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-saillent-lightGray rounded-lg p-8">
            <h3 className="text-xl font-bold text-saillent-blue mb-3">Innovation</h3>
            <p className="text-gray-600">
              We leverage cutting-edge analytics and machine learning to stay ahead of market trends.
            </p>
          </div>
          <div className="bg-saillent-lightGray rounded-lg p-8">
            <h3 className="text-xl font-bold text-saillent-blue mb-3">Trust</h3>
            <p className="text-gray-600">
              We build long-term relationships based on transparency, integrity, and measurable results.
            </p>
          </div>
          <div className="bg-saillent-lightGray rounded-lg p-8">
            <h3 className="text-xl font-bold text-saillent-blue mb-3">Results</h3>
            <p className="text-gray-600">
              We focus on delivering tangible outcomes that directly impact your business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
