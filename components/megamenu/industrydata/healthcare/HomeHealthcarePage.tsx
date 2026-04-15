import React, { useEffect, useState } from 'react';
import { 
  Home, Users, MapPin, Smartphone, ArrowRight, Heart, 
  Activity, Database, Lock, Laptop, Code, Settings, RefreshCw, 
  Search, Cloud, Zap, Cpu, Network, Layers, MessageSquare, 
  Monitor, Eye, ClipboardCheck, FileText, UserCheck, Briefcase, 
  FlaskConical, Microscope, CheckCircle2, AlertCircle, TrendingUp, 
  Headphones, Target, Layout, TestTube2, Shield, 
  Globe, HeartPulse, Pill, BarChart3, Bot, Video, Building2,
  Stethoscope, Clock, ShieldCheck, HardDrive, Share2, UserPlus,
  AlertTriangle, Radio, Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const HomeHealthcarePage: React.FC = () => {
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

  const softwareSolutions = [
    {
      title: "Core Home Healthcare Systems",
      icon: Database,
      desc: "Comprehensive EHR, RCM, and administrative applications designed specifically for home care operations."
    },
    {
      title: "Telemedicine Software",
      icon: Video,
      desc: "Secure video consultation platforms that bridge the gap between patients at home and healthcare providers."
    },
    {
      title: "Chronic Disease Management",
      icon: Activity,
      desc: "Specialized apps for monitoring and managing long-term conditions like diabetes, hypertension, and heart disease."
    },
    {
      title: "Clinical Decision Support (CDSS)",
      icon: Brain,
      desc: "Intelligent systems that provide clinicians with evidence-based recommendations at the point of care."
    },
    {
      title: "Workforce Management",
      icon: Users,
      desc: "Software for scheduling, dispatching, and managing mobile caregivers and nursing staff efficiently."
    },
    {
      title: "Healthcare Analytics & Reporting",
      icon: BarChart3,
      desc: "Advanced data tools for tracking patient outcomes, operational efficiency, and regulatory compliance."
    },
    {
      title: "Patient Portals",
      icon: Layout,
      desc: "User-friendly interfaces for patients and families to access records, schedules, and communicate with care teams."
    },
    {
      title: "Medication Adherence (eMAR)",
      icon: Pill,
      desc: "Electronic Medication Administration Records to track adherence and prevent medication errors in the home."
    },
    {
      title: "Rehabilitation Apps",
      icon: HeartPulse,
      desc: "Guided exercise and therapy applications to support physical and cognitive recovery at home."
    },
    {
      title: "Remote Patient Monitoring (RPM)",
      icon: Monitor,
      desc: "Systems that collect and transmit patient vitals from the home to medical professionals in real-time."
    },
    {
      title: "Fall Detection & Emergency Alerts",
      icon: AlertTriangle,
      desc: "AI-powered systems and wearable integrations for immediate emergency response and fall prevention."
    }
  ];

  const serviceCategories = [
    {
      title: "IT Consulting",
      icon: Briefcase,
      items: [
        "Healthcare software and IT infrastructure consulting",
        "Digital transformation and cloud consulting",
        "Healthcare analytics consulting",
        "QA consulting (test strategy design)",
        "UX and UI design for accessibility"
      ]
    },
    {
      title: "Healthcare IT Support",
      icon: Headphones,
      items: [
        "L1, L2, L3 employee help desk",
        "Management of EHR and patient-facing apps",
        "Medical device troubleshooting",
        "IT infrastructure management",
        "Digital workplace management"
      ]
    },
    {
      title: "Software Engineering",
      icon: Code,
      items: [
        "Custom web and mobile development",
        "Healthcare software testing",
        "Team augmentation",
        "Agile product development"
      ]
    },
    {
      title: "Modernization & Integration",
      icon: RefreshCw,
      items: [
        "Application modernization",
        "Cloud migration services",
        "EHR and HIE integration services",
        "Legacy system evolution"
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: ShieldCheck,
      items: [
        "Cybersecurity consulting",
        "HIPAA and GDPR compliance",
        "Compliance assessments",
        "IT security audits",
        "Managed security services"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-900 via-emerald-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581056399312-6030144d446a?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500 rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Home size={14} /> Home Healthcare IT
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Care Without <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Boundaries</span>
                </h1>
                <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide engineers secure and reliable software for home care providers, their patients, and partners. We bring the hospital's precision to the comfort of home.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] flex items-center">
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
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2070" 
                      alt="Home Healthcare" 
                      className="rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Smartphone className="text-emerald-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-emerald-200">Mobile</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Radio className="text-teal-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-teal-200">IoT</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Shield className="text-sky-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-sky-200">Secure</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Software Solutions for Home Care</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Specialized systems designed to optimize home-based clinical and operational workflows.</p>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareSolutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IT Services for Home Care Providers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive support from strategy to security and maintenance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
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
              <h2 className="text-3xl font-bold mb-6">Security & Compliance First</h2>
              <p className="text-slate-400 text-lg mb-8">
                Home healthcare data is highly sensitive. We ensure every solution we build or manage adheres to the strictest global standards.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-400" size={32} />
                  <span className="font-bold text-xl">HIPAA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="text-teal-400" size={32} />
                  <span className="font-bold text-xl">GDPR</span>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="text-sky-400" size={32} />
                  <span className="font-bold text-xl">HITECH</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Data Integrity</h4>
                <p className="text-xs text-slate-400">Ensuring patient records remain accurate and untampered.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Encryption</h4>
                <p className="text-xs text-slate-400">End-to-end encryption for all data at rest and in transit.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Audit Trails</h4>
                <p className="text-xs text-slate-400">Comprehensive logging for every access and modification.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Access Control</h4>
                <p className="text-xs text-slate-400">Role-based access to ensure data is only seen by authorized personnel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Empower Your Home Care Team</h2>
          <p className="text-xl text-emerald-100 mb-12">
            Connect with GnJ Worldwide to transform your home healthcare operations with cutting-edge IT solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-emerald-600 font-bold py-5 px-12 rounded-2xl hover:bg-emerald-50 transition-all shadow-xl transform hover:-translate-y-1">
            Start Your Transformation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeHealthcarePage;