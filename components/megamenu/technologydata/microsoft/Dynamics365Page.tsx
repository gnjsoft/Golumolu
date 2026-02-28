import React, { useEffect } from 'react';
import { Briefcase, Users, ShoppingCart, BarChart, ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dynamics365Page: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#002050] text-white py-24 px-4 overflow-hidden relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="md:w-1/2">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Dynamics 365</h1>
                  <p className="text-xl text-blue-200 mb-8">
                      Intelligent business applications that adapt to your changing needs. Unite your data, people, and processes with modern CRM and ERP.
                  </p>
                  <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center">
                      Implement Dynamics <ArrowRight className="ml-2" />
                  </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                  <div className="grid grid-cols-2 gap-4 opacity-80">
                      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                          <Briefcase className="text-blue-400 mb-2" size={32} />
                          <div className="font-bold">Sales</div>
                      </div>
                      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 mt-8">
                          <Users className="text-green-400 mb-2" size={32} />
                          <div className="font-bold">Service</div>
                      </div>
                      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                          <ShoppingCart className="text-purple-400 mb-2" size={32} />
                          <div className="font-bold">Commerce</div>
                      </div>
                      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 mt-8">
                          <Settings className="text-orange-400 mb-2" size={32} />
                          <div className="font-bold">Supply Chain</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Sales", desc: "Build strong relationships with your customers, take actions based on insights, and close sales faster." },
                  { title: "Customer Service", desc: "Earn loyalty by empowering agents to deliver personalized, world-class service." },
                  { title: "Finance & Operations", desc: "Automate and modernize your global financial operations. Monitor performance in real-time." },
                  { title: "Marketing", desc: "Find and nurture more sales-ready leads by moving beyond basic email marketing." },
                  { title: "Field Service", desc: "Deliver a seamless, end-to-end service experience with intelligent scheduling and resource management." },
                  { title: "Project Operations", desc: "Connect sales, resourcing, project management, and finance teams in a single application." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-slate-200 rounded-2xl hover:border-blue-600 transition-colors group">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Dynamics365Page;