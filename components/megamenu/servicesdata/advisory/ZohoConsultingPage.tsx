import React, { useEffect, useState } from 'react';
import { Box, ArrowRight, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZohoConsultingPage: React.FC = () => {
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setPopped(true), 100);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-yellow-50 py-24 px-4 text-center border-b border-yellow-100">
        <div className={`mx-auto w-20 h-20 bg-yellow-400 rounded-2xl rotate-3 flex items-center justify-center mb-6 shadow-lg transition-transform duration-[800ms] ${popped ? 'scale-100 rotate-3' : 'scale-0 rotate-180'}`}>
            <LayoutGrid className="text-white" size={40} />
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-opacity duration-700 delay-300 ${popped ? 'opacity-100' : 'opacity-0'}`}>
            Zoho Consulting
        </h1>
        <p className={`text-xl text-slate-600 max-w-2xl mx-auto transition-opacity duration-700 delay-500 ${popped ? 'opacity-100' : 'opacity-0'}`}>
            The operating system for business.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
         <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            As a specialized Zoho partner, we help you implement the full suite of Zoho applications—from CRM and Books to Creator and People—creating a unified ecosystem for your business.
         </p>
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {["Zoho CRM", "Zoho Books", "Zoho Creator", "Zoho One"].map((item, idx) => (
                <div 
                    key={idx} 
                    className={`p-6 bg-white shadow-md border border-slate-100 rounded-xl font-bold text-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${popped ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                    style={{ transitionDelay: `${600 + (idx * 150)}ms` }}
                >
                    {item}
                </div>
            ))}
         </div>

         <div className={`transition-all duration-700 delay-[1200ms] ${popped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link to="/contact" className="inline-flex items-center text-slate-900 font-bold border-2 border-slate-900 py-3 px-8 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                Implement Zoho <ArrowRight className="ml-2" size={18} />
            </Link>
         </div>
      </div>
    </div>
  );
};

export default ZohoConsultingPage;