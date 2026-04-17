import React, { useEffect } from 'react';
import { 
  Cpu, HardDrive, Gamepad2, Settings, ArrowRight, Activity, 
  Terminal, ShieldCheck, RefreshCw, SearchCode, Code2, 
  Briefcase, Users2, UserCheck, CheckCircle2, BarChart3, 
  LifeBuoy, Infinity, Share2, Rocket, Gauge, Search, 
  Layers, Globe, Smartphone, Microscope, Building2, 
  Truck, ShoppingCart, Landmark, Factory, History, 
  TestTube2, Kanban, ClipboardList, ClipboardCheck, 
  Warehouse, Radio, Pill, Heart, Stethoscope, 
  Image as ImageIcon, TrendingUp, ShieldAlert, PenTool, 
  Package, Eye, Bot, Ticket, CreditCard, Share, Lock, 
  Clock, FileText, Handshake, Calculator, AlertTriangle, 
  Lightbulb, Video, Binary, Network, Box, Glasses, Building as FactoryIcon, Terminal as TerminalIcon,
  ShieldCheck as ShieldCheckIcon, Users as UsersIcon,
  Briefcase as BriefcaseIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SiCplusplus } from 'react-icons/si';

const CppPage: React.FC = () => {
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
    { title: "Frameworks & Libraries", items: ["Qt", "C++ STL", "MFC", "WTL", "ATL", "Boost", "wxWidgets", "FFmpeg", "OpenSSL", "Ogre3D", "OpenGL", "DirectX"] },
    { title: "Parallel & Performance", items: ["OpenCL", "OpenMP", "TBB", "Intel IPP", "MPI", "Protocol Buffers", "OpenCV", "NaCl"] },
    { title: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Cassandra", "Hive", "HBase"] },
    { title: "Platforms & Tools", items: ["Windows", "macOS", "Linux", "iOS", "Android", "Visual Studio", "CMake", "Git", "Perforce"] }
  ];

  const softwareTypes = [
    { title: "Image Analysis", icon: ImageIcon, desc: "Advanced solutions for automated image and video analysis." },
    { title: "Signal Processing", icon: Radio, desc: "High-performance audio and video signal processing systems." },
    { title: "3D Modeling", icon: Box, desc: "Complex 3D modeling and high-fidelity rendering engines." },
    { title: "Virtual Reality (VR)", icon: Glasses, desc: "Immersive VR experiences built on robust C++ foundations." },
    { title: "Information Security", icon: ShieldCheckIcon, desc: "Resilient security software and encryption libraries." },
    { title: "Activity Monitoring", icon: Eye, desc: "Real-time user and system activity monitoring solutions." },
    { title: "Performance Monitoring", icon: Gauge, desc: "Application performance monitoring (APM) tools." },
    { title: "Ad Exchange & RTB", icon: TrendingUp, desc: "Low-latency real-time bidding and ad exchange platforms." }
  ];

  const industryExpertise = [
    { name: "Manufacturing", icon: Factory },
    { name: "Healthcare", icon: Heart },
    { name: "Retail", icon: ShoppingCart },
    { name: "Banking & Finance", icon: Landmark },
    { name: "Logistics", icon: Truck },
    { name: "Telecoms", icon: Radio },
    { name: "Oil & Gas", icon: FactoryIcon },
    { name: "Entertainment", icon: Video }
  ];

  const successTactics = [
    { title: "Collaboration", icon: Handshake, desc: "Detailed matrix defining each project role and responsibility." },
    { title: "Risk Management", icon: AlertTriangle, desc: "Proactive recognition and preventive actions for predictability." },
    { title: "Scope Management", icon: Kanban, desc: "Organized process for evaluating and prioritizing change requests." },
    { title: "KPI-Driven Excellence", icon: BarChart3, desc: "Quantitative success criteria tailored for each project." },
    { title: "Tailored Reporting", icon: FileText, desc: "Customized schedule and detail to match specific requirements." },
    { title: "ISO 9001 Quality", icon: ClipboardCheck, desc: "Comprehensive QC throughout the entire SDLC." },
    { title: "ISO 27001 Security", icon: ShieldCheckIcon, desc: "Safeguarding environment, IP, and business assets." }
  ];

  const serviceOptions = [
    {
      title: "Team Augmentation",
      icon: UserCheck,
      desc: "Cover resource gaps with 1-3 C++ developers managed by you.",
      pricing: "T&M (Hourly Rate)",
      suitable: "In-house team support"
    },
    {
      title: "Dedicated C++ Team",
      icon: Users2,
      desc: "Self-managed team of 4+ developers with a PM on our side.",
      pricing: "T&M (Hourly Rate)",
      suitable: "Large-scale project support"
    },
    {
      title: "Turnkey Outsourcing",
      icon: Briefcase,
      desc: "End-to-end development: BA, UX/UI, Architecture, QA, and Support.",
      pricing: "Fixed Price / T&M",
      suitable: "Full project delivery"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#00599C] via-[#004481] to-[#002d54] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="animate-pulse flex items-center"><SiCplusplus size={14} /></span> C/C++ Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Resilient <br/> <span className="text-blue-300">Performance</span> with C++
            </h1>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-xl">
              Creating high-performing C++ libraries and applications for image analysis, VR, IoT, and 3D modeling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#00599C] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group">
                Hire C++ Experts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
                      <SiCplusplus size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">C++ 20/23</h4>
                      <p className="text-xs text-blue-200 italic">Low-level Control</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-xl font-bold">STL/Boost</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-blue-200 uppercase mb-1">Performance</p>
                    <p className="text-lg font-bold text-white">Native Speed</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-blue-200 uppercase mb-1">Reliability</p>
                    <p className="text-lg font-bold text-blue-300">Resilient Code</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Software Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Software We Create</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Delivering clean and robust C++ code that stands the test of time and high load.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softwareTypes.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-[#00599C]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-[#00599C] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00599C] group-hover:text-white transition-all shadow-sm">
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Practical knowledge across 30+ industries for specialized C++ solutions.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryExpertise.map((industry, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4 group hover:border-[#00599C] transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 text-[#00599C] rounded-lg flex items-center justify-center group-hover:bg-[#00599C] group-hover:text-white transition-all">
                  <industry.icon size={20} />
                </div>
                <span className="font-bold text-slate-800">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,89,156,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Service Option</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Flexible engagement models to meet your specific resource and management needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceOptions.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center group hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-[#00599C] text-white rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <model.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{model.desc}</p>
                <div className="bg-white/5 rounded-2xl p-4 mb-8 text-left">
                  <p className="text-[10px] text-blue-300 uppercase mb-1">Pricing Model</p>
                  <p className="text-sm font-bold">{model.pricing}</p>
                </div>
                <Link to="/contact" className="inline-flex items-center text-blue-300 font-bold group-hover:text-white transition-colors">
                  Request Option <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tactics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Tactics for Successful Outcomes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Project management and development methodologies that drive predictability.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successTactics.map((tactic, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-white text-[#00599C] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <tactic.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{tactic.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{tactic.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our C++ Development Skills</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive ecosystem for building high-performing C++ applications.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {devSkills.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-[#00599C] mb-6 uppercase tracking-widest text-sm">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#00599C] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Get a Free Quote on C++ Development</h2>
          <p className="text-xl text-blue-50 mb-12">
            Drop us a line about your C++ project details, and we will provide an estimate for your case.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[#00599C] font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CppPage;