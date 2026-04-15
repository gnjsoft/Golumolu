import React, { useEffect } from 'react';
import { 
  Layout, Users, CreditCard, ArrowRight, Code, Zap, 
  ShoppingCart, Briefcase, BarChart3, PenTool, Globe, 
  Truck, UserCheck, Wallet, HeartPulse, MessageSquare, 
  Rocket, Plane, Activity, ShieldCheck, Settings, 
  RefreshCw, Laptop, Boxes, Target, Share2, 
  BookOpen, Kanban, ClipboardList, ClipboardCheck, 
  Warehouse, Radio, Pill, Heart, Stethoscope, 
  Building2, Microscope, Image as ImageIcon, TrendingUp, 
  ShieldAlert, Wrench, Package, Eye, Video, 
  Network, Bot, Gauge, HardDrive, Lock, Search, 
  Cpu, CheckCircle2, DollarSign, Calculator, FileCheck, 
  Landmark, Smartphone, Fingerprint, Languages, 
  Glasses, Handshake, Gift, Users2, Scale, AlertTriangle, 
  Video as VideoIcon, HeartPulse as HeartPulseIcon, 
  Clock, Monitor, MessageCircle, HelpCircle, Lightbulb, 
  Zap as ZapIcon, Cloud, Layers, Infinity, Terminal, 
  Code2, PieChart, ShieldCheck as ShieldCheckIcon, 
  CloudCog, CloudDownload, CloudUpload, CloudSync,
  Gem, Palette, Map, MousePointer2, Layers2, 
  ShieldHalf, Database, Server, Smartphone as MobileIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const SaasPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const saasTypes = [
    { title: "Ecommerce & Retail", icon: ShoppingCart, items: ["Online storefronts", "Shopping carts & checkout", "Inventory management"] },
    { title: "ERP Solutions", icon: Briefcase, items: ["Corporate finance", "Procurement & SCM", "HR management"] },
    { title: "CRM Systems", icon: Users, items: ["Sales automation", "Customer support", "Marketing automation"] },
    { title: "Productivity Tools", icon: Kanban, items: ["Document editing", "Project management", "Communication platforms"] },
    { title: "CMS & Hosting", icon: Globe, items: ["Website management", "Blogging platforms", "Domain management"] },
    { title: "Fleet Management", icon: Truck, items: ["Vehicle tracking", "Maintenance scheduling", "Route optimization"] },
    { title: "HCM & Recruitment", icon: UserCheck, items: ["ATS & Recruitment", "Performance management", "LMS platforms"] },
    { title: "Fintech & Finance", icon: Wallet, items: ["Payment processing", "Loan processing", "Crypto wallets"] },
    { title: "Healthcare & Life Sciences", icon: Stethoscope, items: ["EHR systems", "Telemedicine platforms", "Clinical trial management"] },
    { title: "Social & Communication", icon: MessageCircle, items: ["Dating & Social networks", "Social media management", "Messaging apps"] },
    { title: "On-demand Marketplaces", icon: Rocket, items: ["Ride-sharing", "Food delivery", "Gig economy platforms"] },
    { title: "Travel & Hospitality", icon: Plane, items: ["Booking platforms", "Itinerary planning", "Flight tracking"] },
    { title: "Health & Wellness", icon: Activity, items: ["Fitness apps", "Mental health apps", "Nutrition tracking"] },
    { title: "Entertainment & Media", icon: VideoIcon, items: ["Music/Podcast streaming", "Video platforms", "Gaming services"] },
    { title: "Cybersecurity & IAM", icon: Lock, items: ["Network security", "Identity management", "Threat detection"] }
  ];

  const serviceScope = [
    { title: "Idea Productization", icon: Lightbulb, desc: "Competitor analysis, SaaS concept description, and unique selling proposition definition." },
    { title: "SaaS Consulting", icon: Laptop, desc: "Detailed SRS, development roadmaps, TCO/ROI estimation, and project guidance." },
    { title: "UX Design", icon: MousePointer2, desc: "Personas, user journey maps, wireframes, and rigorous usability testing." },
    { title: "UI Design", icon: Palette, desc: "Visual identity, clickable prototypes, UI kits, and assets for developers (Figma/Sketch)." },
    { title: "Architecture Design", icon: Layers2, desc: "Scalable multi-tenancy architectures ensuring 99.98% availability and peak load handling." },
    { title: "SaaS Development", icon: Code2, desc: "Top-grade code production using mature KPIs to ensure engineer productivity." },
    { title: "Testing & QA", icon: ShieldCheckIcon, desc: "ISO 27001 standards with integrated manual and automated testing for data integrity." },
    { title: "Support & Maintenance", icon: Wrench, desc: "L1, L2, and L3 support with corrective, adaptive, and preventive maintenance." },
    { title: "SaaS Evolution", icon: RefreshCw, desc: "Introducing in-demand features like AI, AR/VR, VoIP, and advanced analytics." },
    { title: "Cloud Migration", icon: CloudSync, desc: "Migrating to new cloud providers or reshaping on-premises apps into cloud-native SaaS." },
    { title: "API Development", icon: Share2, desc: "Designing scalable and reliable APIs to enrich functionality and simplify workflows." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Boxes size={14} className="animate-pulse" /> SaaS Development Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Build <br/> <span className="text-indigo-200">World-Class</span> SaaS
            </h1>
            <p className="text-xl text-indigo-50 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide delivers complex, reliable, and secure SaaS solutions that users love. From MVP to global scale, we ensure smooth evolution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-indigo-700 px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group">
                Start Your SaaS Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] shadow-2xl overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Multi-Tenancy</h4>
                      <p className="text-xs text-indigo-200 italic">Isolated & Secure</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-xl font-bold">99.98% SLA</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-indigo-200 uppercase mb-1">Active Users</p>
                    <p className="text-lg font-bold text-white">1.2M+</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-indigo-200 uppercase mb-1">Response Time</p>
                    <p className="text-lg font-bold text-indigo-300">&lt; 120ms</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Types of SaaS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">SaaS Applications We Develop</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">A solid portfolio of 4,200+ projects across B2C, B2B, P2P, and G2P segments.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasTypes.map((type, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-indigo-500/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                    <type.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{type.title}</h3>
                </div>
                <ul className="space-y-3">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Services */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Scope of Our SaaS Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">End-to-end expertise from idea productization to continuous evolution.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceScope.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Costs to Develop a SaaS Application</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Ballpark estimates to help you plan your budget. Every project is estimated individually.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "SaaS Design & Consulting", price: "₹37.3 Lakh+", desc: "Full-cycle design, brand consulting, and market entry strategy." },
              { title: "Managed MVP Development", price: "₹87.1 Lakh+", desc: "Development of an MVP for a SaaS solution of moderate complexity." },
              { title: "Full-Featured SaaS Product", price: "₹1.66 Crore+", desc: "End-to-end development of a full-featured SaaS product from scratch." }
            ].map((cost, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 text-center group hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Gem size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{cost.title}</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-4">{cost.price}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{cost.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Launch Your SaaS?</h2>
          <p className="text-xl text-indigo-50 mb-12">
            Partner with GnJ Worldwide for scalable, secure, and user-centric SaaS development that drives business growth.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 font-bold py-5 px-12 rounded-2xl hover:bg-indigo-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Request SaaS Development <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SaasPage;