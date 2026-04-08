import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZohoConsultingPage: React.FC = () => {
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setPopped(true), 100);
  }, []);

  const services = [
    { name: "Zoho CRM", logoUrl: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.svg", desc: "Sales & customer relationship management" },
    { name: "Zoho Books", logoUrl: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/books.svg", desc: "Smart accounting and financial software" },
    { name: "Zoho Creator", logoUrl: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/creator.svg", desc: "Custom low-code application development" },
    { name: "Zoho One", logoUrl: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/one.svg", desc: "Unified operating system for business" },
    { name: "Zoho People", logoUrl: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/people.svg", desc: "HR and employee management system" },
    { name: "Zoho Desk", logoUrl: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/desk.svg", desc: "Customer service and help desk" },
    { name: "Zoho Campaigns", logoUrl: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/campaigns.svg", desc: "Email marketing and automation" },
    { name: "Zoho Analytics", logoUrl: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/analytics.svg", desc: "Business intelligence and reporting" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-32 px-4 text-center overflow-hidden">
        {/* Abstract Tech Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 mix-blend-luminosity"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/80"></div>
        
        {/* Zoho Logo Background Watermark */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: "url('https://cdn.worldvectorlogo.com/logos/zoho-1.svg')", backgroundSize: '800px' }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className={`mx-auto w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl transition-transform duration-[800ms] ${popped ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
              <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt="Zoho" className="w-16 h-16 object-contain" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-opacity duration-700 delay-300 ${popped ? 'opacity-100' : 'opacity-0'}`}>
              Zoho Consulting
          </h1>
          <p className={`text-xl text-slate-300 max-w-2xl mx-auto transition-opacity duration-700 delay-500 ${popped ? 'opacity-100' : 'opacity-0'}`}>
              The operating system for business. Implement, customize, and scale with the full Zoho suite.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
         <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto">
            As a specialized Zoho partner, we help you implement the full suite of Zoho applications—creating a unified ecosystem for your business operations.
         </p>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((item, idx) => {
                return (
                <div 
                    key={idx} 
                    className={`p-8 bg-white shadow-sm border border-slate-100 rounded-2xl text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group ${popped ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${600 + (idx * 100)}ms` }}
                >
                    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <img src={item.logoUrl} alt={item.name} className="w-10 h-10 object-contain" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
            )})}
         </div>

         <div className={`transition-all duration-700 delay-[1200ms] ${popped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link to="/contact" className="inline-flex items-center text-white font-bold bg-blue-600 py-4 px-10 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-1">
                Implement Zoho <ArrowRight className="ml-2" size={20} />
            </Link>
         </div>
      </div>
    </div>
  );
};

export default ZohoConsultingPage;