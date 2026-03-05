import React, { useEffect, useState } from 'react';
import { CheckCircle, Bug, Search, Smartphone, Monitor, Shield, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestingAndQaPage: React.FC = () => {
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setScanned(true), 500);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-teal-50 py-24 px-4 text-center">
          <Link to="/services/software-development" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8 transition-colors font-bold">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Software Development
          </Link>
          <div className="relative inline-block mb-8">
              <Search size={64} className={`text-teal-600 transition-transform duration-1000 ${scanned ? 'rotate-12 scale-110' : '-rotate-12 scale-100'}`} />
              {scanned && (
                  <div className="absolute -top-2 -right-2 text-green-500 animate-bounce">
                      <CheckCircle size={24} fill="currentColor" className="text-white" />
                  </div>
              )}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Testing & QA Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We break it so your users don't. Comprehensive manual and automated testing for flawless software.
          </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Bug, title: "Functional Testing", desc: "Verifying that every function of the software application operates in conformance with the requirement specification." },
                  { icon: Zap, title: "Performance Testing", desc: "Checking speed, responsiveness, and stability under a heavy workload." },
                  { icon: Shield, title: "Security Testing", desc: "Uncovering vulnerabilities, threats, and risks in your software application." },
                  { icon: Smartphone, title: "Mobile Testing", desc: "Ensuring your app works perfectly across different devices, screen sizes, and OS versions." },
                  { icon: Monitor, title: "UI/UX Testing", desc: "Validating the graphical user interface for visual consistency and usability." },
                  { icon: CheckCircle, title: "Test Automation", desc: "Implementing scripts to automate repetitive tasks and regression testing." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-slate-100 rounded-xl hover:shadow-lg hover:border-teal-200 transition-all group">
                      <item.icon className="w-10 h-10 text-slate-400 group-hover:text-teal-600 mb-4 transition-colors" />
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      <div className="bg-slate-900 text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ensure Quality at Speed</h2>
          <Link to="/contact" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Hire QA Engineers
          </Link>
      </div>
    </div>
  );
};

// Simple Zap icon component for local use if needed, though usually imported
const Zap = ({ className, ...props }: any) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className} 
      {...props}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

export default TestingAndQaPage;