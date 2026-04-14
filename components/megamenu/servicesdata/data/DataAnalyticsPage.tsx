import React, { useEffect, useState } from 'react';
import { 
  BarChart2, 
  PieChart, 
  TrendingUp, 
  ArrowRight, 
  Search, 
  FileText, 
  Activity, 
  ShieldCheck, 
  Users, 
  Database, 
  Zap, 
  Globe, 
  CheckCircle2, 
  DollarSign, 
  Settings, 
  Layers,
  Heart,
  Briefcase,
  Factory,
  ShoppingCart,
  Truck,
  Building2,
  Lightbulb,
  Cpu,
  LineChart,
  BrainCircuit,
  MessageSquare,
  Clock,
  LayoutDashboard,
  FileSearch,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const DataAnalyticsPage: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('Healthcare');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    { 
      name: 'Healthcare', 
      icon: Heart,
      subsectors: [
        {
          title: "Analytics for healthcare providers",
          items: [
            "Patient health condition monitoring, condition-based alerting.",
            "AI-powered patient treatment optimization.",
            "Assessment of patient risks and personalized care plan recommendations.",
            "Proactive care (defining trends and patterns in patient condition).",
            "Fraud detection in healthcare insurance.",
            "Medical staff workload prediction and work shifts optimization.",
            "Optimization of clinical space and equipment usage."
          ]
        },
        {
          title: "Analytics for contract research organizations",
          items: [
            "Insights for informed study design (historical trial analytics).",
            "Trial progress monitoring (enrollment rates, patient disposition).",
            "Trial findings analytics and pattern detection.",
            "Adverse events alerting and forecasting.",
            "Post-market surveillance and RWE analytics.",
            "Laboratory operations and inventory management optimization."
          ]
        }
      ]
    },
    { 
      name: 'BFSI', 
      icon: Briefcase,
      subsectors: [
        {
          title: "Banking analytics",
          items: [
            "Continuous monitoring of bank stability indicators.",
            "Institution performance forecasts.",
            "360-degree view of customers.",
            "Identifying cross-selling and upselling opportunities.",
            "What-if modeling for market, credit, and operational risks.",
            "Fraud detection and automated compliance checks."
          ]
        },
        {
          title: "Insurance analytics",
          items: [
            "AI-powered insurance recommendations.",
            "Finance analytics with underwriting profitability monitoring.",
            "Monitoring insurance-related risks with stress testing.",
            "Operational analytics for claims processing improvement.",
            "Workforce analytics for agents' performance assessment."
          ]
        }
      ]
    },
    { 
      name: 'Manufacturing', 
      icon: Factory,
      items: [
        "Overall equipment effectiveness analysis and optimization.",
        "Manufacturing process quality optimization.",
        "Equipment maintenance scheduling.",
        "Power consumption forecasting and optimization.",
        "Production loss root cause analysis."
      ]
    },
    { 
      name: 'Retail', 
      icon: ShoppingCart,
      items: [
        "Retail business performance analysis, monitoring sales and profitability.",
        "Demand analysis and forecasting.",
        "Multi-echelon inventory optimization.",
        "Assortment and merchandising planning and optimization.",
        "Data-driven recommendations on optimal product promotion activities."
      ]
    },
    { 
      name: 'Logistics', 
      icon: Truck,
      items: [
        "Operational capacity planning and optimization.",
        "Predictive analytics for vehicle maintenance.",
        "Vehicle demand forecasting.",
        "Predicting optimal amounts of fuel needed.",
        "IoT data analytics (cargo temperature, driver behavior, etc.)."
      ]
    },
    { 
      name: 'Real Estate', 
      icon: Building2,
      items: [
        "Insights into market trends and property values.",
        "Automated buyer-seller matching.",
        "Comprehensive portfolio management and cash-flow forecasts.",
        "Calculating and monitoring rental and occupancy rates.",
        "Multidimensional customer segmentation with AI suggestions."
      ]
    }
  ];

  const analyticsAreas = [
    { title: "Financial analytics", icon: DollarSign, desc: "Monitoring revenue, expenses and profitability. Budget planning and financial risk forecasting." },
    { title: "Supply chain analytics", icon: Truck, desc: "Demand forecasting, supplier performance monitoring, and predictive route optimization." },
    { title: "Marketing & sales analytics", icon: TrendingUp, desc: "Sales channel analytics, pricing strategies, and product performance analysis." },
    { title: "Customer analytics", icon: Users, desc: "Behavior analysis, segmentation, and churn risk management." },
    { title: "Asset analytics", icon: Settings, desc: "Real-time monitoring, predictive maintenance, and usage analytics." },
    { title: "HR analytics", icon: Activity, desc: "Performance monitoring, experience analysis, and retention strategy optimization." }
  ];

  const services = [
    {
      title: "DA Consulting",
      desc: "Optimal strategy selection and guidance on designing proprietary solutions.",
      cost: "$10K–$50K+",
      icon: Lightbulb
    },
    {
      title: "DA Implementation",
      desc: "Tailored solutions with single point of truth, sexy reports, and role-dependent workflows.",
      cost: "$30K–$1M+",
      icon: Cpu
    },
    {
      title: "DA Modernization",
      desc: "Upgrade performance, accuracy, visuals, and achieve regulatory compliance.",
      cost: "$20K–$200K+",
      icon: Zap
    },
    {
      title: "Data Management",
      desc: "Robust framework for efficiency and security in all data-related processes.",
      cost: "$30K–$1M+",
      icon: Database
    }
  ];

  const insights = [
    { title: "How to build a data warehouse from scratch", desc: "Approaches, plan, software, and costs.", link: "#" },
    { title: "Data warehouse software: 5 best tools", desc: "Key features and proven tools.", link: "#" },
    { title: "Best software for cloud data warehouse", desc: "Features, benefits, and costs.", link: "#" },
    { title: "Business Intelligence implementation guide", desc: "Plan, tools, costs, and required skills.", link: "#" },
    { title: "Real-time data warehouse architecture", desc: "Key components and use cases.", link: "#" }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
            alt="Data Analytics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-blue-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-widest mb-8 backdrop-blur-sm">
              <BarChart2 size={16} /> DATA ANALYTICS SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Smarter Decisions Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Data Excellence</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              From built-in product analytics to large-scale enterprise platforms. We deliver on time, on budget, and within scope with proactive risk mitigation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
                Get a Consultation <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Industries", value: "30+", icon: Globe },
                  { label: "Success Stories", value: "4,200+", icon: CheckCircle2 },
                  { label: "Data Sources", value: "Unlimited", icon: Database },
                  { label: "ROI Focus", value: "100%", icon: Zap }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                    <stat.icon className="text-blue-400 mb-3" size={24} />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DOMAIN SOLUTIONS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Solutions for Every Domain</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We help businesses from 30+ industries integrate, aggregate, and analyze data to address ambitious needs at enterprise levels.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((ind) => (
              <button
                key={ind.name}
                onClick={() => setActiveIndustry(ind.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                  activeIndustry === ind.name 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <ind.icon size={20} />
                {ind.name}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-200 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {industries.find(i => i.name === activeIndustry)?.subsectors ? (
                  <div className="grid md:grid-cols-2 gap-12">
                    {industries.find(i => i.name === activeIndustry)?.subsectors?.map((sub, idx) => (
                      <div key={idx}>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                          <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                          {sub.title}
                        </h3>
                        <ul className="space-y-4">
                          {sub.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                              <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{activeIndustry} Analytics</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {industries.find(i => i.name === activeIndustry)?.items?.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Activity size={20} />
                          </div>
                          <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- ANALYTICS AREAS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Specialized Analytics Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep expertise across critical business functions to drive operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsAreas.map((area, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <area.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {area.desc}
                </p>
                <Link to="#" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Read all <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CASE STUDY SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="flex-1">
                  <div className="text-blue-400 font-bold tracking-widest mb-4">CASE STUDY</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Turning Information Overload into Actionable Insights</h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    How GnJ Worldwide helped Invention Machine create a semantic search engine that transformed how enterprises innovate.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                    <div className="text-4xl font-bold text-white mb-2">Accelerated</div>
                    <div className="text-blue-400 font-medium">Idea-to-Product Conversion</div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Search className="text-red-400" size={24} /> Client Challenges
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Difficulty navigating huge, heterogeneous knowledge bases.",
                      "Innovation slowed by manual information discovery.",
                      "Risk of reinventing existing solutions.",
                      "Fragmented R&D workflows across teams."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-600/10 p-8 rounded-3xl border border-blue-500/20">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Zap className="text-blue-400" size={24} /> GnJ Worldwide's Solution
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Semantic indexing enabling precise Subject-Action-Object search.",
                      "Automated semantic search across patents and technical content.",
                      "Centralized knowledge capture with cross-domain notifications.",
                      "Structured methodology for problem definition and value analysis."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES & COSTS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Services & Costs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible service options to satisfy any data analytics needs, with transparent pricing models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Starting from</div>
                  <div className="text-2xl font-bold text-slate-900 mb-6">{service.cost}</div>
                  <Link to="/contact" className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-center hover:bg-blue-600 transition-colors block">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECT MANAGEMENT --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">How We Ensure Smooth Sailing</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                With over three decades of experience, we drive project goals regardless of time and budget constraints or changing requirements.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "ISO 9001 Certified", desc: "Quality management throughout the life cycle.", icon: ShieldCheck },
                  { title: "Risk Assessment", desc: "Realistic estimation of time & budget.", icon: FileSearch },
                  { title: "Effective Teamwork", desc: "Fostering cooperation, trust, and respect.", icon: Users },
                  { title: "ISO 27001 Certified", desc: "Secure collection and storage of business data.", icon: Lock },
                  { title: "Full Transparency", desc: "Custom KPIs and tailored reporting.", icon: LayoutDashboard },
                  { title: "Domain Expertise", desc: "We speak your language in 30+ industries.", icon: MessageSquare }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                        <item.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 scale-105 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                alt="Team Collaboration" 
                className="relative rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-500">Project Transparency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE OFFERINGS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">From Reporting to Advanced AI</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive data solutions that scale with your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Integration & Warehousing",
                desc: "Securely consolidate data via ETL/ELT, data virtualization, and propagation. Enterprise storage that satisfies quality, security, and compliance.",
                icon: Database
              },
              {
                title: "Big Data Solutions",
                desc: "Handle voluminous data of high velocity. Solutions for fraud detection, remote monitoring, and high-traffic XaaS apps.",
                icon: Zap
              },
              {
                title: "BI & Data Visualization",
                desc: "Scheduled reports, ad hoc queries, and interactive dashboards. Clear visuals that illustrate data at both panoramic and granular angles.",
                icon: LineChart
              },
              {
                title: "Data Science & AI",
                desc: "AI-powered solutions driven by open-source or proprietary ML models. Experience in GPT-like conversational interfaces and custom algorithms.",
                icon: BrainCircuit
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <item.icon size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Why Partner with GnJ Worldwide?</h2>
                <div className="space-y-8">
                  {[
                    { title: "Time-saving automation", desc: "Automated data management and self-service BI for ad hoc reports without coding.", icon: Clock },
                    { title: "Easy-to-read reports", desc: "Visualization techniques that highlight the most important insights at a glance.", icon: LayoutDashboard },
                    { title: "Reliable insights", desc: "DWH as a single point of truth with robust ETL processes for accurate data.", icon: ShieldCheck },
                    { title: "Value-focused analytics", desc: "Discovering optimization opportunities hidden in your data for cost reduction.", icon: TrendingUp }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <benefit.icon size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                        <p className="text-blue-100">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl">
                  <div className="space-y-6">
                    <div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
                    <div className="h-4 bg-slate-100 rounded-full w-full"></div>
                    <div className="h-32 bg-blue-50 rounded-3xl flex items-end p-4 gap-2">
                      <div className="flex-1 bg-blue-200 rounded-t-lg h-1/2"></div>
                      <div className="flex-1 bg-blue-400 rounded-t-lg h-3/4"></div>
                      <div className="flex-1 bg-blue-600 rounded-t-lg h-full"></div>
                      <div className="flex-1 bg-blue-300 rounded-t-lg h-2/3"></div>
                    </div>
                    <div className="h-4 bg-slate-100 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LATEST INSIGHTS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Latest Data Insights</h2>
              <p className="text-xl text-slate-600">Expert advice on building effective BI and analytics solutions.</p>
            </div>
            <Link to="#" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View all insights <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{insight.title}</h3>
                <p className="text-slate-500 mb-8 flex-grow">{insight.desc}</p>
                <Link to={insight.link} className="text-blue-600 font-bold flex items-center gap-2 group">
                  Read the guide <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Let's discuss how our analytics solutions can drive measurable value for your business.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1">
            Book a Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsPage;
