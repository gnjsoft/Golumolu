import React, { useEffect } from 'react';
import { 
  Hexagon, Zap, Globe, Share2, ArrowRight, Layers, Box, 
  Server, Code2, Smartphone, Database, Activity, Cloud, 
  ShieldCheck, CheckCircle2, BarChart3, Settings, LifeBuoy, 
  Terminal, Infinity, Gauge, Search, MessageSquare, 
  Microscope, Building2, Truck, ShoppingCart, Landmark, 
  Factory, Briefcase, Users2, UserCheck, History, 
  TestTube2, Kanban, ClipboardList, ClipboardCheck, 
  Warehouse, Radio, Pill, Heart, Stethoscope, 
  Image as ImageIcon, TrendingUp, ShieldAlert, PenTool, 
  Package, Eye, Bot, Ticket, CreditCard, Share, Lock, 
  Clock, FileText, Handshake, Calculator, AlertTriangle, 
  Lightbulb, Video, Binary, Network, Terminal as TerminalIcon,
  ShieldCheck as ShieldCheckIcon, Users as UsersIcon,
  Briefcase as BriefcaseIcon, FileCode, SearchCode, 
  Cpu, Workflow, Bug, ListChecks, Layout, RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const NodeJsPage: React.FC = () => {
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
    { title: "Frameworks & Libraries", items: ["Express.js", "NestJS", "Socket.IO", "Koa.js", "Feathers", "Electron", "FoalTS"] },
    { title: "Mobile Platforms", items: ["React Native", "Apache Cordova", "NativeScript", "Ionic", "Xamarin", "Android", "iOS"] },
    { title: "Databases", items: ["MongoDB", "DynamoDB", "MySQL", "PostgreSQL", "Oracle", "SQL Server", "Redshift", "S3", "Cassandra"] },
    { title: "Real-time Data", items: ["RabbitMQ", "Apache Flink", "Spark Streaming", "Kafka Streams", "Amazon Kinesis", "Azure Event Hubs"] }
  ];

  const whatWeDevelop = [
    { title: "Web & Mobile Apps", icon: Smartphone, desc: "Real-time, cloud-native, and single-page applications built for high performance." },
    { title: "Web Servers", icon: Server, desc: "Efficient, scalable server-side solutions for data-intensive environments." },
    { title: "Custom APIs", icon: Code2, desc: "Robust and secure APIs to connect your software ecosystem seamlessly." }
  ];

  const industryExpertise = [
    { name: "Healthcare", icon: Heart },
    { name: "Manufacturing", icon: Factory },
    { name: "Financial Services", icon: Landmark },
    { name: "Retail", icon: ShoppingCart },
    { name: "Logistics", icon: Truck },
    { name: "Telecoms", icon: Radio },
    { name: "Education", icon: Microscope },
    { name: "Professional Services", icon: Briefcase }
  ];

  const codeQualityPractices = [
    { title: "Adherence to Rules", icon: ListChecks, desc: "Descriptive naming, modular code, and comprehensive documentation." },
    { title: "Testing & Portability", icon: Bug, desc: "Unit tests, framework APIs, and ensuring code remains portable." },
    { title: "Version Control & Linting", icon: FileCode, desc: "Using Git, SonarQube, and ESLint for consistent code quality." },
    { title: "Code Review", icon: Eye, desc: "Ad hoc reviews, walkthroughs, pull requests, and inspections." },
    { title: "Quality Metrics", icon: Gauge, desc: "Monitoring MI, CC, Depth of Inheritance, and Class Coupling." }
  ];

  const successTactics = [
    { title: "Resource Allocation", icon: UsersIcon, desc: "Assigning the right talent for team augmentation or outsourcing." },
    { title: "Collaboration", icon: Handshake, desc: "Adapting communication frequency and format to stakeholder needs." },
    { title: "Project Reporting", icon: FileText, desc: "Weekly, bi-weekly, and monthly reports on progress and risks." },
    { title: "Success Metrics", icon: BarChart3, desc: "Unbiased measurement using suitable criteria and quantitative KPIs." },
    { title: "Adapting to Change", icon: RefreshCw, desc: "Structured process to assess and prioritize change requests." },
    { title: "Risk Management", icon: AlertTriangle, desc: "Early identification, monitoring, and effective mitigation of risks." },
    { title: "Quality Management", icon: ClipboardCheck, desc: "Code reviews, automated testing, and UAT at each stage." },
    { title: "Security Management", icon: ShieldCheckIcon, desc: "Core principles of planning and key security roles." },
    { title: "Documentation", icon: FileCode, desc: "Essential documentation required at each SDLC stage." },
    { title: "Knowledge Management", icon: Lightbulb, desc: "Accumulating and sharing collective wisdom within the team." }
  ];

  const cooperationModels = [
    {
      title: "Team Augmentation",
      icon: UserCheck,
      desc: "Fill skill gaps with Node.js developers (from 0.5 FTE) managed by you.",
      pricing: "T&M",
      suitable: "Skill gap filling"
    },
    {
      title: "Dedicated Team",
      icon: Users2,
      desc: "Team of 4+ developers and a PM on our side to manage and report.",
      pricing: "T&M",
      suitable: "Managed development"
    },
    {
      title: "Turn-key Outsourcing",
      icon: Briefcase,
      desc: "Outsource the entire project to reduce management efforts and costs.",
      pricing: "Fixed Price / T&M",
      suitable: "Full project delivery"
    }
  ];

  return (
    <div className="bg-[#1a1a1a] min-h-screen pt-20 font-sans text-slate-100 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#333333] via-[#2d2d2d] to-[#1a1a1a] text-white py-32 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#68A063]/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#68A063]/10 border border-[#68A063]/20 text-[#68A063] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Hexagon size={14} className="animate-pulse" /> Node.js Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Fast & <br/> <span className="text-[#68A063]">Scalable</span> Node.js
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Delivering high-performance software for data-intensive environments across 30+ industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#68A063] text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-[#5a8e56]">
                Hire Node.js Experts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
                    <div className="w-12 h-12 bg-[#68A063]/20 rounded-xl flex items-center justify-center text-[#68A063]">
                      <Terminal size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">V8 Engine</h4>
                      <p className="text-xs text-slate-400 italic">Non-blocking I/O</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[#68A063] font-mono text-xl font-bold">Event-Driven</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase mb-1">Performance</p>
                    <p className="text-lg font-bold text-white">High Throughput</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase mb-1">Ecosystem</p>
                    <p className="text-lg font-bold text-[#68A063]">NPM Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What We Develop Section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What We Develop with Node.js</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Building efficient, scalable software that operates in real-time, data-intensive environments.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatWeDevelop.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-[#252525] rounded-3xl border border-white/5 hover:border-[#68A063]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#68A063]/10 text-[#68A063] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#68A063] group-hover:text-white transition-all shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Industry Expertise</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Delivering Node.js solutions across diverse business domains with specialized knowledge.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryExpertise.map((industry, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 flex items-center gap-4 group hover:border-[#68A063] transition-all"
              >
                <div className="w-10 h-10 bg-[#68A063]/10 text-[#68A063] rounded-lg flex items-center justify-center group-hover:bg-[#68A063] group-hover:text-white transition-all">
                  <industry.icon size={20} />
                </div>
                <span className="font-bold text-slate-300">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Quality Practices */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Code Quality Practices</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Ensuring clean, maintainable, and high-performing code through established standards.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {codeQualityPractices.map((practice, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-[#252525] rounded-2xl border border-white/5 hover:bg-[#2d2d2d] transition-all"
              >
                <div className="w-10 h-10 bg-[#68A063]/10 text-[#68A063] rounded-lg flex items-center justify-center mb-4">
                  <practice.icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{practice.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{practice.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tactics */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tactics for Successful Outcomes</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Strategies and practices designed to deliver on client expectations with transparency.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {successTactics.map((tactic, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-[#1a1a1a] rounded-3xl border border-white/5 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-[#68A063]/10 text-[#68A063] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <tactic.icon size={24} />
                </div>
                <h3 className="text-sm font-bold text-white mb-3">{tactic.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{tactic.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Models */}
      <section className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(104,160,99,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Cooperation Model</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Flexible engagement models to meet your specific resource and management needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cooperationModels.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center group hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-[#68A063] text-white rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <model.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{model.desc}</p>
                <div className="bg-white/5 rounded-2xl p-4 mb-8 text-left">
                  <p className="text-[10px] text-[#68A063] uppercase mb-1">Pricing Model</p>
                  <p className="text-sm font-bold">{model.pricing}</p>
                </div>
                <Link to="/contact" className="inline-flex items-center text-[#68A063] font-bold group-hover:text-white transition-colors">
                  Request Option <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-[#252525]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Node.js Development Skills</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Comprehensive ecosystem for building high-performing Node.js applications.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {devSkills.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-[#68A063] mb-6 uppercase tracking-widest text-sm">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#68A063] rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#68A063] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale with Node.js?</h2>
          <p className="text-xl text-white/90 mb-12">
            Discuss your project details with our experts and get a tailored estimate for your Node.js development needs.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[#68A063] font-bold py-5 px-12 rounded-2xl hover:bg-slate-100 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NodeJsPage;