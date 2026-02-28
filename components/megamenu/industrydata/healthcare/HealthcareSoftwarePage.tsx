import React, { useEffect, useState } from 'react';
import { Code2, Cloud, Zap, ArrowRight, Terminal, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcareSoftwarePage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block p-3 bg-blue-100 rounded-lg text-blue-700 mb-6">
                  <Terminal size={32} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Engineering for HealthTech</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  We partner with healthcare software vendors (ISVs) to accelerate product development, ensure compliance, and achieve market success.
              </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
              <div className={`bg-white p-10 rounded-3xl shadow-xl border border-slate-100 transition-all duration-700 delay-200 transform ${visible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                      <Code2 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">New Product Development</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                      From MVP to enterprise scale, our engineering teams act as an extension of your own. We specialize in FHIR, HL7, DICOM standards, and HIPAA-compliant architecture.
                  </p>
                  <div className="flex gap-4 text-sm font-bold text-blue-700">
                      <span className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-md"><Zap size={14}/> Agile</span>
                      <span className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-md"><Cloud size={14}/> Cloud Native</span>
                  </div>
              </div>

              <div className={`bg-slate-900 text-white p-10 rounded-3xl shadow-2xl transition-all duration-700 delay-400 transform ${visible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-6">
                      <Server size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Legacy Modernization</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed">
                      Refactor your legacy healthcare applications to modern microservices architectures. Improve scalability and performance without disrupting client operations.
                  </p>
                  <Link to="/contact" className="inline-flex items-center text-white font-bold border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                      Consult an Architect <ArrowRight className="ml-2" size={16} />
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HealthcareSoftwarePage;