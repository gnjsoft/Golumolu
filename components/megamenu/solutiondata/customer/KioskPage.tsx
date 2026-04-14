import React, { useEffect, useState } from 'react';
import { 
  Monitor, CreditCard, Map, Info, ArrowRight, Hand, 
  MousePointer, Power, Cpu, Cloud, Smartphone, Settings, 
  ShieldCheck, Zap, Terminal, Printer, Layout, Utensils, 
  Hotel, Image, Lock, Globe, RefreshCw, Database, Activity,
  CheckCircle2, Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const KioskPage: React.FC = () => {
  const [active, setActive] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const features = [
    {
      category: "Operational Features",
      icon: Settings,
      items: [
        { title: "Information Display", desc: "Advertising, informational or navigational audio-video content.", icon: Monitor },
        { title: "Touch Screen Input", desc: "On-screen keyboard, UI interaction, and e-signatures.", icon: Hand },
        { title: "Physical Keyboard", desc: "Input data processing and basic control buttons.", icon: Terminal },
        { title: "Onsite Printing", desc: "Confirming service operations with tickets and receipts.", icon: Printer }
      ]
    },
    {
      category: "Service Features",
      icon: Zap,
      items: [
        { title: "Billing & Payments", desc: "Secure card reading and payment processing.", icon: CreditCard },
        { title: "Cash Disbursement", desc: "Withdrawals or change issuing for purchases.", icon: DollarSign },
        { title: "Order Placement", desc: "Product ordering from digital menus.", icon: Utensils },
        { title: "Booking & Queues", desc: "Hotel booking, travel tickets, and e-queues.", icon: Hotel },
        { title: "Printing on-demand", desc: "User-provided image and document printing.", icon: Image }
      ]
    },
    {
      category: "Security & Maintenance",
      icon: ShieldCheck,
      items: [
        { title: "Kiosk Lockdown", desc: "Limiting user interaction to predefined actions.", icon: Lock },
        { title: "Restricted Browsing", desc: "Limiting available internet resources.", icon: Globe },
        { title: "User Session Reset", desc: "Automatic status reset and history erasing.", icon: RefreshCw },
        { title: "Remote Maintenance", desc: "Health monitoring and updates from a web panel.", icon: Activity }
      ]
    }
  ];

  const osOptions = [
    {
      name: "Windows",
      icon: Monitor,
      desc: "Available on Surface tablets and all-in-one PCs. Widest choice of peripheral devices.",
      bestFor: "Complex integrations with multiple hardware peripherals.",
      pricing: "Home: ₹11,600 | Pro: ₹16,700"
    },
    {
      name: "Android",
      icon: Smartphone,
      desc: "Open source OS with rich customization and affordable device prices.",
      bestFor: "Large-scale networks (50+ devices) requiring cost-efficiency.",
      pricing: "Free"
    },
    {
      name: "iOS",
      icon: MousePointer,
      desc: "Restricted to iPads/iPhones. Extremely secure with built-in lockdown features.",
      bestFor: "Solutions requiring enhanced security and premium battery life.",
      pricing: "Included with hardware"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative py-24 px-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
              <div className={`lg:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-100">
                      <Cpu size={14} /> Interactive Systems
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
                      Interactive <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Kiosk Software</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                      GnJ Worldwide designs kiosk software to provide automated interactions, resulting in seamless payments, order placements, and service actions while reducing operational costs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 flex items-center">
                          Start Implementation <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>

              {/* Interactive Visual - The Kiosk */}
              <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="relative w-72 h-[550px] bg-slate-800 rounded-[2.5rem] border-8 border-slate-900 shadow-2xl flex flex-col p-2">
                      <div className="h-6 w-full flex justify-center items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                          <div className="w-16 h-1 bg-slate-700 rounded-full"></div>
                      </div>
                      <div 
                        className="flex-1 bg-white rounded-2xl overflow-hidden relative cursor-pointer group"
                        onClick={() => setTouched(true)}
                        onMouseLeave={() => setTouched(false)}
                      >
                          <div className="absolute inset-0 bg-cyan-500 flex flex-col items-center justify-center text-white p-6 text-center transition-all duration-300">
                              <div className={`transform transition-transform duration-500 ${touched ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}>
                                  <Hand size={64} className="mb-6 mx-auto animate-bounce" />
                                  <h3 className="text-3xl font-bold mb-2">Touch to Start</h3>
                                  <p className="opacity-80">Welcome to GnJ Mall</p>
                              </div>
                          </div>
                          <div className={`absolute inset-0 bg-white p-6 flex flex-col gap-4 transition-all duration-500 ${touched ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
                              <div className="h-8 bg-slate-100 rounded w-full mb-4"></div>
                              <div className="grid grid-cols-2 gap-4 h-full">
                                  <div className="bg-cyan-100 rounded-xl"></div>
                                  <div className="bg-slate-100 rounded-xl"></div>
                                  <div className="bg-slate-100 rounded-xl"></div>
                                  <div className="bg-slate-100 rounded-xl"></div>
                              </div>
                          </div>
                      </div>
                      <div className="h-12 w-full flex items-center justify-center mt-2">
                          <div className="w-12 h-1 bg-slate-700 rounded-full"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Architecture Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-bold text-slate-900 mb-8">Architecture of Kiosk Software</h2>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          GnJ Worldwide's kiosk solutions consist of a client application and controller software containing the business logic. Both can run on a single high-power device or reside in two closely located devices like a portable client app and a standalone mini PC.
                      </p>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          Our software securely communicates with cloud servers for banking requests, activity reports, and remote maintenance via cloud-based management systems.
                      </p>
                      <div className="flex gap-4">
                          <div className="flex items-center gap-2 text-cyan-600 font-bold">
                              <Cloud size={20} /> Cloud Integrated
                          </div>
                          <div className="flex items-center gap-2 text-blue-600 font-bold">
                              <ShieldCheck size={20} /> Secure Architecture
                          </div>
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                          <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mx-auto mb-4">
                              <Layout size={24} />
                          </div>
                          <h4 className="font-bold text-slate-900">Client App</h4>
                          <p className="text-xs text-slate-500 mt-2">User Interface & Interaction</p>
                      </div>
                      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                              <Settings size={24} />
                          </div>
                          <h4 className="font-bold text-slate-900">Controller</h4>
                          <p className="text-xs text-slate-500 mt-2">Business Logic & Hardware</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Key Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Key Features of Kiosk Software</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We divide our kiosk features into operational, service, and security groups to ensure a comprehensive solution.</p>
          </div>
          
          <div className="space-y-24">
              {features.map((group, gIdx) => (
                  <div key={gIdx}>
                      <div className="flex items-center gap-4 mb-12">
                          <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
                              <group.icon size={24} />
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900">{group.category}</h3>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                          {group.items.map((item, iIdx) => (
                              <div key={iIdx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                  <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                      <item.icon size={24} />
                                  </div>
                                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Integrations Section */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Important Kiosk Integrations</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Proper integrations are crucial for a kiosk solution's stable, secure, and effective performance.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                  {[
                      { title: "Controller Software", desc: "Powers the client apps with functional logic; local communication via cable, Bluetooth, or Wi-Fi.", icon: Cpu },
                      { title: "Cloud Services", desc: "Access main servers for banking/payments, log collection, and remote administration via Web APIs.", icon: Cloud },
                      { title: "Peripheral Hardware", desc: "Integration with card readers, RFID printers, and sensors via specific drivers.", icon: Printer },
                      { title: "POS Software", desc: "Seamless communication with Point of Sale systems for order and payment processing.", icon: CreditCard }
                  ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                          <div className="shrink-0 w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400">
                              <item.icon size={28} />
                          </div>
                          <div>
                              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* OS Recommendations */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Recommended Operating Systems</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Target existing operating systems to avoid the cost of custom Linux-based OS development.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
              {osOptions.map((os, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8">
                          <os.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{os.name}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{os.desc}</p>
                      <div className="space-y-4 pt-6 border-t border-slate-100">
                          <div>
                              <div className="text-xs text-slate-400 uppercase font-bold mb-1">Best For</div>
                              <div className="text-sm font-bold text-slate-900">{os.bestFor}</div>
                          </div>
                          <div>
                              <div className="text-xs text-slate-400 uppercase font-bold mb-1">Pricing</div>
                              <div className="text-sm font-bold text-cyan-600">{os.pricing}</div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Implementation Services */}
      <div className="bg-cyan-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Custom Kiosk Implementation</h2>
                  <p className="text-cyan-100 max-w-2xl mx-auto">GnJ Worldwide offers both consulting and end-to-end implementation of custom kiosk software.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white text-slate-900 p-12 rounded-[3rem] shadow-2xl">
                      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                          <Info className="text-cyan-600" /> Kiosk Consulting
                      </h3>
                      <ul className="space-y-4 mb-10">
                          {[
                              "Full business case creation",
                              "Definition of custom software features",
                              "Costs and development schedule estimates",
                              "Kiosk system architecture design",
                              "Detailed integration planning",
                              "Assistance with hardware choice",
                              "Interactive UX prototype as a PoC"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600">
                                  <CheckCircle2 size={18} className="text-cyan-600 mt-1 shrink-0" />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="block text-center bg-cyan-600 text-white py-4 rounded-xl font-bold hover:bg-cyan-700 transition-all">
                          Go for Consulting
                      </Link>
                  </div>
                  <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
                      <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                          <Code className="text-cyan-400" /> Kiosk Development
                      </h3>
                      <ul className="space-y-4 mb-10">
                          {[
                              "Project planning and management",
                              "ADA and WCAG compliant UX/UI design",
                              "Development of client and controller software",
                              "Kiosk management web app development",
                              "Deployment and hardware integration",
                              "Continuous support and evolution"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-300">
                                  <CheckCircle2 size={18} className="text-cyan-400 mt-1 shrink-0" />
                                  <span>{item}</span>
                              </li>
                          ))}
                      </ul>
                      <Link to="/contact" className="block text-center bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
                          Go for Implementation
                      </Link>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
};

// Helper for DollarSign icon which was missing in imports but used in logic
const DollarSign = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export default KioskPage;
