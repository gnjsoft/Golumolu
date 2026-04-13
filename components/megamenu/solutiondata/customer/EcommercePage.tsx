import React, { useEffect, useState } from 'react';
import { ShoppingBag, CreditCard, Truck, Smartphone, ArrowRight, Zap, Globe, Package, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcommercePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans overflow-hidden">
      
      {/* Vibrant Hero */}
      <div className="relative pt-24 pb-32 overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full blur-[150px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
              
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-200">
                      <ShoppingBag size={14} /> Next-Gen Commerce
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                      Sell Faster. <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Grow Bigger.</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                      Headless, scalable, and experience-driven ecommerce platforms designed to convert visitors into loyal customers.
                  </p>
                  <div className="flex gap-4">
                      <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 flex items-center">
                          Launch Store <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>

              {/* Floating Product Card Visual */}
              <div className={`relative perspective-1000 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
                      {/* Product Image Placeholder */}
                      <div className="absolute inset-0 bg-slate-100">
                          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover mix-blend-multiply" alt="Shoe" />
                      </div>
                      
                      {/* UI Overlays */}
                      <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">New Arrival</span>
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                              <TrendingUp size={20} className="text-slate-900" />
                          </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-6 border-t border-slate-100">
                          <div className="flex justify-between items-end mb-4">
                              <div>
                                  <h3 className="text-xl font-bold text-slate-900">Nike Air Max</h3>
                                  <p className="text-slate-500 text-sm">Running Collection</p>
                              </div>
                              <div className="text-2xl font-bold text-slate-900">₹10,770</div>
                          </div>
                          <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
                              Add to Cart
                          </button>
                      </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-12 bg-white p-4 rounded-2xl shadow-xl animate-float">
                      <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-lg text-green-600"><Truck size={20}/></div>
                          <div className="text-sm font-bold text-slate-800">Fast Delivery</div>
                      </div>
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                      <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><CreditCard size={20}/></div>
                          <div className="text-sm font-bold text-slate-800">Secure Pay</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Zap, title: "Blazing Fast", desc: "Sub-second load times with static generation and edge caching." },
                  { icon: Smartphone, title: "Mobile First", desc: "PWA capabilities for an app-like experience on the web." },
                  { icon: Globe, title: "Multi-Currency", desc: "Automatic localization for pricing, language, and tax." },
                  { icon: CreditCard, title: "Payment Orchestration", desc: "Connect Stripe, PayPal, and BNPL providers effortlessly." },
                  { icon: Package, title: "Inventory Sync", desc: "Real-time stock updates across all your sales channels." },
                  { icon: ShoppingBag, title: "Marketplace Ready", desc: "Multi-vendor capabilities to build your own Amazon." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Tech Stack Strip */}
      <div className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-slate-400 mb-8 uppercase tracking-widest text-sm font-bold">Powering Stores With</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                  {["Shopify Plus", "Magento", "BigCommerce", "WooCommerce", "Salesforce"].map((tech, i) => (
                      <span key={i} className="text-2xl font-bold hover:text-orange-400 hover:opacity-100 transition-all cursor-default">{tech}</span>
                  ))}
              </div>
          </div>
      </div>

    </div>
  );
};

export default EcommercePage;