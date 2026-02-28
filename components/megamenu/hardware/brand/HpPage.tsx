
import React, { useEffect } from 'react';
import { Printer, Laptop, Server, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const HpPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#0096D6] text-white py-24 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">HP Enterprise</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-10">
              Reinventing the way you work. Leading innovations in printing, personal systems, and IT infrastructure.
          </p>
          <Link to="/contact" className="bg-white text-[#0096D6] font-bold py-3 px-8 rounded-lg hover:bg-cyan-50 transition-colors inline-flex items-center">
              Explore HP Products <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Laptop, title: "EliteBook", desc: "Secure, manageable PCs for the enterprise workforce." },
              { icon: Printer, title: "LaserJet Enterprise", desc: "High-speed, high-volume printing solutions with robust security." },
              { icon: Server, title: "HPE ProLiant", desc: "The world's most secure industry-standard servers." },
              { icon: Layers, title: "Aruba Networking", desc: "Secure, AI-powered network infrastructure for the intelligent edge." },
              { icon: Monitor, title: "Z Workstations", desc: "Extreme performance for technical and creative professionals." },
              { icon: Server, title: "HPE Alletra", desc: "Cloud-native data infrastructure for every application." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all group">
                  <item.icon size={40} className="text-[#0096D6] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

// Helper for icon
import { Monitor } from 'lucide-react';

export default HpPage;
