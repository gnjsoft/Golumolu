import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, LayoutList, ListChecks, Users, Clock, Code, Cloud, Server, Layers, CheckCircle } from 'lucide-react';
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

      <div className="max-w-6xl mx-auto px-4 py-16">
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
      </div>

      {/* Types of Projects We Manage */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Types of Projects We Manage</h2>
            <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              From complex software builds to enterprise-wide infrastructure upgrades, our certified project managers have the expertise to lead diverse IT initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Software Development", desc: "End-to-end management of custom software, web, and mobile app development lifecycles.", icon: Code },
              { title: "Cloud Migrations", desc: "Seamless transitions to AWS, Azure, or GCP with minimal downtime and risk mitigation.", icon: Cloud },
              { title: "Infrastructure Upgrades", desc: "Coordinating hardware refreshes, network overhauls, and data center consolidations.", icon: Server },
              { title: "System Integrations", desc: "Managing the complex integration of ERP, CRM, and other enterprise platforms.", icon: Layers }
            ].map((project, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <project.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Project Management Process */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-emerald-50 rounded-[3rem] transform -rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000" 
                alt="Project Management Team" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-500 font-medium">On-Time Delivery</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Proven Process</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We employ a rigorous, transparent methodology to ensure every project phase is executed with precision, keeping stakeholders informed and aligned.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Initiation & Planning", desc: "Defining project scope, objectives, resource requirements, and creating a comprehensive roadmap." },
                  { step: "02", title: "Execution & Monitoring", desc: "Leading the team, tracking progress against KPIs, and managing risks proactively." },
                  { step: "03", title: "Quality Assurance", desc: "Continuous testing and validation to ensure deliverables meet the highest standards." },
                  { step: "04", title: "Delivery & Closure", desc: "Final deployment, documentation handover, and post-launch support evaluation." }
                ].map((phase, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {idx !== 3 && <div className="absolute left-6 top-14 bottom-[-2rem] w-0.5 bg-slate-100"></div>}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-teal-50 border-2 border-teal-600 flex items-center justify-center text-teal-600 font-bold">
                        {phase.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h4>
                      <p className="text-slate-600">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-24">
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