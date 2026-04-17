import React, { useEffect, useState } from 'react';
import { 
  CreditCard, FileCheck, PieChart, ArrowRight, ShieldCheck, 
  Users, Activity, Lock, Laptop, Code, Settings, 
  RefreshCw, Search, Cloud, Zap, Cpu, Network, MessageSquare, 
  Monitor, Eye, FileText, UserCheck, Briefcase, Shield, 
  Globe, HeartPulse, Pill, BarChart3, Bot, Video, Building2,
  Stethoscope, Clock, HardDrive, UserPlus, AlertTriangle, 
  Radio, Layout, CheckCircle2, Headphones, Smartphone, 
  TrendingUp, ShoppingCart, Warehouse, Kanban, Terminal, 
  ClipboardList, Share2, UserCog, Heart, BookOpen, Boxes, 
  Truck, Database, Brain, Scale, Target, Layers, ClipboardCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PayersPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const solutionGroups = [
    {
      title: "Core Operations Management",
      icon: Settings,
      color: "emerald",
      solutions: [
        {
          name: "Enrollment Management",
          desc: "Automates member onboarding, eligibility verification, and HIPAA-compliant record creation. Handles EDI 834 and ACA/Medicare enrollments."
        },
        {
          name: "Actuarial Software",
          desc: "ML-powered analysis of demographic and provider data to model financial risks and calculate plan-specific premiums."
        },
        {
          name: "Underwriting Software",
          desc: "AI-driven evaluation of health and socioeconomic data to assign risk-adjusted premiums and automate risk adjustment (HCC)."
        },
        {
          name: "Policy Administration",
          desc: "Automates the entire policy lifecycle and generates complex explanations of coverage (EOC) for Medicare Advantage and more."
        },
        {
          name: "Claims Management",
          desc: "Automates EDI 278/837/835 transactions with AI-fueled fraud detection, image analysis, and NLP for multi-format evidence."
        },
        {
          name: "Care Coordination",
          desc: "Collaborative platforms for prior authorizations, medical necessity reviews, and tracking chronic disease treatment outcomes."
        },
        {
          name: "Compliance & Reporting",
          desc: "Monitors operational compliance (HIPAA, HEDIS, CMS, NAIC) with automated regulatory report creation and breach notifications."
        },
        {
          name: "Administrative Software",
          desc: "Back-office automation for billing, premium processing, and accounting with advanced FWA (Fraud, Waste, and Abuse) detection."
        }
      ]
    },
    {
      title: "Relationship & Engagement",
      icon: Users,
      color: "teal",
      solutions: [
        {
          name: "Health Insurance CRM",
          desc: "Centralizes insured info, manages omnichannel leads, and automates quote generation and personalized communication."
        },
        {
          name: "Partner Network Management",
          desc: "Manages relationships with providers and pharmacies, automating contracts and NCQA-compliant credential verification."
        },
        {
          name: "Member Portals & Apps",
          desc: "Secure web/mobile access to plans, digital policies, and claims tracking with LLM-powered AI assistants and telehealth integration."
        },
        {
          name: "Healthcare Provider Portals",
          desc: "Self-service platforms for eligibility verification, prior authorizations, and claim settlement tracking with billing system integration."
        },
        {
          name: "Insurance Marketplaces",
          desc: "Comparison platforms for individuals and businesses to enroll in plans, including Medicare/Medicaid, with subsidy calculation."
        }
      ]
    },
    {
      title: "Data & Analytics Solutions",
      icon: BarChart3,
      color: "cyan",
      solutions: [
        {
          name: "EDI Software",
          desc: "HIPAA-compliant transmission of PHI using ANSI X12, FHIR, and HL7 protocols with automated format conversion and validation."
        },
        {
          name: "Insurance Analytics Systems",
          desc: "ML-powered forecasting for sales, underwriting, and risk management with intelligent suggestions for financial planning."
        }
      ]
    },
    {
      title: "Innovative Insurance Models",
      icon: Zap,
      color: "sky",
      solutions: [
        {
          name: "Pay-as-you-live Software",
          desc: "Manages behavior-based programs by analyzing data from health apps and wearables to dynamically adjust premiums and rewards."
        },
        {
          name: "Parametric Insurance Software",
          desc: "Automates payouts based on predefined events (e.g., pandemic outbreaks) using smart contracts and real-time data analysis."
        }
      ]
    }
  ];

  const serviceCategories = [
    {
      title: "Payer Software Engineering",
      icon: Code,
      items: [
        "Custom core insurance system development",
        "EDI and interoperability solutions",
        "Member-facing mobile app development",
        "AI/ML integration for claims and underwriting"
      ]
    },
    {
      title: "IT Consulting & Strategy",
      icon: Briefcase,
      items: [
        "Digital transformation for health payers",
        "Cloud strategy and migration",
        "Value-based care model implementation",
        "IT infrastructure optimization"
      ]
    },
    {
      title: "Data & Analytics",
      icon: PieChart,
      items: [
        "Population health analytics",
        "Fraud, Waste, and Abuse (FWA) detection",
        "Actuarial and risk modeling",
        "Regulatory reporting automation"
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      icon: ShieldCheck,
      items: [
        "HIPAA, HEDIS, and CMS compliance",
        "Cybersecurity audits and pentesting",
        "Identity and Access Management (IAM)",
        "Managed security services"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500 rounded-full blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <ShieldCheck size={14} /> Healthcare Payer IT
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Transforming <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Health Insurance</span>
                </h1>
                <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide engineers multi-functional systems to transform the entire health insurance process, from core operations to innovative behavior-based models.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] flex items-center">
                        Modernize Your Operations <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2070" 
                      alt="Health Insurance Operations" 
                      className="rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <FileCheck className="text-emerald-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-emerald-200">Claims</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Users className="text-teal-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-teal-200">Members</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Scale className="text-sky-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-sky-200">Compliance</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Custom Insurance Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Specialized software that automates operational areas and transforms the payer experience.</p>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="space-y-20">
            {solutionGroups.map((group, idx) => (
              <motion.div key={idx} {...fadeIn}>
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-12 h-12 bg-${group.color}-100 text-${group.color}-600 rounded-xl flex items-center justify-center`}>
                    <group.icon size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{group.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.solutions.map((sol, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all group">
                      <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{sol.name}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{sol.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">IT Services for Health Payers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Expert consulting and engineering to drive efficiency and member satisfaction.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <category.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Security & Regulatory Excellence</h2>
              <p className="text-slate-400 text-lg mb-8">
                We ensure your insurance platforms meet the highest standards of security and regulatory compliance across all operational areas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-400" size={32} />
                  <span className="font-bold text-lg">HIPAA / HITECH</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="text-teal-400" size={32} />
                  <span className="font-bold text-lg">AML / KYC</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-sky-400" size={32} />
                  <span className="font-bold text-lg">HEDIS / CMS</span>
                </div>
                <div className="flex items-center gap-3">
                  <Scale className="text-teal-400" size={32} />
                  <span className="font-bold text-lg">NAIC / NICB</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">FWA Detection</h4>
                <p className="text-xs text-slate-400">AI-powered detection of Fraud, Waste, and Abuse in claims.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Data Integrity</h4>
                <p className="text-xs text-slate-400">Ensuring PHI remains secure and accurate across all EDI flows.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Audit Trails</h4>
                <p className="text-xs text-slate-400">Comprehensive logging for every transaction and data access.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold mb-2">Regulatory Reporting</h4>
                <p className="text-xs text-slate-400">Automated creation of reports for federal and state agencies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Evolve Your Health Plan?</h2>
          <p className="text-xl text-emerald-100 mb-12">
            Partner with GnJ Worldwide for secure, compliant, and high-performance health insurance IT solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-emerald-600 font-bold py-5 px-12 rounded-2xl hover:bg-emerald-50 transition-all shadow-xl transform hover:-translate-y-1">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PayersPage;
