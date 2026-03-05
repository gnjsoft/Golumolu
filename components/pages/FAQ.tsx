import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in Fintech, Healthcare, E-commerce, Manufacturing, and Logistics. However, our agile methodology allows us to adapt to various sectors effectively, delivering tailored solutions for unique business challenges."
  },
  {
    question: "How do you ensure data security?",
    answer: "Security is integral to our development process. We adhere to OWASP standards, conduct regular security audits, and comply with GDPR, HIPAA, and ISO 27001 regulations to ensure your sensitive data remains protected at all times."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. A simple application might take 4-8 weeks, while enterprise-grade solutions can take 6 months or more. We provide detailed roadmaps and milestones during the initial consultation."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements to keep your software running smoothly."
  },
  {
    question: "What engagement models do you offer?",
    answer: "We offer flexible engagement models to suit your needs: Fixed Price for well-defined scopes, Time & Material for evolving requirements, and Dedicated Teams for long-term continuous collaboration."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side - Heading */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1.5 bg-yellow-400 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Here are answers to some common questions about our services and processes. Can't find what you're looking for?
            </p>
            <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group">
              Reach out to support
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-blue-200 bg-blue-50/30 shadow-sm' 
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className={`text-lg font-semibold pr-4 ${openIndex === index ? 'text-blue-700' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full shrink-0 transition-colors ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-blue-100/50 pt-4 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;