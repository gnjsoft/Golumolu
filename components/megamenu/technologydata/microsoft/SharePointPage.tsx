import React, { useEffect, useState } from 'react';
import { Share2, FileText, Users, Globe, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SharePointPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#0078D4] bg-opacity-10 text-slate-900 py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#0078D4] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-[#038387] opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
              <Share2 size={64} className="mx-auto text-[#038387] mb-6" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">SharePoint & M365</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                  Your mobile, intelligent intranet. Share and manage content, knowledge, and applications to empower teamwork.
              </p>
              <Link to="/contact" className="bg-[#038387] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#026b6e] transition-colors inline-flex items-center">
                  Build Your Intranet <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                  { icon: Globe, title: "Intranets", desc: "Hubs for news, communication, and culture." },
                  { icon: FileText, title: "Document Mgmt", desc: "Secure storage with versioning and co-authoring." },
                  { icon: Users, title: "Team Sites", desc: "Dedicated spaces for project collaboration." },
                  { icon: Shield, title: "Compliance", desc: "Enterprise-grade security and governance." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center">
                      <item.icon className="mx-auto text-[#0078D4] mb-4" size={32} />
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default SharePointPage;