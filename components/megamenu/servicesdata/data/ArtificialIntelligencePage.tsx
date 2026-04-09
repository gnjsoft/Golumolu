import React, { useEffect, useState } from 'react';
import { Cpu, Sparkles, Eye, Mic, ArrowRight, ScanFace } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtificialIntelligencePage: React.FC = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-sans text-white selection:bg-green-500 selection:text-black">
      {/* Sci-Fi Hero */}
      <div className="relative py-32 px-4 overflow-hidden h-[80vh] flex items-center justify-center">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965" 
                alt="AI Eye" 
                className="w-full h-full object-cover opacity-50"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
             {/* Scanlines */}
             <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
         </div>

         <div className="relative z-10 max-w-5xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 border border-green-500/50 bg-green-900/20 px-6 py-2 rounded-full text-green-400 text-sm font-mono mb-8 backdrop-blur-md">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 System Online v2.0
             </div>
             <h1 className={`text-6xl md:text-9xl font-bold mb-8 tracking-tighter ${glitch ? 'translate-x-1 text-green-500 opacity-80' : 'text-white'}`} style={{textShadow: "0 0 20px rgba(74, 222, 128, 0.5)"}}>
                 Artificial <br/>Intelligence
             </h1>
             <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light">
                 Generative AI, Computer Vision, and Cognitive Computing solutions that redefine reality.
             </p>
           
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Sparkles, title: "Generative AI", desc: "LLMs and image generation models tailored for your enterprise content creation." },
              { icon: ScanFace, title: "Computer Vision", desc: "Automated quality inspection, facial recognition, and object detection systems." },
              { icon: Mic, title: "Voice AI", desc: "Advanced speech-to-text and text-to-speech systems for natural interaction." }
          ].map((item, idx) => (
              <div key={idx} className="bg-gray-900/50 backdrop-blur border border-gray-800 p-10 rounded-3xl hover:border-green-500/50 transition-all group hover:-translate-y-2">
                  <item.icon className="w-12 h-12 text-gray-500 group-hover:text-green-400 mb-6 transition-colors" />
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default ArtificialIntelligencePage;