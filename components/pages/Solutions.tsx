import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOLUTIONS = [
  { name: "Enterprise applications", href: "/services/software-development" },
  { name: "ERP", href: "/solutions/erp" },
  { name: "Financial management", href: "/solutions/finance" },
  { name: "Supply chain management", href: "/solutions/scm" },
  { name: "Asset management", href: "/solutions/eam" },
  { name: "Fleet management", href: "/solutions/operations" },
  { name: "HR software", href: "/solutions/hr" },
  { name: "eLearning software", href: "/solutions/elearning" },
  { name: "eCommerce", href: "/solutions/ecommerce" },
  { name: "Mobile apps", href: "/services/mobile-development" },
  { name: "Content management", href: "/solutions/cms" },
  { name: "Document management", href: "/solutions/dms" },
  { name: "CRM", href: "/solutions/crm" },
  { name: "Marketing & advertising", href: "/solutions/marketing" },
  { name: "Web portals", href: "/solutions/portals" },
  { name: "Data analytics", href: "/services/data-analytics" }
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
            <Link 
              key={index} 
              to={item.href}
              className="group relative flex items-center justify-center p-6 h-32 bg-white rounded-lg shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-[17px] font-semibold text-slate-800 group-hover:text-blue-600 text-center transition-colors px-4">
                {item.name}
              </span>
              <ArrowUpRight className="absolute bottom-3 right-3 w-4 h-4 text-blue-500 group-hover:text-blue-900 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;