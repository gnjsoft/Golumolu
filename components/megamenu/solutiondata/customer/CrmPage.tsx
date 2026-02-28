import React, { useEffect, useState } from 'react';
import { Users, BarChart2, MessageCircle, ArrowRight, Funnel, Phone, Mail, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CrmPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white selection:bg-rose-500 selection:text-white">
      
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-slate-950">
              <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[120px] animate-blob"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Content */}
              <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-bold tracking-widest uppercase backdrop-blur-md">
                      <Users size={14} /> Intelligent Relationships
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                      Turn Data Into <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Deep Connections</span>
                  </h1>
                  <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                      A CRM that thinks. Automate outreach, predict deal closure, and unify every customer interaction into a single source of truth.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="group bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] flex items-center">
                          Start Free Trial <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button className="px-8 py-4 rounded-full font-bold border border-slate-700 hover:bg-white/5 transition-all text-slate-300 hover:text-white">
                          Watch Demo
                      </button>
                  </div>
              </div>

              {/* Interactive Visual - Pipeline Board */}
              <div className={`relative perspective-1000 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 rotate-y-0 translate-x-0' : 'opacity-0 rotate-y-12 translate-x-20'}`}>
                  <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-transform duration-500">
                      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                          <div>
                              <div className="text-sm text-slate-400 uppercase tracking-wide font-bold">Sales Pipeline</div>
                              <div className="text-2xl font-bold text-white">$2.4M <span className="text-sm text-green-400 font-normal">+18%</span></div>
                          </div>
                          <div className="flex -space-x-2">
                              {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>)}
                          </div>
                      </div>
                      
                      <div className="space-y-3">
                          {[
                              { stage: "Qualified Lead", val: 85, color: "bg-blue-500" },
                              { stage: "Meeting Scheduled", val: 60, color: "bg-indigo-500" },
                              { stage: "Proposal Sent", val: 45, color: "bg-purple-500" },
                              { stage: "Negotiation", val: 30, color: "bg-rose-500" },
                              { stage: "Closed Won", val: 20, color: "bg-emerald-500" }
                          ].map((item, idx) => (
                              <div key={idx} className="group">
                                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                                      <span>{item.stage}</span>
                                      <span>{item.val} deals</span>
                                  </div>
                                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                                      <div 
                                        className={`h-full ${item.color} rounded-full transition-all duration-[1500ms] ease-out shadow-[0_0_10px_currentColor]`} 
                                        style={{ width: mounted ? `${item.val}%` : '0%' }}
                                      ></div>
                                  </div>
                              </div>
                          ))}
                      </div>

                      {/* Floating Card */}
                      <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-4 animate-float">
                          <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                              <Zap size={24} />
                          </div>
                          <div>
                              <div className="text-xs text-slate-400">AI Prediction</div>
                              <div className="font-bold text-white">Win Probability: 92%</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Funnel, title: "Visual Pipelines", desc: "Drag-and-drop deal management with customizable stages." },
                  { icon: MessageCircle, title: "Omnichannel Inbox", desc: "Email, chat, social, and voice in one unified timeline." },
                  { icon: BarChart2, title: "Revenue Forecasting", desc: "AI-driven insights to predict quarterly performance." },
                  { icon: Mail, title: "Smart Campaigns", desc: "Personalized drip sequences that stop when a lead replies." },
                  { icon: Phone, title: "Power Dialer", desc: "Click-to-call directly from the browser with auto-logging." },
                  { icon: Users, title: "Lead Enrichment", desc: "Auto-populate contact info from social profiles." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-rose-500/30 transition-all duration-300 hover:-translate-y-1 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                          <item.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Integration Marquee */}
      <div className="py-20 border-y border-white/5 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
              <h2 className="text-2xl font-bold text-white">Integrates seamlessly with</h2>
          </div>
          <div className="flex justify-center gap-12 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-4">
              {['Slack', 'Gmail', 'Outlook', 'Zoom', 'Zapier', 'Stripe'].map((brand, i) => (
                  <span key={i} className="text-2xl font-bold text-slate-300">{brand}</span>
              ))}
          </div>
      </div>

  </div>
  );
};

export default CrmPage;