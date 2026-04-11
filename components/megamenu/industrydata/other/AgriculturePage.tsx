import React, { useEffect, useState } from 'react';
import { 
  Leaf, Cloud, Cpu, Database, Map, 
  ShieldCheck, Droplets, Wind, Sun, 
  ArrowRight, CheckCircle2, Zap, 
  LineChart, Activity, Globe, Laptop,
  Search, Lightbulb, Code, Headphones,
  Navigation, Camera, Layers, Box
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AgriculturePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden bg-lime-950 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-lime-950/50 to-lime-950"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-3 rounded-full bg-lime-500/20 border border-lime-500/30 mb-6 backdrop-blur-sm">
                      <Leaf size={40} className="text-lime-400" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Agriculture Technology Ecosystem
              </h1>
              <p className={`text-xl text-lime-100/80 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  GnJ Worldwide helps agricultural companies and AgriTech startups create complete ecosystems of technologies around their agribusinesses. We make innovation easy, approachable, and valuable to farmers.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="bg-lime-500 text-white hover:bg-lime-400 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center group shadow-lg shadow-lime-500/20">
                      Innovate Your Farm <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </div>
      </div>

      {/* Core Ecosystem Technologies */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our AgriTech Technology Stack</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We co-create scalable and user-centric digital products by applying data analytics, location intelligence, and AI automation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  { 
                    icon: Cpu, 
                    title: "Internet of Things", 
                    desc: "Maximize the use of connected sensors across fields for data collection, deep insights, and improved crop management." 
                  },
                  { 
                    icon: Activity, 
                    title: "AI & Machine Learning", 
                    desc: "Apply advanced algorithms to obtain quality recommendations, project crop yields, and estimate product demand." 
                  },
                  { 
                    icon: Database, 
                    title: "Big Data & Analytics", 
                    desc: "Turn raw numbers from field sensors into strategic insights for real-time crop management and processing." 
                  },
                  { 
                    icon: Cloud, 
                    title: "Cloud & DevOps", 
                    desc: "Unleash the power of AWS, Azure, and Google Cloud platforms with our partner-level implementation experience." 
                  }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-14 h-14 bg-lime-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lime-600 transition-colors">
                          <item.icon className="w-7 h-7 text-lime-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Custom Software Development Section */}
      <div className="bg-slate-100 py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-4xl font-bold mb-4">Agriculture Custom Software Development</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Building competitive farming solutions that tackle the challenges of climate change and growing food demand.</p>
              </div>

              <div className="space-y-24">
                  {/* Traceability and Automation */}
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                      <div className="order-2 lg:order-1">
                          <div className="bg-lime-500/10 text-lime-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                              <Zap className="w-6 h-6" />
                          </div>
                          <h3 className="text-3xl font-bold mb-6">Traceability and Automation</h3>
                          <div className="space-y-6 text-slate-600 leading-relaxed">
                              <p>
                                  Smart agriculture software with AI offers farmers a path to widespread automation. Navigation systems can automatically guide machinery to collect crops based on weather and soil conditions.
                              </p>
                              <p>
                                  Blockchain technology brings security to the agriculture supply chain. We help implement distributed ledger technology to gain transparency and ensure traceability of product origins, detecting fraud and ensuring healthy products.
                              </p>
                          </div>
                          <div className="mt-8 grid grid-cols-2 gap-4">
                              {[
                                  "Autonomous Machinery",
                                  "Drone Field Monitoring",
                                  "Blockchain Traceability",
                                  "Smart Contracts",
                                  "Fraud Detection",
                                  "Automated Irrigation"
                              ].map((feature, i) => (
                                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                      <CheckCircle2 className="w-4 h-4 text-lime-500" />
                                      {feature}
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="order-1 lg:order-2">
                          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                              <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1000" alt="Smart Farming" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-lime-900/20 group-hover:bg-lime-900/0 transition-colors"></div>
                          </div>
                      </div>
                  </div>

                  {/* Mapping and GIS */}
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                      <div className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-slate-200">
                          <div className="relative rounded-[2rem] overflow-hidden aspect-video">
                              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" alt="GIS Mapping" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-tr from-lime-900/40 to-transparent"></div>
                              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                                  <div className="flex items-center gap-3">
                                      <Navigation className="text-lime-600" size={20} />
                                      <span className="font-bold text-slate-900">Precision Mapping</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className="bg-lime-500/10 text-lime-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                              <Map className="w-6 h-6" />
                          </div>
                          <h3 className="text-3xl font-bold mb-6">Mapping and GIS Solutions</h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">
                              Farming relies on location and geographical data. Application of GIS lets AgriTech companies conduct spatial analysis of farmlands and create detailed visual representations for data-driven decisions.
                          </p>
                          <ul className="space-y-4">
                              {[
                                  { title: "Soil Erosion Detection", desc: "Identify early signs of erosion to protect land value." },
                                  { title: "Crop Yield Estimates", desc: "Make precise estimates based on spatial analysis." },
                                  { title: "Risk Assessment", desc: "Secure farms against floods, wildfires, and droughts." },
                                  { title: "Navigation Systems", desc: "Accurate maps for farm fields and soil moisture." }
                              ].map((item, i) => (
                                  <li key={i} className="flex gap-4">
                                      <div className="shrink-0 w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 mt-1">
                                          <CheckCircle2 size={14} />
                                      </div>
                                      <div>
                                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                                          <p className="text-sm text-slate-500">{item.desc}</p>
                                      </div>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>

                  {/* Sensors and Irrigation */}
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                      <div className="order-2 lg:order-1">
                          <div className="bg-lime-500/10 text-lime-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                              <Droplets className="w-6 h-6" />
                          </div>
                          <h3 className="text-3xl font-bold mb-6">Agriculture Sensors & Irrigation</h3>
                          <p className="text-slate-600 mb-8 leading-relaxed">
                              IoT agriculture software solutions provide plenty of opportunities to collect data on crops, soil, and weather conditions. We help farmers solve challenges in various business areas through remote sensing and smart irrigation.
                          </p>
                          <div className="space-y-4">
                              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-lime-500 transition-colors">
                                  <h4 className="font-bold mb-2 flex items-center gap-2">
                                      <Activity className="text-lime-500 w-5 h-5" /> Smart Irrigation
                                  </h4>
                                  <p className="text-sm text-slate-500">Watering systems use soil parameters collected by IoT sensors to plan irrigation and use resources wisely.</p>
                              </div>
                              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-lime-500 transition-colors">
                                  <h4 className="font-bold mb-2 flex items-center gap-2">
                                      <LineChart className="text-lime-500 w-5 h-5" /> Soil Monitoring
                                  </h4>
                                  <p className="text-sm text-slate-500">Systems powered by machine learning and location-based services to reduce operational expenses and optimize yields.</p>
                              </div>
                          </div>
                      </div>
                      <div className="order-1 lg:order-2 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
                          <div className="grid grid-cols-2 gap-4">
                              <div className="aspect-square rounded-2xl overflow-hidden">
                                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=500" alt="Sensor 1" className="w-full h-full object-cover" />
                              </div>
                              <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                                  <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=500" alt="Sensor 2" className="w-full h-full object-cover" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-lime-600 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                  <h2 className="text-4xl font-bold mb-6">Ready to Scale Your AgriTech Innovation?</h2>
                  <p className="text-lime-100 text-lg mb-10 max-w-2xl mx-auto">
                      We help AgriTech providers validate ideas as early as possible by developing proofs of concept and getting market feedback.
                  </p>
                  <Link to="/contact" className="bg-white text-lime-600 font-bold py-4 px-10 rounded-xl hover:bg-lime-50 transition-all inline-flex items-center shadow-xl">
                      Start Your AgriTech Journey <ArrowRight className="ml-2" />
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AgriculturePage;
