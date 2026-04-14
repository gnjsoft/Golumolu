import React, { useEffect, useState } from 'react';
import { 
  Ticket, 
  CheckCircle, 
  Clock, 
  Zap, 
  ArrowRight, 
  MessageCircle, 
  Headphones, 
  Shield, 
  BarChart, 
  Users, 
  Settings,
  Search,
  Globe,
  Monitor,
  Server,
  Cloud,
  Terminal,
  Database,
  Smartphone,
  MessageSquare,
  Phone,
  Mail,
  Share2,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Target,
  Award,
  Activity,
  Code,
  Layers,
  Cpu,
  Lock,
  MousePointer2,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const ItHelpDeskPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceModels = [
    {
      title: "Help Desk Consulting",
      icon: Search,
      desc: "Full-fledged advisory help starting from feasibility studies to sourcing models, team lineup, and toolkit recommendations."
    },
    {
      title: "Help Desk Outsourcing",
      icon: Headphones,
      desc: "ITIL-standard virtual help desk for L1-L3 issues, including white-label options under your own trademark."
    },
    {
      title: "Customer Service Desk",
      icon: Users,
      desc: "Single point of contact for customers with coordinated case management and multi-channel communication."
    },
    {
      title: "Outsourced NOC",
      icon: Activity,
      desc: "24/7/365 infrastructure monitoring and L2/L3 tech support to handle issues and prevent defects."
    },
    {
      title: "Technical Support",
      icon: Terminal,
      desc: "Quick incident resolution and proactive problem management relying on root cause analysis and continuous monitoring."
    },
    {
      title: "Managed Help Desk",
      icon: Settings,
      desc: "Taking over the entire help desk function, from process establishment to continuous monitoring and improvement."
    }
  ];

  const supportProcess = [
    { title: "Creation", desc: "User reports an issue via email, phone, or portal; ticket is created automatically." },
    { title: "Processing", desc: "Ticket is categorized by type and urgency, then assigned to the appropriate engineer." },
    { title: "Resolution", desc: "Support agent resolves the ticket or escalates it to the next level for in-depth expertise." },
    { title: "Notification", desc: "The user is notified about their ticket's changed status and final resolution." },
    { title: "Analysis", desc: "Deep dive into the incident to identify root causes and suggest improvements to prevent recurrence." },
    { title: "Optimization", desc: "Continuous monitoring of KPIs and feedback to identify workflow improvement opportunities." }
  ];

  const componentsCovered = [
    { name: "On-premises Data Centers", icon: Server },
    { name: "Desktops, Laptops & Mobile", icon: Monitor },
    { name: "Cloud Services (IaaS, PaaS, SaaS)", icon: Cloud },
    { name: "Dev Infrastructure (CI/CD)", icon: Terminal },
    { name: "Network & Cybersecurity", icon: Shield },
    { name: "Data Storage & Databases", icon: Database },
    { name: "Customer-facing Software", icon: Globe }
  ];

  const kpis = [
    { label: "First Response Time (FRT)", value: "≤30 min", sub: "for emails", icon: Clock },
    { label: "User Satisfaction (USAT)", value: "≥90%", sub: "target score", icon: Award },
    { label: "Resolution Rate (RR)", value: "≥70%", sub: "of total tickets", icon: Target }
  ];

  const techStack = [
    { category: "Ticketing", items: ["ServiceNow", "Jira", "Zendesk", "Freshdesk"] },
    { category: "Monitoring", items: ["Zabbix", "Nagios", "Prometheus", "Grafana"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "Ansible", "Terraform"] },
    { category: "Clouds", items: ["AWS", "Azure", "Google Cloud", "DigitalOcean"] },
    { category: "Languages", items: [".NET", "Java", "Python", "Node.js", "React"] },
    { category: "Databases", items: ["SQL Server", "MySQL", "MongoDB", "Cosmos DB"] }
  ];

  const painsAndRemedies = [
    {
      pain: "High costs for in-house IT help desk team",
      remedy: "IT help desk services provided by experienced L1-L3 engineers on a subscription or fixed-price basis."
    },
    {
      pain: "Inability to handle varying demand",
      remedy: "Scalable IT support due to a large pool of engineers and highly automated processes."
    },
    {
      pain: "Frequent IT incidents",
      remedy: "Well-described operational procedures and proactive root cause analysis."
    },
    {
      pain: "Low customer/employee satisfaction",
      remedy: "Mature processes for issue resolution plus a CSAT improvement plan based on user surveys."
    }
  ];

  const bargainStats = [
    { value: "40-70%", label: "fewer user errors" },
    { value: "97%", label: "User Satisfaction Score" },
    { value: "40%", label: "help desk cost reduction" },
    { value: "3-5x", label: "fewer help requests" },
    { value: "50-200%", label: "faster detection" },
    { value: "20-50%", label: "increased ROI" }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-indigo-950 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4f46e5_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-bold tracking-widest mb-8 backdrop-blur-sm">
              <Ticket size={16} className="animate-pulse" /> IT HELP DESK SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Stability & Support <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">For Your Enterprise</span>
            </h1>
            <p className="text-xl text-indigo-100/80 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide resolves and prevents IT-related issues for employees and customers, ensuring the overall stability of your IT infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2">
                Get a Help Desk Team <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">97%</div>
                  <div className="text-xs text-indigo-200/60 uppercase tracking-wider">CSAT Score</div>
                </div>
                <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">≤30m</div>
                  <div className="text-xs text-indigo-200/60 uppercase tracking-wider">Response Time</div>
                </div>
                <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">24/7</div>
                  <div className="text-xs text-indigo-200/60 uppercase tracking-wider">Monitoring</div>
                </div>
                <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">ITIL</div>
                  <div className="text-xs text-indigo-200/60 uppercase tracking-wider">Standards</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICE MODELS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Help Desk Services by GnJ Worldwide</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer a range of service models to fit your specific sourcing and support needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceModels.map((model, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <model.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{model.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUPPORT PROCESS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Help Desk Support Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every ticket incoming to our IT help desk progresses through a mature, 6-step workflow.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-200 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-6 gap-8 relative z-10">
              {supportProcess.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-indigo-500 transition-colors">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto lg:-mt-12 lg:mb-8 border-4 border-slate-50">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-center">{step.title}</h4>
                  <p className="text-xs text-slate-500 text-center leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPONENTS & CHANNELS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">What IT Components We Cover</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {componentsCovered.map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                      <comp.icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{comp.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center lg:text-left">Support Channels</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { name: "Self-service Portals", icon: Globe },
                  { name: "Service Desk Software", icon: Monitor },
                  { name: "Email Support", icon: Mail },
                  { name: "Phone Support", icon: Phone },
                  { name: "Instant Messaging", icon: MessageSquare },
                  { name: "Social Media", icon: Share2 }
                ].map((channel, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <channel.icon size={28} />
                    </div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BEST PRACTICES & KPIs --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Best Practices & KPIs</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We track fundamental metrics to keep your help desk in peak health.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center group hover:border-indigo-500 transition-all">
                <kpi.icon className="mx-auto mb-6 text-indigo-400 group-hover:scale-110 transition-transform" size={40} />
                <div className="text-4xl font-bold mb-2">{kpi.value}</div>
                <div className="text-lg font-bold text-indigo-300 mb-1">{kpi.label}</div>
                <div className="text-sm text-slate-400">{kpi.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Continuity", desc: "FRT up to 30 minutes and immediate detection via monitoring." },
              { title: "Satisfaction", desc: "36% reduction in issues and 97%+ CSAT score." },
              { title: "Cost Optimization", desc: "Fewer incidents due to root cause mitigation and self-service." },
              { title: "Scalable Tiers", desc: "L1-L3 structured support for basic to complex code-level issues." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="text-indigo-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TOOLS & TECHNOLOGIES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Tools & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PAINS & REMEDIES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How We Remedy Your IT Pains</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {painsAndRemedies.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <AlertCircle size={14} /> Issue
                  </div>
                  <p className="text-slate-900 font-bold text-lg">{item.pain}</p>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="text-slate-300" size={32} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} /> Fixed
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.remedy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BARGAIN STATS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why It's a Good Bargain</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {bargainStats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-indigo-50 border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-all group">
                <div className="text-3xl font-bold mb-1 group-hover:text-white transition-colors">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-indigo-100 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-indigo-600 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Optimize Your Support?</h2>
          <p className="text-xl text-indigo-100 mb-12">
            Let's discuss how our IT help desk services can reduce your costs and increase user satisfaction.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-indigo-600 font-bold py-5 px-12 rounded-2xl hover:bg-indigo-50 transition-all shadow-xl transform hover:-translate-y-1">
            Discuss My Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ItHelpDeskPage;