import React, { useEffect } from 'react';
import { Monitor, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesktopsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-100 py-24 px-4 text-center">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
              <Monitor size={48} className="text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Business Desktops</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Powerful, reliable, and secure desktops designed for productivity. From compact mini PCs to expandable towers.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
              Get a Quote <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { title: "OptiPlex Series", brand: "Dell", desc: "Intelligent, sustainable desktops with versatile form factors." },
              { title: "EliteDesk", brand: "HP", desc: "High-performance PCs with advanced security features." },
              { title: "ThinkCentre", brand: "Lenovo", desc: "Reliable workhorses known for durability and ease of management." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all group">
                  <div className="text-xs font-bold text-blue-600 uppercase mb-2">{item.brand}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-6">{item.desc}</p>
                  <div className="flex gap-2">
                      <Cpu size={20} className="text-slate-400" />
                      <ShieldCheck size={20} className="text-slate-400" />
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default DesktopsPage;