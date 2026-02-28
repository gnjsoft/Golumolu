import React, { useEffect, useState } from 'react';
import { Database, TrendingUp, Microscope, Share2, FileCode, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataSciencePage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-[#0f172a] text-white py-24 px-4 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
             <div>
                 <h1 className="text-5xl md:text-7xl font-bold mb-6">Data <span className="text-blue-500">Science</span></h1>
                 <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                     Extract actionable insights from noise. We combine statistics, scientific methods, and data analysis to solve complex business problems.
                 </p>
                 <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-500 transition-colors">
                     Consult a Data Scientist <ArrowRight className="ml-2" />
                 </Link>
             </div>
             <div className="relative">
                 <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
                 <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl relative z-10">
                     <div className="font-mono text-sm text-green-400 space-y-2">
                         <p>import pandas as pd</p>
                         <p>import numpy as np</p>
                         <p className="text-slate-400"># Analyze dataset</p>
                         <p>df = pd.read_csv('enterprise_data.csv')</p>
                         <p>model = GnJ_Predictor()</p>
                         <p>model.fit(df)</p>
                         <p className="text-yellow-400">{" >> Accuracy: 99.8%"}</p>
                     </div>
                 </div>
             </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-12">
              {[
                  { icon: Microscope, title: "Exploratory Analysis", desc: "Discovering patterns, anomalies, and correlations within large datasets." },
                  { icon: TrendingUp, title: "Predictive Modeling", desc: "Forecasting future trends using regression, classification, and clustering." },
                  { icon: Share2, title: "Data Visualization", desc: "Communicating complex findings through intuitive, interactive dashboards." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-blue-200 transition-all group">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default DataSciencePage;