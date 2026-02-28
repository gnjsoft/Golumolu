import React, { useEffect, useState } from 'react';
import { Settings, ArrowRight, CheckSquare, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceNowConsultingPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#293e40] text-white py-24 px-4 text-center overflow-hidden">
        <div className={`transition-all duration-1000 transform ${active ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ServiceNow Consulting</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Transform your enterprise workflows with the Now Platform.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-16 items-center">
         
         <div className={`flex-1 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="inline-block p-3 bg-green-100 rounded-lg text-green-700 mb-6">
                <Workflow size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Digitize Your Workflows</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
               We help you implement, customize, and manage ServiceNow to optimize IT Service Management (ITSM), IT Operations Management (ITOM), and Customer Service Management (CSM).
            </p>
            <Link to="/contact" className="bg-[#293e40] text-white font-bold py-4 px-10 rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center shadow-lg">
               Get a Demo <ArrowRight className="ml-2" size={18}/>
            </Link>
         </div>

         <div className="flex-1 grid grid-cols-1 gap-4 w-full">
            {["ITSM Implementation", "Custom App Development", "Service Portal Design", "Workflow Automation"].map((item, i) => (
                <div 
                    key={i} 
                    className={`flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm transition-all duration-700 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                    style={{ transitionDelay: `${500 + (i * 150)}ms` }}
                >
                    <div className="bg-green-100 p-2 rounded-full text-green-700">
                        <CheckSquare size={20} />
                    </div>
                    <span className="font-bold text-slate-700 text-lg">{item}</span>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ServiceNowConsultingPage;