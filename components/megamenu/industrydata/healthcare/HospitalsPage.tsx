import React, { useEffect, useState } from 'react';
import { Building2, Users, Clock, HeartPulse, ArrowRight, CalendarCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const HospitalsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      {/* Hero */}
      <div className="bg-blue-900 text-white py-24 px-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 skew-x-12 transform origin-top-right"></div>
          
          <div className={`relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                      <Building2 size={14} /> Hospital Management
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                      Smart Systems for <br/> <span className="text-blue-400">Better Care</span>
                  </h1>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                      Integrated Hospital Management Information Systems (HMIS) that streamline operations, improve patient flow, and enhance clinical outcomes.
                  </p>
                  <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center w-fit">
                      Digitize Your Hospital <ArrowRight className="ml-2" size={20} />
                  </Link>
              </div>
              
              {/* Visual */}
              <div className="md:w-1/2 flex justify-center relative">
                  <div className="relative bg-white p-6 rounded-3xl shadow-2xl w-80 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                              <HeartPulse size={24} />
                          </div>
                          <div>
                              <div className="font-bold text-slate-900">ICU Capacity</div>
                              <div className="text-sm text-slate-500">Live Monitor</div>
                          </div>
                      </div>
                      <div className="space-y-3">
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 w-3/4"></div>
                          </div>
                          <div className="flex justify-between text-xs font-bold text-slate-600">
                              <span>Occupied: 75%</span>
                              <span>Free: 25%</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Modules</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Users, title: "Patient Registration", desc: "Fast-track admissions and discharge processes with digital forms and queue management." },
                  { icon: CalendarCheck, title: "Appointment Scheduling", desc: "Intelligent booking system for OPD and specialty clinics ensuring optimal doctor utilization." },
                  { icon: Stethoscope, title: "Clinical Workbench", desc: "Unified dashboard for doctors to view history, vitals, and prescribe medication electronically." },
                  { icon: Clock, title: "OT Management", desc: "Efficient scheduling of operation theaters, staff, and equipment to reduce wait times." },
                  { icon: Building2, title: "Ward Management", desc: "Real-time bed tracking and nursing station integration for improved inpatient care." },
                  { icon: HeartPulse, title: "Emergency Response", desc: "Rapid triage protocols and ambulance integration for critical care situations." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group transform ${active ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default HospitalsPage;