import React, { useEffect, useState } from 'react';
import { Truck, Globe, Map, Package, ArrowRight, BarChart2, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScmPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-900 text-white py-24 px-4 overflow-hidden relative">
          {/* World Map Background Suggestion */}
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center opacity-10"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                  <div className="inline-block p-4 bg-indigo-800/50 rounded-full mb-6 border border-indigo-700 backdrop-blur-sm">
                      <Globe size={48} className="text-indigo-300" />
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Supply Chain Management</h1>
                  <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
                      End-to-end visibility from raw material to last-mile delivery. Resilience, speed, and sustainability.
                  </p>
                  <Link to="/contact" className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors inline-flex items-center shadow-lg">
                      Optimize Logistics <ArrowRight className="ml-2" />
                  </Link>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Truck, title: "Fleet Management", desc: "Real-time tracking, fuel optimization, and predictive maintenance for your vehicles." },
                  { icon: Map, title: "Route Planning", desc: "AI-driven algorithms to calculate the most efficient delivery paths and reduce costs." },
                  { icon: Package, title: "Inventory Visibility", desc: "Track stock levels across multiple warehouses and stores in real-time." },
                  { icon: Anchor, title: "Freight Forwarding", desc: "Digital documentation and tracking for ocean and air freight shipments." },
                  { icon: BarChart2, title: "Demand Forecasting", desc: "Predict future sales to optimize procurement and prevent stockouts." },
                  { icon: Globe, title: "Supplier Collaboration", desc: "Portals for vendors to manage orders, invoices, and performance." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-500 group transform ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <item.icon className="w-10 h-10 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
          
          <div className={`mt-24 bg-slate-900 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 delay-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
              <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Real-Time Control Tower</h2>
                  <p className="text-slate-400 mb-6 text-lg">
                      Gain a unified view of your entire supply chain. Monitor disruptions, track shipments, and make informed decisions instantly.
                  </p>
                  <ul className="space-y-3 text-slate-300">
                      <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Live Shipment Tracking</li>
                      <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Alert Management</li>
                      <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> KPI Dashboards</li>
                  </ul>
              </div>
              <div className="md:w-1/2 relative h-64 w-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  {/* Abstract Map UI */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
                  
                  <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-700"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full"></div>
                  
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <path d="M 150 80 Q 250 150 400 200" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  </svg>
                  
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-1 rounded text-xs text-green-400 border border-green-500/30">
                      Shipment #2938: On Time
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ScmPage;