import React, { useEffect, useState } from 'react';
import { Smile, MessageCircle, Calendar, ShieldCheck, ArrowRight, Sun, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentalHealthPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-[#f0f9ff] min-h-screen pt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-20">
          <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 text-sky-600 bg-sky-100 px-4 py-2 rounded-full font-bold text-sm mb-6">
                  <Sun size={18} /> Digital Therapeutics
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                  Technology for <br/><span className="text-sky-500">Wellness & Mind.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  We build compassionate, user-centric technology that connects providers with patients. Secure teletherapy platforms, mood tracking apps, and CBT tools tailored for behavioral health.
              </p>
              <Link to="/contact" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-full transition-all inline-flex items-center shadow-lg hover:shadow-sky-500/40 hover:-translate-y-1">
                  Build Your Platform <ArrowRight className="ml-2" />
              </Link>
          </div>
          
          <div className={`md:w-1/2 relative transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="absolute inset-0 bg-sky-200 rounded-full blur-[100px] opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=2070" 
                className="relative rounded-[3rem] shadow-2xl border-8 border-white z-10" 
                alt="Mental Health Support" 
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="bg-green-100 p-3 rounded-full text-green-600"><Smile size={24} /></div>
                  <div>
                      <div className="font-bold text-slate-800">Patient Satisfaction</div>
                      <div className="text-sm text-slate-500">Rated 4.9/5 stars</div>
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-white py-24 rounded-t-[4rem]">
          <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Features that Care</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Designed with empathy, engineered for security.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                  {[
                      { icon: MessageCircle, title: "Secure Messaging", desc: "HIPAA-compliant asynchronous chat allows patients to reach out when they need it most.", color: "bg-purple-100 text-purple-600" },
                      { icon: Calendar, title: "Easy Scheduling", desc: "Frictionless booking experience with automated reminders to reduce no-show rates.", color: "bg-orange-100 text-orange-600" },
                      { icon: Brain, title: "CBT Tools", desc: "Interactive exercises, journaling, and mood tracking to support therapy between sessions.", color: "bg-pink-100 text-pink-600" }
                  ].map((item, idx) => (
                      <div key={idx} className="bg-slate-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 text-center border border-transparent hover:border-slate-100">
                          <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                              <item.icon size={36} />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                          <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default MentalHealthPage;