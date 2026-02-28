import React, { useEffect, useState } from 'react';
import { Wifi, Cpu, Globe, Activity, Smartphone, ArrowRight, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternetOfThingsPage: React.FC = () => {
  const [pulse, setPulse] = useState(false);
  useEffect(() => { 
    window.scrollTo(0, 0); 
    const interval = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-emerald-950 min-h-screen pt-20 font-sans text-emerald-50">
      <div className="relative py-24 px-4 text-center overflow-hidden">
          {/* Animated Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`w-[600px] h-[600px] border border-emerald-500/20 rounded-full transition-all duration-1000 ${pulse ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`w-[400px] h-[400px] border border-emerald-500/40 rounded-full transition-all duration-1000 delay-300 ${pulse ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-block p-4 bg-emerald-900 rounded-full mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  <Wifi size={48} className="text-emerald-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Internet of Things</h1>
              <p className="text-xl text-emerald-200 mb-10 max-w-2xl mx-auto">
                  Connecting the physical world to the digital realm. Smart devices, sensors, and seamless connectivity.
              </p>
              <Link to="/contact" className="bg-emerald-500 text-black font-bold py-3 px-8 rounded-full hover:bg-emerald-400 transition-colors inline-flex items-center">
                  Connect Your Devices <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Cpu, title: "Edge Computing", desc: "Processing data locally on the device for low latency and reduced bandwidth." },
                  { icon: Globe, title: "Connectivity Protocols", desc: "MQTT, CoAP, Zigbee, LoRaWAN integration for reliable data transmission." },
                  { icon: Smartphone, title: "Device Management", desc: "Centralized platforms to provision, monitor, and update millions of devices." },
                  { icon: Activity, title: "Industrial IoT (IIoT)", desc: "Predictive maintenance and asset tracking for manufacturing and logistics." },
                  { icon: Radio, title: "Smart Home", desc: "Consumer IoT solutions for automation, security, and energy management." },
                  { icon: Wifi, title: "Wearables", desc: "Health and fitness tracking integration with mobile and cloud backends." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-emerald-900/50 p-8 rounded-xl border border-emerald-800 hover:bg-emerald-900 transition-colors">
                      <item.icon className="text-emerald-400 mb-4" size={32} />
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-emerald-200/80">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default InternetOfThingsPage;