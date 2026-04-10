import React, { useEffect, useState } from 'react';
import { Activity, ShieldCheck, Server, ArrowRight, Radio, RefreshCw, BarChart, CheckCircle2, Clock, Users, TrendingUp, Settings, Headphones, Target, Zap, Award, Cloud, Lock, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManagedItServicesPage: React.FC = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-emerald-900 text-white py-24 px-4 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-800/20 skew-x-12 transform origin-top-right"></div>
         
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
             <div className="md:w-1/2">
                 <div className="flex items-center gap-2 text-emerald-400 font-mono mb-4">
                     <Activity size={20} className="animate-pulse" /> System Status: Optimal
                 </div>
                 <h1 className="text-5xl font-bold mb-6">Managed IT Services</h1>
                 <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                     Proactive monitoring, maintenance, and support. We keep your systems running smoothly so you can focus on business.
                 </p>
                 <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center shadow-lg">
                     Get a Quote <ArrowRight className="ml-2" />
                 </Link>
             </div>

             {/* Radar Animation */}
             <div className="md:w-1/2 flex justify-center">
                 <div className="relative w-80 h-80 bg-emerald-950 rounded-full border border-emerald-800 flex items-center justify-center">
                     <div className={`absolute inset-0 border-4 border-emerald-500/30 rounded-full ${pulse ? 'scale-110 opacity-0' : 'scale-100 opacity-100'} transition-all duration-1000`}></div>
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent w-full h-full rounded-full animate-spin-slow"></div>
                     
                     <div className="relative z-10 text-center">
                         <div className="text-4xl font-bold text-white">24/7</div>
                         <div className="text-emerald-400 text-sm tracking-wider uppercase">Monitoring</div>
                     </div>

                     {/* Blips */}
                     <div className="absolute top-10 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                     <div className="absolute bottom-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-700"></div>
                 </div>
             </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Core Managed Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Comprehensive IT management designed to keep your infrastructure secure, optimized, and aligned with your business goals.
              </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700"><ShieldCheck size={24}/></div>
                      <h3 className="text-xl font-bold text-slate-900">Security Management</h3>
                  </div>
                  <p className="text-slate-600">Patch management, antivirus updates, and threat monitoring to keep your network secure.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700"><Server size={24}/></div>
                      <h3 className="text-xl font-bold text-slate-900">Server & Network</h3>
                  </div>
                  <p className="text-slate-600">Uptime monitoring, performance optimization, and regular backups for business continuity.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700"><RefreshCw size={24}/></div>
                      <h3 className="text-xl font-bold text-slate-900">Preventative Maintenance</h3>
                  </div>
                  <p className="text-slate-600">Routine health checks and cleanup to prevent issues before they cause downtime.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700"><BarChart size={24}/></div>
                      <h3 className="text-xl font-bold text-slate-900">Reporting & Strategy</h3>
                  </div>
                  <p className="text-slate-600">Monthly reports on system health and strategic advice for future IT investments.</p>
              </div>
          </div>

          {/* Detailed Services Deep Dive */}
          <div className="mt-32 space-y-24">
              {/* Cybersecurity */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                          <Lock size={32} />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Advanced Cybersecurity & Compliance</h3>
                      <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                          Protect your business from evolving cyber threats. We deploy enterprise-grade security protocols, continuous monitoring, and rapid incident response to keep your data safe and ensure regulatory compliance.
                      </p>
                      <ul className="space-y-4">
                          {["Endpoint Detection & Response (EDR)", "Security Awareness Training", "Vulnerability Assessments & Penetration Testing", "Zero-Trust Architecture Implementation"].map((point, i) => (
                              <li key={i} className="flex items-center text-slate-700 font-medium">
                                  <CheckCircle2 className="text-emerald-500 mr-3 flex-shrink-0" size={20} />
                                  {point}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="md:w-1/2 w-full bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-200 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" alt="Cybersecurity" className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-80" />
                  </div>
              </div>

              {/* Cloud Infrastructure */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                  <div className="md:w-1/2">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                          <Cloud size={32} />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Cloud Infrastructure Management</h3>
                      <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                          Maximize the ROI of your cloud investments. Our team manages, optimizes, and secures your cloud environments across AWS, Azure, and Google Cloud, ensuring high availability and scalability.
                      </p>
                      <ul className="space-y-4">
                          {["Cloud Migration Strategy & Execution", "Cost Optimization & Resource Allocation", "Cloud Architecture Reviews", "24/7 Cloud Performance Monitoring"].map((point, i) => (
                              <li key={i} className="flex items-center text-slate-700 font-medium">
                                  <CheckCircle2 className="text-emerald-500 mr-3 flex-shrink-0" size={20} />
                                  {point}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="md:w-1/2 w-full bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 relative overflow-hidden group">
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-200 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" alt="Cloud Infrastructure" className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-80" />
                  </div>
              </div>

              {/* End-User Support */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                          <MonitorSmartphone size={32} />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">End-User Helpdesk & Support</h3>
                      <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                          Empower your team with lightning-fast IT support. Our dedicated helpdesk resolves issues quickly so your employees can stay productive without technical friction.
                      </p>
                      <ul className="space-y-4">
                          {["24/7/365 Remote IT Support", "On-Site Troubleshooting & Dispatch", "Mobile Device Management (MDM)", "Automated Employee Onboarding/Offboarding"].map((point, i) => (
                              <li key={i} className="flex items-center text-slate-700 font-medium">
                                  <CheckCircle2 className="text-emerald-500 mr-3 flex-shrink-0" size={20} />
                                  {point}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="md:w-1/2 w-full bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 relative overflow-hidden group">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-200 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                      <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="IT Support" className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-80" />
                  </div>
              </div>
          </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Partner With Us?</h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                      We go beyond break-fix support to become your strategic IT partner, driving efficiency and innovation.
                  </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: Clock, title: "24/7/365 Support", desc: "Round-the-clock monitoring and helpdesk support to ensure your business never stops." },
                      { icon: Users, title: "Dedicated Experts", desc: "Access to a team of certified engineers and IT strategists without the overhead of in-house staff." },
                      { icon: TrendingUp, title: "Proactive Approach", desc: "We identify and resolve potential issues before they impact your operations or bottom line." },
                      { icon: ShieldCheck, title: "Advanced Security", desc: "Enterprise-grade cybersecurity measures to protect your sensitive data and ensure compliance." },
                      { icon: Target, title: "Strategic Alignment", desc: "IT roadmaps and consulting to align your technology investments with your business objectives." },
                      { icon: Zap, title: "Rapid Response", desc: "Guaranteed SLAs with lightning-fast response times for critical system issues." }
                  ].map((benefit, idx) => (
                      <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all group">
                          <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                              <benefit.icon size={28} className="text-emerald-600 group-hover:text-white transition-colors" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-slate-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Onboarding Process</h2>
                  <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                      A seamless transition to better IT management.
                  </p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                  {[
                      { step: "01", title: "Assessment", desc: "Comprehensive audit of your current IT infrastructure, security posture, and business needs." },
                      { step: "02", title: "Planning", desc: "Developing a customized IT strategy, remediation plan, and service level agreement." },
                      { step: "03", title: "Onboarding", desc: "Deploying management agents, securing systems, and documenting your entire environment." },
                      { step: "04", title: "Optimization", desc: "Ongoing monitoring, preventative maintenance, and strategic quarterly business reviews." }
                  ].map((phase, idx) => (
                      <div key={idx} className="relative">
                          {idx < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-emerald-900/50"></div>}
                          <div className="bg-emerald-950 w-16 h-16 rounded-full flex items-center justify-center text-emerald-400 font-bold text-xl mb-6 relative z-10 border-4 border-slate-900">
                              {phase.step}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                          <p className="text-slate-400 leading-relaxed">{phase.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Engagement Models */}
      <div className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Flexible Engagement Models</h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                      Choose the level of support that fits your organization's needs and budget.
                  </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      {
                          title: "Co-Managed IT",
                          desc: "We work alongside your existing internal IT team to provide specialized expertise, advanced tools, and extra bandwidth.",
                          features: ["Shared ticketing system", "Advanced security tools", "Escalation support", "Strategic consulting"]
                      },
                      {
                          title: "Fully Managed IT",
                          desc: "We act as your complete, outsourced IT department, handling everything from daily helpdesk to high-level strategy.",
                          features: ["Unlimited remote support", "24/7 proactive monitoring", "Vendor management", "Virtual CIO services"],
                          highlight: true
                      },
                      {
                          title: "Custom Solutions",
                          desc: "Tailored IT services designed for specific projects, compliance requirements, or unique operational needs.",
                          features: ["Project-based support", "Compliance auditing", "Cloud migrations", "Security assessments"]
                      }
                  ].map((model, idx) => (
                      <div key={idx} className={`rounded-2xl p-8 border ${model.highlight ? 'bg-emerald-900 text-white border-emerald-800 shadow-2xl transform md:-translate-y-4' : 'bg-white text-slate-900 border-slate-200 shadow-sm'}`}>
                          {model.highlight && <div className="bg-emerald-500 text-white text-sm font-bold uppercase tracking-wider py-1 px-3 rounded-full inline-block mb-6">Most Popular</div>}
                          <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                          <p className={`mb-8 leading-relaxed ${model.highlight ? 'text-emerald-100' : 'text-slate-600'}`}>{model.desc}</p>
                          <ul className="space-y-4 mb-8">
                              {model.features.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-3">
                                      <CheckCircle2 className={model.highlight ? 'text-emerald-400' : 'text-emerald-600'} size={20} />
                                      <span className={model.highlight ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                                  </li>
                              ))}
                          </ul>
                          <Link to="/contact" className={`block text-center py-3 px-6 rounded-lg font-bold transition-colors ${model.highlight ? 'bg-emerald-500 hover:bg-emerald-400 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                              Learn More
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default ManagedItServicesPage;