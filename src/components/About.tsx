
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Saillent</h2>
          <p className="text-lg text-gray-600 mb-4">
            Saillent is a science-driven consulting agency specializing in decoding churn, optimizing retention, and 
            driving growth through data-driven strategies.
          </p>
          <p className="text-lg text-gray-600">
            By leveraging advanced analytics, machine learning, and strategic insights, we transform raw data into 
            actionable strategies that empower businesses to thrive in competitive markets.
          </p>
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
