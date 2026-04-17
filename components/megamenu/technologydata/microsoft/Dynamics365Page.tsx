import React, { useEffect } from 'react';
import { 
  Briefcase, Users, ShoppingCart, BarChart3, ArrowRight, 
  Settings, Heart, MessageSquare, Mic, TrendingUp, 
  Truck, Package, Landmark, UserCheck, ShieldCheck, 
  RefreshCw, SearchCode, LifeBuoy, Terminal, Infinity, 
  Gauge, Search, Microscope, Building2, Factory, 
  UserPlus, History, TestTube2, Kanban, ClipboardList, 
  ClipboardCheck, Warehouse, Radio, Pill, Stethoscope, 
  Image as ImageIcon, ShieldAlert, PenTool, Eye, Bot, 
  Ticket, CreditCard, Share, Lock, Clock, FileText, 
  Handshake, Calculator, AlertTriangle, Lightbulb, 
  Video, Binary, Network, Box, Monitor, Tv, Glasses, 
  Cpu, ListChecks, MapPin, Sparkles, Calendar, User, 
  Scan, Bell, Link as LinkIcon, Activity, 
  Target, Rocket, FileCode, Layers, MousePointer2, 
  LayoutTemplate, Component, Link2, PieChart, 
  Headphones, Megaphone, Star, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Dynamics365Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const crmApps = [
    {
      title: "Dynamics 365 Sales",
      icon: TrendingUp,
      desc: "An app for sales pipeline automation, full-cycle lead management, and AI-powered sales assistance.",
      color: "text-blue-500"
    },
    {
      title: "Dynamics 365 Customer Insights",
      icon: Megaphone,
      desc: "An app for omnichannel marketing implementation, customer journey mapping, and marketing personalization.",
      color: "text-purple-500"
    },
    {
      title: "Dynamics 365 Customer Service",
      icon: Headphones,
      desc: "An app for all-round case management, an omnichannel service desk, and self-service environment.",
      color: "text-green-500"
    },
    {
      title: "Dynamics 365 Customer Voice",
      icon: Mic,
      desc: "An app to create customer experience surveys and omnichannel feedback collection.",
      color: "text-pink-500"
    },
    {
      title: "Dynamics 365 Commerce",
      icon: ShoppingCart,
      desc: "An app to build omnichannel shopping experiences and engage customers on any channel they prefer.",
      color: "text-orange-500"
    }
  ];

  const erpApps = [
    {
      title: "Dynamics 365 Supply Chain Management",
      icon: Truck,
      desc: "Monitor and control all processes within a supply chain to make it more transparent, predictable, and agile.",
      color: "text-indigo-500"
    },
    {
      title: "Dynamics 365 Intelligent Order Management",
      icon: Package,
      desc: "Support different order fulfillment scenarios and ensure uninterrupted order delivery flow.",
      color: "text-cyan-500"
    },
    {
      title: "Dynamics 365 Finance",
      icon: Landmark,
      desc: "Manage financial transactions and perform financial reporting and analytics.",
      color: "text-emerald-500"
    },
    {
      title: "Dynamics 365 Project Operations",
      icon: Kanban,
      desc: "Manage all project activities, from prospecting and time tracking to project financials.",
      color: "text-amber-500"
    },
    {
      title: "Dynamics 365 Human Resources",
      icon: UserCheck,
      desc: "Handle all human resource processes and build data-driven employee experience.",
      color: "text-rose-500"
    }
  ];

  const services = [
    {
      title: "Dynamics 365 Consulting",
      icon: Lightbulb,
      desc: "We decide how to fine-tune apps to maximize their effect while avoiding excessive customization."
    },
    {
      title: "Dynamics 365 Customization",
      icon: PenTool,
      desc: "Creating custom entities, functions, workflows, or branded UI to support unique business processes."
    },
    {
      title: "Dynamics 365 Implementation",
      icon: Rocket,
      desc: "End-to-end implementation covering strategy, data management, security, and integration."
    },
    {
      title: "Dynamics 365 Integration",
      icon: Link2,
      desc: "Integrating corporate systems with Dynamics 365 for centralized data access without switching apps."
    },
    {
      title: "Dynamics 365 Migration",
      icon: RefreshCw,
      desc: "Migrating from legacy systems or on-premises to the cloud with minimal work disruption."
    },
    {
      title: "Dynamics 365 Quality Assurance",
      icon: ShieldCheck,
      desc: "Full cycle of manual and automated testing to minimize risks during implementation or migration."
    },
    {
      title: "Maintenance & Support",
      icon: LifeBuoy,
      desc: "24/7 help desk services, issue resolution, and change request processing for seamless use."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#002050] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Briefcase size={14} className="animate-pulse" /> Microsoft Dynamics 365 Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Unify Your <br/> <span className="text-blue-400">Business</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Intelligent business applications that adapt to your changing needs. Unite your data, people, and processes with modern CRM and ERP.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-blue-700">
                Launch Your Solution <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] shadow-2xl overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      <Settings size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Intelligent ERP</h4>
                      <p className="text-xs text-blue-200 italic">Data-Driven Insights</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-blue-400 font-mono text-xl font-bold">360° View</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-blue-200 uppercase mb-1">CRM Apps</p>
                    <p className="text-lg font-bold text-white">Sales & Service</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-blue-200 uppercase mb-1">ERP Apps</p>
                    <p className="text-lg font-bold text-blue-400">Finance & SCM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CRM Apps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Transform Your CRM Processes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Dynamics 365 apps designed to digitize your vision of customer relationship management.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmApps.map((app, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-blue-500/50 transition-all group"
              >
                <div className={`w-12 h-12 bg-white ${app.color} rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm`}>
                  <app.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{app.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Apps Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Empower Your ERP Needs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Intelligent applications to monitor and control all processes within your organization.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {erpApps.map((app, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-200 hover:border-blue-500/50 transition-all group"
              >
                <div className={`w-12 h-12 bg-slate-50 ${app.color} rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm`}>
                  <app.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{app.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Launch, Improve or Fix Your Apps</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our suite of Dynamics 365 services includes everything you need to successfully digitize your vision.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-12">
            GnJ Worldwide's Dynamics 365 experts are ready to build, customize, and support your intelligent business applications.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-slate-100 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Discuss Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dynamics365Page;