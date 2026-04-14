import React, { useEffect, useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Server, 
  ArrowRight, 
  Radio, 
  RefreshCw, 
  BarChart, 
  CheckCircle2, 
  Clock, 
  Users, 
  TrendingUp, 
  Settings, 
  Headphones, 
  Target, 
  Zap, 
  Award, 
  Cloud, 
  Lock, 
  MonitorSmartphone,
  MessageSquare,
  FileText,
  Shield,
  Layers,
  Cpu,
  Database,
  Globe,
  Network,
  Terminal,
  Calculator,
  ChevronDown,
  ChevronUp,
  Search,
  CheckCircle,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const ManagedItServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Help desk');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const kpis = {
    'Help desk': [
      "First response time",
      "Customer Satisfaction Score (CSAT)",
      "Resolution rate",
      "Abandonment rate for calls"
    ],
    'Cybersecurity': [
      "Networks/software/devices monitored",
      "Incidents detected",
      "Incidents resolved",
      "Incident response time"
    ],
    'Application support': [
      "Application availability",
      "Application change requests implemented",
      "Application change requests waiting in backlog",
      "Satisfaction of key application stakeholders"
    ]
  };

  const managedServices = [
    {
      title: "IT Help Desk",
      icon: Headphones,
      details: [
        "L1 help desk – resolution of basic user issues.",
        "L2 help desk – resolution of complex technical and basic infrastructure issues.",
        "L3 help desk – resolution of app issues on the code level and advanced infrastructure problems."
      ]
    },
    {
      title: "IT Infrastructure Assessment",
      icon: Search,
      details: [
        "Analysis of IT infrastructure focus on scalability, efficiency, and security.",
        "Optimization roadmap with tactical solutions to identified problems.",
        "IT infrastructure cost optimization."
      ]
    },
    {
      title: "IT Infrastructure Monitoring 24/7",
      icon: Activity,
      details: [
        "Configuration of tools for monitoring and alerting (Prometheus, Nagios).",
        "Reporting on availability, uptime and response time of every component.",
        "Managed network operations center (NOC)."
      ]
    },
    {
      title: "IT Infrastructure Management",
      icon: Server,
      details: [
        "Design, deployment, and integration of new infrastructure components.",
        "Modernization of legacy infrastructures.",
        "Disaster recovery and failover strategies.",
        "Vulnerability management and regular compliance reviews (HIPAA, GDPR, etc.)."
      ]
    },
    {
      title: "Cloud Management",
      icon: Cloud,
      details: [
        "AWS, Azure and multi-cloud infrastructure management.",
        "Design and deployment of cloud infrastructures.",
        "Applications and data migration to the cloud.",
        "Cloud monitoring and optimization."
      ]
    },
    {
      title: "Managed Application Services",
      icon: Layers,
      details: [
        "Application monitoring with focus on critical metrics.",
        "Application troubleshooting and modernization.",
        "Continuous delivery of new features and design experiments."
      ]
    },
    {
      title: "Managed DevOps",
      icon: Terminal,
      details: [
        "Deployment of CI/CD pipeline.",
        "Implementation of containerization strategy (Kubernetes, Apache Mesos).",
        "Implementation of test automation and automated monitoring."
      ]
    },
    {
      title: "Managed Security",
      icon: Shield,
      details: [
        "Security audits and vulnerability assessment.",
        "Penetration testing.",
        "Compliance program planning and assessment."
      ]
    }
  ];

  const itComponents = [
    { category: "Hardware", items: ["Desktops", "Laptops", "Mobile devices", "IoT devices"], icon: MonitorSmartphone },
    { category: "Software", items: ["Custom applications", "SaaS applications", "Cloud applications"], icon: FileText },
    { category: "Networks", items: ["Switches & Routers", "Wireless access points", "VPNs & CDNs"], icon: Network },
    { category: "Data Storage", items: ["Databases", "Data warehouses", "Data lakes", "Cloud storage"], icon: Database },
    { category: "Cloud Infrastructure", items: ["IaaS & PaaS", "Containers & Kubernetes", "Serverless computing"], icon: Cloud },
    { category: "Security Tools", items: ["Firewalls & SIEM", "IAM & Antivirus", "Encryption tools"], icon: Lock },
    { category: "Dev Infrastructure", items: ["CI/CD pipelines", "Version control", "IaC tools"], icon: Cpu },
    { category: "Cloud Orchestration", items: ["Multi-cloud tools", "Cost optimization", "Governance tools"], icon: Settings }
  ];

  const pricingModels = [
    {
      title: "Per-ticket pricing",
      bestFor: "L1, L2 support, security management.",
      desc: "Define ticket cost at start; charged based on monthly volume of resolved incidents.",
      icon: FileText
    },
    {
      title: "Fixed monthly fee",
      bestFor: "L3 support, security management.",
      desc: "Prepaid reduced hourly rate for a set of hours for continuous support.",
      icon: Clock,
      highlight: true
    },
    {
      title: "Time & Material",
      bestFor: "Evolution of applications and infrastructure.",
      desc: "Monthly invoice based on hours or efforts reported per month with a cap.",
      icon: Calculator
    },
    {
      title: "Mixed model",
      bestFor: "Long-term cooperation with miscellaneous services.",
      desc: "Combine different pricing models best fitting the required activities.",
      icon: RefreshCw
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-emerald-950 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070" 
            alt="Managed IT" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-bold tracking-widest mb-8 backdrop-blur-sm">
              <Activity size={16} className="animate-pulse" /> MANAGED IT SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Keep Your Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Stable & Scalable</span>
            </h1>
            <p className="text-xl text-emerald-100/80 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide is a trusted partner for designing, building, optimizing, and evolving IT infrastructures under strict SLA-based accountability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
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
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">24/7</div>
                  <div className="text-xs text-emerald-200/60 uppercase tracking-wider">Availability</div>
                </div>
                <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">ISO</div>
                  <div className="text-xs text-emerald-200/60 uppercase tracking-wider">27001 Certified</div>
                </div>
                <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">SLA</div>
                  <div className="text-xs text-emerald-200/60 uppercase tracking-wider">Guaranteed KPIs</div>
                </div>
                <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">8h</div>
                  <div className="text-xs text-emerald-200/60 uppercase tracking-wider">Urgent Fixes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- COOPERATION MODELS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Comfortable & Risk-Free Cooperation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We ensure transparency and trust through flexible models and documented accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Flexible Models", 
                desc: "Full-service MSP or co-managed cooperation sharing responsibilities with your internal IT department.",
                icon: Users 
              },
              { 
                title: "SLA-Based Delivery", 
                desc: "Documenting services, terms, and KPIs to ensure transparency and measurable performance.",
                icon: FileText 
              },
              { 
                title: "24/7 Responsiveness", 
                desc: "Max 8 hours for urgent fixes and proactive detection to prevent issues before they affect users.",
                icon: Clock 
              },
              { 
                title: "Smooth Communication", 
                desc: "Tailored communication styles, native language contacts, and scheduled performance reports.",
                icon: MessageSquare 
              },
              { 
                title: "Knowledge Transfer", 
                desc: "Structured transfer to in-house teams with comprehensive documentation and IaC codification.",
                icon: RefreshCw 
              },
              { 
                title: "Guaranteed Quality", 
                desc: "Security-by-design approach and ISO 27001-certified ISMS to keep your data safe.",
                icon: ShieldCheck 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* KPI Tabs */}
          <div className="mt-20 bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Sample KPIs for Our Managed Services</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {Object.keys(kpis).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    activeTab === tab ? 'bg-emerald-500 text-white' : 'bg-white/10 text-slate-400 hover:bg-white/20'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto"
              >
                {kpis[activeTab as keyof typeof kpis].map((kpi, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={18} />
                    <span className="text-slate-300">{kpi}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- SERVICES SCOPE --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Managed IT Services We Deliver</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We plan a scope of managed services individually for each client's unique infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managedServices.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-4 h-12 flex items-center">{service.title}</h4>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-xs text-slate-500 flex gap-2">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IT COMPONENTS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">One Team for All Your IT Tasks</h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                  GnJ Worldwide manages all your IT components, from daily monitoring to long-term evolution.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {itComponents.map((comp, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all group">
                    <comp.icon className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="text-lg font-bold mb-4">{comp.category}</h3>
                    <ul className="space-y-2">
                      {comp.items.map((item, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500/40 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Benefits of Hiring a Mature MSP</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Cost Savings", desc: "Pay only for actual work done and scale the team without lengthy hiring processes.", icon: DollarSign },
              { title: "Diverse Expertise", desc: "Instant access to a broad pool of IT experts equipped to solve unique problems.", icon: Award },
              { title: "24/7 Support", desc: "Teams covering different time zones and holidays for reliable around-the-clock support.", icon: Headphones },
              { title: "Uninterrupted Services", desc: "Full responsibility for service delivery, ensuring work doesn't halt if an employee is out.", icon: Zap }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-emerald-200 transition-all shadow-sm">
                <benefit.icon className="text-emerald-600 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING MODELS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Flexible Pricing Models</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the pricing model that best fits your required activities and service suite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingModels.map((model, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-[2.5rem] border transition-all flex flex-col ${
                  model.highlight 
                  ? 'bg-emerald-900 text-white border-emerald-800 shadow-xl scale-105 z-10' 
                  : 'bg-slate-50 text-slate-900 border-slate-200'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  model.highlight ? 'bg-emerald-500 text-white' : 'bg-white text-emerald-600 shadow-sm'
                }`}>
                  <model.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${model.highlight ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  Best for: {model.bestFor}
                </div>
                <p className={`text-sm leading-relaxed mb-8 flex-grow ${model.highlight ? 'text-emerald-100/70' : 'text-slate-500'}`}>
                  {model.desc}
                </p>
                <Link 
                  to="/contact" 
                  className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                    model.highlight 
                    ? 'bg-emerald-500 text-white hover:bg-emerald-400' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-emerald-900 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Optimize Your IT Infrastructure?</h2>
          <p className="text-xl text-emerald-100/80 mb-12">
            Let's discuss how our managed IT services can bring stability, security, and scalability to your business.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-emerald-900 font-bold py-5 px-12 rounded-2xl hover:bg-emerald-50 transition-all shadow-xl transform hover:-translate-y-1">
            Discuss My Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ManagedItServicesPage;