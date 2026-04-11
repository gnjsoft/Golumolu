import React, { useEffect, useState } from 'react';
import { 
  Flame, Droplet, Activity, ShieldAlert, Anchor, BarChart2,
  Database, Cpu, Eye, Zap, HardHat, Settings, 
  FileText, Briefcase, Users, Search, Box, 
  LineChart, ShieldCheck, Laptop, Globe, 
  CheckCircle2, ArrowRight, Layers, Smartphone,
  Monitor, PenTool, ClipboardList, GraduationCap,
  Lightbulb, Code, UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OilGasPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-stone-950 min-h-screen pt-20 font-sans text-stone-100">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden border-b border-stone-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941348-c09e554b9a51?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 sepia"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-4 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
                      <Flame size={48} className="text-amber-500" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Oil & Gas IT Solutions
              </h1>
              <p className={`text-xl text-stone-400 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  GnJ Worldwide builds advanced IT solutions for the oil and gas industry employing Cloud, IIoT, Big Data, and AR/VR to improve exploration, production, and data-driven decision-making.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="bg-amber-600 text-white hover:bg-amber-700 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center group">
                      Get a Tailored Solution <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </div>
      </div>

      {/* Solutions Overview */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">IT Solutions We Offer</h2>
              <p className="text-stone-400 max-w-2xl mx-auto text-lg">Embrace digital transformation for improved drilling quality, optimized reservoir management, and enhanced oil recovery.</p>
          </div>

          {/* Business Management Section */}
          <div className="mb-24">
              <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-grow bg-stone-800"></div>
                  <h3 className="text-2xl font-bold text-amber-500 uppercase tracking-widest">Business Management</h3>
                  <div className="h-px flex-grow bg-stone-800"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { 
                        title: "Operational Analytics", 
                        icon: BarChart2, 
                        items: ["Data ingestion & storage", "Big data analytics", "Operational alerts", "Risk estimation"] 
                      },
                      { 
                        title: "Capital Project Mgmt", 
                        icon: Briefcase, 
                        items: ["Document & asset mgmt", "4D/5D BIM & VR", "Cost & risk mgmt", "Progress reporting"] 
                      },
                      { 
                        title: "Procurement & Supplier", 
                        icon: Users, 
                        items: ["Supplier assessment", "Supplier portals", "Inventory mgmt", "Order automation"] 
                      },
                      { 
                        title: "Knowledge Mgmt", 
                        icon: Search, 
                        items: ["Resource extraction", "AI screening", "Semantic search", "Daily drilling reports"] 
                      }
                  ].map((card, i) => (
                      <div key={i} className="bg-stone-900/50 p-8 rounded-2xl border border-stone-800 hover:border-amber-500/30 transition-colors group">
                          <card.icon className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
                          <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                          <ul className="space-y-2">
                              {card.items.map((item, j) => (
                                  <li key={j} className="text-sm text-stone-400 flex items-start gap-2">
                                      <div className="w-1 h-1 bg-amber-500 rounded-full mt-2"></div>
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>

          {/* Exploration & Production Section */}
          <div>
              <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-grow bg-stone-800"></div>
                  <h3 className="text-2xl font-bold text-amber-500 uppercase tracking-widest">Exploration & Production</h3>
                  <div className="h-px flex-grow bg-stone-800"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      {
                        title: "Resources Database",
                        icon: Database,
                        desc: "Integrated O&G resources database with advanced visualization, seismic data ingestion, and secure access."
                      },
                      {
                        title: "Reservoir Management",
                        icon: Layers,
                        desc: "Enhanced monitoring, fracture detection, and real-time simulation with immersive VR visualization."
                      },
                      {
                        title: "Remote Operations (ROC)",
                        icon: Monitor,
                        desc: "Remote monitoring of drilling and well operations with automated alarming and decision-making scenarios."
                      },
                      {
                        title: "Maintenance & Field Service",
                        icon: Settings,
                        desc: "Long-term planning, AR-based visual clues for field service, and VR-facilitated equipment repairing."
                      },
                      {
                        title: "Predictive Maintenance",
                        icon: Zap,
                        desc: "ML-based predictive failure modeling in real-time and drill bit defect recognition via image analysis."
                      },
                      {
                        title: "VR Immersive Training",
                        icon: GraduationCap,
                        desc: "Operational, emergency, and safety training on new equipment and sites using immersive VR environments."
                      }
                  ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-stone-900 transition-colors">
                          <div className="shrink-0 w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                              <item.icon className="w-7 h-7" />
                          </div>
                          <div>
                              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                              <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Project Portfolio */}
      <div className="bg-stone-900 py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Our Project Portfolio</h2>
                  <p className="text-stone-400">Real-world impact across the oil and gas value chain.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                  {[
                      {
                        title: "Full-Cycle Pipeline Joint Manufacturing",
                        desc: "Multi-tenant SaaS product for O&G manufacturers to manage the full life cycle of pipeline joints with predictive service life modeling.",
                        tag: "SaaS / Predictive Modeling"
                      },
                      {
                        title: "AI-Powered DMS for Drilling",
                        desc: "SharePoint DMS with AI handwriting recognition (87–90% accuracy) for RFI submission and data extraction for a Gulf-based drilling company.",
                        tag: "AI / SharePoint"
                      },
                      {
                        title: "Drill Bit Defect Recognition",
                        desc: "Machine learning and visual recognition solution for a leading equipment manufacturer to reduce downtime and maintenance costs.",
                        tag: "Machine Learning / Vision"
                      },
                      {
                        title: "24/7 Oil Well Monitoring",
                        desc: "Web application enhancing monitoring capabilities for rod pumping equipment, providing real-time visibility into well health.",
                        tag: "IoT / Monitoring"
                      }
                  ].map((project, i) => (
                      <div key={i} className="bg-stone-950 p-8 rounded-3xl border border-stone-800 hover:border-amber-500/50 transition-all group">
                          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4">{project.tag}</div>
                          <h4 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">{project.title}</h4>
                          <p className="text-stone-400 mb-6">{project.desc}</p>
                          <Link to="/portfolio" className="text-amber-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                              Case Study Details <ArrowRight size={16} />
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Perks Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-amber-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-bold mb-8">Perks of Our Approach</h2>
                      <p className="text-amber-100 text-lg mb-10">
                          We drive your oil and gas projects to achieve goals despite constraints, ensuring predictable flow and pragmatic risk mitigation.
                      </p>
                      <div className="space-y-8">
                          <div className="flex gap-6">
                              <div className="shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                  <Cpu className="w-6 h-6" />
                              </div>
                              <div>
                                  <h4 className="text-xl font-bold mb-2">Proficiency in Advanced Tech</h4>
                                  <p className="text-amber-100 text-sm">Experts in Cloud, IIoT, Big Data, VR, and AR, choosing the best-fitting tools for your specific needs.</p>
                              </div>
                          </div>
                          <div className="flex gap-6">
                              <div className="shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                  <Users className="w-6 h-6" />
                              </div>
                              <div>
                                  <h4 className="text-xl font-bold mb-2">Joint Work with Industry Experts</h4>
                                  <p className="text-amber-100 text-sm">Close collaboration with your scientists and engineers to create innovative, integrated solutions.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="bg-stone-950/30 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
                      <h3 className="text-2xl font-bold mb-6">Predictable Results</h3>
                      <ul className="space-y-4">
                          {[
                              "Predictive equipment maintenance",
                              "Remote asset monitoring",
                              "Drilling cost reduction",
                              "KPI-based reporting",
                              "Knowledge sharing & transfer"
                          ].map((text, i) => (
                              <li key={i} className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                                  <span className="text-amber-50">{text}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      {/* Service Options */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Choose Your Service Option</h2>
              <p className="text-stone-400">Tailored engagement models to fit your project requirements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  {
                    title: "Tech Consulting",
                    icon: Lightbulb,
                    desc: "Advice on Cloud, Big Data, IIoT, and AR/VR for reservoir modeling and predictive maintenance."
                  },
                  {
                    title: "Implementation",
                    icon: Code,
                    desc: "End-to-end implementation, cost estimation, and after-launch support for custom solutions."
                  },
                  {
                    title: "IT Outsourcing",
                    icon: Globe,
                    desc: "Outsourced development, data analytics, QA, and managed infrastructure services."
                  },
                  {
                    title: "Staff Augmentation",
                    icon: UserCheck,
                    desc: "Quickly cover resource gaps with Java, .NET, Python, and DevOps experts."
                  }
              ].map((service, i) => (
                  <div key={i} className="bg-stone-900 p-8 rounded-2xl border border-stone-800 flex flex-col h-full">
                      <service.icon className="w-10 h-10 text-amber-500 mb-6" />
                      <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                      <p className="text-stone-400 text-sm mb-8 flex-grow">{service.desc}</p>
                      <Link to="/contact" className="text-amber-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                          Request Service <ArrowRight size={16} />
                      </Link>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default OilGasPage;
