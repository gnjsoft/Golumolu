import React, { useEffect, useState } from 'react';
import { Grid, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const MicrosoftConsultingPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, []);

  const services = ["Azure Cloud", "Microsoft 365", "Power Platform", "Dynamics 365"];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-blue-600 text-white py-24 px-4 flex flex-col items-center text-center transition-colors duration-500">
        <Grid size={64} className={`mb-6 opacity-80 transition-transform duration-700 ${visible ? 'rotate-0 scale-100' : 'rotate-45 scale-50'}`} />
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Microsoft Solutions
        </h1>
        <p className={`text-xl text-blue-100 max-w-2xl transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Maximize your potential with the Microsoft ecosystem.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {services.map((item, i) => (
                 <div 
                    key={i} 
                    className={`bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 hover:-translate-y-2 transition-all duration-500 cursor-default ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${400 + (i * 150)}ms` }}
                 >
                     <h3 className="font-bold text-xl text-slate-900 mb-2">{item}</h3>
                     <p className="text-sm text-slate-500 mb-4">Implementation, migration, and support services.</p>
                     <div className="flex items-center text-blue-600 text-sm font-bold">
                        <Check size={16} className="mr-1" /> Certified
                     </div>
                 </div>
             ))}
         </div>
      </div>

      <div className={`text-center pb-24 transition-opacity duration-1000 delay-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
         <Link to="/contact" className="inline-flex items-center text-slate-900 font-bold border-b-2 border-yellow-400 hover:text-blue-600 transition-colors pb-1 text-lg">
            Consult with a Microsoft Partner <ArrowRight size={18} className="ml-2"/>
         </Link>
      </div>
    </div>
  );
};

export default MicrosoftConsultingPage;