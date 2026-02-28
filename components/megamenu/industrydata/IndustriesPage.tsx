import React, { useEffect } from 'react';
import { Activity, Landmark, ShoppingCart, GraduationCap, Factory, Building, Coffee, Truck, Building2, Film, Leaf, Scale, Heart, Car, Zap } from 'lucide-react';

const IndustriesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const industries = [
    { title: "Healthcare", icon: Activity, color: "text-pink-600 bg-pink-50" },
    { title: "Finance", icon: Landmark, color: "text-emerald-600 bg-emerald-50" },
    { title: "Retail", icon: ShoppingCart, color: "text-blue-600 bg-blue-50" },
    { title: "Education", icon: GraduationCap, color: "text-violet-600 bg-violet-50" },
    { title: "Manufacturing", icon: Factory, color: "text-orange-600 bg-orange-50" },
    { title: "Real Estate", icon: Building, color: "text-cyan-600 bg-cyan-50" },
    { title: "Hospitality", icon: Coffee, color: "text-rose-600 bg-rose-50" },
    { title: "Logistics", icon: Truck, color: "text-indigo-600 bg-indigo-50" },
    { title: "Government", icon: Building2, color: "text-slate-600 bg-slate-100" },
    { title: "Media", icon: Film, color: "text-fuchsia-600 bg-fuchsia-50" },
    { title: "Agriculture", icon: Leaf, color: "text-lime-600 bg-lime-50" },
    { title: "Legal", icon: Scale, color: "text-sky-600 bg-sky-50" },
    { title: "Non-Profit", icon: Heart, color: "text-red-600 bg-red-50" },
    { title: "Automotive", icon: Car, color: "text-gray-600 bg-gray-100" },
    { title: "Energy", icon: Zap, color: "text-amber-600 bg-amber-50" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Industries We Serve</h1>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
             Our deep domain expertise across various sectors allows us to deliver tailored solutions that address specific industry challenges.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${item.color}`}>
                        <item.icon size={32} />
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{item.title}</span>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default IndustriesPage;