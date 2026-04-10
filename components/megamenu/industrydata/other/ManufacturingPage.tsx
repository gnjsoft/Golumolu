import React, { useEffect, useState } from 'react';
import { Factory, Cog, Cpu, Truck, BarChart3, ArrowRight, Layers, Lightbulb, Code, RefreshCw, ShieldCheck, Settings, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManufacturingPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-orange-600 text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-multiply"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 border border-orange-400 bg-orange-700/50 px-4 py-1 rounded-full text-sm font-bold mb-6">
                      <Factory size={16} /> Industry 4.0
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Smart <br/>Manufacturing</h1>
                  <p className="text-xl text-orange-100 mb-8 max-w-lg">
                      Connecting machines, data, and people. innovative IIoT solutions to optimize production lines and predict maintenance.
                  </p>
                  <Link to="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors inline-flex items-center shadow-lg">
                      Modernize Your Plant <ArrowRight className="ml-2" />
                  </Link>
              </div>
              
              <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="relative w-80 h-80">
                      <Cog size={200} className="text-orange-300 absolute top-0 left-0 animate-[spin_10s_linear_infinite]" />
                      <Cog size={140} className="text-white/20 absolute bottom-4 right-4 animate-[spin_8s_linear_infinite_reverse]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center">
                              <div className="text-3xl font-bold">85%</div>
                              <div className="text-sm">OEE Score</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Industry 4.0 Technologies</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Leveraging advanced technologies to bring your manufacturing processes into the digital age.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Cpu, title: "Industrial IoT", desc: "Sensor integration for real-time machine monitoring and data collection." },
                  { icon: Layers, title: "Digital Twins", desc: "Virtual replicas of physical systems to simulate and optimize performance." },
                  { icon: Truck, title: "Supply Chain Visibility", desc: "End-to-end tracking of raw materials and finished goods." },
                  { icon: BarChart3, title: "Predictive Maintenance", desc: "AI algorithms that forecast equipment failures before they occur." },
                  { icon: Factory, title: "MES Implementation", desc: "Manufacturing Execution Systems to control production workflows." },
                  { icon: Cog, title: "Automation", desc: "Robotics process automation (RPA) for back-office and floor operations." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-700 group hover:-translate-y-1 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <item.icon className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* New Section: IT Services and Solutions for Manufacturing */}
      <div className="bg-white py-24 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto mb-20">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">IT Services and Solutions for Manufacturing</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      IT services for manufacturing are a way for manufacturers to digitally transform their business operations and ensure high quality, robust security, and seamless operation of their enterprise systems.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                      With over a decade of experience in developing software for the manufacturing industry, GnJ Worldwide offers robust solutions and related services to support and modernize your enterprise’s operations. We ensure increased efficiency and optimized business costs, all without IT budget overruns.
                  </p>
              </div>

              <div className="mb-16 text-center">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Full-Cycle IT Services</h3>
                  <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                      GnJ Worldwide provides full-cycle IT services to help manufacturers design, build, revamp, and maintain their enterprise solutions, as well as implement cutting-edge Industry 4.0 technologies to embrace digital manufacturing process transformation.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Service 1 */}
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col">
                      <Lightbulb className="w-12 h-12 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">IT Strategy Consulting</h4>
                      <p className="text-slate-600 mb-6 font-medium">We advise you on how to:</p>
                      <ul className="space-y-3 text-slate-600 mb-8 flex-grow">
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Increase ROA via equipment effectiveness optimization and predictive maintenance.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Improve flexibility via M2M integration and smart automation.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Reduce costs and improve productivity via AI-based optimization.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Achieve compliance with OSHA, EPA, FDA, NIST, CPSC, and CMMC.</li>
                      </ul>
                      <Link to="/contact" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center mt-auto">I'm interested <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col">
                      <Code className="w-12 h-12 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">Solution Consulting & Development</h4>
                      <p className="text-slate-600 mb-6 font-medium">We help you:</p>
                      <ul className="space-y-3 text-slate-600 mb-8 flex-grow">
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Design optimal functionality, architecture, and tech stack.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Accurately plan your software development project.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Reduce implementation and operational costs.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Ensure seamless user adoption with end-to-end development and maintenance.</li>
                      </ul>
                      <Link to="/contact" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center mt-auto">I'm interested <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </div>

                  {/* Service 3 */}
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col">
                      <RefreshCw className="w-12 h-12 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">Software Modernization</h4>
                      <p className="text-slate-600 mb-6 font-medium">Upgrade promptly with minimal disruption. We perform:</p>
                      <ul className="space-y-3 text-slate-600 mb-8 flex-grow">
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Seamless migration to the cloud.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Software rearchitecting, recoding, and re-engineering.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Tech stack modernization and UX/UI revamps.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Software evolution with advanced Industry 4.0 features.</li>
                      </ul>
                      <Link to="/contact" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center mt-auto">I'm interested <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </div>

                  {/* Service 4 */}
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col">
                      <ShieldCheck className="w-12 h-12 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">QA & Information Security</h4>
                      <p className="text-slate-600 mb-6 font-medium">IT outsourcing for critical functions:</p>
                      <ul className="space-y-3 text-slate-600 mb-8 flex-grow">
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Comprehensive testing (functional, performance, security).</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Software audits and thorough code reviews.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Network protection (DDoS, SIEM, IDS/IPS, SOAR, EDR).</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Vulnerability assessment, IAM, and data backup/recovery.</li>
                      </ul>
                      <Link to="/contact" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center mt-auto">I'm interested <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </div>

                  {/* Service 5 */}
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col">
                      <Settings className="w-12 h-12 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">Managed IT Services</h4>
                      <p className="text-slate-600 mb-6 font-medium">We manage your IT-driven business processes:</p>
                      <ul className="space-y-3 text-slate-600 mb-8 flex-grow">
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Managed infrastructure and security services.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> IT automation and continuous application support.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Comprehensive L1–L3 IT help desk.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Data management and managed data analytics.</li>
                      </ul>
                      <Link to="/contact" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center mt-auto">I'm interested <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </div>

                  {/* Service 6 */}
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col">
                      <Users className="w-12 h-12 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">IT Staff Augmentation</h4>
                      <p className="text-slate-600 mb-6 font-medium">Experts with manufacturing-specific knowledge:</p>
                      <ul className="space-y-3 text-slate-600 mb-8 flex-grow">
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Developers (Java, .NET, Python, PHP, C++, and more).</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Architects (Enterprise, Manufacturing IoT, Blockchain).</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> Testers for manual and automated testing.</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" /> DevOps engineers, Data analysts, and Data scientists.</li>
                      </ul>
                      <Link to="/contact" className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center mt-auto">I'm interested <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ManufacturingPage;