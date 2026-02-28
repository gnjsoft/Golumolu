import React, { useEffect, useState } from 'react';
import { BarChart2, PieChart, TrendingUp, ArrowRight, Search, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalyticsPage: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setAnimate(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Hero Section with Image Background */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
                alt="Data Analytics Background" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-widest mb-6 backdrop-blur-sm transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <BarChart2 size={16} /> Data-Driven Decisions
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Advanced Data Analytics
            </h1>
            <p className={`text-xl text-blue-100 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform raw numbers into actionable business insights. We help you make decisions backed by data, not guesswork.
            </p>
            <div className={`transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link to="/contact" className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                    Start Analyzing <ArrowRight className="ml-2" />
                </Link>
            </div>
        </div>
      </div>

      {/* Glassmorphism Services Grid */}
      <div className="bg-slate-50 py-24 relative">
          <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: FileText, title: "Descriptive Analytics", desc: "Understand what happened in the past with comprehensive reporting and dashboards.", delay: 400 },
                      { icon: TrendingUp, title: "Predictive Analytics", desc: "Forecast future trends using historical data and statistical modeling.", delay: 500 },
                      { icon: PieChart, title: "Prescriptive Analytics", desc: "Get recommendations on possible outcomes and best courses of action.", delay: 600 }
                  ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 group ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                        style={{ transitionDelay: `${item.delay}ms` }}
                      >
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                              <item.icon size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 mt-24 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">Uncover Hidden Value</h2>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                      Data is the new oil, but it's useless if you can't refine it. Our advanced analytics solutions help you clean, process, and visualize your data to uncover hidden patterns and opportunities.
                  </p>
                  <ul className="space-y-4">
                      {["Real-time Dashboards", "Customer Behavior Analysis", "Operational Efficiency Tracking"].map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 font-bold text-slate-800 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Search size={16} /></div>
                              {feat}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="flex-1 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" alt="Analytics Dashboard" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-blue-900/10 hover:bg-transparent transition-colors"></div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DataAnalyticsPage;