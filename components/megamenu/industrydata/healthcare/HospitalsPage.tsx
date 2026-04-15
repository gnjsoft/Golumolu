import React, { useEffect, useState } from 'react';
import { 
  Building2, Users, Clock, HeartPulse, ArrowRight, CalendarCheck, 
  Stethoscope, ShieldCheck, Database, Activity, Laptop, Code, 
  Settings, RefreshCw, Search, Lock, Cloud, Zap, Cpu, Network, 
  Layers, MessageSquare, Monitor, Eye, ClipboardCheck, 
  FileText, UserCheck, Briefcase, FlaskConical, Microscope, 
  CheckCircle2, AlertCircle, TrendingUp, Headphones, Target, 
  Smartphone, Layout, TestTube2, Shield, Globe, Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const HospitalsPage: React.FC = () => {
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

  const solutions = [
    { title: "EHR Software", icon: FileText },
    { title: "Healthcare Information Exchange (HIE)", icon: Network },
    { title: "Laboratory Information System (LIS)", icon: TestTube2 },
    { title: "Radiology Information System (RIS)", icon: Microscope },
    { title: "PACS", icon: Monitor },
    { title: "Healthcare Data Analytics", icon: TrendingUp },
    { title: "Revenue Cycle Management (RCM)", icon: Briefcase },
    { title: "Hospital Asset Tracking", icon: Target },
    { title: "Inventory Management", icon: Database },
    { title: "Healthcare CRM", icon: Users },
    { title: "Virtual Hospitals", icon: Globe },
    { title: "Home Health Software", icon: Building2 },
    { title: "HR Software for Healthcare", icon: UserCheck },
    { title: "Telemedicine Apps", icon: Smartphone },
    { title: "Remote Patient Monitoring", icon: Activity },
    { title: "Chronic Disease Management", icon: HeartPulse },
    { title: "Clinical Decision Support", icon: Brain },
    { title: "Care Coordination Platforms", icon: Layers },
    { title: "Medication Administration", icon: ClipboardCheck },
    { title: "Patient Portals", icon: Layout },
    { title: "Medical Websites", icon: Laptop },
    { title: "Appointment Management", icon: CalendarCheck }
  ];

  const advancedTechs = [
    { title: "IoT Solutions", icon: Network, desc: "Connected medical devices and real-time patient monitoring systems." },
    { title: "Blockchain", icon: Layers, desc: "Secure and decentralized management of personal medical records." },
    { title: "Medical AI Chatbots", icon: MessageSquare, desc: "Intelligent conversational tools for patient engagement and symptom checking." },
    { title: "AI Records Management", icon: Brain, desc: "Automated processing and organization of complex patient data." },
    { title: "VR for Healthcare", icon: Eye, desc: "Immersive solutions for medical staff training and surgery planning." },
    { title: "AI Treatment Personalization", icon: Zap, desc: "Data-driven insights to tailor treatments to individual patient needs." }
  ];

  const specializedServices = [
    {
      title: "Healthcare Software Engineering",
      icon: Code,
      items: [
        "Custom software development",
        "Web app development",
        "Mobile app development",
        "UI/UX design services",
        "Healthcare software testing"
      ]
    },
    {
      title: "Healthcare IT Support",
      icon: Headphones,
      items: [
        "L1, L2, L3 employee help desk",
        "Monitoring medical software & devices",
        "IT infrastructure management",
        "Digital workplace management",
        "Security & compliance management"
      ]
    },
    {
      title: "IT Consulting",
      icon: Search,
      items: [
        "Software & infrastructure consulting",
        "Digital transformation & cloud consulting",
        "Healthcare analytics consulting",
        "Compliance consulting (HIPAA, GDPR, FDA)"
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      items: [
        "Cybersecurity consulting",
        "IT security audit",
        "Compliance assessment",
        "Penetration testing",
        "Managed security services"
      ]
    },
    {
      title: "Modernization & Integration",
      icon: RefreshCw,
      items: [
        "Application modernization",
        "Cloud migration services",
        "EHR integration (FHIR/USCDI APIs)",
        "HL7 v2/v3 & CCDA bridges",
        "SNOMED CT & LOINC alignment"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Building2 size={14} /> Hospitals & Health Systems
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Software & IT Services for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Medical Care Providers</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide provides software consulting, engineering, support, and evolution services tailored to the needs of patients and healthcare professionals.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center">
                        Consult Our Experts <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-center">
                                <ShieldCheck className="text-blue-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">ISO</div>
                                <div className="text-xs text-blue-300/60 uppercase">13485, 9001, 27001</div>
                            </div>
                            <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-center">
                                <Activity className="text-indigo-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">HIPAA</div>
                                <div className="text-xs text-indigo-300/60 uppercase">Compliant</div>
                            </div>
                            <div className="p-6 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-center">
                                <Lock className="text-cyan-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">GDPR</div>
                                <div className="text-xs text-cyan-300/60 uppercase">Ready</div>
                            </div>
                            <div className="p-6 bg-slate-500/10 rounded-2xl border border-slate-500/20 text-center">
                                <CheckCircle2 className="text-slate-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">FDA</div>
                                <div className="text-xs text-slate-300/60 uppercase">Proficient</div>
                            </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Software Solutions for Healthcare Providers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Robust digital tools designed for patients, doctors, and care coordinators.</p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <solution.icon size={24} />
                </div>
                <h3 className="text-sm font-bold text-slate-800 leading-tight">{solution.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technologies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Advanced Technologies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Leveraging innovation to drive clinical excellence and operational efficiency.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedTechs.map((tech, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <tech.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{tech.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized IT Services */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Specialized IT Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Expertise across the entire healthcare IT lifecycle.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Modernization & Integration Standards</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We ensure your systems are interoperable and future-proof by adhering to industry-leading standards and protocols.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["FHIR/USCDI APIs", "HL7 v2/v3", "CCDA Bridges", "XDS/XDS-I", "NCPDP SCRIPT", "HIPAA X12", "SNOMED CT", "LOINC", "RxNorm", "ICD-10 / CPT"].map((std, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {std}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] transform -rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000" 
                alt="Healthcare Technology Integration" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Transform Your Care Delivery?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Partner with GnJ Worldwide to build robust, secure, and interoperable solutions for your health system.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1">
            Discuss Your Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HospitalsPage;