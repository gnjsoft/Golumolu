import React, { useEffect, useState } from 'react';
import { TrendingUp, PieChart, DollarSign, Shield, ArrowRight, Activity, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialManagementPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white selection:bg-yellow-500 selection:text-slate-900">
      
      {/* Hero */}
      <div className="relative py-24 px-4 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B1120] to-black"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className={`md:w-1/2 transition-all duration-1000 transform ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 text-yellow-400 font-bold tracking-widest uppercase mb-6 text-sm border border-yellow-500/30 px-4 py-1 rounded-full bg-yellow-500/10">
                    <DollarSign size={16} /> Corporate Finance
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-serif tracking-tight">
                    Master Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">Financial Future</span>
                </h1>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
                    Comprehensive financial management software designed for modern CFOs. Budgeting, forecasting, and real-time reporting.
                </p>
                <div className="flex gap-4">
                    <Link to="/contact" className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                        Get Started
                    </Link>
                    <Link to="/contact" className="px-8 py-4 rounded-full font-bold border border-slate-700 hover:bg-white/5 transition-all">
                        View Demo
                    </Link>
                </div>
            </div>

            {/* Visual */}
            <div className={`md:w-1/2 relative transition-all duration-1000 delay-300 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <p className="text-slate-400 text-sm">Total Revenue</p>
                            <h3 className="text-3xl font-bold text-white font-mono">$4,285,000</h3>
                        </div>
                        <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                            <TrendingUp size={14} /> +12.5%
                        </div>
                    </div>
                    
                    {/* Chart Bars */}
                    <div className="flex items-end justify-between gap-2 h-40">
                        {[40, 60, 45, 70, 50, 80, 65, 90].map((h, i) => (
                            <div key={i} className="w-full bg-gradient-to-t from-yellow-600/50 to-yellow-400 rounded-t-sm hover:from-yellow-500 hover:to-white transition-all cursor-pointer group relative" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold shadow-lg">
                                    ${h}0k
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="bg-green-500 rounded-full p-2 text-white">
                        <Activity size={20} />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400">Cash Flow</div>
                        <div className="font-bold text-white">Positive</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: PieChart, title: "Budgeting & Planning", desc: "Collaborative tools to streamline your annual budgeting cycles and rolling forecasts." },
                  { icon: Shield, title: "Risk Management", desc: "Identify and mitigate financial risks with automated compliance checks and audit trails." },
                  { icon: Landmark, title: "Cash Flow Management", desc: "Optimize liquidity with real-time visibility into receivables, payables, and bank balances." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500 group transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                    style={{ transitionDelay: `${200 + (idx * 150)}ms` }}
                  >
                      <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                      <div className="mt-6 flex items-center text-yellow-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Modern CTA */}
      <div className="py-20 border-t border-white/10 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Gain clarity over your capital.</h2>
              <p className="text-slate-400 mb-8 text-lg">
                  Stop relying on spreadsheets. Upgrade to an intelligent financial management system.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 border border-yellow-500 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-slate-900 transition-all font-bold tracking-wide">
                  Schedule Demo
              </Link>
          </div>
      </div>

    </div>
  );
};

export default FinancialManagementPage;