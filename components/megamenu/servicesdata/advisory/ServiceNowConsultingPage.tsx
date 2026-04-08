import React, { useEffect, useState } from 'react';
import { Settings, ArrowRight, CheckSquare, Workflow, Users, Shield, Server, Zap, BarChart3, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceNowConsultingPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="relative bg-slate-50 text-slate-900 py-32 px-4 flex flex-col items-center text-center overflow-hidden">
        {/* ServiceNow Logo Background Watermark */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwBBLfJlsQ1OJQLPE4UlRZonkVjSPVq-vZw&s')", backgroundSize: '800px' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-slate-50"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className={`mx-auto w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform duration-[800ms] ${active ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwBBLfJlsQ1OJQLPE4UlRZonkVjSPVq-vZw&s" alt="ServiceNow" className="w-16 h-16 object-contain" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              ServiceNow Consulting
          </h1>
          <p className={`text-xl text-slate-600 max-w-2xl transition-all duration-700 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transform your enterprise workflows with the Now Platform.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-16 items-center">
         
         <div className={`flex-1 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="inline-block p-3 bg-green-100 rounded-lg text-green-700 mb-6">
                <Workflow size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Digitize Your Workflows</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
               We help you implement, customize, and manage ServiceNow to optimize IT Service Management (ITSM), IT Operations Management (ITOM), and Customer Service Management (CSM).
            </p>
            <Link to="/contact" className="bg-[#293e40] text-white font-bold py-4 px-10 rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center shadow-lg">
               Get a Demo <ArrowRight className="ml-2" size={18}/>
            </Link>
         </div>

         <div className="flex-1 grid grid-cols-1 gap-4 w-full">
            {["ITSM Implementation", "Custom App Development", "Service Portal Design", "Workflow Automation"].map((item, i) => (
                <div 
                    key={i} 
                    className={`flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm transition-all duration-700 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                    style={{ transitionDelay: `${500 + (i * 150)}ms` }}
                >
                    <div className="bg-green-100 p-2 rounded-full text-green-700">
                        <CheckSquare size={20} />
                    </div>
                    <span className="font-bold text-slate-700 text-lg">{item}</span>
                </div>
            ))}
         </div>
      </div>

      {/* Our ServiceNow Expertise */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our ServiceNow Expertise</h2>
            <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              We provide end-to-end consulting services across the entire ServiceNow ecosystem, helping you unlock the full potential of the Now Platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "IT Service Management (ITSM)", desc: "Modernize IT service delivery, reduce costs, and improve user satisfaction with automated workflows.", icon: Settings },
              { title: "IT Operations Management (ITOM)", desc: "Gain visibility into your infrastructure, prevent outages, and automate cloud provisioning.", icon: Server },
              { title: "Customer Service Management (CSM)", desc: "Elevate customer experiences by connecting customer service with other departments to resolve issues faster.", icon: Users },
              { title: "HR Service Delivery (HRSD)", desc: "Streamline employee onboarding, transitions, and requests with a unified portal and automated processes.", icon: Workflow },
              { title: "Security Operations (SecOps)", desc: "Respond to security threats faster by connecting your security and IT teams on a single platform.", icon: Shield },
              { title: "Strategic Portfolio Management", desc: "Align your IT investments with business goals, optimize resources, and accelerate value delivery.", icon: BarChart3 }
            ].map((expertise, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-green-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <expertise.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{expertise.title}</h3>
                <p className="text-slate-600 leading-relaxed">{expertise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The ServiceNow Advantage */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-teal-50 rounded-[3rem] transform -rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                alt="ServiceNow Dashboard" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">Certified</div>
                  <div className="text-sm text-slate-500 font-medium">Implementation Partners</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The ServiceNow Advantage</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                ServiceNow is more than just an IT ticketing system; it's a comprehensive platform of platforms that breaks down silos and connects your entire enterprise.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Single System of Record", desc: "Eliminate fragmented data by consolidating your IT, HR, and customer service operations onto one unified platform." },
                  { title: "Intelligent Automation", desc: "Leverage built-in AI and machine learning to automate routine tasks, predict issues, and resolve incidents faster." },
                  { title: "Enhanced Visibility", desc: "Gain real-time insights into your operations with customizable dashboards and powerful reporting tools." },
                  { title: "Scalable Architecture", desc: "A cloud-native platform designed to grow with your business, supporting everything from startups to global enterprises." }
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Zap size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{value.title}</h4>
                      <p className="text-slate-600 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServiceNowConsultingPage;