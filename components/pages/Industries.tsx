import React from 'react';
import { 
  Activity, 
  Landmark, 
  ShoppingCart, 
  GraduationCap, 
  Factory, 
  Building, 
  Coffee, 
  Truck, 
  Building2, 
  Film, 
  Leaf, 
  Scale, 
  Heart, 
  Car, 
  Zap 
} from 'lucide-react';

const INDUSTRIES = [
  {
    title: "Healthcare",
    description: "Digital transformation solutions for hospitals, clinics, and medical practices to improve patient care and streamline operations.",
    icon: Activity,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Finance & Banking",
    description: "Secure fintech solutions, digital banking platforms, and compliance systems for financial institutions and startups.",
    icon: Landmark,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "E-commerce & Retail",
    description: "Online stores, inventory management systems, and customer engagement platforms to boost sales and customer satisfaction.",
    icon: ShoppingCart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Education",
    description: "Learning management systems, educational apps, and digital classroom solutions for schools and training organizations.",
    icon: GraduationCap,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Manufacturing",
    description: "Industrial IoT solutions, automation systems, and supply chain management tools to optimize production processes.",
    icon: Factory,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Real Estate",
    description: "Property management platforms, virtual tour solutions, and CRM systems for real estate agencies and developers.",
    icon: Building,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Hospitality & Tourism",
    description: "Booking systems, guest management platforms, and mobile apps to enhance customer experience in hotels and restaurants.",
    icon: Coffee,
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Transportation & Logistics",
    description: "Fleet management systems, route optimization tools, and tracking solutions for shipping and delivery companies.",
    icon: Truck,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Government & Public Sector",
    description: "Digital governance solutions, citizen service portals, and data management systems for government agencies.",
    icon: Building2,
    color: "bg-slate-200 text-slate-700",
  },
  {
    title: "Entertainment & Media",
    description: "Content management systems, streaming platforms, and digital marketing tools for media companies and creators.",
    icon: Film,
    color: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    title: "Agriculture & Food",
    description: "Farm management software, supply chain tracking, and food safety systems for agricultural and food processing businesses.",
    icon: Leaf,
    color: "bg-lime-100 text-lime-700",
  },
  {
    title: "Legal Services",
    description: "Case management systems, document automation, and client portals for law firms and legal departments.",
    icon: Scale,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Non-Profit Organizations",
    description: "Donor management systems, volunteer platforms, and fundraising tools to help non-profits achieve their missions.",
    icon: Heart,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Automotive",
    description: "Connected car solutions, dealership management systems, and automotive service platforms for the modern vehicle industry.",
    icon: Car,
    color: "bg-gray-100 text-gray-700",
  },
  {
    title: "Energy & Utilities",
    description: "Smart grid solutions, energy management systems, and utility billing platforms for power and utility companies.",
    icon: Zap,
    color: "bg-amber-100 text-amber-600",
  }
];

const Industries: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Industry Expertise
          </h2>
          <div className="w-24 h-1.5 bg-yellow-400 rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            We deliver tailored digital solutions across a wide range of industries, helping businesses innovate and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col items-start"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${industry.color}`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;