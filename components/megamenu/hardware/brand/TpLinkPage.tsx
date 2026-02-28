
import React, { useEffect } from 'react';
import { Wifi, Router, Radio, ArrowRight, ShieldCheck, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const TpLinkPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#4ACBD9] text-white py-24 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">TP-Link</h1>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto mb-10">
              Reliable networking devices for business and home. High performance, affordable connectivity.
          </p>
          <Link to="/contact" className="bg-white text-[#4ACBD9] font-bold py-3 px-8 rounded-lg hover:bg-teal-50 transition-colors inline-flex items-center">
              Browse Products <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Wifi, title: "Omada SDN", desc: "Smart cloud solution for business networking with centralized management." },
              { icon: Router, title: "Business Routers", desc: "SafeStream VPN routers for secure and fast connectivity." },
              { icon: Radio, title: "Access Points", desc: "Ceiling mount and outdoor APs for wide-area Wi-Fi coverage." },
              { icon: ShieldCheck, title: "JetStream Switches", desc: "Managed and smart switches for reliable network backbones." },
              { icon: Home, title: "Smart Home", desc: "Tapo and Kasa smart plugs, bulbs, and cameras." },
              { icon: Wifi, title: "Deco Mesh", desc: "Whole-home mesh Wi-Fi systems for dead-zone free coverage." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all group">
                  <item.icon size={40} className="text-[#4ACBD9] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default TpLinkPage;
