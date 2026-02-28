import React, { useEffect, useState } from 'react';
import { Smartphone, CreditCard, Lock, ArrowRight, Building, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const BankingPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-900 text-white py-24 px-4 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
          </div>
          
          <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                  <Building size={48} className="text-indigo-300" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Digital Banking</h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
                  From core banking modernization to frictionless mobile experiences. We build the infrastructure for the bank of tomorrow.
              </p>
              <Link to="/contact" className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                  Start Modernization
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-3xl transform rotate-3"></div>
                  <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=2000" alt="Mobile Banking" className="relative rounded-3xl shadow-2xl" />
              </div>
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Omnichannel Experience</h2>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      Customers expect seamless banking across mobile, web, and branch. Our solutions ensure data consistency and real-time synchronization across all touchpoints.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                          <Smartphone className="text-indigo-600" /> <span className="font-medium text-slate-800">Native Mobile Apps</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <Globe className="text-indigo-600" /> <span className="font-medium text-slate-800">Internet Banking Portals</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <Layers className="text-indigo-600" /> <span className="font-medium text-slate-800">Open Banking APIs</span>
                      </li>
                  </ul>
              </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: CreditCard, title: "Payments & Cards", desc: "Issuance, management, and processing systems for credit, debit, and prepaid cards." },
                  { icon: Lock, title: "Fraud Detection", desc: "AI-powered transaction monitoring to detect and block suspicious activities in real-time." },
                  { icon: Layers, title: "Core Modernization", desc: "Migrating legacy mainframes to cloud-native microservices for agility and scalability." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                      <item.icon size={32} className="text-indigo-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default BankingPage;