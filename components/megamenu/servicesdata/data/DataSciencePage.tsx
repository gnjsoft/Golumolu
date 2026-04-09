import React, { useEffect, useState } from 'react';
import { Atom, Network, Microscope, ArrowRight, Dna, FlaskConical, Database, Search, Cpu, LineChart, ShieldCheck, Settings, BrainCircuit, Rocket, TrendingUp, LifeBuoy, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataSciencePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Abstract Science Hero */}
      <div className="relative py-32 px-4 overflow-hidden bg-slate-900 text-white">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1974" 
                alt="Abstract Network" 
                className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-slate-900"></div>
         </div>

         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
             <div className={`mb-6 flex justify-center transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                 <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <Atom size={48} className="text-indigo-300 animate-spin-slow" />
                 </div>
             </div>
             <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                 Data Science <span className="text-indigo-400">Lab</span>
             </h1>
             <p className={`text-xl text-indigo-100 max-w-2xl mx-auto transition-all duration-700 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                 Applying scientific methods, processes, and algorithms to extract knowledge and insights from structured and unstructured data.
             </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-12">
              {[
                  { icon: Microscope, title: "Exploratory Analysis", desc: "Deep dive into your data to discover patterns, anomalies, and correlations." },
                  { icon: Network, title: "Complex Modeling", desc: "Building sophisticated statistical models to solve intricate business problems." },
                  { icon: Dna, title: "Feature Engineering", desc: "Transforming raw data into features that better represent the underlying problem." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl border border-slate-100 hover:border-indigo-200 transition-all duration-700 hover:-translate-y-3 group ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${400 + (idx * 200)}ms` }}
                  >
                      <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                          <item.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">{item.title}</h3>
                      <p className="text-slate-600 text-center leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>

          {/* Our Process Section */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Data Science Process</h2>
                  <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                      A rigorous, scientific approach to ensure your data initiatives deliver measurable business value.
                  </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-100 -z-10 transform -translate-y-1/2"></div>
                  
                  {[
                      { step: "01", title: "Discovery", desc: "Understanding your business goals, data landscape, and defining the problem.", icon: Search },
                      { step: "02", title: "Data Preparation", desc: "Cleaning, transforming, and engineering features for optimal model performance.", icon: Database },
                      { step: "03", title: "Modeling", desc: "Training, testing, and tuning machine learning algorithms to find the best fit.", icon: BrainCircuit },
                      { step: "04", title: "Deployment", desc: "Integrating the model into production systems and monitoring its performance.", icon: Cpu }
                  ].map((item, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative group hover:-translate-y-2 transition-all duration-300">
                          <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg absolute -top-6 left-1/2 transform -translate-x-1/2 border-4 border-white group-hover:scale-110 transition-transform">
                              {item.step}
                          </div>
                          <div className="mt-6 text-center">
                              <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                  <item.icon size={24} />
                              </div>
                              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-slate-600 text-sm">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Use Cases Section */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real-World Use Cases</h2>
                  <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { title: "Predictive Maintenance", desc: "Forecast equipment failures before they happen, minimizing downtime and saving costs.", icon: Settings },
                      { title: "Customer Churn Prediction", desc: "Identify at-risk customers and take proactive measures to improve retention.", icon: LineChart },
                      { title: "Fraud Detection", desc: "Detect anomalous patterns in real-time to prevent financial loss and secure transactions.", icon: ShieldCheck }
                  ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-indigo-50 transition-colors duration-300 group">
                          <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                  <item.icon size={24} />
                              </div>
                          </div>
                          <div>
                              <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* End-to-End Services Section */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">End-to-End Data Science Services</h2>
                  <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
                  <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                      We partner with you throughout the entire lifecycle of your data science initiatives.
                  </p>
              </div>
              
              <div className="space-y-24">
                  {/* Implementation */}
                  <div className="flex flex-col md:flex-row items-center gap-12">
                      <div className="md:w-1/2">
                          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                              <Rocket size={32} />
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900 mb-4">Data Science Solution Implementation</h3>
                          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                              From proof-of-concept to production-ready deployment, we build scalable and robust data science solutions tailored to your infrastructure. We ensure seamless integration with your existing systems.
                          </p>
                          <ul className="space-y-4">
                              {["Custom Model Development & Training", "MLOps & CI/CD Pipeline Setup", "Cloud Infrastructure Deployment (AWS, GCP, Azure)", "API Integration & Frontend Connectivity"].map((point, i) => (
                                  <li key={i} className="flex items-center text-slate-700 font-medium">
                                      <CheckCircle2 className="text-indigo-500 mr-3 flex-shrink-0" size={20} />
                                      {point}
                                  </li>
                              ))}
                          </ul>
                      </div>
                      <div className="md:w-1/2 w-full bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-200 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Implementation" className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-80" />
                      </div>
                  </div>

                  {/* Evolution */}
                  <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                      <div className="md:w-1/2">
                          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                              <TrendingUp size={32} />
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900 mb-4">Data Science Evolution</h3>
                          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                              Continuously improve and adapt your models with new data, advanced algorithms, and evolving business requirements to maintain a competitive edge.
                          </p>
                          <ul className="space-y-4">
                              {["Continuous Model Retraining", "Integration of New Data Sources", "Algorithm Upgrades & Optimization", "Scaling Infrastructure for Big Data"].map((point, i) => (
                                  <li key={i} className="flex items-center text-slate-700 font-medium">
                                      <CheckCircle2 className="text-indigo-500 mr-3 flex-shrink-0" size={20} />
                                      {point}
                                  </li>
                              ))}
                          </ul>
                      </div>
                      <div className="md:w-1/2 w-full bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 relative overflow-hidden group">
                          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" alt="Evolution" className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-80" />
                      </div>
                  </div>

                  {/* Support */}
                  <div className="flex flex-col md:flex-row items-center gap-12">
                      <div className="md:w-1/2">
                          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                              <LifeBuoy size={32} />
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900 mb-4">Data Science Solution Support</h3>
                          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                              Ongoing monitoring, maintenance, and troubleshooting to ensure your models remain accurate, performant, and reliable over time.
                          </p>
                          <ul className="space-y-4">
                              {["24/7 Model Monitoring & Alerting", "Data Drift & Concept Drift Detection", "Performance Reporting & Dashboards", "Security Patching & Compliance Audits"].map((point, i) => (
                                  <li key={i} className="flex items-center text-slate-700 font-medium">
                                      <CheckCircle2 className="text-indigo-500 mr-3 flex-shrink-0" size={20} />
                                      {point}
                                  </li>
                              ))}
                          </ul>
                      </div>
                      <div className="md:w-1/2 w-full bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 relative overflow-hidden group">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" alt="Support" className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-80" />
                      </div>
                  </div>
              </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-indigo-900 rounded-3xl p-12 relative overflow-hidden">
                  {/* Decorative blobs */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-50"></div>
                  
                  <div className="relative z-10 text-white md:w-1/2">
                      <h2 className="text-3xl font-bold mb-4">Ready to experiment?</h2>
                      <p className="text-indigo-200 text-lg mb-8">
                          Our data scientists act as an extension of your R&D team. We test hypotheses, validate models, and deploy solutions that work in the real world.
                      </p>
                      <Link to="/contact" className="inline-flex items-center bg-white text-indigo-900 font-bold py-3 px-8 rounded-lg hover:bg-indigo-50 transition-colors">
                          Hire Data Scientists <FlaskConical className="ml-2" size={20} />
                      </Link>
                  </div>
                  <div className="relative z-10 md:w-1/2 flex justify-center">
                      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                          <div className="flex items-center gap-4 mb-4">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                          <div className="font-mono text-sm text-indigo-200">
                              <div>import pandas as pd</div>
                              <div>import numpy as np</div>
                              <div className="mt-2">model = GnJ_Model()</div>
                              <div>model.train(data)</div>
                              <div className="text-green-400 mt-2"># Accuracy: 99.8%</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DataSciencePage;