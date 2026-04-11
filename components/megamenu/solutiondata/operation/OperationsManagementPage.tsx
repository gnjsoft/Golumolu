import React, { useEffect, useState } from 'react';
import { 
  Settings, RefreshCw, ClipboardCheck, ArrowRight, 
  Activity, TrendingUp, Zap, Shield, BarChart3, 
  Users, Target, Layers, Globe, CheckCircle2,
  Cpu, Database, ShieldCheck, Layout, 
  FileText, Clock, DollarSign, Box, ShoppingCart,
  Briefcase, Search, Lightbulb, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationsManagementPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden bg-blue-950 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-blue-950"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-3 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6 backdrop-blur-sm">
                      <Settings size={40} className="text-blue-400 animate-spin-slow" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Digital Operations Consulting
              </h1>
              <p className={`text-xl text-blue-100/80 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Streamline production or service execution and reduce related costs. Our services cover technical design, implementation, and continuous support of operations management software.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center group shadow-lg shadow-blue-500/20">
                      Optimize Your Operations <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </div>
      </div>

      {/* OMS Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h2 className="text-4xl font-bold mb-8 text-slate-900">We deliver operations management software (OMS) that helps:</h2>
                  <div className="space-y-4">
                      {[
                          { icon: Eye, text: "Improve decision-making by enabling high visibility into operational workflows." },
                          { icon: Clock, text: "Reduce reporting latency due to automated analysis of operational data." },
                          { icon: Box, text: "Reduce inventory costs by monitoring inventory levels and sending automated alerts." },
                          { icon: Users, text: "Improve resource utilization with minimized risks of over- or underutilization." },
                          { icon: Activity, text: "Reduce risks of operations bottlenecks by monitoring operations in real time." },
                          { icon: Settings, text: "Raise machinery efficiency due to automated equipment maintenance management." },
                          { icon: RefreshCw, text: "Improve workflow coordination between functions thanks to collaboration tools." }
                      ].map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                              <div className="mt-1 bg-blue-50 p-2 rounded-lg">
                                  <item.icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <p className="text-slate-700 font-medium">{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <div className={`relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-200 relative z-10">
                      <div className="space-y-8">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                              <h3 className="font-bold text-xl">Operational Dashboard</h3>
                              <Activity className="text-blue-500 animate-pulse" />
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                              <div className="bg-slate-50 p-6 rounded-3xl text-center">
                                  <div className="text-3xl font-bold text-blue-600 mb-1">94%</div>
                                  <div className="text-xs text-slate-500 uppercase font-bold">Efficiency</div>
                              </div>
                              <div className="bg-slate-50 p-6 rounded-3xl text-center">
                                  <div className="text-3xl font-bold text-green-600 mb-1">-22%</div>
                                  <div className="text-xs text-slate-500 uppercase font-bold">Waste</div>
                              </div>
                          </div>
                          <div className="space-y-4">
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-blue-500 w-3/4 animate-pulse"></div>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-indigo-500 w-1/2 animate-pulse delay-75"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              </div>
          </div>
      </div>

      {/* Stand Out Section */}
      <div className="bg-slate-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-4xl font-bold mb-4">What Makes Our Operations Management Solutions Stand Out</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">We combine deep industry expertise with cutting-edge technology to deliver superior results.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { 
                        icon: BarChart3, 
                        title: "Data Analytics", 
                        desc: "Accurate production or service planning and operations optimization. Configurable dashboards for real-time visibility into operations data." 
                      },
                      { 
                        icon: Cpu, 
                        title: "Digitalized Workflows", 
                        desc: "Process automation (RFID, IoT) to reduce labor costs and human error risks in production and service order approvals." 
                      },
                      { 
                        icon: ShieldCheck, 
                        title: "Mature Data Security", 
                        desc: "Authorized user access, activity logs, and encryption to protect your most sensitive operational data." 
                      }
                  ].map((item, i) => (
                      <div key={i} className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700 hover:border-blue-500 transition-all group">
                          <item.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                          <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Features Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Top Operations Management Features to Consider</h2>
              <p className="text-slate-600">We cover the implementation of all core functionality modules of operations management software.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
              {/* Production Operations */}
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="bg-blue-100 p-3 rounded-2xl">
                          <Settings className="text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold">For Production Operations</h3>
                  </div>
                  <div className="space-y-8">
                      {[
                          { title: "Operations Optimization", desc: "AI recommendations from historical data and what-if scenario modeling to balance production load.", icon: Zap },
                          { title: "Inventory & Warehouse", desc: "Automated inventory tracking, order picking routing, and reduced inventory costs.", icon: Box },
                          { title: "Sales & Purchase Orders", desc: "Facilitated order creation, approval, and tracking for seamless procurement.", icon: ShoppingCart },
                          { title: "Workforce Management", desc: "Simplified workforce scheduling and reporting to maximize productivity.", icon: Users },
                          { title: "Production Quality Control", desc: "Improved quality and regulatory compliance of production outputs.", icon: ClipboardCheck }
                      ].map((item, i) => (
                          <div key={i} className="flex gap-4">
                              <item.icon className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                              <div>
                                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                  <p className="text-sm text-slate-500">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Service Operations */}
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="bg-indigo-100 p-3 rounded-2xl">
                          <Briefcase className="text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold">For Service Operations</h3>
                  </div>
                  <div className="space-y-8">
                      {[
                          { title: "Service Planning", desc: "Meet customer demand, maximize resource utilization, and improve service execution.", icon: Layout },
                          { title: "Project Management", desc: "Plan budget, time, and human resources; monitor project health and manage change requests.", icon: Target },
                          { title: "Time & Expense Management", desc: "Simplify tracking and streamline approvals for timesheets and expense claims.", icon: Clock },
                          { title: "Service Document Management", desc: "Quick document search and facilitated document creation for field teams.", icon: FileText },
                          { title: "Supply Management", desc: "Supply levels tracking and easy replenishment to avoid out-of-stock situations.", icon: Layers }
                      ].map((item, i) => (
                          <div key={i} className="flex gap-4">
                              <item.icon className="w-6 h-6 text-indigo-500 shrink-0 mt-1" />
                              <div>
                                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                  <p className="text-sm text-slate-500">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Cost Factors Section */}
      <div className="bg-blue-50 py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-bold mb-8">Implementation Cost Factors</h2>
                      <p className="text-slate-600 mb-10 text-lg">
                          When planning operations management software implementation, we suggest taking into consideration the following cost factors:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                          {[
                              "Number and complexity of modules",
                              "Complexity of integrations (IoT, Legacy)",
                              "Volume of data for analytics",
                              "Machine learning complexity",
                              "Application types (Web, Mobile, Desktop)",
                              "Scalability and security requirements"
                          ].map((factor, i) => (
                              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                  <DollarSign className="text-blue-500 w-5 h-5 shrink-0" />
                                  <span className="text-sm font-bold text-slate-700">{factor}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                      <div className="relative z-10">
                          <h3 className="text-2xl font-bold mb-8">GnJ Worldwide’s Approach to Managing Costs</h3>
                          <div className="space-y-8">
                              {[
                                  { num: "1", title: "Optimal Feature Set", desc: "Defining features based on your business needs – no unnecessary functionality to pay for." },
                                  { num: "2", title: "Iterative Development", desc: "Implementing most important functions first to enable faster payback from implementation." },
                                  { num: "3", title: "Proven Frameworks", desc: "Using ready-made components where possible to streamline development and ensure quality." },
                                  { num: "4", title: "Feasible Targets", desc: "Defining realistic targets for availability and performance based on business criticality." }
                              ].map((item, i) => (
                                  <div key={i} className="flex gap-6">
                                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold shrink-0">
                                          {item.num}
                                      </div>
                                      <div>
                                          <h4 className="font-bold mb-1">{item.title}</h4>
                                          <p className="text-blue-100 text-sm">{item.desc}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to optimize your operations?</h2>
                  <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                      Join the ranks of high-performing organizations that have transformed their daily activities into a competitive advantage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-blue-800 text-white border border-blue-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all">
                          Schedule a Call
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default OperationsManagementPage;
