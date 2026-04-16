import React, { useEffect } from 'react';
import { 
  Rocket, 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  Target,
  Settings,
  Cloud,
  Layers, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  Users, 
  Search, 
  TrendingUp, 
  Database, 
  ShoppingCart, 
  Headphones, 
  Truck, 
  BarChart3, 
  Briefcase, 
  Globe, 
  ShieldCheck, 
  Stethoscope, 
  Landmark, 
  Factory, 
  FileText,
  Binary,
  BrainCircuit,
  Link2,
  Eye,
  Smartphone,
  Box,
  Timer,
  DollarSign,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const DigitalTransformationPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const businessAreas = [
    {
      title: "Customer experience",
      icon: ShoppingCart,
      desc: "We create customer experience programs focused on digital engagement and multitouch customer journeys.",
      elements: ["Ecommerce launch in B2C and B2B segments", "Immersive digital experience: AR-powered apps, 3D product modeling", "IoT-assisted in-store experience", "Programmatic advertising tools"]
    },
    {
      title: "Customer service",
      icon: Headphones,
      desc: "We help businesses create fast, helpful and proactive digital customer service.",
      elements: ["IoT-enabled remote servicing", "Multi-channel customer service desk", "AI adoption for task automation", "Intelligent chatbots"]
    },
    {
      title: "Supply chain",
      icon: Truck,
      desc: "By redesigning supply chains, we help make them faster and more flexible.",
      elements: ["No-touch supply chain planning", "Ad-hoc demand forecasting", "E-procurement", "Robotic process automation", "Blockchain-based traceability"]
    },
    {
      title: "Corporate finance",
      icon: DollarSign,
      desc: "We help companies digitalize up to 90% of corporate finance-related tasks.",
      elements: ["Automation of document processing", "AI-powered big data processing", "In-house banking automation", "Blockchain-based recordkeeping"]
    },
    {
      title: "Workforce",
      icon: Users,
      desc: "We provide digital tools to arm your employees with new abilities.",
      elements: ["HR systems", "Low-code apps for workflow automation", "Digital workspaces for collaboration", "Secure remote work environment"]
    },
    {
      title: "Enterprise-wide transformation",
      icon: Globe,
      desc: "We take a holistic approach to identify and improve all pain points.",
      elements: ["Modernization of legacy software", "Creation of new business software", "Cloud enablement"]
    },
    {
      title: "Data analytics and BI",
      icon: BarChart3,
      desc: "We determine how your company can benefit from its aggregated data.",
      elements: ["Data management automation", "Cloud data migration", "Enterprise data warehouse", "Self-service BI implementation"]
    },
    {
      title: "IT infrastructure management",
      icon: Layers,
      desc: "We assess your current IT environment and plan improvements.",
      elements: ["Real-time infrastructure monitoring", "Cloud migration", "DevOps processes & CI/CD optimization", "Help desk process improvement"]
    },
    {
      title: "Cybersecurity management",
      icon: ShieldCheck,
      desc: "We implement comprehensive security mechanisms to protect your assets.",
      elements: ["Security audit & pentesting", "Compliance (SOC 2, ISO 27001, etc.)", "Network protection (SIEM, IDS/IPS)", "End-to-end data encryption"]
    }
  ];

  const industryDT = [
    {
      title: "Healthcare",
      icon: Stethoscope,
      desc: "Opening new ways to deliver care remotely and improving patient supervision.",
      elements: ["Telemedicine", "Wearable IoT devices", "RFID-based inventory management", "Medical image analysis"]
    },
    {
      title: "Financial services",
      icon: Landmark,
      desc: "Achieving digital agility with custom process automation and advanced tech.",
      elements: ["Omnichannel customer servicing", "Intelligent risk assessment", "Decentralized finance", "Open APIs"]
    },
    {
      title: "Manufacturing",
      icon: Factory,
      desc: "Bringing Industry 4.0 to life to increase productivity and quality.",
      elements: ["Sensor-equipped machinery", "Digital twins", "Connected workers", "Product quality control"]
    },
    {
      title: "Insurance",
      icon: Heart,
      desc: "Helping insurance companies disrupt traditional models and operate efficiently.",
      elements: ["Underwriting automation", "Claim management automation", "Customer portals & mobile apps", "Remote damage inspection"]
    }
  ];

  const dtSteps = [
    {
      step: "1",
      title: "In-depth investigation",
      desc: "We get an overall business picture, find goals, and identify areas of waste (time, energy, data).",
      icon: Search
    },
    {
      step: "2",
      title: "Digital transformation strategy",
      desc: "Setting long-term goals, prioritizing initiatives, and appraising costs and timelines.",
      icon: Target
    },
    {
      step: "3",
      title: "Digital transformation implementation",
      desc: "Infrastructure transformation, new software implementation, and data analytics setup.",
      icon: Rocket
    },
    {
      step: "4",
      title: "Risk mitigation",
      desc: "Controlling operational complexity, performance, cybersecurity, and compliance risks.",
      icon: ShieldCheck
    },
    {
      step: "5",
      title: "Program and project management",
      desc: "Coordinating teams, managing costs, and establishing CI/CD practices.",
      icon: Settings
    }
  ];

  const dtTech = [
    { name: "Edge Computing", icon: Cpu },
    { name: "Cloud Computing", icon: Cloud },
    { name: "Machine Learning", icon: Binary },
    { name: "NLP", icon: BrainCircuit },
    { name: "Image Analysis", icon: Eye },
    { name: "AI & Data Science", icon: BrainCircuit },
    { name: "Internet of Things", icon: Smartphone },
    { name: "Digital Twins", icon: Box },
    { name: "Blockchain", icon: Link2 },
    { name: "Augmented Reality", icon: Box },
    { name: "Virtual Reality", icon: Layers },
    { name: "Big Data", icon: Database }
  ];

  const clientValues = [
    { title: "Flexibility in scope and cost", desc: "Start within one business area and gradually expand. Initial investment ₹85L-₹4.2Cr.", icon: DollarSign },
    { title: "Minimal business disruptions", desc: "Step-by-step implementation and off-hours releases to minimize impact.", icon: Timer },
    { title: "Streamlined user adoption", desc: "Involving stakeholders in UX design and gathering feedback from first adopters.", icon: Users },
    { title: "Realistic timelines", desc: "Pragmatic planning and mature risk management practices for predictable delivery.", icon: CheckCircle2 },
    { title: "Full service coverage", desc: "Pool of 750+ talents for any ad hoc task from data science to blockchain.", icon: Briefcase },
    { title: "Guaranteed ROI", desc: "Focus on solving specific business challenges and assessing economic feasibility.", icon: TrendingUp }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-indigo-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-800/50 border border-indigo-700 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <RefreshCw size={14} />
              Digital Transformation Services
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              End-to-End <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Digital Transformation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-indigo-100 mb-10 leading-relaxed"
            >
              GnJ Worldwide helps businesses across 30+ industries modernize legacy systems, introduce process automation, and reach new heights with advanced technology.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/50 flex items-center group">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHEN IS IT TIME --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">When Is It Time for Digital Transformation?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              9 in 10 leaders have embarked on at least one digital transformation project in the past two years. What prompts businesses to kick off DT?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Outdated legacy systems", desc: "Harder to scale, accumulating technical debt, and growing security concerns.", icon: AlertTriangle, color: "text-amber-600", bgColor: "bg-amber-50" },
              { title: "Inefficient processes", desc: "Manual, slow, and error-prone routines that gap established routines and outcomes.", icon: Timer, color: "text-blue-600", bgColor: "bg-blue-50" },
              { title: "Intense competition", desc: "Competitors leveraging modern tech to operate faster and serve customers better.", icon: TrendingUp, color: "text-indigo-600", bgColor: "bg-indigo-50" },
              { title: "Data out of control", desc: "Siloed storage and manual management preventing data from reaching analytics.", icon: Database, color: "text-purple-600", bgColor: "bg-purple-50" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BUSINESS AREAS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Applying DT across Business Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We carry out targeted, sustainable innovations in business-critical areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessAreas.map((area, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <area.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{area.desc}</p>
                <div className="space-y-2">
                  {area.elements.map((el, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                      <CheckCircle2 size={14} className="text-indigo-500 mt-0.5 shrink-0" />
                      <span>{el}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center mt-8 text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors group">
                  See more <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRY SPECIFIC --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Industry-Specific Transformation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored digital agility for specialized sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryDT.map((ind, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col md:flex-row gap-8">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shrink-0">
                  <ind.icon size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4">{ind.title}</h4>
                  <p className="text-slate-400 mb-6 leading-relaxed">{ind.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {ind.elements.map((el, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-indigo-400 mt-1 shrink-0" />
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW WE UNFOLD DT --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How We Unfold Digital Transformation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We manage large-scale projects effectively by bringing clear structure and organization.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {dtSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-indigo-600 text-indigo-600 flex items-center justify-center font-bold text-2xl mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGIES --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">DT Technologies for Advanced Capabilities</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {dtTech.map((tech, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center group hover:bg-indigo-600 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <tech.icon size={24} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-white transition-colors">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENT VALUES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What DT Clients Value in Our Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientValues.map((val, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <val.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to modernize your business?</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            We carry out targeted, sustainable innovations in business-critical areas while maintaining strict budget control.
          </p>
          <Link to="/contact" className="inline-block bg-white text-indigo-600 font-bold py-5 px-12 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl transform hover:-translate-y-1">
            Consult with Our Experts
          </Link>
        </div>
      </section>

    </div>
  );
};

export default DigitalTransformationPage;
