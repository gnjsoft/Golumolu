import React, { useEffect } from 'react';
import { 
  Zap, Server, Activity, ArrowRight, Cloud, Cpu, Box, 
  Database, Brain, Binary, Network, ShieldCheck, RefreshCw, 
  SearchCode, Code2, Briefcase, Users2, UserCheck, 
  CheckCircle2, BarChart3, Settings, LifeBuoy, Terminal, 
  Infinity, Share2, Rocket, Gauge, HardDrive, Search, 
  MessageSquare, Layers, Globe, Smartphone, Microscope, 
  Building2, Truck, ShoppingCart, Landmark, Factory, 
  Briefcase as BriefcaseIcon, Users as UsersIcon, 
  ShieldCheck as ShieldCheckIcon, History, TestTube2, 
  Kanban, ClipboardList, ClipboardCheck, Warehouse, 
  Radio, Pill, Heart, Stethoscope, Image as ImageIcon, 
  TrendingUp, ShieldAlert, PenTool, Package, Eye, Bot, 
  Ticket, CreditCard, Share, Lock, Clock, FileText, 
  Handshake, Calculator, AlertTriangle, Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FaGolang } from 'react-icons/fa6';

const GolangPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const devSkills = [
    { title: "Real-time Data", items: ["RabbitMQ", "Apache Flink", "Spark Streaming", "Apache Storm", "Kafka Streams", "Amazon Kinesis"] },
    { title: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Cassandra", "Hive", "HBase"] },
    { title: "DevOps", items: ["Docker", "Kubernetes", "OpenShift", "Ansible", "Terraform", "Jenkins", "GitLab CI/CD"] },
    { title: "Monitoring", items: ["Prometheus", "Grafana", "Datadog", "Zabbix", "Nagios", "Elasticsearch"] }
  ];

  const whatWeDevelop = [
    { title: "Cloud-native Apps", icon: Cloud, desc: "Robust applications built specifically for modern cloud environments." },
    { title: "Distributed Systems", icon: Network, desc: "High-performance systems with native support for concurrency." },
    { title: "Embedded Systems (IoT)", icon: Cpu, desc: "Efficient software for smart devices and edge computing." },
    { title: "Big Data Systems", icon: Infinity, desc: "Managing high-volume data with exceptionally high performance." },
    { title: "AI & ML Software", icon: Brain, desc: "Empowered by advanced techs for predictive and analytical tasks." },
    { title: "Blockchain Software", icon: Binary, desc: "Secure and scalable decentralized applications." },
    { title: "Mobile Back End", icon: Smartphone, desc: "Fast and reliable server-side for mobile experiences." },
    { title: "Legacy Migration", icon: RefreshCw, desc: "Modernizing software for better performance and scalability." }
  ];

  const industryExpertise = [
    { name: "Manufacturing", icon: Factory },
    { name: "Healthcare", icon: Heart },
    { name: "Retail", icon: ShoppingCart },
    { name: "Financial Services", icon: Landmark },
    { name: "Transportation", icon: Truck },
    { name: "Telecoms", icon: Radio },
    { name: "Education", icon: Microscope },
    { name: "Professional Services", icon: Briefcase }
  ];

  const pricingModels = [
    { 
      title: "T&M (Hourly Rate)", 
      icon: Clock, 
      desc: "Best for projects with changing requirements or undefined scope.",
      cases: ["Agile development", "Knowledge transfer", "Exploratory phases"]
    },
    { 
      title: "Fixed Price", 
      icon: Lock, 
      desc: "Best for projects with fixed scope, deadlines, and budget.",
      cases: ["Defined deliverables", "Pre-defined activities", "Stable requirements"]
    }
  ];

  const successPillars = [
    { title: "Scoping", icon: Search, desc: "In-depth analysis of needs, goals, and constraints." },
    { title: "Resource Selection", icon: UsersIcon, desc: "Methodical approach to selecting the best Go talents." },
    { title: "Estimation", icon: Calculator, desc: "Refined techniques to optimize expenses and remain on budget." },
    { title: "Success Measurement", icon: BarChart3, desc: "Quantitative KPIs to monitor project health and achievements." },
    { title: "Collaboration", icon: Handshake, desc: "Tailored models with ongoing efficiency monitoring." },
    { title: "Reporting", icon: FileText, desc: "Regular updates on status, outcomes, and emerging risks." },
    { title: "Change Management", icon: RefreshCw, desc: "Transparent processes for approving or rejecting updates." },
    { title: "Risk Management", icon: AlertTriangle, desc: "Proactive mitigation and continuous monitoring." },
    { title: "Security Management", icon: ShieldCheckIcon, desc: "ISO 27001 principles for enhanced data protection." },
    { title: "Quality Management", icon: ClipboardCheck, desc: "Ensuring every line of code meets high standards." },
    { title: "Knowledge Management", icon: Lightbulb, desc: "Capturing and sharing collective wisdom for outcomes." },
    { title: "Post-launch Warranty", icon: LifeBuoy, desc: "Clear support and peace of mind after going live." }
  ];

  const serviceOptions = [
    {
      title: "Go Consulting",
      icon: SearchCode,
      desc: "Optimal architecture, library selection, and integration planning.",
      features: ["Architecture design", "Framework selection", "Software audit", "Prototyping"]
    },
    {
      title: "Go Development",
      icon: Code2,
      desc: "Robust cloud-native applications built by top Go developers.",
      features: ["Team augmentation", "Dedicated self-managed teams", "Full project outsourcing"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#00ADD8] via-[#0089ad] to-[#004d61] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="animate-pulse flex items-center"><FaGolang size={14} /></span> Golang Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              High-Load <br/> <span className="text-cyan-200">Scalability</span> with Go
            </h1>
            <p className="text-xl text-cyan-50 mb-10 leading-relaxed max-w-xl">
              Building robust cloud-native applications empowered by native concurrency and exceptionally high performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#00ADD8] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group">
                Hire Go Developers <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
                      <FaGolang size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Go 1.22+</h4>
                      <p className="text-xs text-cyan-200 italic">Compiled & Concurrent</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-xl font-bold">Goroutines</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-cyan-200 uppercase mb-1">Performance</p>
                    <p className="text-lg font-bold text-white">C-like Speed</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-cyan-200 uppercase mb-1">Memory</p>
                    <p className="text-lg font-bold text-cyan-300">Auto-managed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What We Develop Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What We Develop with Golang</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Leveraging Go's power to build robust, scalable, and high-performance software.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeDevelop.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-[#00ADD8]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-[#00ADD8] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00ADD8] group-hover:text-white transition-all shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Industry Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Delivering specialized Go solutions across diverse business domains.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industryExpertise.map((industry, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4 group hover:border-[#00ADD8] transition-all"
              >
                <div className="w-10 h-10 bg-cyan-50 text-[#00ADD8] rounded-lg flex items-center justify-center group-hover:bg-[#00ADD8] group-hover:text-white transition-all">
                  <industry.icon size={20} />
                </div>
                <span className="font-bold text-slate-800">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Models */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,173,216,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Go Services Options</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Flexible engagement formats to back up your Go development project.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {serviceOptions.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 group hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-[#00ADD8] text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <model.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">{model.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{model.desc}</p>
                <ul className="space-y-4 mb-10">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={18} className="text-cyan-400" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center bg-white text-[#00ADD8] font-bold py-4 px-8 rounded-xl hover:bg-cyan-50 transition-all group">
                  {model.title === "Go Consulting" ? "Request Consulting" : "Request Outsourcing"} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Securing Successful Completion</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Technical expertise coupled with advanced project management practices.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successPillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-white text-[#00ADD8] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Development Skills</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive ecosystem for building high-performance Go applications.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {devSkills.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-[#00ADD8] mb-6 uppercase tracking-widest text-sm">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Pricing Models</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Transparent and flexible options for diverse project requirements.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingModels.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 group hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-cyan-50 text-[#00ADD8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00ADD8] group-hover:text-white transition-all">
                  <model.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{model.title}</h3>
                <p className="text-slate-600 mb-6 text-sm">{model.desc}</p>
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recommended for:</p>
                  {model.cases.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 size={14} className="text-cyan-500" /> {c}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#00ADD8] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Wonder How Much Your Go Project Will Cost?</h2>
          <p className="text-xl text-cyan-50 mb-12">
            Let us know the project details, and we will provide an estimate for free.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[#00ADD8] font-bold py-5 px-12 rounded-2xl hover:bg-cyan-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GolangPage;