
import React, { useEffect } from 'react';
import { Server, HardDrive, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServersPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
          <Server size={64} className="mx-auto mb-6 text-blue-500" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Enterprise Servers</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Power your business with high-performance, scalable, and reliable server solutions.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-500 transition-colors inline-flex items-center">
              Configure Your Server <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { title: "Rack Servers", desc: "Optimized for density and performance in data center environments." },
              { title: "Tower Servers", desc: "Flexible and quiet power for small offices and remote branches." },
              { title: "Blade Servers", desc: "Maximum efficiency and modularity for large-scale enterprise workloads." }
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

export default ServersPage;
