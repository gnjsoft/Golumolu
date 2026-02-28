import React, { useEffect, useState } from 'react';
import { CreditCard, Repeat, Shield, Globe, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-cyan-600 text-white py-24 px-4 text-center">
          <CreditCard size={64} className="mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Payment Solutions</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Secure, fast, and borderless payment processing for the global economy.
          </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Frictionless Transactions</h2>
                  <p className="text-slate-600 text-lg mb-8">
                      We integrate and develop custom payment gateways that support multiple currencies, cryptocurrencies, and alternative payment methods (APMs).
                  </p>
                  
                  <div className="space-y-4">
                      {[
                          { title: "Real-Time Payments", icon: Zap },
                          { title: "Cross-Border Settlement", icon: Globe },
                          { title: "Recurring Billing", icon: Repeat },
                          { title: "PCI-DSS Compliance", icon: Shield }
                      ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                              <item.icon className="text-cyan-600" />
                              <span className="font-bold text-slate-800">{item.title}</span>
                          </div>
                      ))}
                  </div>
              </div>
              
              <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl">
                  <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                      <span className="font-mono text-cyan-400">PAYMENT GATEWAY</span>
                      <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                  </div>
                  <div className="space-y-6">
                      <div className="flex justify-between items-center">
                          <span className="text-slate-400">Status</span>
                          <span className="text-green-400 font-bold flex items-center gap-1"><Zap size={14}/> Active</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="text-slate-400">Total Processed</span>
                          <span className="text-white font-bold text-xl">$4,285,900.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="text-slate-400">Success Rate</span>
                          <span className="text-white font-bold">99.98%</span>
                      </div>
                      <button className="w-full bg-cyan-500 text-white font-bold py-3 rounded-lg mt-4 hover:bg-cyan-600 transition-colors">
                          View Analytics
                      </button>
                  </div>
              </div>
          </div>
          
          <div className="text-center mt-20">
              <Link to="/contact" className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 text-lg">
                  Integrate Payments <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>
    </div>
  );
};

export default PaymentsPage;