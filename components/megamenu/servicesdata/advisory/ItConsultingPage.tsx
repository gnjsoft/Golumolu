import React, { useEffect, useState } from 'react';
import { Briefcase, ArrowRight, CheckCircle, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItConsultingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className={`relative bg-slate-900 py-32 px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#0f172a_25%,#1e293b_25%,#1e293b_50%,#0f172a_50%,#0f172a_75%,#1e293b_75%,#1e293b_100%)] bg-[size:40px_40px] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 overflow-hidden">
             <span className={`block text-blue-400 font-bold tracking-widest uppercase text-sm transition-transform duration-700 delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>Strategy & Advisory</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            Strategic IT Consulting
          </h1>
          <p className={`text-xl text-slate-300 max-w-2xl mx-auto transition-opacity duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Aligning technology with your business vision to drive sustainable growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content with Slide In */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <TrendingUp className="text-blue-600" /> Future-Proofing Business
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              In a rapidly evolving digital landscape, making the right technology choices is critical. Our consultants act as your strategic partners, helping you navigate complexity, optimize costs, and implement solutions that deliver tangible ROI.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Infrastructure Assessment", desc: "Audit of current systems for scalability and security." },
                { title: "Roadmap Design", desc: "5-year strategic planning aligned with business goals." },
                { title: "Vendor Management", desc: "Unbiased selection and negotiation with tech providers." }
              ].map((item, idx) => (
                <div key={idx} className="flex group">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <CheckCircle size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/contact" className="group inline-flex items-center bg-slate-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30">
                Start Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>

          {/* Cards Grid with Staggered Flip */}
          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: Lightbulb, title: "Innovation", text: "New Tech Adoption", delay: "delay-500" },
               { icon: Target, title: "Strategy", text: "Goal Alignment", delay: "delay-700" },
               { icon: Briefcase, title: "Operations", text: "Process Optimization", delay: "delay-900" },
               { icon: CheckCircle, title: "Results", text: "Measurable ROI", delay: "delay-1000" }
             ].map((card, idx) => (
               <div 
                 key={idx} 
                 className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-700 transform ${isVisible ? 'opacity-100 rotate-0 translate-y-0' : `opacity-0 rotate-12 translate-y-20`} ${card.delay} hover:-translate-y-2`}
                 style={{ transitionDelay: `${500 + (idx * 150)}ms` }} 
               >
                 <card.icon className="text-blue-600 mb-4" size={32}/>
                 <h3 className="font-bold text-slate-900">{card.title}</h3>
                 <p className="text-sm text-slate-500 mt-2">{card.text}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItConsultingPage;