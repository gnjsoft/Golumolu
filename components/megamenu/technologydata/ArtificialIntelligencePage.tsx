import React, { useEffect } from 'react';
import { 
  Brain, Sparkles, Bot, Cpu, Zap, ArrowRight, 
  Search, ShieldCheck, Code2, BarChart3, 
  MessageSquare, Settings, Scale, Lock, 
  Database, RefreshCcw, Layers, Users, 
  Stethoscope, Landmark, GraduationCap, 
  Megaphone, Gamepad2, Truck, Warehouse, 
  Wrench, ShoppingCart, SearchCode, PenTool,
  IndianRupee, CheckCircle2, Terminal,
  LineChart, Activity, Globe, FileText,
  AlertTriangle, UserCheck, Eye, Binary
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
      title: "AI software consulting",
      icon: Search,
      desc: "We identify AI use cases that deliver the greatest value or cost reduction. We define cost-effective approaches: GenAI vs. traditional ML, Build vs. buy, LLM vs. SLM, and model adaptation methods (RAG, prompt engineering, fine-tuning, agentic orchestration).",
      link: "/contact"
    },
    {
      title: "End-to-end AI software development",
      icon: Code2,
      desc: "We build GenAI solutions (chatbots, virtual assistants, multi-agent systems) and software powered by predictive, diagnostic, and traditional machine learning. We start with PoC or MVP to verify feasibility and avoid risks.",
      link: "/contact"
    },
    {
      title: "Adding AI to existing software",
      icon: RefreshCcw,
      desc: "Securely introduce AI into your current landscape: embedding GenAI assistants, implementing RAG-based document intelligence, and adding traditional ML for forecasting, risk scoring, and anomaly detection.",
      link: "/contact"
    },
    {
      title: "Custom MCP & Skills Creation",
      icon: Settings,
      desc: "Implementing custom MCP servers and connectors for internal tools (CRM, ERP, databases). Creating custom skills (tools or actions) so agents can execute workflows like search, update, and trigger.",
      link: "/contact"
    },
    {
      title: "Agentic Quality Assurance",
      icon: CheckCircle2,
      desc: "Validate and improve AI reliability. Evaluation strategies for accuracy, consistency, and regression. Automated test generation and quality metrics to track performance, drift, and failure patterns.",
      link: "/contact"
    },
    {
      title: "Agentic Security & Compliance",
      icon: ShieldCheck,
      desc: "Reduce risks of data leaks and audit gaps. Designing secure access (least privilege), policy enforcement, and secure delivery controls for agentic coding (CI/CD gates, change traceability).",
      link: "/contact"
    },
    {
      title: "Designing & Training AI/ML Models",
      icon: Brain,
      desc: "Proprietary AI models (CNN, RNN, GAN) for content generation, NLP, and image recognition. Our data scientists design models that steadily achieve >95% accuracy.",
      link: "/contact"
    },
    {
      title: "AI-Assisted Code Modernization",
      icon: Terminal,
      desc: "Shorten delivery cycles using agentic coding workflows (Claude Code). Modernizing legacy code, accelerating migrations, and upskilling teams in safe, effective agentic development.",
      link: "/contact"
    }
  ];

  const businessAreas = [
    {
      title: "Customer Service",
      icon: MessageSquare,
      items: [
        "Virtual support agents & voice agents",
        "AI assistants for human agents (suggested replies)",
        "Intent detection and request routing",
        "Churn prediction and service analytics"
      ]
    },
    {
      title: "Industry-centric Assistants",
      icon: GraduationCap,
      items: [
        "Healthcare: AI scribes & staff copilots",
        "BFSI: Policy Q&A & mortgage assistants",
        "Education: Study planners & virtual tutors",
        "Marketing: Campaign copilots & content generators"
      ]
    },
    {
      title: "Medical & Healthcare",
      icon: Stethoscope,
      items: [
        "EHR management & clinical notation",
        "Medical image analysis (MRI, CT, X-ray)",
        "Clinical decision support systems",
        "Outcome prediction & cohort analytics"
      ]
    },
    {
      title: "Financial Management",
      icon: Landmark,
      items: [
        "Finance copilots for reporting",
        "Fraud detection and prevention",
        "Cash flow forecasting & modeling",
        "Tax optimization & compliance monitoring"
      ]
    },
    {
      title: "Supply Chain",
      icon: Truck,
      items: [
        "Procurement copilots (RFQ drafting)",
        "Exception-handling agents for delays",
        "Real-time route optimization",
        "Predictive maintenance of assets"
      ]
    },
    {
      title: "Inventory",
      icon: Warehouse,
      items: [
        "Warehouse copilots (SOP guidance)",
        "Computer vision for inventory counting",
        "Demand forecasting across supply chain",
        "Dynamic price optimization"
      ]
    },
    {
      title: "Asset Maintenance",
      icon: Wrench,
      items: [
        "Technician copilots (troubleshooting)",
        "OEE and asset utilization optimization",
        "Early-failure detection (RUL)",
        "Real-time energy consumption optimization"
      ]
    },
    {
      title: "Sales & Marketing",
      icon: Megaphone,
      items: [
        "Personalized content generation",
        "Predictive lead scoring & deal prioritization",
        "Customer segmentation & sentiment analysis",
        "Churn and upsell prediction"
      ]
    },
    {
      title: "HR Management",
      icon: Users,
      items: [
        "Recruitment content generation",
        "AI-powered CV screening & matching",
        "Employee turnover factor identification",
        "Sentiment analysis for engagement"
      ]
    },
    {
      title: "Security & Fraud",
      icon: Lock,
      items: [
        "SOC copilots for alert triage",
        "Natural-language querying over logs",
        "Automated fraud detection (money laundering)",
        "Biometric-based authentication"
      ]
    },
    {
      title: "Web Scraping",
      icon: SearchCode,
      items: [
        "LLM-assisted insight extraction",
        "Topic-focused content aggregation",
        "Taxonomy creation and normalization",
        "Image-based enrichment (OCR)"
      ]
    },
    {
      title: "Content Creation",
      icon: PenTool,
      items: [
        "Natural language generation (NLG)",
        "Translation and captioning at scale",
        "Content summarization for reports",
        "SEO and topic modeling analytics"
      ]
    }
  ];

  const costs = [
    {
      range: "₹8,30,000 – ₹83,00,000",
      title: "Chatbots & Assistants",
      desc: "Scripted or lightly autonomous conversational agents for internal document search, summarization, or scribing. Cost depends on data sources and governance."
    },
    {
      range: "₹41,50,000 – ₹1,24,50,000+",
      title: "Autonomous Agents",
      desc: "Agents that connect to enterprise systems and perform independent actions (triage, scheduling, case handling) with approvals and guardrails."
    },
    {
      range: "₹2,49,00,000 – ₹8,30,00,000+",
      title: "Multi-Component Systems",
      desc: "Complex systems (e.g., EHR or insurance claims) enhanced with employee copilots, RAG search, automation agents, and AI analytics."
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/50 bg-indigo-900/20 text-indigo-300 mb-8 backdrop-blur-md">
              <Sparkles size={16} /> <span className="text-sm font-bold uppercase tracking-wider">AI Software Development Services</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-400">
              Cognitive Solutions for the <span className="text-indigo-400">Modern Enterprise</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              GnJ Worldwide builds custom AI solutions from GenAI chatbots and voice assistants to complex multi-agent systems. We help you select, develop, train, and maintain machine learning models.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-slate-950 font-bold py-4 px-10 rounded-full hover:bg-indigo-400 transition-all hover:scale-105 inline-flex items-center">
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Market Stats & Intro */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Powering Business with <span className="text-indigo-400">Intelligent Automation</span></h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                AI development services help organizations implement LLMs, SLMs, multi-agent systems, and traditional ML/DL models to automate repetitive tasks, extract actionable insights, detect risks early, and improve experiences.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                At GnJ Worldwide, we identify value-adding, cost-saving opportunities for AI implementation where traditional automation isn’t enough. Our architects ensure AI works accurately, safely, and securely with your data and IT ecosystem.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="bg-indigo-900/20 border border-indigo-500/30 p-10 rounded-3xl backdrop-blur-sm">
              <div className="text-indigo-400 font-bold mb-4 uppercase tracking-widest">Market Outlook</div>
              <h3 className="text-2xl font-bold mb-6">Global AI Market Growth</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">₹390.91 Billion</div>
                  <div className="text-slate-400">Valuation in 2025</div>
                </div>
                <div className="h-px bg-indigo-500/20"></div>
                <div>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">30.6% CAGR</div>
                  <div className="text-slate-400">Expected growth (2026–2033)</div>
                </div>
              </div>
              <p className="mt-8 text-sm text-slate-500 italic">Source: Grand View Research</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our AI Development Services</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From consulting to implementation, we provide full-scale AI services backed by 36 years of expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-all group flex flex-col"
              >
                <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <Link to={service.link} className="text-indigo-400 font-bold text-sm inline-flex items-center hover:text-indigo-300">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Solutions */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">AI Solutions & Capabilities</h2>
            <p className="text-xl text-slate-400">Tailored AI solutions for unique domain needs across 30+ industries.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <motion.div {...fadeIn} className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-indigo-400 flex items-center gap-3">
                <Bot className="text-indigo-400" /> Generative AI
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Chatbots", "Copilots", "Agents (incl. voice agents)", "Multi-agent systems"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-500" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-indigo-400 flex items-center gap-3">
                <Binary className="text-indigo-400" /> Traditional ML & Deep Learning
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Predictive AI", "Prescriptive AI", "Recommendation Engines", "Anomaly Detection", "Computer Vision", "Classical NLP"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-500" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessAreas.map((area, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center">
                    <area.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold">{area.title}</h3>
                </div>
                <ul className="space-y-3">
                  {area.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">AI Software Development Costs</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Investment varies based on model type, autonomy level, and security requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {costs.map((cost, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-10 rounded-[2.5rem] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <IndianRupee size={80} />
                </div>
                <div className="text-indigo-400 font-bold text-lg mb-4">{cost.range}</div>
                <h3 className="text-2xl font-bold mb-6">{cost.title}</h3>
                <p className="text-slate-400 leading-relaxed">{cost.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Deploy AI?</h2>
          <p className="text-xl text-indigo-100 mb-12">
            Let's discuss how our AI solutions can transform your business operations and drive measurable value.
          </p>
          <Link to="/contact" className="bg-white text-indigo-600 font-bold py-5 px-12 rounded-full hover:bg-slate-100 transition-all shadow-2xl inline-flex items-center">
            Schedule a Consultation <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArtificialIntelligencePage;