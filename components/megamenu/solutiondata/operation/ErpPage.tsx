import React, { useEffect, useState } from 'react';
import { Layers, Database, Users, BarChart, Globe, ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErpPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Layers size={14} /> Unified Business Logic
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Enterprise Resource <span className="text-blue-500">Planning</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Integrate your core business processes into a single, reliable system. From finance to supply chain, gain visibility and control.
                </p>
                <div className="flex gap-4">
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center">
                        Deploy ERP <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </div>
            
            <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative w-96 h-96">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse blur-3xl"></div>
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center justify-center aspect-square transform translate-y-8">
                            <Users size={40} className="text-green-400 mb-2" />
                            <span className="font-bold">HR & Payroll</span>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center justify-center aspect-square">
                            <BarChart size={40} className="text-yellow-400 mb-2" />
                            <span className="font-bold">Finance</span>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center justify-center aspect-square transform translate-y-8">
                            <Settings size={40} className="text-purple-400 mb-2" />
                            <span className="font-bold">Operations</span>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center justify-center aspect-square">
                            <Globe size={40} className="text-blue-400 mb-2" />
                            <span className="font-bold">Supply Chain</span>
                        </div>
                    </div>
                    {/* Connecting center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-900 rounded-full border-4 border-slate-700 z-20 flex items-center justify-center shadow-2xl">
                        <Database size={32} className="text-white" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Financial Management", desc: "General ledger, accounts payable/receivable, and fixed asset management in real-time." },
                  { title: "Human Capital", desc: "Recruitment, onboarding, payroll processing, and performance management modules." },
                  { title: "Procurement", desc: "Automated purchasing workflows, vendor management, and inventory optimization." },
                  { title: "Sales & CRM", desc: "Integrated customer data, order processing, and sales forecasting tools." },
                  { title: "Manufacturing", desc: "Production planning, bill of materials (BOM), and shop floor control." },
                  { title: "Business Intelligence", desc: "Built-in reporting and analytics dashboards for data-driven decision making." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group transform ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full group-hover:w-20 transition-all duration-300"></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ErpPage;