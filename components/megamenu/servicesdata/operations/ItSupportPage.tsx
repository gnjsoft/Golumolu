import React, { useEffect } from 'react';
import { 
  MessageSquare, 
  Headphones, 
  Laptop, 
  ArrowRight, 
  UserCheck, 
  Clock, 
  Smile, 
  Users, 
  ShieldCheck, 
  Cloud, 
  Server, 
  Layers, 
  Search, 
  CheckCircle2, 
  Star, 
  Heart, 
  Activity, 
  BarChart, 
  FileText, 
  Settings, 
  Phone, 
  Mail, 
  Globe, 
  Zap,
  CheckCircle,
  Stethoscope,
  Building2,
  Wallet,
  Coins,
  Shield,
  CreditCard,
  ShoppingBag,
  Factory,
  Briefcase,
  Droplets,
  TowerControl,
  Truck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ItSupportPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportTiers = [
    {
      title: "Consulting Support",
      icon: Search,
      desc: "Get a third-party viewpoint on any IT-related issue. We audit infrastructure components or processes and provide detailed action plans for resolution."
    },
    {
      title: "L1 Help Desk",
      icon: Headphones,
      desc: "Quickly handle user software problems and requests to restore user convenience and minimize work routine disruptions."
    },
    {
      title: "L2 Help Desk",
      icon: Laptop,
      desc: "Deep investigation by software and infrastructure engineers to fix complex issues and prevent their reappearance."
    },
    {
      title: "L3 Help Desk",
      icon: Server,
      desc: "Support for business-critical activities like development, cloud migrations, rearchitecting, or server virtualization."
    },
    {
      title: "Cloud Management",
      icon: Cloud,
      desc: "Continuous optimization of cloud resources consumption to ensure high performance, availability, and reasonable costs."
    },
    {
      title: "Managed Cybersecurity",
      icon: ShieldCheck,
      desc: "Comprehensive security environment analysis covering all possible entry points of threats rather than standalone tools."
    },
    {
      title: "Infrastructure Management",
      icon: Layers,
      desc: "Full outsourcing of IT support functions, looking after the health and security of networks, systems, servers, and storage."
    },
    {
      title: "Application Management",
      icon: Settings,
      desc: "Monitoring KPIs to fix failures and optimizing software with new capabilities and functions aligned with business purposes."
    }
  ];

  const deliverables = [
    {
      title: "Multi-tier Incident Resolution",
      items: ["L1: User support team", "L2: Technical support team", "L3: Software engineering team"]
    },
    {
      title: "Infrastructure & Operating Procedures",
      items: ["SOPs for ticket resolution & CI/CD", "Network maps", "Configuration management database", "Improvement plans"]
    },
    {
      title: "Self-service Training Materials",
      items: ["Knowledge base articles", "FAQs", "User manuals"]
    },
    {
      title: "UX & Adoption Improvements",
      items: ["UX testing/monitoring", "CSAT improvement plans", "User experience studies"]
    },
    {
      title: "Compliance Assessments",
      items: ["PCI DSS, HIPAA benchmarking", "Compliance gap mitigation plans"]
    },
    {
      title: "Transparent Reporting",
      items: ["Service level & Maintenance reports", "Health check & Security reports", "Root cause analysis reports"]
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Stethoscope },
    { name: "Banking", icon: Building2 },
    { name: "Investment", icon: Wallet },
    { name: "Lending", icon: Coins },
    { name: "Insurance", icon: Shield },
    { name: "Payments", icon: CreditCard },
    { name: "Retail", icon: ShoppingBag },
    { name: "Manufacturing", icon: Factory },
    { name: "Professional Services", icon: Briefcase },
    { name: "Oil and Gas", icon: Droplets },
    { name: "Telecoms", icon: TowerControl },
    { name: "Logistics", icon: Truck }
  ];

  const stats = [
    { label: "IT Support Costs", value: "-50%", color: "text-emerald-600" },
    { label: "Cloud Costs", value: "-20%", color: "text-blue-600" },
    { label: "App Availability", value: "99.99%", color: "text-purple-600" },
    { label: "User Satisfaction", value: "+40%", color: "text-orange-600" },
    { label: "App Issues", value: "-10%", color: "text-rose-600" }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-widest mb-8 backdrop-blur-sm">
              <Activity size={16} className="animate-pulse" /> FAILS-SAFE IT WORKFLOWS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              All-Encompassing <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">IT Support Services</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide guarantees continuous improvement of your IT processes, maintaining failsafe workflows while significantly reducing operational costs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
                Get Support Team <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-2xl"></div>
              <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl relative">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400"><Clock size={24}/></div>
                    <div>
                      <div className="text-white font-bold">24/7 Monitoring</div>
                      <div className="text-slate-400 text-sm">Continuous system health checks</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400"><ShieldCheck size={24}/></div>
                    <div>
                      <div className="text-white font-bold">Managed Security</div>
                      <div className="text-slate-400 text-sm">Comprehensive threat protection</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400"><Zap size={24}/></div>
                    <div>
                      <div className="text-white font-bold">Rapid Resolution</div>
                      <div className="text-slate-400 text-sm">Multi-tier incident response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICE TIERS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Find Your Support Solution</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From advisory support to monitoring, troubleshooting, and optimization activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTiers.map((tier, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <tier.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{tier.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMMUNICATION CHANNELS --- */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Communication Channels We Support</h2>
              <p className="text-xl text-blue-100 mb-12">
                For on-demand support models, we offer multiple scenarios for seamless ticket submission and interaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Self-service Portals", icon: Globe },
                  { name: "Service Desk Software", icon: Laptop },
                  { name: "Email Support", icon: Mail },
                  { name: "Phone Support", icon: Phone },
                  { name: "Instant Messaging", icon: MessageSquare },
                  { name: "Social Media", icon: Users }
                ].map((channel, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <channel.icon size={20} className="text-blue-200" />
                    <span className="font-medium">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" 
                  alt="Support Team" 
                  className="rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT YOU GET --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What You Get with IT Support</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                  {item.title}
                </h3>
                <ul className="space-y-4">
                  {item.items.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPETITIVE TRAITS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Competitive Traits</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Feasibility Analysis",
                icon: BarChart,
                desc: "Before we take up support, we analyze TCO and ROI of assets to ensure financial estimates improve after we commence."
              },
              {
                title: "Result-Oriented Service",
                icon: Star,
                desc: "Service quality reflected in regular reports with clear metrics (MTTR, Availability, CSAT) for strict compliance with SLOs."
              },
              {
                title: "Long-term Collaboration",
                icon: Heart,
                desc: "We believe in mutually beneficial long-term support, reducing transition periods and ensuring well-tailored working routines."
              }
            ].map((trait, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transform rotate-3 hover:rotate-0 transition-transform">
                  <trait.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{trait.title}</h3>
                <p className="text-slate-600 leading-relaxed">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRY EXPERTISE --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industry-Specific Support</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expertise built across 30+ industries with specialized knowledge in critical fields.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-center group">
                <industry.icon className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={32} />
                <span className="text-sm font-medium text-slate-300">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS STATS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Business Benefits</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-600 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-blue-600 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for Failsafe IT Workflows?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Let's discuss how our IT support services can reduce your costs and optimize your infrastructure.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-xl transform hover:-translate-y-1">
            Discuss My Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ItSupportPage;