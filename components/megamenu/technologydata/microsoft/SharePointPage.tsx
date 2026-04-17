import React, { useEffect } from 'react';
import { 
  Share2, FileText, Users, Globe, Shield, ArrowRight, 
  CheckCircle2, Layout, Workflow, BarChart3, Settings, 
  ShieldCheck, RefreshCw, SearchCode, LifeBuoy, Terminal, 
  Infinity, Gauge, Search, MessageSquare, Microscope, 
  Building2, Truck, ShoppingCart, Landmark, Factory, 
  Briefcase, UserCheck, History, TestTube2, Kanban, 
  ClipboardList, ClipboardCheck, Warehouse, Radio, 
  Pill, Heart, Stethoscope, Image as ImageIcon, 
  TrendingUp, ShieldAlert, PenTool, Package, Eye, 
  Bot, Ticket, CreditCard, Share, Lock, Clock, 
  Handshake, Calculator, AlertTriangle, Lightbulb, 
  Video, Binary, Network, Box, Monitor, Tv, Glasses, 
  Cpu, ListChecks, MapPin, Sparkles, Calendar, User, 
  Scan, Bell, Link as LinkIcon, Activity, 
  Target, Rocket, FileCode, Layers, MousePointer2, 
  LayoutTemplate, Component, Link2, PieChart, 
  Headphones, Megaphone, Star, Video as VideoIcon,
  Mail, BookOpen, GraduationCap, Trophy, UserPlus,
  FileSearch, ShieldAlert as ComplianceIcon, Palette, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const SharePointPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const sharepointFeatures = [
    {
      title: "Document Management",
      icon: FileText,
      items: ["Lifecycle automation", "Templates & Co-authoring", "Full text & metadata search", "Versioning & Audit trail", "E-signature integration", "Compliance management"]
    },
    {
      title: "Collaboration & Intranets",
      icon: Globe,
      items: ["Knowledge base & Policies", "Employee profiles & Org charts", "Blogs & Discussion boards", "Self-service portals", "Corporate system links", "Shared Calendars"]
    },
    {
      title: "HR Management",
      icon: UserPlus,
      items: ["Recruitment & Onboarding", "Time & Attendance tracking", "Performance management", "Payroll integration", "Employee request handling", "Benefits administration"]
    },
    {
      title: "Learning Management",
      icon: GraduationCap,
      items: ["Materials creation & storage", "Training scheduling", "Learning assessments", "Certification tracking", "Competency mapping", "Gamification (Badges/Points)"]
    }
  ];

  const m365Apps = [
    { name: "Office Apps", icon: FileCode, desc: "Word, Excel, PowerPoint, OneNote" },
    { name: "OneDrive", icon: Box, desc: "Secure personal and shared file storage" },
    { name: "Teams & Viva", icon: Users, desc: "Enterprise-wide collaboration and communication" },
    { name: "Stream & Sway", icon: VideoIcon, desc: "Professional videos and interactive presentations" },
    { name: "Exchange & Outlook", icon: Mail, desc: "Business-class email and calendaring" },
    { name: "Planner & Project", icon: Kanban, desc: "Task and complex project management" },
    { name: "Power Platform", icon: Zap, desc: "PowerApps, Power Automate, Power BI" },
    { name: "Delve & Search", icon: Search, desc: "People search and information discovery" }
  ];

  const integrations = [
    { title: "Office Apps", icon: FileText, desc: "Fast and easy document creation directly in SharePoint." },
    { title: "Microsoft Teams", icon: Users, desc: "Facilitate communication and share SharePoint files in channels." },
    { title: "Planner", icon: ListChecks, desc: "Create plans, assign tasks, and track team progress visually." },
    { title: "Power Automate", icon: Workflow, desc: "Automate approvals, reminders, and complex business workflows." },
    { title: "Delve", icon: User, desc: "Convenient search for employee profiles and activity tracking." },
    { title: "Power BI", icon: PieChart, desc: "Deliver immersive reports and visuals on corporate data." }
  ];

  const customization = [
    { title: "Design", icon: Palette, desc: "Logos, styles, colors, and master pages to promote corporate culture." },
    { title: "Workflows", icon: Workflow, desc: "Complex, non-linear custom workflows using Power Automate or Visual Studio." },
    { title: "Page Content", icon: Layout, desc: "Custom web parts, chatbots, and personalization (e.g., office plans)." },
    { title: "Navigation", icon: MapPin, desc: "Multi-level menus (left-hand, top, footer) for quick information access." },
    { title: "Forms", icon: ClipboardList, desc: "Surveys, quizzes, and polls using PowerApps or Microsoft Forms." }
  ];

  const useCases = [
    {
      title: "Intranet Solutions",
      icon: Globe,
      types: [
        { name: "HR Intranet", desc: "Recruitment, onboarding, payroll, and benefits management." },
        { name: "Business-Oriented", desc: "Project management, knowledge sharing, and reporting." },
        { name: "Social Intranet", desc: "Informal communication, news, and employee recognition." }
      ]
    },
    {
      title: "Document Management",
      icon: FileSearch,
      types: [
        { name: "DMS", desc: "Approval workflows, enterprise search, and versioning." },
        { name: "Contract Management", desc: "Guided creation, co-authoring, and compliance checks." },
        { name: "Legal Case Mgmt", desc: "Matter management, deadline tracking, and billing." }
      ]
    }
  ];

  const demos = [
    { title: "HR Portal Demo", desc: "Streamline HR processes from onboarding to employee requests.", link: "#" },
    { title: "Intranet Demo", desc: "Explore rich collaboration and intuitive eye-catching design.", link: "#" },
    { title: "DMS Demo", desc: "Facilitate creating, storing, approving and sharing documentation.", link: "#" },
    { title: "Learning Portal Demo", desc: "Facilitate planning, implementing and assessing learning processes.", link: "#" }
  ];

  const pricing = {
    sharepoint: [
      { title: "SharePoint (Plan 1)", price: "₹415", period: "user/month", features: ["OneDrive storage", "SharePoint Online", "Basic features"] },
      { title: "M365 Business Standard", price: "₹1,038", period: "user/month", features: ["Office apps", "Teams", "SharePoint", "Exchange"] }
    ],
    enterprise: [
      { title: "Office 365 E1", price: "₹830", period: "user/month", features: ["Core services", "Web apps", "Teams"] },
      { title: "Office 365 E3", price: "₹1,909", period: "user/month", features: ["Advanced security", "Desktop apps", "Compliance"] },
      { title: "Office 365 E5", price: "₹3,154", period: "user/month", features: ["Analytics", "Voice", "Advanced protection"] }
    ],
    business: [
      { title: "Business Basic", price: "₹498", period: "user/month", features: ["Teams", "1TB OneDrive", "Web apps"] },
      { title: "Business Standard", price: "₹1,038", period: "user/month", features: ["Desktop apps", "1TB OneDrive", "Webinars"] },
      { title: "Business Premium", price: "₹1,826", period: "user/month", features: ["Advanced security", "Device mgmt", "Azure AD"] }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#0078D4] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Share2 size={14} className="animate-pulse" /> SharePoint & Microsoft 365
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              The Intelligent <br/> <span className="text-blue-200">Intranet</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Share and manage content, knowledge, and applications to empower teamwork, quickly find information, and seamlessly collaborate across the organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#0078D4] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-blue-50">
                Build Your Solution <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/10 rounded-2xl border border-white/20 text-center">
                  <p className="text-3xl font-bold text-white">+75%</p>
                  <p className="text-xs text-blue-100">Performance Boost</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/20 text-center">
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-xs text-blue-100">Compliance</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/20 text-center">
                  <p className="text-3xl font-bold text-white">+10%</p>
                  <p className="text-xs text-blue-100">Business Productivity</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/20 text-center">
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-xs text-blue-100">Collaboration</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SharePoint Functionality */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">SharePoint Functionality</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">A versatile platform to manage documents, knowledge, and HR processes.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sharepointFeatures.map((feature, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft 365 Apps */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Microsoft 365 Ecosystem</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">A complete suite of productivity tools for modern enterprises.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {m365Apps.map((app, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <app.icon size={20} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{app.name}</h4>
                <p className="text-[10px] text-slate-500">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Key Integrations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">SharePoint Online + Microsoft 365: Better Together.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 flex items-start gap-6 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Capabilities */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Customization Capabilities</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Tailoring the platform to your unique business processes and corporate identity.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customization.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500 text-slate-900 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">SharePoint Use Cases</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Specialized solutions for intranets and document management.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {useCases.map((useCase, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <useCase.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{useCase.title}</h3>
                </div>
                <div className="space-y-6">
                  {useCase.types.map((type, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                      <h4 className="font-bold text-blue-600 mb-1">{type.name}</h4>
                      <p className="text-sm text-slate-600">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demos Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Live Demos</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Explore our SharePoint solutions in action.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demos.map((demo, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col group hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{demo.title}</h3>
                <p className="text-slate-500 text-xs mb-6 flex-grow">{demo.desc}</p>
                <a href={demo.link} className="text-blue-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                  Check Demo <ArrowRight className="ml-2" size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Plans and Pricing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Flexible plans tailored for businesses of all sizes.</p>
          </motion.div>

          {/* SharePoint Online Plans */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">SharePoint Online</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricing.sharepoint.map((plan, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                  <h4 className="text-xl font-bold mb-2">{plan.title}</h4>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-slate-500 text-sm ml-2">{plan.period}</span>
                  </div>
                  <ul className="text-left space-y-2 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={14} className="text-blue-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Office 365 Enterprise */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">Office 365 Enterprise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.enterprise.map((plan, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                  <h4 className="text-lg font-bold mb-2">{plan.title}</h4>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-slate-500 text-sm ml-2">{plan.period}</span>
                  </div>
                  <ul className="text-left space-y-2 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 size={12} className="text-blue-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Microsoft 365 Business */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">Microsoft 365 Business</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.business.map((plan, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                  <h4 className="text-sm font-bold mb-2">{plan.title}</h4>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-[10px] text-slate-500 block">{plan.period}</span>
                  </div>
                  <ul className="text-left space-y-1 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1 text-[10px] text-slate-600">
                        <CheckCircle2 size={10} className="text-blue-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration & Implementation */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeIn} className="p-10 bg-white/10 rounded-[3rem] border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Cost-effective Implementation</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Don’t overpay with in-house implementation – entrust it to GnJ Worldwide. Our experts will help you reduce costs by making the most of out-of-the-box capabilities.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all">
                Go for Implementation <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="p-10 bg-white/10 rounded-[3rem] border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Flawless Migration</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Quick and smooth migration of your SharePoint On-premises or third-party solution to SharePoint Online/Microsoft 365 to leverage cloud benefits.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all">
                Go for Migration <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Empower Your Team?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Our consultants will analyze your business needs and provide you with accurate calculation of SharePoint/Microsoft 365 implementation costs and ROI.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-blue-700 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Get a Cost Estimate <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SharePointPage;