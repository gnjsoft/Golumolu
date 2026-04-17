import React, { useEffect, useState } from 'react';
import { 
  BarChart3, 
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
  IndianRupee, 
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
  Lock,
  Cloud,
  FolderArchive,
  Presentation,
  Target,
  Workflow,
  Calculator,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const BusinessIntelligencePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'industry' | 'area'>('industry');
  const [activeCategory, setActiveCategory] = useState('Healthcare');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      subsectors: [
        {
          title: "Intelligence for healthcare providers",
          items: [
            "Calculating healthcare business KPIs across treatment, health outcomes, and financial management.",
            "Trends and bottlenecks identification with root cause detection.",
            "Predictive analytics to forecast treatment and financial outcomes, resource demand, and more."
          ]
        },
        {
          title: "Intelligence for contract research organizations",
          items: [
            "Tracking trial progress (enrollment rates, screen failure rate, drop-out rate, study milestones).",
            "Monitoring clinical pharmacology parameters (Cmax, Tmax, AUC, DLTs).",
            "Tracking metrics for medical device trials (error types, failure rates).",
            "Laboratory operations and inventory management intelligence.",
            "Predictive analytics for projected enrollments and resource needs."
          ]
        },
        {
          title: "Medical lab intelligence",
          items: [
            "Monitoring operational KPIs (turnaround time, cost per test, billable tests).",
            "Asset and inventory management analytics.",
            "Inventory demand forecasting.",
            "Insight into quality control improvement."
          ]
        }
      ]
    },
    {
      name: 'BFSI',
      icon: Briefcase,
      subsectors: [
        {
          title: "Banking intelligence",
          items: [
            "Calculating KPIs across business directions and monitoring stability indicators.",
            "Insights into customer service management.",
            "Identifying opportunities for up-selling and cross-selling.",
            "Analyzing marketing campaigns efficiency."
          ]
        },
        {
          title: "Insurance intelligence",
          items: [
            "Monitoring KPIs for sales, customer, claim, and underwriting management.",
            "Rule-based and ML-powered root cause detection.",
            "Analyzing the performance of insurance agents.",
            "Predictive analytics to forecast insurance events or metrics."
          ]
        },
        {
          title: "Lending intelligence",
          items: [
            "Calculations for borrower creditworthiness and collateral evaluation.",
            "Insights into the performance of lending teams.",
            "Loan servicing and portfolio performance analytics.",
            "Support for loan pricing strategies."
          ]
        },
        {
          title: "Investment intelligence",
          items: [
            "Insights into factor exposure and asset allocation analysis.",
            "Financial management and investment managers' performance analysis.",
            "Analyzing underlying risks and assessment of risk-adjusted return."
          ]
        }
      ]
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      items: [
        "OEE analytics and production management insights.",
        "Quality control and SCM analytics.",
        "Predictive equipment maintenance.",
        "Forecasts of power consumption and supply material demand."
      ]
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      items: [
        "Multidimensional customer segmentation.",
        "Insights into customer behavior across online and offline channels.",
        "Inventory demand forecasting for all channels and stores.",
        "Assortment planning and price elasticity analysis.",
        "Supplier performance assessment and merchandising analytics."
      ]
    },
    {
      name: 'Logistics',
      icon: Truck,
      items: [
        "Operational capacity planning and optimization.",
        "Customer order management analytics.",
        "Predictive fleet and labor utilization forecasting.",
        "Predictive fleet maintenance."
      ]
    },
    {
      name: 'Real Estate',
      icon: Building2,
      items: [
        "Property segmentation and comparison.",
        "Visualizing location-specific data on maps.",
        "Customer-property matching and portfolio analytics.",
        "Insights into lease, property, and construction management."
      ]
    }
  ];

  const areaSolutions = [
    {
      name: 'Financial',
      icon: IndianRupee,
      items: [
        "Keeping track of revenue, expenses and profitability.",
        "Financial performance analysis.",
        "Financial planning and budgeting.",
        "Financial risk forecasting."
      ]
    },
    {
      name: 'Customer',
      icon: Users,
      items: [
        "Creating a 360-degree customer view.",
        "Customer behavior analytics and modeling.",
        "Personalized marketing and churn management.",
        "Cross-selling and upselling optimization."
      ]
    },
    {
      name: 'HR',
      icon: Activity,
      items: [
        "Employee performance monitoring and analysis.",
        "Workforce planning and recruiting analysis.",
        "Employee churn prediction and management."
      ]
    },
    {
      name: 'Brand & Product',
      icon: Target,
      items: [
        "Insights into product/service profitability.",
        "Marketing campaigns and loyalty programs analytics.",
        "Analyzing brand portfolio and awareness.",
        "Competitor benchmarking analysis."
      ]
    },
    {
      name: 'Supply Chain',
      icon: Workflow,
      items: [
        "Supply chain performance monitoring.",
        "Customer demand forecasting.",
        "Insights into demand/supply balancing.",
        "Analyzing supply chain risks."
      ]
    }
  ];

  const services = [
    {
      title: "BI Consulting",
      desc: "Advisory services to guide you through implementation or optimization.",
      details: [
        "Reviewing existing data management practices.",
        "Elaborating on BI implementation/improvement roadmaps.",
        "Solution conceptualization and architecture design.",
        "Data governance setup and cloud migration supervision.",
        "User adoption strategy development."
      ],
      icon: Lightbulb,
      cta: "Go for consulting"
    },
    {
      title: "BI Implementation",
      desc: "Full-scale solution tailored to your specific business needs.",
      details: [
        "Conducting BI needs analysis and conceptualization.",
        "Designing architecture and setting up data governance.",
        "Developing DWH, Data Lakes, OLAP cubes, and dashboards.",
        "Adding data science/ML capabilities.",
        "QA, data migration, and user training."
      ],
      icon: Cpu,
      cta: "Go for implementation"
    },
    {
      title: "BI as a Service",
      desc: "Fully configured BI platform backed by AWS/Azure for in-cloud analysis.",
      details: [
        "Infrastructure deployment and management by GnJ.",
        "Fast access to insights (first reports within 1-5 days).",
        "Predictable consumption-based pricing.",
        "Managed business analysis on a subscription basis."
      ],
      icon: Cloud,
      cta: "Go for BIaaS"
    },
    {
      title: "Support & Evolution",
      desc: "Meet newly arisen BI needs and optimize costs and performance.",
      details: [
        "Development support and code-level troubleshooting.",
        "Evolution: adding data sources and new reports.",
        "Administration: software updates and permission handling.",
        "Specialized Power BI support services."
      ],
      icon: Settings,
      cta: "Go for support"
    }
  ];

  const components = [
    { title: "ETL/ELT processes", desc: "Extracting, transforming, and loading data from diverse sources.", icon: Workflow },
    { title: "Data lakes", desc: "Storing any type of data, including big data, at scale.", icon: FolderArchive },
    { title: "Data warehouse", desc: "Centralized storing of structured data for reporting.", icon: Database },
    { title: "OLAP cubes", desc: "Multidimensional format for rapid self-service analysis.", icon: Layers },
    { title: "Reporting & Visualization", desc: "Digestible reports and interactive dashboards.", icon: LayoutDashboard },
    { title: "Data Quality Management", desc: "Eliminating anomalies via profiling and cleansing.", icon: ShieldCheck },
    { title: "Data Security", desc: "Ensuring secure storage, transformation, and exploitation.", icon: Lock },
    { title: "Data Science", desc: "Advanced analytics with ML and AI capabilities.", icon: BrainCircuit }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
            alt="Business Intelligence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-amber-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-bold tracking-widest mb-8 backdrop-blur-sm">
              <Presentation size={16} /> BI & ANALYTICS SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Turn Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">Actionable Insights</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Consolidate business data into a single point of truth and get a 360-degree view of your operations and performance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2">
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
            <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-10 rounded-[2.5rem] shadow-2xl">
              <div className="space-y-6">
                <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-amber-400 font-bold">Implementation Cost</div>
                    <Calculator className="text-amber-400" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">₹66L – ₹8.3Cr+</div>
                  <div className="text-sm text-slate-400">Depending on solution complexity</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50 text-center">
                    <div className="text-2xl font-bold text-white">360°</div>
                    <div className="text-xs text-slate-400">Business View</div>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50 text-center">
                    <div className="text-2xl font-bold text-white">1-5 Days</div>
                    <div className="text-xs text-slate-400">First Reports (BIaaS)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SOLUTIONS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">BI Solutions Our Clients Benefit From</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored intelligence to drive value at all stages of business management: planning, monitoring, and optimization.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex">
              <button 
                onClick={() => { setActiveTab('industry'); setActiveCategory('Healthcare'); }}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'industry' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                By Industry
              </button>
              <button 
                onClick={() => { setActiveTab('area'); setActiveCategory('Financial'); }}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'area' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                By Business Area
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(activeTab === 'industry' ? industrySolutions : areaSolutions).map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                  activeCategory === cat.name 
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/30 scale-105' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <cat.icon size={20} />
                {cat.name}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-200 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'industry' ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industrySolutions.find(i => i.name === activeCategory)?.subsectors ? (
                      industrySolutions.find(i => i.name === activeCategory)?.subsectors?.map((sub, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <div className="w-1.5 h-6 bg-amber-500 rounded-full"></div>
                            {sub.title}
                          </h3>
                          <ul className="space-y-4">
                            {sub.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                <CheckCircle2 className="text-amber-500 mt-0.5 flex-shrink-0" size={16} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Link to="#" className="mt-6 text-amber-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            Read all <ArrowRight size={14} />
                          </Link>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{activeCategory} Intelligence</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {industrySolutions.find(i => i.name === activeCategory)?.items?.map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Activity size={20} />
                              </div>
                              <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">{activeCategory} Intelligence</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {areaSolutions.find(a => a.name === activeCategory)?.items?.map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 size={20} />
                          </div>
                          <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
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

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Satisfying Any BI Needs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From strategic advisory to full-scale implementation and managed services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-500">{service.desc}</p>
                  </div>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-4 mb-10">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="text-amber-500 mt-1 flex-shrink-0" size={18} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-center hover:bg-amber-600 transition-colors">
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPONENTS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive BI Coverage</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our solutions cover all components and processes required for a robust intelligence ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {components.map((comp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-amber-200 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <comp.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{comp.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Embrace BI Capabilities</h2>
              <p className="text-xl text-slate-400 mb-12">
                With a tailored BI solution or BI as a service, you can transform your business operations.
              </p>
              <div className="space-y-6">
                {[
                  "Eliminate manual work out of your business processes.",
                  "Improve operational efficiency and enhance customer experience.",
                  "Uncover trends and identify new profit opportunities with trustworthy data."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-lg text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/contact" className="inline-flex items-center bg-amber-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-amber-700 transition-all shadow-xl hover:shadow-amber-500/40">
                  Share my needs <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-white/10 rounded-full w-1/3"></div>
                    <div className="h-8 w-8 bg-amber-500/20 rounded-lg"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 h-48 items-end">
                    <div className="bg-amber-500/40 h-[40%] rounded-t-xl"></div>
                    <div className="bg-amber-500/60 h-[70%] rounded-t-xl"></div>
                    <div className="bg-amber-500 h-[100%] rounded-t-xl"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-white/10 rounded-full w-full"></div>
                    <div className="h-2 bg-white/10 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 p-6 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-2xl font-bold text-white">360° View</div>
                <div className="text-xs text-amber-100">Full visibility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Let's discuss how our BI and analytics solutions can drive measurable value for your business.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-amber-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-amber-700 transition-all shadow-xl hover:shadow-amber-500/40 transform hover:-translate-y-1">
            Book a Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligencePage;