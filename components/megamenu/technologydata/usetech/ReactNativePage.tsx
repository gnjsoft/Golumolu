import React, { useEffect } from 'react';
import { 
  Atom, Smartphone, Layers, ArrowRight, Code, Zap, 
  Cpu, ShieldCheck, RefreshCw, SearchCode, Code2, 
  Briefcase, Users2, UserCheck, CheckCircle2, BarChart3, 
  LifeBuoy, Infinity, Share2, Rocket, Gauge, Search, 
  MessageSquare, Microscope, Building2, Truck, ShoppingCart, 
  Landmark, Factory, History, TestTube2, Kanban, 
  ClipboardList, ClipboardCheck, Warehouse, Radio, Pill, 
  Heart, Stethoscope, Image as ImageIcon, TrendingUp, 
  ShieldAlert, PenTool, Package, Eye, Bot, Ticket, 
  CreditCard, Share, Lock, Clock, FileText, Handshake, 
  Calculator, AlertTriangle, Lightbulb, Video, Binary, 
  Network, Box, Terminal, Monitor, Tv, Glasses, Globe, FileCode,
  Smartphone as MobileIcon, Users as UsersIcon,
  ShieldCheck as ShieldCheckIcon, Briefcase as BriefcaseIcon,
  Search as SearchIcon, CheckCircle as CheckCircleIcon,
  Layout, ListChecks, Workflow, Bug
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ReactNativePage: React.FC = () => {
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
    { title: "React Native Tools", items: ["Expo", "React Navigation", "Redux Persist", "Reduxsauce", "Reactotron"] },
    { title: "Front-end & UI", items: ["React JS", "TypeScript", "NativeBase", "Ignite UI", "UI Kitten", "RN Elements"] },
    { title: "Back-end & API", items: ["REST API", "GraphQL", "Apollo", "AWS", "Azure"] },
    { title: "Testing & DB", items: ["Jest", "Enzyme", "Detox", "SQLite", "Firebase", "Realm", "PouchDB"] }
  ];

  const hiringProcess = [
    { step: "01", title: "Precision Sourcing", desc: "Identifying strong engineers through our large internal vetted talent database and referrals." },
    { step: "02", title: "Soft Skills Check", desc: "Evaluating ownership mindset, adaptability, communication, and security awareness." },
    { step: "03", title: "Technical Assessment", desc: "Senior experts evaluate architecture, state management, and performance optimization." },
    { step: "04", title: "Final Interview", desc: "Discussing preferred delivery models, career motivation, and long-term expectations." },
    { step: "05", title: "Onboarding Period", desc: "A 3-month validation period focusing on code quality, performance, and collaboration." }
  ];

  const softwareTypes = [
    { title: "iOS Mobile Apps", icon: MobileIcon, desc: "High-performance native-like experiences for Apple devices." },
    { title: "Android Mobile Apps", icon: Smartphone, desc: "Robust and scalable applications for the Android ecosystem." },
    { title: "Web Applications", icon: Globe, desc: "Extending mobile codebases to the web with React Native for Web." },
    { title: "Smart TV Apps", icon: Tv, desc: "Interactive applications for Apple TV, Android TV, and more." },
    { title: "VR/AR Apps", icon: Glasses, desc: "Immersive virtual and augmented reality experiences." }
  ];

  const codeQualityPractices = [
    { title: "Rules & Guidelines", icon: ListChecks, desc: "Adherence to standards, modular code, and descriptive naming." },
    { title: "Unit Testing", icon: Bug, desc: "Tests created before code to verify behavior and check assumptions." },
    { title: "Code Review", icon: Eye, desc: "Walkthroughs, inspections, and ad hoc reviews for consistency." },
    { title: "Quality Metrics", icon: Gauge, desc: "Monitoring MI, CC, and Lines of Code for maintainability." }
  ];

  const projectDelivery = [
    { title: "Resource Allocation", icon: UsersIcon, desc: "Assigning perfect candidates through augmentation or outsourcing." },
    { title: "Collaboration", icon: Handshake, desc: "Effective communication and success gauging within the team." },
    { title: "Project Reporting", icon: FileText, desc: "Weekly, bi-weekly, or monthly reports covering all dimensions." },
    { title: "Success Metrics", icon: BarChart3, desc: "KPIs integrated into Agile methodologies for effective measurement." },
    { title: "Adapting to Change", icon: RefreshCw, desc: "Seamless change management without bureaucratic hurdles." },
    { title: "Quality Management", icon: ClipboardCheck, desc: "Essential quality KPIs and activities for each SDLC stage." },
    { title: "Project Security", icon: ShieldCheckIcon, desc: "Core principles of planning and identifying key security roles." },
    { title: "Risk Management", icon: AlertTriangle, desc: "Effectively monitoring and mitigating risks before they occur." },
    { title: "Knowledge Management", icon: Lightbulb, desc: "Accumulating and sharing knowledge effectively within the team." },
    { title: "Documentation", icon: FileCode, desc: "Vital documentation required at each stage with accessible samples." }
  ];

  const cooperationModels = [
    {
      title: "Team Augmentation",
      icon: UserCheck,
      desc: "Rely on GnJ Worldwide's developers to overcome skill deficiency or staff gaps.",
      pricing: "T&M",
      suitable: "Resource gap filling"
    },
    {
      title: "Dedicated Team",
      icon: Users2,
      desc: "A team of skilled talents managed by our Team Lead/PM for your project.",
      pricing: "T&M",
      suitable: "Managed project delivery"
    }
  ];

  return (
    <div className="bg-[#0b0e14] min-h-screen pt-20 font-sans text-slate-200 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#20232a] via-[#1a1c22] to-[#0b0e14] text-white py-32 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#61dafb]/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#61dafb]/10 border border-[#61dafb]/20 text-[#61dafb] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Atom size={14} className="animate-spin-slow" /> React Native Developers for Hire
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Cross-Platform <br/> <span className="text-[#61dafb]">Efficiency</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Reducing up to 50% time and costs for projects targeting iOS and Android with a single codebase.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#61dafb] text-[#20232a] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-white">
                Hire React Native Experts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] shadow-2xl overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#61dafb]/20 rounded-xl flex items-center justify-center text-[#61dafb]">
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Native Performance</h4>
                      <p className="text-xs text-slate-400 italic">One Codebase</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[#61dafb] font-mono text-xl font-bold">iOS & Android</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase mb-1">Time Saved</p>
                    <p className="text-lg font-bold text-white">Up to 50%</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase mb-1">Expertise</p>
                    <p className="text-lg font-bold text-[#61dafb]">Since 2015</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hiring Process Section */}
      <section className="py-24 bg-[#0b0e14]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Five-Step Hiring Process</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Only the top 3% of candidates receive offers through our rigorous validation.</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {hiringProcess.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 bg-[#1a1c22] rounded-3xl border border-white/5 hover:border-[#61dafb]/30 transition-all group"
              >
                <div className="text-4xl font-black text-white/5 absolute top-4 right-6 group-hover:text-[#61dafb]/10 transition-colors">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Types Section */}
      <section className="py-24 bg-[#14171d]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Software Our Developers Build</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">From mobile apps to Smart TV and VR/AR experiences.</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {softwareTypes.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-[#1a1c22] rounded-3xl border border-white/5 text-center group hover:bg-[#20232a] transition-all"
              >
                <div className="w-12 h-12 bg-[#61dafb]/10 text-[#61dafb] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Quality Practices */}
      <section className="py-24 bg-[#0b0e14]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ensuring Code Quality</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Adherence to standards and rigorous testing for stable, high-performance apps.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {codeQualityPractices.map((practice, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-[#1a1c22] rounded-3xl border border-white/5 hover:bg-[#20232a] transition-all"
              >
                <div className="w-12 h-12 bg-[#61dafb]/10 text-[#61dafb] rounded-xl flex items-center justify-center mb-6">
                  <practice.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{practice.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{practice.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Delivery Section */}
      <section className="py-24 bg-[#14171d]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Approach to Project Delivery</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Well-honed project management practices based on transparency and efficiency.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {projectDelivery.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-[#1a1c22] rounded-3xl border border-white/5 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-[#61dafb]/10 text-[#61dafb] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-sm font-bold text-white mb-3">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Models */}
      <section className="py-24 bg-[#0b0e14] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(97,218,251,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Cooperation Model</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Flexible engagement models to meet your specific resource and management needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cooperationModels.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center group hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-[#61dafb] text-[#20232a] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <model.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{model.desc}</p>
                <div className="bg-white/5 rounded-2xl p-4 mb-8 text-left">
                  <p className="text-[10px] text-[#61dafb] uppercase mb-1">Pricing Model</p>
                  <p className="text-sm font-bold">{model.pricing}</p>
                </div>
                <Link to="/contact" className="inline-flex items-center text-[#61dafb] font-bold group-hover:text-white transition-colors">
                  Discuss {model.title} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-[#14171d]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Development Skills</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Comprehensive ecosystem for building high-performing React Native applications.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {devSkills.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-[#61dafb] mb-6 uppercase tracking-widest text-sm border-b border-[#61dafb]/30 inline-block">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#61dafb] rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#61dafb] text-[#20232a] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build with React Native?</h2>
          <p className="text-xl text-[#20232a]/80 mb-12 font-medium">
            Leverage our expertise to build high-performance mobile apps with accelerated time-to-market.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-[#20232a] text-white font-bold py-5 px-12 rounded-2xl hover:bg-black transition-all shadow-2xl transform hover:-translate-y-1 group">
            Hire React Native Experts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReactNativePage;