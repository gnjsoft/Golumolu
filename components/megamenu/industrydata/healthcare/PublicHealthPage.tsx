import React, { useEffect, useState } from 'react';
import { 
  Globe, Users, BarChart3, ShieldCheck, Map, Activity, 
  ArrowRight, Building2, FileText, UserCheck, Briefcase, 
  Lock, Laptop, Code, Settings, RefreshCw, Search, Cloud, 
  Zap, Cpu, Network, MessageSquare, Monitor, Eye, 
  Stethoscope, Clock, HardDrive, UserPlus, AlertTriangle, 
  Radio, Layout, CheckCircle2, Headphones, Shield, 
  Pill, BarChart, Bot, Video, HeartPulse, Brain, Scale, 
  Target, Layers, Database, Share2, UserCog, Heart, 
  BookOpen, Boxes, Truck, CreditCard, Kanban, Terminal, 
  ClipboardList, ClipboardCheck, Warehouse, Microscope, 
  Image as ImageIcon, Apple, Dumbbell, Smile, Link as LinkIcon, 
  Boxes as BlockchainIcon, Glasses, Handshake, Gift, Users2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PublicHealthPage: React.FC = () => {
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

  const solutionGroups = [
    {
      title: "Public Health Systems",
      icon: Globe,
      color: "blue",
      solutions: [
        { name: "Immunization Information (IIS)", desc: "Secure registries for tracking vaccinations and managing population-wide immunization programs." },
        { name: "Disease Surveillance (EDS)", desc: "Electronic systems for real-time tracking of outbreaks and infectious disease spread patterns." },
        { name: "Population Health Management", desc: "Tools to analyze community health data and implement targeted wellness interventions." },
        { name: "Vital Records Systems", icon: FileText, desc: "Digital management of birth, death, and other critical civil registry records." },
        { name: "Electronic Lab Reporting", icon: Microscope, desc: "Automated transmission of laboratory results to public health agencies for rapid response." }
      ]
    },
    {
      title: "Clinical Services",
      icon: Stethoscope,
      color: "indigo",
      solutions: [
        { name: "EHR & EMR Systems", desc: "Comprehensive electronic health and medical records tailored for public health departments." },
        { name: "HIE Portals", desc: "Health Information Exchange platforms for seamless data sharing across the care continuum." },
        { name: "Interoperability Middleware", desc: "Solutions that bridge disparate systems via FHIR, HL7, and custom API integrations." },
        { name: "Laboratory Info Systems (LIS)", desc: "End-to-end management of laboratory workflows, samples, and diagnostic reporting." },
        { name: "Imaging (RIS/PACS)", desc: "Radiology information systems and picture archiving for medical image management." },
        { name: "Medication Management", desc: "Software to track prescriptions, inventory, and patient adherence in public clinics." }
      ]
    },
    {
      title: "Operational & Admin Support",
      icon: Settings,
      color: "sky",
      solutions: [
        { name: "Care Coordination", desc: "Collaborative tools for managing complex patient cases across multiple providers and agencies." },
        { name: "Practice Management", desc: "Automated scheduling, billing, and administrative workflows for public health clinics." },
        { name: "HR for Healthcare", desc: "Specialized platforms for staff recruitment, credentialing, and workforce management." },
        { name: "Healthcare CRM", desc: "Patient and community relationship management to improve engagement and outreach." },
        { name: "Revenue Cycle (RCM)", desc: "Optimized billing and financial management for public health services." },
        { name: "Donor & Grant Management", icon: Gift, desc: "Specialized tools for NGOs to track funding, manage grants, and report to donors." },
        { name: "Volunteer Management", icon: Users2, desc: "Platforms to coordinate, schedule, and track volunteer contributions for health programs." },
        { name: "Supply Chain (SCM)", icon: Truck, desc: "Portals for managing medical supplies, vaccine distribution, and partner logistics." }
      ]
    },
    {
      title: "Connected Care & Engagement",
      icon: Heart,
      color: "teal",
      solutions: [
        { name: "Patient & Community Portals", desc: "Secure access for citizens to health records, appointment booking, and health education." },
        { name: "Patient Mobile Apps", desc: "Mobile-first solutions for health tracking, medication reminders, and virtual care." },
        { name: "Telehealth Software", desc: "Virtual consultation platforms designed for accessibility in underserved communities." },
        { name: "Remote Patient Monitoring", desc: "RPM tools for tracking chronic conditions and post-acute care in community settings." },
        { name: "Chronic Disease Management", desc: "Specialized apps for long-term condition support and patient engagement." }
      ]
    },
    {
      title: "Data Analytics & AI",
      icon: BarChart3,
      color: "blue",
      solutions: [
        { name: "Healthcare Data Warehouses", desc: "Centralized repositories for aggregating disparate public health data sources." },
        { name: "BI Dashboards", desc: "Real-time visualization of community health metrics and operational performance." },
        { name: "Clinical Decision Support", desc: "AI-driven tools to assist providers with evidence-based diagnosis and treatment." },
        { name: "AI Patient Chatbots", desc: "Intelligent assistants for triage, symptom checking, and health information." },
        { name: "Predictive Risk Analytics", desc: "ML models for patient risk stratification and proactive health interventions." },
        { name: "Diagnostic AI Assistants", desc: "AI-powered tools for medical imaging analysis and diagnostic accuracy." },
        { name: "Predictive Modeling", desc: "Tools to optimize resource allocation and predict future health trends." }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
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
                    <Globe size={14} /> Public Health IT
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    IT Solutions for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Agencies & NGOs</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide helps public health agencies and NGOs turn IT challenges into compliant, scalable software that enables better care and stronger programs.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center">
                        Modernize Your Systems <ArrowRight className="ml-2" size={20} />
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
                      src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=2070" 
                      alt="Public Health Impact" 
                      className="rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Activity className="text-blue-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-blue-200">Surveillance</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Users className="text-indigo-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-indigo-200">Population</span>
                        </div>
                        <div className={`flex flex-col items-center p-3 bg-white/10 rounded-xl`}>
                            <ShieldCheck className="text-sky-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-sky-200">Compliance</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Software Solutions for Public Health</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Compliant, scalable software engineered with precision, security, and real-world healthcare impact in mind.
            </p>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="space-y-20">
            {solutionGroups.map((group, idx) => (
              <motion.div key={idx} {...fadeIn}>
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-12 h-12 bg-${group.color}-100 text-${group.color}-600 rounded-xl flex items-center justify-center`}>
                    <group.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{group.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.solutions.map((sol, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all group">
                      <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{sol.name}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{sol.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Security & Regulatory Excellence</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We ensure your public health platforms meet the highest standards of security and regulatory compliance, protecting sensitive citizen data while enabling seamless interoperability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-400" size={32} />
                  <span className="font-bold text-lg">HIPAA / HITECH</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="text-indigo-400" size={32} />
                  <span className="font-bold text-lg">GDPR / SOC2</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-sky-400" size={32} />
                  <span className="font-bold text-lg">FHIR / HL7</span>
                </div>
                <div className="flex items-center gap-3">
                  <Scale className="text-blue-400" size={32} />
                  <span className="font-bold text-lg">Gov-Cloud Ready</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Database className="text-blue-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Data Sovereignty</h4>
                <p className="text-xs text-slate-400">Ensuring data remains within required geographical and legal boundaries.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Network className="text-indigo-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Interoperability</h4>
                <p className="text-xs text-slate-400">Seamlessly connecting public health systems with private providers.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Search className="text-sky-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Auditability</h4>
                <p className="text-xs text-slate-400">Comprehensive logging and tracking for all data access and modifications.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Zap className="text-teal-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Scalability</h4>
                <p className="text-xs text-slate-400">Architectures designed to handle massive population-scale data loads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Empower Your Public Health Mission</h2>
          <p className="text-xl text-blue-100 mb-12">
            Partner with GnJ Worldwide for secure, compliant, and high-impact IT solutions for government agencies and NGOs.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PublicHealthPage;