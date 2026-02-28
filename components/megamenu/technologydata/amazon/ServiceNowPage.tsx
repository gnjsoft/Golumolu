import React, { useEffect, useState } from 'react';
import { Workflow, CheckCircle, Settings, ArrowRight, Users, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceNowPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#293E40] text-white py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                  <div className="inline-block p-4 bg-[#81B5A1]/20 rounded-2xl mb-6 backdrop-blur-md border border-[#81B5A1]/30">
                      <Workflow size={48} className="text-[#81B5A1]" />
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">ServiceNow</h1>
                  <p className="text-xl text-[#d1e8e0] max-w-2xl mx-auto mb-10">
                      The intelligent platform for digital transformation. Automate workflows across IT, Employee, and Customer experiences.
                  </p>
                  <Link to="/contact" className="bg-[#81B5A1] text-[#293E40] font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors inline-flex items-center">
                      Transform Workflows <ArrowRight className="ml-2" />
                  </Link>
              </div>
          </div>
          
          {/* Animated Background Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#81B5A1]/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#81B5A1]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Unified Service Delivery</h2>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      Break down silos. ServiceNow connects people, functions, and systems across your organization on a single cloud platform.
                  </p>
                  <div className="space-y-4">
                      {["IT Service Management (ITSM)", "IT Operations Management (ITOM)", "HR Service Delivery", "Customer Service Management"].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                              <CheckCircle className="text-[#293E40]" size={20} />
                              <span className="font-semibold text-slate-800">{item}</span>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="bg-[#f0fdf9] p-8 rounded-3xl border border-[#ccfbf1] relative">
                  <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-bold text-slate-700 text-sm">System Healthy</span>
                  </div>
                  <div className="space-y-6">
                      {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                      <Settings size={20} className="text-slate-500" />
                                  </div>
                                  <div>
                                      <div className="font-bold text-slate-800 text-sm">Incident INC00{i}84</div>
                                      <div className="text-xs text-slate-500">Server outage reported</div>
                                  </div>
                              </div>
                              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">In Progress</span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ServiceNowPage;