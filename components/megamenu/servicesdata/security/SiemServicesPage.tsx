import React, { useEffect, useState } from 'react';
import { Activity, BarChart2, Eye, Shield, AlertOctagon, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SiemServicesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white">
      {/* Dashboard Hero */}
      <div className="relative py-24 px-4 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
         {/* Grid overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>

         <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                 <h1 className="text-4xl md:text-6xl font-bold mb-6">
                     SIEM & <span className="text-blue-500">SOC Services</span>
                 </h1>
                 <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                     Security Information and Event Management. We aggregate, analyze, and alert on data from across your enterprise to detect threats instantly.
                 </p>
                 <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center">
                     Deploy SIEM <ArrowRight className="ml-2" />
                 </Link>
             </div>

             {/* Animated Dashboard Visual */}
             <div className="md:w-1/2 w-full">
                 <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 overflow-hidden">
                     <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                         <span className="text-xs font-mono text-slate-400">LIVE MONITOR</span>
                         <div className="flex gap-2">
                             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                             <span className="text-xs text-green-500">Active</span>
                         </div>
                     </div>
                     <div className="space-y-2 font-mono text-xs">
                         <div className="flex justify-between text-red-400">
                             <span>[CRITICAL] Suspicious Login Attempt (IP 192.168.1.45)</span>
                             <span>10:42:01</span>
                         </div>
                         <div className="flex justify-between text-slate-500">
                             <span>[INFO] Firewall rule updated</span>
                             <span>10:41:55</span>
                         </div>
                         <div className="flex justify-between text-yellow-400">
                             <span>[WARN] High CPU Usage Server-02</span>
                             <span>10:41:30</span>
                         </div>
                         <div className="flex justify-between text-slate-500">
                             <span>[INFO] Backup completed successfully</span>
                             <span>10:40:12</span>
                         </div>
                         <div className="h-32 mt-4 bg-slate-800/50 rounded flex items-end gap-1 p-2">
                             {[40, 60, 30, 80, 50, 90, 20, 70, 45, 65, 30, 50, 70, 40, 60].map((h, i) => (
                                 <div key={i} className="flex-1 bg-blue-500/50 hover:bg-blue-400 transition-colors" style={{ height: `${h}%` }}></div>
                             ))}
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Eye, title: "24/7 Monitoring", desc: "Our Security Operations Center (SOC) watches your environment around the clock." },
                  { icon: Filter, title: "Log Correlation", desc: "We ingest logs from firewalls, servers, and endpoints to find patterns of attack." },
                  { icon: AlertOctagon, title: "Incident Response", desc: "Immediate triage and response when a credible threat is detected." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:bg-slate-800 transition-colors">
                      <item.icon className="text-blue-500 mb-6" size={32} />
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Supported Platforms */}
      <div className="bg-slate-900 py-20 text-center">
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">We Expertise In</h2>
              <div className="flex flex-wrap justify-center gap-4">
                  {["Splunk", "Elastic Security", "IBM QRadar", "Azure Sentinel", "Datadog", "AlienVault"].map((tool, i) => (
                      <span key={i} className="px-6 py-3 bg-slate-800 rounded-full border border-slate-700 text-slate-300 font-bold">
                          {tool}
                      </span>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default SiemServicesPage;