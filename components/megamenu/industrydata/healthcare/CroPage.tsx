import React, { useEffect, useState } from 'react';
import { 
  FileText, Users, Globe, ArrowRight, Search, FileCheck, 
  Database, Activity, Lock, Laptop, Code, Settings, RefreshCw, 
  Cloud, Zap, Cpu, Network, Layers, MessageSquare, Monitor, 
  Eye, UserCheck, Briefcase, ShieldCheck, BarChart3, Bot, 
  Video, Building2, Stethoscope, Clock, HardDrive, UserPlus, 
  AlertTriangle, Radio, Layout, CheckCircle2, Headphones, 
  Shield, Pill, TestTube2, BookOpen, Boxes, Truck, CreditCard, 
  Kanban, Terminal, ClipboardList, Share2, UserCog, HeartPulse,
  Smartphone, ClipboardCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const CroPage: React.FC = () => {
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

  const croSolutions = [
    {
      title: "Clinical Trial Management (CTMS)",
      icon: Kanban,
      desc: "Centralized platforms to manage multi-site trials, patient recruitment, investigator relationships, and study milestones."
    },
    {
      title: "Clinical Data Management (CDMS)",
      icon: Database,
      desc: "Robust systems for collecting, cleaning, and managing clinical trial data while ensuring data integrity and quality."
    },
    {
      title: "Electronic Trial Master File (eTMF)",
      icon: FileCheck,
      desc: "Secure, searchable, and compliant document management for trial-related records, adhering to 21 CFR Part 11."
    },
    {
      title: "Electronic Data Capture (EDC)",
      icon: Laptop,
      desc: "Streamlined digital data collection from trial sites, reducing errors and accelerating the data entry process."
    },
    {
      title: "eCOA & ePRO Solutions",
      icon: Smartphone,
      desc: "Tools for capturing patient-reported outcomes and clinical assessments electronically, improving data accuracy."
    },
    {
      title: "Randomization & Supply (RTMS)",
      icon: RefreshCw,
      desc: "Automated randomization of subjects and real-time management of clinical trial supply chains."
    },
    {
      title: "Regulatory Information Management",
      icon: ShieldCheck,
      desc: "Systems to track regulatory submissions, approvals, and compliance across different global jurisdictions."
    },
    {
      title: "Clinical Trial Portals",
      icon: Layout,
      desc: "Unified interfaces for investigators, sponsors, and CRO personnel to collaborate and access real-time study data."
    },
    {
      title: "Supply Chain Management Portals",
      icon: Truck,
      desc: "Specialized portals to monitor and manage the logistics of clinical supplies, drugs, and medical devices."
    },
    {
      title: "Analytics for CROs",
      icon: BarChart3,
      desc: "Advanced data visualization and predictive modeling to optimize trial performance and identify risks early."
    },
    {
      title: "Financial Management Software",
      icon: CreditCard,
      desc: "Tools for investigator payments, site budgeting, and overall trial financial tracking and reporting."
    },
    {
      title: "eConsent Software",
      icon: UserCheck,
      desc: "Digital informed consent platforms that improve patient understanding and ensure regulatory compliance."
    }
  ];

  const serviceCategories = [
    {
      title: "Clinical Software Engineering",
      icon: Code,
      items: [
        "Custom CTMS and CDMS development",
        "EDC and eCOA mobile app development",
        "API and middleware for trial integration",
        "Validation and verification (V&V) testing"
      ]
    },
    {
      title: "IT Consulting & Strategy",
      icon: Briefcase,
      items: [
        "Digital transformation for clinical trials",
        "Cloud strategy and migration for CROs",
        "Compliance consulting (21 CFR Part 11, Annex 11)",
        "UX/UI design for clinical interfaces"
      ]
    },
    {
      title: "Data Management & Analytics",
      icon: BarChart3,
      items: [
        "Clinical data warehousing and integration",
        "Biostatistics and data visualization",
        "AI/ML for patient recruitment and retention",
        "Real-world evidence (RWE) analytics"
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: Shield,
      items: [
        "Clinical data security audits",
        "HIPAA, GDPR, and GxP compliance",
        "Penetration testing for clinical systems",
        "Managed security for trial portals"
      ]
    },
    {
      title: "IT Support & Managed Services",
      icon: Headphones,
      items: [
        "L1, L2, L3 help desk for trial sites",
        "24/7 monitoring of critical trial systems",
        "Infrastructure management for CROs",
        "Digital workplace solutions for remote teams"
      ]
    },
    {
      title: "Modernization & Integration",
      icon: Layers,
      items: [
        "Legacy CTMS/EDC modernization",
        "Integration with EHR and Lab systems",
        "Migration to decentralized trial platforms",
        "HIE and HDO data integration"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <TestTube2 size={14} /> CRO Technology Partner
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Accelerating <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Clinical Discovery</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide engineers secure, compliant, and high-performance software solutions for Contract Research Organizations to streamline trials and speed up time-to-market.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center">
                        Optimize Your Trials <ArrowRight className="ml-2" size={20} />
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
                      src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2071" 
                      alt="Clinical Research" 
                      className="rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Database className="text-blue-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-blue-200">Data</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Globe className="text-indigo-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-indigo-200">Global</span>
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

      {/* Software Solutions Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Software Solutions for CROs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Specialized clinical research technology to manage the entire trial lifecycle with precision.</p>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {croSolutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <solution.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IT Services for CROs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">End-to-end support from clinical software engineering to global help desk services.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
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
              <h2 className="text-3xl font-bold mb-6">GxP & Regulatory Excellence</h2>
              <p className="text-slate-400 text-lg mb-8">
                Clinical trials demand the highest level of compliance. We ensure your systems meet all global regulatory standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-400" size={32} />
                  <span className="font-bold text-lg">21 CFR Part 11</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="text-indigo-400" size={32} />
                  <span className="font-bold text-lg">Annex 11</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-sky-400" size={32} />
                  <span className="font-bold text-lg">HIPAA / GDPR</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="text-teal-400" size={32} />
                  <span className="font-bold text-lg">ICH GCP</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Data Integrity</h4>
                <p className="text-xs text-slate-400">ALCOA+ principles applied to all clinical data management.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Validation</h4>
                <p className="text-xs text-slate-400">Computer System Validation (CSV) for all GxP software.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Security</h4>
                <p className="text-xs text-slate-400">End-to-end encryption and robust audit trails for ePHI.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Audit Readiness</h4>
                <p className="text-xs text-slate-400">Systems designed to be always ready for regulatory inspections.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Modernize Your Trials?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Partner with GnJ Worldwide for secure, compliant, and high-performance clinical research technology.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CroPage;