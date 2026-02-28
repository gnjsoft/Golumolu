import React, { useEffect, useState } from 'react';
import { Brain, Cpu, MessageSquare, ArrowRight, Sparkles, Bot, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiSoftwareSolutionPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-sans text-white">
      <div className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          
          <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="inline-block p-4 bg-purple-900/50 rounded-2xl mb-8 border border-purple-500/30 backdrop-blur-md">
                  <Brain size={48} className="text-purple-400 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Enterprise AI</h1>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Automate the mundane. Augment the brilliant. Deploy scalable AI solutions that drive efficiency and innovation.
              </p>
              <Link to="/contact" className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-lg font-bold transition-colors inline-flex items-center shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                  Start AI Journey <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: MessageSquare, title: "Conversational AI", desc: "Intelligent chatbots and virtual assistants for 24/7 customer support." },
                  { icon: Sparkles, title: "Generative AI", desc: "Automate content creation, code generation, and knowledge synthesis." },
                  { icon: Cpu, title: "Process Automation", desc: "Intelligent robotic process automation (RPA) powered by cognitive services." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 p-10 rounded-2xl hover:border-purple-500/50 transition-all group hover:-translate-y-2">
                      <item.icon size={40} className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-slate-400 text-lg">{item.desc}</p>
                  </div>
              ))}
          </div>

          <div className="mt-24 p-8 border border-slate-800 rounded-xl bg-slate-900/50 font-mono text-sm text-green-400 overflow-x-auto">
              <div><span className="text-purple-400">const</span> <span className="text-blue-400">aiModel</span> = <span className="text-yellow-300">await</span> <span className="text-blue-400">NeuralNet</span>.<span className="text-yellow-300">train</span>({`{`}<span className="text-slate-300">data: dataset</span>{`}`});</div>
              <div><span className="text-purple-400">const</span> <span className="text-blue-400">prediction</span> = <span className="text-blue-400">aiModel</span>.<span className="text-yellow-300">predict</span>({`{`}<span className="text-slate-300">input: userQuery</span>{`}`});</div>
              <div className="mt-2 text-slate-500">// AI Ready to deploy</div>
          </div>
      </div>
    </div>
  );
};

export default AiSoftwareSolutionPage;