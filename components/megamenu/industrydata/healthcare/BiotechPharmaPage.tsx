import React, { useEffect, useState } from 'react';
import { 
  Dna, Microscope, Database, ArrowRight, Layers, TestTube, 
  FlaskConical, Activity, Lock, Laptop, Code, Settings, RefreshCw, 
  Cloud, Zap, Cpu, Network, MessageSquare, Monitor, Eye, 
  UserCheck, Briefcase, ShieldCheck, BarChart3, Bot, Video, 
  Building2, Stethoscope, Clock, HardDrive, UserPlus, 
  AlertTriangle, Radio, Layout, CheckCircle2, Headphones, 
  Shield, Pill, TestTube2, BookOpen, Boxes, Truck, CreditCard, 
  Kanban, Terminal, ClipboardList, Share2, UserCog, HeartPulse,
  TrendingUp, ShoppingCart, Warehouse, PieChart, FileText,
  Smartphone, Globe, Heart, Factory, ClipboardCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const BiotechPharmaPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const solutionSections = [
    {
      title: "Research & Development (R&D)",
      icon: Microscope,
      color: "purple",
      solutions: [
        "Drug discovery and preclinical research software",
        "Drug valuation and forecasting tools",
        "R&D portfolio management systems",
        "Laboratory information systems (LIS/LIMS)",
        "Electronic laboratory notebook (ELN) software",
        "Clinical trial management (CTMS/CDMS/EDC)",
        "eCOA, eTMF, and eSource solutions",
        "Interactive response technology (IRT) systems",
        "Decentralized clinical trial software",
        "Remote clinical trial monitoring"
      ]
    },
    {
      title: "Manufacturing & Procurement",
      icon: Factory,
      color: "indigo",
      solutions: [
        "Enterprise resource planning (ERP) systems",
        "Production systems (MES, PLC, SCADA, HMI)",
        "Quality control and QMS software",
        "Manufacturing intelligence and optimization",
        "Procurement management software",
        "Supply chain management (SCM) & analytics"
      ]
    },
    {
      title: "Sales & Distribution",
      icon: Truck,
      color: "blue",
      solutions: [
        "Customer relationship management (CRM)",
        "Order management systems (OMS)",
        "Warehouse management systems (WMS)",
        "Inventory management & optimization",
        "Sales performance analytics"
      ]
    },
    {
      title: "Financial Management",
      icon: CreditCard,
      color: "teal",
      solutions: [
        "Enterprise accounting software",
        "Revenue management software",
        "Financial modeling & forecasting",
        "Financial data analytics",
        "Compliance and audit reporting"
      ]
    },
    {
      title: "Direct-to-Patient & Engagement",
      icon: Heart,
      color: "emerald",
      solutions: [
        "Patient support portals and apps",
        "Patient assistance program portals",
        "Direct-to-patient (DTP) platforms",
        "DTP telehealth services",
        "Medication adherence solutions",
        "Patient recruitment & engagement portals"
      ]
    }
  ];

  const serviceCategories = [
    {
      title: "Pharma Software Engineering",
      icon: Code,
      items: [
        "Custom R&D and clinical software development",
        "GAMP 5 compliant software engineering",
        "Mobile health (mHealth) app development",
        "Integration with lab instruments and IoT"
      ]
    },
    {
      title: "IT Consulting & Strategy",
      icon: Briefcase,
      items: [
        "Digital transformation for life sciences",
        "Cloud strategy and GxP migration",
        "Validation and verification (V&V) strategy",
        "IT infrastructure optimization"
      ]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      items: [
        "Bioinformatics data pipelines",
        "Real-world evidence (RWE) analytics",
        "AI/ML for drug discovery and manufacturing",
        "Commercial and sales analytics"
      ]
    },
    {
      title: "Compliance & Security",
      icon: ShieldCheck,
      items: [
        "21 CFR Part 11 and Annex 11 compliance",
        "HIPAA and GDPR data protection",
        "Cybersecurity audits and penetration testing",
        "Managed security services"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-violet-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500 rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Dna size={14} /> Biotech & Pharma IT
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Innovating the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">Life Sciences</span>
                </h1>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide provides end-to-end software solutions for pharmaceutical and biotech companies, from drug discovery and R&D to manufacturing and patient engagement.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center">
                        Consult Our Experts <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1579154235602-3c2c2aa59c1e?auto=format&fit=crop&q=80&w=2070" 
                      alt="Biotech Research" 
                      className="rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Microscope className="text-purple-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-purple-200">R&D</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Settings className="text-violet-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-violet-200">Manufacturing</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <ShieldCheck className="text-sky-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-sky-200">GxP</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Custom Software Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive technology suites designed for every stage of the pharmaceutical lifecycle.</p>
            <div className="w-24 h-1.5 bg-purple-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="space-y-16">
            {solutionSections.map((section, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200 overflow-hidden relative group"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-${section.color}-500/5 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-110`}></div>
                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                  <div className="lg:w-1/3">
                    <div className={`w-16 h-16 bg-${section.color}-100 text-${section.color}-600 rounded-2xl flex items-center justify-center mb-6`}>
                      <section.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{section.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Optimizing workflows and ensuring data integrity across {section.title.toLowerCase()} operations.
                    </p>
                  </div>
                  <div className="lg:w-2/3 grid md:grid-cols-2 gap-4">
                    {section.solutions.map((sol, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-200">
                        <CheckCircle2 size={18} className={`text-${section.color}-500 shrink-0`} />
                        <span className="text-slate-700 text-sm font-medium">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IT Services for Life Sciences</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Expert consulting and engineering services to drive innovation and maintain compliance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-purple-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <category.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0 mt-1.5"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">GxP Compliance & Security</h2>
              <p className="text-slate-400 text-lg mb-8">
                We understand the critical nature of regulatory compliance in the pharmaceutical industry. Our solutions are built to exceed global standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-purple-400" size={32} />
                  <span className="font-bold text-lg">21 CFR Part 11</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="text-violet-400" size={32} />
                  <span className="font-bold text-lg">Annex 11</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-sky-400" size={32} />
                  <span className="font-bold text-lg">HIPAA / GDPR</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="text-teal-400" size={32} />
                  <span className="font-bold text-lg">GAMP 5</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Data Integrity</h4>
                <p className="text-xs text-slate-400">ALCOA+ principles integrated into every data workflow.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Validation</h4>
                <p className="text-xs text-slate-400">Computer System Validation (CSV) for all GxP applications.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Traceability</h4>
                <p className="text-xs text-slate-400">Full audit trails and serialization for supply chain visibility.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Quality Control</h4>
                <p className="text-xs text-slate-400">Integrated QMS for manufacturing and laboratory excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-purple-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Accelerate Innovation?</h2>
          <p className="text-xl text-purple-100 mb-12">
            Partner with GnJ Worldwide for secure, compliant, and high-performance biotech and pharma IT solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-purple-600 font-bold py-5 px-12 rounded-2xl hover:bg-purple-50 transition-all shadow-xl transform hover:-translate-y-1">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BiotechPharmaPage;