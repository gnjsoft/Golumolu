import React, { useEffect, useState } from 'react';
import { 
  Wifi, Cpu, Globe, Activity, Smartphone, ArrowRight, Radio, 
  Zap, ShieldCheck, Settings, RefreshCw, Laptop, Boxes, 
  Target, Share2, BookOpen, Kanban, ClipboardList, 
  ClipboardCheck, Warehouse, Layout, Pill, Heart, 
  Stethoscope, Building2, Truck, Microscope, Image as ImageIcon, 
  TrendingUp, Users, ShieldAlert, PenTool, Wrench, 
  Package, Eye, Video, Bell, Thermometer, Battery, 
  Cloud, Network, Database, Bot, Gauge, HardDrive, HeartPulse
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const InternetOfThingsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const useCases = [
    {
      title: "Preventive Equipment Maintenance",
      desc: "Remote monitoring of performance metrics and early detection of malfunctioning to prevent breakage.",
      industry: "Manufacturing",
      icon: Wrench
    },
    {
      title: "Remote Operation of Machinery",
      desc: "Automating manual actions from control apps to actuators, from switching on/off to robotic picking.",
      industry: "Manufacturing, Smart Home",
      icon: Settings
    },
    {
      title: "Environmental Monitoring",
      desc: "Measuring temperature, humidity, CO2, etc., for compliance, safety, and environmental impact.",
      industry: "Smart City, Agriculture",
      icon: Thermometer
    },
    {
      title: "Optimization of Energy Consumption",
      desc: "Automated control over energy utilization depending on outside conditions for homes and cities.",
      industry: "Smart Home, Smart City",
      icon: Zap
    },
    {
      title: "Hands-off Inventory Management",
      desc: "Remote tracking of asset geoposition and movements with instant low-stock indication.",
      industry: "Storage Facilities",
      icon: Warehouse
    },
    {
      title: "Remote Health Monitoring",
      desc: "Analyzing vital signs from wearables to inform doctors of deviations. Advanced telehealth.",
      industry: "Healthcare",
      icon: HeartPulse
    },
    {
      title: "Video Surveillance & Alerts",
      desc: "Instant detection of abnormal behavior for crime prevention, fire detection, and traffic alerts.",
      industry: "Smart Facility, Smart City",
      icon: Video
    },
    {
      title: "Product Quality Management",
      desc: "Monitoring product parameters and process compliance during the manufacturing cycle.",
      industry: "Manufacturing",
      icon: ClipboardCheck
    },
    {
      title: "Connected Transport",
      desc: "Real-time monitoring of cargo in transit to verify quality and validate transportation requirements.",
      industry: "Supply Chain",
      icon: Truck
    },
    {
      title: "Usage-based Service Pricing",
      desc: "Monitoring asset utilization and conditions to dynamically adjust service prices.",
      industry: "Insurance, Rental Services",
      icon: TrendingUp
    }
  ];

  const turnkeySolutions = [
    {
      title: "IoT Consulting",
      icon: Laptop,
      items: [
        "Business context & task investigation",
        "Data collection strategy definition",
        "Hardware & sensor consulting",
        "Data center & pipeline planning",
        "Functional scoping of all components"
      ]
    },
    {
      title: "Full-cycle IoT Development",
      icon: Cpu,
      items: [
        "Layered IoT architecture design",
        "Edge computing & decentralized networks",
        "Heterogeneous data processing setup",
        "End-user app development (Web, Mobile, AR/VR)",
        "Remote control app development"
      ]
    },
    {
      title: "IoT Application Management",
      icon: RefreshCw,
      items: [
        "Technical support & troubleshooting",
        "Cloud resource monitoring & optimization",
        "Security management & compliance",
        "DDoS & APT prevention",
        "Continuous solution evolution"
      ]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-slate-200 overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Wifi size={14} className="animate-pulse" /> Internet of Things Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter text-white">
              Building a <br/> <span className="text-emerald-400">Sustainable</span> Future
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide drives value-centered IoT solutions and builds multi-level data pipelines: from edge computing to cloud data processing and data science.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-emerald-500 text-slate-950 px-10 py-5 rounded-2xl font-bold transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center group hover:bg-emerald-400">
                Launch Your IoT Solution <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-slate-900/50 backdrop-blur-2xl border border-emerald-500/20 p-10 rounded-[3rem] shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                      <Gauge size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Edge Node Alpha</h4>
                      <p className="text-xs text-emerald-400 italic">Connected & Syncing</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-1.5 h-6 bg-emerald-500/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-800/50 rounded-2xl border border-emerald-500/10">
                    <p className="text-[10px] text-emerald-400 uppercase mb-1">Active Sensors</p>
                    <p className="text-lg font-bold text-white">14,208</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-2xl border border-emerald-500/10">
                    <p className="text-[10px] text-emerald-400 uppercase mb-1">Uptime</p>
                    <p className="text-lg font-bold text-emerald-400">99.998%</p>
                  </div>
                </div>
                <div className="h-24 bg-slate-800/30 rounded-2xl border border-emerald-500/5 flex items-end p-2 gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm" style={{ height: `${Math.random() * 100}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Driving IoT Innovation */}
      <section className="py-24 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Driving IoT Innovation</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">We apply IoT technology for high-impact purposes across diverse industries.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-800/30 p-8 rounded-[2rem] border border-slate-700 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all shadow-sm">
                  <useCase.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{useCase.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500/70">
                  <Building2 size={12} /> Used in: {useCase.industry}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey IoT Solution */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">From Planning to Launch</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">We hand you a turnkey IoT solution designed for scalability and performance.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {turnkeySolutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="bg-slate-900/80 backdrop-blur-md p-10 rounded-[3rem] border border-slate-800 h-full hover:border-emerald-500/30 transition-all">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8">
                    <solution.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-8">{solution.title}</h3>
                  <ul className="space-y-4">
                    {solution.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 group/item">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-sm leading-relaxed group-hover/item:text-emerald-300 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-[4rem] border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Network size={200} className="text-emerald-500" />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Layered IoT Architecture</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Data Generation Layer</h4>
                      <p className="text-sm text-slate-400">Configuring IoT devices and connecting them to the network securely.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Edge Computing</h4>
                      <p className="text-sm text-slate-400">Decentralized processing for fast local decisions and reduced latency.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Cloud Data Center</h4>
                      <p className="text-sm text-slate-400">Machine learning & data science to identify patterns in heterogeneous data.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-950/50 rounded-3xl border border-emerald-500/10 text-center">
                  <Bot size={32} className="mx-auto mb-4 text-emerald-400" />
                  <h5 className="font-bold text-white mb-2">AI Integration</h5>
                  <p className="text-xs text-slate-500">Predictive modeling for asset health.</p>
                </div>
                <div className="p-6 bg-slate-950/50 rounded-3xl border border-emerald-500/10 text-center">
                  <Lock size={32} className="mx-auto mb-4 text-emerald-400" />
                  <h5 className="font-bold text-white mb-2">Security First</h5>
                  <p className="text-xs text-slate-500">DDoS protection & data encryption.</p>
                </div>
                <div className="p-6 bg-slate-950/50 rounded-3xl border border-emerald-500/10 text-center">
                  <Cloud size={32} className="mx-auto mb-4 text-emerald-400" />
                  <h5 className="font-bold text-white mb-2">Cloud Native</h5>
                  <p className="text-xs text-slate-500">Optimized resource consumption.</p>
                </div>
                <div className="p-6 bg-slate-950/50 rounded-3xl border border-emerald-500/10 text-center">
                  <Smartphone size={32} className="mx-auto mb-4 text-emerald-400" />
                  <h5 className="font-bold text-white mb-2">User Apps</h5>
                  <p className="text-xs text-slate-500">Real-time visualized insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-600 text-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Connect Your Enterprise?</h2>
          <p className="text-xl text-emerald-950 mb-12 font-medium">
            Partner with GnJ Worldwide to build secure, scalable, and value-driven IoT ecosystems that transform your operations.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-slate-950 text-emerald-400 font-bold py-5 px-12 rounded-2xl hover:bg-slate-900 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get a Free IoT Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InternetOfThingsPage;