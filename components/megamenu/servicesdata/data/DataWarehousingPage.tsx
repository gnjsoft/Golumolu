import React, { useEffect, useState } from 'react';
import { Database, Server, FolderArchive, ArrowRight, Layers, Lock, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataWarehousingPage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShow(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Immersive Server Background */}
      <div className="relative bg-black text-white py-32 px-4 overflow-hidden">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2070" 
                alt="Server Room" 
                className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         </div>
         
         <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             <div className="inline-block p-4 rounded-full border-2 border-cyan-500/50 bg-cyan-500/10 mb-8 backdrop-blur-md animate-pulse">
                 <Database size={48} className="text-cyan-400" />
             </div>
             <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                 Enterprise <span className="text-cyan-400">Data Warehousing</span>
             </h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                 Centralize your data sources into a single, scalable source of truth. Robust, secure, and ready for high-speed analysis.
             </p>
             <div className="flex justify-center gap-4">
                <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-lg transition-colors">
                    Consult an Architect
                </Link>
             </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-12">
              {[
                  { icon: Server, title: "Data Integration (ETL)", desc: "Seamlessly extract, transform, and load data from disparate sources." },
                  { icon: FolderArchive, title: "Data Lakes", desc: "Store structured and unstructured data at any scale for big data analytics." },
                  { icon: Cloud, title: "Cloud Migration", desc: "Move your on-premise warehouse to Snowflake, Redshift, or BigQuery." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-10 rounded-3xl shadow-xl border border-slate-100 hover:border-cyan-200 transition-all duration-700 hover:-translate-y-2 group ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${300 + (idx * 200)}ms` }}
                  >
                      <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Security Banner */}
      <div className="bg-slate-900 py-20 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
              <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 rounded-full"></div>
                  <Lock size={100} className="text-cyan-400 relative z-10" />
              </div>
              <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">Fort Knox for Your Data</h3>
                  <p className="text-slate-400 text-lg mb-8">
                      Our warehousing solutions are architected with enterprise-grade security, ensuring GDPR and HIPAA compliance. We implement role-based access control and end-to-end encryption.
                  </p>
                  <Link to="/contact" className="text-cyan-400 font-bold hover:text-cyan-300 inline-flex items-center text-lg">
                      Schedule a Security Audit <ArrowRight className="ml-2" />
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DataWarehousingPage;