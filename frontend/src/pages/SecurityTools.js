import React from 'react';

const tools = [
  { name: 'uBlock Origin', type: 'Browser Extension', link: 'https://ublockorigin.com/' },
  { name: 'HTTPS Everywhere (built-in on many browsers now)', type: 'Browser', link: 'https://www.eff.org/https-everywhere' },
  { name: 'NoScript', type: 'Browser Extension', link: 'https://noscript.net/' },
  { name: 'Windows Defender Firewall', type: 'Firewall', link: 'ms-settings:windowsdefender' },
  { name: 'Little Snitch (macOS)', type: 'Firewall', link: 'https://www.obdev.at/products/littlesnitch/index.html' },
  { name: 'GlassWire', type: 'Firewall/Monitor', link: 'https://www.glasswire.com/' },
  { name: 'Bitwarden', type: 'Password Manager', link: 'https://bitwarden.com/' },
  { name: '1Password', type: 'Password Manager', link: 'https://1password.com/' },
  { name: 'Malwarebytes', type: 'Anti-Malware', link: 'https://www.malwarebytes.com/' },
  { name: 'Microsoft Defender', type: 'Anti-Virus', link: 'https://www.microsoft.com/en-us/windows/comprehensive-security' },
  { name: 'NordVPN', type: 'VPN', link: 'https://nordvpn.com/' },
  { name: 'Proton VPN', type: 'VPN', link: 'https://protonvpn.com/' },
  { name: 'Have I Been Pwned', type: 'Breach Check', link: 'https://haveibeenpwned.com/' },
  { name: 'TLS Observatory', type: 'Site Scanner', link: 'https://observatory.mozilla.org/' },
  { name: 'Shodan', type: 'Network Scanner', link: 'https://www.shodan.io/' },
];

const SecurityTools = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold mb-3">Security Tools & Extensions</h1>
        <p className="text-gray-300 mb-6">Recommended extensions and firewalls to enhance your online safety.</p>
        <div className="space-y-3">
          {tools.map((t) => (
            <div key={t.name} className="bg-neutral-900 border border-white/5 p-4 rounded flex justify-between items-center">
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-gray-400">{t.type}</div>
              </div>
              <a className="text-blue-400 hover:text-blue-300 underline" href={t.link} target="_blank" rel="noreferrer">Visit</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityTools;




