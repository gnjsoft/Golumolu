import React, { useEffect, useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const CybersecurityPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                alt="Cybersecurity Shield" 
                className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center gap-12">
            <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <AlertTriangle size={14} /> Zero Trust Architecture
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Uncompromising <br/> <span className="text-blue-500">Cyber Defense</span>
                </h1>
                <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                    Protect your digital assets with our comprehensive security solutions. We predict, prevent, detect, and respond to threats in real-time.
                </p>
                <div className="flex gap-4">
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-500/40 flex items-center">
                        Secure Your Business <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </div>

            {/* Visual - Shield Animation */}
            <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative w-80 h-80">
                    {/* Pulsing Circles */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
                    <div className="absolute inset-4 bg-blue-500/20 rounded-full animate-pulse"></div>
                    
                    {/* Central Shield */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Shield size={180} className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    </div>
                    
                    {/* Orbiting Icons */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-slate-900 border border-slate-700 p-3 rounded-full shadow-xl animate-bounce">
                        <Lock size={24} className="text-green-400" />
                    </div>
                    <div className="absolute bottom-10 right-0 bg-slate-900 border border-slate-700 p-3 rounded-full shadow-xl animate-pulse">
                        <Eye size={24} className="text-red-400" />
                    </div>
                    <div className="absolute bottom-10 left-0 bg-slate-900 border border-slate-700 p-3 rounded-full shadow-xl">
                        <Server size={24} className="text-yellow-400" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Stats/Features Banner */}
      <div className="bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-center">
              {[
                  { label: "Threats Blocked", value: "10M+", color: "text-green-400" },
                  { label: "Uptime Guaranteed", value: "99.99%", color: "text-blue-400" },
                  { label: "Security Experts", value: "50+", color: "text-purple-400" }
              ].map((stat, idx) => (
                  <div key={idx}>
                      <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                      <div className="text-slate-400 uppercase tracking-widest text-sm">{stat.label}</div>
                  </div>
              ))}
          </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">360° Protection</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">From endpoint protection to cloud security, we cover every attack surface.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Endpoint Security", desc: "Secure all devices connecting to your network against malware and ransomware." },
                  { title: "Network Security", desc: "Next-gen firewalls and intrusion detection systems (IDS/IPS)." },
                  { title: "Cloud Security", desc: "Configuration audits and threat monitoring for AWS, Azure, and GCP." },
                  { title: "Identity Management", desc: "MFA, SSO, and privileged access management (PAM)." },
                  { title: "Data Protection", desc: "Encryption at rest and in transit with DLP (Data Loss Prevention)." },
                  { title: "Incident Response", desc: "24/7 rapid response team to contain and neutralize breaches." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
                      <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                          <CheckCircle size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default CybersecurityPage;