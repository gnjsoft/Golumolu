import React, { useEffect } from 'react';
import { 
  Coffee, Server, Layers, Globe, ShieldCheck, ArrowRight, Cpu,
  SearchCode, Palette, Smartphone, Cloud, RefreshCw, Wrench,
  Users, Target, Calculator, Handshake, FileText, Lock,
  AlertTriangle, CheckCircle, Database, Terminal, BarChart3,
  Zap, Settings, Activity, Microscope, Building2, Truck,
  ShoppingCart, PhoneCall, Landmark, Factory, Briefcase,
  UserCheck, Plane, Video, HeartPulse, Clock, MessageCircle,
  HelpCircle, Lightbulb, Infinity, PieChart, CloudCog,
  CloudDownload, CloudUpload, CloudSync, Gem, Map,
  MousePointer2, Layers2, ShieldHalf, Smartphone as MobileIcon,
  CheckCircle2, FileCheck, Fingerprint, Languages,
  Glasses, Gift, Users2, Scale, Video as VideoIcon,
  HeartPulse as HeartPulseIcon, Microscope as LabIcon,
  Building as FactoryIcon, Terminal as TerminalIcon,
  ShieldCheck as ShieldCheckIcon, History, TestTube2, LifeBuoy,
  Users as UsersIcon, Box, Code2, Kanban, ClipboardList,
  ClipboardCheck, Warehouse, Radio, Layout, Pill, Heart,
  Stethoscope, Image as ImageIcon, TrendingUp, ShieldAlert,
  PenTool, Package, Eye, Network, Bot, Gauge, HardDrive,
  Search, MessageSquare, Ticket, CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FaJava } from 'react-icons/fa';

const JavaPage: React.FC = () => {
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
    { title: "Business Analysis", icon: SearchCode, desc: "Industry-focused consultants analyze needs and deliver complete requirements." },
    { title: "Architecture Planning", icon: Layers2, desc: "Designing secure, scalable, and high-performing architectures for Java apps." },
    { title: "Web Development", icon: Globe, desc: "Delivery of Java-based ERPs, CRMs, EAM, PIM, EHR, and ecommerce solutions." },
    { title: "Mobile Development", icon: Smartphone, desc: "Client-side software for Android devices and back-end systems power." },
    { title: "Cloud Development", icon: Cloud, desc: "Building cloud-native and serverless apps employing elasticity and scalability." },
    { title: "SaaS Development", icon: Zap, desc: "Reliable, secure SaaS solutions with sub-second response times." },
    { title: "Modernization", icon: RefreshCw, desc: "Revamping legacy apps by auditing code and modernizing architecture." },
    { title: "Support & Evolution", icon: LifeBuoy, desc: "L1-L3 support, performance optimization, and continuous evolution." },
    { title: "Team Augmentation", icon: UsersIcon, desc: "Boost your team with Java pros. Project onboarding in under 5 days." }
  ];

  const cooperationModels = [
    { title: "Staff Augmentation", icon: UserCheck, desc: "Leverage expert Java skills to cover resource gaps, managed by you directly." },
    { title: "Dedicated Java Team", icon: Users2, desc: "Self-managed team working on a project or part in collaboration with your team." },
    { title: "Full Project Outsourcing", icon: Briefcase, desc: "End-to-end delivery from planning to programming and support with full responsibility." }
  ];

  const whyChooseUs = [
    { title: "Fast & Stable Delivery", icon: Zap, desc: "Major releases every 2-6 weeks and minor updates multiple times a day." },
    { title: "Cooperation Flexibility", icon: RefreshCw, desc: "From 0.5 FTE to 150+ FTE, self-managed teams or end-to-end delivery." },
    { title: "In-house PMO", icon: Building2, desc: "Experienced PMs for large complex projects with distributed teams." },
    { title: "Transparent Service", icon: Eye, desc: "Monitoring and reporting achievement of set KPIs and resource use." }
  ];

  const successPillars = [
    { title: "Scoping", icon: Target, desc: "Six-step process to outline scope and reduce risk of scope creep." },
    { title: "Resource Selection", icon: UsersIcon, desc: "Handpicking most suited talents for each project and model." },
    { title: "Estimation", icon: Calculator, desc: "Refined techniques and strategies for optimizing expenses." },
    { title: "Measuring Success", icon: BarChart3, desc: "Defined KPIs seamlessly integrated into Agile practices." },
    { title: "Collaboration", icon: Handshake, desc: "Strategies and tools to ensure collaboration propels projects." },
    { title: "Reporting", icon: FileText, desc: "Diverse range of reporting options from weekly to monthly summaries." },
    { title: "Change Management", icon: RefreshCw, desc: "Agility and adaptability to changing requirements with clear processes." },
    { title: "Risk Management", icon: AlertTriangle, desc: "Anticipating, monitoring, and mitigating risks proactively." }
  ];

  const techStack = [
    { title: "Frameworks & Platforms", items: ["Spring Framework", "Spring Boot", "Eclipse Vert.x", "Hibernate ORM", "JPA", "Jakarta EE", "Java EE"] },
    { title: "Clouds & Servers", items: ["AWS", "Azure", "GCP", "DigitalOcean", "Tomcat", "WildFly"] },
    { title: "Databases (SQL/NoSQL)", items: ["MySQL", "Oracle", "SQL Server", "Cassandra", "Hive", "HBase", "NiFi"] },
    { title: "DevOps & Monitoring", items: ["Docker", "Kubernetes", "OpenShift", "Ansible", "Terraform", "Jenkins", "Prometheus"] }
  ];

  const pricingOptions = [
    { title: "Fixed Price", icon: Lock, desc: "Best for PoC or small projects with clear, stable requirements." },
    { title: "Time & Material", icon: Clock, desc: "Best for advisory, agile development, and app evolution." },
    { title: "Per-ticket Pricing", icon: Ticket, desc: "Best for L1, L2 Java application support incidents." },
    { title: "Fixed Monthly Fee", icon: CreditCard, desc: "Best for L3 support (defect fixes, functional changes)." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#5382a1] via-[#f89820] to-[#d97706] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-orange-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="animate-pulse flex items-center"><FaJava size={14} /></span> Java Application Development
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Robust <br/> <span className="text-orange-200">Enterprise</span> Java
            </h1>
            <p className="text-xl text-orange-50 mb-10 leading-relaxed max-w-xl">
              High-performing back-end systems and scalable apps. Perfected over <span className="font-bold text-white">4,200+ successful projects</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#f89820] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group">
                Start Your Java Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
                      <FaJava size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Spring Boot</h4>
                      <p className="text-xs text-orange-200 italic">Cloud-native ready</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-xl font-bold">Java 21</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-orange-200 uppercase mb-1">Projects Delivered</p>
                    <p className="text-lg font-bold text-white">4,200+</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-orange-200 uppercase mb-1">Onboarding</p>
                    <p className="text-lg font-bold text-orange-300">&lt; 5 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What Our Java Services Cover</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Design, coding, maintenance, and evolution of high-performing Java applications.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#f89820] group-hover:text-white transition-all shadow-sm">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Models */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(248,152,32,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Service Option</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Flexible engagement models to perfectly meet your Java development needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cooperationModels.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center group hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <model.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{model.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-white font-bold group-hover:text-orange-400 transition-colors">
                  Request Option <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GnJ Worldwide */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why GnJ Worldwide is a Favourite</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Proven track record in fast and stable Java application delivery.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-white text-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Pillars */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Securing Successful Completion</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Technical prowess combined with mature project management practices.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successPillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-white rounded-3xl border border-slate-200 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Improving Java Code Quality</h2>
              <div className="space-y-8">
                {[
                  { title: "Rules & Guidelines", items: ["Java style guide adherence", "Descriptive variable naming", "Short, focused code units", "Comprehensive unit tests"] },
                  { title: "Documentation", items: ["Function-level comments", "README with dependencies", "Strict version control"] },
                  { title: "Review Practices", items: ["Ad hoc & Pass-around", "Walkthroughs & Inspections", "Pull request workflows"] }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="text-orange-600 font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 size={18} /> {item.title}
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {item.items.map((li, i) => (
                        <li key={i} className="text-slate-600 text-xs flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full"></div> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="bg-slate-900 p-10 rounded-[3rem] text-white"
            >
              <h3 className="text-2xl font-bold mb-8 text-orange-400">Code Quality Metrics</h3>
              <div className="space-y-6">
                {[
                  { label: "Maintainability Index (MI)", value: "High" },
                  { label: "Cyclomatic Complexity (CC)", value: "Optimized" },
                  { label: "Depth of Inheritance", value: "Standardized" },
                  { label: "Class Coupling", value: "Loosely Coupled" },
                  { label: "Lines of Code", value: "Monitored" },
                  { label: "Halstead Volume", value: "Analyzed" }
                ].map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-slate-400">{metric.label}</span>
                    <span className="font-mono font-bold text-orange-400">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Technology We Excel At</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive expertise in Java frameworks, clouds, and data processing.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {techStack.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-[#f89820] mb-6 uppercase tracking-widest text-sm">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-orange-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Pricing Options</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Transparent and flexible pricing models for diverse project needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingOptions.map((option, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 text-center group hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <option.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{option.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{option.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#f89820] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Opt for Risk-Free Java Development</h2>
          <p className="text-xl text-orange-50 mb-12">
            Leverage our practical knowledge in 30+ industries and advanced tech to address your Java development needs.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[#f89820] font-bold py-5 px-12 rounded-2xl hover:bg-orange-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Discuss My Java Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JavaPage;