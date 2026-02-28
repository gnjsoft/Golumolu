import React, { useEffect, useState } from 'react';
import { Cpu, Wifi, Activity, Settings, ArrowRight, Bluetooth, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicalDevicesPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-sans text-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-32 px-4 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="relative z-10 max-w-5xl mx-auto text-center">
             <div className={`transition-all duration-1000 transform ${loaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                 <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.6)]">
                     <Cpu size={40} className="text-white" />
                 </div>
             </div>
             <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight transition-all duration-700 delay-200 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                 IoMT & <span className="text-blue-500">Connected Devices</span>
             </h1>
             <p className={`text-xl text-slate-300 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                 Bridging the physical and digital worlds. We develop secure firmware, middleware, and cloud connectivity for next-gen medical hardware.
             </p>
             <div className={`transition-all duration-700 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                 <Link to="/contact" className="inline-flex items-center bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-blue-500 hover:text-white transition-all">
                     Start Development <ArrowRight className="ml-2" />
                 </Link>
             </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Cpu, title: "Embedded Systems", desc: "Reliable, real-time firmware development (C/C++, Rust) for diagnostic and therapeutic devices.", delay: 200 },
                  { icon: Wifi, title: "Secure Connectivity", desc: "End-to-end encrypted communication using BLE, Wi-Fi, and Cellular IoT protocols.", delay: 400 },
                  { icon: Activity, title: "Remote Monitoring", desc: "Cloud platforms that visualize patient vitals in real-time for clinicians and caregivers.", delay: 600 }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-600 transition-all duration-500 group transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                      <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                          <item.icon size={32} className="text-slate-300 group-hover:text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
          
          <div className="mt-32">
              <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-[3rem] p-12 border border-blue-800/30 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="md:w-1/2">
                      <h2 className="text-3xl font-bold mb-6">Tech Stack & Protocols</h2>
                      <div className="flex flex-wrap gap-3">
                          {["MQTT", "CoAP", "BLE 5.0", "Zigbee", "FreeRTOS", "Azure IoT Hub", "AWS IoT Core"].map((tech, i) => (
                              <span key={i} className="px-4 py-2 bg-black/40 rounded-lg border border-blue-500/30 text-blue-200 text-sm font-mono">
                                  {tech}
                              </span>
                          ))}
                      </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center gap-8 text-blue-500/50">
                      <Bluetooth size={64} className="animate-pulse" />
                      <Wifi size={64} className="animate-pulse delay-75" />
                      <Database size={64} className="animate-pulse delay-150" />
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MedicalDevicesPage;