import React, { useEffect } from 'react';
import { 
  Layers, Box, Smartphone, ArrowRight, Database, Zap, 
  CheckCircle2, Layout, Globe, Workflow, BarChart3, 
  Settings, Users, ShieldCheck, RefreshCw, SearchCode, 
  LifeBuoy, Terminal, Infinity, Gauge, Search, 
  MessageSquare, Microscope, Building2, Truck, 
  ShoppingCart, Landmark, Factory, Briefcase, 
  UserCheck, History, TestTube2, Kanban, 
  ClipboardList, ClipboardCheck, Warehouse, Radio, 
  Pill, Heart, Stethoscope, Image as ImageIcon, 
  TrendingUp, ShieldAlert, PenTool, Package, Eye, 
  Bot, Ticket, CreditCard, Share, Lock, Clock, 
  FileText, Handshake, Calculator, AlertTriangle, 
  Lightbulb, Video, Binary, Network, Monitor, 
  Tv, Glasses, Cpu, ListChecks, MapPin, 
  Mic, Sparkles, Calendar, User, Scan, Bell, 
  Link as LinkIcon, Activity, DollarSign, Target, Rocket,
  FileCode, Share2, MousePointer2, Zap as ZapIcon,
  LayoutTemplate, Component, Link2, PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PowerAppsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const appTypes = [
    {
      title: "Canvas Apps",
      icon: MousePointer2,
      desc: "Drag-and-drop elements onto a canvas with Excel-style formulas. Highly customizable and pixel-perfect.",
      useCase: "Simple logic: holiday approval, event registration."
    },
    {
      title: "Model-driven Apps",
      icon: Database,
      desc: "Created based on data models built on Dataverse. Layout is pre-defined for consistent functionality.",
      useCase: "Complex logic: customer service, event management."
    },
    {
      title: "Web Portals",
      icon: Globe,
      desc: "Designed using preconfigured templates for users outside organizations like customers and partners.",
      useCase: "External access: partner portals, customer self-service."
    }
  ];

  const integrations = [
    { title: "Power BI", icon: PieChart, desc: "Build apps that offer diverse reports and dashboards." },
    { title: "Power Automate", icon: RefreshCw, desc: "Create logic for seamless workflow automation." },
    { title: "SharePoint", icon: Share2, desc: "Extract and store data from lists and libraries." },
    { title: "Microsoft Teams", icon: Users, desc: "Complete tasks without leaving the Teams workspace." }
  ];

  const useCases = [
    { title: "Workflow Management", icon: Workflow, desc: "Custom workflows for approvals, onboarding, and tracking with real-time dashboards." },
    { title: "Financial Management", icon: Calculator, desc: "Expense reporting, AP/AR processing, invoice creation, and business card scanning." },
    { title: "Cost Control", icon: TrendingUp, desc: "Budgeting, cost allocation, and tracking COGS or supply usage with detailed reporting." },
    { title: "Inventory Management", icon: Warehouse, desc: "Automated data uploading, RFID/Image storage, and keyword search for SKUs." },
    { title: "Configure Price Quote", icon: Ticket, desc: "AI-based price calculation, sales validation, and automated document creation." },
    { title: "Asset Management", icon: Package, desc: "Asset tracking, booking (MRI/Vehicles), check-in/out, and warranty tracking." },
    { title: "HR Management", icon: UserCheck, desc: "Workforce planning, recruiting, time tracking, and performance reviews." },
    { title: "Portals", icon: LayoutTemplate, desc: "Employee, customer, patient, vendor, and eLearning portals for seamless interaction." },
    { title: "Inspection & Audit", icon: ClipboardCheck, desc: "Safety compliance, quality control, incident reporting, and customer data collection." },
    { title: "Project Management", icon: Kanban, desc: "Planning, scheduling, resource tracking, and team performance reporting." },
    { title: "Scheduling & Booking", icon: Calendar, desc: "Appointment scheduling, room/equipment booking, and automated notifications." }
  ];

  const benefits = [
    { title: "2-3x Development Speed", icon: ZapIcon, desc: "Accelerated UI development for simple apps due to drag-and-drop designer." },
    { title: "-74% Development Costs", icon: DollarSign, desc: "Significant cost reduction by using templates and ready-made components." },
    { title: "Maximized ROI", icon: Target, desc: "Build on top of the Microsoft ecosystem you already own, cutting licensing complexity." },
    { title: "Easy Visual Changes", icon: MousePointer2, desc: "Add fields or tweak workflows visually with no coding required for updates." }
  ];

  const pricing = [
    {
      title: "Per App Plan",
      price: "₹415",
      period: "user/app/month",
      desc: "Run one app per user. Flexibility to stack licenses for each additional app.",
      features: ["Best for single-purpose apps", "Stackable licenses", "Admin center access required"]
    },
    {
      title: "Per User Plan",
      price: "₹1,660",
      period: "user/month",
      desc: "Run unlimited apps per user. One license for all the apps they need.",
      features: ["Unlimited apps", "Full platform access", "Simplified management"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#742774] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-400/10 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-purple-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Layers size={14} className="animate-pulse" /> Microsoft Power Apps
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Low-Code <br/> <span className="text-purple-300">High Impact</span>
            </h1>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed max-w-xl">
              Quickly build custom business apps that connect to your data and work across web and mobile. Used by 86% of Fortune 500 companies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#742774] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-purple-100">
                Start Building <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
                      <Component size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Visual Designer</h4>
                      <p className="text-xs text-purple-200 italic">Drag-and-Drop</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-purple-300 font-mono text-xl font-bold">200+ Connectors</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-purple-200 uppercase mb-1">Dev Speed</p>
                    <p className="text-lg font-bold text-white">2-3x Faster</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-purple-200 uppercase mb-1">Cost Savings</p>
                    <p className="text-lg font-bold text-purple-300">-74% Average</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* App Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Types of Apps to Build</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">From simple visual designs to complex data-driven enterprise solutions.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {appTypes.map((type, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                  <type.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{type.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{type.desc}</p>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <p className="text-[10px] text-purple-600 uppercase font-bold mb-1">Best For</p>
                  <p className="text-xs text-slate-700">{type.useCase}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Useful Integrations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Power Apps works seamlessly with the tools you already use every day.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col items-center text-center group hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Power Apps Use Cases</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Automate any business area with robust, tailored solutions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white text-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#742774] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(177,70,194,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Benefits of Power Apps</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">Drive efficiency and maximize ROI from your existing Microsoft ecosystem.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-purple-400 text-[#742774] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-purple-200 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Power Apps Pricing Plans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choose the plan that best fits your organization's app development needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricing.map((plan, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 text-center group hover:bg-white hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                  <span className="text-slate-500 text-sm ml-2">{plan.period}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">{plan.desc}</p>
                <ul className="text-left space-y-3 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle2 size={16} className="text-purple-600" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="w-full inline-flex items-center justify-center bg-purple-600 text-white font-bold py-4 rounded-2xl hover:bg-purple-700 transition-all group">
                  Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-purple-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Automate Your Business?</h2>
          <p className="text-xl text-purple-100 mb-12">
            GnJ Worldwide's Power App development team is ready to build a robust solution to seamlessly automate any business area.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-purple-600 font-bold py-5 px-12 rounded-2xl hover:bg-slate-100 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Discuss Your Needs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PowerAppsPage;