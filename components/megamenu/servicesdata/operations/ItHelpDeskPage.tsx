import React, { useEffect, useState } from 'react';
import { Ticket, CheckCircle, Clock, Zap, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItHelpDeskPage: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setProgress(98), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-600 text-white py-24 px-4 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto">
             <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center backdrop-blur-md">
                 <Ticket size={40} className="text-white" />
             </div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Help Desk Solutions</h1>
             <p className="text-xl text-indigo-100 mb-10">
                 Streamlined ticket management and rapid resolution for your enterprise.
             </p>
             
             {/* Stats Bar */}
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col md:flex-row justify-around gap-8 border border-white/20">
                 <div>
                     <div className="text-3xl font-bold text-yellow-400 mb-1">15 min</div>
                     <div className="text-xs text-indigo-200 uppercase tracking-wide">Avg. Response Time</div>
                 </div>
                 <div>
                     <div className="text-3xl font-bold text-green-400 mb-1">98%</div>
                     <div className="text-xs text-indigo-200 uppercase tracking-wide">First Contact Resolution</div>
                 </div>
                 <div>
                     <div className="text-3xl font-bold text-blue-300 mb-1">24/7</div>
                     <div className="text-xs text-indigo-200 uppercase tracking-wide">Coverage</div>
                 </div>
             </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row gap-16">
              <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Level Agreements (SLAs)</h2>
                  <p className="text-slate-600 text-lg mb-8">
                      We adhere to strict SLAs to ensure your business operations are never hindered by technical issues. Our tiered support structure ensures the right expertise is applied to every problem.
                  </p>
                  <ul className="space-y-4">
                      {["L1 Support: Basic troubleshooting & password resets", "L2 Support: Software issues & configuration", "L3 Support: Complex backend & server issues"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                              <div className="bg-indigo-100 text-indigo-600 rounded-full p-1"><CheckCircle size={16} /></div>
                              <span className="font-semibold text-slate-800">{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-center items-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-8">Customer Satisfaction</h3>
                  <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-90">
                          <circle cx="96" cy="96" r="88" stroke="#e2e8f0" strokeWidth="12" fill="none" />
                          <circle 
                            cx="96" 
                            cy="96" 
                            r="88" 
                            stroke="#4f46e5" 
                            strokeWidth="12" 
                            fill="none" 
                            strokeDasharray="552" 
                            strokeDashoffset={552 - (552 * progress) / 100} 
                            className="transition-all duration-[2s] ease-out"
                          />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                          <span className="text-4xl font-bold text-slate-900">{progress}%</span>
                          <span className="block text-xs text-slate-500">CSAT Score</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ItHelpDeskPage;