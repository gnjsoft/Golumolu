import React, { useEffect, useState } from 'react';
import { Terminal, Database, Brain, Code, ArrowRight, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const PythonPage: React.FC = () => {
  const [typed, setTyped] = useState('');
  const text = "print('Hello, Future!')";

  useEffect(() => {
    window.scrollTo(0, 0);
    let i = 0;
    const interval = setInterval(() => {
        setTyped(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#306998_1px,transparent_1px),linear-gradient(to_bottom,#306998_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFD43B] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Python <br/> <span className="text-[#FFD43B]">Development</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    The language of AI, Data Science, and rapid Web Development. Clean syntax, massive libraries, and endless possibilities.
                </p>
                <Link to="/contact" className="bg-[#306998] hover:bg-[#26537a] text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg inline-flex items-center">
                    Start Your Project <ArrowRight className="ml-2" />
                </Link>
            </div>
            
            <div className="md:w-1/2 w-full">
                <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-xs text-slate-400">main.py</span>
                    </div>
                    <div className="p-6 font-mono text-sm min-h-[200px]">
                        <div className="text-purple-400">import <span className="text-white">innovation</span></div>
                        <div className="text-purple-400">from <span className="text-white">gnj</span> import <span className="text-white">Solution</span></div>
                        <br/>
                        <div className="text-blue-400">def <span className="text-yellow-300">scale_business</span>():</div>
                        <div className="pl-4 text-green-400">"""Optimizing performance"""</div>
                        <div className="pl-4 text-white">app = Solution(ai=<span className="text-orange-300">True</span>)</div>
                        <div className="pl-4 text-white">return app.deploy()</div>
                        <br/>
                        <div className="text-white">
                            <span className="text-green-400">{">>>"}</span> {typed}<span className="animate-pulse">|</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                  { icon: Brain, title: "AI & ML", desc: "TensorFlow, PyTorch, Scikit-learn." },
                  { icon: Globe, title: "Web Dev", desc: "Django, Flask, FastAPI." },
                  { icon: Database, title: "Data Science", desc: "Pandas, NumPy, Matplotlib." },
                  { icon: Zap, title: "Automation", desc: "Scripting, ETL pipelines, RPA." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                      <item.icon className="w-10 h-10 text-[#306998] mb-4" />
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default PythonPage;