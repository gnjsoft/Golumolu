import React, { useEffect } from 'react';
import { Glasses, Box, Play, ArrowRight, Layers, Move3d } from 'lucide-react';
import { Link } from 'react-router-dom';

const VirtualRealityPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-black min-h-screen pt-20 font-sans text-white">
      <div className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900 to-black opacity-80"></div>
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                      Virtual <span className="text-fuchsia-500">Reality</span>
                  </h1>
                  <p className="text-xl text-fuchsia-100 mb-8 leading-relaxed">
                      Immersive simulations for training, education, and entertainment. We build full 3D environments that transport users to new worlds.
                  </p>
                  <Link to="/contact" className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(192,38,211,0.5)] inline-flex items-center">
                      Enter the Metaverse <ArrowRight className="ml-2" />
                  </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                      <div className="absolute inset-0 bg-fuchsia-500 blur-3xl opacity-20 rounded-full"></div>
                      <Glasses size={200} className="text-white relative z-10" strokeWidth={0.5} />
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Box, title: "3D Modeling", desc: "Creating high-fidelity assets and environments for Unity and Unreal Engine." },
              { icon: Play, title: "Interactive Training", desc: "Safe, repeatable scenarios for hazardous job training and skill development." },
              { icon: Layers, title: "Virtual Tours", desc: "Walkthroughs for real estate, tourism, and architectural visualization." }
          ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-fuchsia-500/50 transition-colors group">
                  <item.icon size={40} className="text-fuchsia-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default VirtualRealityPage;