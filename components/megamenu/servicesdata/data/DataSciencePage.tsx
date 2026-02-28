import React, { useEffect, useState } from 'react';
import { Atom, Network, Microscope, ArrowRight, Dna, FlaskConical } from 'lucide-react';
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

          {/* Process Section */}
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