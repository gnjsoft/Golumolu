import React, { useEffect } from 'react';
import { Cloud, Server, Database, ArrowRight, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-blue-600 text-white py-24 px-4 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/clouds.png')] opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Cloud Computing</h1>
                  <p className="text-xl text-blue-100 mb-8">
                      Scalable, secure, and cost-effective infrastructure. AWS, Azure, and Google Cloud expertise.
                  </p>
                  <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center">
                      Migrate to Cloud <ArrowRight className="ml-2" />
                  </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                  <Cloud size={200} className="text-blue-300 opacity-80" />
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Server, title: "IaaS", desc: "Infrastructure as a Service. Virtual machines, storage, and networking on demand." },
                  { icon: Database, title: "PaaS", desc: "Platform as a Service. Managed environments for developing and deploying apps." },
                  { icon: Shield, title: "Cloud Security", desc: "IAM, encryption, and compliance monitoring for your cloud workloads." },
                  { icon: Globe, title: "Hybrid Cloud", desc: "Seamless integration between on-premise data centers and public cloud." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                      <item.icon size={32} className="text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default CloudPage;