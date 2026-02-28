import React from 'react';
import { Users, Clock, Award, Zap } from 'lucide-react';

const STATS = [
  {
    id: 1,
    value: "350+",
    label: "Projects Completed",
    icon: Users,
  },
  {
    id: 2,
    value: "24/7",
    label: "Support Available",
    icon: Clock,
  },
  {
    id: 3,
    value: "99%",
    label: "Client Satisfaction",
    icon: Award,
  },
  {
    id: 4,
    value: "8+",
    label: "Years Experience",
    icon: Zap,
  }
];

const Stats: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Key Facts About Us
          </h2>
          <div className="w-24 h-1 bg-yellow-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-slate-100 py-10 bg-blue-100 rounded-xl">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="flex flex-col items-center justify-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 bg-blue-50 group-hover:scale-110 shadow-md">
                  <Icon className="w-7 h-7 text-blue-600" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-5xl font-light text-slate-900 mb-3 tracking-tight">
                  {stat.value}
                </h3>
                
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest group-hover:text-slate-700 transition-colors">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;