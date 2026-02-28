import React, { useEffect, useState } from 'react';
import { Zap, Server, Activity, ArrowRight, Cloud, Cpu, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const GolangPage: React.FC = () => {
  const [gopher, setGopher] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setGopher(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#00ADD8] text-white py-24 px-4 overflow-hidden relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="md:w-1/2">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Go Development</h1>
                  <p className="text-xl text-white/90 mb-8">
                      Simple, reliable, and efficient. Build scalable cloud services and high-performance systems with the language of the cloud.
                  </p>
                  <Link to="/contact" className="bg-white text-[#00ADD8] font-bold py-3 px-8 rounded-full hover:bg-cyan-50 transition-colors inline-flex items-center">
                      Go Fast <Zap className="ml-2" size={18} />
                  </Link>
              </div>
              <div className={`md:w-1/2 flex justify-center transition-all duration-1000 ${gopher ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  {/* Abstract Gopher Representation */}
                  <div className="w-64 h-64 bg-white/20 backdrop-blur-md rounded-full border-4 border-white/30 flex items-center justify-center relative">
                      <div className="absolute top-0 right-0 p-4 bg-white rounded-full shadow-lg animate-bounce">
                          <Cloud className="text-[#00ADD8]" size={32} />
                      </div>
                      <div className="text-center">
                          <div className="text-6xl font-black text-white">GO</div>
                          <div className="text-sm font-mono text-cyan-100">Compiled & Concurrent</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                  { icon: Cpu, title: "Concurrency", desc: "Goroutines allow handling thousands of requests simultaneously with minimal resources." },
                  { icon: Server, title: "Microservices", desc: "Perfect for distributed systems due to small footprint and fast startup." },
                  { icon: Box, title: "Cloud Native", desc: "The language behind Docker and Kubernetes. Built for the modern infrastructure." },
                  { icon: Activity, title: "Performance", desc: "Compiles to machine code for C-like speed with garbage collection safety." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-[#00ADD8]/50 transition-all group">
                      <item.icon className="w-10 h-10 text-slate-400 group-hover:text-[#00ADD8] mb-4 transition-colors" />
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default GolangPage;