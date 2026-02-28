import React, { useEffect, useState } from 'react';
import { Scan, Search, Bug, AlertCircle, FileCode, CheckCircle, ArrowRight, Radar } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityTestingPage: React.FC = () => {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScanning(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-24 overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef2bb6ffa030?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
         
         <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
             <div className="mb-8 relative">
                 <div className={`absolute inset-0 border-4 border-green-500 rounded-full ${scanning ? 'animate-ping opacity-20' : 'opacity-0'}`}></div>
                 <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center border-2 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                     <Scan size={40} className="text-green-500" />
                 </div>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-bold mb-6">Security Testing</h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                 Identify vulnerabilities before attackers do. Comprehensive vulnerability assessments and code reviews.
             </p>
             
             <div className="flex gap-4">
                 <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full font-bold transition-all">
                     Start Scanning
                 </Link>
             </div>
         </div>
      </div>

      {/* Capabilities */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-2 transition-transform">
                  <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
                      <Bug size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Vulnerability Assessment</h3>
                  <p className="text-slate-600">Automated scanning of networks, servers, and applications to detect known security flaws and misconfigurations.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-2 transition-transform">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                      <FileCode size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Static Code Analysis (SAST)</h3>
                  <p className="text-slate-600">Reviewing source code to identify security weaknesses like SQL injection, XSS, and buffer overflows early in the dev cycle.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-2 transition-transform">
                  <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <Radar size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Dynamic Analysis (DAST)</h3>
                  <p className="text-slate-600">Testing running applications from the outside-in to find vulnerabilities that only appear during execution.</p>
              </div>
          </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-slate-50 py-24">
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Vulnerability Scan vs. Penetration Test</h2>
              <div className="grid md:grid-cols-2 gap-0 md:gap-8">
                  <div className="bg-white p-8 rounded-l-2xl md:rounded-2xl border border-slate-200">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Scan className="text-blue-500"/> Vulnerability Scan
                      </h3>
                      <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0"/> Automated high-level scan</li>
                          <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0"/> Identifies potential vulnerabilities</li>
                          <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0"/> Broad coverage</li>
                          <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0"/> Good for regular maintenance</li>
                      </ul>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-r-2xl md:rounded-2xl text-white">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <AlertCircle className="text-red-500"/> Penetration Test
                      </h3>
                      <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0"/> Manual expert simulation</li>
                          <li className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0"/> Exploits vulnerabilities to prove risk</li>
                          <li className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0"/> Deep dive focus</li>
                          <li className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0"/> Critical for compliance & validation</li>
                      </ul>
                      <div className="mt-6 pt-6 border-t border-slate-700 text-center">
                          <Link to="/services/penetration-testing" className="text-sm font-bold text-red-400 hover:text-white flex items-center justify-center gap-2">
                              Explore Penetration Testing <ArrowRight size={14} />
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default SecurityTestingPage;