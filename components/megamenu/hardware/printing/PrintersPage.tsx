
import React, { useEffect } from 'react';
import { Printer, FileText, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrintersPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-100 py-24 px-4 text-center">
          <Printer size={64} className="mx-auto mb-6 text-slate-600" />
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Printing Solutions</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Reliable laser, inkjet, and multifunction printers for businesses of all sizes.
          </p>
          <Link to="/contact" className="bg-slate-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center">
              Find a Printer <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { title: "Laser Printers", desc: "High-speed, high-volume printing for text-heavy office environments." },
              { title: "Multifunction (MFP)", desc: "Print, scan, copy, and fax capabilities in a single compact device." },
              { title: "Large Format", desc: "Plotters for engineering, architecture, and graphic design applications." }
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

export default PrintersPage;
