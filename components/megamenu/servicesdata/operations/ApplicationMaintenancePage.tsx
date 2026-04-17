import React, { useEffect } from 'react';
import { 
  Wrench, 
  Zap, 
  Shield, 
  Bug, 
  ArrowRight, 
  Activity, 
  Users, 
  Clock, 
  CheckCircle2, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Monitor, 
  Glasses, 
  HelpCircle, 
  FileText, 
  Search, 
  Settings, 
  Terminal, 
  Lock, 
  BarChart3, 
  ShieldCheck, 
  Workflow, 
  CloudRain, 
  Server, 
  IndianRupee,
  TrendingUp,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ApplicationMaintenancePage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const promiseStats = [
    { value: "> 97%", label: "User Satisfaction Rate", icon: Award },
    { value: "< 40 sec", label: "Response on 90% of Calls", icon: Clock },
    { value: "< 8 h", label: "Hot-fix Deployment", icon: Zap },
    { value: "< 1 wk", label: "Minor App Upgrade", icon: TrendingUp }
  ];

  const appsSupported = [
    { name: "Web apps", icon: Globe },
    { name: "Cloud apps & SaaS", icon: Cloud },
    { name: "Database apps", icon: Database },
    { name: "Mobile apps", icon: Smartphone },
    { name: "AR/VR apps", icon: Glasses },
    { name: "Desktop apps", icon: Monitor }
  ];

  const supportTiers = [
    {
      tier: "L0",
      title: "Self-Service Support",
      desc: "Preparing guiding materials, manuals, FAQs, and knowledge bases. Reduces L1-L3 requests by 60%.",
      pricing: "Fixed Price"
    },
    {
      tier: "L1",
      title: "Basic Support",
      desc: "Receiving/registering requests, resolving basic issues in under 10 min using efficient SOPs.",
      pricing: "Price per Ticket"
    },
    {
      tier: "L2",
      title: "Advanced Support",
      desc: "Administering environments, log investigation, and resolving serious incidents in < 8 hours.",
      pricing: "Price per Ticket"
    },
    {
      tier: "L3",
      title: "Engineering Support",
      desc: "Fixing complex issues via code/database changes. Patches and hot-fixes in < 24h.",
      pricing: "Monthly Subscription"
    }
  ];

  const maintenanceServices = [
    {
      title: "Application Evolution",
      icon: TrendingUp,
      desc: "Updating modules, new features, feasibility studies, and re-architecting.",
      pricing: "T&M with a Cap"
    },
    {
      title: "Security Management",
      icon: Lock,
      desc: "24/7 monitoring, vulnerability diagnostics, and penetration testing.",
      pricing: "Monthly Subscription"
    },
    {
      title: "Performance Management",
      icon: Activity,
      desc: "24/7 monitoring, usability testing, and UX optimization.",
      pricing: "T&M with a Cap"
    },
    {
      title: "Compliance Management",
      icon: ShieldCheck,
      desc: "Regular reviews of HIPAA, GDPR, PCI DSS, and regulation updates.",
      pricing: "Monthly Subscription"
    }
  ];

  const pricingOptions = [
    {
      title: "Per-ticket pricing",
      bestFor: "L1, L2 support",
      desc: "Charged based on the volume of incidents resolved monthly."
    },
    {
      title: "Fixed monthly fee",
      bestFor: "L3 support",
      desc: "Pre-paid hours at a reduced rate for continuous support."
    },
    {
      title: "Time & Material",
      bestFor: "Application evolution",
      desc: "Invoice based on actual hours or efforts reported per month."
    },
    {
      title: "Mixed model",
      bestFor: "Long-term cooperation",
      desc: "Combine different pricing models to fit miscellaneous needs."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-orange-50 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#f97316_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-200 text-orange-600 text-sm font-bold tracking-widest mb-8 backdrop-blur-sm">
              <Wrench size={16} /> APPLICATION SUPPORT & MAINTENANCE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Ensuring High <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">Availability & Reliability</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              We help clients from 30+ industries free up their IT staff to focus on growth while we ensure their apps keep up with evolving business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-orange-500/20 flex items-center gap-2">
                Get Support Now <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICE PROMISE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Service Promise in Numbers</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proactive issue resolution and mature DevOps practices for full service transparency.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {promiseStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all"
              >
                <stat.icon className="mx-auto mb-4 text-orange-600" size={32} />
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Lower IT costs via proactive resolution",
              "Agile updates every 2–4 weeks",
              "40% faster update rollouts",
              "KPI-based transparent reporting"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <CheckCircle2 className="text-orange-600 flex-shrink-0" size={20} />
                <span className="text-sm font-bold text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPS WE SUPPORT --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Apps We Support and Maintain</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {appsSupported.map((app, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl text-center border border-slate-200 shadow-sm hover:border-orange-500 transition-all group">
                <app.icon className="mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-bold text-slate-900 text-sm">{app.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAINTENANCE VS SUPPORT --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Maintenance vs. Support</h2>
              <div className="space-y-8">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                    <Settings size={24} /> Application Maintenance
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Focused on regular activities to keep the app stable and aligned with evolving needs. Includes bug fixing, security monitoring, scaling, and upgrading features.
                  </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                    <HelpCircle size={24} /> Application Support
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Primarily serves to assist end users in smooth app utilization. Covers troubleshooting, incident management, user education, and UX improvement.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-red-50 rounded-[3rem] transform rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="IT Support Team" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SUPPORT SERVICES (L0-L3) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Application Support Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tiered support structure to handle everything from self-service to complex code-level fixes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTiers.map((tier, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col"
              >
                <div className="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  {tier.tier}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{tier.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">{tier.desc}</p>
                <div className="pt-6 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pricing Model</div>
                  <div className="text-orange-600 font-bold">{tier.pricing}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MAINTENANCE SERVICES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Application Maintenance Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {maintenanceServices.map((service, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex gap-6"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm flex-shrink-0">
                  <service.icon size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <IndianRupee size={14} /> {service.pricing}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADDITIONAL SERVICES --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Additional Facilitation Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Workflow, title: "CI/CD & DevOps", desc: "IaC approach, pipeline maintenance, and deployment automation." },
              { icon: CloudRain, title: "Cloud Migration", desc: "Strategy, planning, infrastructure configuration, and knowledge transfer." },
              { icon: BarChart3, title: "Cloud Resource Mgmt", desc: "Consumption optimization to reduce costs and on-demand management." },
              { icon: Server, title: "IT Infrastructure", desc: "Management of servers, network, and data centers with 24/7 monitoring." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <item.icon className="text-orange-400 mb-4" size={32} />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING OPTIONS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pricing Options</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingOptions.map((option, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-500 transition-all group">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{option.title}</h4>
                <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">Best for: {option.bestFor}</div>
                <p className="text-sm text-slate-500 leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-orange-600 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Free Up Your IT Staff?</h2>
          <p className="text-xl text-orange-100 mb-12">
            Let's discuss how our support and maintenance services can ensure your apps are always available and reliable.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-orange-600 font-bold py-5 px-12 rounded-2xl hover:bg-orange-50 transition-all shadow-xl transform hover:-translate-y-1">
            Discuss Your Needs <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ApplicationMaintenancePage;