import React, { useEffect, useState } from 'react';
import { Ticket, CheckCircle, Clock, Zap, ArrowRight, MessageCircle, Headphones, Shield, BarChart, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItHelpDeskPage: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setProgress(98), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-600 text-white py-24 px-4 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto">
             <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center backdrop-blur-md">
                 <Ticket size={40} className="text-white" />
             </div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Help Desk Solutions</h1>
             <p className="text-xl text-indigo-100 mb-10">
                 Streamlined ticket management and rapid resolution for your enterprise.
             </p>
             
             {/* Stats Bar */}
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col md:flex-row justify-around gap-8 border border-white/20">
                 <div>
                     <div className="text-3xl font-bold text-yellow-400 mb-1">15 min</div>
                     <div className="text-xs text-indigo-200 uppercase tracking-wide">Avg. Response Time</div>
                 </div>
                 <div>
                     <div className="text-3xl font-bold text-green-400 mb-1">98%</div>
                     <div className="text-xs text-indigo-200 uppercase tracking-wide">First Contact Resolution</div>
                 </div>
                 <div>
                     <div className="text-3xl font-bold text-blue-300 mb-1">24/7</div>
                     <div className="text-xs text-indigo-200 uppercase tracking-wide">Coverage</div>
                 </div>
             </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row gap-16">
              <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Level Agreements (SLAs)</h2>
                  <p className="text-slate-600 text-lg mb-8">
                      We adhere to strict SLAs to ensure your business operations are never hindered by technical issues. Our tiered support structure ensures the right expertise is applied to every problem.
                  </p>
                  <ul className="space-y-4">
                      {["L1 Support: Basic troubleshooting & password resets", "L2 Support: Software issues & configuration", "L3 Support: Complex backend & server issues"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                              <div className="bg-indigo-100 text-indigo-600 rounded-full p-1"><CheckCircle size={16} /></div>
                              <span className="font-semibold text-slate-800">{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-center items-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-8">Customer Satisfaction</h3>
                  <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-90">
                          <circle cx="96" cy="96" r="88" stroke="#e2e8f0" strokeWidth="12" fill="none" />
                          <circle 
                            cx="96" 
                            cy="96" 
                            r="88" 
                            stroke="#4f46e5" 
                            strokeWidth="12" 
                            fill="none" 
                            strokeDasharray="552" 
                            strokeDashoffset={552 - (552 * progress) / 100} 
                            className="transition-all duration-[2s] ease-out"
                          />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                          <span className="text-4xl font-bold text-slate-900">{progress}%</span>
                          <span className="block text-xs text-slate-500">CSAT Score</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Key Features of Our Help Desk */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Features of Our Help Desk</h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Our comprehensive IT Help Desk solutions are designed to empower your team, minimize downtime, and boost overall productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Omnichannel Support", desc: "Reach us via phone, email, live chat, or our dedicated self-service portal for immediate assistance.", icon: MessageCircle },
              { title: "Advanced Ticketing System", desc: "Automated ticket routing, prioritization, and tracking to ensure no request falls through the cracks.", icon: Ticket },
              { title: "Remote Troubleshooting", desc: "Secure remote access capabilities allow our technicians to resolve issues directly on your devices.", icon: Settings },
              { title: "Knowledge Base Management", desc: "A comprehensive, searchable library of FAQs and guides to empower users to solve common issues.", icon: Users },
              { title: "Asset & Inventory Tracking", desc: "Keep track of all hardware and software assets, managing lifecycles and compliance effortlessly.", icon: Shield },
              { title: "Real-Time Analytics", desc: "Detailed reporting on ticket volumes, resolution times, and user satisfaction to drive continuous improvement.", icon: BarChart }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Help Desk Solutions? */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-50 rounded-[3rem] transform -rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1000" 
                alt="Help Desk Support Team" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                  <Headphones size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">24/7/365</div>
                  <div className="text-sm text-slate-500 font-medium">Always-On Support</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose Our Help Desk Solutions?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just fix IT problems; we prevent them. Our proactive approach to IT support ensures your business runs smoothly, allowing you to focus on growth rather than technical glitches.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Proactive Issue Resolution", desc: "We monitor your systems 24/7 to identify and resolve potential issues before they impact your users." },
                  { title: "Scalable Support Models", desc: "Whether you need a fully outsourced help desk or overflow support for your internal team, we adapt to your needs." },
                  { title: "Certified IT Professionals", desc: "Our technicians hold industry-leading certifications (ITIL, Microsoft, Cisco) to provide expert guidance." },
                  { title: "Seamless Integration", desc: "We integrate our help desk tools with your existing IT infrastructure for a unified support experience." }
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <Zap size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{value.title}</h4>
                      <p className="text-slate-600 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center bg-indigo-600 text-white font-bold py-4 px-8 rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30">
                  Get a Help Desk Quote <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ItHelpDeskPage;