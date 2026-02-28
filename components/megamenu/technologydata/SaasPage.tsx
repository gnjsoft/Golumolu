import React, { useEffect } from 'react';
import { Layout, Users, CreditCard, ArrowRight, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SaasPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-50 py-24 px-4 text-center border-b border-indigo-100">
          <div className="inline-block p-4 bg-white rounded-2xl shadow-lg mb-6 text-indigo-600">
              <Layout size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">SaaS Development</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Build scalable, multi-tenant software products. From MVP to enterprise scale with subscription billing built-in.
          </p>
          <Link to="/contact" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
              Launch Your Product <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Users, title: "Multi-Tenancy", desc: "Secure architecture serving multiple customers from a single instance." },
                  { icon: CreditCard, title: "Subscription Billing", desc: "Integration with Stripe/Paddle for recurring payments and tier management." },
                  { icon: Code, title: "API First", desc: "Robust API design for third-party integrations and headless usage." },
                  { icon: Zap, title: "Onboarding", desc: "Frictionless user signup flows and interactive product tours." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-all group hover:-translate-y-1">
                      <item.icon size={32} className="text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default SaasPage;