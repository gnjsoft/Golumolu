import React, { useEffect, useState } from 'react';
import { 
  Brain, Cpu, MessageSquare, ArrowRight, Sparkles, Bot, Code, 
  ShieldCheck, Zap, Settings, Search, RefreshCw, Terminal, 
  Shield, Microscope, TrendingUp, Truck, Box, Activity, 
  Megaphone, Users, Lock, Globe, FileText, CheckCircle2,
  BarChart3, Database, Layers, Smartphone, UserCheck,
  Stethoscope, Landmark, ShoppingCart, Briefcase, GraduationCap,
  Gamepad2, Eye, PenTool, SearchCode
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AiSoftwareSolutionPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const services = [
    {
      title: "AI Software Consulting",
      icon: Search,
      desc: "Identifying high-value AI use cases and defining cost-effective, risk-controlled technical approaches.",
      points: ["GenAI vs. Traditional ML", "Build vs. Buy Analysis", "LLM vs. SLM Selection", "RAG & Agentic Orchestration"],
      cta: "Go for consulting"
    },
    {
      title: "End-to-End AI Development",
      icon: Code,
      desc: "Building GenAI solutions (chatbots, multi-agent systems) and traditional predictive/diagnostic ML software.",
      points: ["Conversational Agents", "Predictive ML Models", "PoC & MVP Development", "Scalable AI Architecture"],
      cta: "Go for AI software development"
    },
    {
      title: "Adding AI to Existing Software",
      icon: Zap,
      desc: "Securely embedding AI into your current landscape to enhance functionality and user experience.",
      points: ["GenAI Assistant Embedding", "Enterprise Document Intelligence", "Autonomous Workflows", "Anomaly Detection"],
      cta: "Go for software evolution"
    },
    {
      title: "Custom MCP & Skills",
      icon: Terminal,
      desc: "Implementing custom MCP servers and connectors to securely integrate AI with enterprise systems.",
      points: ["Custom Connectors (CRM/ERP)", "Agentic Tool Creation", "Secure Access Controls", "Monitoring & Logging"],
      cta: "Go for MCP and skills"
    },
    {
      title: "Agentic Quality Assurance",
      icon: CheckCircle2,
      desc: "Validating and improving AI reliability to prevent hallucinations and inconsistent behavior.",
      points: ["Evaluation Strategies", "Automated Regression Testing", "Performance Monitoring", "Root-Cause Analysis"],
      cta: "Go for agentic QA"
    },
    {
      title: "Agentic Security & Compliance",
      icon: Shield,
      desc: "Reducing risks of data leaks and unsafe actions to meet strict security and audit requirements.",
      points: ["Secure System Access", "Policy Enforcement", "CI/CD Quality Gates", "Security Hardening"],
      cta: "Go for agentic security"
    },
    {
      title: "Designing & Training Models",
      icon: Brain,
      desc: "Designing proprietary deep learning networks (CNN, RNN, GAN) with >95% accuracy.",
      points: ["Proprietary DL Networks", "NLP & Image Recognition", "Custom Model Training", "High Accuracy Benchmarks"],
      cta: "Go for AI/ML model development"
    },
    {
      title: "AI-Assisted Modernization",
      icon: RefreshCw,
      desc: "Shortening delivery cycles for legacy codebases using safe, scalable AI-assisted engineering workflows.",
      points: ["Legacy Code Refactoring", "Agentic Code Generation", "Team Upskilling", "Claude Code Integration"],
      cta: "Go for modernization"
    }
  ];

  const capabilities = [
    {
      category: "Generative AI",
      icon: Sparkles,
      items: ["Chatbots", "Copilots", "Agents (incl. voice agents)", "Multi-agent systems"]
    },
    {
      category: "Traditional ML & Deep Learning",
      icon: Cpu,
      items: ["Predictive AI", "Prescriptive AI", "Recommendation Engines", "Anomaly Detection", "Computer Vision", "Classical NLP"]
    }
  ];

  const businessAreas = [
    {
      title: "Customer Service",
      icon: Users,
      desc: "Virtual support agents, chatbots for appointment scheduling, and AI assistants for human agents.",
      features: ["Suggested Replies", "Intent Detection", "Churn Prediction", "Request Routing"]
    },
    {
      title: "Industry-Centric Assistants",
      icon: Briefcase,
      desc: "Specialized assistants based on GenAI + domain rules + RAG for diverse sectors.",
      features: ["Healthcare AI Scribes", "BFSI Onboarding Copilots", "Education Virtual Tutors", "Marketing Content Generators"]
    },
    {
      title: "Medical Imaging & Diagnosis",
      icon: Microscope,
      desc: "AI assistance for EHR management, medical image analysis, and clinical decision support.",
      features: ["MRI/CT Analysis", "Risk Stratification", "Outcome Prediction", "3D Anatomy Modeling"]
    },
    {
      title: "Financial Management",
      icon: Landmark,
      desc: "Finance copilots for reporting, variance explanations, and agentic reconciliation workflows.",
      features: ["Cash Flow Forecasting", "Fraud Detection", "Tax Optimization", "Portfolio Optimization"]
    },
    {
      title: "Supply Chain & Inventory",
      icon: Truck,
      desc: "Procurement copilots, exception-handling agents, and real-time delivery optimization.",
      features: ["Demand Forecasting", "Computer Vision Inspection", "Warehouse Automation", "Dynamic Price Optimization"]
    },
    {
      title: "Asset Maintenance",
      icon: Settings,
      desc: "Technician copilots for SOP guidance, predictive maintenance, and OEE optimization.",
      features: ["Anomaly Detection", "Remaining Useful Life", "Energy Optimization", "Lifecycle Management"]
    },
    {
      title: "Sales & Marketing",
      icon: Megaphone,
      desc: "Personalized content generation, meeting summarization, and predictive lead scoring.",
      features: ["Campaign Copilots", "Sentiment Analysis", "A/B Test Variants", "Dynamic Pricing"]
    },
    {
      title: "HR Management",
      icon: UserCheck,
      desc: "Copilots for HR teams, employee assistants, and AI-powered candidate matching.",
      features: ["CV Screening", "Bias Detection", "Turnover Identification", "Engagement Analysis"]
    },
    {
      title: "Security & Fraud Detection",
      icon: Lock,
      desc: "SOC copilots for alert triage, phishing simulation, and automated fraud detection.",
      features: ["Log Querying", "Biometric Auth", "Bot Detection", "Access Log Analysis"]
    },
    {
      title: "Web Scraping & Crawling",
      icon: SearchCode,
      desc: "LLM-assisted insight extraction from unstructured content and taxonomy creation at scale.",
      features: ["Content Aggregation", "Deduplication", "Image-based Enrichment", "Sentiment Quality Checks"]
    },
    {
      title: "Content Creation",
      icon: PenTool,
      desc: "Natural language generation with brand style constraints and multi-modal generation pipelines.",
      features: ["Text/Image/Video Gen", "Translation at Scale", "SEO Optimization", "Quality Scoring"]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white selection:bg-purple-500 selection:text-white">
      
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[150px] opacity-20 animate-pulse delay-1000"></div>
          
          <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300 text-sm font-medium backdrop-blur-md">
                  <Brain size={16} /> AI Software Development Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                  Custom AI Solutions for <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Enterprise Innovation</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                  From GenAI chatbots to complex multi-agent systems. We help organizations implement LLMs, SLMs, and traditional ML models to automate tasks and extract actionable insights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <div className="text-3xl font-bold text-purple-400">₹32.6L Cr</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Market Value (2025)</div>
                  </div>
                  <div className={`bg-white/5 p-6 rounded-2xl border border-white/10 transition-all duration-1000 delay-500 ${active ? 'scale-110 border-purple-500/50' : ''}`}>
                      <div className="text-3xl font-bold text-indigo-400">30.6%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">CAGR (2026-2033)</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <div className="text-3xl font-bold text-blue-400">₹292L Cr</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Projected Market (2033)</div>
                  </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="inline-flex items-center bg-purple-600 text-white font-bold py-4 px-10 rounded-full hover:bg-purple-500 transition-all hover:scale-105 shadow-xl shadow-purple-500/20">
                      Start Your AI Project <ArrowRight className="ml-2" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center bg-white/5 text-white border border-white/10 font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all">
                      Schedule a Consultation
                  </Link>
              </div>
          </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Full-Scale AI Services</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">With 36 years of experience, GnJ Worldwide provides end-to-end AI services from consulting to implementation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/5 p-8 rounded-[2rem] hover:bg-white/10 hover:border-purple-500/30 transition-all group flex flex-col">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                          <service.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{service.desc}</p>
                      <ul className="space-y-2 mb-8">
                          {service.points.map((point, pIdx) => (
                              <li key={pIdx} className="text-xs text-slate-400 flex items-center gap-2">
                                  <div className="w-1 h-1 bg-purple-500 rounded-full"></div> {point}
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                          {service.cta} <ArrowRight size={16} />
                      </Link>
                  </div>
              ))}
          </div>
      </div>

      {/* Cost Ranges Section */}
      <div className="bg-slate-900/30 py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Sample Cost Ranges for AI Development</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Transparent pricing models based on solution complexity and integration requirements.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      {
                          price: "₹8.35 Lakh – ₹83.5 Lakh",
                          title: "Chatbots & Assistants",
                          desc: "A chatbot/conversational agent (scripted or lightly autonomous) or assistant (e.g., for internal document search, summarization, or scribing).",
                          factors: "Level of autonomy, data source quality, governance needs, voice support."
                      },
                      {
                          price: "₹41.75 Lakh – ₹1.25 Crore+",
                          title: "Autonomous Agents",
                          desc: "An agent that connects to other enterprise systems and performs independent actions (e.g., triage, scheduling, case handling).",
                          factors: "System integrations, approval workflows, logging, and guardrails."
                      },
                      {
                          price: "₹2.5 Crore – ₹8.35 Crore+",
                          title: "Enterprise AI Ecosystems",
                          desc: "A system with multiple AI-optimized components (e.g., an EHR or insurance claims management system).",
                          factors: "Employee copilots, RAG search, automation agents, and AI analytics."
                      }
                  ].map((tier, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all flex flex-col">
                          <div className="text-3xl font-bold text-purple-400 mb-4">{tier.price}</div>
                          <h3 className="text-xl font-bold mb-6 text-white">{tier.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                              {tier.desc}
                          </p>
                          <div className="pt-6 border-t border-white/10">
                              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Cost Drivers</div>
                              <p className="text-xs text-slate-300 italic leading-relaxed">
                                  {tier.factors}
                              </p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Capabilities Section */}
      <div className="bg-slate-900/50 py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">AI Capabilities We Build</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Tailoring AI solutions to the unique needs of 30+ industries.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                  {capabilities.map((cap, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-10 rounded-[3rem] group">
                          <div className="flex items-center gap-4 mb-8">
                              <div className="p-4 bg-indigo-600/20 rounded-2xl text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                  <cap.icon size={32} />
                              </div>
                              <h3 className="text-2xl font-bold">{cap.category}</h3>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                              {cap.items.map((item, iIdx) => (
                                  <div key={iIdx} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                                      <CheckCircle2 size={16} className="text-indigo-500" />
                                      <span className="text-sm text-slate-300">{item}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Business Areas Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">AI Solutions by Business Area</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Addressing specific operational challenges with domain-centric AI applications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessAreas.map((area, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:border-blue-500/50 transition-all group">
                      <div className="p-4 bg-blue-600/20 rounded-2xl text-blue-400 w-fit mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <area.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          {area.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                          {area.features.map((feat, fIdx) => (
                              <span key={fIdx} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full border border-white/10 text-slate-500">
                                  {feat}
                              </span>
                          ))}
                      </div>
                      <Link to="/contact" className="inline-flex items-center text-blue-400 font-bold hover:gap-3 transition-all text-sm">
                          See more <ArrowRight className="ml-2" size={16} />
                      </Link>
                  </div>
              ))}
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to harness the power of AI?</h2>
                  <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Partner with GnJ Worldwide to build accurate, safe, and secure AI solutions that drive real business value.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-purple-900 text-white border border-purple-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AiSoftwareSolutionPage;
