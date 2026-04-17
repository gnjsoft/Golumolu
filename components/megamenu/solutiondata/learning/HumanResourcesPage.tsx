import React, { useEffect, useState } from 'react';
import { 
  Users, Heart, Calendar, Award, Briefcase, Smile, 
  CheckCircle2, UserPlus, TrendingUp, ArrowRight, 
  Database, ShieldCheck, Zap, Search, Layout, 
  Settings, Activity, Clock, IndianRupee, Rocket,
  MessageSquare, BarChart3, Globe, Code, Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HumanResourcesPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const functionalModules = [
    {
      title: "HR Administrative Tasks",
      icon: Database,
      items: ["Employee database & profiles", "Employment life cycle transactions", "Payroll management", "Employee benefits", "Reporting and analytics"]
    },
    {
      title: "HR Service Management",
      icon: Headphones,
      items: ["Corporate policies & procedures", "Employee handbook & Org chart", "Employee knowledge base", "Self-service portal", "Virtual assistants & chatbots"]
    },
    {
      title: "Talent Management",
      icon: UserPlus,
      items: ["Recruiting & Onboarding", "Performance & Competency mgmt", "Career & succession planning", "Learning and development", "AI behavior prediction"]
    },
    {
      title: "Labor Management",
      icon: Clock,
      items: ["Absence management", "Worktime tracking", "Time & attendance evaluation", "Employee scheduling", "Tasks and activities tracking"]
    }
  ];

  const principles = [
    {
      title: "Integrity",
      desc: "Full-cycle HR software development from ideation to continuous support. You get all-encompassing expert assistance and full documentation.",
      icon: ShieldCheck
    },
    {
      title: "Consistent Collaboration",
      desc: "Flexible communication models and joint planning. We promote open discussion of changes to ensure alignment with your expectations.",
      icon: Users
    },
    {
      title: "Minimized Risks",
      desc: "Smooth and predictable development flow via precise task scoping and feasibility studies to guarantee financial gains.",
      icon: Activity
    },
    {
      title: "Transparency",
      desc: "Tailored sets of KPIs to measure efficiency. We provide regular health reports and direct access to project tracking systems.",
      icon: Search
    }
  ];

  const services = [
    {
      title: "HR Product Consulting",
      desc: "Market analysis, solution conceptualization, USP definition, and UX/UI design including interactive prototyping.",
      icon: Search,
      action: "I need this"
    },
    {
      title: "Developing HR System from Scratch",
      desc: "Business needs analysis, architecture design, development, QA, and continuous support for your custom HR system.",
      icon: Code,
      action: "I need this"
    },
    {
      title: "Taking Over HR Product Development",
      desc: "Reduced development costs, minimized production defects, and improved code quality, security, and performance.",
      icon: Rocket,
      action: "I need this"
    },
    {
      title: "Switching to the SaaS Model",
      desc: "Designing scalable multi-tenancy architecture and cloud-native development using microservices.",
      icon: Globe,
      action: "I need this"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative bg-emerald-900 py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <div className={`lg:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
                      <Heart size={14} /> HR Software Development
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                      Empowering Your <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Human Capital</span>
                  </h1>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                      GnJ Worldwide creates custom HR management software that streamlines personnel tracking, payroll, recruiting, and learning to nurture your corporate culture.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center">
                          Start Your Project <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>
              
              <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                              <Users size={24} />
                          </div>
                          <div>
                              <div className="text-slate-900 font-bold">Employee Lifecycle</div>
                              <div className="text-xs text-slate-500">Unified Management</div>
                          </div>
                      </div>
                      <div className="space-y-4">
                          {[
                              { label: "Recruitment", val: 85, color: "bg-emerald-500" },
                              { label: "Onboarding", val: 92, color: "bg-teal-500" },
                              { label: "Retention", val: 78, color: "bg-emerald-400" }
                          ].map((stat, i) => (
                              <div key={i} className="space-y-1">
                                  <div className="flex justify-between text-xs font-bold text-slate-600">
                                      <span>{stat.label}</span>
                                      <span>{stat.val}%</span>
                                  </div>
                                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                      <div className={`h-full ${stat.color} transition-all duration-1000 delay-500`} style={{ width: active ? `${stat.val}%` : '0%' }}></div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Functional Modules */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">HR Software Functional Modules</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We develop comprehensive modules that cover every aspect of the modern human resource management lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {functionalModules.map((module, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <module.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{module.title}</h3>
                      <ul className="space-y-2">
                          {module.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                  <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      </div>

      {/* Cooperation Principles */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Cooperation Principles</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Four pillars of GnJ Worldwide's collaborative approach to leading HR software initiatives to success.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {principles.map((principle, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all">
                          <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                              <principle.icon size={24} />
                          </div>
                          <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                          <p className="text-sm text-slate-400 leading-relaxed">{principle.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">HR Software Development Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">From consulting to full-cycle development and SaaS migration, we offer end-to-end HR tech solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-start">
                      <div className="shrink-0 w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                          <service.icon size={32} />
                      </div>
                      <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                          <Link to="/contact" className="inline-flex items-center text-emerald-600 font-bold hover:gap-2 transition-all">
                              {service.action} <ArrowRight size={18} className="ml-1" />
                          </Link>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Timeframes & Pricing */}
      <div className="bg-emerald-50 py-24 border-y border-emerald-100">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16">
                  {/* Timeframes */}
                  <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                          <Clock className="text-emerald-600" /> Development Timeframes
                      </h2>
                      <div className="space-y-6">
                          {[
                              { label: "MVP Development", time: "2–4 months" },
                              { label: "MVP with Innovative Component", time: "3–6 months" },
                              { label: "Regular Releases", time: "Every 2–6 weeks" },
                              { label: "Hotfixes & Minor Changes", time: "Several times a day" }
                          ].map((item, i) => (
                              <div key={i} className="flex justify-between items-center p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                                  <span className="font-bold text-slate-700">{item.label}</span>
                                  <span className="text-emerald-600 font-bold">{item.time}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                  {/* Pricing */}
                  <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                          <IndianRupee className="text-emerald-600" /> Pricing Models
                      </h2>
                      <div className="space-y-6">
                          {[
                              { title: "Capped Time and Material", desc: "Used for agile iterative development to react to feedback and changing requirements." },
                              { title: "Fixed Price", desc: "Used for well-defined and stable project scope, often divided into estimated phases." },
                              { title: "Fixed Monthly Fee", desc: "Used for mature SaaS HR products in the support and maintenance mode." }
                          ].map((item, i) => (
                              <div key={i} className="p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                  <p className="text-sm text-slate-600">{item.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to transform your HR?</h2>
                  <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Partner with GnJ Worldwide to build custom HR software that streamlines your processes and empowers your people.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-emerald-900 text-white border border-emerald-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HumanResourcesPage;
