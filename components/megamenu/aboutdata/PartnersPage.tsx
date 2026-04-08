import React, { useEffect, useState } from 'react';
import { ArrowRight, Handshake } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const cloudPartners = [
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" }
  ];

  const techPartners = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "ServiceNow", logo: "https://cdn.worldvectorlogo.com/logos/servicenow-1.svg" }
  ];

  const hardwarePartners = [
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
  ];

  const renderPartnerGrid = (partners: any[], title: string, baseDelay: number) => (
    <div className={`mb-16 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${baseDelay}ms` }}>
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
        {partners.map((partner, idx) => (
          <div key={idx} className="flex items-center justify-center p-8 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-lg transition-all h-32 group hover:-translate-y-1">
            <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="relative bg-slate-900 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10">
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Strategic Partners</h1>
          <p className={`text-xl text-slate-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Collaborating with industry leaders to bring the best technology solutions to our clients.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {renderPartnerGrid(cloudPartners, "Cloud Infrastructure Partners", 300)}
        {renderPartnerGrid(techPartners, "Software & Platform Partners", 500)}
        {renderPartnerGrid(hardwarePartners, "Hardware & Network Partners", 700)}
      </div>

      {/* Become a Partner CTA */}
      <div className="bg-blue-600 py-20">
        <div className={`max-w-5xl mx-auto px-4 text-center text-white transition-all duration-1000 delay-1000 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Handshake size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Join our Partner Ecosystem</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Together we can achieve more. Partner with GnJ Worldwide to access new markets, advanced technology, and shared growth opportunities.
          </p>
          <button className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors inline-flex items-center">
            Become a Partner <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;