import React, { useEffect, useState } from 'react';
import { 
  Database, Server, BarChart, ArrowRight, HardDrive, Layers, 
  Zap, ShieldCheck, Search, Cpu, Network, MessageSquare, 
  Bot, Eye, FileText, CheckCircle2, Shield, Globe, 
  Settings, RefreshCw, Laptop, Boxes, Target, Share2, 
  BookOpen, Kanban, ClipboardList, ClipboardCheck, 
  Warehouse, Radio, Layout, Pill, Heart, Coins, 
  Calculator, FileCheck, Landmark, 
  Smartphone, Wallet, Rocket, Fingerprint, Languages, 
  Glasses, Handshake, Gift, Users2, Scale, AlertTriangle, 
  Video, HeartPulse, Clock, HardDrive as HardDriveIcon, 
  UserPlus, Monitor, MessageCircle, HelpCircle, 
  Lightbulb, Zap as ZapIcon, Activity, Cloud, Lock, 
  Truck, Microscope, Image as ImageIcon, TrendingUp, Users, 
  ShieldAlert, PenTool, Wrench, Package, Building2, Stethoscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const BigDataPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const useCases = [
    {
      title: "I need a solution to store and analyze large amounts of data",
      desc: "We build systems that consolidate enterprise-wide data in a centralized location optimized for analytics querying and reporting.",
      icon: Database
    },
    {
      title: "I need to leverage big data for real-time insights",
      desc: "We build software that supports thousands of requests in real time and enables continuous operations monitoring and automated alerts.",
      icon: Zap
    },
    {
      title: "I need to plan/develop/upgrade an XaaS app",
      desc: "We build apps that enable user-specific real-time recommendations and preserve stable performance under any workload.",
      icon: Rocket
    }
  ];

  const services = [
    {
      title: "Big Data Consulting",
      icon: Laptop,
      desc: "Assistance for end-to-end implementation, business case delivery, cost/ROI estimation, and architecture design with optimal tech stack recommendations."
    },
    {
      title: "Big Data Implementation",
      icon: Cpu,
      desc: "Automatically scaling systems that fit your infrastructure. We start with PoCs or MVPs for complex cases to ensure feasibility."
    },
    {
      title: "Improvement of Solutions",
      icon: RefreshCw,
      desc: "Fixing inefficiencies or expanding capabilities. We audit systems and modernize data processing pipelines (Hadoop, Kafka, Spark, etc.)."
    },
    {
      title: "Support & Maintenance",
      icon: Settings,
      desc: "Infrastructure support, administration, data cleansing, and continuous monitoring to fix and prevent software issues."
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: Stethoscope,
      items: ["Patient & financial analytics", "Remote patient monitoring", "Smart medical devices", "Clinical trial data analytics"]
    },
    {
      name: "Manufacturing",
      icon: Building2,
      items: ["OEE & production optimization", "Predictive maintenance", "Real-time asset tracking", "SCM & fleet analysis"]
    },
    {
      name: "Banking",
      icon: Landmark,
      items: ["Stability monitoring", "Customer personalization", "Market forecasting", "Fraud & risk detection"]
    },
    {
      name: "Lending",
      icon: Coins,
      items: ["Loan underwriting insights", "Creditworthiness evaluation", "Debt collection planning", "Lending fraud detection"]
    },
    {
      name: "Investment",
      icon: TrendingUp,
      items: ["Portfolio performance tracking", "Financial returns forecasts", "Stock buying recommendations", "Market risk monitoring"]
    },
    {
      name: "Insurance",
      icon: Shield,
      items: ["Claim & finance management", "Underwriting automation", "Event predictions", "Fraudulent transaction detection"]
    },
    {
      name: "Retail & Ecommerce",
      icon: Smartphone,
      items: ["Customer behavior patterns", "Real-time recommendations", "Dynamic price optimization", "Inventory counting with CV"]
    },
    {
      name: "Logistics",
      icon: Truck,
      items: ["Operational capacity planning", "Predictive fleet maintenance", "Real-time cargo tracking", "Dynamic route optimization"]
    },
    {
      name: "Telecommunications",
      icon: Radio,
      items: ["Network performance optimization", "Churn prediction", "Billing fraud identification", "Large-scale OSS/BSS"]
    },
    {
      name: "Oil & Gas",
      icon: HardDrive,
      items: ["Exploration management", "Reservoir simulation", "Remote asset monitoring", "Refinery quality control"]
    },
    {
      name: "Energy & Utilities",
      icon: ZapIcon,
      items: ["Network load balancing", "Resource demand forecasting", "Sustainability monitoring", "Meter manipulation fraud detection"]
    },
    {
      name: "Real Estate",
      icon: Layout,
      items: ["Data visualization", "Property value forecasts", "Predictive maintenance", "Construction progress monitoring"]
    },
    {
      name: "Professional Services",
      icon: Users,
      items: ["Project health monitoring", "Sentiment analysis", "Custom service quoting", "Service personalization"]
    },
    {
      name: "Education",
      icon: BookOpen,
      items: ["Student performance tracking", "Enrollment forecasting", "Personalized learning assistants", "Facilities monitoring"]
    },
    {
      name: "Media & Entertainment",
      icon: Video,
      items: ["Content performance insights", "Real-time recommendations", "Pirate content detection", "Streaming platforms"]
    },
    {
      name: "Automotive",
      icon: Activity,
      items: ["Production monitoring", "Quality control", "Driver behavior insights", "Autonomous vehicle services"]
    },
    {
      name: "Agriculture",
      icon: Globe,
      items: ["Precision farming", "Livestock monitoring", "Crop yield optimization", "Disease & pest management"]
    },
    {
      name: "Public Services",
      icon: Building2,
      items: ["Smart city solutions", "Traffic management", "Waste management", "Crime prevention"]
    },
    {
      name: "Travel & Hospitality",
      icon: Globe,
      items: ["Demand prediction", "Personalized recommendations", "Real-time pricing optimization", "Marketing content adjustment"]
    },
    {
      name: "Construction",
      icon: Wrench,
      items: ["Delay & risk prediction", "Project health monitoring", "Remote equipment control", "Supply chain optimization"]
    },
    {
      name: "Marketing & Advertising",
      icon: Target,
      items: ["Real-time personalization", "Attribution modelling", "A/B testing", "Churn risk prediction"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-orange-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Database size={14} /> Big Data Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Handle <br/> <span className="text-orange-200">Massive Scale</span>
            </h1>
            <p className="text-xl text-orange-50 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide provides big data development, consulting, support, and maintenance services to turn massive datasets into reliable analytics insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-orange-700 px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group">
                Start Feasibility Study <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
                      <Network size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Data Ingestion</h4>
                      <p className="text-xs text-orange-200 italic">Streaming active...</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-xl font-bold">1.2 PB/day</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-orange-200 uppercase mb-1">Processing Speed</p>
                    <p className="text-lg font-bold text-white">Real-time</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-orange-200 uppercase mb-1">Latency</p>
                    <p className="text-lg font-bold text-orange-300">&lt; 10ms</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Select Your Case */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Select Your Case</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Identify your primary objective and let us build the optimal solution.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:border-orange-500/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-white text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                    <useCase.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">{useCase.desc}</p>
                </div>
                <Link to="/contact" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 group">
                  I need this <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Big Data Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Full-scope services to maximize the value of your data initiatives.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Big Data in Your Industry</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Practical applications across 30+ domains.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                    <industry.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{industry.name}</h3>
                </div>
                <ul className="space-y-3">
                  {industry.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Characteristics */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">That’s What Your Solution Will Be Like</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">We guarantee quality, security, and future-readiness.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
                <RefreshCw size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Future-proof</h3>
              <p className="text-slate-600 leading-relaxed">
                Flexible and efficient big data systems that are easy to scale and evolve. We provide exhaustive documentation and long-term support.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Secure</h3>
              <p className="text-slate-600 leading-relaxed">
                ISO-27001-certified security management. We establish reliable protection and ensure full compliance with required regulations.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
                <ClipboardCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Rigorously tested</h3>
              <p className="text-slate-600 leading-relaxed">
                Tailored QA strategy for smooth operation under high load. Test automation helps reduce testing costs by up to 20%.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-orange-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Unlock Your Big Data Potential?</h2>
          <p className="text-xl text-orange-50 mb-12">
            Partner with GnJ Worldwide for secure, scalable, and high-performance big data technology solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-orange-600 font-bold py-5 px-12 rounded-2xl hover:bg-orange-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get a Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BigDataPage;