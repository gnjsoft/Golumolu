import React, { useEffect, useState } from 'react';
import { MessageSquare, Headphones, Laptop, ArrowRight, UserCheck, Clock, Smile, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItSupportPage: React.FC = () => {
  const [showBubbles, setShowBubbles] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setShowBubbles(true), 300);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-blue-50 py-24 px-4 overflow-hidden relative">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
             <div className="md:w-1/2 z-10">
                 <h1 className="text-5xl font-bold text-slate-900 mb-6">Expert IT Support <br/> <span className="text-blue-600">When You Need It</span></h1>
                 <p className="text-lg text-slate-600 mb-8 max-w-md">
                     Fast, friendly, and effective technical support for your employees. minimize downtime and maximize productivity.
                 </p>
                 <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg">
                     Get Support Now
                 </Link>
             </div>

             {/* Chat Bubble Animation */}
             <div className="md:w-1/2 relative h-[400px] w-full mt-12 md:mt-0">
                 <div className={`absolute top-10 right-20 bg-white p-4 rounded-2xl rounded-tr-none shadow-xl border border-slate-100 max-w-xs transition-all duration-700 ${showBubbles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     <div className="flex items-center gap-3 mb-2">
                         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><UserCheck size={16}/></div>
                         <span className="font-bold text-slate-900 text-sm">User</span>
                     </div>
                     <p className="text-slate-600 text-sm">Help! My email isn't syncing.</p>
                 </div>

                 <div className={`absolute top-40 right-10 bg-blue-600 text-white p-4 rounded-2xl rounded-tl-none shadow-xl max-w-xs transition-all duration-700 delay-500 ${showBubbles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     <div className="flex items-center gap-3 mb-2 justify-end">
                         <span className="font-bold text-white text-sm">Support Agent</span>
                         <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white"><Headphones size={16}/></div>
                     </div>
                     <p className="text-blue-50 text-sm">On it! Let's check your connection settings.</p>
                 </div>

                 <div className={`absolute bottom-20 right-32 bg-green-100 p-4 rounded-2xl shadow-md border border-green-200 transition-all duration-700 delay-1000 ${showBubbles ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                     <div className="flex items-center gap-2 text-green-700 font-bold">
                         <Smile size={20} /> Problem Solved!
                     </div>
                 </div>
             </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Laptop, title: "Remote Support", desc: "Instant remote access to troubleshoot issues directly on user devices." },
                  { icon: Users, title: "On-Site Support", desc: "Physical presence for hardware repairs, setups, and complex networking issues." },
                  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock coverage ensuring critical issues are addressed immediately." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:-translate-y-2 transition-transform">
                      <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                          <item.icon size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ItSupportPage;