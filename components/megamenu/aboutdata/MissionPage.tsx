import React, { useEffect, useState } from 'react';
import { Target, Eye, Heart, Zap, Shield, Users, Globe2, Leaf } from 'lucide-react';

const MissionPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const values = [
    { icon: Heart, title: "Integrity", desc: "We uphold the highest standards of integrity in all our actions." },
    { icon: Users, title: "Collaboration", desc: "We work together, across boundaries, to meet the needs of our customers." },
    { icon: Zap, title: "Innovation", desc: "We constantly strive to redefine the standard of excellence in everything we do." },
    { icon: Shield, title: "Accountability", desc: "We are personally accountable for delivering on our commitments." },
  ];

  const milestones = [
    { year: "2025", title: "Inception", desc: "GnJ Worldwide was founded in Mumbai with a vision to redefine digital transformation." },
    { year: "2026", title: "Global Reach", desc: "Expanded operations to serve clients across three continents in our first year." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero */}
      <div className="relative bg-slate-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=2069')] bg-cover bg-center opacity-20"></div>
        <div className={`relative z-10 max-w-7xl mx-auto text-center transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Our Purpose</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">Mission & Vision</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Driving digital transformation with purpose, passion, and precision.
            </p>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
            <div className={`bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-1000 delay-300 relative overflow-hidden group ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <Target size={150} />
                </div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <Target size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        To empower businesses globally by delivering innovative, scalable, and secure technology solutions that drive growth and operational excellence. We are dedicated to bridging the gap between complex challenges and simple, effective digital outcomes.
                    </p>
                </div>
            </div>

            <div className={`bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-1000 delay-500 relative overflow-hidden group ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <Eye size={150} />
                </div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                        <Eye size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        To be the world's most trusted partner in technology innovation, recognized for our commitment to quality, client success, and fostering a culture of continuous learning and improvement.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="bg-white py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-opacity duration-1000 delay-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
               <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="relative">
               {/* Line */}
               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
               
               <div className="space-y-12">
                  {milestones.map((item, idx) => (
                     <div key={idx} className={`flex flex-col md:flex-row items-center justify-between transition-all duration-700 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${800 + (idx * 150)}ms` }}>
                        <div className="w-full md:w-5/12"></div>
                        <div className="z-10 bg-white border-4 border-blue-50 rounded-full w-12 h-12 flex items-center justify-center shadow-md mb-4 md:mb-0">
                           <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                        </div>
                        <div className="w-full md:w-5/12 text-center md:text-left">
                           <div className={`bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                              <span className="text-blue-600 font-bold text-xl block mb-2">{item.year}</span>
                              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-slate-600 text-sm">{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((item, idx) => (
                    <div key={idx} className={`bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${1000 + (idx * 100)}ms` }}>
                        <item.icon className="w-10 h-10 text-yellow-400 mb-4" />
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Sustainability / CSR */}
      <div className="py-24 bg-green-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
                     <Leaf size={16} /> Sustainability
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Committed to a Greener Future</h2>
                  <p className="text-lg text-slate-700 mb-6">
                     We believe technology should enable progress without compromising the planet. Our data centers are optimized for energy efficiency, and we actively support reforestation projects in the regions where we operate.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700"><Globe2 size={14}/></div>
                        Carbon Neutral Operations by 2030
                     </li>
                     <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700"><Leaf size={14}/></div>
                        Paperless Office Initiatives
                     </li>
                     <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-green-700"><Users size={14}/></div>
                        Community Tech Education Programs
                     </li>
                  </ul>
               </div>
               <div className={`relative rounded-3xl overflow-hidden shadow-2xl h-[400px] transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2026" alt="Nature and Tech" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MissionPage;