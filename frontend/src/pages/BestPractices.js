import React from 'react';

const BestPractices = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cybersecurity Best Practices</h1>
          <p className="text-gray-300 mb-8 max-w-3xl">
            Organization-level practices and frameworks to strengthen your security posture.
          </p>
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Principle of Least Privilege</h3>
              <p className="text-gray-300">Grant users and systems only the access they need to perform tasks.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Zero Trust Approach</h3>
              <p className="text-gray-300">Continuously verify identity, device health, and context before granting access.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Security Awareness Training</h3>
              <p className="text-gray-300">Provide regular training and simulated phishing exercises.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Patch and Vulnerability Management</h3>
              <p className="text-gray-300">Maintain an inventory, prioritize CVEs, and patch promptly.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Logging and Monitoring</h3>
              <p className="text-gray-300">Centralize logs and set alerts for anomalous behavior.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestPractices;


