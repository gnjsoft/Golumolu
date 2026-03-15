import React, { useEffect, useState } from 'react';
import { Package, Scan, Layers, ArrowRight, Truck, Database, ShieldCheck, Zap, Users, CheckCircle2, Clock, TrendingUp, HelpCircle, LayoutGrid, BarChart3 } from 'lucide-react';
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

          {/* Strategic Benefits Section */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Strategic WMS Benefits</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Transform your warehouse into a high-efficiency fulfillment engine with our specialized management tools.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: <TrendingUp className="text-amber-600" />, title: "99.9% Accuracy", desc: "Virtually eliminate picking errors and mis-shipments with digital verification at every step." },
                      { icon: <Zap className="text-yellow-500" />, title: "Faster Fulfillment", desc: "Reduce order-to-shipment time by optimizing picking paths and automating label generation." },
                      { icon: <LayoutGrid className="text-blue-500" />, title: "Space Optimization", desc: "Maximize your storage capacity with intelligent slotting and put-away algorithms." },
                      { icon: <BarChart3 className="text-indigo-600" />, title: "Real-time Visibility", desc: "Know exactly what you have and where it is across multiple locations instantly." },
                      { icon: <ShieldCheck className="text-green-500" />, title: "Loss Prevention", desc: "Reduce shrinkage and inventory discrepancies through strict digital tracking and audits." },
                      { icon: <Users className="text-purple-500" />, title: "Labor Efficiency", desc: "Improve staff productivity with clear digital task assignments and performance tracking." }
                  ].map((benefit, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-amber-50 transition-colors">
                              {benefit.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Implementation Roadmap */}
          <div className="mt-32 bg-slate-50 rounded-[3rem] p-12 md:p-20">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Implementation Roadmap</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">A structured approach to digitizing your warehouse operations without disrupting your current business.</p>
              </div>
              
              <div className="relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
                  
                  <div className="grid md:grid-cols-4 gap-8 relative z-10">
                      {[
                          { step: "01", title: "Audit", desc: "Analyzing your current warehouse layout and physical inventory processes." },
                          { step: "02", title: "Mapping", desc: "Designing digital workflows and bin locations within the WMS environment." },
                          { step: "03", title: "Hardware", desc: "Setting up scanners, printers, and network infrastructure for the facility." },
                          { step: "04", title: "Training", desc: "Hands-on staff training and go-live support to ensure a smooth transition." }
                      ].map((item, idx) => (
                          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center">
                              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg">
                                  {item.step}
                              </div>
                              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                              <p className="text-slate-600 text-sm">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Industry Applications */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Industry Use Cases</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Our WMS is versatile enough to handle the specific requirements of various business models.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                  {[
                      { title: "E-commerce", desc: "High-volume picking and seamless integration with online storefronts." },
                      { title: "3PL Providers", desc: "Multi-tenant inventory management and client-specific billing." },
                      { title: "Manufacturing", desc: "Raw material tracking and production line replenishment." },
                      { title: "Food & Beverage", desc: "Expiry date tracking, FEFO picking, and cold storage management." }
                  ].map((industry, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:border-amber-200 transition-all">
                          <h4 className="font-bold text-slate-900 mb-2">{industry.title}</h4>
                          <p className="text-slate-500 text-sm">{industry.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Final CTA */}
          <div className="mt-32 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to optimize your fulfillment?</h2>
                  <p className="text-xl text-amber-100 mb-10 leading-relaxed">
                      Stop losing money to inventory errors and slow picking. Modernize your warehouse with our advanced WMS today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-amber-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all shadow-xl">
                          Get a Free Audit
                      </Link>
                      <Link to="/contact" className="bg-amber-700 text-white border border-amber-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-800 transition-all">
                          Talk to a Specialist
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default WmsPage;