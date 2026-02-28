import React, { useEffect, useState } from 'react';
import { Truck, Map, Package, Clock, Navigation, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogisticsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="relative bg-blue-900 py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Transportation & Logistics</h1>
                  <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                      Optimize routes, track assets, and manage fleets with our precision logistics software.
                  </p>
              </div>
              <div className={`flex justify-center gap-4 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <div className="text-3xl font-bold text-green-400">98%</div>
                      <div className="text-xs uppercase">On-Time Delivery</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <div className="text-3xl font-bold text-yellow-400">-15%</div>
                      <div className="text-xs uppercase">Fuel Costs</div>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Map, title: "Route Optimization", desc: "AI algorithms to calculate the most efficient paths, saving fuel and time." },
                  { icon: Truck, title: "Fleet Management", desc: "Real-time tracking of vehicle health, driver behavior, and maintenance schedules." },
                  { icon: Package, title: "Warehouse Management", desc: "Automated inventory tracking, picking, and packing solutions (WMS)." },
                  { icon: Navigation, title: "Last Mile Delivery", desc: "Customer-facing tracking apps and proof of delivery systems." },
                  { icon: Clock, title: "Real-Time Visibility", desc: "Control towers providing end-to-end visibility of supply chain movement." },
                  { icon: BarChart, title: "Freight Analytics", desc: "Data insights to negotiate better rates and optimize carrier selection." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-700 border border-slate-100 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${300 + (idx * 100)}ms` }}
                  >
                      <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
          
          <div className={`mt-16 text-center transition-opacity duration-1000 delay-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
              <Link to="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-block">
                  Optimize Your Fleet
              </Link>
          </div>
      </div>
    </div>
  );
};

export default LogisticsPage;