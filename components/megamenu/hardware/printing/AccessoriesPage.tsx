
import React, { useEffect } from 'react';
import { Keyboard, MousePointer, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccessoriesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
          <Keyboard size={64} className="mx-auto mb-6 text-slate-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Accessories</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Complete your workspace with premium peripherals. Keyboards, mice, headsets, and more.
          </p>
          <Link to="/contact" className="bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-200 transition-colors inline-flex items-center">
              Browse Catalog <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { title: "Peripherals", desc: "Ergonomic keyboards, wireless mice, and high-resolution webcams." },
              { title: "Audio", desc: "Noise-cancelling headsets for clear conference calls and focus." },
              { title: "Cables & Adapters", desc: "HDMI, USB-C, Ethernet cables, and docking stations for connectivity." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
