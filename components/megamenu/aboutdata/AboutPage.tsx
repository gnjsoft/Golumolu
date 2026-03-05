import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, Target, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
      {children}
    </div>
  );
};

const AboutPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2084')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-yellow-400 text-sm font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Empowering Innovation
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Bridging the gap between complex technology and business goals since 2020.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Intro */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
               <div className="w-20 h-1.5 bg-yellow-400 rounded-full mb-8"></div>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 GnJ Worldwide is a premier technology solutions provider dedicated to helping organizations navigate the complexities of the digital age. With a footprint spanning India, Singapore, and Germany, we bring global expertise to local challenges.
               </p>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 Our journey began with a simple mission: to deliver measurable business value through high-quality, scalable, and secure technology solutions.
               </p>
               <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-yellow-400 pl-6 py-2 bg-slate-50 rounded-r-xl">
                 Traditional information technology management function (or IT) should be the technology backbone that is responsible for the development, and management of digital and administrative solutions in a professional way. The technology backbone consists of all information technology systems and processes that support the running of the business's operations, through the management of end-user services, plus enterprise and business applications. It is where the essential business asset of a company resides, and the purpose is to provide operational efficiency to the company through reliability, security, and scalability.
               </p>
            </div>
            <div className="relative">
               <div className="absolute -inset-4 bg-yellow-400/20 rounded-xl transform rotate-3"></div>
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" alt="Team" className="relative rounded-xl shadow-2xl" />
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 bg-slate-50 p-12 rounded-3xl">
                {[
                    { label: "Years Experience", value: "6+" },
                    { label: "Projects Delivered", value: "350+" },
                    { label: "Global Offices", value: "3" },
                    { label: "Team Members", value: "10+" }
                ].map((stat, i) => (
                    <div key={i} className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                        <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </ScrollReveal>

        {/* Germany Presence */}
        <ScrollReveal delay={300}>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 md:order-1">
               <div className="relative">
                  <div className="absolute -inset-4 bg-blue-600/10 rounded-xl transform -rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1599946347341-6cd394793abc?auto=format&fit=crop&q=80&w=2070" 
                    alt="Germany Presence" 
                    className="relative rounded-xl shadow-2xl w-full h-[400px] object-cover" 
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
            <div className="order-1 md:order-2">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Our European Hub</h2>
               <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 Our German operations represent our commitment to precision and engineering excellence. Located in the heart of Europe, our team focuses on high-performance systems and research-driven technology solutions.
               </p>
               <p className="text-lg text-slate-600 leading-relaxed">
                 This strategic presence allows us to bridge the gap between Asian innovation and European industrial standards, providing our clients with truly global perspectives.
               </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
                { title: "Customer Centric", icon: Users, desc: "We put our clients at the heart of everything we do." },
                { title: "Innovation", icon: Globe, desc: "Constantly pushing boundaries to deliver cutting-edge solutions." },
                { title: "Excellence", icon: Award, desc: "Uncompromising quality in every line of code we write." }
            ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                    </div>
                </ScrollReveal>
            ))}
        </div>

      </div>
    </div>
  );
};

export default AboutPage;