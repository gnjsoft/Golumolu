import React, { useEffect, useState } from 'react';
import { 
  Network, Package, ShieldAlert, Clock, 
  Smartphone, BarChart, CreditCard, Users, 
  DollarSign, HardHat, Settings, Layers,
  FileText, Briefcase, Search, Lightbulb, 
  Code, Headphones, Monitor, Zap, ArrowRight,
  CheckCircle2, Laptop, Globe, UserCheck,
  Activity, LineChart, MessageSquare, Video,
  Play, Share2, UserPlus, ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TelecomPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen pt-20 font-sans text-gray-100">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                      <Network size={48} className="text-cyan-500" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Telecommunication IT Solutions
              </h1>
              <p className={`text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  GnJ Worldwide helps wired and wireless telecom providers implement highly available, agile, and secure IT solutions to address rising data traffic, real-time communication demands, and AI-driven personalization.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="bg-cyan-600 text-white hover:bg-cyan-700 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center group">
                      Transform Your Network <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </div>
      </div>

      {/* Software Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Software for Telecommunications</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">Implement custom IT solutions for operations and business management, and launch innovative consumer and enterprise telecom apps.</p>
          </div>

          {/* Operations Support Systems (OSS) */}
          <div className="mb-24">
              <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-grow bg-gray-800"></div>
                  <h3 className="text-2xl font-bold text-cyan-500 uppercase tracking-widest">Operations Support Systems (OSS)</h3>
                  <div className="h-px flex-grow bg-gray-800"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      { 
                        title: "Network Management", 
                        icon: Network, 
                        desc: "Centralize network operations for availability, stability, and optimal performance." 
                      },
                      { 
                        title: "Service Provisioning", 
                        icon: HardHat, 
                        desc: "Automate service activation, configuration, and delivery for speed and accuracy." 
                      },
                      { 
                        title: "Fault Management", 
                        icon: ShieldAlert, 
                        desc: "Enable fast detection and resolution of network faults to minimize downtime." 
                      },
                      { 
                        title: "Fraud Detection", 
                        icon: DollarSign, 
                        desc: "Embed real-time monitoring to detect and mitigate fraudulent activities." 
                      },
                      { 
                        title: "Performance Management", 
                        icon: BarChart, 
                        desc: "Monitor KPIs like latency and throughput with real-time performance dashboards." 
                      },
                      { 
                        title: "Asset Management", 
                        icon: Layers, 
                        desc: "Efficiently track physical assets and gain real-time visibility into their status." 
                      }
                  ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-gray-800/50 transition-colors">
                          <div className="shrink-0 w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-500">
                              <item.icon className="w-7 h-7" />
                          </div>
                          <div>
                              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Business Support Systems (BSS) */}
          <div className="mb-24">
              <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-grow bg-gray-800"></div>
                  <h3 className="text-2xl font-bold text-cyan-500 uppercase tracking-widest">Business Support Systems (BSS)</h3>
                  <div className="h-px flex-grow bg-gray-800"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      {
                        title: "Billing Systems",
                        icon: CreditCard,
                        desc: "Real-time usage tracking, invoicing, and automated payment collection for complex pricing models."
                      },
                      {
                        title: "Subscription Management",
                        icon: Settings,
                        desc: "Streamline recurring services, automate billing cycles, and enable personalized offers."
                      },
                      {
                        title: "CRM Systems",
                        icon: Users,
                        desc: "Foster customer relationships with personalized cross-sell/upsell opportunities and loyalty programs."
                      },
                      {
                        title: "Customer Support",
                        icon: Headphones,
                        desc: "AI-powered multichannel support providing agents with full customer and network context."
                      },
                      {
                        title: "Self-Service Portals",
                        icon: Laptop,
                        desc: "Empower customers to manage accounts, payments, and support requests independently."
                      },
                      {
                        title: "Ecommerce Solutions",
                        icon: ShoppingCart,
                        desc: "Tailored solutions for selling telecom devices and services with subscription management and personalization."
                      },
                      {
                        title: "Product Management",
                        icon: Lightbulb,
                        desc: "Plan, develop, launch, and manage products and complex telecom services like bundled offerings."
                      },
                      {
                        title: "Order Management",
                        icon: FileText,
                        desc: "Support complex product bundles, service plans, and service modifications like upgrades or downgrades."
                      }
                  ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-gray-800/50 transition-colors">
                          <div className="shrink-0 w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-500">
                              <item.icon className="w-7 h-7" />
                          </div>
                          <div>
                              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* ERP & Analytics */}
          <div className="grid lg:grid-cols-2 gap-16">
              <div>
                  <h3 className="text-2xl font-bold text-cyan-500 mb-8 flex items-center gap-3">
                      <Briefcase className="w-6 h-6" /> ERP Systems
                  </h3>
                  <div className="space-y-6">
                      {[
                          { title: "Financial Management", desc: "Consolidate budgeting, accounting, and planning for complex billing models." },
                          { title: "Workforce Management", desc: "Automate task assignments and track work progress for field technicians." },
                          { title: "Supply Chain Management", desc: "Automate procurement, shipment, and inventory of network equipment." },
                          { title: "Project Management", desc: "Manage resources, timelines, and budgets for network expansions." }
                      ].map((item, i) => (
                          <div key={i} className="bg-gray-800/30 p-6 rounded-xl border border-gray-800">
                              <h4 className="font-bold mb-2">{item.title}</h4>
                              <p className="text-sm text-gray-400">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <div>
                  <h3 className="text-2xl font-bold text-cyan-500 mb-8 flex items-center gap-3">
                      <LineChart className="w-6 h-6" /> Telecom Analytics
                  </h3>
                  <div className="space-y-6">
                      {[
                          { title: "Network Analytics", desc: "Monitor metrics like latency, packet loss, and bandwidth utilization." },
                          { title: "Customer Analytics", desc: "Analyze clickstreams, churn rates, and sentiment to assess experience." },
                          { title: "Operational Analytics", desc: "Define KPIs for employee productivity and resource allocation." },
                          { title: "Financial Analytics", desc: "Detect revenue leakage and forecast cash flow for profitability." }
                      ].map((item, i) => (
                          <div key={i} className="bg-gray-800/30 p-6 rounded-xl border border-gray-800">
                              <h4 className="font-bold mb-2">{item.title}</h4>
                              <p className="text-sm text-gray-400">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Consumer & Enterprise Apps */}
      <div className="bg-gray-800/50 py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Telecom Apps</h2>
                  <p className="text-gray-400">High-performance applications for consumer and business use.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                      { title: "VoIP & Messaging", icon: MessageSquare, desc: "High-quality text and voice communication for personal and business use." },
                      { title: "Conferencing", icon: Video, desc: "HD video/audio with collaboration tools and automated transcription." },
                      { title: "IoT & Smart Home", icon: Smartphone, desc: "Low latency connectivity to manage massive device ecosystems." },
                      { title: "Streaming Apps", icon: Play, desc: "Adaptive live streaming with personalized content recommendations." }
                  ].map((item, i) => (
                      <div key={i} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center group hover:border-cyan-500/50 transition-colors">
                          <item.icon className="w-12 h-12 text-cyan-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                          <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Services Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-cyan-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-bold mb-8">Services for Telecom Providers</h2>
                      <p className="text-cyan-100 text-lg mb-10">
                          We bring deep expertise in telecom-specific challenges to guide you through complex technical decisions and implementation.
                      </p>
                      <div className="space-y-6">
                          {[
                              { title: "Custom Development", icon: Code, desc: "Secure, scalable solutions with full project management and QA." },
                              { title: "Software Integration", icon: Share2, desc: "Middleware and API gateways for consistent data exchange." },
                              { title: "Team Augmentation", icon: UserPlus, desc: "Proficient specialists ready to deliver measurable results within 2 weeks." },
                              { title: "Technology Consulting", icon: Lightbulb, desc: "Guidance on industry standards and high-performing software design." }
                          ].map((item, i) => (
                              <div key={i} className="flex gap-4">
                                  <div className="shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                      <item.icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                      <h4 className="font-bold">{item.title}</h4>
                                      <p className="text-sm text-cyan-100">{item.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="bg-gray-900/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
                      <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
                      <ul className="space-y-4">
                          {[
                              "Highly available & agile solutions",
                              "Secure network operations",
                              "AI-driven service personalization",
                              "Scalable cloud-native infrastructure",
                              "Adherence to telecom industry standards"
                          ].map((text, i) => (
                              <li key={i} className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                  <span className="text-cyan-50">{text}</span>
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="mt-10 w-full bg-white text-cyan-600 font-bold py-4 px-8 rounded-xl hover:bg-cyan-50 transition-colors flex items-center justify-center">
                          Get Started <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default TelecomPage;
