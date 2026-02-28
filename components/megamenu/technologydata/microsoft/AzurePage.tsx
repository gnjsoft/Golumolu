import React, { useEffect, useState } from 'react';
import { Cloud, Server, Shield, Database, ArrowRight, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AzurePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#0078D4] text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px] opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-md">
                    <Cloud size={16} /> Microsoft Cloud
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Microsoft Azure</h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    Build, run, and manage applications across multiple clouds, on-premises, and at the edge, with the tools and frameworks of your choice.
                </p>
                <Link to="/contact" className="bg-white text-[#0078D4] px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg inline-flex items-center">
                    Migrate to Azure <ArrowRight className="ml-2" />
                </Link>
            </div>
            
            <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative">
                    <Cloud size={240} className="text-white opacity-90" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0078D4]">
                        <Server size={80} />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "App Service", icon: Globe, desc: "Build and host web apps, mobile backends, and RESTful APIs." },
                  { title: "Azure SQL", icon: Database, desc: "Managed, intelligent SQL in the cloud with AI-powered features." },
                  { title: "Security Center", icon: Shield, desc: "Unified infrastructure security management system." },
                  { title: "Functions", icon: Zap, desc: "Event-driven serverless compute platform." },
                  { title: "Kubernetes Service", icon: Server, desc: "Deploy and manage containerized applications more easily." },
                  { title: "Cognitive Services", icon: Cloud, desc: "Infuse your apps with AI algorithms to see, hear, speak, and understand." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                      <item.icon className="w-10 h-10 text-[#0078D4] mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default AzurePage;