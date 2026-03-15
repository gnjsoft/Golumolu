import React, { useEffect, useState } from 'react';
import { Handshake, FileCheck, Shield, Users, ArrowRight, Star, Zap, Layers, Clock, TrendingUp, CheckCircle2, LayoutGrid, ShieldCheck, BarChart3, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorManagementPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-16">
          <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
                  <Handshake size={16} /> Supplier Relationships
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">Vendor Management</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Streamline onboarding, ensure compliance, and monitor performance. Build stronger, safer partnerships with your supply base.
              </p>
              <div className="grid gap-4 mb-8">
                  {[
                      "Automated Onboarding Workflows",
                      "Risk & Compliance Monitoring",
                      "Performance Scorecards",
                      "Contract Lifecycle Management"
                  ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                              <FileCheck size={14} />
                          </div>
                          <span className="font-medium text-slate-700">{feat}</span>
                      </div>
                  ))}
              </div>
              <Link to="/contact" className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center">
                  Improve Supplier Relations <ArrowRight className="ml-2" />
              </Link>
          </div>

          <div className={`md:w-1/2 relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 relative z-10">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                          <Users className="text-slate-600" />
                      </div>
                      <div>
                          <h3 className="font-bold text-lg">Acme Supplies Ltd.</h3>
                          <div className="flex text-yellow-400 gap-1 text-sm">
                              <Star fill="currentColor" size={14} />
                              <Star fill="currentColor" size={14} />
                              <Star fill="currentColor" size={14} />
                              <Star fill="currentColor" size={14} />
                              <Star fill="currentColor" size={14} />
                          </div>
                      </div>
                      <div className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-bold uppercase">
                          Active
                      </div>
                  </div>
                  <div className="space-y-4">
                      <div className="flex justify-between items-center">
                          <span className="text-slate-500 text-sm">Compliance Status</span>
                          <span className="text-green-600 font-bold flex items-center gap-1"><Shield size={14}/> Verified</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="text-slate-500 text-sm">On-Time Delivery</span>
                          <span className="text-slate-800 font-bold">98.5%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full w-[98.5%]"></div>
                      </div>
                  </div>
              </div>
              
              {/* Decor */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
      </div>

      {/* Key Capabilities Section */}
      <div className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive tools to manage every aspect of your vendor lifecycle from initial discovery to long-term partnership.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: Search, title: "Vendor Discovery", desc: "Identify and vet potential suppliers based on capability, location, and compliance history." },
                      { icon: Zap, title: "Rapid Onboarding", desc: "Automate documentation collection and approval workflows to get vendors active faster." },
                      { icon: ShieldCheck, title: "Risk Assessment", desc: "Continuous monitoring of financial, operational, and security risks across your supply base." },
                      { icon: BarChart3, title: "Performance Tracking", desc: "Data-driven scorecards to measure delivery, quality, and responsiveness against KPIs." },
                      { icon: Layers, title: "Contract Central", desc: "Secure repository for all vendor agreements with automated renewal alerts and version control." },
                      { icon: Handshake, title: "Collaboration Portal", desc: "Dedicated workspace for vendors to update information, submit invoices, and view performance." }
                  ].map((item, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                          <div className="bg-purple-50 p-3 rounded-xl w-fit mb-6 group-hover:bg-purple-100 transition-colors">
                              <item.icon className="w-8 h-8 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Strategic Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Strategic Benefits</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Transform vendor management from a tactical task into a strategic advantage for your organization.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: <TrendingUp className="text-green-600" />, title: "Cost Reduction", desc: "Identify consolidation opportunities and negotiate better terms through centralized vendor data." },
                  { icon: <ShieldCheck className="text-blue-600" />, title: "Enhanced Compliance", desc: "Ensure 100% adherence to corporate policies and regulatory requirements across all suppliers." },
                  { icon: <Zap className="text-yellow-500" />, title: "Operational Agility", desc: "Quickly adapt to supply chain disruptions by having a pre-vetted pool of alternative vendors." },
                  { icon: <Users className="text-purple-600" />, title: "Better Relationships", desc: "Foster transparency and trust with suppliers through clear communication and fair performance metrics." },
                  { icon: <Clock className="text-orange-500" />, title: "Time Savings", desc: "Reduce administrative burden by up to 60% through automated workflows and self-service portals." },
                  { icon: <LayoutGrid className="text-indigo-600" />, title: "Unified View", desc: "Eliminate data silos with a single source of truth for all vendor information and interactions." }
              ].map((benefit, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-purple-50 transition-colors">
                          {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="bg-slate-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Implementation Roadmap</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">A structured approach to centralizing and optimizing your vendor management processes.</p>
              </div>
              
              <div className="relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
                  
                  <div className="grid md:grid-cols-4 gap-8 relative z-10">
                      {[
                          { step: "01", title: "Assessment", desc: "Reviewing current vendor data, contracts, and onboarding processes." },
                          { step: "02", title: "Centralization", desc: "Consolidating all vendor information into a single, secure digital repository." },
                          { step: "03", title: "Automation", desc: "Configuring onboarding workflows, risk triggers, and performance scorecards." },
                          { step: "04", title: "Engagement", desc: "Launching the vendor portal and training internal teams on the new system." }
                      ].map((item, idx) => (
                          <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg text-center">
                              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg">
                                  {item.step}
                              </div>
                              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                              <p className="text-slate-400 text-sm">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to optimize your supply base?</h2>
                  <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                      Stop managing vendors through spreadsheets. Build a resilient, compliant, and high-performing supplier network today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-xl">
                          Get Started Now
                      </Link>
                      <Link to="/contact" className="bg-purple-800 text-white border border-purple-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-900 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default VendorManagementPage;