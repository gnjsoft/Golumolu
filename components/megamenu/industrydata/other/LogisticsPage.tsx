import React, { useEffect, useState } from 'react';
import { 
  Truck, Map, Package, Clock, Navigation, BarChart, 
  Users, Ship, Plane, Globe, Monitor, Database, 
  Warehouse, ClipboardList, Fuel, DollarSign, 
  LineChart, UserCheck, ShoppingCart, Handshake, 
  Cpu, Layers, Smartphone, CheckCircle2, ArrowRight,
  ShieldCheck, Lightbulb, Code, Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LogisticsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Transportation & Logistics</h1>
                  <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                      GnJ Worldwide provides tailored IT solutions and dedicated services for the T&L industry, propelling digital transformation across business management and operational activities.
                  </p>
              </div>
              <div className={`flex justify-center gap-4 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <div className="text-3xl font-bold text-green-400">98%</div>
                      <div className="text-xs uppercase">On-Time Delivery</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <div className="text-3xl font-bold text-yellow-400">-15%</div>
                      <div className="text-xs uppercase">Fuel Costs</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                      <div className="text-3xl font-bold text-blue-400">24/7</div>
                      <div className="text-xs uppercase">Fleet Visibility</div>
                  </div>
              </div>
          </div>
      </div>

      {/* Who We Serve Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Who We Serve</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">We partner with diverse players across the global supply chain to modernize their operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Globe, title: "Logistics Service Providers (LSPs)", desc: "Freight forwarders, 3PL, and 4PL providers looking for end-to-end orchestration." },
                  { icon: Truck, title: "Transportation Service Providers (TSPs)", desc: "Trucking, air, rail, and water carriers, including specialized last-mile delivery providers." },
                  { icon: Package, title: "Courier Express Parcel (CEP)", desc: "B2B and B2C parcel services requiring high-speed sorting and tracking accuracy." },
                  { icon: Monitor, title: "Logistics Marketplaces", desc: "Digital platforms connecting T&L providers with buyers through seamless interaction." },
                  { icon: Code, title: "IT Product Companies", desc: "Software firms looking to build or scale innovative products for the T&L industry." },
                  { icon: Warehouse, title: "Enterprises with In-house Fleet", desc: "Non-logistics companies managing large internal teams and complex fleet operations." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 group ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${100 * idx}ms` }}
                  >
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                          <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* IT Solutions for T&L - Operations & Asset Management */}
      <div className="bg-white py-24 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                  <div className="lg:w-1/2">
                      <h2 className="text-4xl font-bold text-slate-900 mb-6">T&L Operations & Asset Management</h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          Optimize your core logistics activities with AI-powered analytics and real-time monitoring. We help you turn operational data into a competitive advantage.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                          <div className="flex gap-4">
                              <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                  <BarChart className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900">Advanced Analytics</h4>
                                  <p className="text-sm text-slate-600">AI-powered demand forecasting and risk management.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                  <Warehouse className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900">Warehouse Management</h4>
                                  <p className="text-sm text-slate-600">AR-enabled picking and RFID inventory monitoring.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                  <Navigation className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900">Transportation Mgmt</h4>
                                  <p className="text-sm text-slate-600">Optimal route planning and real-time shipment tracking.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                  <Truck className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900">Fleet Management</h4>
                                  <p className="text-sm text-slate-600">Predictive maintenance and driver behavior tracking.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                      <div className="rounded-3xl overflow-hidden shadow-2xl">
                          <img src="https://images.unsplash.com/photo-1504150559433-c4a5c36e26ce?auto=format&fit=crop&q=80&w=1000" alt="Logistics Operations" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                          <div className="text-4xl font-bold mb-1">10+ Years</div>
                          <div className="text-sm opacity-80">T&L Expertise</div>
                      </div>
                  </div>
              </div>

              {/* Business Management Section */}
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">Business Management for T&L</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto text-lg">Streamline your back-office and customer-facing operations with integrated digital solutions.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      { 
                        title: "Financial Accounting", 
                        icon: DollarSign, 
                        desc: "Automated bookkeeping and AI-powered forecasting of operational expenses to reveal key cost drivers." 
                      },
                      { 
                        title: "Spend Planning & Control", 
                        icon: ClipboardList, 
                        desc: "Real-time tracking of fuel, maintenance, and payroll costs with automated allocation to orders." 
                      },
                      { 
                        title: "Labor Management", 
                        icon: UserCheck, 
                        desc: "Automated task assignment and performance monitoring against KPIs for drivers and warehouse staff." 
                      },
                      { 
                        title: "CRM & Portals", 
                        icon: Handshake, 
                        desc: "Centralized customer data, document storage, and self-service portals for claims and interaction." 
                      },
                      { 
                        title: "Order Management", 
                        icon: ShoppingCart, 
                        desc: "Automated order aggregation, prioritization, and real-time fulfillment tracking across platforms." 
                      },
                      { 
                        title: "Vendor Management", 
                        icon: Users, 
                        desc: "Managing RFxs, e-auctions, and carrier performance monitoring with AI-enabled bid analysis." 
                      }
                  ].map((item, idx) => (
                      <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors group">
                          <item.icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                          <p className="text-slate-600">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Advanced Technology & Consulting */}
      <div className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-bold mb-8">Advanced Technology Consulting</h2>
                      <p className="text-blue-200 text-lg mb-10 leading-relaxed">
                          Our consultants advise on the strategic use of Cloud, Big Data, IoT, AI/ML, Blockchain, and AR/VR to drive efficiency and transparency.
                      </p>
                      <div className="space-y-4">
                          {[
                              "Route modeling and dynamic optimization",
                              "Predictive fleet maintenance powered by IoT",
                              "End-to-end traceability via Blockchain",
                              "Demand forecasting and spend planning",
                              "Advanced operational analytics & reporting"
                          ].map((text, i) => (
                              <div key={i} className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                  <span className="text-slate-300">{text}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                          <Cpu className="w-10 h-10 text-blue-400 mb-4" />
                          <h4 className="font-bold mb-2">IoT & Sensors</h4>
                          <p className="text-sm text-slate-400">Real-time condition monitoring.</p>
                      </div>
                      <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                          <Layers className="w-10 h-10 text-blue-400 mb-4" />
                          <h4 className="font-bold mb-2">Blockchain</h4>
                          <p className="text-sm text-slate-400">Secure multi-party transactions.</p>
                      </div>
                      <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                          <Smartphone className="w-10 h-10 text-blue-400 mb-4" />
                          <h4 className="font-bold mb-2">AR/VR</h4>
                          <p className="text-sm text-slate-400">Pick-by-vision & training.</p>
                      </div>
                      <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                          <Database className="w-10 h-10 text-blue-400 mb-4" />
                          <h4 className="font-bold mb-2">Big Data</h4>
                          <p className="text-sm text-slate-400">Deep operational insights.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Implementation Section */}
      <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                          <h2 className="text-4xl font-bold mb-6">T&L Solution Implementation</h2>
                          <p className="text-blue-100 text-lg mb-8">
                              From initial idea productization to continuous support, we handle the full lifecycle of your logistics software.
                          </p>
                          <ul className="space-y-4 mb-10">
                              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> Optimal architecture and tech stack design</li>
                              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> Project cost estimation and ROI calculation</li>
                              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> End-to-end software development and testing</li>
                              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"></div> Seamless system and hardware integration</li>
                          </ul>
                          <Link to="/contact" className="bg-white text-blue-600 font-bold py-4 px-10 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center">
                              Start Your Project <ArrowRight className="ml-2" />
                          </Link>
                      </div>
                      <div className="grid gap-6">
                          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                              <h4 className="font-bold text-xl mb-2">Product Consulting</h4>
                              <p className="text-blue-100">Idea productization, brand design, and interactive prototyping to launch winning solutions.</p>
                          </div>
                          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                              <h4 className="font-bold text-xl mb-2">Continuous Support</h4>
                              <p className="text-blue-100">Ongoing maintenance and evolution of your T&L solutions to meet changing market demands.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default LogisticsPage;