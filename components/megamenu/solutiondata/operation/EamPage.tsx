import React, { useEffect, useState } from 'react';
import { Wrench, Settings, ClipboardList, ArrowRight, BarChart3, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EamPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-slate-800 text-white py-24 px-4 text-center">
          <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <Wrench size={64} className="mx-auto text-slate-400 mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Enterprise Asset Management</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                  Maximize asset lifecycle, reduce downtime, and control maintenance costs.
              </p>
              <Link to="/contact" className="bg-slate-600 hover:bg-slate-500 text-white border border-slate-500 px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center">
                  Schedule Demo <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: ClipboardList, title: "Asset Registry", desc: "Centralized database for all physical assets with full history tracking." },
                  { icon: Settings, title: "Preventive Maintenance", desc: "Automated scheduling of maintenance tasks to prevent unexpected failures." },
                  { icon: AlertTriangle, title: "Work Order Mgmt", desc: "Streamlined creation, assignment, and tracking of repair work orders." },
                  { icon: BarChart3, title: "Lifecycle Analysis", desc: "Data-driven insights to determine optimal repair vs. replace decisions." },
                  { icon: Wrench, title: "Inventory & MRO", desc: "Manage spare parts inventory to ensure availability for critical repairs." },
                  { icon: Settings, title: "Mobile Maintenance", desc: "Apps for technicians to access manuals and update status from the field." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 group transform ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <item.icon className="w-10 h-10 text-slate-600 group-hover:text-blue-600 mb-4 transition-colors" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default EamPage;