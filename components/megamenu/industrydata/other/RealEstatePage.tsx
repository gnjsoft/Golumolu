import React, { useEffect, useState } from 'react';
import { Building, Key, Home, Camera, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RealEstatePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col-reverse md:flex-row gap-16 items-center">
          <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
                  <Building size={18} /> PropTech Solutions
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">Smart Real Estate</h1>
              <p className="text-xl text-slate-600 mb-8">
                  From virtual tours to automated property management. We digitalize the lifecycle of real estate assets for agents, owners, and tenants.
              </p>
              <div className="space-y-4 mb-8">
                  {[
                      { title: "Virtual Tours (VR/AR)", icon: Camera },
                      { title: "Property Management Systems", icon: Key },
                      { title: "Smart Building IoT", icon: Home },
                      { title: "Market Analytics", icon: BarChart }
                  ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <item.icon className="text-emerald-600" size={24} />
                          <span className="font-bold text-slate-800">{item.title}</span>
                      </div>
                  ))}
              </div>
              <Link to="/contact" className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-800 text-lg">
                  Start Your Project <ArrowRight className="ml-2" />
              </Link>
          </div>
          
          <div className={`md:w-1/2 relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1973" alt="Modern Building" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                      <div className="text-white">
                          <div className="text-3xl font-bold">Smart PMS</div>
                          <p className="opacity-80">Managing 10,000+ units</p>
                      </div>
                  </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-bold text-slate-800">99.9% Occupancy</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default RealEstatePage;