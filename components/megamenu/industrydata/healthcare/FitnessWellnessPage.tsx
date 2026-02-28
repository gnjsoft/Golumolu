import React, { useEffect, useState } from 'react';
import { Watch, Heart, Activity, Smartphone, Play, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FitnessWellnessPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-orange-500 text-white py-24 px-4 flex flex-col items-center text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 rounded-full blur-[80px] opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-red-500 rounded-full blur-[80px] opacity-50"></div>
          </div>
          
          <div className={`relative z-10 transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="bg-white p-4 rounded-full inline-block mb-6 shadow-xl text-orange-500">
                  <Activity size={48} />
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 italic">Move. Track. Thrive.</h1>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto font-medium">
                  Creating engaging digital experiences for gyms, spas, nutritionists, and wellness brands.
              </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Smartphone, title: "Workout Apps", desc: "Video-on-demand libraries, live classes, and personalized training plans.", delay: 200 },
              { icon: Watch, title: "Wearable Integration", desc: "Sync data effortlessly from Apple Watch, Fitbit, and Garmin devices.", delay: 400 },
              { icon: Heart, title: "Nutrition Platforms", desc: "Meal planning, calorie tracking, and macro calculation tools.", delay: 600 }
          ].map((item, idx) => (
              <div 
                key={idx} 
                className={`text-center p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-100 group transform ${active ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                  <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={36} className="text-orange-500" />
                  </div>
                  <h3 className="font-bold text-2xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
          ))}
      </div>

      <div className={`text-center pb-24 transition-opacity duration-1000 delay-700 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold py-4 px-10 rounded-full hover:bg-orange-500 transition-colors shadow-lg">
              <Zap size={20} fill="currentColor" /> Energize Your Business
          </Link>
      </div>
    </div>
  );
};

export default FitnessWellnessPage;