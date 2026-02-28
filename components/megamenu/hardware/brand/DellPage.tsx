
import React, { useEffect } from 'react';
import { Server, Monitor, Laptop, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const DellPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#007DB8] text-white py-24 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Dell Technologies</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Transforming businesses with end-to-end technology solutions. From the edge to the core to the cloud.
          </p>
          <Link to="/contact" className="bg-white text-[#007DB8] font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center">
              Configure Dell Solutions <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Laptop, title: "Latitude & XPS", desc: "Premium business laptops designed for mobility and performance." },
              { icon: Server, title: "PowerEdge Servers", desc: "Scalable rack, tower, and modular server infrastructure." },
              { icon: Monitor, title: "OptiPlex Desktops", desc: "Intelligent, sustainable desktops for the modern workspace." },
              { icon: ShieldCheck, title: "Data Protection", desc: "Backup and recovery solutions to safeguard your critical data." },
              { icon: Server, title: "Storage Solutions", desc: "PowerStore and Unity XT storage arrays for enterprise data." },
              { icon: Monitor, title: "Precision Workstations", desc: "High-performance workstations for creators and engineers." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all group">
                  <item.icon size={40} className="text-[#007DB8] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default DellPage;
