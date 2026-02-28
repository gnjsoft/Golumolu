import React, { useEffect, useState } from 'react';
import { Plane, Map, Calendar, Sun, ArrowRight, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TravelPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setActive(true);
  }, []);

  return (
    <div className="bg-sky-50 min-h-screen pt-20 font-sans">
      <div className="relative py-32 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2021')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-sky-900/40"></div>
          
          <div className={`relative z-10 max-w-4xl mx-auto text-white transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Plane size={64} className={`mx-auto mb-6 transition-transform duration-1000 delay-300 ${active ? 'rotate-[-45deg] translate-x-0' : 'rotate-0 -translate-x-20'}`} />
              <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Travel & Hospitality</h1>
              <p className="text-xl font-medium max-w-2xl mx-auto mb-10 drop-shadow-md">
                  Create seamless journeys. From booking engines to personalized guest experiences.
              </p>
              <Link to="/contact" className="bg-yellow-400 text-slate-900 font-bold py-3 px-10 rounded-full hover:bg-yellow-300 transition-colors shadow-xl">
                  Digitalize Travel
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-12">
              <div className={`text-center p-6 transition-all duration-700 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-6 text-sky-500">
                      <Calendar size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Booking Engines</h3>
                  <p className="text-slate-600">High-performance flight, hotel, and tour booking systems with GDS integration.</p>
              </div>
              <div className={`text-center p-6 transition-all duration-700 delay-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-6 text-orange-500">
                      <UserCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Guest Management</h3>
                  <p className="text-slate-600">Personalized CRM solutions for hotels and agencies to boost loyalty.</p>
              </div>
              <div className={`text-center p-6 transition-all duration-700 delay-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-6 text-green-500">
                      <Map size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Travel Apps</h3>
                  <p className="text-slate-600">Mobile companions for travelers with itinerary management and local guides.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default TravelPage;