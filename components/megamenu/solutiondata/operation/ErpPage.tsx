import React, { useEffect, useState } from 'react';
import { Layers, Database, Users, BarChart, Globe, ArrowRight, Settings, CheckCircle, Zap, Shield, Clock, TrendingUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErpPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Layers size={14} /> Unified Business Logic
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Enterprise Resource <span className="text-blue-500">Planning</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Integrate your core business processes into a single, reliable system. From finance to supply chain, gain visibility and control.
                </p>
                <div className="flex gap-4">
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center">
                        Deploy ERP <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </div>
            
            <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative w-96 h-96">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse blur-3xl"></div>
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center justify-center aspect-square transform translate-y-8">
                            <Users size={40} className="text-green-400 mb-2" />
                            <span className="font-bold">HR & Payroll</span>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center justify-center aspect-square">
                            <BarChart size={40} className="text-yellow-400 mb-2" />
                            <span className="font-bold">Finance</span>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center justify-center aspect-square transform translate-y-8">
                            <Settings size={40} className="text-purple-400 mb-2" />
                            <span className="font-bold">Operations</span>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center justify-center aspect-square">
                            <Globe size={40} className="text-blue-400 mb-2" />
                            <span className="font-bold">Supply Chain</span>
                        </div>
                    </div>
                    {/* Connecting center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-900 rounded-full border-4 border-slate-700 z-20 flex items-center justify-center shadow-2xl">
                        <Database size={32} className="text-white" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Core ERP Modules</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive tools designed to streamline every aspect of your enterprise operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Financial Management", desc: "General ledger, accounts payable/receivable, and fixed asset management in real-time." },
                  { title: "Human Capital", desc: "Recruitment, onboarding, payroll processing, and performance management modules." },
                  { title: "Procurement", desc: "Automated purchasing workflows, vendor management, and inventory optimization." },
                  { title: "Sales & CRM", desc: "Integrated customer data, order processing, and sales forecasting tools." },
                  { title: "Manufacturing", desc: "Production planning, bill of materials (BOM), and shop floor control." },
                  { title: "Supply Chain Management", desc: "End-to-end visibility from raw materials to final delivery, optimizing logistics and warehousing." },
                  { title: "Service Operations", desc: "Manage field services, maintenance schedules, and customer support tickets efficiently." },
                  { title: "Project Management", desc: "Track project timelines, resource allocation, budgets, and milestones in a unified view." },
                  { title: "Document Management", desc: "Centralized repository for secure storage, version control, and easy retrieval of enterprise documents." },
                  { title: "Knowledge Management", desc: "Capture and share organizational expertise through a searchable internal knowledge base." },
                  { title: "Chatbots & Virtual Assistants", desc: "AI-powered assistants to handle routine queries and provide instant support to users and customers." },
                  { title: "Data Analytics & BI", desc: "Advanced data processing and business intelligence for deep insights and strategic forecasting." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group transform ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full group-hover:w-20 transition-all duration-300"></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Why Choose Our ERP */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Our ERP Solution?</h2>
              <p className="text-lg text-slate-600 mb-8">
                We don't just provide software; we provide a foundation for growth. Our ERP systems are built on modern architecture that scales with your business.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Zap className="text-yellow-500" />, title: "Real-time Data Sync", desc: "Eliminate data silos with instant synchronization across all departments." },
                  { icon: <Shield className="text-green-500" />, title: "Enterprise Security", desc: "Bank-grade encryption and role-based access control to keep your data safe." },
                  { icon: <TrendingUp className="text-blue-500" />, title: "Scalable Architecture", desc: "Easily add modules and users as your business expands globally." }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">{benefit.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                      <p className="text-slate-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">30%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Efficiency Boost</div>
                </div>
                <div className="bg-blue-600 p-6 rounded-2xl shadow-md text-white">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-blue-100 uppercase tracking-wider font-bold">Global Support</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-900 p-6 rounded-2xl shadow-md text-white">
                  <div className="text-3xl font-bold mb-1">99.9%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">Uptime SLA</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Integrations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Implementation Roadmap</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">A structured approach to ensuring your ERP deployment is successful from day one.</p>
        </div>
        
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", title: "Discovery", desc: "Analyzing your current workflows and identifying pain points." },
              { step: "02", title: "Configuration", desc: "Tailoring the ERP modules to match your specific business logic." },
              { step: "03", title: "Migration", desc: "Securely transferring your legacy data into the new unified system." },
              { step: "04", title: "Go-Live", desc: "Staff training and final deployment with ongoing hyper-care support." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <HelpCircle className="mx-auto text-blue-500 mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ERP Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How long does a typical ERP implementation take?", a: "Implementation timelines vary based on complexity, but typically range from 3 to 9 months for a full enterprise rollout." },
              { q: "Can we integrate our existing CRM with your ERP?", a: "Yes, our ERP features a robust API layer that supports seamless integration with major CRM platforms like Salesforce and HubSpot." },
              { q: "Is the ERP available on mobile devices?", a: "Absolutely. Our ERP is fully responsive and comes with dedicated iOS and Android apps for on-the-go management." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {faq.q}
                </h4>
                <p className="text-slate-400 ml-4">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to unify your business operations?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of enterprises that have transformed their efficiency with our ERP solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
              Request a Demo
            </Link>
            <Link to="/contact" className="bg-blue-700 text-white border border-blue-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpPage;