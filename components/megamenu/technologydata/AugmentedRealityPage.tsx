import React, { useEffect } from 'react';
import { Smartphone, Layers, ScanLine, ArrowRight, Eye, BoxSelect } from 'lucide-react';
import { Link } from 'react-router-dom';

const AugmentedRealityPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-sky-500 text-white py-24 px-4 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
              <ScanLine size={64} className="mx-auto mb-6 text-sky-200" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Augmented Reality</h1>
              <p className="text-xl text-sky-100 max-w-2xl mx-auto mb-10">
                  Overlay digital information onto the physical world. Enhance retail, maintenance, and marketing experiences.
              </p>
              <Link to="/contact" className="bg-white text-sky-600 font-bold py-3 px-8 rounded-full hover:bg-sky-50 transition-colors inline-flex items-center shadow-lg">
                  Start AR Project <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Smartphone, title: "Mobile AR", desc: "ARKit and ARCore solutions for iOS and Android devices." },
                  { icon: BoxSelect, title: "Product Visualization", desc: "Let customers place 3D product models in their homes before buying." },
                  { icon: Layers, title: "WebAR", desc: "Browser-based AR experiences without requiring app downloads." },
                  { icon: Eye, title: "Visual Search", desc: "Point camera at objects to identify them and get information." },
                  { icon: ScanLine, title: "Industrial Overlay", desc: "Heads-up displays for technicians showing repair schematics." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                      <item.icon size={32} className="text-sky-500 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default AugmentedRealityPage;