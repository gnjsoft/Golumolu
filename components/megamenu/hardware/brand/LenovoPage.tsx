
import React, { useEffect } from 'react';
import { Laptop, Server, Monitor, ArrowRight, Tablet, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const LenovoPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#E2231A] text-white py-24 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Lenovo</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-10">
              Smarter technology for all. From the iconic ThinkPad to next-gen data center solutions.
          </p>
          <Link to="/contact" className="bg-white text-[#E2231A] font-bold py-3 px-8 rounded-lg hover:bg-red-50 transition-colors inline-flex items-center">
              Shop Lenovo <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Laptop, title: "ThinkPad", desc: "Legendary reliability and keyboard design for business professionals." },
              { icon: Server, title: "ThinkSystem", desc: "Servers, storage, and networking for the data-centered world." },
              { icon: Monitor, title: "ThinkCentre", desc: "Reliable and secure desktops in tower, SFF, and tiny form factors." },
              { icon: Tablet, title: "Tablets", desc: "Android and Windows tablets for enterprise mobility." },
              { icon: Cpu, title: "Workstations", desc: "ThinkStation power for rendering, designing, and crunching data." },
              { icon: Server, title: "ThinkAgile", desc: "Software-defined infrastructure solutions for hybrid cloud." }
          ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition-all group">
                  <item.icon size={40} className="text-[#E2231A] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default LenovoPage;
