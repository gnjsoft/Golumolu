import React, { useEffect, useState } from 'react';
import { 
  Cpu, Wifi, Activity, Settings, ArrowRight, Bluetooth, Database, 
  ShieldCheck, Lock, Cloud, Zap, Brain, Eye, Monitor, Network, 
  Layers, MessageSquare, ClipboardCheck, FileText, UserCheck, 
  Briefcase, FlaskConical, Microscope, CheckCircle2, AlertCircle, 
  TrendingUp, Headphones, Target, Smartphone, Layout, TestTube2, 
  Shield, Globe, Code, RefreshCw, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const MedicalDevicesPage: React.FC = () => {
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
      title: "Software in a Medical Device (SiMD)",
      icon: Cpu,
      desc: "Integral software performing functions like processing data or controlling hardware. Requires FDA clearance.",
      useCases: [
        "Device control and image viewing for ultrasound scanners",
        "Image processing and visualization for MRI"
      ]
    },
    {
      title: "Software Accessories",
      icon: Settings,
      desc: "Software complementing or enhancing devices but not performing a medical function on its own. Requires FDA clearance.",
      useCases: [
        "Remote monitoring systems",
        "Remote control for smart therapeutic devices (e.g., insulin pens)",
        "Medication adherence monitoring via smart pill bottles"
      ]
    },
    {
      title: "Software as a Medical Device (SaMD)",
      icon: Activity,
      desc: "Software that can diagnose, monitor, or support clinical decisions without a physical device. Requires FDA clearance.",
      useCases: [
        "AI-powered treatment and patient care planning",
        "Medical image analysis (e.g., stroke type identification)",
        "Direct disease management (e.g., sleep apnea identification)"
      ]
    },
    {
      title: "Other Software Around Devices",
      icon: Network,
      desc: "Software supporting operational tasks not related to diagnosing and treatment. Doesn't require FDA clearance.",
      useCases: [
        "Hospital asset monitoring",
        "Scheduling patients for device-based procedures"
      ]
    }
  ];

  const services = [
    {
      title: "Consulting",
      icon: Search,
      items: [
        "Medical device software technology consulting",
        "Market entry consulting for SaMD startups",
        "Compliance consulting (HIPAA, Cures Act, MDR, FDA, CE)",
        "UI/UX design for device software and SaMD",
        "HIPAA-compliant cloud consulting"
      ]
    },
    {
      title: "Software Product Development",
      icon: Code,
      items: [
        "Medical device software and SaMD development",
        "Medical device software testing",
        "Verification and validation (V&V) testing",
        "Team augmentation"
      ]
    },
    {
      title: "Support & Modernization",
      icon: RefreshCw,
      items: [
        "Software maintenance and support",
        "Software evolution and re-submission assistance",
        "FHIR API development for integration",
        "Cloud migration for SaMD companies"
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: ShieldCheck,
      items: [
        "Medical device cybersecurity assessment",
        "Compliance assessment (HIPAA, GDPR, SOC 2)",
        "Ongoing compliance management",
        "Penetration testing for devices and SaMD"
      ]
    }
  ];

  const technologies = [
    { title: "IoT for Medical Devices", icon: Wifi, desc: "Enabling secure, real-time connectivity and data exchange for IoMT ecosystems." },
    { title: "AI for Devices & SaMD", icon: Brain, desc: "Advanced algorithms for diagnostic assistance and automated data processing." },
    { title: "AI Treatment Personalization", icon: Zap, desc: "Tailoring medical interventions based on device-captured patient data." },
    { title: "VR in Healthcare", icon: Eye, desc: "Immersive solutions for surgery planning, training, and patient therapy." }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans overflow-hidden text-slate-200">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-10 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Cpu size={14} /> Medical Devices & SaMD
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                    IT Services for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Medical Device Companies</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                    Engineering robust solutions ready for FDA clearance and CE marking. We bridge the gap between complex hardware and secure digital ecosystems.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center">
                        Request Development <ArrowRight className="ml-2" size={20} />
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-600 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl border border-slate-700 p-8 rounded-[3rem] shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-center">
                                <ShieldCheck className="text-blue-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold text-white">FDA</div>
                                <div className="text-xs text-blue-300/60 uppercase">Clearance Ready</div>
                            </div>
                            <div className="p-6 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-center">
                                <Activity className="text-cyan-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold text-white">CE</div>
                                <div className="text-xs text-cyan-300/60 uppercase">Marking Support</div>
                            </div>
                            <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-center">
                                <Lock className="text-indigo-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold text-white">HIPAA</div>
                                <div className="text-xs text-indigo-300/60 uppercase">Compliant</div>
                            </div>
                            <div className="p-6 bg-slate-500/10 rounded-2xl border border-slate-500/20 text-center">
                                <Settings className="text-slate-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold text-white">MDR</div>
                                <div className="text-xs text-slate-300/60 uppercase">Compliant</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Software Types Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Medical Device Software We Deliver</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Specialized engineering for every category of medical device software.</p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {softwareTypes.map((type, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <type.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed">{type.desc}</p>
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Sample Use Cases:</div>
                      {type.useCases.map((useCase, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                          <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                          {useCase}
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="mt-8 inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors">
                      Request development <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Services We Offer</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">End-to-end support for medical device and SaMD providers.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-xs leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technologies */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Advanced Technologies</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Integrating cutting-edge tech into medical device software.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:bg-slate-800 transition-all text-center"
              >
                <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <tech.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Engineer Your Medical Solution?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Partner with GnJ Worldwide to build robust, compliant, and innovative software for your medical devices.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-700 font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1">
            Discuss Your Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MedicalDevicesPage;