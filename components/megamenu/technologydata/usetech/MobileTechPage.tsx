import React, { useEffect } from 'react';
import { 
  Smartphone, Tablet, Watch, ArrowRight, Code2, 
  Globe, Layers, Zap, ShieldCheck, RefreshCw, 
  SearchCode, CheckCircle2, BarChart3, Settings, 
  LifeBuoy, Terminal, Infinity, Gauge, Search, 
  MessageSquare, Microscope, Building2, Truck, 
  ShoppingCart, Landmark, Factory, Briefcase, 
  Users2, UserCheck, History, TestTube2, Kanban, 
  ClipboardList, ClipboardCheck, Warehouse, Radio, 
  Pill, Heart, Stethoscope, Image as ImageIcon, 
  TrendingUp, ShieldAlert, PenTool, Package, Eye, 
  Bot, Ticket, CreditCard, Share, Lock, Clock, 
  FileText, Handshake, Calculator, AlertTriangle, 
  Lightbulb, Video, Binary, Network, Box, Monitor, 
  Tv, Glasses, Cpu, Workflow, Bug, ListChecks, FileCode,
  Layout, MapPin, CreditCard as PaymentIcon, 
  Mic, MessageSquare as ChatIcon, Sparkles, 
  Calendar, User, Scan, Bell, Link as LinkIcon, 
  Activity, IndianRupee, Target, Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const MobileTechPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const appTypes = [
    {
      title: "Enterprise Apps",
      icon: Building2,
      items: ["Inspection & Quality Control", "Compliance & Audit", "Remote Asset Monitoring", "Asset Management", "Mobile BI & Reporting", "Field Service & Sales"]
    },
    {
      title: "Supply Chain & Logistics",
      icon: Truck,
      items: ["Planning & Optimization", "Inventory Tracking (RFID/CV)", "Warehouse Management", "Fleet Management", "Last-mile Delivery"]
    },
    {
      title: "mCommerce Apps",
      icon: ShoppingCart,
      items: ["Online Storefronts", "Subscription Box Apps", "On-demand Delivery", "Price Comparison", "Live Stream Shopping"]
    },
    {
      title: "Medical & Healthcare",
      icon: Stethoscope,
      items: ["Telemedicine", "Patient Portals", "EHR/EMR Mobile Access", "Remote Patient Monitoring", "Digital Therapeutics (DTx)"]
    },
    {
      title: "Banking & Fintech",
      icon: Landmark,
      items: ["Mobile Banking", "Digital Wallets", "P2P Money Transfer", "Lending & BNPL", "Investment & Trading"]
    },
    {
      title: "Manufacturing",
      icon: Factory,
      items: ["MES & PLM Systems", "Equipment Monitoring", "Industrial IoT (IIoT)", "Production Scheduling", "HMI Applications"]
    },
    {
      title: "Travel & Hospitality",
      icon: MapPin,
      items: ["Ride-hailing & Taxi", "Flight Alerts & Tracking", "Hotel & Resort Booking", "Navigation & Maps", "Itinerary Planning"]
    },
    {
      title: "Real Estate",
      icon: Layout,
      items: ["Property Browsing", "360° Virtual Tours", "AR Home Staging", "VR Property Showcasing", "Rental Management"]
    }
  ];

  const approaches = [
    {
      title: "Native Mobile Apps",
      techs: "Swift, Objective-C (iOS); Kotlin, Java (Android)",
      desc: "Built specifically for one OS using official tools for maximum performance and native feel."
    },
    {
      title: "Near-native Apps",
      techs: "React Native, Flutter, Xamarin",
      desc: "Single codebase for iOS and Android, treated by the OS as native for high performance."
    },
    {
      title: "Hybrid Mobile Apps",
      techs: "Cordova, Ionic",
      desc: "Developed with web techs (HTML/CSS/JS) and displayed via WebView for rapid cross-platform delivery."
    },
    {
      title: "Progressive Web Apps",
      techs: "PWA Standards",
      desc: "Enhanced responsive web apps with offline access, push notifications, and home screen installability."
    }
  ];

  const features = [
    { title: "Geolocation", icon: MapPin },
    { title: "Payments", icon: PaymentIcon },
    { title: "Messaging", icon: ChatIcon },
    { title: "Sync", icon: RefreshCw },
    { title: "Voice Recognition", icon: Mic },
    { title: "Chatbots", icon: Bot },
    { title: "Immersive AR/VR", icon: Sparkles },
    { title: "Scheduling", icon: Calendar },
    { title: "Personalization", icon: User },
    { title: "Image Recognition", icon: Eye },
    { title: "QR Scanning", icon: Scan },
    { title: "Push Notifications", icon: Bell },
    { title: "Wearable Integration", icon: Watch },
    { title: "IoT Interaction", icon: Cpu },
    { title: "Mobile BI", icon: BarChart3 }
  ];

  const projectFlow = [
    { title: "Project Scoping", icon: Search, desc: "Analyzing requirements accurately to avoid scope creep." },
    { title: "Cost Estimation", icon: Calculator, desc: "Factoring in functionality, tech stack, and design complexity." },
    { title: "Collaboration", icon: Handshake, desc: "Regular updates and transparent progress tracking." },
    { title: "Risk Management", icon: ShieldAlert, desc: "Early identification and effective mitigation strategies." },
    { title: "Documentation", icon: FileCode, desc: "Comprehensive docs at each SDLC stage with real examples." },
    { title: "Knowledge Management", icon: Lightbulb, desc: "Incorporating shared wisdom into all development processes." },
    { title: "Reporting", icon: BarChart3, desc: "Routine detailed reports on project health and milestones." },
    { title: "Post-launch Warranty", icon: ShieldCheck, desc: "Ensuring stability and performance after the initial release." },
    { title: "Change Management", icon: Settings, desc: "Structured process for assessing and prioritizing requests." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Smartphone size={14} className="animate-pulse" /> Mobile App Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Native & <br/> <span className="text-blue-500">Cross-Platform</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Creating progressive web and mobile applications with stable performance, human-centered design, and unique value propositions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-blue-700">
                Discuss Your App <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] shadow-2xl overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">iOS & Android</h4>
                      <p className="text-xs text-slate-400 italic">Multi-platform Excellence</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-blue-500 font-mono text-xl font-bold">Native Performance</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase mb-1">Engagement</p>
                    <p className="text-lg font-bold text-white">+90% Increase</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase mb-1">Load Time</p>
                    <p className="text-lg font-bold text-blue-400">2.5x Faster</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* App Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">App Types: Industry & Use Cases</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Tailoring mobile functionality to uniquely serve diverse business domains.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((type, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <type.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.items.map((item, i) => (
                    <li key={i} className="text-slate-500 text-sm flex items-start gap-2">
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

      {/* Approaches Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Development Approaches</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choosing the right architecture to complement or substitute your web solutions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {approaches.map((approach, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-200 group hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{approach.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{approach.desc}</p>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <p className="text-[10px] text-blue-600 uppercase font-bold mb-1">Technologies</p>
                  <p className="text-sm font-mono text-slate-800">{approach.techs}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Modern Mobile Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Building helpful capabilities that make your app worth taking up user screen space.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <feature.icon size={24} />
                </div>
                <span className="font-bold text-slate-800 text-sm">{feature.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Flow Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Smoothly Organized Project Flow</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Ensuring comfortable cooperation and transparent progress at every stage.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectFlow.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-200 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Cost of Mobile App Development</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                The development cost of a mobile app of average complexity typically varies between <span className="text-blue-600 font-bold">₹66,00,000 and ₹1,66,00,000</span>.
              </p>
              <div className="space-y-4">
                <p className="font-bold text-slate-900">Key cost factors include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "App functionality complexity",
                    "Technologies & advanced capabilities",
                    "Visual design & interactivity level",
                    "Third-party integrations",
                    "Target platforms (iOS/Android)",
                    "Web app availability"
                  ].map((factor, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 size={16} className="text-blue-600" /> {factor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <IndianRupee size={48} className="text-blue-100" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get a Tailored Estimate</h3>
                <p className="text-slate-600 mb-8">Discuss your requirements with our experts to calculate the cost accurately for your specific project.</p>
                <Link to="/contact" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center group">
                  Request a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Put Your Business in Customers' Pockets?</h2>
          <p className="text-xl text-white/90 mb-12">
            Leverage our expertise in native and cross-platform development to build a mobile app that stands out in a fierce market.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-slate-100 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Discuss Mobile Strategy <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MobileTechPage;