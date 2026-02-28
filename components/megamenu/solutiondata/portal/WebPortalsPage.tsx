import React, { useEffect, useState } from 'react';
import { Globe, UserCheck, Shield, Key, Layout, ArrowRight, MousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebPortalsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-sans text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* Vortex Hero */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Animated Tunnel Background */}
          <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`absolute rounded-full border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-[2000ms] ease-out ${active ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                    style={{ 
                        width: `${(i + 1) * 300}px`, 
                        height: `${(i + 1) * 300}px`,
                        transitionDelay: `${i * 100}ms`,
                        transform: active ? `perspective(1000px) translateZ(${(i * 50)}px)` : 'perspective(1000px) translateZ(-500px)'
                    }}
                  ></div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          </div>

          <div className={`relative z-10 text-center max-w-4xl px-4 transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="inline-flex items-center justify-center p-4 rounded-full border border-cyan-500 bg-cyan-950/50 backdrop-blur-xl mb-8 shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                  <Globe size={48} className="text-cyan-400 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-400">
                  Web Portals
              </h1>
              <p className="text-xl text-cyan-100/70 max-w-2xl mx-auto mb-12 font-light">
                  Secure, personalized gateways connecting your business to customers, partners, and employees.
              </p>
              <div className="flex justify-center gap-6">
                  <Link to="/contact" className="group relative px-8 py-4 bg-cyan-600 text-white font-bold rounded-none skew-x-[-12deg] hover:bg-cyan-500 transition-colors">
                      <span className="block skew-x-[12deg]">Build Your Portal</span>
                      <div className="absolute inset-0 border border-white/20 skew-x-[-12deg] scale-105 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
              </div>
          </div>
      </div>

      {/* Holographic Cards */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Customer Portals", icon: UserCheck, desc: "Self-service hubs for support, billing, and account management." },
                  { title: "Partner Portals", icon: Shield, desc: "Secure data sharing and collaboration spaces for B2B relationships." },
                  { title: "Vendor Portals", icon: Layout, desc: "Streamlined procurement and supply chain interaction points." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`relative group bg-gray-900 border border-gray-800 p-8 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${300 + (idx * 150)}ms` }}
                  >
                      {/* Hologram Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                      
                      <item.icon className="text-cyan-500 mb-6 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all" size={40} />
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Feature Section with Scanning Line Animation */}
      <div className="border-t border-gray-900 bg-[#050505] py-24 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50 animate-[scan_3s_ease-in-out_infinite]"></div>
          
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                      <Key className="text-cyan-500" /> Secure Access
                  </h2>
                  <p className="text-gray-400 text-lg mb-8">
                      We prioritize security without compromising user experience. Role-based access control (RBAC), Single Sign-On (SSO), and encrypted data transmission ensure your portal is a fortress.
                  </p>
                  <ul className="space-y-4">
                      {["Multi-Factor Authentication", "Audit Logs & Tracking", "GDPR & HIPAA Compliance"].map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 text-cyan-100">
                              <div className="w-1.5 h-1.5 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div> {feat}
                          </li>
                      ))}
                  </ul>
              </div>
              
              <div className="relative border border-gray-800 bg-gray-900/50 rounded-xl p-8 backdrop-blur-sm">
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>
                  
                  <div className="space-y-6 font-mono text-sm text-cyan-300">
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                          <span>System_Status</span>
                          <span className="text-green-400">ONLINE</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                          <span>User_Session</span>
                          <span className="text-white">Active</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                          <span>Encryption</span>
                          <span className="text-white">AES-256</span>
                      </div>
                      <div className="p-4 bg-black/50 rounded border border-cyan-900/50 mt-4">
                          <span className="animate-pulse">_Access Granted</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="py-24 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 text-xl font-bold uppercase tracking-widest group transition-all">
              Initialize Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
      </div>
    </div>
  );
};

export default WebPortalsPage;