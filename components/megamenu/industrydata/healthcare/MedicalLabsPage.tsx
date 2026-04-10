import React, { useEffect, useState } from 'react';
import { FlaskConical, Database, Share2, ArrowRight, ClipboardCheck, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicalLabsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="inline-flex items-center gap-2 p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-700 mb-8">
                  <Microscope size={24} />
                  <span className="font-bold text-sm uppercase tracking-wide">Precision Diagnostics</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Laboratory Information <br/> <span className="text-indigo-600">Systems (LIS)</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Streamline your lab workflow from order entry to result reporting. We build custom LIS solutions that integrate seamlessly with analyzers, EHRs, and billing systems.
              </p>
              
              <div className="space-y-6 mb-10">
                  {[
                      { icon: Database, title: "Sample Tracking", text: "End-to-end chain of custody with barcode/RFID." },
                      { icon: Share2, title: "Automated Reporting", text: "Instant delivery of results to physicians and portals." },
                      { icon: FlaskConical, title: "Quality Control", text: "Integrated QC modules to ensure compliance." }
                  ].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                          <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600 shrink-0">
                              <feat.icon size={20} />
                          </div>
                          <div>
                              <h4 className="font-bold text-slate-900">{feat.title}</h4>
                              <p className="text-sm text-slate-500">{feat.text}</p>
                          </div>
                      </div>
                  ))}
              </div>

              <Link to="/contact" className="text-white bg-indigo-600 hover:bg-indigo-700 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all inline-flex items-center">
                  Optimize Your Lab <ArrowRight className="ml-2" />
              </Link>
          </div>

          <div className={`relative h-[600px] bg-indigo-50 rounded-[3rem] overflow-hidden flex items-center justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000" 
                className="relative w-full h-full object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-700" 
                alt="Lab Technician" 
              />
              <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                  <div className="flex items-center gap-4 mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="font-bold text-indigo-900">System Status: Online</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full mb-1 overflow-hidden">
                      <div className="bg-indigo-500 h-full w-3/4 animate-[shimmer_2s_infinite]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                      <span>Processing Samples...</span>
                      <span>75%</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MedicalLabsPage;