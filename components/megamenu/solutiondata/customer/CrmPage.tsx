import React, { useEffect, useState } from 'react';
import { 
  Users, BarChart2, MessageCircle, ArrowRight, Funnel, Phone, 
  Mail, CheckCircle2, Zap, Settings, Database, TrendingUp, 
  ShieldCheck, Search, RefreshCw, Layers, UserCheck, Heart,
  PieChart, LineChart, Layout, Globe, Box, Briefcase, 
  Target, Rocket, Clock, IndianRupee, Code
} from 'lucide-react';
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
          <div className="absolute inset-0 bg-slate-950">
              <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[120px] animate-blob"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
              <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-bold tracking-widest uppercase backdrop-blur-md">
                      <Users size={14} /> CRM Services
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                      Personalize Every <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Customer Journey</span>
                  </h1>
                  <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                      GnJ Worldwide designs and implements robust CRM systems that personalize customer experience and effectively automate sales, marketing, and customer service operations.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="group bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] flex items-center">
                          Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button className="px-8 py-4 rounded-full font-bold border border-slate-700 hover:bg-white/5 transition-all text-slate-300 hover:text-white">
                          View Solutions
                      </button>
                  </div>
              </div>

              <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                          <div>
                              <div className="text-sm text-slate-400 uppercase tracking-wide font-bold">Total Pipeline Value</div>
                              <div className="text-3xl font-bold text-white">₹20.04 Cr <span className="text-sm text-green-400 font-normal">+24%</span></div>
                          </div>
                          <div className="p-3 bg-rose-500/20 rounded-2xl text-rose-400">
                              <TrendingUp size={32} />
                          </div>
                      </div>
                      <div className="space-y-6">
                          {[
                              { label: "Lead Generation", val: 85, color: "bg-rose-500" },
                              { label: "Sales Conversion", val: 62, color: "bg-indigo-500" },
                              { label: "Customer Retention", val: 94, color: "bg-emerald-500" }
                          ].map((item, idx) => (
                              <div key={idx}>
                                  <div className="flex justify-between text-sm text-slate-400 mb-2">
                                      <span>{item.label}</span>
                                      <span className="text-white font-bold">{item.val}%</span>
                                  </div>
                                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                      <div 
                                        className={`h-full ${item.color} rounded-full transition-all duration-[1500ms] ease-out`} 
                                        style={{ width: mounted ? `${item.val}%` : '0%' }}
                                      ></div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Meeting All Your CRM Needs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Meeting All Your CRM Needs</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">From implementing a new solution to supporting and evolving an existing system, we work with companies at any stage of CRM adoption.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
              {/* Build New */}
              <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-rose-400 flex items-center gap-3">
                      <Rocket size={24} /> Need to build a new CRM?
                  </h3>
                  <div className="grid gap-6">
                      {[
                          { title: "CRM Consulting", icon: Search, desc: "We analyze your existing needs and processes to find the optimal solution in terms of cost, functionality, and long-term value." },
                          { title: "CRM Implementation", icon: Settings, desc: "We pick a fitting platform, customize it to your requirements, and set up integrations to connect it to your IT ecosystem." },
                          { title: "Custom CRM Development", icon: Code, desc: "If regular platforms fall short, we develop a fully custom solution integrated with your existing corporate systems." }
                      ].map((item, i) => (
                          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group">
                              <div className="flex gap-4">
                                  <div className="p-3 bg-rose-500/20 rounded-xl text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-all">
                                      <item.icon size={24} />
                                  </div>
                                  <div>
                                      <h4 className="font-bold mb-2">{item.title}</h4>
                                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Improve Existing */}
              <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-indigo-400 flex items-center gap-3">
                      <RefreshCw size={24} /> Want to improve your existing CRM?
                  </h3>
                  <div className="grid gap-6">
                      {[
                          { title: "CRM Migration", icon: Layers, desc: "We migrate legacy CRM and data to a new platform with accuracy and minimal disruption, including user training." },
                          { title: "CRM Testing", icon: ShieldCheck, desc: "We verify functionality, performance, and security, providing actionable instructions to fix underperformance." },
                          { title: "CRM Support & Evolution", icon: Heart, desc: "Ongoing maintenance to prevent issues and implementation of new features or workflow modifications as needed." }
                      ].map((item, i) => (
                          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group">
                              <div className="flex gap-4">
                                  <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                      <item.icon size={24} />
                                  </div>
                                  <div>
                                      <h4 className="font-bold mb-2">{item.title}</h4>
                                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Advanced Capabilities */}
      <div className="bg-slate-900/50 py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Advanced CRM Capabilities</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Implementing cutting-edge technologies to give you a competitive edge in customer relationship management.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { 
                        title: "Customer Data Warehousing", 
                        icon: Database, 
                        desc: "Effective ETL/ELT pipelines to properly organize and centrally store large volumes of unstructured, high-velocity customer data." 
                      },
                      { 
                        title: "Advanced Customer Analytics", 
                        icon: BarChart2, 
                        desc: "Solutions that go beyond default capabilities, considering numerous behavior factors and enabling predictive modeling." 
                      },
                      { 
                        title: "ML-Powered Personalization", 
                        icon: Zap, 
                        desc: "Self-learning engines that deliver relevant suggestions based on newly arriving data and customer behavior trends." 
                      }
                  ].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:border-rose-500/50 transition-all group">
                          <div className="w-16 h-16 bg-rose-600/20 rounded-2xl flex items-center justify-center text-rose-400 mb-8 group-hover:bg-rose-600 group-hover:text-white transition-all">
                              <item.icon size={32} />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                          <p className="text-slate-400 leading-relaxed mb-8">{item.desc}</p>
                          <Link to="/contact" className="text-rose-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                              Our Competencies <ArrowRight size={18} />
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Ecosystem Integration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-4xl font-bold mb-8">Part of Your Business Ecosystem</h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                      To make your CRM a reliable hub of current customer information, we integrate it with essential data sources such as ERP systems, communication tools, and sales channels.
                  </p>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      We ensure that data is transferred in the correct format, to the right place, and without delay, regardless of your software stack.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                      {['ERP Systems', 'Communication Tools', 'Sales Channels', 'Marketing Platforms'].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                              <CheckCircle2 className="text-rose-500" size={20} />
                              <span className="font-medium">{item}</span>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="relative">
                  <div className="absolute inset-0 bg-rose-500/20 blur-[100px] rounded-full"></div>
                  <div className="relative bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-2xl">
                      <div className="flex justify-center gap-8 flex-wrap opacity-70">
                          {['Slack', 'Gmail', 'Outlook', 'Zoom', 'Zapier', 'Stripe', 'Salesforce', 'HubSpot'].map((brand, i) => (
                              <span key={i} className="text-xl font-bold text-slate-300 hover:text-rose-400 transition-colors cursor-default">{brand}</span>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white text-slate-950 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Cost of Implementing a CRM</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">On average, CRM development may cost between ₹12.5 Lakhs and ₹2.1 Crores, depending on your specific requirements.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 hover:border-rose-500 transition-all">
                      <div className="text-4xl font-bold text-rose-600 mb-4">From ₹12.5 Lakhs</div>
                      <h3 className="text-xl font-bold mb-4">Standard Solution</h3>
                      <p className="text-slate-600 mb-8">A CRM with standard functionality and minimal customization, optimized for about 10 users.</p>
                      <ul className="space-y-3 mb-8">
                          {['Core Sales Features', 'Basic Reporting', 'Email Integration'].map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                  <CheckCircle2 size={16} className="text-rose-500" /> {item}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="bg-slate-900 text-white p-10 rounded-[3rem] border border-slate-800 hover:border-rose-500 transition-all shadow-2xl">
                      <div className="text-4xl font-bold text-rose-400 mb-4">Up to ₹2.1 Crores</div>
                      <h3 className="text-xl font-bold mb-4">Enterprise Ecosystem</h3>
                      <p className="text-slate-400 mb-8">Heavily customized CRM with industry-specific functionality and advanced analytics for 1,000+ users.</p>
                      <ul className="space-y-3 mb-8">
                          {['Advanced ML Analytics', 'Multi-Entity Support', 'Custom Integrations'].map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                  <CheckCircle2 size={16} className="text-rose-500" /> {item}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What to Expect After Implementation</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Tailored CRM solutions drive measurable improvements across your entire business operation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { title: "Faster Sales Cycles", desc: "Due to the automation of up to 30% of sales activities.", icon: Clock },
                  { title: "Lead Volume Growth", icon: TrendingUp, desc: "Due to unlimited multi-channel marketing campaigns managed simultaneously." },
                  { title: "Reduced Support Workload", icon: UserCheck, desc: "Thanks to effective self-service tools for customers." },
                  { title: "Higher Conversions", icon: Target, desc: "Made possible by dynamic customer segmentation and relevant offerings." },
                  { title: "Customer Loyalty", icon: Heart, desc: "Personalized approach enabled by well-documented conversation history." },
                  { title: "Faster Service", icon: Zap, desc: "Due to intelligent workflow automation and instant data access." }
              ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                      <div className="shrink-0 w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center text-rose-400">
                          <item.icon size={24} />
                      </div>
                      <div>
                          <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-rose-600 to-indigo-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to transform your customer relationships?</h2>
                  <p className="text-xl text-rose-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Partner with GnJ Worldwide to build a CRM that drives growth and loyalty.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-rose-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-rose-900 text-white border border-rose-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default CrmPage;
