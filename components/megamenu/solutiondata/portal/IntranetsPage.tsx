import React, { useEffect, useState } from 'react';
import { Users, Hexagon, Share2, MessageSquare, FileText, ArrowRight, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntranetsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-[#0f172a] min-h-screen pt-20 font-sans text-slate-200 selection:bg-indigo-500 selection:text-white overflow-hidden">
      
      {/* Hive Mind Hero */}
      <div className="relative py-32 px-4 flex flex-col items-center justify-center text-center">
          
          {/* Hex Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
          </div>
          
          {/* Glowing Nodes Animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
              <div className={`absolute top-0 left-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_20px_#6366f1] transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}></div>
              <div className={`absolute bottom-0 right-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6] transition-all duration-1000 delay-300 ${active ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute top-1/4 left-0 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_20px_#a855f7] transition-all duration-1000 delay-500 ${active ? 'opacity-100' : 'opacity-0'}`}></div>
              {/* Connecting Lines (Simulated with SVG) */}
              <svg className={`absolute inset-0 w-full h-full stroke-indigo-500/20 stroke-1 fill-none transition-all duration-[2000ms] ${active ? 'opacity-100' : 'opacity-0'}`}>
                  <path d="M400 0 L400 400 L200 600" />
                  <path d="M400 400 L600 200" />
                  <path d="M0 200 L400 400" />
              </svg>
          </div>

          <div className={`relative z-10 max-w-4xl transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-24 h-24 mx-auto bg-indigo-600/20 rounded-full flex items-center justify-center mb-8 border border-indigo-500/50 backdrop-blur-md relative">
                  <Hexagon size={48} className="text-indigo-400 absolute animate-[spin_10s_linear_infinite]" />
                  <Users size={32} className="text-white relative z-10" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  The Digital <span className="text-indigo-400">Workplace</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                  Connect your workforce with a modern intranet. Knowledge sharing, collaboration, and culture building in one unified hive.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                  Connect Your Team <ArrowRight size={18} />
              </Link>
          </div>
      </div>

      {/* Honeycomb Grid Features */}
      <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Share2, title: "Knowledge Base", desc: "Centralized repository for policies, SOPs, and training materials." },
                  { icon: MessageSquare, title: "Social Feed", desc: "Internal social network to foster community and engagement." },
                  { icon: FileText, title: "Document Mgmt", desc: "Secure file sharing with version control and granular permissions." },
                  { icon: Users, title: "Employee Directory", desc: "Find experts within your organization instantly." },
                  { icon: Database, title: "HR Self-Service", desc: "Leave applications, payroll slips, and onboarding workflows." },
                  { icon: Hexagon, title: "Integrations", desc: "Connect with Slack, Microsoft 365, and Google Workspace." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 hover:border-indigo-500/50 transition-all duration-300 group ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${300 + (idx * 150)}ms` }}
                  >
                      <div className="w-14 h-14 bg-indigo-900/50 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-[#0b1120] py-24 border-y border-slate-800">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-white mb-6">Why custom intranet?</h2>
                  <p className="text-slate-400 text-lg mb-8">
                      Off-the-shelf solutions often lack flexibility. We build tailored intranets that map exactly to your organizational structure and workflow.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-indigo-300">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Custom Branding & UI
                      </li>
                      <li className="flex items-center gap-3 text-indigo-300">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Specific Workflow Automation
                      </li>
                      <li className="flex items-center gap-3 text-indigo-300">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Zero License Fees (Open Source Stack)
                      </li>
                  </ul>
              </div>
              <div className="md:w-1/2 relative h-64 w-full bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent"></div>
                  {/* Abstract Dashboard UI */}
                  <div className="w-3/4 h-3/4 bg-slate-800 rounded border border-slate-700 p-4 relative">
                      <div className="flex gap-2 mb-4">
                          <div className="w-8 h-8 rounded-full bg-slate-600"></div>
                          <div className="flex-1 h-2 bg-slate-700 rounded mt-3"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                          <div className="h-20 bg-slate-700/50 rounded"></div>
                          <div className="h-20 bg-slate-700/50 rounded"></div>
                      </div>
                      <div className="absolute -right-4 -bottom-4 bg-indigo-600 text-white px-4 py-2 rounded shadow-lg text-sm font-bold">
                          Engagement +40%
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default IntranetsPage;