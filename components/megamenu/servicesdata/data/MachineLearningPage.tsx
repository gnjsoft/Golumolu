import React, { useEffect, useState } from 'react';
import { BrainCircuit, Cog, Zap, ArrowRight, Bot, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const MachineLearningPage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShow(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Neon/Cyber Hero */}
      <div className="relative py-32 overflow-hidden bg-black text-white">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070" 
                alt="Neural Network" 
                className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-purple-900/50"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
             <div className={`md:w-1/2 transition-all duration-1000 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                 <span className="text-purple-400 font-bold tracking-wider uppercase mb-4 block flex items-center gap-2">
                    <Cpu size={18} className="animate-pulse" /> Intelligent Automation
                 </span>
                 <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                     Machine <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Learning</span>
                 </h1>
                 <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                     Build systems that learn and improve from experience. From recommendation engines to fraud detection, we deploy ML models that drive efficiency.
                 </p>
                 <Link to="/contact" className="group bg-white text-black font-bold py-4 px-8 rounded-full transition-all hover:bg-purple-50 inline-flex items-center">
                     Start Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </Link>
             </div>
             
             {/* Visual - Glowing Brain */}
             <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                 <div className="relative w-80 h-80">
                     <div className="absolute inset-0 bg-purple-600 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
                     <BrainCircuit size={320} className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" strokeWidth={1} />
                     <Cog size={100} className="text-purple-400 absolute top-0 right-0 animate-spin-slow opacity-80" />
                     <Cog size={60} className="text-pink-500 absolute bottom-10 left-0 animate-spin-reverse opacity-80" />
                 </div>
             </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 hover:border-purple-200 transition-all hover:shadow-xl group">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Bot className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">NLP & Chatbots</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                      Natural Language Processing models that understand and generate human language for customer support, sentiment analysis, and automated documentation.
                  </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 hover:border-blue-200 transition-all hover:shadow-xl group">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Cog className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Predictive Maintenance</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                      Analyze equipment sensor data to predict failures before they happen, saving millions in maintenance costs and preventing downtime.
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MachineLearningPage;