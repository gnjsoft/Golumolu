import React, { useEffect } from 'react';
import { 
  Workflow, CheckCircle2, Settings, ArrowRight, Users, Cloud, 
  ShieldCheck, Database, HeadphonesIcon, RefreshCw, Layout, 
  Activity, BarChart3, FileText, Server, Monitor, Zap, 
  MessageSquare, Briefcase, HelpCircle, Layers, Cpu, Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ServiceNowPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { title: "ServiceNow Consulting", desc: "We advise on mapping needs to functionality, process tuning, and expanding ServiceNow across your enterprise.", icon: MessageSquare },
    { title: "ServiceNow Implementation", desc: "From scratch implementation, enhancements, integrations, and migrations from legacy ITSM systems.", icon: Settings },
    { title: "ServiceNow Customization", desc: "We set up and adjust the platform without code changes and perform code-based customizations.", icon: Layout },
    { title: "Custom App Development", desc: "Our certified developers design and deliver custom ServiceNow applications to fill functionality gaps.", icon: Code },
    { title: "ServiceNow Testing", desc: "Thorough checking of functionality, integrations, performance, security, and data quality.", icon: ShieldCheck },
    { title: "ServiceNow Support", desc: "Basic user support, system parameters monitoring, and on-the-fly troubleshooting.", icon: HeadphonesIcon },
    { title: "Managed Services", desc: "We take over system administration, performance, security, ongoing improvements, and user training.", icon: Activity }
  ];

  const products = [
    "IT Service Management (ITSM)", "IT Operations Management (ITOM)", 
    "IT Business Management (ITBM)", "IT Asset Management",
    "Security Operations", "Software Asset Management", 
    "Customer Service Management", "HR Service Delivery", 
    "Now Platform App Engine"
  ];

  const implementationSteps = [
    { title: "Implementation Consulting", desc: "Mapping requirements, choosing strategy, designing IT processes, and planning stages." },
    { title: "Pilot Project", desc: "Demonstrating benefits in real life with core processes before major implementation." },
    { title: "Configuration & Customization", desc: "Adjusting functionality with or without code changes to reflect business requirements." },
    { title: "Integrations", desc: "Connecting with IT infrastructure, email, cloud services, CRM, ERP, and more." },
    { title: "Data Migration", desc: "Importing, validating, and reconciling data from legacy systems and databases." },
    { title: "User Training", desc: "Training sessions before production launch to ensure high solution adoption." },
    { title: "Production Launch", desc: "Rolling out the developed and tested functionality into production." },
    { title: "After-Launch Support", desc: "2-3 months of support to fix minor malfunctions and facilitate user adoption." }
  ];

  const migrationSystems = [
    { category: "Simple/Medium ITSM", tools: ["Zendesk", "Freshservice", "Axios Assyst", "Samanage", "Jira"] },
    { category: "Complex Legacy ITSM/ITOM", tools: ["BMC", "Cherwell Software", "CA Technologies"] },
    { category: "Project Management", tools: ["Podio", "Basecamp", "EventCollab", "monday.com", "Jira"] },
    { category: "Incident Response & SOAR", tools: ["TheHive", "VSA", "AlienVault", "Rapid7", "IBM Resilient"] },
    { category: "Customer Service", tools: ["Salesforce", "Jira", "Freshdesk", "LiveAgent"] },
    { category: "HR Management", tools: ["Bitrix 24", "WebHR", "SharePoint", "Workday"] }
  ];

  const migrationStrategies = [
    { title: "Strategy 1", desc: "Load all your old data into ServiceNow." },
    { title: "Strategy 2", desc: "Load most data into ServiceNow and move the rest (mostly attachments) to external storage." },
    { title: "Strategy 3 (Cloud)", desc: "Load recent data (2-4 months), keep the rest in the old solution with a minimal subscription, and integrate." },
    { title: "Strategy 4 (On-Premises)", desc: "Load recent data, leave the rest in the frozen legacy system, and create a live link for data lookups." }
  ];

  const supportDeliverySteps = [
    "Specify the scope of services you need.",
    "Perform a health check and conduct knowledge transfer.",
    "Design and sign a Service Level Agreement (SLA).",
    "Ensure full accountability via transparent responsibility transfer.",
    "Run daily support operations with regular reporting.",
    "Continuously run proactive evolution or fulfill on-demand requests."
  ];

  const managedServicesScope = [
    { title: "User Help Desk", desc: "L1-L3 support for basic issues and code-level changes, plus L4 support for platform-side problems." },
    { title: "System Administration", desc: "User/access management, workflow configuration, and data quality management." },
    { title: "Health Checks & Audits", desc: "Scheduled examination to proactively identify and remediate weak spots." },
    { title: "Performance Monitoring", desc: "Detection of unfavorable trends and prevention of related problems." },
    { title: "Development & Evolution", desc: "Functionality expansions, custom apps, release migrations, and integrations." },
    { title: "Solution Consulting", desc: "Advising on efficiency, process optimization, and user training." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#293E40] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#81B5A1] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#81B5A1]/10 border border-[#81B5A1]/30 text-[#81B5A1] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Workflow size={14} className="animate-pulse" /> ServiceNow Platform Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
              Transform Workflows. <br/> <span className="text-[#81B5A1]">Empower Enterprise.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide provides end-to-end ServiceNow consulting, implementation, and managed services to connect people, functions, and systems across your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#81B5A1] text-[#293E40] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-white">
                Discuss My Needs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 bg-[#1e2e30] p-10 rounded-[3rem] border border-slate-700 shadow-2xl overflow-hidden group">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Monitor size={20} />
                    <span className="font-mono text-sm">ServiceNow Dashboard</span>
                  </div>
                  <span className="flex items-center gap-2 text-[#81B5A1] text-xs font-bold uppercase tracking-widest">
                    <Activity size={14} className="animate-pulse" /> All Systems Operational
                  </span>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-[#293E40] p-4 rounded-xl border border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#81B5A1]/20 rounded-full flex items-center justify-center">
                          <Settings size={20} className="text-[#81B5A1]" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">INC00{i}84{i * 3}</div>
                          <div className="text-xs text-slate-400">Workflow automation active</div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">Resolved</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* A-to-Z Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">An Outline of Our A-to-Z ServiceNow Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive solutions to maximize your ServiceNow investment.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white text-[#293E40] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#81B5A1] group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Cover */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">ServiceNow Products We Work With</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                We can either implement ServiceNow products from scratch or enhance their functionality in your existing solution.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {products.map((product, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="text-[#81B5A1] shrink-0" size={20} />
                    <span className="font-semibold text-slate-800 text-sm">{product}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <div className="aspect-square bg-[#293E40] rounded-[3rem] overflow-hidden relative p-12 flex flex-col justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="relative z-10 text-center">
                  <Layers size={64} className="text-[#81B5A1] mx-auto mb-8" />
                  <h3 className="text-3xl font-bold text-white mb-4">Unified Platform</h3>
                  <p className="text-slate-300">One architecture, one data model, one platform for the entire enterprise.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our ServiceNow Implementation Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">A structured approach to ensure successful deployment and adoption.</p>
          </motion.div>

          <div className="space-y-6">
            {implementationSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-6 items-center p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-white text-[#293E40] rounded-2xl flex items-center justify-center text-2xl font-bold shadow-sm shrink-0 border border-slate-100">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Challenges */}
      <section className="py-24 bg-[#293E40] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why You Should Choose Us</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">We solve complex challenges and prevent common post-migration issues.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="p-10 bg-white/5 rounded-[3rem] border border-white/10">
              <ShieldCheck size={40} className="text-[#81B5A1] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Preventing Old Problems in New Systems</h3>
              <p className="text-slate-300 leading-relaxed">
                We investigate the limitations of your current tool and propose ways to eliminate inefficiencies, ensuring ServiceNow doesn't just act like your old solution. We offer related training to ensure high solution and process adoption.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="p-10 bg-white/5 rounded-[3rem] border border-white/10">
              <RefreshCw size={40} className="text-[#81B5A1] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Reducing Release Migration Costs</h3>
              <p className="text-slate-300 leading-relaxed">
                To cut costs associated with frequent ServiceNow release migrations, our experts reduce the time needed for each upgrade by applying a structured approach and using the ServiceNow Automated Test Framework.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration Systems & Strategies */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-8">Systems We Can Migrate You From</h2>
              <div className="space-y-6">
                {migrationSystems.map((sys, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-3">{sys.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {sys.tools.map((tool, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold mb-8">Our Migration Strategies</h2>
              <div className="space-y-4">
                {migrationStrategies.map((strategy, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 bg-[#81B5A1]/20 text-[#293E40] rounded-xl flex items-center justify-center shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{strategy.title}</h4>
                      <p className="text-sm text-slate-600">{strategy.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-[#293E40] text-white rounded-2xl">
                <h4 className="font-bold text-[#81B5A1] mb-2">Flexible Transition Approaches</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Iterative development + temporary solution concurrence</li>
                  <li>• Iterative development + rapid solution change</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support & Managed Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Support & Managed Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive ongoing care for your ServiceNow ecosystem.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-[#293E40]">Support Component</h3>
              <p className="text-slate-600 mb-6">Aims to achieve stability and reliability.</p>
              <ul className="space-y-4">
                {["User help desk (L1-L4)", "System administration & monitoring", "ITIL-based troubleshooting", "Regular health checks & security audits"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 size={20} className="text-[#81B5A1] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-[#293E40]">Evolution Component</h3>
              <p className="text-slate-600 mb-6">Drives continuous digital transformation.</p>
              <ul className="space-y-4">
                {["Functionality expansions & custom apps", "Release migrations", "Implementation of new products", "Internal & external integrations"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 size={20} className="text-[#81B5A1] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center mb-12">Scope of Managed Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {managedServicesScope.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#293E40] text-white p-12 rounded-[3rem] relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-center">How We Deliver Support Services</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {supportDeliverySteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#81B5A1] text-[#293E40] rounded-full flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-300 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#293E40] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(129,181,161,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Optimize Your ServiceNow Platform?</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Whether you need a fresh implementation, a complex migration, or ongoing managed services, our certified experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="inline-flex items-center bg-[#81B5A1] text-[#293E40] font-bold py-5 px-12 rounded-2xl hover:bg-white transition-all shadow-2xl transform hover:-translate-y-1 group">
              Discuss Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceNowPage;