import React, { useEffect, useState } from 'react';
import { Activity, ShieldCheck, Server, ArrowRight, Radio, RefreshCw, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManagedItServicesPage: React.FC = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-emerald-900 text-white py-24 px-4 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-800/20 skew-x-12 transform origin-top-right"></div>
         
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
             <div className="md:w-1/2">
                 <div className="flex items-center gap-2 text-emerald-400 font-mono mb-4">
                     <Activity size={20} className="animate-pulse" /> System Status: Optimal
                 </div>
                 <h1 className="text-5xl font-bold mb-6">Managed IT Services</h1>
                 <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                     Proactive monitoring, maintenance, and support. We keep your systems running smoothly so you can focus on business.
                 </p>
                 <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center shadow-lg">
                     Get a Quote <ArrowRight className="ml-2" />
                 </Link>
             </div>

             {/* Radar Animation */}
             <div className="md:w-1/2 flex justify-center">
                 <div className="relative w-80 h-80 bg-emerald-950 rounded-full border border-emerald-800 flex items-center justify-center">
                     <div className={`absolute inset-0 border-4 border-emerald-500/30 rounded-full ${pulse ? 'scale-110 opacity-0' : 'scale-100 opacity-100'} transition-all duration-1000`}></div>
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent w-full h-full rounded-full animate-spin-slow"></div>
                     
                     <div className="relative z-10 text-center">
                         <div className="text-4xl font-bold text-white">24/7</div>
                         <div className="text-emerald-400 text-sm tracking-wider uppercase">Monitoring</div>
                     </div>

                     {/* Blips */}
                     <div className="absolute top-10 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                     <div className="absolute bottom-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-700"></div>
                 </div>
             </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700"><ShieldCheck size={24}/></div>
                      <h3 className="text-xl font-bold text-slate-900">Security Management</h3>
                  </div>
                  <p className="text-slate-600">Patch management, antivirus updates, and threat monitoring to keep your network secure.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700"><Server size={24}/></div>
                      <h3 className="text-xl font-bold text-slate-900">Server & Network</h3>
                  </div>
                  <p className="text-slate-600">Uptime monitoring, performance optimization, and regular backups for business continuity.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700"><RefreshCw size={24}/></div>
                      <h3 className="text-xl font-bold text-slate-900">Preventative Maintenance</h3>
                  </div>
                  <p className="text-slate-600">Routine health checks and cleanup to prevent issues before they cause downtime.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700"><BarChart size={24}/></div>
                      <h3 className="text-xl font-bold text-slate-900">Reporting & Strategy</h3>
                  </div>
                  <p className="text-slate-600">Monthly reports on system health and strategic advice for future IT investments.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ManagedItServicesPage;