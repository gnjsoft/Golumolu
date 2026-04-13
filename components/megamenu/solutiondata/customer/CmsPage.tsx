import React, { useEffect, useState } from 'react';
import { 
  FileText, Layout, Share2, ArrowRight, Edit3, Layers, Globe, 
  Image, Monitor, Settings, Code, Search, ShieldCheck, 
  Zap, Smartphone, MousePointer, CheckCircle2, Briefcase,
  Clock, Database, Cpu, PenTool, Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CmsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const cmsFeatures = [
    { icon: Layers, title: "Headless Architecture", desc: "Deliver content to apps, websites, watches, and kiosks via simple APIs." },
    { icon: Edit3, title: "Visual Editor", desc: "Drag-and-drop page building for marketers, no code required." },
    { icon: Share2, title: "Approval Workflows", desc: "Granular roles and permissions to maintain brand consistency." },
    { icon: Globe, title: "Multi-Language", desc: "Built-in localization management for global reach." },
    { icon: Image, title: "Asset Management", desc: "AI-powered tagging and organization for images and videos." },
    { icon: FileText, title: "SEO Control", desc: "Fine-grained control over metadata, sitemaps, and redirects." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative bg-white py-24 px-4 border-b border-slate-200">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <div className={`lg:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100">
                      <Layout size={14} /> Enterprise Content & Kiosks
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                      Content Management <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">& Kiosk Solutions</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                      Empower your team with headless CMS architecture and interactive kiosk software that delivers seamless experiences across every physical and digital touchpoint.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center">
                          Start Building <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>
              
              <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="relative">
                      <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full"></div>
                      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                          <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-2">
                              <div className="flex gap-1.5">
                                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                              </div>
                              <div className="flex-1 text-center text-xs font-mono text-slate-400">cms.gnj-worldwide.com/dashboard</div>
                          </div>
                          <div className="p-8 space-y-6">
                              <div className="flex items-center justify-between">
                                  <div className="h-6 bg-slate-100 rounded-lg w-32"></div>
                                  <div className="h-8 bg-indigo-600 rounded-lg w-24"></div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                  {[1,2,3].map(i => <div key={i} className="h-24 bg-slate-50 rounded-xl border border-slate-100"></div>)}
                              </div>
                              <div className="space-y-3">
                                  <div className="h-4 bg-slate-100 rounded w-full"></div>
                                  <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                                  <div className="h-4 bg-slate-100 rounded w-4/6"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* CMS Features */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Enterprise CMS Capabilities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Modern content infrastructure designed for scalability and multi-channel delivery.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {cmsFeatures.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Kiosk Implementation Section */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Custom Kiosk Software Implementation</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">GnJ Worldwide offers both consulting on and implementation of custom kiosk software to bridge physical and digital interactions.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                  {/* Consulting */}
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 bg-indigo-600/20 rounded-2xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                              <Search size={32} />
                          </div>
                          <h3 className="text-2xl font-bold">Kiosk Software Consulting</h3>
                      </div>
                      <ul className="space-y-4 mb-10">
                          {[
                              "Full business case creation",
                              "Definition of custom kiosk software features",
                              "Costs and development schedule estimates",
                              "Kiosk system architecture design",
                              "Detailed plan of integrations (cloud, hardware, POS)",
                              "Assistance with hardware choice",
                              "Interactive UX prototype as a PoC"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-300">
                                  <CheckCircle2 size={18} className="text-indigo-500 mt-1 shrink-0" />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all">
                          Go for consulting <ArrowRight className="ml-2" />
                      </Link>
                  </div>

                  {/* Development */}
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 bg-violet-600/20 rounded-2xl text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all">
                              <Code size={32} />
                          </div>
                          <h3 className="text-2xl font-bold">Custom Kiosk Software Development</h3>
                      </div>
                      <ul className="space-y-4 mb-10">
                          {[
                              "Kiosk software consulting and development project planning",
                              "UX and UI design in full compliance with ADA and WCAG",
                              "Development and QA of client app + controller software",
                              "Kiosk management web app development",
                              "Deployment and integration with cloud & peripheral devices",
                              "Continuous kiosk software support and evolution"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-300">
                                  <CheckCircle2 size={18} className="text-violet-500 mt-1 shrink-0" />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="inline-flex items-center bg-violet-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-violet-700 transition-all">
                          Go for implementation <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to unify your content?</h2>
                  <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Partner with GnJ Worldwide to build a robust content management and kiosk ecosystem that scales with your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-indigo-900 text-white border border-indigo-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default CmsPage;
