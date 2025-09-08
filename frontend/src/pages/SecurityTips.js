import React from 'react';

const SecurityTips = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Tips</h1>
          <p className="text-gray-300 mb-8 max-w-3xl">
            Practical tips to help you reduce risk and stay safe online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Use Strong, Unique Passwords</h3>
              <p className="text-gray-300">Use a password manager to generate and store unique passwords.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Enable Multi-Factor Authentication</h3>
              <p className="text-gray-300">Add an extra layer of protection to your accounts wherever possible.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Keep Software Updated</h3>
              <p className="text-gray-300">Install updates promptly for your OS, browser, and apps.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Beware of Phishing</h3>
              <p className="text-gray-300">Don’t click suspicious links or attachments; verify the sender.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Secure Your Wi‑Fi</h3>
              <p className="text-gray-300">Use WPA2/WPA3 encryption and strong router passwords.</p>
            </div>
            <div className="p-6 rounded-lg border border-white/5 bg-neutral-900">
              <h3 className="font-semibold text-lg mb-2">Back Up Important Data</h3>
              <p className="text-gray-300">Use cloud or external backups with encryption.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityTips;


