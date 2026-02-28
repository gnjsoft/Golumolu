import React, { useEffect, useState } from 'react';
import { Rocket, Smartphone, Heart, ArrowRight, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalHealthPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white py-32 px-4 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className={`relative z-10 max-w-3xl mx-auto transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="bg-white/20 p-4 rounded-full inline-block mb-6 backdrop-blur-md">
                  <Rocket size={48} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-md">Digital Health Startups</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
                  Speed to market is everything. We help founders build, launch, and scale disruptive health apps.
              </p>
              <Link to="/contact" className="bg-white text-pink-600 font-bold py-3 px-8 rounded-full shadow-xl hover:bg-pink-50 hover:scale-105 transition-all">
                  Launch Your MVP
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          {[
              { icon: Zap, title: "Rapid MVP", desc: "Prototype and develop your core product in weeks, not months. Validate early.", color: "text-orange-500", delay: 200 },
              { icon: Target, title: "Regulatory Guidance", desc: "Navigating FDA, CE, and GDPR requirements from day one to avoid costly pivots.", color: "text-pink-500", delay: 400 },
              { icon: Smartphone, title: "Scalable Tech", desc: "Cloud-native architecture that grows effortlessly with your user base, from 100 to 1M+.", color: "text-purple-500", delay: 600 }
          ].map((item, idx) => (
              <div 
                key={idx} 
                className={`p-10 bg-white rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 transform ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                  <item.icon size={40} className={`${item.color} mb-6`} />
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default DigitalHealthPage;