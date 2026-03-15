import React, { useEffect, useState } from 'react';
import { Wrench, Settings, ClipboardList, ArrowRight, BarChart3, AlertTriangle, ShieldCheck, Zap, Layers, Users, Clock, TrendingUp, CheckCircle2, LayoutGrid, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const EamPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-slate-800 text-white py-24 px-4 text-center relative overflow-hidden">
          {/* Abstract background pattern */}
          <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          
          <div className={`relative z-10 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="inline-block p-4 bg-slate-700 rounded-2xl mb-6 border border-slate-600 backdrop-blur-sm">
                  <Wrench size={48} className="text-slate-300" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Enterprise Asset Management</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                  Maximize asset lifecycle, reduce downtime, and control maintenance costs with our intelligent EAM solutions.
              </p>
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold transition-all inline-flex items-center shadow-lg shadow-blue-900/20">
                  Schedule Demo <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: ClipboardList, title: "Asset Registry", desc: "Centralized database for all physical assets with full history tracking and documentation." },
                  { icon: Settings, title: "Preventive Maintenance", desc: "Automated scheduling of maintenance tasks to prevent unexpected failures and extend life." },
                  { icon: AlertTriangle, title: "Work Order Mgmt", desc: "Streamlined creation, assignment, and tracking of repair work orders for faster resolution." },
                  { icon: BarChart3, title: "Lifecycle Analysis", desc: "Data-driven insights to determine optimal repair vs. replace decisions and TCO." },
                  { icon: Wrench, title: "Inventory & MRO", desc: "Manage spare parts inventory to ensure availability for critical repairs while reducing carrying costs." },
                  { icon: Activity, title: "Mobile Maintenance", desc: "Apps for technicians to access manuals, capture photos, and update status directly from the field." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 group transform ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <div className="bg-slate-50 p-3 rounded-xl w-fit mb-6 group-hover:bg-blue-50 transition-colors">
                          <item.icon className="w-8 h-8 text-slate-600 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>

          {/* Strategic Benefits Section */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Strategic EAM Benefits</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Optimize your physical infrastructure and drive operational excellence with a robust asset management strategy.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: <TrendingUp className="text-blue-600" />, title: "Improved Reliability", desc: "Reduce unplanned downtime and equipment failures through proactive maintenance strategies." },
                      { icon: <Zap className="text-yellow-500" />, title: "Extended Asset Life", desc: "Maximize the return on investment by ensuring assets are maintained according to manufacturer specs." },
                      { icon: <ShieldCheck className="text-green-500" />, title: "Regulatory Compliance", desc: "Maintain accurate records for audits, safety inspections, and environmental regulations effortlessly." },
                      { icon: <TrendingUp className="text-indigo-600" />, title: "Reduced OpEx", desc: "Lower operational costs by optimizing maintenance labor, spare parts inventory, and energy usage." },
                      { icon: <Users className="text-purple-500" />, title: "Enhanced Safety", desc: "Ensure a safer working environment by keeping equipment in peak operating condition." },
                      { icon: <LayoutGrid className="text-orange-500" />, title: "Data-Driven Decisions", desc: "Base your capital expenditure decisions on hard data regarding asset performance and costs." }
                  ].map((benefit, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-blue-50 transition-colors">
                              {benefit.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Implementation Roadmap */}
          <div className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Implementation Roadmap</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">A proven methodology for transitioning your asset management from reactive to predictive.</p>
              </div>
              
              <div className="relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div>
                  
                  <div className="grid md:grid-cols-4 gap-8 relative z-10">
                      {[
                          { step: "01", title: "Asset Audit", desc: "Comprehensive cataloging of all physical assets and their current condition." },
                          { step: "02", title: "Configuration", desc: "Tailoring the EAM software to your specific workflows and maintenance standards." },
                          { step: "03", title: "Data Migration", desc: "Securely importing legacy data and integrating with existing ERP/financial systems." },
                          { step: "04", title: "Training & Launch", desc: "Empowering your maintenance teams with mobile tools and performance dashboards." }
                      ].map((item, idx) => (
                          <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg text-center">
                              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg">
                                  {item.step}
                              </div>
                              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                              <p className="text-slate-400 text-sm">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Industry Applications */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Industry Applications</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Our EAM solutions are designed to handle the complex asset requirements of diverse industries.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                  {[
                      { title: "Manufacturing", desc: "Managing production lines, robotics, and heavy machinery for 24/7 operations." },
                      { title: "Energy & Utilities", desc: "Tracking distributed assets like power grids, pipelines, and renewable sites." },
                      { title: "Transportation", desc: "Fleet maintenance for aviation, rail, and logistics providers." },
                      { title: "Facilities Mgmt", desc: "Optimizing HVAC, elevators, and building systems for commercial real estate." }
                  ].map((industry, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:border-blue-200 transition-all">
                          <h4 className="font-bold text-slate-900 mb-2">{industry.title}</h4>
                          <p className="text-slate-500 text-sm">{industry.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Final CTA */}
          <div className="mt-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] p-12 text-center text-white relative overflow-hidden shadow-2xl border border-slate-700">
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to optimize your asset performance?</h2>
                  <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                      Join the industry leaders who have reduced maintenance costs by up to 30% with our intelligent EAM solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">
                          Get a Free Assessment
                      </Link>
                      <Link to="/contact" className="bg-transparent text-white border border-slate-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default EamPage;