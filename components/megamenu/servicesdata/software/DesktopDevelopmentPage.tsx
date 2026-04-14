import React, { useEffect } from 'react';
import { 
  Monitor, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Briefcase, 
  Banknote, 
  Factory, 
  HeartPulse, 
  ShieldAlert, 
  Image as ImageIcon, 
  Wrench, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Settings, 
  Users2, 
  Target, 
  BarChart3, 
  BookOpen, 
  AlertTriangle, 
  CheckSquare, 
  Lock, 
  Rocket, 
  RefreshCw, 
  ChevronRight,
  Cpu,
  Terminal,
  Layers,
  Code2,
  Box
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const DesktopDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const appTypes = [
    { 
      title: "Enterprise Management", 
      icon: Building2, 
      items: ["ERP & Operations management", "Inventory management", "PLM & SCM systems", "BI & Data visualization"] 
    },
    { 
      title: "Employee Productivity", 
      icon: Briefcase, 
      items: ["Teleconferencing & VoIP", "Time-tracking apps", "Virtual office software"] 
    },
    { 
      title: "Financial Software", 
      icon: Banknote, 
      items: ["Billing & Invoicing", "General ledger software", "Trading & stock analysis"] 
    },
    { 
      title: "Industrial Automation", 
      icon: Factory, 
      items: ["HMI software", "SCADA systems", "Automated visual inspection"] 
    },
    { 
      title: "Healthcare Software", 
      icon: HeartPulse, 
      items: ["EHR/EMR systems", "Medical image & lab software", "Medical device software", "Telemedicine software"] 
    },
    { 
      title: "Emergency & Security", 
      icon: ShieldAlert, 
      items: ["Video surveillance", "VPN & Backup software", "Data loss prevention", "Antivirus software"] 
    },
    { 
      title: "Image & Media", 
      icon: ImageIcon, 
      items: ["3D rendering (CAD)", "Image/Video editing", "Video streaming apps", "Media viewing apps"] 
    },
    { 
      title: "Utility Software", 
      icon: Wrench, 
      items: ["File & content managers", "Custom Browsers", "Download managers", "Drivers & plugins"] 
    }
  ];

  const industries = [
    "Healthcare", "Banking", "Insurance", "Lending", "Investment", 
    "Retail", "Manufacturing", "Professional services", "Oil and Gas", 
    "Telecoms", "Logistics & Transportation", "Engineering & Construction"
  ];

  const perks = [
    { 
      title: "Cross-platform development", 
      icon: Layers, 
      desc: "Reduce development time and costs up to 50% by delivering Qt-based app code that runs smoothly on Windows, Mac OS, and Linux." 
    },
    { 
      title: "High-quality results", 
      icon: ShieldCheck, 
      desc: "ISO 9001-certified management, high performance, multilayer security, and a strong focus on intuitive UX/UI design." 
    },
    { 
      title: "Smart installer", 
      icon: Zap, 
      desc: "Installers that react to OS versions, language settings, third-party libraries, and previous app versions." 
    },
    { 
      title: "Effective processes", 
      icon: Settings, 
      desc: "Agile principles, CI/CD, code reviews, and unit testing with regular progress reports and integrated risk management." 
    }
  ];

  const successFactors = [
    { title: "Stakeholder Collaboration", icon: Users2, desc: "RACI-based collaboration matrix and frequency schedules for transparent execution." },
    { title: "Avoiding Scope Creep", icon: Target, desc: "Six-step scoping process with Vision & Scope documents and UX wireframes." },
    { title: "Reporting & Transparency", icon: BarChart3, desc: "Regular progress reports, financial overviews, and impact analysis of changes." },
    { title: "Comprehensive Documentation", icon: BookOpen, desc: "Essential documents across all stages to reduce maintenance costs and simplify handovers." },
    { title: "Risk Management", icon: AlertTriangle, desc: "Spotting roadblocks early to keep the team on schedule and prevent budget waste." },
    { title: "Success Measurement", icon: CheckSquare, desc: "Customized system of KPIs to objectively measure efficiency and project success." },
    { title: "ISO 9001 Quality", icon: ShieldCheck, desc: "Quality control mechanisms throughout the SDLC to mitigate risks immediately." },
    { title: "ISO 27001 Security", icon: Lock, desc: "Guaranteed security of project environment, intellectual property, and business assets." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Monitor size={14} />
              Desktop App Development
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Powerful Software for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Mac, Windows & Linux</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              GnJ Worldwide builds high-performance desktop applications or upgrades existing ones with new functionality using C++/Qt, .NET, and Python.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center group">
                Start Desktop Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- APP TYPES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Types of Desktop Apps We Develop</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From enterprise resource management to specialized industrial automation, we build software that leverages full system capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((type, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <type.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-6">{type.title}</h4>
                <ul className="space-y-2 mb-6 flex-grow">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 size={14} className="text-blue-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">We Know Your Industry</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, idx) => (
              <span key={idx} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- PERKS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Perks of Our Desktop Application Development</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <perk.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{perk.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUCCESS FACTORS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ensuring Successful App Development Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team of over 60 certified project managers (PSM, PMP, PMI-ACP) leads development teams through evolving requirements and risk mitigation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successFactors.map((factor, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-6 shadow-sm">
                  <factor.icon size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-4">{factor.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{factor.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group">
                  Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ENGAGEMENT MODELS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Consider GnJ Worldwide as Your Partner</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                <Rocket size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Desktop App Development</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We plan, design, and develop a powerful desktop app from scratch. You can also add integration, support, and maintenance to the service package.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>Project kickoff: In 1-2 weeks</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>Pricing model: Fixed price or T&M</span>
                </div>
              </div>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors w-full text-center">
                Go for development
              </Link>
            </div>

            <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8">
                <RefreshCw size={32} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Desktop App Modernization</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We refactor your app code using modern tools, bring the app to newer OS versions, or introduce entirely new features to legacy systems.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>Project kickoff: In 1-2 weeks</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>Pricing model: Fixed price or T&M with a cap</span>
                </div>
              </div>
              <Link to="/contact" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors w-full text-center">
                Go for modernization
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK MARQUEE --- */}
      <div className="bg-white py-12 border-y border-slate-100 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[
            "C++ / Qt", ".NET / WPF", "Python", "Java / Swing", "Electron", "Rust", "Go", "Objective-C", "Swift", "C#", "SQL Server", "PostgreSQL", "SQLite", "DirectX", "OpenGL"
          ].map((tech, idx) => (
            <span key={idx} className="text-2xl font-bold text-slate-200 mx-12 hover:text-blue-600 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Need a high-performance desktop solution?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Whether it's a cross-platform Qt app or a native Windows utility, we have the expertise to deliver.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl transform hover:-translate-y-1">
            Get a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default DesktopDevelopmentPage;
