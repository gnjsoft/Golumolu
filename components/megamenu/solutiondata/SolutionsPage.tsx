import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const solutionList = [
    "Enterprise Resource Planning (ERP)",
    "Customer Relationship Management (CRM)",
    "Supply Chain Management",
    "Human Resources Management",
    "Project Management Systems",
    "Content Management Systems (CMS)",
    "E-commerce Platforms",
    "Business Intelligence Dashboards",
    "Document Management",
    "Learning Management Systems"
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
       <div className="relative bg-[#0F172A] py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Enterprise Solutions</h1>
             <p className="text-xl text-slate-300 max-w-3xl mx-auto">
               Scalable, secure, and integrated software solutions designed to optimize your operations and drive growth.
             </p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Tailored for your business</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                   We understand that every business is unique. That's why we don't just sell software; we architect solutions. From streamlining your supply chain to enhancing customer engagement, our custom solutions are built to fit your exact needs.
                </p>
                <div className="grid gap-4">
                   {solutionList.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                         <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                         <span className="font-medium text-slate-700">{item}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className="relative h-full min-h-[500px] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" alt="Solutions Dashboard" className="absolute inset-0 w-full h-full object-cover" />
             </div>
          </div>
       </div>
    </div>
  );
};

export default SolutionsPage;