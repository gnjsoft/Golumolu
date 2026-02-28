import React, { useEffect, useState } from 'react';
import { HardHat, Ruler, Truck, ShieldAlert, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConstructionPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-yellow-500 text-slate-900 py-24 px-4 text-center">
          <div className={`transition-all duration-1000 ${active ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-12'}`}>
              <HardHat size={64} className="mx-auto mb-6 opacity-80" />
          </div>
          <div className={`transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Construction Tech</h1>
              <p className="text-xl max-w-2xl mx-auto font-medium">
                  Building Information Modeling (BIM), project management, and safety solutions for the modern job site.
              </p>
          </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Ruler, title: "BIM Integration", desc: "Collaborative 3D model sharing and markup tools." },
                  { icon: Truck, title: "Equipment Tracking", desc: "GPS and telematics for heavy machinery management." },
                  { icon: ShieldAlert, title: "Safety & Compliance", desc: "Digital incident reporting and safety checklist apps." },
                  { icon: FileText, title: "Project Management", desc: "Real-time scheduling, budgeting, and document control." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-xl shadow-sm border-l-4 border-yellow-500 hover:shadow-lg transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${400 + (idx * 150)}ms` }}
                  >
                      <item.icon className="w-10 h-10 text-slate-800 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
              
              <div className={`bg-slate-900 text-white p-8 rounded-xl flex flex-col justify-center items-center text-center col-span-1 md:col-span-2 lg:col-span-2 transition-all duration-1000 delay-[1000ms] ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <h3 className="text-2xl font-bold mb-4">Build Smarter. Build Faster.</h3>
                  <Link to="/contact" className="inline-flex items-center bg-yellow-500 text-slate-900 font-bold py-3 px-8 rounded hover:bg-yellow-400 transition-colors">
                      Get a Consultation <ArrowRight className="ml-2" />
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ConstructionPage;