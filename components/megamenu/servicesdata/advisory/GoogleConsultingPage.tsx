import React, { useEffect, useState } from 'react';
import { Cloud, ArrowRight, Check, BarChart3, Shield, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoogleConsultingPage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShow(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Header */}
      <div className="bg-slate-50 py-24 px-4 flex flex-col items-center border-b border-slate-100">
        <div className={`w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-8 transition-all duration-1000 ${show ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
            {/* Multi-color Google-ish icon feel */}
            <Cloud className="text-blue-500" size={40} />
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-700 delay-200 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Google Cloud Consulting
        </h1>
        <p className={`text-xl text-slate-600 max-w-2xl text-center transition-all duration-700 delay-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Unlock the power of GCP with our certified experts.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
         <div className="grid md:grid-cols-3 gap-8">
             {[
                 { title: "Cloud Migration", icon: Cloud, color: "text-blue-500", delay: 400 },
                 { title: "BigQuery Analytics", icon: BarChart3, color: "text-yellow-500", delay: 500 },
                 { title: "Kubernetes (GKE)", icon: Box, color: "text-blue-500", delay: 600 },
                 { title: "AI & Machine Learning", icon: Box, color: "text-red-500", delay: 700 },
                 { title: "Google Workspace", icon: Box, color: "text-green-500", delay: 800 },
                 { title: "Security & IAM", icon: Shield, color: "text-slate-500", delay: 900 }
             ].map((item, i) => (
                 <div 
                    key={i} 
                    className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                 >
                     <div className={`w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 ${item.color}`}>
                        <item.icon size={24} />
                     </div>
                     <h3 className="font-bold text-lg mb-2 text-slate-800">{item.title}</h3>
                     <p className="text-sm text-slate-500">
                        Specialized implementation and optimization services.
                     </p>
                 </div>
             ))}
         </div>
      </div>

      <div className={`text-center pb-24 transition-opacity duration-1000 delay-[1200ms] ${show ? 'opacity-100' : 'opacity-0'}`}>
         <Link to="/contact" className="text-blue-600 font-bold hover:text-blue-700 text-lg flex items-center justify-center gap-2 group">
            Discuss your GCP Project <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
         </Link>
      </div>
    </div>
  );
};

export default GoogleConsultingPage;