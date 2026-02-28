import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const SOLUTIONS = [
  "Enterprise applications",
  "ERP",
  "Financial management",
  "Supply chain management",
  "Asset management",
  "Fleet management",
  "HR software",
  "eLearning software",
  "eCommerce",
  "Mobile apps",
  "Content management",
  "Document management",
  "CRM",
  "Marketing & advertising",
  "Web portals",
  "Data analytics"
];

const Solutions: React.FC = () => {
  return (
    <section className="bg-blue-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Solutions We Deliver
          </h2>
          <div className="w-24 h-1.5 bg-yellow-400 rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            We engineer robust software solutions tailored to your specific business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((item, index) => (
            <a 
              key={index} 
              href="#"
              className="group relative flex items-center justify-center p-6 h-32 bg-white rounded-lg shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-[17px] font-semibold text-slate-800 group-hover:text-blue-600 text-center transition-colors px-4">
                {item}
              </span>
              <ArrowUpRight className="absolute bottom-3 right-3 w-4 h-4 text-blue-500 group-hover:text-blue-900 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;