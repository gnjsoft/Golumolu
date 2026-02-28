import React, { useEffect, useState } from 'react';
import { BarChart2, TrendingUp, Search, ArrowRight, Layers, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalyticsSolutionPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white selection:bg-purple-500 selection:text-white">
      <div className="relative py-32 px-4 overflow-hidden">
          {/* Neon Background */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 animate-pulse delay-1000"></div>
          
          <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-300 text-sm font-medium backdrop-blur-md">
                  <Database size={16} /> Data Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                  Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Intelligence</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Unlock the hidden value in your data. Our enterprise analytics solutions provide the strategic oversight needed to outperform the competition.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-slate-950 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
                  Get Insights <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12">
              <div className={`bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors hover:border-blue-500/50 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} style={{ transitionDelay: '200ms' }}>
                  <BarChart2 className="text-blue-400 mb-6" size={40} />
                  <h3 className="text-2xl font-bold mb-4">Executive Dashboards</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                      Real-time visualization of KPIs. We build custom Tableau and Power BI dashboards that give leadership instant visibility into organizational health.
                  </p>
              </div>
              <div className={`bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors hover:border-purple-500/50 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '400ms' }}>
                  <Search className="text-purple-400 mb-6" size={40} />
                  <h3 className="text-2xl font-bold mb-4">Predictive Modeling</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                      Look ahead, not just behind. Use historical data to forecast trends, demand, and customer behavior with high accuracy using Machine Learning algorithms.
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DataAnalyticsSolutionPage;