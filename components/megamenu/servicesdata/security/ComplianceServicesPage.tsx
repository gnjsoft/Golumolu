import React, { useEffect, useState } from 'react';
import { FileCheck, Scale, ShieldCheck, ArrowRight, Award, Globe, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComplianceServicesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Hero */}
      <div className="bg-[#002B49] text-white py-24 px-4 relative overflow-hidden">
         <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
         
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
             <div className="md:w-1/2">
                 <h1 className="text-5xl font-bold mb-6">Regulatory <br/><span className="text-yellow-400">Compliance</span></h1>
                 <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                     Navigate the complex landscape of global regulations. We ensure your business meets standards like GDPR, HIPAA, SOC 2, and ISO 27001.
                 </p>
                 <Link to="/contact" className="bg-white text-[#002B49] px-8 py-3 rounded-lg font-bold transition-all hover:bg-yellow-400 inline-flex items-center">
                     Get Audit Ready <ArrowRight className="ml-2" />
                 </Link>
             </div>

             {/* Certificate Visual */}
             <div className="md:w-1/2 flex justify-center">
                 <div className="relative bg-white text-slate-900 p-8 rounded shadow-2xl w-80 rotate-3 border-t-8 border-yellow-400">
                     <div className="flex justify-between items-start mb-6">
                         <div className="text-3xl font-serif font-bold">CERTIFIED</div>
                         <Award className="text-yellow-500" size={40} />
                     </div>
                     <div className="space-y-4 mb-8">
                         <div className="h-4 bg-slate-100 rounded w-full"></div>
                         <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                         <div className="h-4 bg-slate-100 rounded w-4/6"></div>
                     </div>
                     <div className="flex items-center gap-2 text-green-600 font-bold border-2 border-green-600 px-4 py-2 rounded uppercase text-sm w-fit transform -rotate-6 opacity-80">
                         <FileCheck size={18} /> Compliant
                     </div>
                 </div>
             </div>
         </div>
      </div>

      {/* Standards Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frameworks We Cover</h2>
              <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  { title: "GDPR", desc: "General Data Protection Regulation for EU data privacy." },
                  { title: "HIPAA", desc: "Health Insurance Portability and Accountability Act for healthcare data." },
                  { title: "SOC 2", desc: "Service Organization Control for service providers." },
                  { title: "ISO 27001", desc: "International standard for information security management." },
                  { title: "PCI DSS", desc: "Payment Card Industry Data Security Standard." },
                  { title: "CCPA", desc: "California Consumer Privacy Act." },
                  { title: "NIST", desc: "National Institute of Standards and Technology framework." },
                  { title: "FedRAMP", desc: "Federal Risk and Authorization Management Program." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group">
                      <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700">{item.title}</h3>
                          <ShieldCheck className="text-slate-300 group-hover:text-blue-500" />
                      </div>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Process */}
      <div className="bg-slate-100 py-24">
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Compliance Methodology</h2>
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-lg shadow-sm relative">
                      <div className="absolute -top-4 left-8 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">1</div>
                      <h3 className="text-lg font-bold mb-2">Gap Analysis</h3>
                      <p className="text-slate-600">We assess your current state against desired frameworks to identify deficiencies.</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-sm relative">
                      <div className="absolute -top-4 left-8 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">2</div>
                      <h3 className="text-lg font-bold mb-2">Remediation</h3>
                      <p className="text-slate-600">We help you implement controls, policies, and technical fixes to close the gaps.</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-sm relative">
                      <div className="absolute -top-4 left-8 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">3</div>
                      <h3 className="text-lg font-bold mb-2">Audit Support</h3>
                      <p className="text-slate-600">We guide you through the external audit process to ensure certification.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ComplianceServicesPage;