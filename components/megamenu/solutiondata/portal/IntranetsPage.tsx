import React, { useEffect, useState } from 'react';
import { 
  Users, Share2, MessageSquare, FileText, ArrowRight, Database, 
  Layout, ShieldCheck, Settings, Search, Rocket, CheckCircle2,
  Briefcase, Heart, Layers, Monitor, Smartphone, Globe, 
  Award, Zap, PenTool, Activity, Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const IntranetsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const competencies = [
    { icon: Award, text: "Microsoft recognition for ample expertise in SharePoint intranets." },
    { icon: Users, text: "20+ Microsoft-certified experts on board." },
    { icon: CheckCircle2, text: "150+ successful projects with Microsoft 365 and SharePoint." }
  ];

  const services = [
    {
      title: "SharePoint Intranet Consulting",
      icon: Search,
      desc: "We deliver intranets aligned with industry specifics and business operations, assisting in choosing features that bring real value."
    },
    {
      title: "Architecture Design",
      icon: Layers,
      desc: "Optimal SharePoint architecture ensuring error-free performance, structured storage, and easy access to content."
    },
    {
      title: "Intranet UI/UX",
      icon: PenTool,
      desc: "Intuitive, user-friendly, and eye-catching designs that aren't just feature-rich but also delightful to use."
    },
    {
      title: "Intranet Customization",
      icon: Settings,
      desc: "Custom features aligned with your organizational structure, business processes, and employees' habits."
    },
    {
      title: "Intranet Testing",
      icon: Activity,
      desc: "Rigorous QA to reveal even the smallest issues that could hinder performance or user experience."
    },
    {
      title: "Support & Maintenance",
      icon: Headphones,
      desc: "Flawless operation, robust security, and training for administrators and end-users."
    }
  ];

  const intranetTypes = [
    {
      title: "Business-oriented Intranet",
      icon: Briefcase,
      desc: "Centered around operations and processes. Streamlines project management and helps employees fulfill tasks faster."
    },
    {
      title: "Social-oriented Intranet",
      icon: Heart,
      desc: "Focused on social life, promoting corporate culture, increasing loyalty, and supporting employee recognition."
    },
    {
      title: "Mixed Intranet",
      icon: Zap,
      desc: "A combination of productivity and social features, often integrated with enterprise systems like DMS or HRS."
    }
  ];

  const capabilities = [
    { title: "Collaborating without limits", icon: Share2, desc: "Relevant collaboration tools that fit your employees' working style." },
    { title: "Excelling at projects", icon: Layout, desc: "Leverage SharePoint to easily manage projects, schedules, and team activities." },
    { title: "Reaching for info & people", icon: Search, desc: "Tailored search capabilities to instantly find relevant information and colleagues." },
    { title: "Augmenting knowledge", icon: Database, desc: "Process, store, and improve corporate knowledge for easy reuse." },
    { title: "Sense of community", icon: Users, desc: "Corporate identity and engaging features that make the intranet a favorite social hub." },
    { title: "Productive anywhere", icon: Smartphone, desc: "Adaptive design for different devices and browsers for seamless collaboration." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 selection:bg-indigo-500 selection:text-white overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <div className={`lg:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
                      <Monitor size={14} /> SharePoint Excellence
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                      Design a Powerful <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">SharePoint Intranet</span>
                  </h1>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                      GnJ Worldwide applies 18-year SharePoint expertise to help organizations effectively build and use SharePoint intranets to connect hires and nurture corporate culture.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center">
                          Discuss My Needs <ArrowRight className="ml-2" />
                      </Link>
                      <Link to="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center">
                          Get a Cost Estimate
                      </Link>
                  </div>
              </div>
              
              <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                              <Award size={24} />
                          </div>
                          <div>
                              <div className="text-slate-900 font-bold">Microsoft Partner</div>
                              <div className="text-xs text-slate-500">Gold Certified Expertise</div>
                          </div>
                      </div>
                      <div className="space-y-4">
                          {competencies.map((comp, i) => (
                              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                  <comp.icon size={20} className="text-indigo-600 shrink-0" />
                                  <span className="text-sm font-medium text-slate-700">{comp.text}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">All-Inclusive Intranet Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We assist you at any stage of your intranet life cycle, from initial consulting to long-term evolution.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <service.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Intranet Types */}
      <div className="bg-indigo-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Intranet Types We Deliver</h2>
                  <p className="text-indigo-200 max-w-2xl mx-auto">Tailored solutions depending on the key goals your company wants to achieve.</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                  {intranetTypes.map((type, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all">
                          <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-8">
                              <type.icon size={32} />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                          <p className="text-indigo-100 leading-relaxed">{type.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Intranet Capabilities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Increasing the value of each SharePoint feature to make everyday tasks effortless.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, idx) => (
                  <div key={idx} className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                      <div className="shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                          <cap.icon size={24} />
                      </div>
                      <div>
                          <h4 className="font-bold text-slate-900 mb-2">{cap.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Service Options */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Service Options</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Flexible engagement models to suit your specific business needs.</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                  {/* Development */}
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] flex flex-col">
                      <h3 className="text-2xl font-bold mb-6">Development</h3>
                      <p className="text-slate-400 mb-8 text-sm">From-scratch development according to three deployment models:</p>
                      <ul className="space-y-3 mb-10 flex-grow">
                          {["On-premises (Subscription Edition)", "Cloud (SharePoint Online)", "Hybrid"].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm">
                                  <CheckCircle2 size={16} className="text-indigo-500" /> {item}
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="bg-indigo-600 text-white py-4 rounded-xl font-bold text-center hover:bg-indigo-500 transition-all">
                          Request Development
                      </Link>
                  </div>
                  {/* Migration */}
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] flex flex-col">
                      <h3 className="text-2xl font-bold mb-6">Migration</h3>
                      <p className="text-slate-400 mb-8 text-sm">Seamless transition from legacy systems or third-party platforms:</p>
                      <ul className="space-y-3 mb-10 flex-grow">
                          {["Third-party to SharePoint On-prem", "Third-party to SharePoint Online", "Legacy SharePoint to Online/On-prem"].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm">
                                  <CheckCircle2 size={16} className="text-indigo-500" /> {item}
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="bg-indigo-600 text-white py-4 rounded-xl font-bold text-center hover:bg-indigo-500 transition-all">
                          Request Migration
                      </Link>
                  </div>
                  {/* Customization */}
                  <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] flex flex-col">
                      <h3 className="text-2xl font-bold mb-6">Customization</h3>
                      <p className="text-slate-400 mb-8 text-sm">Branding and redesign to promote corporate values and engagement:</p>
                      <ul className="space-y-3 mb-10 flex-grow">
                          {["Intranet Branding & Identity", "Custom Web Parts & Add-ins", "UI/UX Redesign for Popularity"].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm">
                                  <CheckCircle2 size={16} className="text-indigo-500" /> {item}
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="bg-indigo-600 text-white py-4 rounded-xl font-bold text-center hover:bg-indigo-500 transition-all">
                          Request Customization
                      </Link>
                  </div>
              </div>
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to connect your hires?</h2>
                  <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Partner with GnJ Worldwide to build a SharePoint intranet that nurtures culture and boosts productivity.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
                          Discuss My Needs
                      </Link>
                      <Link to="/contact" className="bg-indigo-900 text-white border border-indigo-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-800 transition-all">
                          Get a Cost Estimate
                      </Link>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default IntranetsPage;
