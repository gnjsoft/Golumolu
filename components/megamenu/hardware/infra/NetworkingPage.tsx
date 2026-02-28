
import React, { useEffect } from 'react';
import { Network, Wifi, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NetworkingPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-900 text-white py-24 px-4 text-center">
          <Network size={64} className="mx-auto mb-6 text-indigo-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Networking Solutions</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
              Build a fast, secure, and reliable network backbone for your organization.
          </p>
          <Link to="/contact" className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
              Upgrade Network <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { title: "Switches", desc: "Managed L2/L3 switches for campus and data center networks." },
              { title: "Routers", desc: "High-performance routing for secure WAN connectivity." },
              { title: "Wireless", desc: "Wi-Fi 6 access points for seamless mobility and coverage." }
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

export default NetworkingPage;
