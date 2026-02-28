import React, { useEffect, useState } from 'react';
import { Package, Scan, Layers, ArrowRight, Truck, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const WmsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-amber-500 text-white py-24 px-4 text-center overflow-hidden relative">
          <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block p-4 bg-white/20 rounded-xl mb-6 backdrop-blur-sm">
                  <Package size={48} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Warehouse Management</h1>
              <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-10 font-medium">
                  Optimize inventory, improve picking accuracy, and maximize space utilization with our advanced WMS.
              </p>
              <Link to="/contact" className="bg-white text-amber-600 font-bold py-3 px-8 rounded-lg hover:bg-amber-50 transition-colors inline-flex items-center shadow-lg">
                  Modernize Your Warehouse <ArrowRight className="ml-2" />
              </Link>
          </div>
          
          {/* Box animation */}
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl flex justify-between px-20 opacity-30 transition-all duration-1000 delay-500 ${active ? 'translate-y-0' : 'translate-y-full'}`}>
              <Package size={120} />
              <Package size={160} />
              <Package size={100} />
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className={`space-y-8 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <h2 className="text-3xl font-bold text-slate-900">Precision Logistics</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                      Manual processes lead to errors and delays. Our WMS automates workflows using barcode scanning, RFID, and intelligent routing logic to ensure the right product gets to the right place at the right time.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                      {[
                          { title: "Inventory Control", icon: Layers, desc: "Real-time stock tracking with cycle counting." },
                          { title: "Barcode & RFID", icon: Scan, desc: "Mobile scanning for error-free picking/packing." },
                          { title: "Shipping Integration", icon: Truck, desc: "Auto-generate labels and connect with carriers." }
                      ].map((item, idx) => (
                          <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                              <div className="bg-amber-100 p-3 rounded-lg text-amber-600 h-fit">
                                  <item.icon size={24} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                                  <p className="text-sm text-slate-600">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              <div className={`relative bg-slate-900 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b),linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b)] bg-[size:20px_20px] bg-[position:0_0,10px_10px] opacity-20"></div>
                  
                  {/* Scanner Visual */}
                  <div className="relative w-64 h-40 bg-white rounded-lg shadow-2xl flex flex-col items-center justify-center border-t-8 border-red-500 overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-[scan_2s_ease-in-out_infinite]"></div>
                      <Scan size={64} className="text-slate-800 mb-2" />
                      <div className="font-mono text-sm text-slate-500">Scanning...</div>
                  </div>
                  
                  <div className="mt-8 flex gap-4 text-white font-mono text-sm">
                      <div className="bg-green-600 px-3 py-1 rounded">MATCH</div>
                      <div className="bg-slate-700 px-3 py-1 rounded">SKU: 84920</div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default WmsPage;