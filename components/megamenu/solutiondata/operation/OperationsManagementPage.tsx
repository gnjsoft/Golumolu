import React, { useEffect, useState } from 'react';
import { Settings, RefreshCw, ClipboardCheck, ArrowRight, Activity, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationsManagementPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className={`text-center mb-20 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6 text-slate-900">
                  <Settings size={48} className="animate-spin-slow" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Operations Management</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Optimize workflows, reduce waste, and improve efficiency. Our software solutions give you granular control over your daily business activities.
              </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`bg-white p-8 rounded-3xl shadow-xl border border-slate-200 transition-all duration-1000 delay-300 transform ${active ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                  <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                      <h3 className="font-bold text-lg text-slate-800">Operational Efficiency</h3>
                      <div className="flex gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-400"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                          <span className="w-3 h-3 rounded-full bg-green-400"></span>
                      </div>
                  </div>
                  <div className="space-y-6">
                      <div>
                          <div className="flex justify-between text-sm mb-1 font-medium text-slate-600">
                              <span>Resource Utilization</span>
                              <span>92%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-3">
                              <div className="bg-blue-600 h-3 rounded-full w-[92%] transition-all duration-1000 ease-out" style={{ width: active ? '92%' : '0%' }}></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex justify-between text-sm mb-1 font-medium text-slate-600">
                              <span>Process Cycle Time</span>
                              <span className="text-green-600">-15%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-3">
                              <div className="bg-green-500 h-3 rounded-full w-[85%] transition-all duration-1000 ease-out delay-200" style={{ width: active ? '85%' : '0%' }}></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex justify-between text-sm mb-1 font-medium text-slate-600">
                              <span>Output Quality</span>
                              <span>99.8%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-3">
                              <div className="bg-purple-600 h-3 rounded-full w-[99%] transition-all duration-1000 ease-out delay-400" style={{ width: active ? '99%' : '0%' }}></div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={`space-y-8 transition-all duration-1000 delay-500 transform ${active ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                  {[
                      { icon: RefreshCw, title: "Process Automation", desc: "Eliminate manual data entry and repetitive tasks with intelligent workflow automation." },
                      { icon: ClipboardCheck, title: "Quality Management", desc: "Digital checklists, audits, and CAPA systems to ensure consistent standards." },
                      { icon: TrendingUp, title: "Capacity Planning", desc: "Forecast demand and allocate resources effectively to prevent bottlenecks." }
                  ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                          <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <item.icon size={28} />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-slate-600">{item.desc}</p>
                          </div>
                      </div>
                  ))}
                  
                  <div className="pt-4">
                      <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition-colors">
                          Streamline Operations <ArrowRight className="ml-2" size={18}/>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default OperationsManagementPage;