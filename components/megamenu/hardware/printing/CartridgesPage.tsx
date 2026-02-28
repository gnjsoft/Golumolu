
import React, { useEffect } from 'react';
import { Droplet, RefreshCw, Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartridgesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-cyan-50 py-24 px-4 text-center">
          <Droplet size={64} className="mx-auto mb-6 text-cyan-600" />
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Ink & Toner Supplies</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Genuine cartridges for HP, Canon, Epson, and Brother printers. High yield, crisp quality.
          </p>
          <Link to="/contact" className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-500 transition-colors inline-flex items-center">
              Order Supplies <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { title: "Original Toner", desc: "Genuine OEM cartridges ensuring maximum printer lifespan and print quality." },
              { title: "Ink Cartridges", desc: "Vibrant colors for photo and marketing material printing." },
              { title: "Bulk Orders", desc: "Corporate pricing for bulk supply orders with scheduled delivery options." }
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

export default CartridgesPage;
