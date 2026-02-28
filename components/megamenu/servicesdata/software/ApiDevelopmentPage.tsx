import React, { useEffect } from 'react';
import { Network, Share2, Shield, Lock, Zap, Database, ArrowRight, Code, Key, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApiDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#0D1117] min-h-screen pt-20 text-slate-300 font-mono">
      
      {/* Matrix/Code Hero */}
      <div className="relative py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-900/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <div className="text-green-500 font-bold mb-4 flex items-center gap-2">
                    <span className="animate-pulse">●</span> API Status: Operational
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Connect. <br/>
                    <span className="text-green-500">Integrate.</span> <br/>
                    Scale.
                </h1>
                <p className="text-lg text-slate-400 mb-8 max-w-md">
                    We architect high-performance APIs that serve as the backbone of your digital ecosystem. Secure, documented, and reliable.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500 transition-colors font-sans font-bold">
                    Start Integration <ArrowRight size={18} />
                </Link>
            </div>

            {/* Code Window Visual */}
            <div className="bg-[#161b22] rounded-lg border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm">
                <div className="bg-[#0d1117] p-3 border-b border-slate-700 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    </div>
                    <div className="text-slate-500 text-xs">GET /api/v1/business-growth</div>
                </div>
                <div className="p-6 overflow-x-auto">
                    <div className="text-purple-400">HTTP/1.1 200 OK</div>
                    <div className="text-slate-500 mb-4">Content-Type: application/json</div>
                    
                    <div className="text-yellow-300">{`{`}</div>
                    <div className="pl-4">
                        <span className="text-blue-400">"efficiency"</span>: <span className="text-green-400">"100%"</span>,
                    </div>
                    <div className="pl-4">
                        <span className="text-blue-400">"security"</span>: <span className="text-green-400">"enterprise-grade"</span>,
                    </div>
                    <div className="pl-4">
                        <span className="text-blue-400">"integrations"</span>: [
                    </div>
                    <div className="pl-8 text-orange-300">"CRM", "ERP", "Payment Gateways"</div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                        <span className="text-blue-400">"scalable"</span>: <span className="text-purple-400">true</span>
                    </div>
                    <div className="text-yellow-300">{`}`}</div>
                </div>
            </div>
        </div>
      </div>

      {/* Connection Nodes Layout */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white font-sans">Our API Solutions</h2>
             <div className="h-0.5 w-24 bg-green-600 mx-auto mt-4"></div>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
             {[
                 { title: "RESTful APIs", icon: Globe, desc: "Standard, stateless architecture for web services." },
                 { title: "GraphQL", icon: Share2, desc: "Flexible querying for complex data relationships." },
                 { title: "Microservices", icon: Network, desc: "Decoupled services for independent scaling." }
             ].map((item, idx) => (
                 <div key={idx} className="bg-[#161b22] p-8 rounded-xl border border-slate-800 hover:border-green-500/50 transition-colors group">
                     <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-green-500 group-hover:text-white group-hover:bg-green-600 transition-all">
                         <item.icon size={24} />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3 font-sans">{item.title}</h3>
                     <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                 </div>
             ))}
         </div>
      </div>

      {/* Security Section (Dark Contrast) */}
      <div className="bg-[#010409] py-24 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-white font-sans mb-6">Fortified Security</h2>
                      <p className="text-slate-400 mb-8">
                          Security isn't an afterthought. We implement industry-standard protocols to ensure your data pipeline is impenetrable.
                      </p>
                      <ul className="space-y-4 font-sans">
                          <li className="flex items-center gap-3">
                              <Shield className="text-green-500" size={20} />
                              <span className="text-slate-200">OAuth 2.0 & OpenID Connect</span>
                          </li>
                          <li className="flex items-center gap-3">
                              <Key className="text-green-500" size={20} />
                              <span className="text-slate-200">JWT Authentication</span>
                          </li>
                          <li className="flex items-center gap-3">
                              <Lock className="text-green-500" size={20} />
                              <span className="text-slate-200">End-to-End Encryption</span>
                          </li>
                          <li className="flex items-center gap-3">
                              <Zap className="text-green-500" size={20} />
                              <span className="text-slate-200">Rate Limiting & DDoS Protection</span>
                          </li>
                      </ul>
                  </div>
                  <div className="relative">
                      <div className="absolute inset-0 bg-green-500/10 blur-[50px] rounded-full"></div>
                      <Shield size={200} className="relative z-10 text-slate-800 mx-auto" strokeWidth={0.5} />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 font-bold text-2xl z-20">
                          SECURE
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Footer CTA */}
      <div className="py-20 text-center">
          <h2 className="text-3xl font-bold text-white font-sans mb-6">Ready to open your endpoints?</h2>
          <Link to="/contact" className="inline-block border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded font-bold transition-all font-sans">
              Talk to an API Architect
          </Link>
      </div>

    </div>
  );
};

export default ApiDevelopmentPage;