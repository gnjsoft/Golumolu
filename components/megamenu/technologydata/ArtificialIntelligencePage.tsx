import React, { useEffect, useState } from 'react';
import { Brain, Sparkles, Bot, Cpu, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtificialIntelligencePage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-sans text-white">
      <div className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        
        <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/50 bg-purple-900/20 text-purple-300 mb-8 backdrop-blur-md">
                <Sparkles size={16} /> <span className="text-sm font-bold uppercase tracking-wider">Next Gen Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-500">
                Artificial Intelligence
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                We engineer cognitive solutions that perceive, learn, and reason. From Generative AI to predictive modeling, we turn algorithms into competitive advantage.
            </p>
            <Link to="/contact" className="bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-purple-400 transition-all hover:scale-105 inline-flex items-center">
                Deploy AI Solutions <ArrowRight className="ml-2" />
            </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Bot, title: "Generative AI", desc: "LLMs for content creation, code generation, and personalized customer interactions.", color: "text-pink-500" },
                  { icon: Brain, title: "Deep Learning", desc: "Neural networks that solve complex problems in vision, speech, and pattern recognition.", color: "text-purple-500" },
                  { icon: Cpu, title: "Process Automation", desc: "Intelligent RPA that handles repetitive tasks with cognitive decision-making capabilities.", color: "text-blue-500" }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-800 p-10 rounded-3xl hover:border-purple-500/50 transition-all hover:-translate-y-2 group">
                      <item.icon size={48} className={`${item.color} mb-6 group-hover:scale-110 transition-transform`} />
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ArtificialIntelligencePage;