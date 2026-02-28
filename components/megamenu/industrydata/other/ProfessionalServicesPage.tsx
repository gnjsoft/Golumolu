import React, { useEffect, useState } from 'react';
import { Briefcase, FileText, Users, Clock, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfessionalServicesPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-16">
          <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">Professional Services Automation</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  For law firms, consulting agencies, and HR departments. We build software that manages time, talent, and billing so you can focus on your clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded text-blue-600"><Briefcase size={20}/></div>
                      <span className="font-medium text-slate-800">Legal Tech</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded text-green-600"><Users size={20}/></div>
                      <span className="font-medium text-slate-800">HR Tech</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded text-purple-600"><FileText size={20}/></div>
                      <span className="font-medium text-slate-800">Accounting</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <div className="bg-orange-100 p-2 rounded text-orange-600"><Globe size={20}/></div>
                      <span className="font-medium text-slate-800">Consulting</span>
                  </div>
              </div>
              <div className="mt-10">
                  <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 text-lg">
                      Streamline Operations <ArrowRight className="ml-2" />
                  </Link>
              </div>
          </div>
          
          <div className={`md:w-1/2 relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="bg-slate-100 rounded-2xl p-8 shadow-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
                      <div className="font-bold text-slate-700">Project: Alpha</div>
                      <div className="text-green-600 font-medium text-sm bg-green-50 px-2 py-1 rounded">On Track</div>
                  </div>
                  <div className="space-y-6">
                      <div>
                          <div className="flex justify-between text-sm mb-1">
                              <span className="text-slate-500">Resource Utilization</span>
                              <span className="text-slate-900 font-bold">87%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full"><div className="h-full w-[87%] bg-blue-500 rounded-full animate-[shimmer_2s_infinite]"></div></div>
                      </div>
                      <div>
                          <div className="flex justify-between text-sm mb-1">
                              <span className="text-slate-500">Budget Consumed</span>
                              <span className="text-slate-900 font-bold">45%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full"><div className="h-full w-[45%] bg-green-500 rounded-full"></div></div>
                      </div>
                      <div className="flex items-center justify-between pt-4">
                          <div className="flex -space-x-2">
                              {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>)}
                          </div>
                          <Clock className="text-slate-400" size={20} />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProfessionalServicesPage;