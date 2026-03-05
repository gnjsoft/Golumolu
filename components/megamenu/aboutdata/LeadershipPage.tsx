import React, { useEffect, useState } from 'react';
import { Linkedin, Quote } from 'lucide-react';

const LeadershipPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const leaders = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      bio: "Visionary leader with 20+ years in technology and business strategy."
    },
    {
      name: "Jane Smith",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "Expert in cloud architecture and enterprise software solutions."
    },
    {
      name: "Robert Brown",
      role: "VP of Sales",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      bio: "Driving global growth through strategic partnerships and customer success."
    },
    {
      name: "Emily Davis",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      bio: "Ensuring operational excellence and efficient delivery across all projects."
    }
  ];

  const advisors = [
    { name: "Dr. Alan Grant", role: "Technology Advisor", company: "Ex-Google" },
    { name: "Sarah Connor", role: "Security Consultant", company: "CyberDefense Corp" },
    { name: "Miles Dyson", role: "AI Strategist", company: "Neural Net Systems" }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="bg-slate-50 py-24">
        <div className={`max-w-7xl mx-auto px-4 text-center transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Leadership</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Guided by experienced visionaries dedicated to excellence and innovation.
            </p>
        </div>
      </div>

      {/* CEO Message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-24">
         <div className={`bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="w-full md:w-1/3 relative">
               <div className="aspect-square rounded-full overflow-hidden border-4 border-slate-50 shadow-inner">
                  <img src={leaders[0].image} alt="CEO" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <Quote size={24} fill="currentColor" />
               </div>
            </div>
            <div className="w-full md:w-2/3">
               <h2 className="text-2xl font-bold text-slate-900 mb-2">A Message from our CEO</h2>
               <p className="text-blue-600 font-medium mb-6">Building the Future, Together</p>
               <p className="text-slate-600 text-lg leading-relaxed italic mb-6">
                  "At GnJ Worldwide, we believe that technology is not just about code and hardware; it's about people. It's about solving real-world problems and creating opportunities for growth. Our leadership team is committed to fostering a culture of innovation where every idea matters, and every client success is celebrated."
               </p>
               <div className="font-bold text-slate-900">John Doe</div>
               <div className="text-slate-500 text-sm">Founder & CEO</div>
            </div>
         </div>
      </div>

      {/* Executive Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Executive Team</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
                <div key={idx} className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${500 + (idx * 150)}ms` }}>
                    <div className="aspect-[3/4] overflow-hidden">
                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                             <button onClick={() => alert("LinkedIn profile is not available in this demo.")} className="inline-flex items-center text-white hover:text-yellow-400 transition-colors">
                                <Linkedin className="mr-2" size={20} /> Connect on LinkedIn
                             </button>
                        </div>
                    </div>
                    <div className="p-6 border-t border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{leader.role}</p>
                        <p className="text-slate-500 text-sm">{leader.bio}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Advisory Board */}
      <div className="bg-slate-900 py-24 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4">Advisory Board</h2>
               <p className="text-slate-400 max-w-2xl mx-auto">Providing strategic guidance and industry insights to steer our growth.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {advisors.map((advisor, idx) => (
                  <div key={idx} className={`bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 text-center hover:-translate-y-1 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${800 + (idx * 150)}ms` }}>
                     <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold shadow-lg">
                        {advisor.name.charAt(0)}
                     </div>
                     <h3 className="text-xl font-bold mb-1">{advisor.name}</h3>
                     <div className="text-yellow-400 text-sm font-medium mb-2">{advisor.role}</div>
                     <div className="text-slate-400 text-sm">{advisor.company}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default LeadershipPage;