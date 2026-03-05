import React, { useEffect, useState } from 'react';
import { Search, MapPin, ArrowRight, Briefcase, Zap, Globe, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  // Data kept for future use (without losing data)
  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "DevOps Specialist",
      department: "Engineering",
      location: "Hamburg, Germany",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Singapore",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "Mumbai, India",
      type: "Full-time",
      posted: "Just now"
    },
    {
      id: 5,
      title: "Enterprise Sales Executive",
      department: "Sales",
      location: "Singapore",
      type: "Full-time",
      posted: "2 weeks ago"
    },
    {
      id: 6,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Germany",
      type: "Part-time",
      posted: "1 month ago"
    },
    {
      id: 7,
      title: "React Native Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Contract",
      posted: "5 days ago"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#002B49] relative overflow-hidden text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className={`relative z-10 max-w-7xl mx-auto px-4 text-center transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wider uppercase mb-6">
            Careers at GnJ
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Shape the Future of Technology</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are a collective of innovators, engineers, and visionaries dedicated to building solutions that matter. Join us on our mission to transform industries through technology.
          </p>
          <div className="flex justify-center gap-4">
             <Link to="/contact" className="bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg">
                Join our Talent Pool
             </Link>
             <Link to="/about/team" className="bg-white/10 text-white font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
                Meet the Team
             </Link>
          </div>
        </div>
      </div>

      {/* Culture & Values Section (Replacing Benefits and Job Board) */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className={`transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">A Culture of Excellence and Innovation</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At GnJ Worldwide, we don't just build software; we build careers. Our culture is rooted in the belief that great ideas can come from anywhere, and that diversity of thought is our greatest strength.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Innovation First", desc: "We encourage experimentation and reward bold ideas that push boundaries." },
                  { title: "Global Collaboration", desc: "Work seamlessly across borders with teams in India, Germany, and Singapore." },
                  { title: "Continuous Growth", desc: "Dedicated budget for learning, certifications, and professional development." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="absolute -inset-4 bg-yellow-400/10 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
                alt="Our Team" 
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Impact", desc: "Our solutions touch millions of lives across the globe, from enterprise systems to consumer apps." },
              { icon: Zap, title: "Agility", desc: "We move fast, iterate quickly, and stay ahead of the curve in a rapidly evolving tech landscape." },
              { icon: Users, title: "Community", desc: "We believe in giving back to the tech community through open source and mentorship." }
            ].map((value, idx) => (
              <div key={idx} className={`p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${700 + (idx * 100)}ms` }}>
                <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Talent Pool CTA */}
      <div className="bg-[#002B49] py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Don't see a role that fits?</h2>
          <p className="text-xl text-slate-300 mb-12">
            We're always looking for exceptional talent to join our team. Send us your profile and we'll reach out when the right opportunity arises.
          </p>
          <Link to="/contact" className="inline-block bg-white text-slate-900 font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition-all text-lg">
            Submit Your Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;