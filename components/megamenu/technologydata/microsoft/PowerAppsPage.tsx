import React, { useEffect, useState } from 'react';
import { Layers, Box, Smartphone, ArrowRight, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PowerAppsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#742774] text-white py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#b146c2] to-[#742774] opacity-90"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/30">
                  <Layers size={40} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Power Apps</h1>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10">
                  Build custom business apps that connect to your data and work across the web and mobile - without the high cost of custom development.
              </p>
              <Link to="/contact" className="bg-white text-[#742774] font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition-colors inline-flex items-center">
                  Start Building <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Low Code, High Impact</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      Empower your team to solve business problems with intuitive visual tools that don't require code. Connect to hundreds of data sources and extend with pro-developer extensibility.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded text-purple-700"><Smartphone size={20} /></div>
                          <span className="font-medium text-slate-800">Canvas Apps for pixel-perfect designs</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded text-purple-700"><Database size={20} /></div>
                          <span className="font-medium text-slate-800">Model-driven Apps for complex data models</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded text-purple-700"><Zap size={20} /></div>
                          <span className="font-medium text-slate-800">Power Automate integration for workflows</span>
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  <div className="absolute inset-0 bg-purple-200 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-purple-100">
                      <div className="h-8 bg-slate-100 rounded mb-4 w-1/3"></div>
                      <div className="space-y-3">
                          <div className="h-24 bg-purple-50 rounded-xl border border-purple-100"></div>
                          <div className="h-24 bg-purple-50 rounded-xl border border-purple-100"></div>
                          <div className="h-24 bg-purple-50 rounded-xl border border-purple-100"></div>
                      </div>
                      <div className="mt-6 flex justify-end">
                          <div className="h-10 w-24 bg-purple-600 rounded-lg"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default PowerAppsPage;