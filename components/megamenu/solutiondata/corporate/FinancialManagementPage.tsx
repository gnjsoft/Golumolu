import React, { useEffect, useState } from 'react';
import { 
  TrendingUp, PieChart, DollarSign, Shield, ArrowRight, 
  Activity, Landmark, Search, Cpu, Settings, 
  RefreshCw, ShieldCheck, BarChart3, 
  FileText, CreditCard, Receipt, Calculator, 
  Wallet, Briefcase, Target, Layers, 
  CheckCircle2, Globe, Database, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialManagementPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white selection:bg-yellow-500 selection:text-slate-900">
      
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B1120] to-black"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="inline-flex items-center gap-2 text-yellow-400 font-bold tracking-widest uppercase mb-6 text-sm border border-yellow-500/30 px-4 py-1 rounded-full bg-yellow-500/10">
                    <DollarSign size={16} /> Financial Software Consulting
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-serif tracking-tight">
                    Bring Corporate Financial <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">Management to New Heights</span>
                </h1>
                <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Drive improvements across corporate financial management processes and target ambitious business innovations with robust finance software and advanced technologies like AI, ML, Big Data, and Blockchain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="bg-yellow-500 text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                        Get a Free Consultation
                    </Link>
                    <Link to="/contact" className="px-10 py-4 rounded-full font-bold border border-slate-700 hover:bg-white/5 transition-all">
                        Schedule a Demo
                    </Link>
                </div>
            </div>
        </div>
      </div>

      {/* Service Scope Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">GnJ Worldwide’s Service Scope</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Customized financial software consulting services to meet your unique business needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  {
                    icon: Search,
                    title: "Software Audit & Consulting",
                    desc: "Auditing existing tools, evaluating technical pains, and planning ecosystem improvements to increase efficiency and optimize costs.",
                    points: ["Efficiency Audit", "Cost Optimization", "Security Assessment"]
                  },
                  {
                    icon: Cpu,
                    title: "Advanced Tech Consulting",
                    desc: "Consulting on Cloud, AI/ML, Big Data, and Blockchain for high availability, scalability, and intelligent decision-making.",
                    points: ["AI/ML Predictions", "Blockchain Traceability", "Scalable Architecture"]
                  },
                  {
                    icon: Settings,
                    title: "Development Consulting",
                    desc: "Designing unique financial solutions, choosing optimal tech stacks, and introducing seamless integration plans.",
                    points: ["Custom Design", "Optimal Tech Stack", "Integration Planning"]
                  },
                  {
                    icon: RefreshCw,
                    title: "Modernization Consulting",
                    desc: "Gradual transition of legacy software to modern technologies without disrupting critical financial operations.",
                    points: ["Legacy Revamping", "Architecture Modernization", "Feature Expansion"]
                  },
                  {
                    icon: Layers,
                    title: "Software Implementation",
                    desc: "Full-cycle implementation or collaboration with your in-house team, ensuring 100% knowledge transfer.",
                    points: ["Team Collaboration", "Full Implementation", "Knowledge Transfer"]
                  },
                  {
                    icon: ShieldCheck,
                    title: "Software Maintenance",
                    desc: "SLA-based maintenance, security assessments, compliance pre-audits, and financial IT automation.",
                    points: ["SLA Support", "Compliance Audit", "IT Automation"]
                  }
              ].map((service, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white/5 border border-white/5 p-8 rounded-[2rem] hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-500 group transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                    style={{ transitionDelay: `${100 + (idx * 100)}ms` }}
                  >
                      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                          <service.icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
                      <ul className="space-y-2">
                          {service.points.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-center gap-2 text-xs font-bold text-yellow-500/70">
                                  <CheckCircle2 size={14} /> {point}
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      </div>

      {/* Specialized Solutions Grid */}
      <div className="bg-slate-900/50 py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Financial Solutions We Specialize In</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Expert consulting for the successful implementation of integrated corporate finance solutions.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { icon: Zap, title: "Process Automation", desc: "Eliminating manual efforts in bookkeeping, payroll, and tax management." },
                      { icon: Calculator, title: "Automated Accounting", desc: "Increasing accuracy across multi-entity bookkeeping and invoicing." },
                      { icon: Landmark, title: "Enterprise Accounting", desc: "Streamlining complex operations in large organizations." },
                      { icon: Database, title: "General Ledger", desc: "Real-time aggregation and reconciliation of financial transactions." },
                      { icon: Receipt, title: "AR Automation", desc: "Automated customer invoicing and real-time receivables tracking." },
                      { icon: CreditCard, title: "Automated Billing", desc: "Streamlined general-purpose and industry-specific billing workflows." },
                      { icon: FileText, title: "E-Invoicing", desc: "Compliance with global regulations like ZATCA and EU directives." },
                      { icon: Search, title: "Invoice Processing", desc: "End-to-end processing from data capture to general ledger posting." },
                      { icon: Wallet, title: "Payment Automation", desc: "Advanced analytics for accurate liquidity and working capital planning." },
                      { icon: Target, title: "Cost Control", desc: "Automated budgeting, allocation, and variance analysis." },
                      { icon: TrendingUp, title: "Revenue Management", desc: "Real-time tracking and automated recognition per accounting standards." },
                      { icon: DollarSign, title: "Pricing Software", desc: "Analytics-based price optimization for maximized profitability." },
                      { icon: Globe, title: "Cash Management", desc: "Forecasting and reporting cash flows across international branches." },
                      { icon: Briefcase, title: "Treasury Software", desc: "Automation across cash, investment, debt, and risk management." },
                      { icon: Activity, title: "Financial Modeling", desc: "Simulating and forecasting complex financial scenarios." },
                      { icon: BarChart3, title: "Financial Analytics", desc: "ML-based forecasting and organization-wide transaction insights." }
                  ].map((solution, idx) => (
                      <div key={idx} className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 hover:bg-slate-800 transition-all group">
                          <solution.icon className="w-8 h-8 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                          <h4 className="font-bold mb-2 text-lg">{solution.title}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed">{solution.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-32 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-[3rem] p-12 md:p-20 text-slate-950 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">Ready to transform your <br/> financial operations?</h2>
                  <p className="text-xl text-slate-900/80 mb-12 max-w-2xl mx-auto font-medium">
                      Partner with GnJ Worldwide to implement robust financial software that drives innovation and efficiency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-slate-950 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-900 transition-all shadow-xl">
                          Get Started Today
                      </Link>
                      <Link to="/contact" className="bg-transparent border-2 border-slate-950 text-slate-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-950 hover:text-white transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

export default FinancialManagementPage;
