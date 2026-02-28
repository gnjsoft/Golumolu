import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Calendar, Globe } from 'lucide-react';
import { CONTACT_DATA } from '../../../data/ContactData';

const LocationsPage: React.FC = () => {
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  // Simple function to get local time string
  const getLocalTime = (offset: number) => {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * offset));
    return nd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const officeDetails = [
      { 
        ...CONTACT_DATA.offices[0], 
        timezone: 5.5, 
        label: "IST", 
        phone: "+91 9099126937",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8062228811466!2d72.87532657596045!3d19.07222105209778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c89f5c404629%3A0x8633758066e44b93!2sAwfis%20Bandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=2000",
        description: "Our global headquarters and primary development center, located in the heart of Mumbai's financial district."
      },
      { 
        ...CONTACT_DATA.offices[1], 
        timezone: 8, 
        label: "SGT", 
        phone: "+65 6123 4567",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806043!2d103.851959!3d1.284852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190c2c94ccb3%3A0x11213560881bccc7!2sOne%20Raffles%20Place!5e0!3m2!1sen!2sg!4v1710000000000!5m2!1sen!2sg",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=2000",
        description: "Serving the APAC region with strategic consulting and high-tech innovation from One Raffles Place."
      },
      { 
        ...CONTACT_DATA.offices[2], 
        timezone: 1, 
        label: "CET", 
        phone: "+49 40 1234 5678",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.637731773094!2d9.9815!3d53.5515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f18d7d8e6ad%3A0x2d87779269784b0!2sAxel-Springer-Platz%203%2C%2020355%20Hamburg%2C%20Germany!5e0!3m2!1sen!2sde!4v1710000000000!5m2!1sen!2sde",
        image: "https://images.unsplash.com/photo-1560969184-10fe8719e090?auto=format&fit=crop&q=80&w=2000",
        description: "Our European hub focusing on enterprise solutions, automotive tech, and industrial automation."
      }
  ];

  const activeOffice = officeDetails[activeTab];

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
       
       {/* Hero Section */}
       <div className="bg-[#002B49] text-white relative overflow-hidden pb-32">
          <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-contain bg-center bg-no-repeat bg-fixed"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#002B49]/90"></div>
          
          <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wider uppercase mb-6">
                Global Network
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Offices</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                 We operate across strategic hubs in Asia and Europe, ensuring 24/7 support and local expertise for our global clientele.
              </p>
          </div>
       </div>

       {/* Main Content Area - Overlapping Hero */}
       <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-24">
          
          {/* Location Tabs */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             {officeDetails.map((office, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg ${
                    activeTab === idx 
                    ? 'bg-white text-blue-600 ring-2 ring-yellow-400 translate-y-0' 
                    : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:-translate-y-1 border border-white/10'
                  }`}
                >
                  <Globe size={20} className={activeTab === idx ? 'text-yellow-500' : 'text-blue-300'} />
                  {office.country}
                </button>
             ))}
          </div>

          {/* Active Location Card */}
          <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transition-all duration-1000 delay-500 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
             
             {/* City Banner */}
             <div className="relative h-64 md:h-80 w-full overflow-hidden group">
                <img 
                   src={activeOffice.image} 
                   alt={activeOffice.country} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                   <h2 className="text-4xl font-bold mb-2">{activeOffice.country}</h2>
                   <p className="text-lg text-slate-300 flex items-center gap-2">
                      <MapPin size={18} className="text-yellow-400" />
                      {activeOffice.name}
                   </p>
                </div>
                
                {/* Time Badge */}
                <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-mono">
                   <Clock size={16} className="text-yellow-400" />
                   {getLocalTime(activeOffice.timezone)} {activeOffice.label}
                </div>
             </div>

             <div className="flex flex-col lg:flex-row">
                {/* Details Column */}
                <div className="lg:w-1/3 p-8 md:p-12 bg-slate-50 border-r border-slate-100 flex flex-col justify-between">
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Details</h3>
                      <p className="text-slate-600 mb-8 leading-relaxed">
                         {activeOffice.description}
                      </p>
                      
                      <div className="space-y-6">
                         <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                               <MapPin size={20} />
                            </div>
                            <div>
                               <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Address</div>
                               <div className="text-slate-800 font-medium leading-relaxed">{activeOffice.address}</div>
                            </div>
                         </div>

                         <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                               <Phone size={20} />
                            </div>
                            <div>
                               <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Phone</div>
                               <a href={`tel:${activeOffice.phone}`} className="text-slate-800 font-medium hover:text-blue-600 transition-colors">
                                  {activeOffice.phone}
                               </a>
                            </div>
                         </div>

                         <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                               <Mail size={20} />
                            </div>
                            <div>
                               <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Email</div>
                               <a href={`mailto:${CONTACT_DATA.email.support}`} className="text-slate-800 font-medium hover:text-blue-600 transition-colors">
                                  {CONTACT_DATA.email.support}
                               </a>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-12">
                      <a 
                        href="/#/contact"
                        className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors"
                      >
                         <Calendar size={18} />
                         Schedule a Visit
                      </a>
                   </div>
                </div>

                {/* Map Column */}
                <div className="lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] bg-slate-200 relative">
                   <iframe 
                      key={activeTab}
                      src={activeOffice.mapUrl}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${activeOffice.country} Office Map`}
                      className="absolute inset-0 w-full h-full"
                   ></iframe>
                </div>
             </div>
          </div>
       </div>

       {/* Bottom CTA */}
       <div className={`bg-white py-24 border-t border-slate-100 transition-opacity duration-1000 delay-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Not near an office?</h2>
             <p className="text-lg text-slate-600 mb-8">
                We serve clients globally regardless of location. Our remote teams are equipped with best-in-class collaboration tools to ensure seamless project delivery.
             </p>
             <a href="/#/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 text-lg transition-colors">
                Contact us online <ArrowRight size={20} />
             </a>
          </div>
       </div>
    </div>
  );
};

export default LocationsPage;