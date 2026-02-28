import React, { useEffect, useState } from 'react';
import { ShoppingBag, Layers, Palette, ArrowRight, BarChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdobeCommercePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#EB1000] text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[size:20px_20px] opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Adobe Commerce</h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Formerly Magento. Create multi-channel commerce experiences for B2B and B2C customers on a single platform.
                  </p>
                  <Link to="/contact" className="bg-white text-[#EB1000] px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-lg inline-flex items-center">
                      Build Your Store <ArrowRight className="ml-2" />
                  </Link>
              </div>
              
              <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-md">
                      <div className="flex items-center justify-between mb-6">
                          <ShoppingBag size={32} className="text-[#EB1000]" />
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Sales +24%</span>
                      </div>
                      <div className="space-y-4">
                          <div className="h-32 bg-slate-100 rounded-xl relative overflow-hidden group cursor-pointer">
                              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Product" />
                              <div className="absolute bottom-2 left-2 bg-white/90 px-3 py-1 rounded text-xs font-bold text-slate-800">Smart Watch</div>
                          </div>
                          <div className="flex gap-4">
                              <div className="flex-1 bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                                  <div className="text-[#EB1000] font-bold text-lg">4.8</div>
                                  <div className="text-[10px] text-slate-500 uppercase">Rating</div>
                              </div>
                              <div className="flex-1 bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                                  <div className="text-slate-900 font-bold text-lg">1.2k</div>
                                  <div className="text-[10px] text-slate-500 uppercase">Orders</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Page Builder", icon: Palette, desc: "Drag-and-drop content creation for personalized shopping experiences." },
                  { title: "Business Intelligence", icon: BarChart, desc: "Advanced analytics to visualize data and optimize inventory." },
                  { title: "Scalability", icon: Zap, desc: "Cloud-native architecture that grows with your business spikes." },
                  { title: "B2B Features", icon: Layers, desc: "Custom catalogs, price lists, and requisition lists for enterprise buyers." },
                  { title: "Inventory Mgmt", icon: ShoppingBag, desc: "Multi-source inventory to sell and ship from anywhere." },
                  { title: "PWA Studio", icon: Layers, desc: "Build app-like mobile experiences directly for the web." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                      <item.icon className="w-10 h-10 text-[#EB1000] mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default AdobeCommercePage;