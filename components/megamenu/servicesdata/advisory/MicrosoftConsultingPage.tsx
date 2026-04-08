import React, { useEffect, useState } from 'react';
import { Grid, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const MicrosoftConsultingPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, []);

  const services = [
    { title: "Azure Cloud", desc: "Scalable cloud infrastructure and migration." },
    { title: "Microsoft 365", desc: "Modern workplace and collaboration tools." },
    { title: "Power Platform", desc: "Low-code apps, automation, and analytics." },
    { title: "Dynamics 365", desc: "Intelligent CRM and ERP business applications." },
    { title: "SharePoint", desc: "Intranets, document management, and portals." },
    { title: "SQL Server", desc: "Enterprise data management and analytics." },
    { title: "Microsoft Teams", desc: "Unified communication and team collaboration." },
    { title: "Copilot & AI", desc: "Generative AI integration for productivity." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      <div className="relative bg-slate-50 text-slate-900 py-32 px-4 flex flex-col items-center text-center overflow-hidden">
        {/* Microsoft Logo Background Watermark */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg')", backgroundSize: '800px' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-slate-50"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className={`mx-auto w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform duration-[800ms] ${visible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-12 h-12 object-contain" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Microsoft Solutions
          </h1>
          <p className={`text-xl text-slate-600 max-w-2xl transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Maximize your potential with the Microsoft ecosystem.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {services.map((item, i) => (
                 <div 
                    key={i} 
                    className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-t-4 border-t-blue-600 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-default ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${400 + (i * 100)}ms` }}
                 >
                     <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-sm text-slate-500 mb-6 leading-relaxed">{item.desc}</p>
                     <div className="flex items-center text-blue-600 text-sm font-bold mt-auto">
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