import React, { useEffect, useState } from 'react';
import { Coffee, Server, Layers, Globe, ShieldCheck, ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const JavaPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#f89820] text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5382a1] to-[#f89820] opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Coffee size={32} className="text-[#f89820]" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Java Solutions</h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Write Once, Run Anywhere. The gold standard for robust, secure, and scalable enterprise applications.
                </p>
                <Link to="/contact" className="bg-white text-[#5382a1] px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-lg inline-flex items-center">
                    Build with Java <ArrowRight className="ml-2" />
                </Link>
            </div>
            <div className={`md:w-1/2 transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 relative">
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#f89820] rounded-full blur-xl opacity-60"></div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/90 p-4 rounded-xl text-[#5382a1] text-center">
                            <Server size={32} className="mx-auto mb-2" />
                            <span className="font-bold">Spring Boot</span>
                        </div>
                        <div className="bg-white/90 p-4 rounded-xl text-[#f89820] text-center">
                            <Globe size={32} className="mx-auto mb-2" />
                            <span className="font-bold">Microservices</span>
                        </div>
                        <div className="bg-white/90 p-4 rounded-xl text-[#f89820] text-center">
                            <Layers size={32} className="mx-auto mb-2" />
                            <span className="font-bold">Hibernate</span>
                        </div>
                        <div className="bg-white/90 p-4 rounded-xl text-[#5382a1] text-center">
                            <Cpu size={32} className="mx-auto mb-2" />
                            <span className="font-bold">Android</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">Why Enterprises Choose Java</h2>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Platform Independence", desc: "JVM allows applications to run on any device or operating system." },
                  { title: "Multithreading", desc: "Built-in support for multithreaded execution for high-performance apps." },
                  { title: "Security", desc: "Advanced security features including bytecode verification and sandboxing." },
                  { title: "Rich Ecosystem", desc: "Vast libraries, frameworks (Spring, Struts), and community support." },
                  { title: "Scalability", desc: "Proven capability to handle high traffic and massive data loads." },
                  { title: "Backend Power", desc: "The engine behind many of the world's largest banking and retail systems." }
              ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <div className="mt-1 text-[#f89820]"><ShieldCheck size={24} /></div>
                      <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default JavaPage;