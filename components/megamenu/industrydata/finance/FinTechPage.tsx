import React, { useEffect, useState } from 'react';
import { Zap, Code, Link as LinkIcon, Smartphone, ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinTechPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-sans text-white">
      <div className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-50"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <span className="text-purple-400 font-bold tracking-widest uppercase mb-4 block">Disruptive Finance</span>
              <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
                  Fin<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tech</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                  Building the next generation of financial unicorns. Blockchain, Neobanking, and Embedded Finance.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-purple-400 transition-all">
                  Build the Future <Rocket className="ml-2" size={20} />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: LinkIcon, title: "Blockchain & Crypto", desc: "DeFi platforms, smart contracts, and secure crypto wallets." },
                  { icon: Smartphone, title: "Neobanking", desc: "Digital-only banks with smooth UX, virtual cards, and instant onboarding." },
                  { icon: Code, title: "Embedded Finance", desc: "Integrating payment and lending capabilities into non-financial apps (BNPL)." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-purple-500/50 transition-colors group">
                      <item.icon size={40} className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default FinTechPage;