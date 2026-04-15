import React, { useEffect, useState } from 'react';
import { 
  FlaskConical, Database, Share2, ArrowRight, ClipboardCheck, 
  Microscope, Brain, Activity, Lock, Laptop, Code, Settings, 
  RefreshCw, Search, Cloud, Zap, Cpu, Network, Layers, 
  MessageSquare, Monitor, Eye, FileText, UserCheck, Briefcase, 
  Microscope as LabIcon, FlaskConical as Flask, ShieldCheck, 
  BarChart3, Bot, Video, Building2, Stethoscope, Clock, 
  HardDrive, UserPlus, AlertTriangle, Radio, Layout, 
  CheckCircle2, Headphones, Shield, Globe, Pill, TestTube2,
  BookOpen, Boxes, Truck, CreditCard, Kanban, Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const MedicalLabsPage: React.FC = () => {
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

  const labSolutions = [
    {
      title: "Laboratory Information System (LIS)",
      icon: LabIcon,
      desc: "Comprehensive software to manage lab workflows, from order entry to result reporting, optimized for clinical labs."
    },
    {
      title: "Lab Information Management (LIMS)",
      icon: Database,
      desc: "Robust systems for managing samples, associated data, and lab automation in R&D and industrial settings."
    },
    {
      title: "Electronic Lab Notebook (ELN)",
      icon: BookOpen,
      desc: "Digital alternative to paper notebooks for documenting research, experiments, and procedures."
    },
    {
      title: "Analytics for Laboratories",
      icon: BarChart3,
      desc: "Advanced data visualization and predictive analytics to improve lab performance and diagnostic accuracy."
    },
    {
      title: "Lab Data Management (LDMS)",
      icon: HardDrive,
      desc: "Specialized systems for the secure storage, retrieval, and management of large laboratory datasets."
    },
    {
      title: "Scientific Data Management (SDMS)",
      icon: Share2,
      desc: "Captures and centralizes data from various lab instruments for long-term storage and analysis."
    },
    {
      title: "Laboratory Execution System (LES)",
      icon: Terminal,
      desc: "Guides lab personnel through standard operating procedures (SOPs) to ensure consistency and compliance."
    },
    {
      title: "Quality Management System (QMS)",
      icon: ClipboardCheck,
      desc: "Ensures lab processes meet quality standards and regulatory requirements through rigorous tracking."
    },
    {
      title: "Inventory & Supply Chain",
      icon: Boxes,
      desc: "Software to track reagents, consumables, and equipment, optimizing the lab's supply chain."
    },
    {
      title: "Patient Portals for Diagnostic Labs",
      icon: Layout,
      desc: "Secure interfaces for patients to access test results, schedule appointments, and pay bills."
    },
    {
      title: "AI-Powered Diagnostics",
      icon: Brain,
      desc: "Intelligent engines that assist in analyzing complex lab data and identifying patterns for faster diagnosis."
    },
    {
      title: "Revenue Cycle Management (RCM)",
      icon: CreditCard,
      desc: "Streamlines billing and claims processing to maximize revenue and reduce administrative burden."
    }
  ];

  const serviceCategories = [
    {
      title: "Lab Software Engineering",
      icon: Code,
      items: [
        "Custom laboratory software development",
        "Web and mobile app development",
        "API and middleware (HL7 v2/v3 engines, FHIR APIs, CCDA gateways)",
        "Comprehensive software testing"
      ]
    },
    {
      title: "IT Consulting",
      icon: Briefcase,
      items: [
        "Software and IT infrastructure consulting",
        "Digital transformation and cloud consulting",
        "Compliance (HIPAA, GDPR, CLIA, FDA, USCDI)",
        "UX and UI design for lab interfaces"
      ]
    },
    {
      title: "Data Management & Analytics",
      icon: BarChart3,
      items: [
        "Data analytics (e.g., RCM analytics by CPT)",
        "Terminology curation (LOINC, SNOMED CT, ICD-10)",
        "USCDI-mapping and data warehousing"
      ]
    },
    {
      title: "Cybersecurity",
      icon: ShieldCheck,
      items: [
        "Cybersecurity consulting and audits",
        "Compliance assessments",
        "Penetration testing",
        "Managed security services"
      ]
    },
    {
      title: "IT Support",
      icon: Headphones,
      items: [
        "L1, L2, L3 employee help desk",
        "Help desk for life sciences companies",
        "Monitoring and troubleshooting of lab software (LIS, ELN, CTMS)",
        "IT infrastructure management and evolution",
        "Digital workplace management",
        "Infrastructure security and compliance management (HIPAA)"
      ]
    },
    {
      title: "Integration & Modernization",
      icon: RefreshCw,
      items: [
        "EHR/CDSS integration (HL7 v2/v3, FHIR)",
        "RCM integration (HIPAA X12 837/835)",
        "Application modernization",
        "Cloud migration services"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154235602-3c2c2aa59c1e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <LabIcon size={14} /> Medical Laboratory IT
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Precision in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Every Result</span>
                </h1>
                <p className="text-xl text-indigo-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide provides laboratory software development, consulting, support, and evolution services tailored to hospital, R&D, pathology, and public health labs.
                </p>
                <p className="text-sm text-indigo-200/80 mb-8 leading-relaxed max-w-xl italic">
                    Certified in ISO 13485, ISO 9001, and ISO 27001. Proficient in HIPAA, GDPR, FDA, IVDR, and MDR requirements.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] flex items-center">
                        Modernize Your Lab <ArrowRight className="ml-2" size={20} />
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
                      src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=2070" 
                      alt="Medical Laboratory" 
                      className="rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Microscope className="text-indigo-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-indigo-200">Diagnostics</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Database className="text-blue-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-blue-200">Data</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <ShieldCheck className="text-sky-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-sky-200">Compliant</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Solutions for Medical Labs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Robust software systems designed to optimize laboratory operations and scientific discovery.</p>
            <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labSolutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IT Services We Offer</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">End-to-end support for laboratory software engineering, consulting, and maintenance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-0.5" />
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
              <h2 className="text-3xl font-bold mb-6">Global Standards & Compliance</h2>
              <p className="text-slate-400 text-lg mb-8">
                Our laboratory solutions are built with a deep understanding of international quality and security standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-indigo-400" size={32} />
                  <span className="font-bold text-lg">ISO 13485 / 9001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="text-blue-400" size={32} />
                  <span className="font-bold text-lg">ISO 27001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-sky-400" size={32} />
                  <span className="font-bold text-lg">HIPAA / GDPR</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="text-teal-400" size={32} />
                  <span className="font-bold text-lg">FDA / IVDR / MDR</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">CLIA Compliance</h4>
                <p className="text-xs text-slate-400">Ensuring lab testing quality and accuracy standards.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Information Blocking</h4>
                <p className="text-xs text-slate-400">Adhering to the 21st Century Cures Act requirements.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">LOINC / SNOMED</h4>
                <p className="text-xs text-slate-400">Standardized terminology for lab observations and results.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">HL7 / FHIR</h4>
                <p className="text-xs text-slate-400">Seamless interoperability with EHRs and other systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Evolve Your Lab?</h2>
          <p className="text-xl text-indigo-100 mb-12">
            Partner with GnJ Worldwide for secure, compliant, and high-performance laboratory IT solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 font-bold py-5 px-12 rounded-2xl hover:bg-indigo-50 transition-all shadow-xl transform hover:-translate-y-1">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MedicalLabsPage;