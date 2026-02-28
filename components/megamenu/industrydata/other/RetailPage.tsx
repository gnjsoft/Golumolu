import React, { useEffect, useState } from 'react';
import { ShoppingBag, Smartphone, MapPin, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-pink-600 text-white py-24 px-4 text-center overflow-hidden">
          <div className={`transition-all duration-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <ShoppingBag size={64} className="mx-auto mb-6 text-pink-200" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Future of Retail</h1>
              <p className="text-xl text-pink-100 max-w-2xl mx-auto mb-10">
                  Unified commerce solutions that blend physical and digital experiences.
              </p>
              <Link to="/contact" className="bg-white text-pink-600 font-bold py-3 px-8 rounded-full hover:bg-pink-50 transition-colors inline-flex items-center">
                  Transform Customer Experience
              </Link>
          </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-4">
                  {[
                      { icon: Smartphone, title: "Mobile POS", color: "text-pink-500", delay: 200 },
                      { icon: MapPin, title: "Geofencing", color: "text-purple-500", delay: 300, mt: true },
                      { icon: TrendingUp, title: "Demand Forecasting", color: "text-blue-500", delay: 400 },
                      { icon: Users, title: "Loyalty Systems", color: "text-green-500", delay: 500, mt: true }
                  ].map((card, idx) => (
                      <div 
                        key={idx} 
                        className={`bg-slate-50 p-6 rounded-2xl text-center ${card.mt ? 'mt-8' : ''} transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                        style={{ transitionDelay: `${card.delay}ms` }}
                      >
                          <card.icon className={`mx-auto ${card.color} mb-2`} size={32} />
                          <h4 className="font-bold text-slate-900">{card.title}</h4>
                      </div>
                  ))}
              </div>
              
              <div className={`transition-all duration-1000 delay-500 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Omnichannel Excellence</h2>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      Customers expect to shop anywhere, anytime. We build platforms that synchronize inventory, customer data, and orders across web, mobile, social, and brick-and-mortar stores.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="font-medium text-slate-700">Headless Commerce Architecture</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="font-medium text-slate-700">AI-Powered Personalization</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="font-medium text-slate-700">Smart Inventory Management</span>
                      </li>
                  </ul>
                  <div className="mt-8">
                      <Link to="/contact" className="text-pink-600 font-bold hover:text-pink-700 inline-flex items-center">
                          Explore Solutions <ArrowRight className="ml-2" size={18} />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default RetailPage;