import React, { useEffect, useState } from 'react';
import { Server, Cloud, HardDrive, Network, Cpu, ArrowRight, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfrastructureServicesPage: React.FC = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoad(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 overflow-hidden">
         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div className={`transition-all duration-1000 ${load ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                 <h1 className="text-5xl font-bold mb-6">Robust IT <br/> <span className="text-blue-500">Infrastructure</span></h1>
                 <p className="text-slate-400 text-xl mb-8">
                     From on-premise data centers to hybrid cloud environments, we build the backbone of your digital operations.
                 </p>
                 <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors inline-flex items-center">
                     Upgrade Infrastructure <ArrowRight className="ml-2" />
                 </Link>
             </div>

             {/* Isometric Server Block Visual */}
             <div className={`relative h-[400px] perspective-1000 transition-all duration-1000 delay-300 ${load ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                     {/* Stack 1 */}
                     <div className="relative w-32 h-40 bg-slate-800 border-2 border-slate-700 rounded-lg transform -skew-y-12 shadow-2xl z-20 hover:-translate-y-4 transition-transform duration-500">
                         <div className="absolute top-2 left-2 right-2 h-2 bg-green-500/50 rounded-sm animate-pulse"></div>
                         <div className="absolute top-6 left-2 right-2 h-1 bg-slate-600 rounded-sm"></div>
                         <div className="absolute top-10 left-2 right-2 h-1 bg-slate-600 rounded-sm"></div>
                         <Server className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600" size={40} />
                     </div>
                     {/* Stack 2 */}
                     <div className="absolute top-12 -left-20 w-32 h-40 bg-slate-800 border-2 border-slate-700 rounded-lg transform -skew-y-12 shadow-2xl z-10 hover:-translate-y-4 transition-transform duration-500 delay-100">
                         <div className="absolute top-2 left-2 right-2 h-2 bg-blue-500/50 rounded-sm animate-pulse"></div>
                         <Database className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600" size={40} />
                     </div>
                     {/* Stack 3 */}
                     <div className="absolute -top-12 left-20 w-32 h-40 bg-slate-800 border-2 border-slate-700 rounded-lg transform -skew-y-12 shadow-2xl z-0 hover:-translate-y-4 transition-transform duration-500 delay-200">
                         <div className="absolute top-2 left-2 right-2 h-2 bg-yellow-500/50 rounded-sm animate-pulse"></div>
                         <HardDrive className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-600" size={40} />
                     </div>
                 </div>
             </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Cloud, title: "Cloud Services", desc: "Migration, management, and optimization for AWS, Azure, and Google Cloud." },
                  { icon: Network, title: "Network Solutions", desc: "Design and implementation of secure LAN/WAN, VPN, and Wi-Fi networks." },
                  { icon: Cpu, title: "Virtualization", desc: "Server consolidation and efficient resource management using VMware or Hyper-V." },
                  { icon: Database, title: "Data Center", desc: "Setup and maintenance of physical server rooms and cooling systems." },
                  { icon: HardDrive, title: "Storage & Backup", desc: "Scalable SAN/NAS storage solutions and automated disaster recovery." },
                  { icon: Server, title: "Hardware Procurement", desc: "Sourcing and installation of enterprise-grade hardware." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors group">
                      <item.icon className="w-10 h-10 text-slate-400 group-hover:text-blue-600 mb-4 transition-colors" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default InfrastructureServicesPage;