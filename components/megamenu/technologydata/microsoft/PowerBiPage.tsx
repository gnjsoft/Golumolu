import React, { useEffect } from 'react';
import { 
  BarChart3, PieChart, TrendingUp, ArrowRight, Database, 
  Layout, CheckCircle2, Search, Zap, RefreshCw, 
  LifeBuoy, ShieldCheck, Users, BarChart, LineChart,
  Target, Lightbulb, Rocket, Settings, Activity,
  FileText, Globe, MessageSquare, Microscope,
  Briefcase, Handshake, Sparkles, Monitor, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PowerBiPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const highlights = [
    {
      title: "Feasibility Check",
      icon: Microscope,
      desc: "We ascertain that Power BI technologies comply with your analytical needs and constraints to ensure substantial ROI."
    },
    {
      title: "Incremental Implementation",
      icon: Rocket,
      desc: "Iterative project execution (2 weeks to 5 months) allows you to benefit from essential functionality as soon as possible."
    }
  ];

  const services = [
    {
      title: "Power BI Implementation Consulting",
      icon: Lightbulb,
      desc: "We help you find out whether Power BI is capable of solving your analytics problems.",
      items: [
        "Business needs elicitation and analysis",
        "Power BI feasibility check",
        "Implementation strategy with detailed roadmap"
      ],
      cta: "Go for Consulting"
    },
    {
      title: "Power BI Implementation",
      icon: Zap,
      desc: "Delivering full-scale Power BI solutions in the shortest time possible.",
      items: [
        "Technologies configuration and customization",
        "Integration with internal and external data sources",
        "ETL/ELT processes set-up & User training"
      ],
      cta: "Go for Implementation"
    },
    {
      title: "Power BI Improvement Consulting",
      icon: RefreshCw,
      desc: "If your current solution doesn't meet objectives, we design an improvement roadmap.",
      items: [
        "Examine and assess the existing solution",
        "Analyze evolving business needs",
        "Strategic upgrade roadmap design"
      ],
      cta: "Go for Improvement"
    },
    {
      title: "Power BI Support",
      icon: LifeBuoy,
      desc: "Ensuring stable work and continuous evolution of your Power BI solution.",
      items: [
        "Daily Power BI administration",
        "Regular health checks and security audits",
        "Implementation of new features and reports"
      ],
      cta: "Go for Support"
    }
  ];

  const benefits = [
    {
      title: "Vast Data Integration",
      icon: Database,
      desc: "Reporting and visualization capabilities across hundreds of data sources."
    },
    {
      title: "Advanced Analytics",
      icon: TrendingUp,
      desc: "Deeper insights into your business processes with AI-powered forecasting."
    },
    {
      title: "Data Democratization",
      icon: Users,
      desc: "Empower every team member with timely and quality analytics insights."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#F2C811] text-black py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 border border-black/20 text-black text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <BarChart3 size={14} className="animate-pulse" /> Microsoft Power BI Partner
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Data into <br/> <span className="text-slate-800">Insights</span>
            </h1>
            <p className="text-xl text-black/70 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide helps companies implement, improve, and support Power BI solutions to deliver timely and quality analytics insights across the company.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-black text-[#F2C811] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-slate-800">
                Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white p-10 rounded-[3rem] shadow-2xl overflow-hidden group">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                      <PieChart size={20} />
                    </div>
                    <span className="font-bold text-slate-800">Revenue Analysis</span>
                  </div>
                  <span className="text-green-600 font-bold">+18.5%</span>
                </div>
                <div className="flex gap-4 items-end h-32">
                  <div className="flex-1 bg-yellow-400 rounded-t-lg h-[60%] animate-pulse"></div>
                  <div className="flex-1 bg-slate-200 rounded-t-lg h-[40%]"></div>
                  <div className="flex-1 bg-yellow-500 rounded-t-lg h-[85%]"></div>
                  <div className="flex-1 bg-slate-300 rounded-t-lg h-[55%]"></div>
                  <div className="flex-1 bg-black rounded-t-lg h-[95%]"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] text-slate-500 uppercase">Insights</p>
                    <p className="text-lg font-bold">Real-time</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] text-slate-500 uppercase">Accuracy</p>
                    <p className="text-lg font-bold">99.9%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Consulting Highlights</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Ensuring substantial ROI and early value through strategic planning.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-white text-yellow-600 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                  <item.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Power BI Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">From initial feasibility to continuous evolution and support.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-200 hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-yellow-600 mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-yellow-600 font-bold hover:translate-x-1 transition-transform">
                  {service.cta} <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Power BI Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Power BI Consulting?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Translate raw data into accurate analytics insights with rich visuals.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 text-center group hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-white text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-yellow-600 group-hover:text-white transition-all">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,200,17,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Visualize Your Success?</h2>
          <p className="text-xl text-slate-400 mb-12">
            Our Power BI consultants are ready to help you implement, improve, and support your analytics platform.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-[#F2C811] text-black font-bold py-5 px-12 rounded-2xl hover:bg-yellow-400 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Discuss Your Analytics Needs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PowerBiPage;