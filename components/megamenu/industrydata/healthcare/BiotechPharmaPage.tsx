import React, { useEffect, useState } from 'react';
import { Dna, Microscope, Database, ArrowRight, Layers, TestTube } from 'lucide-react';
import { Link } from 'react-router-dom';

const BiotechPharmaPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-purple-950 text-white py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-950"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
              <div className={`transition-transform duration-1000 ${loaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                  <div className="p-4 bg-purple-800/50 rounded-full backdrop-blur-md border border-purple-500/30 mb-8">
                      <Dna size={64} className="text-purple-300 animate-[spin_10s_linear_infinite]" />
                  </div>
              </div>
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 delay-200 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  Biotech & <span className="text-purple-400">Pharma IT</span>
              </h1>
              <p className={`text-xl text-purple-200 max-w-2xl transition-all duration-700 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  Data-driven solutions for drug discovery, precision medicine, and supply chain visibility.
              </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 -mt-20 relative z-20">
          <div className={`bg-white p-10 rounded-[2.5rem] shadow-2xl border-t-4 border-purple-500 transition-all duration-700 delay-400 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-700 mb-6">
                  <Microscope size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">R&D Data Management</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Handle massive datasets from genomics and proteomics research with our high-performance computing and secure cloud storage solutions.
              </p>
              <ul className="space-y-4">
                  <li className="flex gap-3 text-slate-700 font-medium bg-purple-50 p-3 rounded-xl"><TestTube className="text-purple-600 shrink-0" /> Lab Notebook Digitization</li>
                  <li className="flex gap-3 text-slate-700 font-medium bg-purple-50 p-3 rounded-xl"><Database className="text-purple-600 shrink-0" /> Bioinformatics Pipelines</li>
                  <li className="flex gap-3 text-slate-700 font-medium bg-purple-50 p-3 rounded-xl"><Layers className="text-purple-600 shrink-0" /> AI Drug Discovery Models</li>
              </ul>
          </div>

          <div className={`bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl border-t-4 border-blue-500 transition-all duration-700 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                  <Layers size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Supply Chain & Traceability</h2>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                  Ensure serialization compliance and track sensitive biological materials globally with blockchain and IoT integration. Prevent counterfeiting and ensure efficacy.
              </p>
              <div className="mt-auto pt-8">
                  <Link to="/contact" className="text-white bg-blue-600 hover:bg-blue-500 font-bold py-4 px-8 rounded-xl flex items-center justify-center w-full transition-colors">
                      Consult an Expert <ArrowRight className="ml-2" size={20}/>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BiotechPharmaPage;