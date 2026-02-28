import React, { useEffect, useState } from 'react';
import { Radio, Wifi, Globe, Smartphone, Server, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TelecomPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-cyan-950 text-white py-24 text-center overflow-hidden relative">
          {/* Animated Background Lines */}
          <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-cyan-400 animate-pulse"></div>
              <div className="absolute top-1/3 left-0 w-full h-0.5 bg-cyan-600 animate-pulse delay-100"></div>
              <div className="absolute top-2/3 left-0 w-full h-0.5 bg-cyan-600 animate-pulse delay-200"></div>
          </div>
          
          <div className={`relative z-10 max-w-4xl mx-auto px-4 transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="mb-6 flex justify-center">
                  <div className="bg-cyan-500/20 p-4 rounded-full border border-cyan-500/50">
                      <Radio size={48} className="text-cyan-400" />
                  </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Telecommunications</h1>
              <p className="text-xl text-cyan-200 mb-10">
                  Enabling the 5G revolution with OSS/BSS transformation and next-gen network management.
              </p>
              <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-full transition-colors">
                  Connect With Us
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Wifi, title: "5G & Edge Computing", desc: "Monetize new network capabilities with edge-ready applications and slices." },
              { icon: Server, title: "OSS/BSS Modernization", desc: "Cloud-native operational and business support systems for agility." },
              { icon: Smartphone, title: "Digital Customer Experience", desc: "Self-service apps, AI chatbots, and seamless omnichannel support." },
              { icon: Globe, title: "IoT Connectivity", desc: "Platforms to manage millions of connected devices securely." },
              { icon: ArrowRight, title: "Network Analytics", desc: "AI-driven insights for predictive maintenance and capacity planning." },
              { icon: Radio, title: "SDN / NFV", desc: "Software-defined networking solutions for flexible infrastructure." }
          ].map((item, idx) => (
              <div 
                key={idx} 
                className={`p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-700 group ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
              >
                  <item.icon className="w-10 h-10 text-cyan-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default TelecomPage;