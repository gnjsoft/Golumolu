import React, { useEffect, useState } from 'react';
import { AppWindow, Layers, RefreshCw, Settings, ArrowRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationServicesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
          <div className="inline-block p-4 bg-white/5 rounded-2xl mb-6">
              <AppWindow size={48} className="text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Application Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              End-to-end management of your application portfolio. From deployment to retirement.
          </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Layers, title: "Application Management", desc: "Ongoing monitoring and management to ensure availability and performance." },
                  { icon: RefreshCw, title: "Modernization", desc: "Updating legacy apps with modern frameworks and cloud-native architectures." },
                  { icon: Settings, title: "Integration", desc: "Connecting disparate applications via APIs to create a unified ecosystem." },
                  { icon: Code, title: "Custom Development", desc: "Building extensions and add-ons to enhance existing software capabilities." },
                  { icon: AppWindow, title: "Portfolio Analysis", desc: "Assessing your current software stack for redundancy and cost optimization." },
                  { icon: Layers, title: "Cloud Migration", desc: "Moving on-premise applications to AWS, Azure, or Google Cloud." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                      <item.icon className="w-10 h-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      <div className="bg-purple-50 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Optimize your app portfolio</h2>
              <Link to="/contact" className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center">
                  Consult an Expert <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>
    </div>
  );
};

export default ApplicationServicesPage;