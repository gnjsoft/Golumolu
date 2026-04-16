import React, { useEffect, useState } from 'react';
import { 
  BrainCircuit, 
  Cog, 
  Zap, 
  ArrowRight, 
  Bot, 
  Cpu, 
  Search, 
  PenTool, 
  Database, 
  Code, 
  BarChart, 
  LifeBuoy, 
  Lightbulb, 
  Rocket, 
  Wrench, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Truck, 
  ShoppingCart, 
  Factory, 
  Briefcase, 
  DollarSign, 
  Globe, 
  MessageSquare, 
  LayoutDashboard, 
  FileSearch, 
  Lock, 
  Workflow, 
  Calculator, 
  ChevronDown, 
  ChevronUp, 
  Stethoscope, 
  Microscope, 
  Dna,
  LineChart,
  Eye,
  MessageCircle,
  AlertTriangle,
  RefreshCcw,
  TrendingUp,
  Target,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const MachineLearningPage: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState('Supply chain management');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useCases = [
    {
      category: 'Supply chain management',
      icon: Truck,
      items: [
        "Demand forecasting",
        "Inventory planning, management, and optimization",
        "Preventive alerting for inventory control",
        "Identifying quality issues in line production",
        "Supplier relationship management based on smart supplier selection",
        "Identifying fraudulent transactions and preventing credential abuse"
      ]
    },
    {
      category: 'Production efficiency',
      icon: Factory,
      items: [
        "Automated recognition of manufacturing defects",
        "Power consumption forecasting and optimization",
        "Process quality prediction based on process parameters",
        "Production loss root cause analysis",
        "Production output predictive modeling with varying inputs"
      ]
    },
    {
      category: 'Predictive maintenance',
      icon: Wrench,
      items: [
        "Predicting remaining useful lifetime",
        "Flagging anomalous behavior",
        "Predicting failure probability over time",
        "Root cause failure analysis",
        "Providing recommended actions to avoid potential failure"
      ]
    },
    {
      category: 'Transportation and logistics',
      icon: Globe,
      items: [
        "Predicting vehicle demand",
        "Predicting optimal fuel needs based on driving patterns",
        "Vehicle failure prediction and maintenance recommendations"
      ]
    },
    {
      category: 'Operational intelligence',
      icon: Activity,
      items: [
        "Operations anomaly and bottleneck recognition",
        "Deviation root-cause analysis",
        "Operational decision-making support",
        "Forecasting of operational performance metrics"
      ]
    },
    {
      category: 'Customer analytics',
      icon: ShoppingCart,
      items: [
        "Customer sentiment analysis",
        "Customer behavior prediction",
        "Sales forecasting",
        "Context-aware marketing",
        "AI-based recommendation engines",
        "Digital assistants"
      ]
    },
    {
      category: 'Financial management',
      icon: DollarSign,
      items: [
        "Financial planning and analysis",
        "Financial modeling",
        "Algorithmic trading and hedging",
        "Intelligent processing of financial documents",
        "Dynamic pricing",
        "Financial fraud detection"
      ]
    },
    {
      category: 'NLP & Computer Vision',
      icon: Eye,
      items: [
        "Sentiment analysis & Chatbots",
        "Speech to text conversion",
        "Medical image analysis",
        "Biometric verification",
        "Object recognition and classification",
        "Autonomous vehicles support"
      ]
    }
  ];

  const scopeOfServices = [
    {
      step: "1",
      title: "Business Analysis",
      desc: "Defining business needs, analyzing existing environment, and designing implementation roadmap.",
      items: [
        "Defining business needs for ML",
        "Analyzing existing ML environment",
        "Regulatory compliance requirements",
        "Implementation strategy & roadmap"
      ],
      icon: Search,
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      step: "2",
      title: "Technical Design",
      desc: "Designing optimal feature sets and architecting scalable, secure systems.",
      items: [
        "Optimal feature set design",
        "System architecture (scalability/security)",
        "Technology selection (languages/frameworks)",
        "Role-specific UX/UI design"
      ],
      icon: PenTool,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      step: "3",
      title: "Data Preparation",
      desc: "Exploratory analysis, collection, cleansing, and structuring of data sources.",
      items: [
        "Exploratory analysis of data sources",
        "Data collection & cleansing",
        "Data structuring",
        "Model evaluation criteria definition"
      ],
      icon: Database,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      step: "4",
      title: "Development & Implementation",
      desc: "Exploration, testing, evaluation, and fine-tuning of ML models.",
      items: [
        "ML model exploration & refinement",
        "Testing and evaluation",
        "Parameter fine-tuning",
        "Model deployment"
      ],
      icon: Code,
      color: "text-pink-600",
      bg: "bg-pink-100"
    },
    {
      step: "5",
      title: "Reporting",
      desc: "Delivering output in agreed formats and integrating into self-service apps.",
      items: [
        "Agreed format output delivery",
        "Application integration",
        "Self-service dashboarding",
        "Actionable insight visualization"
      ],
      icon: BarChart,
      color: "text-orange-600",
      bg: "bg-orange-100"
    },
    {
      step: "6",
      title: "Support & Maintenance",
      desc: "Continuous monitoring, tuning, and building new models for accuracy.",
      items: [
        "Continuous monitoring & tuning",
        "Adding new data for deeper insight",
        "Building new models for new questions",
        "Performance optimization"
      ],
      icon: LifeBuoy,
      color: "text-teal-600",
      bg: "bg-teal-100"
    }
  ];

  const serviceOptions = [
    {
      title: "Machine Learning Consulting",
      desc: "For companies seeking strategic guidance throughout the whole cycle of their machine learning development project.",
      icon: Lightbulb,
      cta: "Go for consulting"
    },
    {
      title: "Machine Learning Implementation",
      desc: "For companies that need to design, develop and launch a smoothly functioning machine learning solution.",
      icon: Rocket,
      cta: "Go for implementation",
      highlight: true
    },
    {
      title: "Machine Learning Support",
      desc: "For companies that need to fix inefficiencies and get tailored recommendations on increasing quality of insights.",
      icon: Wrench,
      cta: "Go for support"
    }
  ];

  const relatedServices = [
    { title: "Data Science Services", desc: "Advising on, developing and supporting data science solutions.", icon: BrainCircuit },
    { title: "Image Analysis Services", desc: "Designing and developing custom image analysis software.", icon: Eye },
    { title: "Data Mining Services", desc: "Retrieving valuable insights out of large, heterogeneous data sets.", icon: Search },
    { title: "Big Data Services", desc: "Consulting, implementation, and support for huge datasets.", icon: Database }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070" 
            alt="Machine Learning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-purple-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-bold tracking-widest mb-8 backdrop-blur-sm">
              <Cpu size={16} className="animate-pulse" /> MACHINE LEARNING CONSULTING
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Solve Business Problems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Accurate Forecasting</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide renders full-cycle machine learning services to introduce powerful data analytics, root-cause analysis, and data mining.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-purple-500/20 flex items-center gap-2">
                Discuss My ML Solution <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-10 rounded-[2.5rem] shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                  <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">92% Sensitivity</div>
                    <div className="text-xs text-slate-400">In early-stage cancer detection</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Predictive Maintenance</div>
                    <div className="text-xs text-slate-400">Reduced downtime & costs</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                  <div className="w-12 h-12 bg-pink-500/20 text-pink-400 rounded-xl flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">NLP & Chatbots</div>
                    <div className="text-xs text-slate-400">Automated customer service</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- USE CASES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Machine Learning Use Cases We Cover</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Decades-long practice in ML projects across diverse industries and functional areas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {useCases.map((uc) => (
              <button
                key={uc.category}
                onClick={() => setActiveUseCase(uc.category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                  activeUseCase === uc.category 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <uc.icon size={20} />
                {uc.category}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUseCase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">{activeUseCase}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {useCases.find(u => u.category === activeUseCase)?.items.map((item, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 hover:border-purple-200 transition-colors shadow-sm">
                        <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={20} />
                        </div>
                        <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- SCOPE OF SERVICES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Scope of Our ML Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end support from business analysis to continuous model maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scopeOfServices.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                <div className="absolute top-6 right-6 text-6xl font-black text-slate-50 opacity-50 group-hover:text-slate-100 transition-colors z-0">
                  {service.step}
                </div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg} ${service.color}`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                        <CheckCircle2 className="text-purple-500 mt-0.5 flex-shrink-0" size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICE OPTIONS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Choose Your Service Option</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored engagement models to match your current ML maturity and business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceOptions.map((option, idx) => (
              <div 
                key={idx} 
                className={`rounded-[2.5rem] p-10 flex flex-col h-full transition-all ${
                  option.highlight 
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10' 
                  : 'bg-slate-50 text-slate-900 border border-slate-200'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                  option.highlight ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 shadow-sm'
                }`}>
                  <option.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className={`flex-grow mb-10 leading-relaxed ${option.highlight ? 'text-slate-400' : 'text-slate-600'}`}>
                  {option.desc}
                </p>
                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    option.highlight 
                    ? 'bg-purple-600 text-white hover:bg-purple-500' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {option.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CASE STUDY --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-20 bg-slate-900 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-bold tracking-widest mb-8">
                  <Activity size={16} /> CASE STUDY: DIAGNOSTICS
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">ML in Action: Lung Cancer Detection</h2>
                <p className="text-xl text-slate-400 mb-12">
                  How GnJ Worldwide helped a US biotech company accelerate the launch of its lung cancer detection software in just two months.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-purple-400 mb-2">92%</div>
                    <div className="text-sm text-slate-500">Sensitivity achieved</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">2 Months</div>
                    <div className="text-sm text-slate-500">Delivery timeframe</div>
                  </div>
                </div>
              </div>
              <div className="p-12 md:p-20">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Client Challenges & Solutions</h3>
                <div className="space-y-6">
                  {[
                    { q: "Proprietary ML algorithm limited to R script", a: "Transformed into stable, production-ready desktop app" },
                    { q: "High-performance processing needs", a: "Core logic implemented in C++ for efficiency" },
                    { q: "Workflow integration gaps", a: "Secure HL7-based integration with LIS" },
                    { q: "Rigid compliance (IVDR, FDA)", a: "ISO 13485–compliant development & documentation" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1.5">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 mb-1">{item.q}</div>
                        <div className="text-sm text-slate-600">{item.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COST SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How Much Does an ML Solution Cost?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Investment varies based on service option and project scope.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:border-purple-200 transition-all">
              <Calculator className="text-purple-600 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ML Component Development</h3>
              <div className="text-3xl font-bold text-purple-600 mb-6">₹25,00,000 – ₹1,65,00,000</div>
              <p className="text-slate-600 mb-8">Developing a separate ML-powered component for an existing system.</p>
              <Link to="/contact" className="text-purple-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                See detailed cost ranges <ArrowRight size={18} />
              </Link>
            </div>
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:border-blue-200 transition-all">
              <Rocket className="text-blue-600 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">End-to-End ML Solution</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">₹1,65,00,000 – ₹5,00,00,000+</div>
              <p className="text-slate-600 mb-8">Full-cycle development from discovery to deployment and support.</p>
              <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                See detailed cost ranges <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- RELATED SERVICES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Related Services We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY ML NOW --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-purple-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Why Turn To ML Consulting Right Now</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Employee Productivity", desc: "Automate repetitive tasks with CV and NLP.", icon: Users },
                  { title: "Customer Experience", desc: "AI-powered chatbots for real-time communication.", icon: MessageSquare },
                  { title: "Accelerated Sales", desc: "Improved opportunity insights and lead prioritization.", icon: TrendingUp },
                  { title: "Reduced Maintenance", desc: "Predictive monitoring and preventive maintenance.", icon: AlertTriangle },
                  { title: "Production Efficiency", desc: "Demand forecasting and process optimization.", icon: Factory }
                ].map((benefit, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <benefit.icon className="mb-6 text-purple-200" size={32} />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-purple-100 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Discuss Your ML Solution?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Let's explore how our expert knowledge can help you seamlessly avail ML for your specific business needs.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-purple-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-purple-700 transition-all shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-1">
            Discuss My ML Solution <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MachineLearningPage;