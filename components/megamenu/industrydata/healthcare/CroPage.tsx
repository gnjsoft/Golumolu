import React, { useEffect, useState } from 'react';
import { FileText, Users, Globe, ArrowRight, Search, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CroPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className={`text-center mb-20 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6 text-blue-600">
                  <Search size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Clinical Trial Management</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Accelerate research with advanced CTMS solutions. Manage multi-site trials, patient recruitment, and regulatory data efficiently.
              </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: FileText, title: "eTMF Systems", desc: "Electronic Trial Master File management. Secure, searchable, and compliant with 21 CFR Part 11.", delay: 200 },
                  { icon: Users, title: "Patient Recruitment", desc: "AI-driven platforms to identify, screen, and enroll suitable candidates faster than traditional methods.", delay: 400 },
                  { icon: Globe, title: "Decentralized Trials", desc: "Remote data capture (ePRO/eCOA) tools enabling patient participation from anywhere in the world.", delay: 600 }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-500 transform ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                          <item.icon size={28} />
                      </div>
                      <h3 className="font-bold text-2xl text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                      <div className="h-1 w-12 bg-slate-100 rounded-full"></div>
                  </div>
              ))}
          </div>

          <div className={`mt-24 bg-white rounded-3xl p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border-l-8 border-blue-600 transition-all duration-1000 delay-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to modernize your trials?</h3>
                  <p className="text-slate-600">Get a demo of our clinical research technology suite.</p>
              </div>
              <Link to="/contact" className="bg-blue-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  Request Demo <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>
    </div>
  );
};

export default CroPage;