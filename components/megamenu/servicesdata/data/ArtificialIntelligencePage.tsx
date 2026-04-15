import React, { useEffect, useState } from 'react';
import { 
  Cpu, Sparkles, Eye, Mic, ArrowRight, ScanFace, CheckCircle2, 
  Network, Headphones, Building2, Stethoscope, Landmark, 
  Truck, Package, Wrench, TrendingUp, Users, ShieldAlert, 
  Globe, PenTool, Bot, Brain, Zap, ShieldCheck, Search, 
  Code2, Terminal, Database, Layers, MessageSquare, 
  BarChart3, Microscope, Image as ImageIcon, Activity, 
  Cloud, Lock, Settings, RefreshCw, Laptop, Boxes, 
  Target, Share2, BookOpen, Kanban, ClipboardList, 
  ClipboardCheck, Warehouse, Radio, Layout, Pill, 
  BarChart, Heart, Coins, DollarSign, Calculator, 
  FileCheck, Landmark as BankIcon, Smartphone, Wallet, 
  Rocket, Fingerprint, Languages, Glasses, Handshake, 
  Gift, Users2, Scale, AlertTriangle, Video, HeartPulse, 
  Clock, HardDrive, UserPlus, FileText, Monitor, 
  MessageCircle, HelpCircle, Lightbulb, Zap as ZapIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ArtificialIntelligencePage: React.FC = () => {
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
    {
      title: "AI Software Consulting",
      icon: Laptop,
      desc: "We identify high-value AI use cases and define cost-effective technical approaches, including GenAI vs. ML, Build vs. Buy, and infrastructure guardrails.",
      items: ["Model provider selection", "RAG & Prompt Engineering", "AI Governance", "SLM vs. LLM analysis"]
    },
    {
      title: "End-to-End AI Development",
      icon: Code2,
      desc: "Building GenAI solutions (chatbots, multi-agent systems) and traditional ML software. We start with PoCs or MVPs to verify feasibility.",
      items: ["Conversational Agents", "Predictive ML", "Multi-agent systems", "PoC & MVP delivery"]
    },
    {
      title: "Adding AI to Existing Software",
      icon: RefreshCw,
      desc: "Securely introducing AI into your current landscape, from embedding assistants to enabling autonomous agentic workflows.",
      items: ["RAG implementation", "Anomaly detection", "Risk scoring", "Back-office automation"]
    },
    {
      title: "Custom MCP & Skills",
      icon: Boxes,
      desc: "Implementing custom MCP servers and connectors to integrate agents with internal tools like CRM, ERP, and databases.",
      items: ["Custom MCP servers", "Agentic tool creation", "Secure access controls", "Performance monitoring"]
    },
    {
      title: "Agentic Quality Assurance",
      icon: ClipboardCheck,
      desc: "Validating AI reliability to prevent hallucinations and failures through automated evaluation and test strategies.",
      items: ["Accuracy evaluation", "Regression testing", "Drift monitoring", "Defect triage"]
    },
    {
      title: "Agentic Security & Compliance",
      icon: ShieldCheck,
      desc: "Reducing risks of data leaks and unsafe actions through policy enforcement, audit trails, and secure delivery controls.",
      items: ["Least privilege access", "Audit trails", "CI/CD gates", "Security reviews"]
    },
    {
      title: "Designing & Training Models",
      icon: Brain,
      desc: "Data scientists designing proprietary deep learning networks (CNN, RNN, GAN) achieving >95% accuracy for NLP and vision.",
      items: ["Proprietary model design", "Deep learning training", "Image recognition", "Content generation"]
    },
    {
      title: "AI-Assisted Modernization",
      icon: Terminal,
      desc: "Shortening delivery cycles and reducing modernization effort using agentic coding workflows with tools like Claude Code.",
      items: ["Legacy refactoring", "Agentic coding", "Team upskilling", "Modernization support"]
    }
  ];

  const businessAreas = [
    {
      title: "Customer Service",
      icon: Headphones,
      desc: "Virtual support agents, intent detection, churn prediction, and AI assistants for human agents.",
      items: ["Voice agents", "Request routing", "Churn analytics"]
    },
    {
      title: "Healthcare",
      icon: Stethoscope,
      desc: "AI scribes, medical image analysis, clinical decision support, and outcome prediction.",
      items: ["Clinical notation", "Image analysis", "Risk stratification"]
    },
    {
      title: "BFSI",
      icon: Landmark,
      desc: "Finance copilots, fraud detection, risk management, and automated reconciliations.",
      items: ["Fraud prevention", "Cash flow forecasting", "Compliance monitoring"]
    },
    {
      title: "Supply Chain",
      icon: Truck,
      desc: "Procurement copilots, route optimization, predictive maintenance, and product inspection.",
      items: ["Fleet monitoring", "Supplier assessment", "Route optimization"]
    },
    {
      title: "Inventory Management",
      icon: Package,
      desc: "Warehouse copilots, computer vision for counting, and dynamic price optimization.",
      items: ["Demand forecasting", "Stock optimization", "Vision counting"]
    },
    {
      title: "Asset Maintenance",
      icon: Wrench,
      desc: "Technician copilots, early-failure detection, and real-time energy optimization.",
      items: ["SOP guidance", "Predictive maintenance", "OEE optimization"]
    },
    {
      title: "Sales & Marketing",
      icon: TrendingUp,
      desc: "Personalized content, lead scoring, and multi-dimensional customer segmentation.",
      items: ["Campaign copilots", "Sentiment analysis", "Lead prioritization"]
    },
    {
      title: "HR Management",
      icon: Users,
      desc: "Recruitment copilots, CV screening, and turnover prediction.",
      items: ["Policy interpretation", "Onboarding assistance", "Bias detection"]
    },
    {
      title: "Security & Fraud",
      icon: ShieldAlert,
      desc: "SOC copilots, phishing simulation, and biometric authentication.",
      items: ["Alert triage", "Bot detection", "Biometric auth"]
    }
  ];

  const costs = [
    {
      title: "Basic AI Assistant",
      price: "₹8,30,000 – ₹83,00,000",
      desc: "A chatbot or assistant for internal document search, summarization, or scribing. Cost depends on autonomy and data quality.",
      icon: MessageCircle
    },
    {
      title: "Autonomous Agent",
      price: "₹41,50,000 – ₹1,24,50,000+",
      desc: "An agent that connects to enterprise systems and performs independent actions like triage, scheduling, and case handling.",
      icon: Bot
    },
    {
      title: "Enterprise AI Ecosystem",
      price: "₹2,49,00,000 – ₹8,30,00,000+",
      desc: "A complex system with multiple AI components, employee copilots, RAG search, and automation agents.",
      icon: Network
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-slate-200 overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070" 
            alt="AI Neural Network" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.1),transparent)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono mb-8 backdrop-blur-md">
              <Sparkles size={14} className="animate-pulse" /> AI Software Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter text-white">
              Intelligent <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Automation</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide builds custom AI solutions from GenAI chatbots and voice assistants to complex multi-agent systems. We help you automate, analyze, and innovate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)] flex items-center group">
                Start Your AI Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Neural Engine</h4>
                      <p className="text-xs text-slate-500 italic">Processing active...</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-green-400 font-mono text-xl font-bold">95%+</span>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Accuracy</p>
                  </div>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase mb-1">Market Value (2033)</p>
                    <p className="text-lg font-bold text-white">$3,497B</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase mb-1">CAGR</p>
                    <p className="text-lg font-bold text-green-400">30.6%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Market Insight Section */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed italic">
              "The global AI market was valued at <span className="text-white font-bold">Rupees 390.91 billion</span> in 2025 and is expected to reach <span className="text-white font-bold">$3,497.26 billion</span> by 2033, as AI becomes integral to business operations."
            </p>
            <p className="mt-4 text-sm text-slate-500">— Grand View Research</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Software Development Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From business consulting to model training and solution implementation, we provide full-scale AI services.
            </p>
            <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-green-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-green-500/10 text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <div className="space-y-2">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 size={12} className="text-green-500" /> {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Business Area */}
      <section className="py-24 bg-slate-900/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Solutions & Capabilities</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Tailoring AI solutions to the unique needs of 30+ industries.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessAreas.map((area, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 hover:border-green-500/50 transition-all group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-slate-900 text-green-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <area.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                </div>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">{area.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {area.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900 text-slate-500 text-[10px] font-mono rounded-full border border-slate-800">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Software Development Costs</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Investment ranges based on autonomy, integration, and security requirements.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {costs.map((cost, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/20 p-10 rounded-[3rem] border border-slate-800 hover:border-green-500/30 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <cost.icon size={120} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{cost.title}</h3>
                <div className="text-3xl font-bold text-green-400 mb-6 font-mono">{cost.price}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{cost.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-green-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build Your AI Future?</h2>
          <p className="text-xl text-green-100 mb-12">
            Partner with GnJ Worldwide for secure, scalable, and high-impact AI technology solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-green-600 font-bold py-6 px-14 rounded-2xl hover:bg-green-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get a Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArtificialIntelligencePage;