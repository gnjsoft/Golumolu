import React, { useEffect, useState } from 'react';
import { 
  Activity, Database, Shield, Lock, Laptop, ArrowRight, Server, Cloud, 
  Stethoscope, HeartPulse, Brain, Microscope, Users, Settings, 
  RefreshCw, BarChart3, Globe, Smartphone, Zap, CheckCircle2, 
  AlertCircle, ClipboardCheck, TrendingUp, Search, MessageSquare, 
  Monitor, Layers, Cpu, Eye, Network, FileText, UserCheck, 
  ShieldCheck, Briefcase, Building2, FlaskConical, Dog, Landmark, 
  Dumbbell, Heart, Code, Headphones, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const HealthcareItPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);

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

  const services = [
    {
      title: "Healthcare Software Development",
      icon: Code,
      desc: "From design to implementation, we deliver secure, high-performance medical software with full regulatory compliance.",
      items: ["Mobile app development", "Medical web design", "SaaS development", "Medical device software", "SaMD product development", "Patient engagement software"]
    },
    {
      title: "Healthcare IT Consulting",
      icon: Search,
      desc: "Consultants with 5–20 years of experience ensuring the success of your digital health initiatives.",
      items: ["IT strategy consulting", "Technology consulting", "IT environment assessment", "Feasibility studies", "Digital health startup consulting", "Medical solution consulting"]
    },
    {
      title: "IT Modernization",
      icon: RefreshCw,
      desc: "Upgrade legacy software to improve reliability, optimize performance, and ensure 100% security.",
      items: ["EHR integration", "Legacy app modernization", "Data consolidation", "Security & compliance upgrades"]
    },
    {
      title: "Cloud Migration",
      icon: Cloud,
      desc: "Reduce infrastructure costs and enable on-demand scalability with HIPAA-compliant cloud solutions.",
      items: ["Cloud selection", "Risk-free migration strategy", "Infrastructure management", "Application & data migration"]
    },
    {
      title: "Healthcare Data Analytics",
      icon: BarChart3,
      desc: "Get insights from healthcare data and support clinical decision-making with AI-based recommendations.",
      items: ["Data warehousing", "Data management", "Business intelligence", "Data visualization", "Big data analytics", "Medical image analysis"]
    },
    {
      title: "Digital Transformation",
      icon: Zap,
      desc: "Successful digital strategies implemented amidst diverse expectations and resistance to change.",
      items: ["Transformation consulting", "End-to-end transformation", "Targeted changes implementation"]
    },
    {
      title: "Healthcare IT Support",
      icon: Headphones,
      desc: "Holistic IT infrastructure maintenance and modernization with 17 years of experience.",
      items: ["L1, L2, L3 support", "Proactive & reactive support", "Software troubleshooting", "Software evolution", "Security & performance management"]
    },
    {
      title: "Managed IT Services",
      icon: Settings,
      desc: "Proactive monitoring and management of your healthcare IT infrastructure or specific components.",
      items: ["Infrastructure administration", "Managed help desk", "Managed application services", "Managed security services"]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: ShieldCheck,
      desc: "Adherence to HIPAA, GDPR, FDA, and more. ISO 13485, 9001, and 27001 certified approach.",
      items: ["Security audit", "Compliance assessment", "HIPAA-compliant development", "SaMD V&V testing", "Penetration testing"]
    }
  ];

  const clients = [
    "Hospitals and health systems", "Medical groups", "Management services organizations", 
    "Healthcare software companies", "Healthtech startups", "Mental health providers", 
    "Nursing homes & assisted living", "Home care providers", "Veterinary clinics & hospitals", 
    "Medical laboratories", "Medical device manufacturers", "Pharmaceutical companies", 
    "Medical biotech companies", "Contract research organizations", "Health insurance companies", 
    "Healthcare NGOs and GOs", "Fitness and wellness companies"
  ];

  const innovativeTechs = [
    { title: "Artificial Intelligence", icon: Brain, desc: "EHR with AI, medical chatbots, AI for mental health, and automated call centers." },
    { title: "Computer Vision", icon: Eye, desc: "Advanced medical image analysis and diagnostic assistance." },
    { title: "Internet of Things", icon: Network, desc: "Cloud-connected medical devices and biosensor applications." },
    { title: "Blockchain", icon: Layers, desc: "Secure, decentralized health data exchange and integrity." },
    { title: "VR and AR", icon: Monitor, desc: "Surgery planning and medical staff training solutions." },
    { title: "Cloud", icon: Cloud, desc: "HIPAA-compliant platforms for scalable healthcare infrastructure." }
  ];

  const methodology = [
    { title: "Team Assembly & Scaling", icon: Users, desc: "Selecting best-fitting skills with medical IT proficiency and swift scaling capabilities." },
    { title: "Realistic Estimates", icon: ClipboardCheck, desc: "Honest time and cost estimates tailored to unique project scopes and needs." },
    { title: "Scope Creep Control", icon: Target, desc: "Rigorous management of change requests to prevent deviations from project goals." },
    { title: "Centralized Knowledge", icon: FileText, desc: "Meticulous documentation of decisions and processes for effective collaboration." },
    { title: "Risk Mitigation", icon: AlertCircle, desc: "Continuous monitoring of operational, tech, and business risks throughout SDLC." },
    { title: "Success Assessment", icon: TrendingUp, desc: "Consistent monitoring of tailored OKRs and KPIs with stakeholder feedback." }
  ];

  const solutionCategories = [
    {
      name: "Care Providers & Startups",
      icon: Stethoscope,
      subcategories: [
        { name: "Hospital Management", items: ["Practice management", "EHR and HIE", "ADT systems", "HIS", "Medical billing", "Healthcare CRM", "RCM"] },
        { name: "Treatment Management", items: ["Diagnostic software", "Clinical decision support", "Care coordination", "Medication management", "NIS & PIS"] },
        { name: "Patient Engagement", items: ["Patient apps & portals", "Telemedicine apps", "Virtual hospital", "Remote patient monitoring", "DTx"] },
        { name: "Lab & Imaging", items: ["IVD software", "LIS", "Lab analytics", "PACS & RIS", "Image analysis software"] }
      ]
    },
    {
      name: "Pharma & Biotech",
      icon: FlaskConical,
      subcategories: [
        { name: "Clinical Research", items: ["CTMS", "CDMS", "Remote trial monitoring", "eCOA software", "LIMS & ELN", "eTMF software"] },
        { name: "Research & Analytics", items: ["CRO data analytics", "Bioinformatics software", "AI/ML drug discovery"] }
      ]
    },
    {
      name: "Medical Devices & SaMD",
      icon: Cpu,
      subcategories: [
        { name: "Devices & SaMD", items: ["Cloud storage & analysis", "AI-enabled diagnostics", "Biosensor cloud apps", "ML sensor analysis"] },
        { name: "User & Staff Software", items: ["Patient wearable apps", "Staff configuration apps", "Professional portals"] }
      ]
    },
    {
      name: "Veterinary",
      icon: Dog,
      subcategories: [
        { name: "Clinic Management", items: ["Veterinary EHR", "Scheduling & billing", "Practice management", "Inventory management"] },
        { name: "Specific Solutions", items: ["Diagnostic software", "Veterinary telemedicine", "Animal health monitoring"] }
      ]
    },
    {
      name: "GOs, NGOs & Insurance",
      icon: Landmark,
      subcategories: [
        { name: "Insurance Management", items: ["HIE software", "Health plan management", "Policy administration", "Claim management", "Underwriting"] },
        { name: "GO & NGO Software", items: ["Population health platforms", "Public health systems", "Disease surveillance", "Disaster response"] }
      ]
    },
    {
      name: "Fitness & Wellness",
      icon: Dumbbell,
      subcategories: [
        { name: "Wellness Apps", items: ["Meditation & diet apps", "Fitness & sleep tracking", "Mental health & cycle monitoring"] },
        { name: "Facility Management", items: ["Gym management", "Scheduling & trainer management", "Fitness CRM", "Billing systems"] }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Activity size={14} /> Healthcare IT Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Secure, Value-Driven <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Medical IT Services</span>
                </h1>
                <p className="text-xl text-cyan-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide provides healthcare IT consulting, development, support, and evolution services to drive your digital health success.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center">
                        Start Your Project <ArrowRight className="ml-2" size={20} />
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-center">
                                <HeartPulse className="text-cyan-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">HIPAA</div>
                                <div className="text-xs text-cyan-300/60 uppercase">Compliant</div>
                            </div>
                            <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-center">
                                <Shield className="text-blue-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">ISO</div>
                                <div className="text-xs text-blue-300/60 uppercase">Certified</div>
                            </div>
                            <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-center">
                                <Activity className="text-indigo-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">FDA</div>
                                <div className="text-xs text-indigo-300/60 uppercase">Aligned</div>
                            </div>
                            <div className="p-6 bg-slate-500/10 rounded-2xl border border-slate-500/20 text-center">
                                <Lock className="text-slate-400 mx-auto mb-2" size={32} />
                                <div className="text-2xl font-bold">GDPR</div>
                                <div className="text-xs text-slate-300/60 uppercase">Ready</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Healthcare IT Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive IT solutions tailored for the healthcare ecosystem.</p>
            <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-500 text-xs">
                      <CheckCircle2 size={14} className="text-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Clients We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Supporting organizations across the entire healthcare spectrum.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3 hover:bg-cyan-50 hover:border-cyan-200 transition-colors"
              >
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-700">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Techs */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Bringing Innovative Techs to Healthcare</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Leveraging advanced technologies to automate routines and reduce costs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeTechs.map((tech, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <div className="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                  <tech.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Achieving Your Project Goals</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our mission is to drive project success despite time and budget constraints.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {methodology.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section (Tabbed) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IT Solutions We Deliver</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Specialized software for every sector of the healthcare industry.</p>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {solutionCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSolutionTab(idx)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  activeSolutionTab === idx 
                  ? 'bg-cyan-600 text-white shadow-lg' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                <cat.icon size={18} />
                <span className="whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolutionTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-200"
            >
              <div className="grid md:grid-cols-2 gap-12">
                {solutionCategories[activeSolutionTab].subcategories.map((sub, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-cyan-600 rounded-full"></div>
                      {sub.name}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {sub.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 text-sm">
                          <CheckCircle2 size={16} className="text-cyan-600 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-cyan-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build the Future of Healthcare?</h2>
          <p className="text-xl text-cyan-100 mb-12">
            Let's discuss how our healthcare IT expertise can drive your project success and improve patient outcomes.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-cyan-600 font-bold py-5 px-12 rounded-2xl hover:bg-cyan-50 transition-all shadow-xl transform hover:-translate-y-1">
            Discuss Your Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthcareItPage;