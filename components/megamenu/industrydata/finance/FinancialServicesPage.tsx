import React, { useEffect, useState } from 'react';
import { Landmark, Briefcase, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialServicesPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          
          <div className={`relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                      <Landmark size={14} /> Financial Services
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                      Reinventing <br/> <span className="text-blue-500">Finance</span>
                  </h1>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
                      We help financial institutions navigate the digital age with secure, compliant, and customer-centric technology solutions.
                  </p>
                  <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center w-fit">
                      Transform Your Firm <ArrowRight className="ml-2" size={20} />
                  </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl max-w-md">
                      <div className="flex items-center justify-between mb-6">
                          <span className="text-slate-300">Asset Growth</span>
                          <span className="text-green-400 font-mono">+12.5%</span>
                      </div>
                      <div className="flex gap-2 items-end h-32 mb-4">
                          {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                              <div key={i} className="flex-1 bg-blue-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                          ))}
                      </div>
                      <div className="h-px bg-white/20 w-full mb-4"></div>
                      <div className="flex justify-between text-sm text-slate-400">
                          <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Briefcase, title: "Wealth Management", desc: "Digital advisory platforms and portfolio management systems for modern investors." },
                  { icon: ShieldCheck, title: "RegTech", desc: "Automated compliance monitoring, KYC/AML screening, and regulatory reporting." },
                  { icon: TrendingUp, title: "Capital Markets", desc: "High-frequency trading platforms and real-time market data analysis tools." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-slate-200 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 bg-white group">
                      <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default FinancialServicesPage;