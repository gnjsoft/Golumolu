import React, { useEffect, useState } from 'react';
import { Rocket, ArrowRight, Zap, RefreshCw, Layers, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalTransformationPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setActive(true), 100);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-x-hidden">
      {/* Hero */}
      <div className={`bg-[#4338ca] text-white py-24 px-4 text-center relative transition-all duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-indigo-400/30 rounded-full transition-transform duration-[2s] ${active ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-400/30 rounded-full transition-transform duration-[2s] delay-100 ${active ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
        </div>
        
        <div className="relative z-10">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-transform duration-700 ${active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Digital Transformation
            </h1>
            <p className={`text-xl text-indigo-100 max-w-2xl mx-auto transition-transform duration-700 delay-200 ${active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Reimagine your business for the digital age.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12">
        {/* Left Side Content */}
        <div className={`transition-all duration-1000 delay-300 ${active ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Evolve or Expire</h2>
           <p className="text-slate-600 text-lg leading-relaxed mb-8">
             Digital transformation is not just about technology; it's about cultural and operational shifts. We help you digitize processes, enhance customer experiences, and unlock new revenue streams.
           </p>
           
           <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-600 mb-8">
               <p className="font-medium text-indigo-900 italic">"We don't just digitize the past; we engineer the future."</p>
           </div>

           <ul className="space-y-4">
             {["Process Automation", "Legacy System Modernization", "Digital Customer Experience", "Data-Driven Decision Making"].map((item, i) => (
               <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                 <div className="bg-yellow-400 p-1 rounded-full"><Zap className="text-white w-4 h-4" /></div> {item}
               </li>
             ))}
           </ul>
           <Link to="/contact" className="inline-flex items-center mt-10 bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/40">
              Start Your Journey <ArrowRight className="ml-2" size={18} />
           </Link>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-2 gap-6 relative">
           {/* Connecting Lines (Visual Only) */}
           <div className={`absolute inset-0 border-2 border-dashed border-indigo-100 rounded-full scale-75 -z-10 transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}></div>

           {[
               { icon: Rocket, label: "Agility", color: "bg-pink-50 text-pink-600" },
               { icon: RefreshCw, label: "Innovation", color: "bg-blue-50 text-blue-600" },
               { icon: Layers, label: "Integration", color: "bg-green-50 text-green-600" },
               { icon: Cpu, label: "Intelligence", color: "bg-purple-50 text-purple-600" }
           ].map((box, idx) => (
               <div 
                key={idx} 
                className={`p-8 rounded-2xl flex flex-col items-center text-center justify-center shadow-sm border border-slate-100 transition-all duration-700 hover:scale-105 hover:shadow-lg bg-white ${active ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
                style={{ transitionDelay: `${500 + (idx * 150)}ms` }}
               >
                   <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${box.color}`}>
                       <box.icon size={32} />
                   </div>
                   <span className="font-bold text-slate-800 text-lg">{box.label}</span>
               </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;