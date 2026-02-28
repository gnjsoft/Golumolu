import React, { useEffect, useState } from 'react';
import { Box, Layers, Monitor, Server, Shield, ArrowRight, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DotNetPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#512bd4] text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-[150px] opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="inline-flex items-center gap-2 bg-purple-800/50 border border-purple-400/30 px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-md">
                    <Box size={16} /> Enterprise Framework
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">.NET Development</h1>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                    Build anything. Securely and at scale. From web and mobile to microservices and cloud-native apps using the Microsoft ecosystem.
                </p>
                <Link to="/contact" className="bg-white text-[#512bd4] px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all shadow-lg inline-flex items-center">
                    Hire .NET Developers <ArrowRight className="ml-2" />
                </Link>
            </div>
            
            <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 w-full max-w-md shadow-2xl">
                    <div className="flex gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="font-mono text-sm space-y-2">
                        <div className="text-blue-300">using <span className="text-white">System;</span></div>
                        <div className="text-blue-300">namespace <span className="text-white">EnterpriseApp</span></div>
                        <div className="text-white">{`{`}</div>
                        <div className="pl-4 text-purple-300">public class <span className="text-yellow-300">Solution</span></div>
                        <div className="pl-4 text-white">{`{`}</div>
                        <div className="pl-8 text-green-300">// Scalable & Secure</div>
                        <div className="pl-8 text-blue-300">public void <span className="text-yellow-300">Build</span>()</div>
                        <div className="pl-8 text-white">{`{`}</div>
                        <div className="pl-12 text-white">Console.WriteLine(<span className="text-orange-300">"Success"</span>);</div>
                        <div className="pl-8 text-white">{`}`}</div>
                        <div className="pl-4 text-white">{`}`}</div>
                        <div className="text-white">{`}`}</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "ASP.NET Core", icon: Monitor, desc: "High-performance cross-platform web apps." },
                  { title: "Azure Cloud", icon: Server, desc: "Seamless integration with Microsoft Azure services." },
                  { title: "Enterprise Security", icon: Shield, desc: "Built-in identity management and compliance." },
                  { title: "Microservices", icon: Layers, desc: "Containerized applications with Docker and Kubernetes." },
                  { title: "Desktop Apps", icon: Code2, desc: "WPF and Windows Forms for powerful desktop tools." },
                  { title: "Cross-Platform", icon: Box, desc: ".NET MAUI for Android, iOS, macOS, and Windows." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                      <item.icon className="w-10 h-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default DotNetPage;