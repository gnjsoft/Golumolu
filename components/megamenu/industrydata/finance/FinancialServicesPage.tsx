import React, { useEffect, useState } from 'react';
import { 
  Landmark, Briefcase, TrendingUp, ShieldCheck, ArrowRight, 
  Code2, Laptop, Settings, RefreshCw, Search, Database, 
  Lock, PieChart, Users, Zap, Cpu, Network, MessageSquare, 
  Monitor, Eye, FileText, CreditCard, Wallet, BarChart3, 
  Shield, Scale, Target, Layers, Share2, UserCog, 
  BookOpen, Boxes, Truck, Kanban, Terminal, ClipboardList, 
  ClipboardCheck, Warehouse, Microscope, Image as ImageIcon, 
  Apple, Dumbbell, Smile, Link as LinkIcon, Boxes as BlockchainIcon, 
  Glasses, Handshake, Gift, Users2, Building2, Activity, 
  Cloud, Globe, Bot, Video, Brain, HeartPulse, Stethoscope, 
  Clock, HardDrive, UserPlus, AlertTriangle, Radio, Layout, 
  CheckCircle2, Headphones, Pill, BarChart, Heart, 
  Coins, Calculator, FileCheck, Landmark as BankIcon,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const FinancialServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Financial Software Development",
      icon: Code2,
      desc: "Full-cycle IT consulting and software engineering to transform operations and unlock growth. We prioritize data security and regulatory compliance.",
      items: ["Fintech software", "Insurance software", "Lending software", "Payment software", "Investment software", "Banking software"]
    },
    {
      title: "Financial Software Consulting",
      icon: Laptop,
      desc: "Idea productization, CX strategy creation, and market entry planning with detailed project plans for predictable implementation.",
      items: ["Digital transformation", "Software consulting", "Mobile app consulting", "SaaS consulting", "BPM consulting", "Feasibility assessment"]
    },
    {
      title: "Software Modernization",
      icon: RefreshCw,
      desc: "Upgrade existing software to modern solutions at optimal cost with minimal disruption to business workflows.",
      items: ["Software modernization", "Cloud migration", "Code review and revamp"]
    },
    {
      title: "Managed Financial IT Services",
      icon: Settings,
      desc: "24/7 monitoring, troubleshooting, and upgrading of financial IT infrastructure and apps to keep them stable and cost-effective.",
      items: ["Infrastructure monitoring", "Managed app services", "L1–L3 IT help desk", "Cloud management", "Managed security", "IT automation"]
    },
    {
      title: "Quality Assurance & Testing",
      icon: ClipboardCheck,
      desc: "Versatile QA services to ensure top-notch quality of financial IT systems through rigorous testing and audits.",
      items: ["Software testing", "QA consulting", "Code audit", "Test automation"]
    },
    {
      title: "Financial IT Security",
      icon: ShieldCheck,
      desc: "Protecting software and infrastructure from emerging cyber threats while guaranteeing 100% compliance with regulatory frameworks.",
      items: ["Application security", "PCI DSS compliance", "NYDFS assessment", "GDPR compliance", "Security testing", "Identity & Access Management"]
    },
    {
      title: "Data Analytics & BI",
      icon: BarChart3,
      desc: "Reliable, user-friendly apps and scalable data infrastructures to automate financial analytics and obtain clear reports.",
      items: ["Insurance analytics", "Banking analytics", "Lending analytics", "Investment analytics", "Data science consulting", "Data management"]
    }
  ];

  const whoWeServe = [
    { name: "Banks", icon: BankIcon },
    { name: "Insurance Companies", icon: Shield },
    { name: "Lending Companies", icon: Calculator },
    { name: "Payment Providers", icon: CreditCard },
    { name: "Investment Companies", icon: TrendingUp },
    { name: "Fintech Startups", icon: Zap },
    { name: "DeFi Companies", icon: BlockchainIcon },
    { name: "Financial Product Co.", icon: Building2 }
  ];

  const innovativeTech = [
    {
      title: "Artificial Intelligence",
      icon: Bot,
      desc: "Automated customer communication, advanced analytics, intelligent decision-making, and instant fraud detection.",
      solutions: ["AI for Underwriting", "AI for Claims", "AI for Lending", "AI for Mortgage", "AI for Debt Collection", "AI for Investments", "AI for Payments", "LLMs for BFSI"]
    },
    {
      title: "Mixed Reality (Metaverse)",
      icon: Glasses,
      desc: "Bring financial services into emerging metaverse environments and introduce engaging customer and employee experiences.",
      solutions: ["Virtual Reality development", "Augmented Reality development"]
    },
    {
      title: "Blockchain & DeFi",
      icon: BlockchainIcon,
      desc: "Decentralized finance solutions, smart contracts, and secure, transparent transaction ledgers.",
      solutions: ["Crypto wallets", "Smart contracts", "Tokenization"]
    }
  ];

  const specializedSolutions = [
    {
      title: "Software for Financial Operations",
      icon: Settings,
      items: ["Underwriting automation", "Claims processing", "Policy administration", "Actuarial software", "Loan management", "Mortgage automation", "Debt collection systems", "Treasury software", "Payment gateways", "Investment portfolio management"]
    },
    {
      title: "Customer-Facing Apps",
      icon: Smartphone,
      items: ["Mobile banking apps", "Insurance apps", "Lending apps", "Payment apps", "Buy Now Pay Later apps", "Money transfer apps", "Investor portals", "Crypto wallets"]
    },
    {
      title: "General Business Administration",
      icon: Briefcase,
      items: ["CRM", "Financial accounting", "Fraud protection", "Financial intranets"]
    },
    {
      title: "Data Analytics Solutions",
      icon: PieChart,
      items: ["Banking analytics", "Insurance analytics", "Lending analytics", "Investment analytics"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Landmark size={14} /> Financial IT Services
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Reinventing <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Financial Services</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide helps BFSI companies create and operate tailored digital solutions smoothly, cost-effectively, and with minimal effort.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center">
                        Modernize Your Systems <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl overflow-hidden group">
                    <div className="bg-white/10 p-6 rounded-2xl mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-blue-300 font-bold">Portfolio Growth</span>
                            <TrendingUp className="text-green-400" />
                        </div>
                        <div className="flex items-end gap-2 h-32">
                            {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                                <div key={i} className="flex-1 bg-blue-500/50 rounded-t-lg" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/10 rounded-xl flex items-center gap-3">
                            <ShieldCheck className="text-blue-400" />
                            <span className="text-sm font-bold">PCI DSS</span>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl flex items-center gap-3">
                            <Lock className="text-indigo-400" />
                            <span className="text-sm font-bold">GDPR</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IT Services for the Financial Industry</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From consulting and software engineering to cybersecurity and IT support, we offer all-encompassing services for BFSI companies.
            </p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Who We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">We partner with a wide range of financial institutions to drive digital excellence.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whoWeServe.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-lg hover:border-blue-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <span className="font-bold text-slate-900">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Tech Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Bringing Innovative Techs to Finance</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Leveraging AI, Blockchain, and Mixed Reality to transform customer and employee experiences.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {innovativeTech.map((tech, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                  <tech.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{tech.desc}</p>
                <div className="space-y-2">
                  {tech.solutions.map((sol, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-blue-300">
                      <CheckCircle2 size={14} /> {sol}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Solutions Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IT Solutions We Specialize In</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">BFSI-specific process management and automation solutions designed for performance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedSolutions.map((group, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <group.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{group.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Ensuring Compliance & Security</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  We care for compliant financial software design, establish a secure development environment, and perform rigorous compliance testing before launch.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-400" size={32} />
                    <span className="font-bold">PCI DSS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="text-indigo-400" size={32} />
                    <span className="font-bold">GDPR</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Scale className="text-sky-400" size={32} />
                    <span className="font-bold">NYDFS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-blue-400" size={32} />
                    <span className="font-bold">Global Standards</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-blue-300 mb-2">Predictability</h4>
                  <p className="text-xs text-slate-400">Accurate time and cost estimates with detailed project plans.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-indigo-300 mb-2">Controllability</h4>
                  <p className="text-xs text-slate-400">Tailored KPIs and regular reporting on project health.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-sky-300 mb-2">Flexibility</h4>
                  <p className="text-xs text-slate-400">Rapid team scaling and agile adaptation to changes.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-teal-300 mb-2">Ethical Conduct</h4>
                  <p className="text-xs text-slate-400">Maintaining high ethical standards in all collaborations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Drive Success in Your Financial IT Endeavor</h2>
          <p className="text-xl text-blue-100 mb-12">
            Partner with GnJ Worldwide for secure, compliant, and innovative financial technology solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FinancialServicesPage;