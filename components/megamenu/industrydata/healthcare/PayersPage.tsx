import React, { useEffect, useState } from 'react';
import { CreditCard, FileCheck, PieChart, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const PayersPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-emerald-900 text-white py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[150px] opacity-20"></div>
          
          <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="inline-flex items-center justify-center p-3 bg-emerald-800/50 rounded-2xl mb-6 backdrop-blur-sm border border-emerald-700">
                  <DollarSign size={40} className="text-emerald-300" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Payer Solutions</h1>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
                  Modernizing claims processing, member engagement, and care management for health plans. Efficiency meets empathy.
              </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: FileCheck, title: "Claims Automation", desc: "Reduce manual adjudication with AI-driven claims analysis. Faster processing, fewer errors.", delay: 200 },
                  { icon: CreditCard, title: "Member Portals", desc: "Self-service portals for benefits, eligibility checks, and premium payments. Improve member satisfaction.", delay: 400 },
                  { icon: PieChart, title: "Risk Analytics", desc: "Population health data to identify high-risk members and proactively manage care costs.", delay: 600 }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 border border-slate-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 bg-white text-center group transform ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                      <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                          <item.icon size={32} />
                      </div>
                      <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>

          <div className={`mt-20 bg-slate-50 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-1000 delay-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
              <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <ShieldCheck className="text-emerald-600" /> Value-Based Care
                  </h3>
                  <p className="text-slate-600 max-w-xl">
                      Shift from fee-for-service to value-based care models with our integrated analytics platforms that track outcomes and quality metrics.
                  </p>
              </div>
              <Link to="/contact" className="whitespace-nowrap bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Contact Us
              </Link>
          </div>
      </div>
    </div>
  );
};

export default PayersPage;