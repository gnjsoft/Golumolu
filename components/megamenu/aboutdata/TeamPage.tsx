import React, { useEffect, useState } from 'react';
import { Smile, Coffee, Code2, Gift, Heart, Clock, Globe, BookOpen } from 'lucide-react';

const TeamPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const perks = [
      { icon: Clock, title: "Flexible Hours", desc: "Work-life balance is key. We offer flexible scheduling to suit your needs." },
      { icon: Globe, title: "Remote Options", desc: "Work from anywhere. We support a hybrid working model." },
      { icon: Heart, title: "Health Insurance", desc: "Comprehensive health coverage for you and your family." },
      { icon: BookOpen, title: "Learning Budget", desc: "Annual stipend for courses, conferences, and books." },
      { icon: Gift, title: "Performance Bonus", desc: "We reward hard work and exceptional delivery." },
      { icon: Coffee, title: "Team Events", desc: "Regular outings, game nights, and hackathons." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
       {/* Hero */}
       <div className="relative py-24 bg-blue-600 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
          <div className={`relative z-10 max-w-7xl mx-auto px-4 text-center text-white transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet the Team</h1>
             <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                We are a diverse group of thinkers, builders, and dreamers united by a passion for technology.
             </p>
          </div>
       </div>

       {/* Culture Section */}
       <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-12 text-center mb-24">
              {[
                  { icon: Smile, title: "Friendly Atmosphere", desc: "We foster a supportive and inclusive environment where everyone feels valued." },
                  { icon: Code2, title: "Passion for Code", desc: "We love what we do, and it shows in the quality of our work." },
                  { icon: Coffee, title: "Continuous Learning", desc: "We encourage growth through workshops, conferences, and coffee chats." }
              ].map((item, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${200 + (idx * 150)}ms` }}>
                      <div className="w-14 h-14 mx-auto bg-white text-blue-600 rounded-full flex items-center justify-center shadow-sm mb-4">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>

          {/* Team Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
             <div className={`row-span-2 col-span-2 relative rounded-2xl overflow-hidden h-[400px] transition-all duration-700 delay-500 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Team meeting" />
             </div>
             <div className={`relative rounded-2xl overflow-hidden h-[190px] transition-all duration-700 delay-600 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Office culture" />
             </div>
             <div className={`relative rounded-2xl overflow-hidden h-[190px] transition-all duration-700 delay-700 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Working together" />
             </div>
             <div className={`col-span-2 relative rounded-2xl overflow-hidden h-[190px] transition-all duration-700 delay-800 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Team focus" />
             </div>
          </div>
       </div>

       {/* Perks & Benefits */}
       <div className="bg-slate-50 py-24">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                   <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Join Us?</h2>
                   <p className="text-slate-600 max-w-2xl mx-auto">We take care of our team so they can take care of our clients.</p>
               </div>
               <div className="grid md:grid-cols-3 gap-8">
                   {perks.map((perk, idx) => (
                       <div key={idx} className={`bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${800 + (idx * 100)}ms` }}>
                           <perk.icon className="w-10 h-10 text-blue-600 mb-4" />
                           <h3 className="font-bold text-lg text-slate-900 mb-2">{perk.title}</h3>
                           <p className="text-slate-600 text-sm">{perk.desc}</p>
                       </div>
                   ))}
               </div>
           </div>
       </div>

       {/* Employee Voices */}
       <div className="py-24 bg-slate-900 text-white">
           <div className="max-w-7xl mx-auto px-4">
               <h2 className="text-3xl font-bold mb-12 text-center">Life at GnJ</h2>
               <div className="grid md:grid-cols-2 gap-8">
                   <div className={`bg-white/10 p-8 rounded-2xl backdrop-blur-sm transition-all duration-700 delay-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                       <p className="italic text-slate-300 mb-6">"The best part about working here is the autonomy. I'm trusted to make decisions and solve problems in creative ways. Plus, the mentorship is incredible."</p>
                       <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold">A</div>
                           <div>
                               <div className="font-bold">Alex Chen</div>
                               <div className="text-sm text-slate-400">Senior Developer</div>
                           </div>
                       </div>
                   </div>
                   <div className={`bg-white/10 p-8 rounded-2xl backdrop-blur-sm transition-all duration-700 delay-1200 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                       <p className="italic text-slate-300 mb-6">"I joined as an intern and grew into a lead role. The company truly invests in your growth path. Every day is a new learning opportunity."</p>
                       <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">M</div>
                           <div>
                               <div className="font-bold">Maria Gonzalez</div>
                               <div className="text-sm text-slate-400">Product Manager</div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
};

export default TeamPage;