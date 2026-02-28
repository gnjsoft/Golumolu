import React, { useEffect, useState } from 'react';
import { FileText, UserCheck, Code, MessageSquare, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HiringPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const steps = [
    {
      icon: FileText,
      title: "1. Application",
      desc: "Submit your resume via our careers page or LinkedIn. Tell us about your projects, skills, and what drives you."
    },
    {
      icon: UserCheck,
      title: "2. Initial Screening",
      desc: "Our talent acquisition team will review your profile. If it's a match, we'll schedule a quick call to get to know you."
    },
    {
      icon: Code,
      title: "3. Technical/Skill Assessment",
      desc: "Depending on the role, you may be asked to complete a coding challenge, design task, or case study."
    },
    {
      icon: MessageSquare,
      title: "4. Cultural Fit Interview",
      desc: "Meet with the team and leadership. We want to ensure our values align and that you'll thrive in our environment."
    },
    {
      icon: CheckCircle,
      title: "5. Offer & Onboarding",
      desc: "Congratulations! We'll extend an offer and begin the onboarding process to welcome you to the family."
    }
  ];

  const faqs = [
    { q: "Can I work remotely?", a: "Yes, we support remote and hybrid working models for most positions." },
    { q: "How long does the process take?", a: "Typically 2-3 weeks from application to offer, depending on the role's complexity." },
    { q: "Do you provide visa sponsorship?", a: "We consider sponsorship for select specialized roles in our Germany and Singapore offices." },
    { q: "What if I was rejected previously?", a: "We encourage you to re-apply after 6 months if you've gained new skills or experience." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-slate-900 py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className={`relative z-10 max-w-3xl mx-auto transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Hire</h1>
            <p className="text-xl text-slate-300">
                Transparency is key. Here is what you can expect when you apply to join GnJ Worldwide.
            </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="relative">
             {/* Vertical Line for Desktop */}
             <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-100 rounded-full transition-all duration-1000 delay-300 ${active ? 'opacity-100' : 'opacity-0'}`}></div>
             
             <div className="space-y-12 md:space-y-24">
                 {steps.map((step, idx) => (
                     <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${300 + (idx * 150)}ms` }}>
                         {/* Text Side */}
                         <div className={`flex-1 text-center ${idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                             <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                             <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                         </div>
                         
                         {/* Icon/Marker */}
                         <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-blue-600 shadow-lg group hover:scale-110 transition-transform">
                             <step.icon size={28} />
                         </div>

                         {/* Empty Side for Balance */}
                         <div className="flex-1 hidden md:block"></div>
                     </div>
                 ))}
             </div>
         </div>
      </div>

      {/* Preparation Tips */}
      <div className="bg-slate-50 py-24">
          <div className="max-w-5xl mx-auto px-4">
              <div className={`text-center mb-16 transition-opacity duration-1000 delay-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Prepare for Success</h2>
                  <p className="text-slate-600">A few tips to help you stand out during the interview process.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-500 transition-all duration-700 delay-800 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                      <h3 className="font-bold text-lg mb-4">Be Yourself</h3>
                      <p className="text-slate-600 text-sm">We value authenticity. Don't be afraid to show your personality and share your true passions.</p>
                  </div>
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 border-yellow-400 transition-all duration-700 delay-900 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                      <h3 className="font-bold text-lg mb-4">Show Your Work</h3>
                      <p className="text-slate-600 text-sm">Whether it's a GitHub repo or a portfolio, we love seeing concrete examples of what you've built.</p>
                  </div>
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500 transition-all duration-700 delay-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                      <h3 className="font-bold text-lg mb-4">Ask Questions</h3>
                      <p className="text-slate-600 text-sm">Interviews are a two-way street. Ask us about our challenges, stack, and culture.</p>
                  </div>
              </div>
          </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 py-24">
          <h2 className={`text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3 transition-opacity duration-1000 delay-[1100ms] ${active ? 'opacity-100' : 'opacity-0'}`}>
              <HelpCircle className="text-blue-600" /> Hiring FAQ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, idx) => (
                  <div key={idx} className={`bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-200 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${1200 + (idx * 100)}ms` }}>
                      <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* CTA */}
      <div className={`bg-blue-600 py-16 text-center text-white transition-opacity duration-1000 delay-[1500ms] ${active ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6">Ready to apply?</h2>
          <Link to="/careers" className="inline-flex items-center bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all">
              Browse Open Roles <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
      </div>
    </div>
  );
};

export default HiringPage;