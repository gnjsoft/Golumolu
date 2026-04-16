import React, { useEffect, useState } from 'react';
import { 
  Calculator, FileText, PieChart, ArrowRight, CheckSquare, Layers, 
  BookOpen, Database, Users, ArrowUpRight, ArrowDownLeft, Box, 
  Building, RefreshCw, BarChart3, ShieldCheck, ShoppingCart, 
  Briefcase, Wallet, Target, Landmark, CheckCircle2, Zap, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountingSoftwarePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden bg-blue-950 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-blue-950"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-3 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6 backdrop-blur-sm">
                      <Calculator size={40} className="text-blue-400" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Custom Accounting Software
              </h1>
              <p className={`text-xl text-blue-100/80 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Tailored solutions for general ledger, A/P, A/R, asset accounting, and financial reporting. Drive efficiency with intelligent automation.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center group shadow-lg shadow-blue-500/20">
                      Get a Free Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </div>
      </div>

      {/* Essence Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h2 className="text-4xl font-bold mb-8">Custom Accounting Software: The Essence</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      Custom accounting software is a solution that provides unique functionality tailored to each company’s specific needs across general ledger, payables and receivables management, asset and inventory accounting, financial data reconciliation, payroll and tax management, and financial reporting.
                  </p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      To ensure real-time financial data sync, custom accounting solutions may integrate with CRM, HRMS, an inventory management system, asset management software, a financial planning and analysis solution, and other business-critical systems.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                          <div className="text-blue-600 font-bold text-3xl mb-2">₹1.7Cr - ₹3.4Cr</div>
                          <div className="text-slate-500 text-sm">Estimated development cost for midsize companies</div>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                          <div className="text-green-600 font-bold text-3xl mb-2">Up to 290%</div>
                          <div className="text-slate-500 text-sm">Potential annual ROI for custom solutions</div>
                      </div>
                  </div>
              </div>
              <div className={`relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-200 relative z-10">
                      <div className="space-y-6">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                              <h3 className="font-bold text-xl">Financial Health Dashboard</h3>
                              <TrendingUp className="text-green-500" />
                          </div>
                          <div className="space-y-4">
                              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                  <span className="text-sm font-medium text-slate-600">Net Revenue</span>
                                  <span className="font-bold text-blue-600">₹10.7Cr</span>
                              </div>
                              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                  <span className="text-sm font-medium text-slate-600">Operating Margin</span>
                                  <span className="font-bold text-green-600">24.5%</span>
                              </div>
                              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                  <span className="text-sm font-medium text-slate-600">DSO</span>
                                  <span className="font-bold text-orange-600">32 Days</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              </div>
          </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-4xl font-bold mb-4">Key Features of Custom Accounting Software</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Unique capabilities to help companies from various industries maximize the efficiency of their accounting processes.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      {
                        title: "Journal Entry Management",
                        icon: BookOpen,
                        desc: "Rule-based creation, update, and approval of journal entries in GL and subledgers. Supports multi-currency and automated attachment of source documents."
                      },
                      {
                        title: "General Ledger (GL)",
                        icon: Database,
                        desc: "Multi-dimensional COA with user-defined dimensions. Rule-based consolidation across multiple entities and customizable GL architecture."
                      },
                      {
                        title: "Invoicing",
                        icon: FileText,
                        desc: "User-defined rules for invoice generation, customizable templates, and multi-department approval workflows with real-time tracking."
                      },
                      {
                        title: "Payroll Management",
                        icon: Users,
                        desc: "Custom formulas for salaries, deductions, and bonuses. Automated recording in payroll and general ledgers with customizable payment schedules."
                      },
                      {
                        title: "Accounts Receivable (A/R)",
                        icon: ArrowUpRight,
                        desc: "Automated payment collection via various methods. Custom prioritization rules for collection and automated payment allocation."
                      },
                      {
                        title: "Accounts Payable (A/P)",
                        icon: ArrowDownLeft,
                        desc: "Automated invoice validation against POs. Custom prioritization rules for routing and scheduled/ad-hoc payments."
                      },
                      {
                        title: "Inventory Accounting",
                        icon: Box,
                        desc: "Tracking inventory values across multiple locations and production stages. Automated record creation based on purchase orders."
                      },
                      {
                        title: "Fixed Asset Accounting",
                        icon: Building,
                        desc: "Calculating original costs, capitalized costs, and depreciation using various methods (straight line, double declining, etc.)."
                      },
                      {
                        title: "Tax Management",
                        icon: Calculator,
                        desc: "Automated calculation of VAT, sales, and income taxes based on region-specific rates. Rule-based tax filing and payment schedules."
                      },
                      {
                        title: "Reconciliation",
                        icon: RefreshCw,
                        desc: "Rule-based reconciliation of bank statements with GL, A/P, and A/R. Automated duplicate removal and intercompany reconciliation."
                      },
                      {
                        title: "Analytics and Reporting",
                        icon: BarChart3,
                        desc: "Configurable dashboards for GL/AR/AP performance. Automated financial reporting (P&L, Balance Sheet) with customizable templates."
                      },
                      {
                        title: "Security and Compliance",
                        icon: ShieldCheck,
                        desc: "MFA, RBAC, and data encryption. Compliance with GAAP, IFRS, SOC1/2, SOX, and GDPR. Electronic signature workflows and audit trails."
                      }
                  ].map((feature, i) => (
                      <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-500 hover:bg-white transition-all group">
                          <div className="bg-blue-100 p-3 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 transition-colors">
                              <feature.icon className="text-blue-600 group-hover:text-white transition-colors" />
                          </div>
                          <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                          <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Integrations Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                          { icon: Users, label: "CRM" },
                          { icon: Box, label: "Inventory" },
                          { icon: Building, label: "Asset Mgmt" },
                          { icon: ShoppingCart, label: "Procurement" },
                          { icon: Briefcase, label: "HRMS" },
                          { icon: Wallet, label: "Cash Mgmt" },
                          { icon: Target, label: "FP&A" },
                          { icon: Landmark, label: "Bank Accounts" },
                          { icon: PieChart, label: "BI Solutions" }
                      ].map((integration, i) => (
                          <div key={i} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                              <integration.icon className="w-8 h-8 text-blue-600 mb-3" />
                              <span className="font-bold text-xs text-slate-700 text-center">{integration.label}</span>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-bold mb-8">Go-To Integrations</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      GnJ Worldwide designs a cohesive business environment where the accounting solution is integrated with financial transaction sources and corporate finance planning systems.
                  </p>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      The main benefit of the integration is time-effective and accurate financial data entry, eliminating manual errors and ensuring a single source of truth.
                  </p>
                  <ul className="space-y-4">
                      {[
                          "CRM: Populate invoices with accurate customer data and terms.",
                          "Inventory: Accurate recording of purchasing and utilization.",
                          "HRMS: Enable accurate payroll calculation.",
                          "BI: Enable deep accounting analytics and reporting."
                      ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                              <span className="text-slate-700 font-medium">{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to automate your accounting?</h2>
                  <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                      Join high-performing organizations that have transformed their accounting workflows into a strategic competitive advantage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-blue-800 text-white border border-blue-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all">
                          Schedule a Demo
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AccountingSoftwarePage;
