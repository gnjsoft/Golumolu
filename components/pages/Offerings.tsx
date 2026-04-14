import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OFFERINGS = [
  {
    id: 'software-dev',
    title: "Software development",
    description: "A software development company with 8 years of business excellence, we can engineer reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
    links: [
      { name: "Software consulting", href: "/services/software-consulting" },
      { name: "Custom software development", href: "/services/software-development" },
      { name: "Software development outsourcing", href: "/services/it-outsourcing" },
      { name: "Team augmentation", href: "/services/it-outsourcing" },
      { name: "Cloud application development", href: "/services/infrastructure-services" },
      { name: "Legacy software modernization", href: "/services/database-development" },
      { name: "Post-launch support", href: "/services/it-support" }
    ]
  },
  {
    id: 'it-consulting',
    title: "IT consulting",
    description: "Our IT consulting experts provide strategic guidance to help you navigate the complex technology landscape. We assess your current infrastructure, identify opportunities for improvement, and design roadmaps that align technology with your business goals.",
    links: [
      { name: "Digital Transformation Strategy", href: "/services/digital-transformation" },
      { name: "IT Infrastructure Assessment", href: "/services/infrastructure-services" },
      { name: "Technology Roadmap Design", href: "/services/it-consulting" },
      { name: "IT Security Consulting", href: "/services/cybersecurity" },
      { name: "Cloud Migration Strategy", href: "/services/infrastructure-services" },
      { name: "Enterprise Architecture", href: "/services/it-consulting" }
    ]
  },
  {
    id: 'app-services',
    title: "Application services",
    description: "We offer comprehensive application services including management, modernization, and integration. Our team ensures your business applications are high-performing, secure, and adaptable to changing market demands.",
    links: [
      { name: "Application Management", href: "/services/application-maintenance" },
      { name: "Application Modernization", href: "/services/application-services" },
      { name: "Application Integration", href: "/services/api-development" },
      { name: "Application Security", href: "/services/cybersecurity" },
      { name: "API Management", href: "/services/api-development" },
      { name: "Microservices Architecture", href: "/services/software-development" }
    ]
  },
  {
    id: 'qa',
    title: "Testing & QA",
    description: "Ensure flawless performance with our rigorous Testing & QA services. We use automated and manual testing methodologies to detect bugs early, improve user experience, and accelerate time-to-market.",
    links: [
      { name: "Test Automation", href: "/services/testing-and-qa" },
      { name: "Performance Testing", href: "/services/testing-and-qa" },
      { name: "Security Testing", href: "/services/security-testing" },
      { name: "Mobile App Testing", href: "/services/testing-and-qa" },
      { name: "Usability Testing", href: "/services/testing-and-qa" },
      { name: "QA Consulting", href: "/services/testing-and-qa" }
    ]
  },
  {
    id: 'analytics',
    title: "Data analytics",
    description: "Unlock the power of your data with our advanced analytics solutions. We help you collect, process, and visualize data to gain actionable insights that drive smarter business decisions.",
    links: [
      { name: "Business Intelligence", href: "/services/business-intelligence" },
      { name: "Data Warehousing", href: "/services/data-warehousing" },
      { name: "Big Data Analytics", href: "/services/data-analytics" },
      { name: "Predictive Analytics", href: "/services/data-science" },
      { name: "Data Visualization", href: "/services/data-analytics" },
      { name: "Data Governance", href: "/services/data-analytics" }
    ]
  },
  {
    id: 'help-desk',
    title: "Help desk services",
    description: "Provide exceptional support to your users with our 24/7 help desk services. We resolve technical issues quickly, ensuring minimal downtime and high employee productivity.",
    links: [
      { name: "L1/L2/L3 Support", href: "/services/it-help-desk" },
      { name: "Incident Management", href: "/services/it-help-desk" },
      { name: "Service Desk Automation", href: "/services/it-help-desk" },
      { name: "Remote Support", href: "/services/it-help-desk" },
      { name: "On-site Support", href: "/services/it-support" },
      { name: "Knowledge Base Management", href: "/services/it-help-desk" }
    ]
  },
  {
    id: 'infrastructure',
    title: "Infrastructure services",
    description: "Build a resilient and scalable IT foundation with our infrastructure services. From data center management to cloud operations, we ensure your systems are always up and running.",
    links: [
      { name: "Cloud Infrastructure", href: "/services/infrastructure-services" },
      { name: "Network Management", href: "/services/infrastructure-services" },
      { name: "Server Management", href: "/services/infrastructure-services" },
      { name: "Virtualization", href: "/services/infrastructure-services" },
      { name: "Disaster Recovery", href: "/services/infrastructure-services" },
      { name: "DevOps Implementation", href: "/services/devops-consulting" }
    ]
  },
  {
    id: 'cybersecurity',
    title: "Cybersecurity services",
    description: "Protect your digital assets with our robust cybersecurity services. We implement multi-layered security measures to defend against evolving threats and ensure compliance with industry standards.",
    links: [
      { name: "Threat Detection & Response", href: "/services/cybersecurity" },
      { name: "Vulnerability Assessment", href: "/services/cybersecurity" },
      { name: "Identity & Access Management", href: "/services/cybersecurity" },
      { name: "Compliance Management", href: "/services/cybersecurity" },
      { name: "SIEM & SOC Services", href: "/services/cybersecurity" },
      { name: "Security Audits", href: "/services/cybersecurity" },
      { name: "Penetration Testing", href: "/services/penetration-testing" }
    ]
  }
];

const Offerings: React.FC = () => {
  const [activeId, setActiveId] = useState(OFFERINGS[0].id);

  const activeOffering = OFFERINGS.find(o => o.id === activeId) || OFFERINGS[0];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Explore Our Offering
          </h2>
          <div className="w-20 h-1.5 bg-yellow-400 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden border border-slate-100 bg-white">
          
          {/* Sidebar */}
          <div className="lg:w-1/3 bg-blue-50/50 p-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide">
            {OFFERINGS.map((offering) => (
              <button
                key={offering.id}
                onClick={() => setActiveId(offering.id)}
                className={`text-left px-6 lg:px-8 py-4 lg:py-5 text-[14px] lg:text-[15px] font-semibold transition-all duration-300 border-r lg:border-r-0 lg:border-b border-blue-100/50 last:border-0 flex justify-between items-center group whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink ${
                  activeId === offering.id
                    ? 'bg-[#007bff] text-white shadow-md z-10'
                    : 'text-slate-600 hover:bg-blue-100/50 hover:text-blue-700'
                }`}
              >
                {offering.title}
                {activeId === offering.id && (
                  <ChevronRight size={18} className="hidden lg:block text-white animate-fade-in" />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 p-8 md:p-12 bg-white relative min-h-[500px]">
             {/* Decorative Background Element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full opacity-50 pointer-events-none" />

             <div key={activeId} className="animate-fade-in relative z-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  {activeOffering.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-lg mb-10 max-w-3xl">
                  {activeOffering.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                  {activeOffering.links.map((link: any, index: number) => (
                    <Link 
                      key={index}
                      to={link.href}
                      className="flex items-start group/link p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-sm mr-3 group-hover/link:bg-yellow-400 transition-colors" />
                      <span className="text-slate-700 font-medium group-hover/link:text-blue-600 underline decoration-slate-300 underline-offset-4 decoration-1 group-hover/link:decoration-blue-300 transition-all">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Link to="/services" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group">
                    Check details 
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offerings;