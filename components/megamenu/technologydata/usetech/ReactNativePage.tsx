import React, { useEffect, useState } from 'react';
import { Atom, Smartphone, Layers, ArrowRight, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReactNativePage: React.FC = () => {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSpin(true);
  }, []);

  return (
    <div className="bg-[#20232a] min-h-screen pt-20 font-sans text-white">
      <div className="relative py-24 px-4 text-center overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
              <div className={`mb-8 flex justify-center transition-all duration-1000 ${spin ? 'opacity-100' : 'opacity-0'}`}>
                  <Atom size={120} className="text-[#61dafb] animate-[spin_10s_linear_infinite]" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#61dafb]">React Native</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                  Learn once, write anywhere. Native performance for iOS and Android with a single codebase.
              </p>
              <Link to="/contact" className="bg-[#61dafb] text-[#20232a] font-bold py-3 px-8 rounded-full hover:bg-white transition-colors inline-flex items-center">
                  Build Mobile App <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Smartphone, title: "Native UI", desc: "Renders to native platform UI components for a smooth look and feel." },
                  { icon: Layers, title: "Cross-Platform", desc: "Share up to 90% of code between iOS and Android." },
                  { icon: Zap, title: "Fast Refresh", desc: "See changes instantly without rebuilding the native app." },
                  { icon: Code, title: "TypeScript", desc: "Type-safe development for reliable enterprise apps." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-[#282c34] p-8 rounded-2xl border border-gray-700 hover:border-[#61dafb] transition-colors group">
                      <item.icon className="w-10 h-10 text-[#61dafb] mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ReactNativePage;