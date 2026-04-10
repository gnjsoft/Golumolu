import React, { useEffect, useState } from 'react';
import { Home, Users, MapPin, Smartphone, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeHealthcarePage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Hero */}
      <div className="bg-green-50 py-24 px-4 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-8">
                  <Heart className="text-green-600" size={40} fill="currentColor" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                  Care at <span className="text-green-600 underline decoration-4 decoration-green-300">Home</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Connecting caregivers, patients, and agencies with intuitive mobile-first solutions. Electronic Visit Verification (EVV) made simple.
              </p>
              <div className="flex justify-center gap-4">
                  <Link to="/contact" className="bg-green-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/40">
                      Get Started
                  </Link>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  { icon: MapPin, title: "GPS Verification", desc: "Accurate EVV (Electronic Visit Verification) for billing compliance and fraud prevention.", delay: 200 },
                  { icon: Smartphone, title: "Caregiver App", desc: "Offline-capable mobile app for documentation, scheduling, and routing on the go.", delay: 300 },
                  { icon: Users, title: "Family Portal", desc: "Real-time updates for family members, bringing peace of mind about their loved ones' care.", delay: 400 },
                  { icon: Home, title: "Remote Monitoring", desc: "Integration with IoT home health devices for continuous vital tracking.", delay: 500 }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-green-400 hover:-translate-y-2 transition-all duration-500 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                      <item.icon size={40} className="text-green-600 mb-6" />
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
          
          {/* Feature Highlight */}
          <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Seamless Agency Management</h2>
                  <p className="text-slate-400 text-lg mb-8">
                      Manage scheduling, billing, and payroll in one unified dashboard. Our platform handles the complexity of home health operations so you can focus on care.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Smart Matching Algorithms</li>
                      <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Automated Billing generation</li>
                      <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> HIPAA Compliant Cloud Storage</li>
                  </ul>
              </div>
              <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" className="rounded-2xl opacity-80 hover:opacity-100 transition-opacity" alt="Agency Dashboard" />
              </div>
          </div>
      </div>
    </div>
  );
};

export default HomeHealthcarePage;