import React, { useEffect, useState } from 'react';
import { Megaphone, Target, BarChart, Mail, PenTool, Share2, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketingPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen pt-20 font-sans text-white selection:bg-purple-500 selection:text-white">
      
      {/* Hero */}
      <div className="relative py-24 px-4 overflow-hidden">
          {/* Animated Radar Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-900/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-800/40 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-purple-700/50 rounded-full"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                  <div className="inline-block p-5 bg-purple-600 rounded-full mb-8 shadow-[0_0_40px_rgba(147,51,234,0.6)] animate-pulse">
                      <Target size={48} className="text-white" />
                  </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                  Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Marketing</span>
              </h1>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Data-driven acquisition, automated retention, and personalized journeys at scale. Stop guessing, start growing.
              </p>
              <div className={`flex justify-center gap-6 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link to="/contact" className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition-colors shadow-lg">
                      Launch Campaign
                  </Link>
                  <Link to="/contact" className="flex items-center gap-2 text-purple-300 font-bold hover:text-white transition-colors">
                      View Analytics <ArrowRight size={18} />
                  </Link>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Zap, title: "Marketing Automation", desc: "Trigger emails and actions based on user behavior.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
                  { icon: BarChart, title: "Attribution Modeling", desc: "Know exactly which channels drive revenue.", color: "text-blue-400", bg: "bg-blue-400/10" },
                  { icon: PenTool, title: "Personalization", desc: "Dynamic content that adapts to each visitor.", color: "text-green-400", bg: "bg-green-400/10" },
                  { icon: Share2, title: "Social Management", desc: "Unified publishing and listening across all platforms.", color: "text-pink-400", bg: "bg-pink-400/10" },
                  { icon: Mail, title: "Email Marketing", desc: "High-deliverability infrastructure for newsletters.", color: "text-orange-400", bg: "bg-orange-400/10" },
                  { icon: Megaphone, title: "Ad Tech", desc: "Programmatic buying and real-time bidding integration.", color: "text-purple-400", bg: "bg-purple-400/10" }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300 group ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                          <item.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                  </div>
              ))}
          </div>

          <div className="mt-24 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-12 text-center border border-white/10">
              <h2 className="text-3xl font-bold mb-8">Integrate Your Stack</h2>
              <div className="flex flex-wrap justify-center gap-8 text-xl font-bold text-purple-200/60">
                  {["HubSpot", "Marketo", "Salesforce", "Google Ads", "Facebook Pixel", "Mailchimp", "Segment"].map((tool, i) => (
                      <span key={i} className="hover:text-white transition-colors cursor-default">{tool}</span>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default MarketingPage;