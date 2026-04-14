import React, { useEffect, useState } from 'react';
import { 
  Globe, UserCheck, Shield, Key, Layout, ArrowRight, MousePointer, 
  Users, Briefcase, Heart, Landmark, Building2, GraduationCap, 
  MessageSquare, Zap, Video, Box, CreditCard, Mic, Settings,
  CheckCircle2, BarChart3, Layers, Code, Search, ShieldCheck,
  RefreshCw, Database, Activity, Monitor, Smartphone, Terminal,
  Printer, Utensils, Hotel, Lock, Clock, Rocket, PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WebPortalsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const portalTypes = [
    {
      category: "Customer-facing portals",
      icon: UserCheck,
      items: ["Customer portals", "Self-service portals", "Ecommerce portals", "Customer engagement portals"]
    },
    {
      category: "Partner and supplier portals",
      icon: Shield,
      items: ["B2B portals", "Vendor portals", "Partner portals", "Supply chain portals", "Sales portals"]
    },
    {
      category: "Collaboration portals",
      icon: Users,
      items: ["Client collaboration portals", "Project management portals"]
    },
    {
      category: "Internal portals",
      icon: Briefcase,
      items: ["Employee portals", "HR portals"]
    },
    {
      category: "Community and learning portals",
      icon: GraduationCap,
      items: ["Community portals", "eLearning portals", "Industry portals"]
    }
  ];

  const industryPortals = [
    {
      industry: "Healthcare",
      icon: Heart,
      items: ["Patient portals", "Healthcare employee portals", "Laboratory portals", "Pharmacy portals", "Medical supply chain management", "HIE portals", "Care coordination portals", "Wellness and preventive care", "Mental health portals", "Clinical trial portals"]
    },
    {
      industry: "BFSI",
      icon: Landmark,
      items: ["Insurance portals", "Investor portals", "Online banking portals", "Wealth management portals", "Borrower self-service portals", "Financial advisor portals", "DeFi portals"]
    },
    {
      industry: "Other industries",
      icon: Building2,
      items: ["Construction client portals", "Portals for marketing agencies", "Portals for consulting firms"]
    }
  ];

  const innovations = [
    { title: "AI Chatbots", desc: "For faster, yet helpful, customer service.", icon: MessageSquare },
    { title: "AI Personalization", desc: "To create dynamic digital experiences.", icon: Zap },
    { title: "Live Video", desc: "Telemedicine and remote consultations.", icon: Video },
    { title: "AR User Manuals", desc: "Visual installation and repair steps.", icon: Box },
    { title: "AR Learning", desc: "Interactive and visualized concepts.", icon: GraduationCap },
    { title: "Crypto Payments", desc: "Intermediary-free transactions.", icon: CreditCard },
    { title: "Voice Navigation", desc: "Content search and input via voice.", icon: Mic },
    { title: "Remote Servicing", desc: "Monitoring and after-sales support.", icon: Settings }
  ];

  const foundations = [
    {
      title: "Convenient user onboarding",
      icon: UserCheck,
      points: ["Step-wise registration process", "User identity verification", "Two-factor authentication", "E-signature management", "Digital document uploads"]
    },
    {
      title: "Diverse user engagement",
      icon: MousePointer,
      points: ["Mobile-friendly adaptive design", "Interactive calculators & forms", "Role-based personalization", "Media-rich embedded content", "Straightforward navigation"]
    },
    {
      title: "Easy content management",
      icon: Layout,
      points: ["Searchable product catalogs", "Real-time pricing & inventory", "Drag-and-drop page builder", "Unified publishing styles", "Content versioning & scheduling"]
    },
    {
      title: "Reliability and security",
      icon: ShieldCheck,
      points: ["Scalability for growth", "High performance access", "HIPAA & local law compliance", "Encrypted transfer & storage", "Sensitive data protection"]
    }
  ];

  const steps = [
    { title: "Planning", desc: "Exploring business needs, regulatory constraints, and detailed tech specifications." },
    { title: "Design", desc: "Creating portal architecture and delivering high-fidelity UX/UI designs." },
    { title: "Iterative Development", desc: "Building back end, front end, and APIs in quick 2-4 week iterations." },
    { title: "Integration", desc: "Connecting with ERP, CRM, PDM, MES, HIE, LMS, and other existing systems." },
    { title: "QA and Testing", desc: "Verifying performance, security, and compliance with automated testing." },
    { title: "Deployment", desc: "Setting up in your IT environment with user guides and team training." },
    { title: "After-release Support", desc: "1-3 months of incident management, configuration changes, and updates." },
    { title: "Ongoing Monitoring", desc: "Optional performance management, troubleshooting, and evolution." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <div className={`lg:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-500/20">
                      <Globe size={14} /> Web Portal Development
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                      Secure Digital <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Service Spaces</span>
                  </h1>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                      GnJ Worldwide plans and implements secure, user-friendly digital spaces to serve your customers, partners, and employees with seamless self-service functions.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-cyan-500 transition-all shadow-lg hover:shadow-cyan-500/30 flex items-center">
                          Start Your Portal <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>
              
              <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="relative bg-slate-800 rounded-3xl p-8 border border-white/10 shadow-2xl">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                              <Layout size={24} />
                          </div>
                          <div>
                              <div className="text-white font-bold">Portal Dashboard</div>
                              <div className="text-xs text-slate-400">Real-time User Activity</div>
                          </div>
                      </div>
                      <div className="space-y-4">
                          <div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                              <div className="h-full bg-cyan-500 w-3/4 animate-pulse"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                              <div className="h-20 bg-slate-700/50 rounded-xl border border-white/5"></div>
                              <div className="h-20 bg-slate-700/50 rounded-xl border border-white/5"></div>
                          </div>
                          <div className="h-32 bg-slate-700/50 rounded-xl border border-white/5"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Web Portals We Can Create */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Web Portals for Your Business</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We create secure web-based platforms that provide easy access to varied functionality and content tailored to your audience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {portalTypes.map((type, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                          <type.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{type.category}</h3>
                      <ul className="space-y-2">
                          {type.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> {item}
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
              {industryPortals.map((industry, idx) => (
                  <div key={idx} className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                              <industry.icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold">{industry.industry}</h3>
                      </div>
                      <ul className="space-y-3">
                          {industry.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                  <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      </div>

      {/* Innovations Section */}
      <div className="bg-white py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Bringing Innovations to Design</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Delight your audience by offering advanced opportunities to collaborate, work, and interact.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {innovations.map((item, i) => (
                      <div key={i} className="text-center group">
                          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-cyan-600 group-hover:text-white transition-all mx-auto mb-6 shadow-sm">
                              <item.icon size={32} />
                          </div>
                          <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Foundation for UX */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Foundation for Great UX</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Essential characteristics we always specify to ensure a superior user experience.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
              {foundations.map((found, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center">
                              <found.icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">{found.title}</h3>
                      </div>
                      <ul className="grid grid-cols-1 gap-4">
                          {found.points.map((point, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-600">
                                  <CheckCircle2 size={18} className="text-cyan-600 shrink-0" />
                                  <span>{point}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Web Portal Pricing</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Choosing between platform-based or custom development is a key price-determining decision.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] flex flex-col">
                      <h3 className="text-2xl font-bold mb-4">Platform-based</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-8">Starts at ₹12.5 Lakhs</div>
                      <div className="space-y-6 flex-grow">
                          <div>
                              <div className="text-xs text-slate-500 uppercase font-bold mb-2">Pros</div>
                              <p className="text-sm text-slate-300">Quick project progress from concept to deployment.</p>
                          </div>
                          <div>
                              <div className="text-xs text-slate-500 uppercase font-bold mb-2">Cons</div>
                              <p className="text-sm text-slate-300">Rigid functionality and design. Hard to scale beyond out-of-the-box components.</p>
                          </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="text-xs text-slate-500 uppercase font-bold mb-1">Example</div>
                          <div className="text-sm">SharePoint-based eLearning portal</div>
                      </div>
                  </div>
                  <div className="bg-cyan-600 p-12 rounded-[3rem] shadow-2xl flex flex-col transform md:scale-105">
                      <div className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">Recommended</div>
                      <h3 className="text-2xl font-bold mb-4">Custom Development</h3>
                      <div className="text-4xl font-bold text-white mb-8">Starts at ₹58 Lakhs</div>
                      <div className="space-y-6 flex-grow">
                          <div>
                              <div className="text-xs text-cyan-100 uppercase font-bold mb-2">Pros</div>
                              <p className="text-sm text-white">No functional limits. UX designed specifically for your target audience. Built for scalability.</p>
                          </div>
                          <div>
                              <div className="text-xs text-cyan-100 uppercase font-bold mb-2">Cons</div>
                              <p className="text-sm text-white">Longer development time before initial ROI.</p>
                          </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="text-xs text-cyan-100 uppercase font-bold mb-1">Example</div>
                          <div className="text-sm">Customer self-service portal with multi-channel support</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8">Consulting</h3>
                  <ul className="space-y-4 mb-10">
                      {["Retrieve business and user needs", "Define portal functionality and tech stack", "Develop a business case and estimate ROI", "Design architecture for performance & security", "Deliver UX/UI mock-ups", "Provide project management scenario"].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                              <CheckCircle2 size={18} className="text-cyan-600 mt-1 shrink-0" />
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
                  <Link to="/contact" className="block text-center bg-cyan-600 text-white py-4 rounded-xl font-bold hover:bg-cyan-700 transition-all">
                      Request Consulting
                  </Link>
              </div>
              <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8">Full-cycle Development</h3>
                  <ul className="space-y-4 mb-10">
                      {["Portal consulting and planning", "Custom and platform-based development", "Mobile app development (if required)", "Integration with third-party systems", "User training and after-launch support", "Continuous portal management"].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                              <CheckCircle2 size={18} className="text-cyan-600 mt-1 shrink-0" />
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
                  <Link to="/contact" className="block text-center bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                      Request Development
                  </Link>
              </div>
          </div>
      </div>

      {/* Portal vs Website */}
      <div className="bg-slate-50 py-24 border-y border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Web Portal vs Website</h2>
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left bg-white">
                      <thead>
                          <tr className="bg-slate-900 text-white">
                              <th className="p-6 font-bold">Web Portal</th>
                              <th className="p-6 font-bold">Website</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                          {[
                              ["Users can interact with the data on the page", "Static, informational (read-only) content"],
                              ["Anonymous public pages and authentication-required pages", "Authentication is not obligatory"],
                              ["Real-time, highly personalized experiences", "One-size-fits-all attempts at personalization"],
                              ["Multiple integrations with custom and third-party tools", "Rarely integrated with other systems"],
                              ["Frequent feature updates and dynamic content", "Static content updates"]
                          ].map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors">
                                  <td className="p-6 text-sm text-slate-700 border-r border-slate-100">{row[0]}</td>
                                  <td className="p-6 text-sm text-slate-700">{row[1]}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>

      {/* Development Steps */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-20">Web Portal Development Steps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {steps.map((step, i) => (
                  <div key={i} className="relative">
                      <div className="text-6xl font-black text-slate-100 absolute -top-10 -left-4 -z-10">{i + 1}</div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to build your portal?</h2>
                  <p className="text-xl text-cyan-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Partner with GnJ Worldwide to create a secure, scalable web portal that empowers your users.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-cyan-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all shadow-xl">
                          Get a Free Proposal
                      </Link>
                      <Link to="/contact" className="bg-cyan-900 text-white border border-cyan-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default WebPortalsPage;
