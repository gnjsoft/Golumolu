import React, { useEffect, useState } from 'react';
import { CreditCard, Globe, Lock, ArrowRight, Repeat, Check, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentManagementPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="bg-teal-600 text-white py-24 px-4 overflow-hidden relative">
          {/* Animated Background Particles */}
          <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute bg-white/10 rounded-full blur-xl animate-pulse"
                    style={{
                        width: Math.random() * 200 + 50 + 'px',
                        height: Math.random() * 200 + 50 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        animationDuration: Math.random() * 5 + 3 + 's',
                        animationDelay: Math.random() * 2 + 's'
                    }}
                  ></div>
              ))}
          </div>

          <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-teal-600 shadow-2xl mb-8 transform rotate-6 hover:rotate-0 transition-transform duration-500 border-4 border-teal-200">
                      <CreditCard size={48} />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 transition-all duration-700 delay-200 ${active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  Global Payment <br/> Orchestration
              </h1>
              <p className={`text-xl text-teal-50 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  Accept payments anywhere, anytime. Unified platform for online, in-store, and mobile transactions.
              </p>
              <div className={`transition-all duration-700 delay-400 ${active ? 'opacity-100' : 'opacity-0'}`}>
                  <Link to="/contact" className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-teal-50 hover:shadow-xl transition-all inline-flex items-center transform hover:-translate-y-1">
                      Integrate Now <ArrowRight className="ml-2" />
                  </Link>
              </div>
          </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24 -mt-20 relative z-20">
          <div className="grid md:grid-cols-3 gap-6">
              {[
                  { icon: Globe, title: "Cross-Border", desc: "Accept 100+ currencies with local settlement methods." },
                  { icon: Lock, title: "Fraud Protection", desc: "AI-driven risk analysis to block fraudulent transactions in real-time." },
                  { icon: Repeat, title: "Recurring Billing", desc: "Automated subscription management and invoicing engine." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${500 + (idx * 150)}ms` }}
                  >
                      <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Integration Section */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900 text-teal-400 text-xs font-bold uppercase mb-6">
                      <Zap size={14} /> Developer Ready
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Developer-First API</h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      Our robust API allows for seamless integration into your existing website or app. With comprehensive documentation and SDKs for all major languages, you'll be up and running in no time.
                  </p>
                  <ul className="space-y-4">
                      {["RESTful Architecture", "99.999% Uptime SLA", "PCI-DSS Level 1 Compliance"].map((feat, i) => (
                          <li key={i} className="flex items-center gap-3">
                              <div className="bg-teal-500 rounded-full p-1"><Check size={12} className="text-black" /></div>
                              <span className="font-medium text-slate-200">{feat}</span>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="bg-[#1e1e1e] rounded-2xl p-8 shadow-2xl font-mono text-sm border border-slate-700 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"></div>
                  <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-purple-400">const <span className="text-blue-400">payment</span> = <span className="text-yellow-400">await</span> gateway.charge({`{`}</div>
                  <div className="pl-4 text-slate-300">
                      amount: <span className="text-green-400">5000</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                      currency: <span className="text-green-400">'USD'</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                      source: <span className="text-green-400">'tok_visa'</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                      description: <span className="text-green-400">'Enterprise License'</span>
                  </div>
                  <div className="text-purple-400">{`}`});</div>
                  <div className="mt-4 text-slate-500">// Transaction Successful</div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default PaymentManagementPage;