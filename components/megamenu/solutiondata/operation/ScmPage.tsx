import React, { useEffect, useState } from 'react';
import { 
  Truck, Globe, Map, Package, ArrowRight, 
  BarChart2, Anchor, ShieldCheck, Zap, Layers, 
  Users, CheckCircle2, Clock, TrendingUp, 
  Cpu, Database, Shield, Layout, 
  FileText, DollarSign, Box, ShoppingCart,
  Briefcase, Search, Lightbulb, Activity,
  Eye, RefreshCw, Target, Link as LinkIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ScmPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden bg-indigo-350 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 to-indigo-950"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-3 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6 backdrop-blur-sm">
                      <Truck size={40} className="text-indigo-400" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Supply Chain Software Development
              </h1>
              <p className={`text-xl text-indigo-100/80 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Get a robust supply chain solution bound to your unique needs while ensuring optimized project costs and minimized implementation risks.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="bg-indigo-500 text-white hover:bg-indigo-400 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center group shadow-lg shadow-indigo-500/20">
                      Optimize Your Supply Chain <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h2 className="text-4xl font-bold mb-8">Innovating Business Operations with Supply Chain 4.0</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      Supply chain software development aims to help companies drive improvements across their supply chain processes and innovate business operations with the help of effective software and Supply Chain 4.0 techs.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                          { icon: Cpu, label: "IoT" },
                          { icon: Activity, label: "AI/ML" },
                          { icon: Database, label: "Big Data" },
                          { icon: ShieldCheck, label: "Blockchain" },
                          { icon: Layers, label: "AR & VR" }
                      ].map((tech, i) => (
                          <div key={i} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                              <tech.icon className="w-8 h-8 text-indigo-600 mb-3" />
                              <span className="font-bold text-sm text-slate-700">{tech.label}</span>
                          </div>
                      ))}
                  </div>
              </div>
              <div className={`relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-200 relative z-10">
                      <div className="space-y-6">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                              <h3 className="font-bold text-xl">Supply Chain Control Tower</h3>
                              <Globe className="text-indigo-500 animate-spin-slow" />
                          </div>
                          <div className="space-y-4">
                              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                  <div className="flex-grow">
                                      <div className="text-xs font-bold text-slate-400 uppercase">Real-time Visibility</div>
                                      <div className="text-sm font-bold">100% End-to-End Tracking</div>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                  <div className="flex-grow">
                                      <div className="text-xs font-bold text-slate-400 uppercase">Risk Management</div>
                                      <div className="text-sm font-bold">AI-Powered Proactive Alerts</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
              </div>
          </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-slate-100 py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-4xl font-bold mb-4">Supply Chain Solutions GnJ Worldwide Delivers</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">We offer full-cycle development services to plan and implement integrated supply chain software solutions.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {[
                      {
                        title: "Supply Chain Planning & Optimization",
                        icon: Target,
                        features: ["Demand forecasting", "AI-supported optimization recommendations", "Supply chain digital twin modeling"],
                        value: "Improved fulfillment, increased resource utilization, and synchronization."
                      },
                      {
                        title: "Supply Chain Risk Management",
                        icon: Shield,
                        features: ["Control tower with AI visibility", "Configurable KPI dashboards", "Collaborative issue resolution with suppliers"],
                        value: "End-to-end visibility, proactive risk management, and improved collaboration."
                      },
                      {
                        title: "Inventory & Warehouse Management",
                        icon: Box,
                        features: ["Barcode/RFID/CV tracking", "Optimal safety stock calculation", "Automated replenishment triggers"],
                        value: "Decreased carrying costs, increased speed/accuracy, and minimized loss."
                      },
                      {
                        title: "Logistics Management",
                        icon: Truck,
                        features: ["Freight tracking", "Route schedule optimization", "IoT product condition monitoring"],
                        value: "Improved vehicle utilization, decreased operating costs, on-time delivery."
                      },
                      {
                        title: "Procurement Management",
                        icon: ShoppingCart,
                        features: ["Template-based requisitions/RFxs", "Automated approval workflows", "Automated three-way matching"],
                        value: "Standardized purchasing and improved spend visibility."
                      },
                      {
                        title: "Supplier Relationship Management",
                        icon: Users,
                        features: ["Analytics-based pre-qualification", "Supplier portal for capacity planning", "Automatic compliance alerts"],
                        value: "Reduced regulatory risks and optimized sourcing strategy."
                      },
                      {
                        title: "Order Management",
                        icon: Layout,
                        features: ["Multichannel processing", "Analytics-based order routing", "AI-guided picking and packing"],
                        value: "Increased fill rate, reduced fulfillment costs, and customer satisfaction."
                      },
                      {
                        title: "Supply Chain Analytics",
                        icon: BarChart2,
                        features: ["KPI monitoring and reporting", "ML-based diagnostic analytics", "AI-powered prescriptions"],
                        value: "Accurate planning, minimized risks, and optimized costs."
                      }
                  ].map((solution, i) => (
                      <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-200 hover:border-indigo-500 transition-all group flex flex-col">
                          <div className="flex items-center gap-4 mb-6">
                              <div className="bg-indigo-50 p-3 rounded-2xl group-hover:bg-indigo-600 transition-colors">
                                  <solution.icon className="text-indigo-600 group-hover:text-white transition-colors" />
                              </div>
                              <h3 className="text-2xl font-bold">{solution.title}</h3>
                          </div>
                          <ul className="space-y-3 mb-8 flex-grow">
                              {solution.features.map((feature, j) => (
                                  <li key={j} className="flex items-start gap-3 text-slate-600">
                                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                      <span className="text-sm font-medium">{feature}</span>
                                  </li>
                              ))}
                          </ul>
                          <div className="mt-auto pt-6 border-t border-slate-100">
                              <div className="text-xs font-bold text-indigo-600 uppercase mb-2">Value Delivered</div>
                              <p className="text-sm text-slate-500 italic">{solution.value}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your supply chain?</h2>
                  <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                      Join the ranks of high-performing organizations that have turned their logistics into a strategic asset with Supply Chain 4.0.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-indigo-800 text-white border border-indigo-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-900 transition-all">
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
