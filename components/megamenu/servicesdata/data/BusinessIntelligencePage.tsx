import React, { useEffect, useState } from 'react';
import { Lightbulb, LayoutDashboard, LineChart, PieChart, ArrowRight, Target, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessIntelligencePage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Corporate/Strategic Hero */}
      <div className="relative h-[500px] bg-slate-900 flex items-center overflow-hidden">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070" 
                alt="Business Meeting" 
                className="w-full h-full object-cover opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-slate-900/90 mix-blend-multiply"></div>
         </div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
             <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                 <div className="flex items-center gap-3 text-amber-400 mb-4 font-bold tracking-wider uppercase">
                     <Presentation size={20} /> Strategic Insight
                 </div>
                 <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                     Business Intelligence
                 </h1>
                 <p className="text-xl text-amber-100/80 max-w-xl leading-relaxed">
                     Turn information into insight. We build custom BI dashboards that give you a 360-degree view of your business performance.
                 </p>
             </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
         <div className="grid md:grid-cols-2 gap-20 items-center">
             
             <div className={`space-y-12 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                 <div className="flex gap-6 group">
                     <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                         <LayoutDashboard size={28}/>
                     </div>
                     <div>
                         <h3 className="text-2xl font-bold text-slate-900 mb-3">Interactive Dashboards</h3>
                         <p className="text-slate-600 text-lg leading-relaxed">Visualizations using Power BI, Tableau, or Qlik that allow you to drill down into the details and find the 'why' behind the 'what'.</p>
                     </div>
                 </div>
                 
                 <div className="flex gap-6 group">
                     <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                         <Target size={28}/>
                     </div>
                     <div>
                         <h3 className="text-2xl font-bold text-slate-900 mb-3">KPI Tracking</h3>
                         <p className="text-slate-600 text-lg leading-relaxed">Real-time monitoring of key performance indicators to ensure you stay on target and pivot quickly when needed.</p>
                     </div>
                 </div>

                 <div className="pt-4">
                     <Link to="/contact" className="bg-slate-900 text-white font-bold py-4 px-10 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl">
                         Build Your Dashboard
                     </Link>
                 </div>
             </div>

             {/* Mockup Animation */}
             <div className={`relative bg-slate-100 rounded-3xl p-6 shadow-2xl border border-slate-200 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full blur-2xl opacity-40"></div>
                 <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
                     <div className="font-bold text-slate-700">Sales Overview</div>
                     <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-400"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                         <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4 h-80">
                     <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
                         <PieChart size={80} className="text-blue-500 mb-4" />
                         <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                     </div>
                     <div className="bg-white rounded-2xl p-6 flex items-end justify-center gap-3 shadow-sm">
                         <div className="w-6 bg-amber-300 h-[40%] rounded-t-lg"></div>
                         <div className="w-6 bg-amber-400 h-[60%] rounded-t-lg"></div>
                         <div className="w-6 bg-amber-500 h-[80%] rounded-t-lg"></div>
                         <div className="w-6 bg-amber-600 h-[50%] rounded-t-lg"></div>
                     </div>
                     <div className="bg-white rounded-2xl p-6 col-span-2 flex items-center justify-center shadow-sm relative overflow-hidden">
                         <LineChart size={80} className="text-purple-500 w-full" />
                         <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
                     </div>
                 </div>
             </div>

         </div>
      </div>
    </div>
  );
};

export default BusinessIntelligencePage;