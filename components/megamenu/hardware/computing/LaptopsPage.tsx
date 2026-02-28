import React, { useEffect } from 'react';
import { Laptop, Battery, Wifi, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaptopsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 text-center relative overflow-hidden">
          <div className="relative z-10">
              <Laptop size={64} className="mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Business Laptops</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                  Mobility meets performance. Ultrabooks, convertibles, and rugged laptops for the modern workforce.
              </p>
              <Link to="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-500 transition-colors inline-flex items-center">
                  Shop Laptops <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { title: "Latitude", brand: "Dell", desc: "Small, light, and stylish laptops designed for mobility." },
              { title: "EliteBook", brand: "HP", desc: "Beautifully designed, secure, and manageable business laptops." },
              { title: "ThinkPad", brand: "Lenovo", desc: "Legendary durability and keyboard quality for professionals." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-xl hover:bg-white hover:shadow-xl transition-all border border-slate-200">
                  <div className="text-xs font-bold text-blue-600 uppercase mb-2">{item.brand}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-6">{item.desc}</p>
                  <div className="flex gap-4 text-slate-400">
                      <div className="flex items-center gap-1"><Battery size={16}/> <span className="text-xs">Long Life</span></div>
                      <div className="flex items-center gap-1"><Wifi size={16}/> <span className="text-xs">Wi-Fi 6</span></div>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default LaptopsPage;