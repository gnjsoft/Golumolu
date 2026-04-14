import React, { useEffect } from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Cloud, 
  Settings, 
  Users, 
  Search, 
  Zap, 
  Layers, 
  LifeBuoy,
  Code2,
  Lock,
  BarChart3,
  RefreshCw,
  Server,
  Headphones,
  GitBranch,
  SearchCheck,
  Binary,
  BrainCircuit,
  Database,
  Link2,
  Eye,
  Smartphone,
  Box
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ItConsultingPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const consultingCompetencies = [
    { title: "Digital transformation of business processes", icon: RefreshCw },
    { title: "Software architecting, engineering, and modernization", icon: Code2 },
    { title: "Advanced technology adoption", icon: BrainCircuit },
    { title: "Organizing and optimizing IT processes, risk management, and support operations", icon: Settings }
  ];

  const servicePortfolio = [
    {
      category: "Digital transformation",
      icon: RefreshCw,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      services: [
        {
          title: "Digital transformation consulting",
          desc: "Whether you plan to digitally transform one business process or all the business areas, we will analyze what challenges you need to solve and develop a fitting IT strategy."
        },
        {
          title: "Software consulting",
          desc: "We will address any software-related challenges or blockers to help you avoid costly mistakes when building new software or draw maximum business value from your existing systems and products."
        }
      ]
    },
    {
      category: "Software engineering",
      icon: Code2,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      services: [
        {
          title: "Software modernization",
          desc: "We will assess your legacy software and offer modernization activities to improve its overall efficiency and cut software maintenance costs."
        },
        {
          title: "Custom software development",
          desc: "When building custom software from scratch, we ensure workflows that are easily understandable for users, maintainable code, and comprehensive supporting documentation."
        },
        {
          title: "Cloud enablement",
          desc: "We will help you leverage cloud possibilities and ensure easy scalability, advanced security, and cost savings for your infrastructure and apps hosted in the cloud."
        }
      ]
    },
    {
      category: "IT service and support operations",
      icon: Headphones,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      services: [
        {
          title: "Application maintenance and support",
          desc: "We can become your long-term partner who knows your software, delivers regular updates and fixes, and prevents issues before they jeopardize software operation."
        },
        {
          title: "IT infrastructure support",
          desc: "We offer proactive and reactive management of your on-premises, cloud, or hybrid infrastructure to keep it available, high-performing, and secure."
        },
        {
          title: "Managed IT services",
          desc: "We can fully manage your IT infrastructure and business software, from 24/7 monitoring to on-demand development and evolution."
        },
        {
          title: "Help desk",
          desc: "We provide L1–L3 help desk services to quickly solve user issues and conduct root cause analysis to prevent their reappearance."
        },
        {
          title: "DevOps consulting",
          desc: "We can introduce DevOps practices to connect and automate software development, testing, and deployment cycles and enable fast software releases."
        },
        {
          title: "ITSM consulting",
          desc: "We will help you establish transparent, fast, and cost-effective IT service delivery in your company and ensure that your employees or customers can easily access the IT resources and support they need."
        },
        {
          title: "Software QA consulting",
          desc: "We can help you set up an agile QA process that allows for early detection of bugs and guarantees no severe software defects in production."
        }
      ]
    },
    {
      category: "Cybersecurity and compliance",
      icon: Lock,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      services: [
        {
          title: "Cybersecurity consulting",
          desc: "We will help you spot and mitigate existing cybersecurity risks as well as strengthen your overall cybersecurity posture."
        },
        {
          title: "Security testing",
          desc: "We can apply different techniques to test the security of your IT infrastructure from different angles, confidently detect all security flaws, and provide you with an actionable remediation plan."
        },
        {
          title: "Managed security services",
          desc: "We can unfold and continuously tune an individual cybersecurity program for your organization, designed specifically to protect your IT assets and business data."
        },
        {
          title: "Compliance assessment & consulting",
          desc: "We will bring your company’s software and policies into compliance with industry-specific, regional, and international regulations."
        }
      ]
    }
  ];

  const advancedTech = [
    { name: "Artificial Intelligence", icon: BrainCircuit },
    { name: "Machine Learning", icon: Binary },
    { name: "Big Data", icon: Database },
    { name: "Blockchain", icon: Link2 },
    { name: "Computer Vision", icon: Eye },
    { name: "Internet of Things (IoT)", icon: Smartphone },
    { name: "Augmented Reality (AR)", icon: Box },
    { name: "Virtual Reality (VR)", icon: Layers }
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
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Briefcase size={14} />
              IT Consulting & Software Development
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Doing What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Matters</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-slate-300 mb-10 leading-relaxed italic border-l-4 border-blue-500 pl-6"
            >
              "Successful digital transformation isn’t about doing more — it’s about doing what matters. We help our clients cut through the noise and guesswork and pick IT solutions that will bring measurable and lasting value."
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center group">
                Start Transformation <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROFESSIONAL CONSULTANCY --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Professional IT Consultancy</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                GnJ Worldwide’s consulting competencies span the entire IT landscape. We analyze each client’s unique needs and IT environment, identify improvement opportunities, and design tailored solutions that bring tangible business value.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {consultingCompetencies.map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <comp.icon size={20} />
                    </div>
                    <span className="text-slate-700 font-medium text-sm leading-snug">{comp.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="IT Consulting Workshop" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
                <p className="text-lg font-bold mb-2">Strategic Guidance</p>
                <p className="text-sm text-blue-100">Practical assistance in software architecting, engineering, and modernization.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO OF SERVICES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Portfolio of IT Consulting Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Helping companies implement transformative software, design reliable infrastructures, and manage IT resources with maximum return.
            </p>
          </div>

          <div className="space-y-16">
            {servicePortfolio.map((category, catIdx) => (
              <div key={catIdx}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${category.bgColor} ${category.color} flex items-center justify-center shadow-sm`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{category.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, sIdx) => (
                    <motion.div 
                      key={sIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.1 }}
                      className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                      <Link to="/contact" className={`inline-flex items-center ${category.color} font-bold text-sm hover:opacity-80 transition-opacity group`}>
                        Learn more <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADVANCED TECHNOLOGY --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Expertise in Advanced Technology</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At the forefront of innovation, we continually expand our expertise in emerging techs that bring additional value to businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advancedTech.map((tech, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center group hover:bg-blue-600 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <tech.icon size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors">{tech.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGY ECOSYSTEM --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Taking Care of the Entire Technology Ecosystem</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Each company has a unique IT ecosystem. To address the diverse needs of our clients, we provide a broad spectrum of domain-specific tech competencies for setting up and configuring IT infrastructures, implementing specialized solutions, and handling ongoing technical support.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                <Server className="text-blue-400 mx-auto mb-4" size={40} />
                <h4 className="font-bold mb-2">Infrastructure</h4>
                <p className="text-sm text-slate-400">Setup and configuration of robust IT foundations.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                <Zap className="text-indigo-400 mx-auto mb-4" size={40} />
                <h4 className="font-bold mb-2">Specialized Solutions</h4>
                <p className="text-sm text-slate-400">Implementation of domain-specific technologies.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                <LifeBuoy className="text-teal-400 mx-auto mb-4" size={40} />
                <h4 className="font-bold mb-2">Ongoing Support</h4>
                <p className="text-sm text-slate-400">Continuous technical assistance and evolution.</p>
              </div>
            </div>
            <div className="mt-16">
              <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-2xl transform hover:-translate-y-1">
                Consult with Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ItConsultingPage;
