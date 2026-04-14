import React, { useEffect, useState } from 'react';
import { 
  Database, 
  Server, 
  FolderArchive, 
  ArrowRight, 
  Layers, 
  Lock, 
  Cloud, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Search, 
  Settings, 
  Clock, 
  BarChart3, 
  Heart, 
  Factory, 
  Briefcase, 
  ShoppingCart, 
  Truck, 
  Building2, 
  Globe, 
  Cpu, 
  LineChart, 
  BrainCircuit, 
  MessageSquare, 
  LayoutDashboard, 
  FileSearch,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const DataWarehousingPage: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('Healthcare');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "advisory",
      title: "Data warehouse advisory services",
      desc: "GnJ Worldwide’s team designs a data warehouse and plans out its implementation as well as renders advisory support while migrating or upgrading your legacy solution to optimize DWH performance and costs.",
      details: [
        "DWH solution design: requirements engineering, business case creation, architecture.",
        "DWH tech selection: outline of the optimal cloud platform and configuration.",
        "Data governance design for data quality, availability and security.",
        "Data modeling, ETL/ELT design, etc.",
        "DWH implementation/migration/optimization plan.",
        "Consulting support or complete project management."
      ],
      icon: Lightbulb
    },
    {
      id: "implementation",
      title: "Data warehouse implementation",
      desc: "GnJ Worldwide’s team builds a DWH tailored to your unique data consolidation and storage needs and implements it into your ecosystem.",
      details: [
        "Data warehouse requirements engineering.",
        "Solution conceptualization and platform selection.",
        "Architecture design and system analysis.",
        "Data modeling and ETL/ELT design.",
        "Solution development, QA, and launch.",
        "After-launch support."
      ],
      icon: Cpu
    },
    {
      id: "migration",
      title: "Data warehouse migration",
      desc: "Optimize performance and lower TCO by moving your existing on-premises data warehouse to the cloud with no business process disruptions.",
      details: [
        "Outlining a migration strategy and a plan.",
        "Designing a cloud data warehouse architecture.",
        "Assisting in selecting the right cloud vendor.",
        "Configuring the cloud cluster to optimize costs.",
        "Redeveloping on a new platform and environment integration.",
        "Transferring master data and metadata with completeness testing."
      ],
      icon: Cloud
    },
    {
      id: "testing",
      title: "Data warehouse testing",
      desc: "Comprehensive DWH testing set, including ETL/ELT testing, BI testing, performance testing and security testing.",
      details: [
        "Studying project requirements.",
        "Test planning and test design.",
        "Test implementation.",
        "Result analysis and accountability."
      ],
      icon: FileSearch
    },
    {
      id: "support",
      title: "Data warehouse support",
      desc: "Identify and solve performance issues, achieve stability for timely data flow, and lower storage and processing costs.",
      details: [
        "DWH solution architecture optimization.",
        "Optimization of individual DWH tools (memory tuning, indexing).",
        "DWH design optimization (schema changes, data loading tuning)."
      ],
      icon: Settings
    },
    {
      id: "improvement",
      title: "Data warehouse improvement",
      desc: "Thorough audit of your existing DWH solution followed by targeted advisory and implementation actions.",
      details: [
        "Performance optimization (indexing, query tuning, partitioning).",
        "Data quality enhancement and governance framework development.",
        "Integrating new data sources and scalability improvement.",
        "ETL/ELT optimization (parallel processing, incremental loading).",
        "Security and regulatory compliance enhancements."
      ],
      icon: Zap
    }
  ];

  const industries = [
    { 
      name: 'Healthcare', 
      icon: Heart,
      items: [
        "EHR data: medical history, diagnoses, medications, lab results.",
        "Patient-generated health data (PGHD) and imaging data (X-rays, MRIs).",
        "Billing, claims, and hospital-patient interaction data.",
        "Clinical trial, genomic, and population health data.",
        "Laboratory management, HR, and SCM data."
      ]
    },
    { 
      name: 'Manufacturing', 
      icon: Factory,
      items: [
        "Equipment performance and event data.",
        "Full-cycle production data (HMI, PLC, SCADA, MES).",
        "Asset condition, lifecycle, and current value data.",
        "Financial performance and customer communication history.",
        "Supplier, procurement, inventory, and logistics data."
      ]
    },
    { 
      name: 'Banking', 
      icon: Briefcase,
      items: [
        "Financial transactions and customer account activities.",
        "AR/AP, sales, cash flow, and financial management data.",
        "Customer demographics and banking product usage data.",
        "Market data: currency exchange, stock quotes, inflation rates.",
        "Security audit trails and user login history."
      ]
    },
    { 
      name: 'Retail', 
      icon: ShoppingCart,
      items: [
        "Inventory management and stock level data.",
        "Customer demographics, behavior, and sentiment data.",
        "Payment transactions and ecommerce shopping cart data.",
        "Order fulfillment status and marketing campaign data.",
        "SCM data: supplier capacity and performance."
      ]
    },
    { 
      name: 'Logistics', 
      icon: Truck,
      items: [
        "Telematics: real-time vehicle location, state, and fuel consumption.",
        "Cargo condition and driver behavior data.",
        "Weather, traffic, and personnel schedule data.",
        "Customer preferences and order history.",
        "Financial management: costs, cash flow, and payroll."
      ]
    },
    { 
      name: 'Real Estate', 
      icon: Building2,
      items: [
        "Property listings, features, prices, and availability data.",
        "Historical customer-property matching and GIS spatial data.",
        "Customer demographics and property inquiries history.",
        "Property management: tenants, rental income, lease terms.",
        "Construction management: project progress, costs, and resources."
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2070" 
            alt="Data Warehouse" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-cyan-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-bold tracking-widest mb-8 backdrop-blur-sm">
              <Database size={16} /> DATA WAREHOUSING SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Consolidate Your Data for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Enterprise Insights</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              High-performing DWH solutions including advisory, implementation, migration, and support to enable company-wide analytics and reporting.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-cyan-500/20 flex items-center gap-2">
                Consult an Architect <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-10 rounded-[2.5rem] shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                  <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center">
                    <Cloud size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Cloud Migration</div>
                    <div className="text-xs text-slate-400">Zero downtime transitions</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Data Governance</div>
                    <div className="text-xs text-slate-400">Security & Quality first</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                  <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Performance Tuning</div>
                    <div className="text-xs text-slate-400">Optimized query speeds</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES ACCORDION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our DWH Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive lifecycle support for your data warehouse, from initial design to continuous improvement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`border rounded-[2rem] transition-all duration-300 ${
                  expandedService === service.id 
                  ? 'border-cyan-500 bg-cyan-50/30 shadow-lg' 
                  : 'border-slate-200 bg-white hover:border-cyan-300'
                }`}
              >
                <button 
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full p-8 text-left flex items-start gap-6"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    expandedService === service.id ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-cyan-600'
                  }`}>
                    <service.icon size={28} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                      {expandedService === service.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 ml-20">
                        <div className="h-px bg-cyan-200 mb-6"></div>
                        <h4 className="font-bold text-slate-900 mb-4">What we offer:</h4>
                        <ul className="grid md:grid-cols-2 gap-4">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                              <CheckCircle2 className="text-cyan-500 mt-0.5 flex-shrink-0" size={16} />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRY SOLUTIONS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Tailored Industry Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Domain-specific data consolidation to ensure comprehensive analytics and insightful reporting.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((ind) => (
              <button
                key={ind.name}
                onClick={() => setActiveIndustry(ind.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                  activeIndustry === ind.name 
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <ind.icon size={20} />
                {ind.name}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">{activeIndustry} Data Consolidation</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {industries.find(i => i.name === activeIndustry)?.items?.map((item, i) => (
                      <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:border-cyan-200 transition-colors">
                        <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={20} />
                        </div>
                        <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 text-center">
                    <Link to="#" className="text-cyan-600 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                      Read all {activeIndustry} insights <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- COOPERATION HIGHLIGHTS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Our Cooperation Highlights</h2>
              
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-8">
                    <Clock size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Timing</h3>
                  <p className="text-slate-400 leading-relaxed">
                    To meet project timeframes and help you get ROI early, we apply iterative software development methodologies like Agile and Scrum.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
                    <Workflow size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Service Delivery</h3>
                  <ul className="space-y-4 text-slate-400">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                      <span>Adherence to signed SLA with clear timelines and deliverables.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                      <span>KPI system for full visibility into project progress health.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                      <span>Transparent collaboration via stakeholder meetings and presentations.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-8">
                    <DollarSign size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Flexible Pricing</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="font-bold text-white">Fixed Price</div>
                      <div className="text-sm text-slate-400">Small projects & fixed-scope engagements.</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="font-bold text-white">Time & Material</div>
                      <div className="text-sm text-slate-400">Midsize to large projects & advisory services.</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="font-bold text-white">Consumption-based</div>
                      <div className="text-sm text-slate-400">DWaaS & regular support activities.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Build a High-Performing DWH?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Let's discuss how our data warehousing services can consolidate your data and empower your business with actionable insights.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-cyan-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-cyan-700 transition-all shadow-xl hover:shadow-cyan-500/40 transform hover:-translate-y-1">
            Book a Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Placeholder for missing icons in the imports if any
const Lightbulb = (props: any) => <Zap {...props} />;

export default DataWarehousingPage;