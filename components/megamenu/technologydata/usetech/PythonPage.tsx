import React, { useEffect, useState } from 'react';
import { 
  Terminal, Database, Brain, Code, ArrowRight, Zap, Globe, 
  SearchCode, Palette, Smartphone, Cloud, RefreshCw, Wrench,
  Users, Target, Calculator, Handshake, FileText, Lock,
  AlertTriangle, CheckCircle, BarChart3, Settings, Activity, 
  Microscope, Building2, Truck, ShoppingCart, PhoneCall, 
  Landmark, Factory, Briefcase, UserCheck, Plane, Video, 
  HeartPulse, Clock, MessageCircle, HelpCircle, Lightbulb, 
  Infinity, PieChart, CloudCog, CloudDownload, CloudUpload, 
  CloudSync, Gem, Map, MousePointer2, Layers2, ShieldHalf, 
  Smartphone as MobileIcon, CheckCircle2, DollarSign, 
  FileCheck, Fingerprint, Languages, Glasses, Gift, Users2, 
  Scale, Video as VideoIcon, HeartPulse as HeartPulseIcon, 
  Microscope as LabIcon, Building as FactoryIcon, 
  Terminal as TerminalIcon, ShieldCheck as ShieldCheckIcon, 
  History, TestTube2, LifeBuoy, Users as UsersIcon, Box, 
  Code2, Kanban, ClipboardList, ClipboardCheck, Warehouse, 
  Radio, Layout, Pill, Heart, Stethoscope, Image as ImageIcon, 
  TrendingUp, ShieldAlert, PenTool, Package, Eye, Network, 
  Bot, Gauge, HardDrive, Search, MessageSquare, Ticket, 
  CreditCard, Cpu, Binary, Share2, Layers, Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PythonPage: React.FC = () => {
  const [typed, setTyped] = useState('');
  const text = "print('Scaling Innovation...')";

  useEffect(() => {
    window.scrollTo(0, 0);
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const softwareTypes = [
    { title: "Enterprise Web Software", icon: Globe, desc: "Feature-rich, flexible, and scalable solutions using Django, Flask, and Celery." },
    { title: "SaaS Products", icon: Zap, desc: "Rapid delivery of new features and iterative updates leveraging Python's readable syntax." },
    { title: "System Software", icon: Settings, desc: "Automation for system administration, file management, and network configuration." },
    { title: "Data Management", icon: Database, desc: "Scalable data pipelines connecting diverse sources into analytics-ready formats." },
    { title: "Business Intelligence", icon: BarChart3, desc: "Advanced analytics and self-service reporting with powerful visualization libraries." },
    { title: "Data Science", icon: Brain, desc: "ML models for predictive analytics, anomaly detection, image recognition, and NLP." },
    { title: "Big Data Solutions", icon: Infinity, desc: "Managing high-volume, high-velocity data sets like social feeds and transaction logs." },
    { title: "Blockchain Software", icon: Binary, desc: "Decentralized apps interacting with smart contracts and querying blockchain data." },
    { title: "IoT Systems", icon: Cpu, desc: "Connecting data processing layers to smart devices and setting up edge computing." }
  ];

  const services = [
    { title: "Python Consulting", icon: SearchCode, desc: "Designing future-proof software, optimal tech decisions, and efficient processes." },
    { title: "Python Development", icon: Code2, desc: "Building scalable solutions from web apps to ML models and data analytics." },
    { title: "Software Modernization", icon: RefreshCw, desc: "Updating legacy systems to meet current performance, security, and scalability standards." },
    { title: "Support & Evolution", icon: LifeBuoy, desc: "Regular updates, bug fixes, and on-demand delivery of new features." }
  ];

  const cooperationModels = [
    { title: "Full Project Outsourcing", icon: Briefcase, desc: "Hand over your entire project from planning to deployment. Perfect for end-to-end services." },
    { title: "Dedicated Teams", icon: Users2, desc: "A self-managed Python team taking responsibility for a specific part of your project." },
    { title: "Team Augmentation", icon: UserCheck, desc: "Expand your in-house team with our Python developers who integrate fully into your workflows." }
  ];

  const successFactors = [
    { title: "High Code Quality", icon: ShieldCheckIcon, desc: "Adhering to coding conventions, cross-reviews, and comprehensive Pytest suites." },
    { title: "Rapid Prototyping", icon: Rocket, desc: "Fast iterative development to quickly test software ideas in a PoC." },
    { title: "Software Compatibility", icon: Share2, desc: "Seamless integration with legacy systems and apps in other languages via custom connectors." },
    { title: "Team Autonomy", icon: UsersIcon, desc: "Autonomous teams that drive the process forward with full transparency." }
  ];

  const techStack = [
    { title: "Web Development", items: ["Django", "Flask", "Celery", "Pyramid", "FastAPI", "Zope", "CherryPy"] },
    { title: "Data & Analytics", items: ["pandas", "Apache Superset", "statsmodels", "Apache Airflow", "Matplotlib", "Plotly"] },
    { title: "Machine Learning", items: ["TensorFlow", "PyTorch", "Keras", "Scikit Learn", "NumPy", "XGBoost"] },
    { title: "Big Data & Testing", items: ["PySpark", "Dask", "Vaex", "pytest", "Selenium", "unittest"] }
  ];

  const costExamples = [
    { title: "Ecommerce Web App", price: "₹47L – ₹1.7Cr", desc: "Personalized product recommendations for a midsize retailer." },
    { title: "Fraud Detection", price: "₹60L – ₹1.7Cr", desc: "Intelligent system for financial transactions." },
    { title: "Crypto Payment", price: "₹85L – ₹1.25Cr", desc: "Integrated solution for marketplaces and gaming platforms." },
    { title: "SaaS Platform", price: "₹85L – ₹1.7Cr", desc: "Subscription-based content management with 3rd-party integrations." },
    { title: "ML Inventory System", price: "₹1.25Cr – ₹3.4Cr", desc: "Image recognition trained to recognize many item types." },
    { title: "Supply Chain Intelligence", price: "₹1.7Cr – ₹3.4Cr", desc: "ML/AI-powered analytics extracting data from multiple sources." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#3776ab] via-[#306998] to-[#1e3a5f] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffd343]/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Terminal size={14} className="animate-pulse text-[#ffd343]" /> Python Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Scalable <br/> <span className="text-[#ffd343]">Intelligence</span> with Python
            </h1>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-xl">
              Leveraging Python’s versatility for clean, maintainable code and large-scale data management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#ffd343] text-[#306998] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group">
                Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-[#1e1e1e] backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden group">
              <div className="bg-[#2d2d2d] -mx-8 -mt-8 px-6 py-3 flex items-center gap-2 border-b border-white/5 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate-400 font-mono">innovation.py</span>
              </div>
              <div className="font-mono text-sm space-y-4">
                <div className="text-purple-400">import <span className="text-white">gnj_worldwide</span></div>
                <div className="text-blue-400">def <span className="text-yellow-300">build_future</span>(data):</div>
                <div className="pl-4 text-white">model = gnj_worldwide.MLModel()</div>
                <div className="pl-4 text-white">result = model.train(data)</div>
                <div className="pl-4 text-white">return result.deploy()</div>
                <br/>
                <div className="text-slate-400">
                  <span className="text-green-400">{">>>"}</span> {typed}<span className="animate-pulse text-[#ffd343]">|</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Powerful Software You Can Build</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">From enterprise web apps to complex AI and blockchain solutions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareTypes.map((type, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-[#3776ab]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-[#3776ab] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3776ab] group-hover:text-white transition-all shadow-sm">
                  <type.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Full Software Life Cycle Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive expertise from initial consulting to long-term evolution.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-[#306998] rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Models */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(55,118,171,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Flexible Cooperation Models</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Engagement options tailored to your project's specific management needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cooperationModels.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center group hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-[#3776ab] text-white rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <model.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{model.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-[#ffd343] font-bold group-hover:text-white transition-colors">
                  Choose Model <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How We Make Sure You Succeed</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Technical excellence and autonomous teams driving your process forward.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successFactors.map((factor, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-white text-[#3776ab] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <factor.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{factor.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{factor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Python Frameworks & Libraries</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive expertise across the entire Python ecosystem.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {techStack.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-[#306998] mb-6 uppercase tracking-widest text-sm">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#3776ab]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Development Cost Estimates</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Transparent pricing ranging from ₹47L to ₹3.4Cr+ based on complexity.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {costExamples.map((example, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:bg-white hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{example.title}</h3>
                <p className="text-[#3776ab] font-bold text-lg mb-4">{example.price}</p>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">{example.desc}</p>
                <Link to="/contact" className="text-sm font-bold text-[#306998] hover:text-[#3776ab] flex items-center gap-1">
                  Get a quote <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">3 Simple Steps to Start</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our agile process ensures adaptability and early feedback.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Book a Call", desc: "We respond within one hour on business days to book your call." },
              { step: "02", title: "Meet Our Team", desc: "We sign an NDA and discuss your needs and our Python expertise." },
              { step: "03", title: "Get a Clear Plan", desc: "Within a week, receive a formal proposal detailing the service." }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <span className="text-6xl font-bold text-blue-100 absolute -top-10 -left-4 z-0">{item.step}</span>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#306998] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,211,67,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Develop Your Python Software</h2>
          <p className="text-xl text-blue-50 mb-12">
            We are advocates of iterative development with short sprints ensuring adaptability and high-quality results.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-[#ffd343] text-[#306998] font-bold py-5 px-12 rounded-2xl hover:bg-white transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PythonPage;