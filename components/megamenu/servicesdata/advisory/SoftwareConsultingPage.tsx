import React, { useEffect, useState } from 'react';
import { Code2, ArrowRight, Check, LayoutTemplate, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareConsultingPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      
      {/* Blueprint Header */}
      <div className="bg-slate-50 py-24 px-4 text-center border-b border-slate-200 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className={`relative z-10 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">Software Architecture & Consulting</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Expert advice on tech stack, scalability, and development best practices.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
         <div className={`bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center transition-all duration-1000 delay-300 ${mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            
            <div className="flex-1">
               <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Expert Consulting Matters?</h2>
               <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                   Making the wrong technical decisions early on leads to technical debt. Our architects help you choose the right tools and patterns for scalable, maintainable software.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                      { text: "Tech Stack Selection", icon: LayoutTemplate },
                      { text: "Architecture Design", icon: Code2 },
                      { text: "Security Audits", icon: ShieldCheck },
                      { text: "Performance Tuning", icon: Zap }
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors cursor-default">
                        <item.icon className="text-blue-600" size={20}/> 
                        <span className="font-bold text-slate-800">{item.text}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Interactive Looking Card */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
               <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm">
                   <Code2 size={48} className="text-white" />
               </div>
               <h3 className="font-bold text-2xl mb-2">Technical Excellence</h3>
               <p className="text-blue-100 mb-8">Ready to architect your success?</p>
               <Link to="/contact" className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-md w-full">
                   Book a Session
               </Link>
            </div>

         </div>
      </div>
    </div>
  );
};

export default SoftwareConsultingPage;