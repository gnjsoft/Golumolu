import React, { useEffect } from 'react';
import { Monitor, Command, Server, ArrowRight, ShieldCheck, Cpu, Box, Terminal, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesktopDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 text-slate-900 font-sans">
      
      {/* Workspace Hero */}
      <div className="relative bg-white border-b border-slate-200 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Power on the <br/>
                        <span className="text-blue-600">Desktop.</span>
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                       In an increasingly web-centric world, robust desktop applications continue to offer unparalleled performance, security, and user experience for businesses and individuals alike. These powerful software solutions provide dedicated functionality, often operating offline, integrating seamlessly with system hardware, and handling complex computational tasks with superior efficiency compared to browser-based alternatives. From specialized industry tools and enterprise resource planning systems to creative suites and high-demand data processing applications, custom desktop development delivers the precision and speed essential for mission-critical operations. For organizations seeking tailored solutions that maximize productivity and leverage system capabilities to their fullest, investing in expertly crafted desktop software is an enduring strategic advantage.
                    </p>
                    
                    <div className="flex gap-4">
                        <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                            Consult with us
                        </Link>
                    </div>
                </div>
                
                {/* Monitor Visual */}
                <div className="relative">
                    <div className="relative z-10 bg-slate-900 rounded-t-xl p-2 pb-0 shadow-2xl mx-auto max-w-xl">
                        <div className="bg-slate-800 h-8 rounded-t-lg flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="bg-slate-100 h-[300px] w-full rounded-b-sm relative overflow-hidden">
                            {/* Dashboard Mockup */}
                            <div className="flex h-full">
                                <div className="w-16 bg-slate-800 h-full flex flex-col items-center py-4 gap-4">
                                    <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                                    <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                                    <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                                </div>
                                <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-lg shadow-sm p-4 h-32"></div>
                                    <div className="bg-white rounded-lg shadow-sm p-4 h-32"></div>
                                    <div className="col-span-2 bg-white rounded-lg shadow-sm p-4 h-32"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Stand */}
                    <div className="h-16 w-32 bg-slate-300 mx-auto rounded-b-lg relative z-0 -mt-2 shadow-lg"></div>
                    <div className="h-4 w-48 bg-slate-400 mx-auto rounded-full mt-0 shadow-md"></div>
                </div>
            </div>
        </div>
      </div>

      {/* OS Compatibility Tabs Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
         <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100">
             {[
                 { title: "Windows", icon: Monitor, desc: ".NET, WPF, UWP", color: "text-blue-600" },
                 { title: "macOS", icon: Command, desc: "Swift, Cocoa", color: "text-slate-800" },
                 { title: "Linux", icon: Terminal, desc: "Electron, Qt", color: "text-orange-600" },
             ].map((os, idx) => (
                 <div key={idx} className="flex-1 p-6 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-default">
                     <div className={`p-3 bg-slate-100 rounded-xl ${os.color}`}>
                         <os.icon size={28} />
                     </div>
                     <div>
                         <h3 className="font-bold text-lg text-slate-900">{os.title}</h3>
                         <p className="text-sm text-slate-500">{os.desc}</p>
                     </div>
                 </div>
             ))}
         </div>
      </div>

      {/* Technical Deep Dive */}
      <div className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Why Desktop?</h2>
                <p className="text-slate-500 mt-2">When web applications aren't enough.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Cpu, title: "Hardware Access", text: "Direct control over serial ports, file systems, and peripherals." },
                    { icon: Server, title: "Offline First", text: "Full functionality without internet. Sync when connected." },
                    { icon: Box, title: "High Performance", text: "Utilize full GPU/CPU power for intensive tasks." },
                    { icon: ShieldCheck, title: "Enhanced Security", text: "Local encryption and sandboxed environments." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <item.icon className="text-slate-700 mb-4" size={32} strokeWidth={1.5} />
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
         </div>
      </div>

      {/* Tech Stack Dock */}
      <div className="bg-slate-100 py-20 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-12">Engineered with</h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Logos represented by text for this demo */}
                  <span className="text-xl font-bold flex items-center gap-2"><div className="w-8 h-8 bg-blue-500 rounded"></div> Electron</span>
                  <span className="text-xl font-bold flex items-center gap-2"><div className="w-8 h-8 bg-purple-600 rounded"></div> .NET MAUI</span>
                  <span className="text-xl font-bold flex items-center gap-2"><div className="w-8 h-8 bg-orange-500 rounded"></div> Rust</span>
                  <span className="text-xl font-bold flex items-center gap-2"><div className="w-8 h-8 bg-blue-800 rounded"></div> C++</span>
              </div>
          </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Need a heavy-duty solution?</h2>
            <Link to="/contact" className="inline-flex items-center bg-slate-900 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-600 transition-all">
                Start Development <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
      </div>
    </div>
  );
};

export default DesktopDevelopmentPage;