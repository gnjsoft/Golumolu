import React, { useEffect, useState } from 'react';
import { 
  Building, Home, Layout, Database, Cpu, Eye, 
  ShieldCheck, Smartphone, MapPin, MessageSquare, 
  CreditCard, Layers, Activity, ArrowRight, 
  CheckCircle2, Search, Zap, Users, FileText,
  Camera, Globe, BarChart3, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RealEstatePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden bg-emerald-950 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 to-emerald-950"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6 backdrop-blur-sm">
                      <Building size={40} className="text-emerald-400" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Real Estate Software Development
              </h1>
              <p className={`text-xl text-emerald-100/80 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  We specialize in developing mission-critical real estate software solutions designed to automate and optimize property management, financial operations, lead generation, and essential business workflows.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="bg-emerald-500 text-white hover:bg-emerald-400 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center group shadow-lg shadow-emerald-500/20">
                      Build Your Solution <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">About Our Expertise</div>
                  <h2 className="text-4xl font-bold mb-6 text-slate-900 italic">AI-Powered Real Estate Software Development Solutions for Seamless Management</h2>
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                      <p>
                          We work with property owners, brokers, leasing companies, and real estate managers to ensure seamless workflow management. Our specialists conduct a comprehensive business analysis and create a detailed specification while developing an MVP to deliver a solution that helps accomplish your business goals.
                      </p>
                      <p>
                          Our team is proficient in developing advanced applications while automating business valuation models. Through online property listings, 3D tours, and e-registrations, we assist in creating an exceptional customer experience.
                      </p>
                      <p>
                          We build real estate software solutions with ML, NLP, RPA & AR/VR capabilities. It helps buyers and tenants to visualize properties on the mobile, interact with virtual agents instantly, manage documents on the go, save time & make informed purchase decisions.
                      </p>
                  </div>
              </div>
              <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  {[
                      { icon: Cpu, title: "ML & NLP", desc: "Intelligent virtual agents" },
                      { icon: Eye, title: "AR/VR", desc: "3D property tours" },
                      { icon: Activity, title: "RPA", desc: "Workflow automation" },
                      { icon: ShieldCheck, title: "Compliance", desc: "Regulatory adherence" }
                  ].map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                          <item.icon className="w-10 h-10 text-emerald-500 mb-4" />
                          <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Tailored Solutions Section */}
      <div className="bg-slate-100 py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-4xl font-bold mb-4">Tailored Real Estate Software Solutions</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Transform how you manage properties, clients, and business operations with build-to-order software solutions.</p>
              </div>

              <div className="space-y-24">
                  {/* Property Management Systems */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="order-2 lg:order-1">
                          <div className="bg-emerald-500/10 text-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                              <Home className="w-6 h-6" />
                          </div>
                          <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Property Management Systems</h3>
                          <p className="text-slate-600 mb-8 leading-relaxed">
                              Enhance your Technology Ecosystem to Streamline Workday Activities and Focus on the Bottom Line. We enable property owners & managers to streamline real estate valuations and appraisals with AVM solutions, bidding management, and turnkey project management.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                              {[
                                  "Property listing management",
                                  "Owner – Tenants management",
                                  "Lease & contract management",
                                  "Complete account management",
                                  "Document management",
                                  "Online payments"
                              ].map((feature, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                      {feature}
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="order-1 lg:order-2 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
                          <div className="aspect-video rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden relative group">
                              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" alt="PMS Interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/0 transition-colors"></div>
                          </div>
                      </div>
                  </div>

                  {/* Property Rental Marketplace */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
                          <div className="aspect-video rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden relative group">
                              <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1000" alt="Marketplace Interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/0 transition-colors"></div>
                          </div>
                      </div>
                      <div>
                          <div className="bg-emerald-500/10 text-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                              <Globe className="w-6 h-6" />
                          </div>
                          <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Property Rental Marketplace Platform</h3>
                          <p className="text-slate-600 mb-8 leading-relaxed">
                              An All-Inclusive Future-Ready System to Stimulate P2P Operations Across the Real-Estate Economy. Our services focus on creating competitive property rental apps where owners and tenants can collaborate and fulfill requirements faster.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                              {[
                                  "Property listings",
                                  "Owner-Tenant profile mgmt",
                                  "Map & location integration",
                                  "Escrow & payment integration",
                                  "Inventory & booking mgmt",
                                  "Live chat & text"
                              ].map((feature, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                      {feature}
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Real Estate ERP Solution */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="order-2 lg:order-1">
                          <div className="bg-emerald-500/10 text-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                              <Layout className="w-6 h-6" />
                          </div>
                          <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Real Estate ERP Solution</h3>
                          <p className="text-slate-600 mb-8 leading-relaxed">
                              Automate your Business Tasks to Manage the Business Successfully with Enhanced Integration & Simplify Operations. Our custom-built ERP Systems enable SMEs to deftly manage commercial/residential properties’ data, cash flows, planning, and budgeting.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                              {[
                                  "Online leasing",
                                  "Inventory management",
                                  "Customer portal",
                                  "Integrated modules",
                                  "Agent management",
                                  "Booking management"
                              ].map((feature, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                      {feature}
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="order-1 lg:order-2 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
                          <div className="aspect-video rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden relative group">
                              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" alt="ERP Dashboard" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/0 transition-colors"></div>
                          </div>
                      </div>
                  </div>

                  {/* Real Estate Asset Management */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
                          <div className="aspect-video rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden relative group">
                              <img src="https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1000" alt="Asset Management" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/0 transition-colors"></div>
                          </div>
                      </div>
                      <div>
                          <div className="bg-emerald-500/10 text-emerald-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                              <Settings className="w-6 h-6" />
                          </div>
                          <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Real Estate Asset Management Software</h3>
                          <p className="text-slate-600 mb-8 leading-relaxed">
                              Leverage Competitive Edge with Accurate Data for Efficient Management of Multiple Sites & Assets. We deploy end-to-end cloud-based systems facilitated by predictive analytics and real-time business intelligence.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                              {[
                                  "360-degree virtual surveillance",
                                  "Compliance & risk monitoring",
                                  "Role-based access security",
                                  "Automated property valuation",
                                  "Automation of maintenance",
                                  "IoT sensor monitoring"
                              ].map((feature, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                      {feature}
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                  <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Real Estate Business?</h2>
                  <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                      Empower your team to stay ahead, improve operations, comply with regulations, and avert setbacks by turning your facilities into energy-efficient spaces.
                  </p>
                  <Link to="/contact" className="bg-white text-emerald-600 font-bold py-4 px-10 rounded-xl hover:bg-emerald-50 transition-all inline-flex items-center shadow-xl">
                      Get a Free Consultation <ArrowRight className="ml-2" />
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default RealEstatePage;
