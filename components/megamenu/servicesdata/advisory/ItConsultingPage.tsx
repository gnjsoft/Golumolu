import React, { useEffect, useState } from 'react';
import { Briefcase, ArrowRight, CheckCircle, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItConsultingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className={`relative bg-slate-900 py-32 px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#0f172a_25%,#1e293b_25%,#1e293b_50%,#0f172a_50%,#0f172a_75%,#1e293b_75%,#1e293b_100%)] bg-[size:40px_40px] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 overflow-hidden">
             <span className={`block text-blue-400 font-bold tracking-widest uppercase text-sm transition-transform duration-700 delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>Strategy & Advisory</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            Strategic IT Consulting
          </h1>
          <p className={`text-xl text-slate-300 max-w-2xl mx-auto transition-opacity duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Aligning technology with your business vision to drive sustainable growth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content with Slide In */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <TrendingUp className="text-blue-600" /> Future-Proofing Business
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              In a rapidly evolving digital landscape, making the right technology choices is critical. Our consultants act as your strategic partners, helping you navigate complexity, optimize costs, and implement solutions that deliver tangible ROI.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Infrastructure Assessment", desc: "Audit of current systems for scalability and security." },
                { title: "Roadmap Design", desc: "5-year strategic planning aligned with business goals." },
                { title: "Vendor Management", desc: "Unbiased selection and negotiation with tech providers." }
              ].map((item, idx) => (
                <div key={idx} className="flex group">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <CheckCircle size={16} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/contact" className="group inline-flex items-center bg-slate-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30">
                Start Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>

          {/* Cards Grid with Staggered Flip */}
          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: Lightbulb, title: "Innovation", text: "New Tech Adoption", delay: "delay-500" },
               { icon: Target, title: "Strategy", text: "Goal Alignment", delay: "delay-700" },
               { icon: Briefcase, title: "Operations", text: "Process Optimization", delay: "delay-900" },
               { icon: CheckCircle, title: "Results", text: "Measurable ROI", delay: "delay-1000" }
             ].map((card, idx) => (
               <div 
                 key={idx} 
                 className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-700 transform ${isVisible ? 'opacity-100 rotate-0 translate-y-0' : `opacity-0 rotate-12 translate-y-20`} ${card.delay} hover:-translate-y-2`}
                 style={{ transitionDelay: `${500 + (idx * 150)}ms` }} 
               >
                 <card.icon className="text-blue-600 mb-4" size={32}/>
                 <h3 className="font-bold text-slate-900">{card.title}</h3>
                 <p className="text-sm text-slate-500 mt-2">{card.text}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Why Choose GNJ Worldwide for IT Support? Section */}
        <div className={`mt-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose GNJ Worldwide for IT Support?</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              We go beyond basic troubleshooting. Our IT support services are designed to be proactive, strategic, and fully aligned with your business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Proactive Problem Solving",
                desc: "We don't just fix issues; we anticipate them. Our monitoring systems detect potential problems before they impact your operations.",
                icon: Lightbulb
              },
              {
                title: "Deep Industry Expertise",
                desc: "With decades of experience across various sectors, we understand the unique technological challenges and compliance requirements of your industry.",
                icon: Briefcase
              },
              {
                title: "Scalable Solutions",
                desc: "Our support models grow with you. Whether you're expanding locally or globally, our IT infrastructure adapts to your changing needs seamlessly.",
                icon: TrendingUp
              },
              {
                title: "24/7 Dedicated Support",
                desc: "Technology doesn't sleep, and neither do we. Our expert team is available around the clock to ensure your systems remain operational.",
                icon: Target
              },
              {
                title: "Strategic Alignment",
                desc: "We ensure every IT decision supports your broader business goals, turning technology from a cost center into a strategic asset.",
                icon: CheckCircle
              },
              {
                title: "Vendor-Agnostic Approach",
                desc: "We recommend the best solutions for your specific needs, not just the ones we partner with, ensuring unbiased and optimal technology choices.",
                icon: Lightbulb
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItConsultingPage;