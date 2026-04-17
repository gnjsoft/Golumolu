import React, { useEffect } from 'react';
import { 
  Box, Layers, Monitor, Server, Shield, ArrowRight, Code2, 
  Zap, Settings, RefreshCw, Laptop, Target, Share2, 
  BookOpen, Kanban, ClipboardList, ClipboardCheck, 
  Warehouse, Radio, Layout, Pill, Heart, Stethoscope, 
  Building2, Truck, Microscope, Image as ImageIcon, 
  TrendingUp, Users, ShieldAlert, PenTool, Wrench, 
  Package, Eye, Video, Bell, Thermometer, Battery, 
  Network, Bot, Gauge, HardDrive, Lock, Activity, 
  Search, Cpu, MessageSquare, CheckCircle2, IndianRupee, 
  Calculator, FileCheck, Landmark, Smartphone, Wallet, 
  Rocket, Fingerprint, Languages, Glasses, Handshake, 
  Gift, Users2, Scale, AlertTriangle, HeartPulse, 
  Clock, Monitor as MonitorIcon, MessageCircle, HelpCircle, 
  Lightbulb, Zap as ZapIcon, Cloud, Infinity, Terminal, 
  BarChart3, PieChart, ShieldCheck, CloudCog, 
  CloudDownload, CloudUpload, CloudSync, Gem, Palette, 
  Map, MousePointer2, Layers2, ShieldHalf, Database, 
  Smartphone as MobileIcon, Briefcase, UserCheck, 
  Plane, Video as VideoIcon, HeartPulse as HeartPulseIcon, 
  CheckCircle, Globe, Microscope as LabIcon, 
  Building as FactoryIcon, ShoppingCart, 
  PhoneCall, Terminal as TerminalIcon, FileText, 
  ShieldCheck as ShieldCheckIcon, SearchCode, 
  History, TestTube2, LifeBuoy, Users as UsersIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SiDotnet } from 'react-icons/si';

const DotNetPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { title: "Business Analysis", icon: SearchCode, desc: "Needs assessment and high-level scope definition by industry experts." },
    { title: "UX/UI Design", icon: Palette, desc: "Research, story mapping, and usability testing for polished interfaces." },
    { title: "Web Development", icon: Globe, desc: "Secure, scalable, and feature-rich solutions using ASP.NET Core." },
    { title: "Mobile Development", icon: Smartphone, desc: "Cross-platform apps using Xamarin and .NET Core with native look-and-feel." },
    { title: "Desktop Development", icon: MonitorIcon, desc: "Robust apps for Windows, Linux, and macOS using WPF, WinForms, and UWP." },
    { title: "Application Integration", icon: Share2, desc: "Secure connections between .NET apps and internal/external software." },
    { title: "Cloud Migration", icon: CloudUpload, desc: "Pragmatic cloud adoption strategy and reliable migrations (AWS, Azure, GCP)." },
    { title: "Modernization", icon: History, desc: "Investigating legacy code and implementing reasonable architecture updates." },
    { title: "Testing & QA", icon: TestTube2, desc: "ISO 9001 backed quality management with manual and automated testing." },
    { title: "Support & Evolution", icon: LifeBuoy, desc: "L1-L3 support and continuous evolution with AI, IoT, and Blockchain modules." }
  ];

  const industries = [
    { title: "Healthcare", icon: Stethoscope, desc: "EHR/EMR, HIE apps, telemedicine, and medical image analysis software." },
    { title: "BFSI", icon: Landmark, desc: "Banking, payment, loan processing, and investment applications." },
    { title: "Manufacturing", icon: FactoryIcon, desc: "ERPs, MES, SCMs, and production planning applications." },
    { title: "Retail & Wholesale", icon: ShoppingCart, desc: "E-stores, marketplaces, headless commerce, and loyalty apps." },
    { title: "Logistics", icon: Truck, desc: "Fleet management, route planning, and shipping document solutions." },
    { title: "Telecom", icon: PhoneCall, desc: "VoIP, video messaging, and network virtualization applications." }
  ];

  const techStack = [
    { title: "Frameworks", items: [".NET Framework", ".NET Core", "ADO.NET", "Entity Framework", "ASP.NET MVC", "WCF"] },
    { title: "Languages", items: ["C#", "F#", "VB.NET", "SQL", "TypeScript", "PowerShell"] },
    { title: "Cloud & DevOps", items: ["Azure", "AWS", "GCP", "Docker", "Kubernetes", "Azure DevOps", "Jenkins"] },
    { title: "QA & APIs", items: ["MSTest", "Selenium", "Postman", "REST API", "GraphQL", "gRPC", "Swagger"] }
  ];

  const deliverySuccessPillars = [
    { title: "Scoping", icon: Target, desc: "Six-step scoping process to minimize risk of scope creep." },
    { title: "Resource Selection", icon: UsersIcon, desc: "Assigning the best candidates for team augmentation or outsourcing." },
    { title: "Estimation", icon: Calculator, desc: "Key estimation techniques and major cost optimization activities." },
    { title: "Collaboration", icon: Handshake, desc: "Organized collaboration with success measurement via KPIs." },
    { title: "Reporting", icon: FileText, desc: "Comprehensive reports covering different project aspects." },
    { title: "Quality Management", icon: ShieldCheckIcon, desc: "Key activities to ensure high software quality and performance." },
    { title: "Security Management", icon: Lock, desc: "Security pillars and planning for project-wide protection." },
    { title: "Risk Management", icon: AlertTriangle, desc: "Proactive and reactive assessment and monitoring of risks." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#512bd4] via-[#6d40f3] to-[#2d1b6b] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-purple-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="animate-pulse flex items-center"><SiDotnet size={14} /></span> .NET Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Enterprise <br/> <span className="text-purple-200">Impact</span> with .NET
            </h1>
            <p className="text-xl text-purple-50 mb-10 leading-relaxed max-w-xl">
              Tailored .NET solutions for 30+ industries. Delivered fast and at <span className="font-bold text-white">20–50% reduced cost</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#512bd4] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group">
                Hire .NET Experts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
                      <SiDotnet size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">.NET Core</h4>
                      <p className="text-xs text-purple-200 italic">Cross-platform ready</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-xl font-bold">C# 12.0</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-purple-200 uppercase mb-1">Cost Reduction</p>
                    <p className="text-lg font-bold text-white">20-50%</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-purple-200 uppercase mb-1">Industries</p>
                    <p className="text-lg font-bold text-purple-300">30+ Domains</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Custom .NET Development Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Complete a wide range of .NET tasks with professional quality, faster and at a lower cost.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#512bd4] group-hover:text-white transition-all shadow-sm">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Models */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(81,43,212,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Cooperation Model</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Flexible engagement models to perfectly meet your project needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Team Augmentation", price: "T&M Hourly Rate", desc: "Get professional assistance to bridge staff gaps or skill deficiencies." },
              { title: "Dedicated .NET Team", price: "T&M / T&M with Cap", desc: "Hire a skilled team managed by GnJ Worldwide's PMO for predictable delivery." },
              { title: "Full Project Outsourcing", price: "Fixed Price / T&M", desc: "Entrust implementation, support, and evolution to our full-cycle team." }
            ].map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center group hover:bg-white/10 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-purple-400 font-bold mb-6">{model.price}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{model.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-white font-bold group-hover:text-purple-400 transition-colors">
                  Request Model <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Custom .NET Solutions for 30+ Industries</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Profound knowledge of business, technology, and market trends across diverse sectors.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-purple-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-white text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <industry.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{industry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Skills & Technologies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive expertise in the Microsoft ecosystem and beyond.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {techStack.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-[#512bd4] mb-6 uppercase tracking-widest text-sm">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-purple-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Success Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Successful Delivery Assurance</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Meticulous management and predictability for every .NET project.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySuccessPillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-white text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#512bd4] group-hover:text-white transition-all shadow-sm">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Quality Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ensuring Code Quality</h2>
              <div className="space-y-8">
                {[
                  { title: "Coding Best Practices", items: ["Adherence to .NET guidelines", "ISO 27001 security standards", "Descriptive naming & comments", "Version control & portability"] },
                  { title: "Unit Testing", items: ["Functional requirements specification", "Boundary & incorrect value testing", "Rerun after significant changes"] },
                  { title: "Code Review", items: ["Ad hoc & Peer reviews", "Code walkthroughs", "Formal inspections"] }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
                      <CheckCircle size={18} /> {item.title}
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {item.items.map((li, i) => (
                        <li key={i} className="text-slate-400 text-xs flex items-center gap-2">
                          <div className="w-1 h-1 bg-purple-500 rounded-full"></div> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-8 text-purple-400">Code Quality Metrics</h3>
              <div className="space-y-6">
                {[
                  { label: "Maintainability Index (MI)", value: "High" },
                  { label: "Cyclomatic Complexity (CC)", value: "Optimized" },
                  { label: "Depth of Inheritance", value: "Standardized" },
                  { label: "Class Coupling", value: "Loosely Coupled" }
                ].map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-slate-300">{metric.label}</span>
                    <span className="font-mono font-bold text-purple-400">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#512bd4] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build with .NET?</h2>
          <p className="text-xl text-purple-50 mb-12">
            GnJ Worldwide offers well-established agile processes and latest software design patterns for safe, swift, and financially sound .NET development.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[#512bd4] font-bold py-5 px-12 rounded-2xl hover:bg-purple-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Request .NET Development <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DotNetPage;