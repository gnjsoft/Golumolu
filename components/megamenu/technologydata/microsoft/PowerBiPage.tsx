import React, { useEffect, useState } from 'react';
import { BarChart2, PieChart, TrendingUp, ArrowRight, Database, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const PowerBiPage: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setAnimate(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#F2C811] text-black py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="md:w-1/2">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Power BI</h1>
                  <p className="text-xl text-black/80 mb-8 leading-relaxed">
                      Bridge the gap between data and decision making. Create interactive, immersive dashboards and reports that provide actionable insights.
                  </p>
                  <Link to="/contact" className="bg-black text-[#F2C811] px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors inline-flex items-center">
                      Visualize Data <ArrowRight className="ml-2" />
                  </Link>
              </div>
              <div className="md:w-1/2">
                  <div className="bg-white p-6 rounded-xl shadow-2xl transform rotate-2">
                      <div className="flex gap-4 mb-4 border-b border-slate-100 pb-4">
                          <div className="w-1/2">
                              <div className="text-xs text-slate-500 mb-1">Sales</div>
                              <div className={`h-24 bg-yellow-400 rounded-t w-full transition-all duration-1000 ${animate ? 'scale-y-100' : 'scale-y-0 origin-bottom'}`}></div>
                          </div>
                          <div className="w-1/2">
                              <div className="text-xs text-slate-500 mb-1">Profit</div>
                              <div className={`h-16 bg-black rounded-t w-full transition-all duration-1000 delay-200 ${animate ? 'scale-y-100' : 'scale-y-0 origin-bottom'}`}></div>
                          </div>
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold">
                          <span>YoY Growth</span>
                          <span className="text-green-600">+24%</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Database, title: "Data Connectivity", desc: "Connect to hundreds of data sources on-premise and in the cloud." },
                  { icon: Layout, title: "Custom Dashboards", desc: "Tailored visualizations that fit your specific business KPIs." },
                  { icon: TrendingUp, title: "Predictive Analytics", desc: "Utilize built-in AI capabilities to forecast future trends." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                      <item.icon className="w-10 h-10 text-yellow-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default PowerBiPage;