import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, LayoutList, ListChecks, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItProjectManagementPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Hero */}
      <div className={`bg-teal-900 text-white py-24 px-4 text-center transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`transform transition-transform duration-1000 ${visible ? 'translate-y-0' : '-translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">IT Project Management</h1>
            <p className="text-lg text-teal-100">Delivering projects on time, on budget, and within scope.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
         <div className="text-center mb-16">
             <div className={`inline-block p-4 bg-teal-50 rounded-full mb-6 text-teal-700 transition-all duration-700 delay-300 ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                <LayoutList size={64} />
             </div>
             <h2 className={`text-3xl font-bold text-slate-900 mb-6 transition-opacity duration-1000 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>Agile & Waterfall Methodologies</h2>
             <p className={`text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto transition-opacity duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                Whether you need the flexibility of Agile/Scrum or the structure of Waterfall, our certified project managers ensure your IT initiatives are executed flawlessly. We handle resource allocation, risk management, and stakeholder communication.
             </p>
         </div>

         {/* Feature Cards */}
         <div className="grid md:grid-cols-3 gap-8 mb-16">
             {[
                 { icon: ListChecks, title: "Scope Management", desc: "Defining deliverables clearly." },
                 { icon: Clock, title: "Time Management", desc: "Rigorous scheduling & milestones." },
                 { icon: Users, title: "Resource Planning", desc: "Optimizing team allocation." }
             ].map((item, idx) => (
                 <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center transition-all duration-700 hover:-translate-y-2 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${800 + (idx * 200)}ms` }}
                 >
                     <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                         <item.icon size={24} />
                     </div>
                     <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                     <p className="text-slate-500 text-sm">{item.desc}</p>
                 </div>
             ))}
         </div>

         <div className={`text-center transition-opacity duration-1000 delay-[1400ms] ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/contact" className="inline-flex items-center bg-teal-600 text-white font-bold py-4 px-10 rounded-full hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-500/30">
                Hire a Project Manager <ArrowRight className="ml-2" size={18} />
            </Link>
         </div>
      </div>
    </div>
  );
};

export default ItProjectManagementPage;