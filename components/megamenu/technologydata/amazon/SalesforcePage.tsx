import React, { useEffect, useState } from 'react';
import { Cloud, Users, BarChart, ArrowRight, MessageSquare, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const SalesforcePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#00A1E0] text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 rounded-bl-full"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <Cloud size={64} className="text-white mb-6" />
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Salesforce</h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Connect to your customers in a whole new way. The world's #1 CRM platform for Sales, Service, Marketing, and more.
                  </p>
                  <Link to="/contact" className="bg-white text-[#00A1E0] px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg inline-flex items-center">
                      Optimize Your CRM <ArrowRight className="ml-2" />
                  </Link>
              </div>
              
              <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="relative w-80 h-80 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white p-3 rounded-xl shadow-lg">
                          <Users className="text-[#00A1E0]" size={32} />
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white p-3 rounded-xl shadow-lg">
                          <BarChart className="text-[#00A1E0]" size={32} />
                      </div>
                      <div className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg">
                          <MessageSquare className="text-[#00A1E0]" size={32} />
                      </div>
                      <div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg">
                          <Briefcase className="text-[#00A1E0]" size={32} />
                      </div>
                      
                      <div className="text-center">
                          <div className="text-4xl font-bold">360°</div>
                          <div className="text-sm font-medium">Customer View</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Sales Cloud", desc: "Close more deals, accelerate productivity, and make insightful decisions." },
                  { title: "Service Cloud", desc: "Support customers on any channel and deliver personalized service at scale." },
                  { title: "Marketing Cloud", desc: "Build 1-to-1 customer journeys across email, mobile, social, and advertising." },
                  { title: "Commerce Cloud", desc: "Create unified, intelligent buying experiences across all channels." },
                  { title: "Tableau Analytics", desc: "Visualize data to find insights and drive business growth." },
                  { title: "MuleSoft", desc: "Connect any app, data, or device with APIs to automate workflows." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-[#00A1E0]">
                          <Cloud size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default SalesforcePage;