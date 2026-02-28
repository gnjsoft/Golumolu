import React, { useEffect, useState } from 'react';
import { Handshake, FileCheck, Shield, Users, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorManagementPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-16">
          <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
                  <Handshake size={16} /> Supplier Relationships
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">Vendor Management</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Streamline onboarding, ensure compliance, and monitor performance. Build stronger, safer partnerships with your supply base.
              </p>
              <div className="grid gap-4 mb-8">
                  {[
                      "Automated Onboarding Workflows",
                      "Risk & Compliance Monitoring",
                      "Performance Scorecards",
                      "Contract Lifecycle Management"
                  ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                              <FileCheck size={14} />
                          </div>
                          <span className="font-medium text-slate-700">{feat}</span>
                      </div>
                  ))}
              </div>
              <Link to="/contact" className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center">
                  Improve Supplier Relations <ArrowRight className="ml-2" />
              </Link>
          </div>

          <div className={`md:w-1/2 relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 relative z-10">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                          <Users className="text-slate-600" />
                      </div>
                      <div>
                          <h3 className="font-bold text-lg">Acme Supplies Ltd.</h3>
                          <div className="flex text-yellow-400 gap-1 text-sm">
                              <Star fill="currentColor" size={14} />
                              <Star fill="currentColor" size={14} />
                              <Star fill="currentColor" size={14} />
                              <Star fill="currentColor" size={14} />
                              <Star fill="currentColor" size={14} />
                          </div>
                      </div>
                      <div className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-bold uppercase">
                          Active
                      </div>
                  </div>
                  <div className="space-y-4">
                      <div className="flex justify-between items-center">
                          <span className="text-slate-500 text-sm">Compliance Status</span>
                          <span className="text-green-600 font-bold flex items-center gap-1"><Shield size={14}/> Verified</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="text-slate-500 text-sm">On-Time Delivery</span>
                          <span className="text-slate-800 font-bold">98.5%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full w-[98.5%]"></div>
                      </div>
                  </div>
              </div>
              
              {/* Decor */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
      </div>
    </div>
  );
};

export default VendorManagementPage;