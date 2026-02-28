
import React, { useEffect } from 'react';
import { Network, Shield, Wifi, ArrowRight, Phone, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const CiscoPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#049FD9] text-white py-24 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Cisco</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-10">
              Powering the internet. Networking, security, and collaboration solutions for the digital era.
          </p>
          <Link to="/contact" className="bg-white text-[#049FD9] font-bold py-3 px-8 rounded-lg hover:bg-cyan-50 transition-colors inline-flex items-center">
              Connect with Cisco <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Network, title: "Catalyst Switches", desc: "Enterprise-class access and core switching for resilient networks." },
              { icon: Shield, title: "Security", desc: "Firepower firewalls, Duo MFA, and Umbrella cloud security." },
              { icon: Wifi, title: "Meraki Wireless", desc: "Cloud-managed Wi-Fi access points for simplified deployment." },
              { icon: Phone, title: "Webex Collaboration", desc: "Unified communications, video conferencing, and contact center." },
              { icon: Network, title: "ISR Routers", desc: "Secure WAN connectivity with integrated SD-WAN capabilities." },
              { icon: Cloud, title: "Data Center", desc: "UCS servers and Nexus switches for modern data centers." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all group">
                  <item.icon size={40} className="text-[#049FD9] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default CiscoPage;
