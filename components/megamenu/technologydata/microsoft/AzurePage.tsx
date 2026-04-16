import React, { useEffect } from 'react';
import { 
  Cloud, Server, Shield, Database, ArrowRight, Zap, Globe,
  TrendingUp, DollarSign, Users, CheckCircle2, ListChecks, 
  Workflow, ShieldCheck, RefreshCw, SearchCode, BarChart3, 
  Settings, LifeBuoy, Terminal, Infinity, Gauge, Search, 
  MessageSquare, Microscope, Building2, Truck, ShoppingCart, 
  Landmark, Factory, Briefcase, Users2, UserCheck, History, 
  TestTube2, Kanban, ClipboardList, ClipboardCheck, Warehouse, 
  Radio, Pill, Heart, Stethoscope, Image as ImageIcon, 
  ShieldAlert, PenTool, Package, Eye, Bot, Ticket, 
  CreditCard, Share, Lock, Clock, FileText, Handshake, 
  Calculator, AlertTriangle, Lightbulb, Video, Binary, 
  Network, Box, Monitor, Tv, Glasses, Cpu, Bug, 
  Layout, MapPin, Mic, Sparkles, Calendar, User, 
  Scan, Bell, Link as LinkIcon, Activity, Target, Rocket,
  FileCode, Layers, Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const AzurePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const benefits = [
    { title: "Optimal Migration Costs", icon: DollarSign, desc: "We devise a pragmatic Azure migration strategy to cut down on development costs." },
    { title: "Reduced Consumption Costs", icon: TrendingUp, desc: "We automate resource orchestration and select Azure services to reduce cloud consumption costs." },
    { title: "Increased Dev Speed", icon: Zap, desc: "We help set up Azure services and CI/CD pipelines to speed up development efforts." },
    { title: "Tuned App Performance", icon: Gauge, desc: "We set up auto-scaling routines and performance testing to ensure stability and high performance." },
    { title: "Highly Reliable Systems", icon: ShieldCheck, desc: "Failure-proof Azure-based apps backed with performance management and recovery techniques." },
    { title: "Maximum Cloud Security", icon: Lock, desc: "Adjusting Identity and Access Management via Azure AD and component-level security." }
  ];

  const consultingOptions = [
    {
      title: "Azure Migration",
      icon: RefreshCw,
      desc: "Individual migration strategy for a cost-effective and high-performing Azure environment.",
      cta: "Go for migration"
    },
    {
      title: "App Development in Azure",
      icon: Code2,
      desc: "Designing cloud architectures and CI/CD pipelines using SaaS and PaaS functionality.",
      cta: "Go for development"
    },
    {
      title: "Azure Optimization",
      icon: BarChart3,
      desc: "Assessing performance and issuing procedures to reduce tenancy costs and increase performance.",
      cta: "Go for optimization"
    }
  ];

  const migrationStrategies = [
    {
      title: "Rehosting ('lift-and-shift')",
      desc: "Relocating workloads to Azure without code alterations. Quick and cheap with limited cloud-driven capabilities.",
      bestFor: "Workloads unlikely to be scaled and projects prioritizing short-term benefits."
    },
    {
      title: "Replatforming ('lift, tinker and shift')",
      desc: "Moving applications to Azure after minimal code changes and enhancements with no architecture changes.",
      bestFor: "Applications that experience load jumps and unstable performance."
    },
    {
      title: "Refactoring (re-architecting)",
      desc: "Modifying apps to make them compatible with Azure, leveraging full cloud-native capabilities.",
      bestFor: "Making the migrated applications cloud-native (auto-scaling, serverless, etc.)."
    }
  ];

  const migrationSteps = [
    { step: "01", title: "Defining Goals & Scope", desc: "Eliciting requirements, identifying workloads, checking compatibility, and assessing risks." },
    { step: "02", title: "Selecting Strategy", desc: "Choosing between Rehosting, Replatforming, or Refactoring based on business goals." },
    { step: "03", title: "Project Planning", desc: "Estimating ROI/TCO, backup/disaster recovery plans, and setting KPIs for migration." },
    { step: "04", title: "Pilot Migration", desc: "Provisioning test environment and replicating non-critical workloads to evaluate results." },
    { step: "05", title: "Full Migration", desc: "Preparing production environment, setting up DevOps, and migrating data/workloads." },
    { step: "06", title: "Monitoring & Optimization", desc: "Tracking performance and health, and right-sizing resources for cost optimization." }
  ];

  const teamRoles = [
    { role: "Project Manager", desc: "Works out detailed plans, milestones, and risk mitigation. Regularly reports to stakeholders." },
    { role: "Azure Solution Architect", desc: "Develops migration strategy, plans architectural modifications, and selects Azure services." },
    { role: "Software Engineer", desc: "Modifies workloads at the code level and debugs issues detected during testing." },
    { role: "Database Engineer", desc: "Advises on Azure database services, carries out data migration, and fine-tunes performance." },
    { role: "DevOps Engineer", desc: "Automates deployment/testing, configures CI/CD pipelines, and sets up monitoring tools." },
    { role: "IT Security Specialist", desc: "Ensures workloads conform to security/compliance requirements and manages access control." },
    { role: "QA Engineer", desc: "Draws up testing strategy, conducts manual/automated testing, and ensures data integrity." }
  ];

  const managedServices = [
    { title: "Azure Administration", icon: Settings, desc: "Configuring resources, managing data flows, and backing up data." },
    { title: "Azure Monitoring 24/7", icon: Activity, desc: "Ensuring availability and reliability using tools like Azure Monitor and Nagios." },
    { title: "Azure Troubleshooting", icon: AlertTriangle, desc: "Addressing misconfigurations, server overloads, and investigating event logs." },
    { title: "Usage Optimization", icon: TrendingUp, desc: "Proactively making Azure resource usage more efficient via autoscaling." },
    { title: "Azure Cybersecurity", icon: ShieldAlert, desc: "Individual security strategy, vulnerability scans, and penetration testing." },
    { title: "Azure Compliance", icon: ClipboardCheck, desc: "Checking compliance with HIPAA, GDPR, ISO 27001, PCI DSS, and NIST 800." },
    { title: "Azure Migration", icon: RefreshCw, desc: "Planning personalized migration and selecting best-suited Azure services." },
    { title: "Azure Help Desk", icon: MessageSquare, desc: "Multi-language team providing L1-L3 support for Azure infrastructure." },
    { title: "Azure Evolution", icon: Rocket, desc: "Designing, deploying, and configuring new components of your Azure infrastructure." }
  ];

  const pricingModels = [
    {
      title: "Fixed Monthly Fee",
      desc: "Based on IT infrastructure specifics. Good for predictable service scope within an agreed monthly budget.",
      icon: Calculator
    },
    {
      title: "Pay-per-use",
      desc: "Monthly fee is a percentage of the monthly bill for consumed cloud resources. Includes licenses and work.",
      icon: CreditCard
    }
  ];

  const techStack = [
    { title: "Assessing", items: ["Azure Migrate", "Movere", "Service Map", "Azure TCO Calculator"] },
    { title: "Migrating", items: ["Database Migration Service", "Azure Data Box", "SQL Server Migration Assistant", "AzCopy", "Azure Backup"] },
    { title: "DevOps", items: ["Azure Pipelines", "Azure DevTest Labs", "Azure Repos", "Azure Boards", "Azure Artifacts"] },
    { title: "Monitoring", items: ["Azure Monitor", "Microsoft Sentinel", "Azure Cost Management", "Azure AI Studio"] }
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#0078D4] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-400/10 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Cloud size={14} className="animate-pulse" /> Microsoft Azure Consulting
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Azure <br/> <span className="text-blue-200">Excellence</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Efficient adoption, migration, and optimization of Azure cloud services to drive business growth and cost efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#0078D4] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-blue-50">
                Start Azure Consulting <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[3rem] shadow-2xl overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Cloud Performance</h4>
                      <p className="text-xs text-blue-200 italic">Optimized Infrastructure</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-xl font-bold">+19% Speed</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-blue-200 uppercase mb-1">Consumption Cost</p>
                    <p className="text-lg font-bold text-white">-37% Reduced</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-blue-200 uppercase mb-1">IT Productivity</p>
                    <p className="text-lg font-bold text-white">+75% Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How You Benefit from Azure Consulting</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Pragmatic strategies to cut costs, increase speed, and ensure high reliability.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-[#0078D4]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-white text-[#0078D4] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0078D4] group-hover:text-white transition-all shadow-sm">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Options */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Choose Your Azure Consulting Option</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Tailored services for migration, development, and environment optimization.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultingOptions.map((option, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-200 group hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#0078D4]/10 text-[#0078D4] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <option.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{option.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{option.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-[#0078D4] font-bold group-hover:text-blue-700 transition-colors">
                  {option.cta} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Strategies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Azure Migration Strategies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Selecting the right approach based on your goals and workload complexity.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {migrationStrategies.map((strategy, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{strategy.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{strategy.desc}</p>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-[10px] text-[#0078D4] uppercase font-bold mb-1">Best For</p>
                  <p className="text-xs text-slate-700">{strategy.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Steps */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Azure Migration Steps</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">A structured process to ensure prompt and risk-free workload migration.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#0078D4]/30 transition-all group"
              >
                <div className="text-4xl font-black text-white/5 absolute top-4 right-6 group-hover:text-[#0078D4]/10 transition-colors">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Azure Migration Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Access specific talents with solid experience in Azure migration and modernization.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamRoles.map((role, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{role.role}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Azure Services */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The Scope of Our Managed Azure Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Streamlining monitoring and addressing issues promptly to ensure reliability.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managedServices.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-white rounded-3xl border border-slate-200 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-[#0078D4]/10 text-[#0078D4] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How Much Will Azure Management Cost?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Flexible pricing models based on your IT infrastructure specifics and consumption.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingModels.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 text-center group hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-[#0078D4] text-white rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <model.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{model.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">{model.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-[#0078D4] font-bold group-hover:text-blue-700 transition-colors">
                  Get a Custom Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Leveraging official Azure services for assessment, migration, and monitoring.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {techStack.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-blue-400 mb-6 uppercase tracking-widest text-sm border-b border-blue-400/30 inline-block">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0078D4] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Step Up Your Azure Environment Today</h2>
          <p className="text-xl text-blue-100 mb-12 font-medium">
            Rely on our 13-year experience in cloud migration to plan and conduct safe Azure migration of any scope.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-[#0078D4] font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Start Your Azure Journey <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AzurePage;