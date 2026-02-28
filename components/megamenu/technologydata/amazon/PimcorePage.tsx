import React, { useEffect, useState } from 'react';
import { Database, Layers, ShoppingBag, ArrowRight, FileText, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PimcorePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#6428B4] text-white py-24 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-8 flex items-center justify-center backdrop-blur-md border border-white/30">
                  <Database size={40} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Pimcore Platform</h1>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10">
                  The only Open Source Digital Experience Platform that manages PIM, MDM, DAM, CDP, DXP, and Digital Commerce.
              </p>
              <Link to="/contact" className="bg-white text-[#6428B4] font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition-colors inline-flex items-center">
                  Consolidate Data <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Database, title: "PIM / MDM", desc: "Centralize and harmonize all your marketing, sales, and technical product information." },
                  { icon: Layers, title: "DAM", desc: "Digital Asset Management to organize, manage, and share digital media assets." },
                  { icon: ShoppingBag, title: "Digital Commerce", desc: "B2B and B2C e-commerce framework for complex transactional businesses." },
                  { icon: FileText, title: "DXP / CMS", desc: "Create personalized digital experiences for any channel and device." },
                  { icon: Share2, title: "CDP", desc: "Customer Data Platform to store, manage, and analyze customer data." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:border-[#6428B4] hover:shadow-lg transition-all group">
                      <item.icon className="w-10 h-10 text-slate-400 group-hover:text-[#6428B4] mb-4 transition-colors" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default PimcorePage;