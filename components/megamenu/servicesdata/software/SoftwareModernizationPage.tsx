import React, { useEffect } from 'react';
import { RefreshCw, Cloud, Code2, ArrowRight, Layers, Trash2, Check, AlertTriangle, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareModernizationPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      
      {/* Split Hero */}
      <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Legacy Side */}
          <div className="bg-slate-100 flex flex-col justify-center p-12 lg:p-24 border-r border-slate-200">
              <div className="inline-flex items-center gap-2 text-slate-500 font-mono text-sm mb-4">
                  <AlertTriangle size={16} /> Legacy System
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-400 mb-6 line-through decoration-red-500 decoration-4">
                  Slow. <br/>
                  Insecure. <br/>
                  Costly.
              </h1>
              <p className="text-slate-500 text-lg">
                  Monolithic architectures that stifle innovation and drain resources.
              </p>
          </div>

          {/* Modern Side */}
          <div className="bg-orange-600 flex flex-col justify-center p-12 lg:p-24 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-12 -mt-12"></div>
              
              <div className="inline-flex items-center gap-2 text-orange-100 font-mono text-sm mb-4">
                  <RefreshCw size={16} /> Modernized
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                  Agile. <br/>
                  Scalable. <br/>
                  Cloud-Native.
              </h1>
              <p className="text-orange-100 text-lg mb-8">
                  Future-proof architecture designed for speed and rapid iteration.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 w-fit transition-colors">
                  Start Transformation <ArrowRight size={20} />
              </Link>
          </div>
      </div>

      {/* Strategies Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900">Our Modernization Strategies</h2>
             <p className="text-slate-600 mt-4">We assess your specific needs to determine the best path forward.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
             {[
                 { 
                     title: "Rehost (Lift & Shift)", 
                     desc: "Migrating your existing applications to the cloud with minimal code changes.",
                     color: "bg-blue-50 text-blue-600"
                 },
                 { 
                     title: "Replatform", 
                     desc: "Moving to a managed platform (PaaS) to reduce operational overhead.",
                     color: "bg-green-50 text-green-600"
                 },
                 { 
                     title: "Refactor / Re-architect", 
                     desc: "Re-engineering applications into microservices for full cloud-native benefits.",
                     color: "bg-orange-50 text-orange-600"
                 }
             ].map((item, idx) => (
                 <div key={idx} className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold text-lg ${item.color}`}>
                         {idx + 1}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
             ))}
         </div>
      </div>

      {/* Visual Transformation Flow */}
      <div className="bg-slate-50 py-24">
          <div className="max-w-5xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Before */}
                  <div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3 opacity-75 grayscale">
                      <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
                          <Server size={20} className="text-slate-400" />
                          <span className="font-bold text-slate-500">On-Premise Server</span>
                      </div>
                      <div className="space-y-2">
                          <div className="h-4 bg-slate-200 rounded w-full"></div>
                          <div className="h-4 bg-slate-200 rounded w-full"></div>
                          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                      </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center text-orange-500">
                      <div className="text-sm font-bold uppercase tracking-wider mb-2">Migration</div>
                      <ArrowRight size={40} className="hidden md:block" />
                      <ArrowRight size={40} className="md:hidden rotate-90" />
                  </div>

                  {/* After */}
                  <div className="bg-white p-6 rounded-xl shadow-xl w-full md:w-1/3 border-t-4 border-orange-500">
                      <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
                          <Cloud size={20} className="text-orange-500" />
                          <span className="font-bold text-slate-900">Cloud Microservices</span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                          <div className="h-8 w-8 bg-blue-100 rounded-lg"></div>
                          <div className="h-8 w-8 bg-green-100 rounded-lg"></div>
                          <div className="h-8 w-8 bg-purple-100 rounded-lg"></div>
                          <div className="h-8 w-8 bg-orange-100 rounded-lg"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Benefits List */}
      <div className="py-24 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The ROI of Modernization</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                  "Reduced Infrastructure Costs",
                  "Faster Time-to-Market",
                  "Enhanced Security Compliance",
                  "Improved Scalability",
                  "Better Developer Productivity",
                  "Superior User Experience"
              ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                      <div className="bg-green-100 text-green-600 rounded-full p-1">
                          <Check size={16} />
                      </div>
                      <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default SoftwareModernizationPage;