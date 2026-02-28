import React, { useEffect, useState } from 'react';
import { Globe, Users, Briefcase, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItOutsourcingPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Hero */}
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold mb-6 backdrop-blur-sm">
                    <Globe size={14} /> Global Talent Pool
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Strategic <br/> <span className="text-blue-500">IT Outsourcing</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-lg">
                    Scale your team instantly. Access top-tier engineering talent without the overhead of recruitment and retention.
                </p>
                <div className="flex gap-4">
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-500/40">
                        Build Your Team
                    </Link>
                </div>
            </div>
            
            {/* Visual */}
            <div className={`md:w-1/2 relative h-[400px] w-full flex items-center justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="relative w-80 h-80">
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.5)] z-20">
                        <Users size={40} className="text-white" />
                    </div>
                    
                    {/* Orbiting Nodes */}
                    {[0, 72, 144, 216, 288].map((deg, i) => (
                        <div 
                            key={i}
                            className="absolute top-1/2 left-1/2 w-12 h-12 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center shadow-lg z-10"
                            style={{
                                transform: `translate(-50%, -50%) rotate(${deg}deg) translate(140px) rotate(-${deg}deg)`,
                                animation: `orbit 20s linear infinite reverse` // Custom animation style class would be needed for real orbit, simulated here with static position for simplicity in TSX
                            }}
                        >
                            <MapPin size={20} className="text-blue-400" />
                        </div>
                    ))}
                    
                    {/* Connecting Lines (Simulated with border) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-blue-500/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-slate-700 rounded-full animate-spin-reverse"></div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Models of Engagement</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { title: "Staff Augmentation", desc: "Extend your existing team with our developers to bridge skill gaps and meet deadlines.", icon: Users },
                  { title: "Dedicated Team", desc: "A full cross-functional team managed by us but working exclusively on your projects.", icon: Briefcase },
                  { title: "Project Based", desc: "End-to-end delivery where we take full responsibility for scope, budget, and timeline.", icon: CheckCircle2 }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
                      <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ItOutsourcingPage;