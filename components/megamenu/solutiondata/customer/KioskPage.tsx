import React, { useEffect, useState } from 'react';
import { Monitor, CreditCard, Map, Info, ArrowRight, Hand, MousePointer, Power } from 'lucide-react';
import { Link } from 'react-router-dom';

const KioskPage: React.FC = () => {
  const [active, setActive] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      
      {/* Interactive Hero */}
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-20">
          
          <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                  Interactive <br/> <span className="text-cyan-600">Kiosk Solutions</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Bridge the physical and digital worlds. Secure, touch-friendly interfaces for self-checkout, wayfinding, and digital signage.
              </p>
              
              <div className="space-y-4 mb-8">
                  {[
                      { icon: CreditCard, text: "Self-Service Payment" },
                      { icon: Map, text: "Interactive Wayfinding" },
                      { icon: Info, text: "Info Terminals" },
                      { icon: Monitor, text: "Digital Signage" }
                  ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-cyan-400 transition-colors cursor-default">
                          <item.icon className="text-cyan-600" size={24} />
                          <span className="font-bold text-slate-700 text-lg">{item.text}</span>
                      </div>
                  ))}
              </div>

              <Link to="/contact" className="bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-cyan-700 transition-colors inline-flex items-center shadow-lg hover:shadow-cyan-500/30">
                  Build Your Kiosk <ArrowRight className="ml-2" />
              </Link>
          </div>
          
          {/* Visual - The Kiosk */}
          <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="relative w-72 h-[550px] bg-slate-800 rounded-[2.5rem] border-8 border-slate-900 shadow-2xl flex flex-col p-2">
                  {/* Camera/Sensor Bar */}
                  <div className="h-6 w-full flex justify-center items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                      <div className="w-16 h-1 bg-slate-700 rounded-full"></div>
                  </div>

                  {/* Screen */}
                  <div 
                    className="flex-1 bg-white rounded-2xl overflow-hidden relative cursor-pointer group"
                    onClick={() => setTouched(true)}
                    onMouseLeave={() => setTouched(false)}
                  >
                      {/* UI Content */}
                      <div className="absolute inset-0 bg-cyan-500 flex flex-col items-center justify-center text-white p-6 text-center transition-all duration-300">
                          <div className={`transform transition-transform duration-500 ${touched ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}>
                              <Hand size={64} className="mb-6 mx-auto animate-bounce" />
                              <h3 className="text-3xl font-bold mb-2">Touch to Start</h3>
                              <p className="opacity-80">Welcome to GnJ Mall</p>
                          </div>
                      </div>

                      {/* Touched State (Menu) */}
                      <div className={`absolute inset-0 bg-white p-6 flex flex-col gap-4 transition-all duration-500 ${touched ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
                          <div className="h-8 bg-slate-100 rounded w-full mb-4"></div>
                          <div className="grid grid-cols-2 gap-4 h-full">
                              <div className="bg-cyan-100 rounded-xl"></div>
                              <div className="bg-slate-100 rounded-xl"></div>
                              <div className="bg-slate-100 rounded-xl"></div>
                              <div className="bg-slate-100 rounded-xl"></div>
                          </div>
                      </div>
                      
                      {/* Touch Ripple Effect */}
                      <div className={`absolute top-1/2 left-1/2 w-20 h-20 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ${touched ? 'scale-[3] opacity-0' : 'scale-0 opacity-0'}`}></div>
                  </div>
                  
                  {/* Bottom Chin */}
                  <div className="h-12 w-full flex items-center justify-center mt-2">
                      <div className="w-12 h-1 bg-slate-700 rounded-full"></div>
                  </div>
              </div>
              
              {/* Stand */}
              <div className="absolute -bottom-10 w-24 h-12 bg-slate-800 -z-10 rounded-b-lg"></div>
              <div className="absolute -bottom-14 w-48 h-4 bg-slate-900 -z-10 rounded-full shadow-xl"></div>
          </div>
      </div>

      <div className="bg-slate-900 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-12">Hardware Agnostic Software</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                      <Monitor className="mx-auto mb-4 text-cyan-400" size={40} />
                      <h3 className="font-bold mb-2">Windows / Linux</h3>
                      <p className="text-slate-400 text-sm">Robust performance for heavy applications.</p>
                  </div>
                  <div>
                      <div className="mx-auto mb-4 bg-cyan-400/20 w-fit p-2 rounded-full"><Power className="text-cyan-400" size={24} /></div>
                      <h3 className="font-bold mb-2">Android Kiosks</h3>
                      <p className="text-slate-400 text-sm">Cost-effective and versatile deployment.</p>
                  </div>
                  <div>
                      <MousePointer className="mx-auto mb-4 text-cyan-400" size={40} />
                      <h3 className="font-bold mb-2">iPad / iOS</h3>
                      <p className="text-slate-400 text-sm">Premium touch experience for retail.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default KioskPage;