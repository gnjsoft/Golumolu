import React, { useEffect, useState } from 'react';
import { FileText, Layout, Share2, ArrowRight, Edit3, Layers, Globe, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const CmsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      
      {/* Hero Section */}
      <div className="bg-slate-50 py-24 px-4 overflow-hidden relative border-b border-slate-200">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
                      Content <br/><span className="text-indigo-600">Unchained.</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                      Headless, decoupled, and omnichannel. Empower your marketing team to create once and publish everywhere.
                  </p>
                  <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors inline-flex items-center shadow-lg hover:shadow-indigo-500/30">
                      Start Building <ArrowRight className="ml-2" />
                  </Link>
              </div>
              
              {/* Visual - The "Builder" Animation */}
              <div className={`md:w-1/2 w-full transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative">
                      {/* Browser Header */}
                      <div className="bg-slate-100 border-b border-slate-200 p-3 flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          <div className="ml-4 bg-white px-3 py-0.5 rounded text-xs text-slate-400 flex-1 text-center">cms.gnj.io/editor</div>
                      </div>
                      
                      {/* Editor Body */}
                      <div className="p-8 grid grid-cols-12 gap-6 h-[400px]">
                          {/* Sidebar */}
                          <div className="col-span-3 border-r border-slate-100 pr-4 space-y-3">
                              {[1,2,3,4].map(i => (
                                  <div key={i} className="h-8 bg-slate-50 rounded-lg animate-pulse"></div>
                              ))}
                          </div>
                          
                          {/* Canvas */}
                          <div className="col-span-9 space-y-6 relative">
                              {/* Hero Block */}
                              <div className={`h-32 bg-indigo-50 rounded-xl border-2 border-dashed border-indigo-200 flex items-center justify-center text-indigo-300 transition-all duration-700 ${active ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                                  <Image size={32} />
                              </div>
                              {/* Text Block */}
                              <div className={`space-y-2 transition-all duration-700 delay-200 ${active ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                                  <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                                  <div className="h-4 bg-slate-100 rounded w-full"></div>
                                  <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                              </div>
                              {/* CTA Block */}
                              <div className={`w-32 h-10 bg-indigo-600 rounded-lg shadow-lg transition-all duration-700 delay-400 ${active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}></div>
                              
                              {/* Cursor */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-[2000ms] ease-in-out" style={{ transform: active ? 'translate(40px, 40px)' : 'translate(0, 0)' }}>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-900 drop-shadow-md">
                                      <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Layers, title: "Headless Architecture", desc: "Deliver content to apps, websites, watches, and kiosks via simple APIs.", delay: 100 },
                  { icon: Edit3, title: "Visual Editor", desc: "Drag-and-drop page building for marketers, no code required.", delay: 200 },
                  { icon: Share2, title: "Approval Workflows", desc: "Granular roles and permissions to maintain brand consistency.", delay: 300 },
                  { icon: Globe, title: "Multi-Language", desc: "Built-in localization management for global reach.", delay: 400 },
                  { icon: Image, title: "Asset Management", desc: "AI-powered tagging and organization for images and videos.", delay: 500 },
                  { icon: FileText, title: "SEO Control", desc: "Fine-grained control over metadata, sitemaps, and redirects.", delay: 600 }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <item.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default CmsPage;