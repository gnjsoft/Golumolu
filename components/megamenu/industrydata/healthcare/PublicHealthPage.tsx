import React, { useEffect, useState } from 'react';
import { Globe, Users, BarChart2, Shield, Map, Activity } from 'lucide-react';

const PublicHealthPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className={`text-center mb-20 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
                  <Globe className="text-blue-600" size={48} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Public Health IT Solutions</h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Supporting government agencies and NGOs with data-driven tools for disease surveillance, immunization tracking, and community health management.
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
              <div className={`p-10 border border-slate-200 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 transform ${active ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-500/30"><Activity size={28} /></div>
                      <h3 className="text-2xl font-bold text-slate-900">Epidemiology Analytics</h3>
                  </div>
                  <p className="text-slate-600 text-lg mb-6">
                      Real-time dashboards for tracking outbreaks, visualizing spread patterns on maps, and managing resource allocation effectively.
                  </p>
                  <div className="h-40 bg-white rounded-xl border border-slate-100 flex items-end justify-between p-4 gap-2">
                      {[30, 50, 45, 70, 60, 80, 55, 90, 75, 60].map((h, i) => (
                          <div key={i} className="bg-blue-400 w-full rounded-t-sm" style={{ height: `${h}%` }}></div>
                      ))}
                  </div>
              </div>

              <div className={`p-10 border border-slate-200 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-500 transform ${active ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="bg-green-600 p-3 rounded-2xl text-white shadow-lg shadow-green-500/30"><Users size={28} /></div>
                      <h3 className="text-2xl font-bold text-slate-900">Registry Systems</h3>
                  </div>
                  <p className="text-slate-600 text-lg mb-6">
                      Secure, scalable population databases for immunization records, cancer registries, and chronic disease management.
                  </p>
                  <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                          <Shield size={18} className="text-green-600" /> 
                          <span className="font-semibold text-slate-700">Gov-Cloud Compliant</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                          <Map size={18} className="text-green-600" /> 
                          <span className="font-semibold text-slate-700">Geospatial Mapping</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default PublicHealthPage;