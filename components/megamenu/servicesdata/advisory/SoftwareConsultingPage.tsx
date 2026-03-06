import React, { useEffect, useState } from 'react';
import { Code2, ArrowRight, Check, LayoutTemplate, ShieldCheck, Zap, Search, Target, Settings, Layers, Cloud, RefreshCw, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareConsultingPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      
      {/* Blueprint Header */}
      <div className="bg-slate-50 py-24 px-4 text-center border-b border-slate-200 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className={`relative z-10 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">Software Architecture & Consulting</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Expert advice on tech stack, scalability, and development best practices.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
         <div className={`bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center transition-all duration-1000 delay-300 ${mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            
            <div className="flex-1">
               <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Expert Consulting Matters?</h2>
               <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                   Making the wrong technical decisions early on leads to technical debt. Our architects help you choose the right tools and patterns for scalable, maintainable software.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                      { text: "Tech Stack Selection", icon: LayoutTemplate },
                      { text: "Architecture Design", icon: Code2 },
                      { text: "Security Audits", icon: ShieldCheck },
                      { text: "Performance Tuning", icon: Zap }
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors cursor-default">
                        <item.icon className="text-blue-600" size={20}/> 
                        <span className="font-bold text-slate-800">{item.text}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Interactive Looking Card */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
               <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm">
                   <Code2 size={48} className="text-white" />
               </div>
               <h3 className="font-bold text-2xl mb-2">Technical Excellence</h3>
               <p className="text-blue-100 mb-8">Ready to architect your success?</p>
               <Link to="/contact" className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-md w-full">
                   Book a Session
               </Link>
            </div>

         </div>
      </div>

      {/* Our Consulting Process */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Consulting Process</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              A structured approach to transforming your software architecture and aligning it with your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "We analyze your current architecture, codebase, and business requirements to identify bottlenecks and opportunities.",
                icon: Search
              },
              {
                step: "02",
                title: "Strategy & Design",
                desc: "Our architects design a scalable, secure, and future-proof architecture tailored to your specific needs.",
                icon: Target
              },
              {
                step: "03",
                title: "Implementation Plan",
                desc: "We create a detailed roadmap, selecting the right tech stack and defining milestones for seamless execution.",
                icon: Settings
              },
              {
                step: "04",
                title: "Execution & Support",
                desc: "We guide your team through the transition, ensuring best practices and providing ongoing architectural support.",
                icon: Zap
              }
            ].map((process, idx) => (
              <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                <div className="text-5xl font-extrabold text-slate-100 absolute top-6 right-6 group-hover:text-blue-50 transition-colors">{process.step}</div>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <process.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{process.title}</h3>
                <p className="text-slate-600 relative z-10">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Areas of Expertise */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Architectural Expertise</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We specialize in modernizing legacy systems and designing cloud-native architectures that scale effortlessly. Our deep expertise spans across various architectural patterns and technologies.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Microservices Architecture", desc: "Decoupling monolithic applications into independently deployable services for better scalability and fault tolerance.", icon: Layers },
                  { title: "Cloud-Native Solutions", desc: "Designing applications specifically for cloud environments (AWS, Azure, GCP) to maximize elasticity and resilience.", icon: Cloud },
                  { title: "Legacy Modernization", desc: "Safely migrating outdated systems to modern tech stacks without disrupting ongoing business operations.", icon: RefreshCw },
                  { title: "Security & Compliance", desc: "Embedding security into the architecture from day one, ensuring compliance with industry standards (GDPR, HIPAA, SOC2).", icon: Shield }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <item.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-50 rounded-[3rem] transform rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" 
                alt="Software Architecture" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Check size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100+</div>
                  <div className="text-sm text-slate-500 font-medium">Architectures Designed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SoftwareConsultingPage;