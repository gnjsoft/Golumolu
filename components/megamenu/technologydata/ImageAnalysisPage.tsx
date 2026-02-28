import React, { useEffect, useState } from 'react';
import { Scan, Eye, Camera, Focus, Maximize, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageAnalysisPage: React.FC = () => {
  const [scan, setScan] = useState(false);
  useEffect(() => { 
    window.scrollTo(0, 0); 
    setScan(true);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen pt-20 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/50 border border-cyan-500/50 text-cyan-400 text-sm font-bold mb-6">
                  <Eye size={16} /> Computer Vision
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Image <span className="text-cyan-400">Analysis</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Automated visual inspection, facial recognition, and medical imaging. We extract meaningful information from digital images and videos.
              </p>
              <Link to="/contact" className="bg-cyan-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 transition-colors inline-flex items-center">
                  See The Capability <ArrowRight className="ml-2" />
              </Link>
          </div>

          <div className="relative bg-black rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000" className="opacity-60 w-full h-full object-cover" alt="Code Analysis" />
              <div className={`absolute top-0 left-0 w-full h-1 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-[2s] ease-in-out ${scan ? 'translate-y-[400px]' : 'translate-y-0'}`}></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs border border-green-500/50">Object Detected: 99%</span>
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs border border-cyan-500/50">Classification: Hardware</span>
              </div>
          </div>
      </div>

      <div className="bg-slate-950 py-24">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
              {[
                  { title: "OCR", icon: Scan, desc: "Optical Character Recognition for document digitization." },
                  { title: "Object Detection", icon: Focus, desc: "Identify and locate objects in images or video streams." },
                  { title: "Pattern Recognition", icon: Maximize, desc: "Classify images based on textures, shapes, and colors." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                      <item.icon size={32} className="text-cyan-500 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ImageAnalysisPage;