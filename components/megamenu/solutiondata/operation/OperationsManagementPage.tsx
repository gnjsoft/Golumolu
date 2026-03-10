import React, { useEffect, useState } from 'react';
import { Settings, RefreshCw, ClipboardCheck, ArrowRight, Activity, TrendingUp, Zap, Shield, BarChart3, Users, Target, Layers, Globe, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationsManagementPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className={`text-center mb-20 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6 text-slate-900">
                  <Settings size={48} className="animate-spin-slow" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Operations Management</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Optimize workflows, reduce waste, and improve efficiency. Our software solutions give you granular control over your daily business activities.
              </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
              <div className={`bg-white p-8 rounded-3xl shadow-xl border border-slate-200 transition-all duration-1000 delay-300 transform ${active ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                  <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                      <h3 className="font-bold text-lg text-slate-800">Operational Efficiency</h3>
                      <div className="flex gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-400"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                          <span className="w-3 h-3 rounded-full bg-green-400"></span>
                      </div>
                  </div>
                  <div className="space-y-6">
                      <div>
                          <div className="flex justify-between text-sm mb-1 font-medium text-slate-600">
                              <span>Resource Utilization</span>
                              <span>92%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-3">
                              <div className="bg-blue-600 h-3 rounded-full w-[92%] transition-all duration-1000 ease-out" style={{ width: active ? '92%' : '0%' }}></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex justify-between text-sm mb-1 font-medium text-slate-600">
                              <span>Process Cycle Time</span>
                              <span className="text-green-600">-15%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-3">
                              <div className="bg-green-500 h-3 rounded-full w-[85%] transition-all duration-1000 ease-out delay-200" style={{ width: active ? '85%' : '0%' }}></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex justify-between text-sm mb-1 font-medium text-slate-600">
                              <span>Output Quality</span>
                              <span>99.8%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-3">
                              <div className="bg-purple-600 h-3 rounded-full w-[99%] transition-all duration-1000 ease-out delay-400" style={{ width: active ? '99%' : '0%' }}></div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={`space-y-8 transition-all duration-1000 delay-500 transform ${active ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                  {[
                      { icon: RefreshCw, title: "Process Automation", desc: "Eliminate manual data entry and repetitive tasks with intelligent workflow automation." },
                      { icon: ClipboardCheck, title: "Quality Management", desc: "Digital checklists, audits, and CAPA systems to ensure consistent standards." },
                      { icon: TrendingUp, title: "Capacity Planning", desc: "Forecast demand and allocate resources effectively to prevent bottlenecks." }
                  ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                          <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <item.icon size={28} />
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-slate-600">{item.desc}</p>
                          </div>
                      </div>
                  ))}
                  
                  <div className="pt-4">
                      <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-800 transition-colors">
                          Streamline Operations <ArrowRight className="ml-2" size={18}/>
                      </Link>
                  </div>
              </div>
          </div>

          {/* Key Features Grid */}
          <div className="mb-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Comprehensive Operations Toolkit</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to manage, monitor, and improve your business processes in one place.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: <Zap className="text-yellow-500" />, title: "Real-time Monitoring", desc: "Track KPIs and operational metrics as they happen with live dashboards." },
                      { icon: <Shield className="text-green-500" />, title: "Compliance Tracking", desc: "Stay ahead of regulatory requirements with automated compliance logs." },
                      { icon: <BarChart3 className="text-blue-500" />, title: "Advanced Analytics", desc: "Identify trends and hidden inefficiencies with AI-powered data analysis." },
                      { icon: <Users className="text-purple-500" />, title: "Team Collaboration", desc: "Unified workspace for teams to coordinate tasks and share critical updates." },
                      { icon: <Target className="text-red-500" />, title: "Goal Management", desc: "Align operational activities with high-level strategic business objectives." },
                      { icon: <Layers className="text-indigo-500" />, title: "System Integration", desc: "Connect with your existing ERP, CRM, and legacy tools seamlessly." }
                  ].map((feature, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-blue-50 transition-colors">
                              {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Operational Excellence Framework */}
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white mb-32 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl md:text-5xl font-bold mb-8">Operational Excellence Framework</h2>
                      <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                          Our solutions are built on a proven framework that drives continuous improvement and sustainable growth for modern enterprises.
                      </p>
                      <div className="space-y-6">
                          {[
                              "Standardize processes across all departments",
                              "Visualize workflows to identify bottlenecks",
                              "Implement data-driven decision making",
                              "Foster a culture of continuous improvement"
                          ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-4">
                                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                                      <CheckCircle2 size={16} className="text-white" />
                                  </div>
                                  <span className="text-slate-200 font-medium">{item}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-6">
                          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl text-center">
                              <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Cost Reduction</div>
                          </div>
                          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl text-center">
                              <div className="text-4xl font-bold text-green-400 mb-2">2x</div>
                              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Speed to Market</div>
                          </div>
                      </div>
                      <div className="space-y-6 pt-12">
                          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl text-center">
                              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Client Retention</div>
                          </div>
                          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl text-center">
                              <div className="text-4xl font-bold text-yellow-400 mb-2">0</div>
                              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">Manual Errors</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Industry Applications */}
          <div className="mb-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Tailored for Your Industry</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Operational challenges vary by sector. Our solutions are flexible enough to meet the specific needs of your business.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                  {[
                      { title: "Manufacturing", desc: "Shop floor control and lean production management." },
                      { title: "Logistics", desc: "Route optimization and warehouse efficiency." },
                      { title: "Healthcare", desc: "Patient flow management and resource allocation." },
                      { title: "Retail", desc: "Inventory management and omnichannel fulfillment." }
                  ].map((industry, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:border-blue-200 transition-all">
                          <h4 className="font-bold text-slate-900 mb-2">{industry.title}</h4>
                          <p className="text-slate-500 text-sm">{industry.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
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
                      <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                          Get Started Today
                      </Link>
                      <Link to="/contact" className="bg-blue-800 text-white border border-blue-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-all">
                          Schedule a Consultation
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default OperationsManagementPage;