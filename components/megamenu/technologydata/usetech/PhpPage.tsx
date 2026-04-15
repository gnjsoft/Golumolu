import React, { useEffect } from 'react';
import { 
  Server, Code, Globe, Database, ArrowRight, Layout, Zap, 
  SearchCode, ShieldCheck, RefreshCw, Layers, Settings, 
  Terminal, BarChart3, Cloud, Activity, Microscope, 
  Building2, Truck, ShoppingCart, PhoneCall, Landmark, 
  Factory, Briefcase, UserCheck, Plane, Video, HeartPulse, 
  Clock, MessageCircle, HelpCircle, Lightbulb, Infinity, 
  PieChart, CloudCog, CloudDownload, CloudUpload, CloudSync, 
  Gem, Map, MousePointer2, Layers2, ShieldHalf, 
  Smartphone as MobileIcon, CheckCircle2, DollarSign, 
  FileCheck, Fingerprint, Languages, Glasses, Gift, Users2, 
  Scale, Video as VideoIcon, HeartPulse as HeartPulseIcon, 
  Microscope as LabIcon, Building as FactoryIcon, 
  Terminal as TerminalIcon, ShieldCheck as ShieldCheckIcon, 
  History, TestTube2, LifeBuoy, Users as UsersIcon, Box, 
  Code2, Kanban, ClipboardList, ClipboardCheck, Warehouse, 
  Radio, Pill, Heart, Stethoscope, Image as ImageIcon, 
  TrendingUp, ShieldAlert, PenTool, Package, Eye, Network, 
  Bot, Gauge, HardDrive, Search, MessageSquare, Ticket, 
  CreditCard, Cpu, Binary, Share2, Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PhpPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const frameworks = [
    { name: "Symfony", color: "bg-black" },
    { name: "Laravel", color: "bg-[#F05340]" },
    { name: "Zend", color: "bg-[#68b030]" },
    { name: "CakePHP", color: "bg-[#D33C43]" }
  ];

  const platforms = [
    { name: "Magento", icon: ShoppingCart },
    { name: "Akeneo", icon: Layers },
    { name: "Pimcore", icon: Box },
    { name: "WordPress", icon: Layout },
    { name: "Joomla", icon: Globe }
  ];

  const techStack = [
    { 
      title: "Databases", 
      items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Cassandra", "Hive", "HBase"] 
    },
    { 
      title: "Clouds", 
      items: ["AWS", "Azure", "GCP", "DigitalOcean", "Rackspace"] 
    },
    { 
      title: "Cloud Storage", 
      items: ["Amazon S3", "Redshift", "DynamoDB", "Azure Data Lake", "Blob Storage", "Cosmos DB"] 
    },
    { 
      title: "AI & Analytics", 
      items: ["SageMaker", "TensorFlow", "Azure ML", "Synapse Analytics", "ElastiCache"] 
    }
  ];

  const cooperationModels = [
    {
      title: "PHP Consulting",
      icon: SearchCode,
      desc: "We help you select the technology mix or solve tech challenges of ongoing projects.",
      features: ["Identifying bottlenecks", "Checking security vulnerabilities", "Optimal scalability map"]
    },
    {
      title: "PHP Development",
      icon: Code2,
      desc: "Adhering to latest PSR guidelines and credible frameworks for reliable web apps.",
      features: ["Full project takeover", "Team augmentation", "Custom CMS/ERP/CRM", "API Integrations"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#4F5B93] via-[#777BB4] to-[#2d335e] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Server size={14} className="animate-pulse" /> PHP Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Secure & <br/> <span className="text-indigo-200">Powerful</span> PHP
            </h1>
            <p className="text-xl text-indigo-50 mb-10 leading-relaxed max-w-xl">
              Skillfully taming PHP to deliver robust web portals, B2C & B2B apps, and enterprise-grade CMS solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#4F5B93] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group">
                Hire PHP Experts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
                      <Terminal size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">PHP 8.x</h4>
                      <p className="text-xs text-indigo-200 italic">JIT Performance</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-xl font-bold">PSR-12</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-indigo-200 uppercase mb-1">Web Usage</p>
                    <p className="text-lg font-bold text-white">78% of Web</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-indigo-200 uppercase mb-1">Frameworks</p>
                    <p className="text-lg font-bold text-indigo-300">Laravel/Symfony</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Frameworks Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">PHP Framework Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">We use credible frameworks to create powerful and reliable PHP-based web applications.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworks.map((fw, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 ${fw.color} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{fw.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Platforms We Master</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">From enterprise e-commerce to flexible content management systems.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {platforms.map((platform, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4 group hover:border-[#4F5B93] transition-all"
              >
                <div className="w-10 h-10 bg-indigo-50 text-[#4F5B93] rounded-lg flex items-center justify-center group-hover:bg-[#4F5B93] group-hover:text-white transition-all">
                  <platform.icon size={20} />
                </div>
                <span className="font-bold text-slate-800">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Models */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,91,147,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Cooperation Model</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Tailored engagement options to solve your specific technical challenges.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {cooperationModels.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 group hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-[#4F5B93] text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <model.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">{model.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{model.desc}</p>
                <ul className="space-y-4 mb-10">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={18} className="text-indigo-400" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center bg-white text-[#4F5B93] font-bold py-4 px-8 rounded-xl hover:bg-indigo-50 transition-all group">
                  {model.title === "PHP Consulting" ? "Request Consulting" : "Hire PHP Developers"} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Technology Competencies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">A comprehensive ecosystem for building secure and scalable PHP applications.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {techStack.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-[#4F5B93] mb-6 uppercase tracking-widest text-sm">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#4F5B93] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build with PHP?</h2>
          <p className="text-xl text-indigo-50 mb-12">
            From Identifying bottlenecks to preparing an optimal scalability map, we ensure your PHP project is a success.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[#4F5B93] font-bold py-5 px-12 rounded-2xl hover:bg-indigo-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Discuss Your PHP Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PhpPage;