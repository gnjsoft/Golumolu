import React, { useEffect, useState } from 'react';
import { 
  Briefcase, FileText, Users, Clock, Globe, ArrowRight, 
  Settings, Database, LineChart, ShieldCheck, Laptop, 
  CheckCircle2, Layout, UserPlus, Calendar, PieChart, 
  Share2, MessageSquare, CreditCard, Smartphone, 
  Search, Lightbulb, Code, Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfessionalServicesPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Professional Services IT</h1>
                  <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                      GnJ Worldwide helps professional services companies launch digital customer channels and build tailored software solutions for business process management.
                  </p>
              </div>
              <div className={`flex justify-center gap-6 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                      <div className="text-3xl font-bold text-indigo-300">100%</div>
                      <div className="text-xs uppercase tracking-wider">Digital Transformation</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                      <div className="text-3xl font-bold text-indigo-300">24/7</div>
                      <div className="text-xs uppercase tracking-wider">Customer Access</div>
                  </div>
              </div>
          </div>
      </div>

      {/* Software Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Software Solutions for Professional Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Digitalize service delivery and automate internal operations for increased productivity and a competitive advantage.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { 
                    icon: Settings, 
                    title: "ERP Solutions", 
                    desc: "Comprehensive enterprise resource planning systems that integrate key business functions to reduce manual workflows." 
                  },
                  { 
                    icon: Users, 
                    title: "CRM Solutions", 
                    desc: "Centralize customer information and interaction history to personalize communication across sales and service." 
                  },
                  { 
                    icon: CreditCard, 
                    title: "Corporate Finance", 
                    desc: "Automate accounting, billing, and financial modeling while ensuring compliance with regional regulations." 
                  },
                  { 
                    icon: UserPlus, 
                    title: "HR Management", 
                    desc: "Manage the entire employee experience from recruitment and onboarding to performance and learning." 
                  },
                  { 
                    icon: Calendar, 
                    title: "Project Management", 
                    desc: "Custom solutions for team collaboration, task scheduling, resource allocation, and budget monitoring." 
                  },
                  { 
                    icon: FileText, 
                    title: "Document Management", 
                    desc: "Secure storage, co-creation, and e-signing workflows to streamline the entire document lifecycle." 
                  },
                  { 
                    icon: Share2, 
                    title: "Intranets", 
                    desc: "Internal systems to manage corporate knowledge, run multi-department projects, and foster teamwork." 
                  },
                  { 
                    icon: PieChart, 
                    title: "Analytics", 
                    desc: "Automated data collection and cleansing with self-service dashboards for non-technical users." 
                  },
                  { 
                    icon: Smartphone, 
                    title: "Digital Customer Channels", 
                    desc: "Web portals and mobile apps providing secure access to services and integrated payment gateways." 
                  }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 group ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${100 * idx}ms` }}
                  >
                      <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                          <item.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Choose Your IT Services Section */}
      <div className="bg-indigo-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Choose Your IT Services</h2>
                  <p className="text-indigo-200 max-w-2xl mx-auto text-lg">Tailored engagement models to fit your professional services business.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                              <Lightbulb className="w-8 h-8" />
                          </div>
                          <h3 className="text-2xl font-bold">Consulting & Implementation</h3>
                      </div>
                      <div className="space-y-6">
                          <div>
                              <h4 className="text-indigo-300 font-bold mb-2 uppercase text-xs tracking-widest">We Consult On:</h4>
                              <ul className="space-y-3">
                                  <li className="flex items-start gap-3 text-slate-300">
                                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                      <span>Choosing suitable solutions and optimal functionality</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-slate-300">
                                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                      <span>Reducing implementation costs and ensuring ROI</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-slate-300">
                                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                      <span>Ensuring high user adoption across the organization</span>
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <h4 className="text-indigo-300 font-bold mb-2 uppercase text-xs tracking-widest">We Offer:</h4>
                              <ul className="space-y-3">
                                  <li className="flex items-start gap-3 text-slate-300">
                                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                      <span>End-to-end solution implementation and support</span>
                                  </li>
                                  <li className="flex items-start gap-3 text-slate-300">
                                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                      <span>Continuous maintenance and solution evolution</span>
                                  </li>
                              </ul>
                          </div>
                          <Link to="/contact" className="mt-8 bg-white text-indigo-900 font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition-colors inline-flex items-center">
                              Request Implementation <ArrowRight className="ml-2" />
                          </Link>
                      </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                              <Globe className="w-8 h-8" />
                          </div>
                          <h3 className="text-2xl font-bold">IT Outsourcing</h3>
                      </div>
                      <div className="space-y-6">
                          <p className="text-slate-300">Optimize your quality and costs by outsourcing key IT functions to our specialized teams.</p>
                          <div className="grid grid-cols-2 gap-4">
                              {[
                                  { icon: Search, label: "Business Analysis" },
                                  { icon: Code, label: "Software Development" },
                                  { icon: ShieldCheck, label: "Quality Assurance" },
                                  { icon: LineChart, label: "Data Analytics" },
                                  { icon: Laptop, label: "IT Support" },
                                  { icon: Database, label: "Managed Infra" },
                                  { icon: Headphones, label: "Help Desk" }
                              ].map((item, i) => (
                                  <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                      <item.icon className="w-4 h-4 text-indigo-400" />
                                      <span className="text-sm text-slate-200">{item.label}</span>
                                  </div>
                              ))}
                          </div>
                          <Link to="/contact" className="mt-8 border border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center">
                              Request IT Outsourcing <ArrowRight className="ml-2" />
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProfessionalServicesPage;
