import React, { useEffect, useState } from 'react';
import { Calculator, FileText, PieChart, ArrowRight, CheckSquare, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountingSoftwarePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-50 py-24 px-4 text-center border-b border-slate-200 relative overflow-hidden">
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50"></div>
          
          <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-20 h-20 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center mx-auto mb-8 text-blue-600 rotate-12">
                  <Calculator size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Precision Accounting</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                  Automate your bookkeeping, simplify tax compliance, and gain crystal-clear visibility into your business finances.
              </p>
              <div className="flex justify-center gap-4">
                  <Link to="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                      Free Trial
                  </Link>
                  <Link to="/contact" className="bg-white text-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-slate-50 border border-slate-200 transition-colors">
                      View Features
                  </Link>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: FileText, title: "Invoicing", desc: "Create professional invoices, send automated reminders, and get paid faster." },
                  { icon: CheckSquare, title: "Expense Tracking", desc: "Scan receipts, categorize expenses, and reconcile bank transactions automatically." },
                  { icon: Layers, title: "Multi-Entity Support", desc: "Manage multiple subsidiaries and currencies in a single consolidated view." },
                  { icon: PieChart, title: "Financial Reporting", desc: "Generate P&L, Balance Sheet, and Cash Flow statements with one click." },
                  { icon: Calculator, title: "Tax Compliance", desc: "Automated tax calculations and report generation for GST/VAT filing." },
                  { icon: FileText, title: "Payroll Integration", desc: "Seamlessly link with payroll systems to automate salary journals." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-default ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-slate-50 rounded-lg text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <item.icon size={24} />
                          </div>
                          <ArrowRight className="text-slate-300 group-hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default AccountingSoftwarePage;