import React from 'react';

const About = () => {
  const team = [
    {
      name: 'Security Experts',
      role: 'Threat Analysis',
      description: 'Our team of cybersecurity professionals continuously monitors and analyzes emerging threats.',
      icon: '🔍'
    },
    {
      name: 'Educational Specialists',
      role: 'Content Creation',
      description: 'We create comprehensive, easy-to-understand educational content for all skill levels.',
      icon: '📚'
    },
    {
      name: 'Community Support',
      role: 'User Assistance',
      description: 'Our support team is here to help you navigate the platform and answer your questions.',
      icon: '🤝'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Users Protected' },
    { number: '500+', label: 'Threats Documented' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About Cyber Safety
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-gray-200">
              We're dedicated to making cybersecurity accessible to everyone through comprehensive education and practical tools.
            </p>
            <div className="height: 200px;"></div>
            <p>.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                In today's digital world, cyber threats are constantly evolving and becoming 
                more sophisticated. Our mission is to empower individuals and organizations 
                with the knowledge and tools they need to protect themselves against these threats.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We believe that cybersecurity education should be accessible, practical, and 
                easy to understand. By providing comprehensive threat information, prevention 
                strategies, and recovery methods, we help users build a strong defense against 
                cyber attacks.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-green-400/10 p-3 rounded-full">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Protection First</h3>
                  <p className="text-gray-400">Prevention is better than cure</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-900 border border-white/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why We Started</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 text-xl">📈</span>
                  <div>
                    <h4 className="font-semibold text-white">Rising Cyber Attacks</h4>
                    <p className="text-gray-300">Cyber attacks increased by 600% during the pandemic</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">💰</span>
                  <div>
                    <h4 className="font-semibold text-white">High Financial Impact</h4>
                    <p className="text-gray-300">Average cost of a data breach is $4.45 million</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-400 text-xl">👥</span>
                  <div>
                    <h4 className="font-semibold text-white">Lack of Awareness</h4>
                    <p className="text-gray-300">95% of security breaches are due to human error</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We're proud of the positive impact we've made in the cybersecurity community.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a diverse team of cybersecurity experts, educators, and developers 
              working together to keep you safe online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-neutral-900 border border-white/5">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment to your security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-400/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
              <p className="text-gray-300">Your data and privacy are our top priority</p>
            </div>
            <div className="text-center">
              <div className="bg-green-400/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
              <p className="text-gray-300">Knowledge is the best defense against threats</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-300">We're stronger when we work together</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-400/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">We continuously improve our platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of a community that's committed to making the internet safer for everyone. 
            Start your cybersecurity journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/threats"
              className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded-lg text-lg"
            >
              Explore Threats
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
