import React, { useEffect, useState } from 'react';
import { IndianRupee, FileText, CheckCircle, Percent, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LendingPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-blue-600 text-white py-24 px-4 flex flex-col items-center text-center">
          <IndianRupee size={64} className="mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Lending Solutions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              End-to-end Loan Origination Systems (LOS) and Loan Management Systems (LMS) for banks, credit unions, and alternative lenders.
          </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                  { icon: FileText, title: "Origination", desc: "Streamlined application intake with document upload and e-signature." },
                  { icon: CheckCircle, title: "Underwriting", desc: "Automated credit decisioning using alternative data and AI scoring models." },
                  { icon: Percent, title: "Servicing", desc: "Payment processing, collections management, and borrower portals." }
              ].map((item, idx) => (
                  <div key={idx} className="text-center p-8 border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors shadow-sm">
                      <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                          <item.icon size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                  <h2 className="text-3xl font-bold mb-4">P2P & Crowdfunding</h2>
                  <p className="text-slate-400 max-w-lg mb-8">
                      Looking to build a peer-to-peer lending platform? We offer white-label solutions that connect borrowers directly with investors, complete with secondary markets and auto-invest tools.
                  </p>
                  <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center">
                      Launch Platform <ArrowRight className="ml-2" />
                  </Link>
              </div>
              {/* Abstract Graphic */}
              <div className="w-40 h-40 border-4 border-blue-500/30 rounded-full flex items-center justify-center relative">
                  <div className="w-24 h-24 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default LendingPage;