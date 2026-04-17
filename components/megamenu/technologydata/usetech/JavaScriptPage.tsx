import React, { useEffect } from 'react';
import { 
  Code2, Monitor, Smartphone, Globe, ArrowRight, Zap, Box, 
  Layers, Cpu, ShieldCheck, RefreshCw, SearchCode, 
  CheckCircle2, BarChart3, Settings, LifeBuoy, Terminal, 
  Infinity, Gauge, Search, MessageSquare, Microscope, 
  Building2, Truck, ShoppingCart, Landmark, Factory, 
  Briefcase, Users2, UserCheck, History, TestTube2, 
  Kanban, ClipboardList, ClipboardCheck, Warehouse, 
  Radio, Pill, Heart, Stethoscope, Image as ImageIcon, 
  TrendingUp, ShieldAlert, PenTool, Package, Eye, Bot, 
  Ticket, CreditCard, Share, Lock, Clock, FileText, 
  Handshake, Calculator, AlertTriangle, Lightbulb, 
  Video, Binary, Network, FileCode, Workflow, Bug, 
  ListChecks, Layout, Rocket, Laptop, Database, 
  Cloud, Smartphone as MobileIcon, Layers as LayersIcon,
  Briefcase as BriefcaseIcon, Users as UsersIcon,
  ShieldCheck as ShieldCheckIcon, Terminal as TerminalIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SiJavascript } from 'react-icons/si';

const JavaScriptPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const devSkills = [
    { title: "Frameworks & Libraries", items: ["Angular JS", "React JS", "Vue.js", "Next.js", "Express.js", "MeteorJS"] },
    { title: "Back End", items: ["Node.js", "NestJS", "Fastify", "Koa", "Hapi"] },
    { title: "Mobile & Desktop", items: ["React Native", "Apache Cordova", "NativeScript", "Ionic", "Electron"] },
    { title: "Cloud & SaaS", items: ["AWS", "Azure", "GCP", "Dynamics 365", "Salesforce", "Magento", "ServiceNow"] }
  ];

  const devAreas = [
    { title: "Web Apps & SaaS", icon: Globe, desc: "Interactive web applications of any scale with accelerated loading time." },
    { title: "Mobile Apps", icon: MobileIcon, desc: "Native and cross-platform mobile experiences for iOS and Android." },
    { title: "Progressive Web Apps", icon: Rocket, desc: "Reliable, fast, and engaging PWAs that work on any device." },
    { title: "Custom APIs", icon: Code2, desc: "Robust server-side logic and seamless third-party integrations." },
    { title: "Legacy Migration", icon: RefreshCw, desc: "Modernizing outdated applications to modern JavaScript ecosystems." },
    { title: "Real-time Apps", icon: Zap, desc: "Low-latency applications like chats, dashboards, and collaboration tools." }
  ];

  const industryExpertise = [
    { name: "Retail", icon: ShoppingCart },
    { name: "Healthcare", icon: Heart },
    { name: "Manufacturing", icon: Factory },
    { name: "Financial Services", icon: Landmark },
    { name: "Logistics", icon: Truck },
    { name: "Telecoms", icon: Radio },
    { name: "Education", icon: Microscope },
    { name: "Professional Services", icon: Briefcase }
  ];

  const codeQualityPractices = [
    { title: "Adherence to Rules", icon: ListChecks, desc: "Following style guides, descriptive naming, and modular units." },
    { title: "Documentation", icon: FileText, desc: "Comprehensive READMEs and clear comments on functions/methods." },
    { title: "Testing & Portability", icon: Bug, desc: "Unit tests, framework APIs, and ensuring code remains portable." },
    { title: "Review & Linting", icon: Eye, desc: "Pull requests, walkthroughs, and tools like SonarQube and ESLint." },
    { title: "Quality Metrics", icon: Gauge, desc: "Monitoring MI, CC, Depth of Inheritance, and Class Coupling." }
  ];

  const successPractices = [
    { title: "Project Planning", icon: Kanban, desc: "Accurate scope definition and comprehensive work breakdown." },
    { title: "Building Teams", icon: UsersIcon, desc: "Assembling ideal teams with pre-vetted, matching talents." },
    { title: "Estimating Costs", icon: Calculator, desc: "Accurate timelines and costs with optimization strategies." },
    { title: "Tracking Progress", icon: BarChart3, desc: "KPI-driven measurement and Agile progress monitoring." },
    { title: "Risk Management", icon: AlertTriangle, desc: "Control and mitigation procedures at each SDLC stage." },
    { title: "Managing Changes", icon: RefreshCw, desc: "Integrating high-value changes while mitigating scope creep." },
    { title: "Documentation", icon: FileCode, desc: "Providing essential software documents for key decisions." },
    { title: "Knowledge Transfer", icon: Lightbulb, desc: "Consistent sharing using structured techniques and tools." }
  ];

  const serviceOptions = [
    {
      title: "Team Augmentation",
      icon: UserCheck,
      desc: "Cover resource/skill gaps with developers managed by you directly.",
      pricing: "T&M",
      suitable: "Resource gap filling"
    },
    {
      title: "Dedicated Team",
      icon: Users2,
      desc: "Team of 4+ developers managed by a PM on our side.",
      pricing: "T&M",
      suitable: "Managed project support"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#F7DF1E] text-black py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 border border-black/20 text-black text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="animate-pulse flex items-center"><SiJavascript size={14} /></span> JavaScript Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Interactive <br/> <span className="text-black/70">Experiences</span> with JS
            </h1>
            <p className="text-xl text-black/80 mb-10 leading-relaxed max-w-xl">
              Building richly interactive web and mobile applications with accelerated loading time and modern standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-black text-[#F7DF1E] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-slate-800">
                Hire JS Experts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-black/5 backdrop-blur-2xl border border-black/10 p-10 rounded-[3rem] shadow-2xl overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-[#F7DF1E] font-bold text-2xl">
                      JS
                    </div>
                    <div>
                      <h4 className="font-bold text-black">ES6+ / TS</h4>
                      <p className="text-xs text-black/60 italic">Modern Standards</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-black font-mono text-xl font-bold">Full-Stack</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/5 rounded-2xl border border-black/5">
                    <p className="text-[10px] text-black/50 uppercase mb-1">Performance</p>
                    <p className="text-lg font-bold text-black">Fast Loading</p>
                  </div>
                  <div className="p-4 bg-black/5 rounded-2xl border border-black/5">
                    <p className="text-[10px] text-black/50 uppercase mb-1">Interactivity</p>
                    <p className="text-lg font-bold text-black">Rich UX</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Development Areas Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Development Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Leveraging JavaScript's versatility to build dynamic content across all platforms.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devAreas.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-[#F7DF1E]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F7DF1E] transition-all shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Industry Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Delivering specialized JavaScript solutions across diverse business domains.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryExpertise.map((industry, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4 group hover:border-[#F7DF1E] transition-all"
              >
                <div className="w-10 h-10 bg-yellow-50 text-black rounded-lg flex items-center justify-center group-hover:bg-[#F7DF1E] transition-all">
                  <industry.icon size={20} />
                </div>
                <span className="font-bold text-slate-800">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Quality Practices */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Code Quality Practices</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Ensuring clean, modular, and maintainable code through established standards.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {codeQualityPractices.map((practice, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 bg-yellow-50 text-black rounded-lg flex items-center justify-center mb-4">
                  <practice.icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{practice.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{practice.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Practices */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,223,30,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Practices for Successful Delivery</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Structured methods to manage risks, communication, and frequent changes.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successPractices.map((practice, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-[#F7DF1E] text-black rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <practice.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">{practice.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{practice.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">JavaScript Development Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Flexible engagement models to meet your specific resource and management needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {serviceOptions.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 group hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-yellow-50 text-black rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F7DF1E] transition-all">
                  <model.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{model.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{model.desc}</p>
                <div className="bg-white rounded-2xl p-4 mb-8 border border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase mb-1">Pricing Model</p>
                  <p className="text-sm font-bold text-slate-900">{model.pricing}</p>
                </div>
                <Link to="/contact" className="inline-flex items-center text-black font-bold hover:text-[#F7DF1E] transition-colors">
                  Discuss {model.title} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Development Skills</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive ecosystem for building modern digital experiences.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {devSkills.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-black mb-6 uppercase tracking-widest text-sm border-b-2 border-[#F7DF1E] inline-block">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#F7DF1E] rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#F7DF1E] text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build with JavaScript?</h2>
          <p className="text-xl text-black/80 mb-12">
            Leverage our expertise to build richly interactive applications with accelerated loading time.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-black text-[#F7DF1E] font-bold py-5 px-12 rounded-2xl hover:bg-slate-800 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JavaScriptPage;