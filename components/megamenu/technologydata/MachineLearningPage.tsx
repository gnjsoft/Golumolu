import React, { useEffect, useState } from 'react';
import { BrainCircuit, GitBranch, Zap, ArrowRight, Layers, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const MachineLearningPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-900 text-white py-24 px-4 text-center">
          <BrainCircuit size={64} className="mx-auto text-indigo-300 mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Machine Learning</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
              Systems that learn from data, identify patterns, and make decisions with minimal human intervention.
          </p>
          <Link to="/contact" className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors">
              Start Your ML Project
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12">
              {[
                  { icon: Layers, title: "Neural Networks", desc: "Deep learning models inspired by the human brain for image and speech recognition." },
                  { icon: GitBranch, title: "Decision Trees", desc: "Predictive models for classification and regression tasks in finance and operations." },
                  { icon: Bot, title: "Reinforcement Learning", desc: "Algorithms that learn optimal actions through trial and error to maximize rewards." },
                  { icon: Zap, title: "MLOps", desc: "Streamlining the deployment, monitoring, and management of machine learning models in production." }
              ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
                      <div className="shrink-0">
                          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                              <item.icon size={24} />
                          </div>
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-slate-600">{item.desc}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default MachineLearningPage;