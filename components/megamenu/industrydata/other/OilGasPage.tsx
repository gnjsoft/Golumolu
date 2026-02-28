import React, { useEffect, useState } from 'react';
import { Flame, Droplet, Activity, ShieldAlert, Anchor, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OilGasPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-stone-900 min-h-screen pt-20 font-sans text-stone-100">
      <div className="relative py-24 px-4 overflow-hidden border-b border-stone-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941348-c09e554b9a51?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 sepia"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-4 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
                      <Flame size={48} className="text-amber-500" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Energy & Utilities
              </h1>
              <p className={`text-xl text-stone-400 mb-8 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Digital transformation for upstream, midstream, and downstream operations.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-bold py-3 px-8 rounded transition-colors">
                      Speak to an Expert
                  </Link>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Activity, title: "Asset Integrity", desc: "Predictive maintenance for rigs, pipelines, and refineries to prevent costly outages." },
                  { icon: ShieldAlert, title: "HSE Management", desc: "Health, Safety, and Environment monitoring systems to ensure workforce safety." },
                  { icon: Droplet, title: "Production Optimization", desc: "Real-time data analytics to maximize output from wells and plants." },
                  { icon: Anchor, title: "Offshore Connectivity", desc: "Robust communication networks for remote offshore platforms." },
                  { icon: BarChart2, title: "Energy Trading", desc: "Platforms for commodity trading and risk management (CTRM)." },
                  { icon: Flame, title: "Sustainability", desc: "Tracking carbon footprint and managing renewable energy integration." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-stone-800 p-8 rounded-xl border border-stone-700 hover:border-amber-500/50 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${400 + (idx * 150)}ms` }}
                  >
                      <item.icon className="w-10 h-10 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-stone-400">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default OilGasPage;