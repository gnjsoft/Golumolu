import React, { useEffect } from 'react';
import { Code, Database, Smartphone, Layout, Server, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const services = [
    {
      title: "Software Development",
      icon: Code,
      desc: "Custom enterprise software tailored to your specific business processes.",
      link: "/services/software-development"
    },
    {
      title: "Web Development",
      icon: Layout,
      desc: "Responsive, high-performance websites and web applications.",
      link: "/services/web-development"
    },
    {
      title: "Mobile Apps",
      icon: Smartphone,
      desc: "Native and cross-platform mobile solutions for iOS and Android.",
      link: "/services/mobile-development"
    },
    {
      title: "Data Analytics",
      icon: Database,
      desc: "Turn your raw data into actionable business intelligence.",
      link: "/services/data-analytics"
    },
    {
      title: "Cloud Infrastructure",
      icon: Server,
      desc: "Scalable cloud solutions and DevOps implementation.",
      link: "/services/infrastructure-services"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      desc: "Comprehensive security assessments and protection strategies.",
      link: "/services/cybersecurity"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-[#002B49] py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-0 top-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px]"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-yellow-400 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">Comprehensive technology solutions to drive your business forward.</p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-100 group">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors">
                        <service.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed min-h-[50px]">{service.desc}</p>
                    <Link to={service.link} className="inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors">
                        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-24 text-center">
         <h2 className="text-3xl font-bold text-slate-900 mb-8">Looking for something specific?</h2>
         <Link to="/contact" className="inline-block bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-yellow-400/50 hover:bg-yellow-300 transition-all">
            Get a Custom Quote
         </Link>
      </div>
    </div>
  );
};

export default ServicesPage;