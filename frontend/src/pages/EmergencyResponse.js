import React from 'react';

const EmergencyResponse = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Emergency Response</h1>
          <p className="text-gray-300 mb-8 max-w-3xl">
            Immediate steps to take when you suspect or confirm a security incident.
          </p>
          <ol className="list-decimal list-inside space-y-4">
            <li className="p-4 rounded-lg border border-white/5 bg-neutral-900">
              Disconnect affected devices from networks to contain the incident.
            </li>
            <li className="p-4 rounded-lg border border-white/5 bg-neutral-900">
              Preserve evidence: do not wipe logs; capture screenshots and timestamps.
            </li>
            <li className="p-4 rounded-lg border border-white/5 bg-neutral-900">
              Change passwords and revoke compromised credentials immediately.
            </li>
            <li className="p-4 rounded-lg border border-white/5 bg-neutral-900">
              Notify your IT/Security team and, if required, relevant authorities.
            </li>
            <li className="p-4 rounded-lg border border-white/5 bg-neutral-900">
              Begin recovery: restore from clean backups and monitor for reinfection.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default EmergencyResponse;


