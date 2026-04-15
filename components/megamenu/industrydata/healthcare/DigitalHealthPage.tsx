import React, { useEffect, useState } from 'react';
import { 
  Rocket, Smartphone, Heart, ArrowRight, Zap, Target, 
  Code2, Cloud, Terminal, Server, Database, Activity, 
  Lock, Laptop, Code, Settings, RefreshCw, Search, Cpu, 
  Network, Layers, MessageSquare, Monitor, Eye, FileText, 
  UserCheck, Briefcase, ShieldCheck, BarChart3, Bot, Video, 
  Building2, Stethoscope, Clock, HardDrive, UserPlus, 
  AlertTriangle, Radio, Layout, CheckCircle2, Headphones, 
  Shield, Globe, Pill, TestTube2, BookOpen, Boxes, Truck, 
  CreditCard, Kanban, Share2, UserCog, HeartPulse, Brain,
  Microscope, Image as ImageIcon, Apple, Dumbbell, Smile,
  Activity as Pulse, Link as LinkIcon, Boxes as BlockchainIcon,
  Glasses, Warehouse, ClipboardList, ClipboardCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const DigitalHealthPage: React.FC = () => {
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

  const startupSolutions = [
    { title: "Fitness & Wellness Apps", icon: Dumbbell, desc: "Consumer-facing apps for activity tracking, wellness coaching, and habit building." },
    { title: "Diet & Nutrition Apps", icon: Apple, desc: "Personalized nutrition planning, calorie tracking, and dietary management solutions." },
    { title: "Mental Health Apps", icon: Smile, desc: "Digital therapeutics, mindfulness platforms, and teletherapy solutions for mental well-being." },
    { title: "Telemedicine Apps", icon: Video, desc: "Secure video consultation platforms with integrated scheduling, billing, and e-prescribing." },
    { title: "Remote Patient Monitoring", icon: Activity, desc: "RPM solutions for real-time health data tracking, clinical alerts, and chronic care management." },
    { title: "EHR Software", icon: FileText, desc: "Lightweight or specialized Electronic Health Record systems with FHIR/HL7 interoperability." },
    { title: "Medical Device & SaMD", icon: Cpu, desc: "Software in/as a medical device compliant with FDA, MDR, and CE requirements." },
    { title: "Medical Imaging Software", icon: ImageIcon, desc: "PACS/RIS solutions with advanced DICOM processing, visualization, and AI integration." },
    { title: "Healthcare Analytics", icon: BarChart3, desc: "Data-driven insights for clinical outcomes, population health, and operational efficiency." },
    { title: "Chronic Disease Management", icon: HeartPulse, desc: "Specialized platforms for managing long-term conditions like diabetes, hypertension, or CVD." },
    { title: "Home Health Software", icon: Building2, desc: "Workforce management, care coordination, and billing for home healthcare startups." },
    { title: "In Vitro Diagnostic Software", icon: Microscope, desc: "IVD software for laboratory automation, diagnostic accuracy, and result reporting." },
    { title: "Hospital Asset Tracking", icon: Boxes, desc: "Real-time tracking of medical equipment and hospital inventory using IoT and RFID." },
    { title: "Hospital Inventory Management", icon: Warehouse, desc: "Supply chain optimization for medical consumables, pharmaceuticals, and lab supplies." },
    { title: "HR Software for Healthcare", icon: UserPlus, desc: "Specialized recruitment, onboarding, and credentialing platforms for healthcare staff." }
  ];

  const advancedTech = [
    {
      title: "IoT Solutions in Healthcare",
      icon: Radio,
      desc: "Connected medical devices and wearable integration for continuous, real-time monitoring."
    },
    {
      title: "Blockchain for Medical Records",
      icon: BlockchainIcon,
      desc: "Secure, decentralized storage for immutable, patient-controlled, and interoperable medical records."
    },
    {
      title: "Medical AI Chatbots",
      icon: MessageSquare,
      desc: "Intelligent, context-aware assistants for symptom checking, triage, and patient support."
    },
    {
      title: "AI for Medical Devices",
      icon: Bot,
      desc: "Intelligent algorithms for real-time diagnostic assistance, image analysis, and device control."
    },
    {
      title: "VR for Healthcare",
      icon: Glasses,
      desc: "Virtual reality solutions for surgical training, pain management, rehabilitation, and mental health."
    },
    {
      title: "AI for Personalization",
      icon: Zap,
      desc: "Predictive models for tailored treatment plans, precision medicine, and proactive care interventions."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-violet-900 to-fuchsia-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuchsia-500 rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Rocket size={14} /> Digital Health Startup Partner
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Launch Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">HealthTech Vision</span>
                </h1>
                <p className="text-xl text-indigo-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide understands that digital healthcare innovation can take many forms. We help founders build, launch, and scale disruptive health apps with speed and compliance.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] flex items-center">
                        Build Your MVP <ArrowRight className="ml-2" size={20} />
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
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070" 
                      alt="Startup Innovation" 
                      className="rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Zap className="text-indigo-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-indigo-200">Speed</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Target className="text-fuchsia-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-fuchsia-200">Compliance</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Cloud className="text-sky-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-sky-200">Scale</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Software We Deliver Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Software We Deliver for Healthcare Startups</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              While digital healthcare innovation can take many forms, we are ready to collaborate on any solution that fits your unique vision.
            </p>
            <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startupSolutions.map((solution, idx) => (
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

      {/* Advanced Tech Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Advanced Technologies for Startups</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Leveraging cutting-edge tech to give your startup a competitive edge in the digital health market.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedTech.map((tech, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <tech.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{tech.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Services Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">From Seed to Scale</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We provide the technical agility and regulatory expertise healthcare startups need to navigate the complex journey from MVP to market leader.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Rapid MVP Development", desc: "Prototype and launch your core product in weeks to validate your business model early." },
                  { title: "Regulatory Guidance", desc: "Navigating FDA, CE, HIPAA, and GDPR requirements from day one to avoid costly pivots." },
                  { title: "Scalable Architecture", desc: "Cloud-native infrastructure that grows effortlessly with your user base, from 100 to 1M+ users." }
                ].map((service, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{service.title}</h4>
                      <p className="text-slate-400 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Zap className="text-indigo-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Speed to Market</h4>
                <p className="text-xs text-slate-400">Agile methodologies optimized for rapid iteration and deployment.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <ShieldCheck className="text-fuchsia-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Compliance First</h4>
                <p className="text-xs text-slate-400">Security and regulatory standards integrated into the dev lifecycle.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Network className="text-sky-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Interoperability</h4>
                <p className="text-xs text-slate-400">Seamless integration with existing healthcare ecosystems via FHIR.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <UserCog className="text-teal-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Founder Support</h4>
                <p className="text-xs text-slate-400">Technical partnership to help you pitch to investors and scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Launch Your Startup?</h2>
          <p className="text-xl text-indigo-100 mb-12">
            Partner with GnJ Worldwide for secure, compliant, and high-performance digital health engineering.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 font-bold py-5 px-12 rounded-2xl hover:bg-indigo-50 transition-all shadow-xl transform hover:-translate-y-1">
            Build Your MVP Today <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalHealthPage;