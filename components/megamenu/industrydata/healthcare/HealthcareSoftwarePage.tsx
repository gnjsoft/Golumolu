import React, { useEffect, useState } from 'react';
import { 
  Code2, Cloud, Zap, ArrowRight, Terminal, Server, 
  Database, Activity, Lock, Laptop, Code, Settings, RefreshCw, 
  Search, Cpu, Network, Layers, MessageSquare, Monitor, Eye, 
  FileText, UserCheck, Briefcase, ShieldCheck, BarChart3, Bot, 
  Video, Building2, Stethoscope, Clock, HardDrive, UserPlus, 
  AlertTriangle, Radio, Layout, CheckCircle2, Headphones, 
  Shield, Globe, Pill, TestTube2, BookOpen, Boxes, Truck, 
  CreditCard, Kanban, Share2, UserCog, HeartPulse, Brain,
  Smartphone, Microscope, Image as ImageIcon, Apple, Dumbbell,
  Smile, Activity as Pulse, Link as LinkIcon, Boxes as BlockchainIcon,
  Glasses, Warehouse
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const HealthcareSoftwarePage: React.FC = () => {
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

  const softwareProducts = [
    { title: "EHR Software", icon: FileText, desc: "Comprehensive Electronic Health Record systems with FHIR/HL7 interoperability." },
    { title: "Telemedicine Apps", icon: Video, desc: "Secure video consultation platforms with integrated scheduling and billing." },
    { title: "Remote Patient Monitoring", icon: Activity, desc: "RPM solutions for real-time health data tracking and clinical alerts." },
    { title: "Medical Device & SaMD", icon: Cpu, desc: "Software in/as a medical device compliant with FDA and MDR requirements." },
    { title: "Medical Imaging Software", icon: ImageIcon, desc: "PACS/RIS solutions with advanced DICOM processing and visualization." },
    { title: "Healthcare Analytics", icon: BarChart3, desc: "Data-driven insights for clinical outcomes and operational efficiency." },
    { title: "Chronic Disease Management", icon: HeartPulse, desc: "Specialized apps for managing long-term conditions like diabetes or CVD." },
    { title: "Home Health Software", icon: Building2, desc: "Workforce management and care coordination for home healthcare providers." },
    { title: "In Vitro Diagnostics", icon: Microscope, desc: "IVD software for laboratory automation and diagnostic accuracy." },
    { title: "Hospital Asset Tracking", icon: Boxes, desc: "Real-time tracking of medical equipment and hospital inventory." },
    { title: "Hospital Inventory Management", icon: Warehouse, desc: "Supply chain optimization for medical consumables and pharmaceuticals." },
    { title: "Healthcare CRM", icon: UserCog, desc: "Patient relationship management systems for improved engagement." },
    { title: "Mental Health Apps", icon: Smile, desc: "Digital therapeutics and mindfulness platforms for mental well-being." },
    { title: "Fitness & Wellness Apps", icon: Dumbbell, desc: "Consumer health apps for activity tracking and wellness coaching." },
    { title: "Diet & Nutrition Apps", icon: Apple, desc: "Personalized nutrition planning and calorie tracking solutions." }
  ];

  const advancedTech = [
    {
      title: "IoT for Healthcare",
      icon: Radio,
      desc: "Connected medical devices and wearable integration for continuous monitoring."
    },
    {
      title: "Blockchain for Records",
      icon: BlockchainIcon,
      desc: "Secure, decentralized storage for immutable and interoperable medical records."
    },
    {
      title: "AI for Medical Devices",
      icon: Bot,
      desc: "Intelligent algorithms for real-time diagnostic assistance and device control."
    },
    {
      title: "AI for Records Management",
      icon: Brain,
      desc: "NLP and machine learning to automate data extraction and clinical documentation."
    },
    {
      title: "VR for Healthcare",
      icon: Glasses,
      desc: "Virtual reality solutions for surgical training, pain management, and rehabilitation."
    },
    {
      title: "AI for Personalization",
      icon: Zap,
      desc: "Predictive models for tailored treatment plans and precision medicine."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
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
                    <Code2 size={14} /> Healthcare Software Engineering
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Engineering for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">HealthTech Vendors</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                    We partner with healthcare software vendors (ISVs) to accelerate product development, ensure compliance, and achieve market success.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center">
                        Accelerate Your Roadmap <ArrowRight className="ml-2" size={20} />
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
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
                      alt="Software Engineering" 
                      className="rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Terminal className="text-blue-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-blue-200">DevOps</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Cloud className="text-indigo-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-indigo-200">Cloud</span>
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

      {/* Products Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Healthcare Software Products We Deliver</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At GnJ Worldwide, we understand that software products for healthcare are highly versatile and grow more complex by the hour. We deliver common and specialized medical software of any complexity.
            </p>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProducts.map((product, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <product.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{product.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Tech Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Advanced Technologies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Leveraging cutting-edge tech to build the next generation of medical software products.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedTech.map((tech, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <tech.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{tech.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Full-Cycle Engineering</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                From MVP development to legacy modernization, we provide the technical expertise and industry knowledge to scale your healthcare software product.
              </p>
              <div className="space-y-6">
                {[
                  { title: "New Product Development", desc: "Specializing in FHIR, HL7, DICOM standards, and HIPAA-compliant architecture." },
                  { title: "Legacy Modernization", desc: "Refactor legacy applications to modern microservices for improved scalability." },
                  { title: "Quality Assurance", desc: "Rigorous testing for medical software to ensure safety and regulatory compliance." }
                ].map((service, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
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
                <ShieldCheck className="text-blue-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">HIPAA / GDPR</h4>
                <p className="text-xs text-slate-400">Ensuring data privacy and security across all products.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Settings className="text-indigo-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">FDA / MDR</h4>
                <p className="text-xs text-slate-400">Adhering to strict regulatory standards for medical software.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Network className="text-sky-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Interoperability</h4>
                <p className="text-xs text-slate-400">Seamless integration with EHRs via FHIR and HL7.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Zap className="text-teal-400 mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Cloud Native</h4>
                <p className="text-xs text-slate-400">Scalable architectures optimized for AWS, Azure, and GCP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Product?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Partner with GnJ Worldwide for secure, compliant, and high-performance healthcare software engineering.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSoftwarePage;