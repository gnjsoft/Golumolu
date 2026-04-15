import React, { useEffect, useState } from 'react';
import { 
  Smile, MessageCircle, Calendar, ShieldCheck, ArrowRight, Sun, Brain,
  Activity, Database, Lock, Laptop, Code, Settings, RefreshCw, 
  Search, Cloud, Zap, Cpu, Network, Layers, MessageSquare, 
  Monitor, Eye, ClipboardCheck, FileText, UserCheck, Briefcase, 
  FlaskConical, Microscope, CheckCircle2, AlertCircle, TrendingUp, 
  Headphones, Target, Smartphone, Layout, TestTube2, Shield, 
  Globe, HeartPulse, Users, Pill, BarChart3, Bot, Video, Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const MentalHealthPage: React.FC = () => {
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

  const softwareTypes = [
    {
      title: "Mental Health EHR",
      icon: FileText,
      desc: "Systems designed to document, store, and manage patient information. Features include secure record storage, detailed clinical note templates, mental health treatment planning tools, and medication management."
    },
    {
      title: "Telepsychiatry",
      icon: Video,
      desc: "Enables remote care with online scheduling, virtual consultations, and session recording. Includes prescription management, in-call assessments, and pre/post-visit questionnaires."
    },
    {
      title: "Prescription Digital Therapeutics (PDT)",
      icon: Smartphone,
      desc: "Prescribable apps with symptom tracking, personalized treatment pathways, and real-time feedback. VR-enabled PDTs offer higher engagement in cognitive training."
    },
    {
      title: "Mindfulness & Meditation Apps",
      icon: Sun,
      desc: "Guided meditation and mindfulness exercises to maintain well-being, reduce stress, and improve focus. Includes sleep and mood tracking capabilities."
    },
    {
      title: "Clinical Decision Support Systems",
      icon: Brain,
      desc: "Aggregates clinical info and uses clinical practice guidelines or intelligent AI engines to recommend diagnostic and treatment options for mental health conditions."
    },
    {
      title: "Treatment Planning & Care Coordination",
      icon: Layers,
      desc: "Pre-built templates, goal-setting features, and collaboration tools to streamline care planning and facilitate coordination between providers and support teams."
    },
    {
      title: "ePrescribing Software",
      icon: Pill,
      desc: "Enables sending electronic medication orders directly to pharmacies, checking drug interactions, and providing access to medication history."
    },
    {
      title: "AI Assistants",
      icon: Bot,
      desc: "Chatbots and virtual assistants for symptom checking, identifying if medical help is required, or serving as PDT tools for anxiety coping."
    },
    {
      title: "Analytics Solutions",
      icon: BarChart3,
      desc: "Enables organizations to analyze patient outcomes, treatment efficacy, and operational performance, monitoring therapy success rates and resource utilization."
    },
    {
      title: "Administrative Software",
      icon: Settings,
      desc: "Streamlines operations like scheduling, billing, and compliance for mental health clinics, hospitals, and non-profits."
    }
  ];

  const services = [
    {
      title: "For Mental Health Organizations",
      icon: Building2,
      items: [
        "Custom healthcare software development (incl. mobile and web apps)",
        "Healthcare analytics consulting",
        "Digital transformation and cloud consulting",
        "Software integration services (e.g., integration with EHR via FHIR APIs, USCDI datasets, or CCDA documents)",
        "Outsourced employee help desk",
        "IT infrastructure management and evolution",
        "Managed security and compliance management (e.g., to stay in line with HIPAA)"
      ]
    },
    {
      title: "For Mental Health Software Providers",
      icon: Code,
      items: [
        "Mental health app development",
        "Medical device software and SaMD development (e.g., TMS devices, CBT software)",
        "Verification and validation testing for medical device software",
        "Preparation for FDA clearance and CE marking",
        "Wearable app development (e.g., for vitals and sleep tracking)",
        "API development for integration with other apps and wearables",
        "Startup consulting (idea productization, market entry, branding, software design)",
        "SaaS consulting",
        "DevOps consulting and managed DevOps services"
      ]
    },
    {
      title: "For All Clients",
      icon: ShieldCheck,
      items: [
        "Healthcare IT consulting",
        "UX and UI design",
        "Healthcare software testing",
        "Application maintenance and support",
        "Application evolution",
        "Cybersecurity consulting",
        "HIPAA and GDPR compliance consulting",
        "Compliance assessment",
        "Penetration testing",
        "Team augmentation"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-sky-900 via-indigo-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Brain size={14} /> Mental Health IT Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Technology for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Wellness & Mind</span>
                </h1>
                <p className="text-xl text-sky-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide offers end-to-end consulting, software development, and support services to mental health organizations, medical institutions, and specialized software providers.
                </p>
                <p className="text-sm text-sky-200/80 mb-8 leading-relaxed max-w-xl italic">
                    Proficient in HIPAA, Cures Act, GDPR, FDA, and MDR requirements, we design robust solutions tailored to patients, mental health professionals, and care coordinators.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] flex items-center">
                        Build Your Platform <ArrowRight className="ml-2" size={20} />
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-sky-500/10 rounded-2xl border border-sky-500/20 text-center">
                                <ShieldCheck className="text-sky-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">HIPAA</div>
                                <div className="text-xs text-sky-300/60 uppercase">Compliant</div>
                            </div>
                            <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-center">
                                <Activity className="text-indigo-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">FDA</div>
                                <div className="text-xs text-indigo-300/60 uppercase">Ready</div>
                            </div>
                            <div className="p-6 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-center">
                                <Lock className="text-cyan-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">GDPR</div>
                                <div className="text-xs text-cyan-300/60 uppercase">Aligned</div>
                            </div>
                            <div className="p-6 bg-slate-500/10 rounded-2xl border border-slate-500/20 text-center">
                                <CheckCircle2 className="text-slate-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">MDR</div>
                                <div className="text-xs text-slate-300/60 uppercase">Proficient</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Software Types Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Mental Health Software We Deliver</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Compassionate, user-centric technology designed for behavioral health.</p>
            <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareTypes.map((type, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <type.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeIn} className="mt-12 p-6 bg-sky-50 rounded-2xl border border-sky-100 text-center">
            <p className="text-sky-800 font-medium">
              <Zap className="inline-block mr-2 text-sky-500" size={20} />
              Note: Most of these software types can be powered by AI to incorporate advanced capabilities such as NLP, pattern recognition, and sentiment analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Services We Offer</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">End-to-end support for organizations and software providers.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-sky-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-xs leading-relaxed">
                      <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-sky-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build Your Mental Health Solution?</h2>
          <p className="text-xl text-sky-100 mb-12">
            Let's discuss how our expertise can drive your project success and improve mental health outcomes.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-sky-600 font-bold py-5 px-12 rounded-2xl hover:bg-sky-50 transition-all shadow-xl transform hover:-translate-y-1">
            Discuss Your Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthPage;