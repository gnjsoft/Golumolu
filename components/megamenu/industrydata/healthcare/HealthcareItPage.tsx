import React, { useEffect, useState } from 'react';
import { Activity, Database, Shield, Lock, Laptop, ArrowRight, Server, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcareItPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className={`md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Activity size={14} /> Healthcare Infrastructure
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Future-Ready <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Healthcare IT</span>
                </h1>
                <p className="text-xl text-cyan-100 mb-8 leading-relaxed max-w-xl">
                    Empowering providers with interoperable, secure, and scalable technology infrastructure designed for the modern patient experience.
                </p>
                <div className="flex gap-4">
                    <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center">
                        Transform Your IT <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </div>
            
            {/* Visual */}
            <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20"></div>
                    <Server size={240} className="text-white relative z-10 drop-shadow-2xl" strokeWidth={0.5} />
                    <div className="absolute top-0 right-0 bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-700 animate-bounce">
                        <Database className="text-cyan-400" size={32} />
                    </div>
                    <div className="absolute bottom-10 left-0 bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-700 animate-pulse delay-700">
                        <Shield className="text-green-400" size={32} />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
              <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Database, title: "EHR/EMR Integration", desc: "Seamless integration with Epic, Cerner, and custom health record systems ensuring full data interoperability.", delay: 100 },
                  { icon: Shield, title: "HIPAA Compliance", desc: "Rigorous security protocols and audit trails to ensure patient data privacy and regulatory adherence.", delay: 200 },
                  { icon: Laptop, title: "Telehealth Infrastructure", desc: "Robust, low-latency video conferencing and remote patient monitoring platforms.", delay: 300 },
                  { icon: Cloud, title: "Cloud Migration", desc: "Securely moving sensitive healthcare data to AWS, Azure, or private cloud environments.", delay: 400 },
                  { icon: Lock, title: "Cybersecurity", desc: "Proactive threat detection specifically tuned for healthcare environments and connected devices.", delay: 500 },
                  { icon: Activity, title: "Interoperability", desc: "HL7 and FHIR standard implementations to ensure systems talk to each other flawlessly.", delay: 600 }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 rounded-2xl border border-slate-100 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                      <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default HealthcareItPage;