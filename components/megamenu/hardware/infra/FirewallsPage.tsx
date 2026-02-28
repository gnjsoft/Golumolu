
import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FirewallsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-red-900 text-white py-24 px-4 text-center">
          <ShieldCheck size={64} className="mx-auto mb-6 text-red-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Next-Gen Firewalls</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-10">
              Protect your network edge with advanced threat prevention and deep packet inspection.
          </p>
          <Link to="/contact" className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-500 transition-colors inline-flex items-center">
              Secure Your Edge <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { title: "Threat Prevention", desc: "Block malware, ransomware, and phishing attacks at the gateway." },
              { title: "VPN & SD-WAN", desc: "Secure remote access and optimized connectivity for branch offices." },
              { title: "Unified Management", desc: "Centralized policy control and reporting across all appliances." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default FirewallsPage;
