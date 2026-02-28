import React, { useEffect, useState } from 'react';
import { Umbrella, FileCheck, LifeBuoy, ArrowRight, Activity, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsurancePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-teal-900 text-white py-24 px-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">InsurTech Solutions</h1>
                  <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                      Accelerate underwriting, streamline claims, and enhance policyholder engagement with AI-driven insurance technology.
                  </p>
                  <Link to="/contact" className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center shadow-lg">
                      Digitalize Insurance <ArrowRight className="ml-2" />
                  </Link>
              </div>
              <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <Umbrella size={200} className="text-teal-400 opacity-80 drop-shadow-2xl" strokeWidth={0.5} />
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Coverage for Every Sector</h2>
              <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: LifeBuoy, title: "Health Insurance", desc: "Claims adjudication platforms and member portals for health payers." },
                  { icon: Car, title: "Auto Insurance", desc: "Telematics integration for usage-based insurance (UBI) models." },
                  { icon: FileCheck, title: "Property & Casualty", desc: "Automated risk assessment and policy management systems." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
                      <item.icon size={36} className="text-teal-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>

          <div className="mt-20 bg-teal-50 rounded-3xl p-10 flex items-center justify-between border border-teal-100">
              <div className="flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                      <Activity className="text-teal-600" />
                  </div>
                  <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Automated Claims Processing</h3>
                      <p className="text-slate-600 max-w-xl">
                          Reduce processing time from days to minutes. We implement OCR and machine learning to extract data from claim documents and automate decision-making.
                      </p>
                  </div>
              </div>
              <ArrowRight className="text-teal-300 hidden md:block" size={40} />
          </div>
      </div>
    </div>
  );
};

export default InsurancePage;