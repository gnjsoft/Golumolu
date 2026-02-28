import React, { useEffect, useState } from 'react';
import { Factory, Cog, Cpu, Truck, BarChart3, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManufacturingPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-orange-600 text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-multiply"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 border border-orange-400 bg-orange-700/50 px-4 py-1 rounded-full text-sm font-bold mb-6">
                      <Factory size={16} /> Industry 4.0
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Smart <br/>Manufacturing</h1>
                  <p className="text-xl text-orange-100 mb-8 max-w-lg">
                      Connecting machines, data, and people. innovative IIoT solutions to optimize production lines and predict maintenance.
                  </p>
                  <Link to="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors inline-flex items-center shadow-lg">
                      Modernize Your Plant <ArrowRight className="ml-2" />
                  </Link>
              </div>
              
              <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="relative w-80 h-80">
                      <Cog size={200} className="text-orange-300 absolute top-0 left-0 animate-[spin_10s_linear_infinite]" />
                      <Cog size={140} className="text-white/20 absolute bottom-4 right-4 animate-[spin_8s_linear_infinite_reverse]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center">
                              <div className="text-3xl font-bold">85%</div>
                              <div className="text-sm">OEE Score</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Cpu, title: "Industrial IoT", desc: "Sensor integration for real-time machine monitoring and data collection." },
                  { icon: Layers, title: "Digital Twins", desc: "Virtual replicas of physical systems to simulate and optimize performance." },
                  { icon: Truck, title: "Supply Chain Visibility", desc: "End-to-end tracking of raw materials and finished goods." },
                  { icon: BarChart3, title: "Predictive Maintenance", desc: "AI algorithms that forecast equipment failures before they occur." },
                  { icon: Factory, title: "MES Implementation", desc: "Manufacturing Execution Systems to control production workflows." },
                  { icon: Cog, title: "Automation", desc: "Robotics process automation (RPA) for back-office and floor operations." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <item.icon className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ManufacturingPage;