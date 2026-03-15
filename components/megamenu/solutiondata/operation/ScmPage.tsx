import React, { useEffect, useState } from 'react';
import { Truck, Globe, Map, Package, ArrowRight, BarChart2, Anchor, ShieldCheck, Zap, Layers, Users, CheckCircle2, Clock, TrendingUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScmPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-900 text-white py-24 px-4 overflow-hidden relative">
          {/* World Map Background Suggestion */}
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center opacity-10"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                  <div className="inline-block p-4 bg-indigo-800/50 rounded-full mb-6 border border-indigo-700 backdrop-blur-sm">
                      <Globe size={48} className="text-indigo-300" />
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Supply Chain Management</h1>
                  <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
                      End-to-end visibility from raw material to last-mile delivery. Resilience, speed, and sustainability.
                  </p>
                  <Link to="/contact" className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors inline-flex items-center shadow-lg">
                      Optimize Logistics <ArrowRight className="ml-2" />
                  </Link>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Truck, title: "Fleet Management", desc: "Real-time tracking, fuel optimization, and predictive maintenance for your vehicles." },
                  { icon: Map, title: "Route Planning", desc: "AI-driven algorithms to calculate the most efficient delivery paths and reduce costs." },
                  { icon: Package, title: "Inventory Visibility", desc: "Track stock levels across multiple warehouses and stores in real-time." },
                  { icon: Anchor, title: "Freight Forwarding", desc: "Digital documentation and tracking for ocean and air freight shipments." },
                  { icon: BarChart2, title: "Demand Forecasting", desc: "Predict future sales to optimize procurement and prevent stockouts." },
                  { icon: Globe, title: "Supplier Collaboration", desc: "Portals for vendors to manage orders, invoices, and performance." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-500 group transform ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <item.icon className="w-10 h-10 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
          
          <div className={`mt-24 bg-slate-900 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 delay-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
              <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Real-Time Control Tower</h2>
                  <p className="text-slate-400 mb-6 text-lg">
                      Gain a unified view of your entire supply chain. Monitor disruptions, track shipments, and make informed decisions instantly.
                  </p>
                  <ul className="space-y-3 text-slate-300">
                      <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Live Shipment Tracking</li>
                      <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Alert Management</li>
                      <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> KPI Dashboards</li>
                  </ul>
              </div>
              <div className="md:w-1/2 relative h-64 w-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  {/* Abstract Map UI */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
                  
                  <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-700"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full"></div>
                  
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <path d="M 150 80 Q 250 150 400 200" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  </svg>
                  
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-1 rounded text-xs text-green-400 border border-green-500/30">
                      Shipment #2938: On Time
                  </div>
              </div>
          </div>

          {/* Strategic Benefits Section */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Strategic SCM Benefits</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Transform your supply chain from a cost center into a competitive advantage with our advanced management solutions.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: <Zap className="text-yellow-500" />, title: "Increased Agility", desc: "Respond faster to market changes and supply disruptions with real-time data and AI insights." },
                      { icon: <ShieldCheck className="text-green-500" />, title: "Risk Mitigation", desc: "Identify potential vulnerabilities in your supply chain before they become critical failures." },
                      { icon: <TrendingUp className="text-blue-500" />, title: "Cost Efficiency", desc: "Reduce operational costs through optimized logistics, inventory, and procurement processes." },
                      { icon: <Users className="text-purple-500" />, title: "Supplier Synergy", desc: "Build stronger, more transparent relationships with your vendors through collaborative portals." },
                      { icon: <Layers className="text-indigo-500" />, title: "Seamless Integration", desc: "Connect your SCM with existing ERP and CRM systems for a unified enterprise view." },
                      { icon: <Clock className="text-orange-500" />, title: "Faster Fulfillment", desc: "Accelerate your order-to-delivery cycle with automated workflows and route optimization." }
                  ].map((benefit, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-indigo-50 transition-colors">
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
                  <p className="text-slate-600 max-w-2xl mx-auto">A structured approach to ensuring your SCM deployment is successful and delivers immediate value.</p>
              </div>
              
              <div className="relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
                  
                  <div className="grid md:grid-cols-4 gap-8 relative z-10">
                      {[
                          { step: "01", title: "Discovery", desc: "Mapping your current supply chain and identifying optimization opportunities." },
                          { step: "02", title: "Strategy", desc: "Designing a tailored SCM framework aligned with your business goals." },
                          { step: "03", title: "Integration", desc: "Connecting the SCM solution with your existing data sources and systems." },
                          { step: "04", title: "Execution", desc: "Rolling out the solution with staff training and continuous performance monitoring." }
                      ].map((item, idx) => (
                          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center">
                              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg">
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
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Tailored for Your Industry</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Our SCM solutions are flexible enough to meet the unique challenges of various sectors.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                  {[
                      { title: "Retail", desc: "Omnichannel fulfillment and inventory balancing across stores." },
                      { title: "Manufacturing", desc: "Just-in-time procurement and production line synchronization." },
                      { title: "Healthcare", desc: "Cold chain management and critical medical supply tracking." },
                      { title: "Logistics", desc: "Last-mile delivery optimization and multi-modal freight tracking." }
                  ].map((industry, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:border-indigo-200 transition-all">
                          <h4 className="font-bold text-slate-900 mb-2">{industry.title}</h4>
                          <p className="text-slate-500 text-sm">{industry.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Final CTA */}
          <div className="mt-32 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-[2rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your supply chain?</h2>
                  <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                      Join the ranks of high-performing organizations that have turned their logistics into a strategic asset.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
                          Get Started Today
                      </Link>
                      <Link to="/contact" className="bg-indigo-800 text-white border border-indigo-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-900 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ScmPage;