import React, { useEffect } from 'react';
import { 
  Cloud, Server, Database, ArrowRight, Shield, Globe, 
  Zap, Settings, RefreshCw, Laptop, Boxes, Target, 
  Share2, BookOpen, Kanban, ClipboardList, ClipboardCheck, 
  Warehouse, Radio, Layout, Pill, Heart, Stethoscope, 
  Building2, Truck, Microscope, Image as ImageIcon, 
  TrendingUp, Users, ShieldAlert, PenTool, Wrench, 
  Package, Eye, Video, Bell, Thermometer, Battery, 
  Network, Bot, Gauge, HardDrive, Lock, Activity, 
  Search, Cpu, MessageSquare, CheckCircle2, IndianRupee, 
  Calculator, FileCheck, Landmark, Smartphone, Wallet, 
  Rocket, Fingerprint, Languages, Glasses, Handshake, 
  Gift, Users2, Scale, AlertTriangle, HeartPulse, 
  Clock, Monitor, MessageCircle, HelpCircle, Lightbulb, 
  Zap as ZapIcon, CloudLightning, Layers, Infinity, 
  Terminal, Code2, BarChart3, PieChart, ShieldCheck, 
  CloudCog, CloudDownload, CloudUpload, CloudSync
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const CloudPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const serviceOptions = [
    {
      title: "Cloud Consulting",
      desc: "Audit existing IT infrastructure, analyze cloud adoption needs, and prepare feasibility studies and business cases.",
      icon: Laptop
    },
    {
      title: "Cloud Migration",
      desc: "Modernize applications and data storage for fast, smooth, and reliable migrations without disruptions.",
      icon: CloudDownload
    },
    {
      title: "Cloud Development",
      desc: "Design and build cloud-native apps and data warehouses adjusted to cloud capabilities and constraints.",
      icon: Code2
    },
    {
      title: "Cloud Optimization",
      desc: "Review cloud environments to rightsize resources and pause redundant services for cost efficiency.",
      icon: TrendingUp
    },
    {
      title: "Infrastructure Management",
      desc: "Complete support for cloud infrastructure, from setup to monitoring, maintenance, and improvement.",
      icon: CloudCog
    },
    {
      title: "Cloud Integration",
      desc: "Build custom integration solutions using AWS EventBridge, Azure Event Grid, or middleware like Kafka.",
      icon: Share2
    },
    {
      title: "Cloud Analytics",
      desc: "Secure and scalable analytics solutions for private, public, or hybrid clouds with interactive visualization.",
      icon: BarChart3
    },
    {
      title: "Security Consulting",
      icon: ShieldCheck,
      desc: "Comprehensive risk assessment, strategy development, and implementation of SSO, MFA, and encryption."
    }
  ];

  const deploymentModels = [
    { title: "Public Cloud", desc: "Ease of use, maintenance, flexible pricing, and near-unlimited scalability.", icon: Globe },
    { title: "Private Cloud", desc: "Leverage superior security, privacy, and zero latency for local applications.", icon: Lock },
    { title: "Hybrid Cloud", desc: "Combine the best of both worlds: public and private cloud environments.", icon: Layers },
    { title: "Multi-Cloud", desc: "Capitalize on unique offers from a variety of leading cloud vendors.", icon: Infinity }
  ];

  const appServiceScope = [
    { title: "Cloud App Consulting", icon: MessageSquare, desc: "Elicit business needs, prioritize requirements, and design architecture/UX for new or existing apps." },
    { title: "Cloud App Development", icon: Cpu, desc: "From simple mobile apps to complex enterprise systems, covering ideation, design, coding, and testing." },
    { title: "App Migration", icon: CloudUpload, desc: "Move apps quickly and safely using rehosting, replatforming, or refactoring strategies." },
    { title: "Application Integration", icon: Network, desc: "Build reliable, secure, and scalable integrations between custom and commercial systems." },
    { title: "SaaS Development", icon: Rocket, desc: "Plan and build new SaaS products or rework existing solutions into successful SaaS apps." },
    { title: "Support & Maintenance", icon: Wrench, desc: "Ensure 24/7 proper function with performance monitoring, patches, and disaster recovery." },
    { title: "App Containerization", icon: Package, desc: "Encapsulate apps into containers (Docker/K8s) to increase agility and reduce maintenance costs." },
    { title: "Cloud Security", icon: ShieldAlert, desc: "Solid protection of data, apps, and infrastructure with extensive guidance and remediation." }
  ];

  const cloudAttributes = [
    { title: "Scalability & Portability", icon: Scale, desc: "Microservices and containerization to minimize downtime during migration or overload." },
    { title: "Resilience", icon: Activity, desc: "Message queues and automated recovery to eliminate the possibility of app failure escalation." },
    { title: "Flexibility", icon: RefreshCw, desc: "Layered architectures and standardized APIs to easily adopt updates and integrations." },
    { title: "Security", icon: Lock, desc: "ISO 27001 compliant systems following CIS, NIST, and OWASP recommendations." },
    { title: "Cost-efficiency", icon: IndianRupee, desc: "Reusable code, automated CI/CD, and optimal cloud service selection to reduce costs." },
    { title: "Compliance", icon: ClipboardCheck, desc: "Meeting HIPAA, PCI DSS, GDPR, and other global/local standards with in-house experts." }
  ];

  const migrationStages = [
    { title: "Project Discovery", items: ["Application/DWH audit", "Security & compliance assessment", "Dependencies mapping", "Requirements gathering"] },
    { title: "Data Migration", items: ["Data extraction & cleaning", "Automated migration scripts", "Trial migration validation", "Massive data execution"] },
    { title: "Architecture Update", items: ["Updating app/DWH code", "Adapting architecture to cloud", "Refactoring for cloud-native"] },
    { title: "Mock/Pilot Migration", items: ["Beta environment testing", "Fine-tuning configuration", "Impact identification"] },
    { title: "Phased Migration", items: ["Moving chosen workloads", "Iterative deployment", "Risk mitigation"] },
    { title: "Go-Live & Support", items: ["Final testing", "Production launch", "Continuous maintenance"] }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Cloud size={14} className="animate-pulse" /> Cloud Consulting Services
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Innovate & <br/> <span className="text-blue-200">Scale</span> in the Cloud
            </h1>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide handles everything around the cloud: from strategy and migration to developing efficient cloud-native apps and data warehouses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group">
                Get Cloud Strategy <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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
                      <CloudSync size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Cloud Migration</h4>
                      <p className="text-xs text-blue-200 italic">Syncing infrastructure...</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-xl font-bold">99.99% Uptime</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-blue-200 uppercase mb-1">Cost Savings</p>
                    <p className="text-lg font-bold text-white">Up to 37%</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-blue-200 uppercase mb-1">Performance</p>
                    <p className="text-lg font-bold text-blue-300">+19% Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Cloud Service Options</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Full-scope cloud services to innovate and scale with complete peace of mind.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceOptions.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clouds We Work With */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Clouds We Work With</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Vendor-neutral experts weighing major clouds to find your best solution.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
              { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
              { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
              { name: "Zoho", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Zoho_Logo.svg" }
            ].map((cloud, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center group hover:bg-white/10 transition-all"
              >
                <img src={cloud.logo} alt={cloud.name} className="h-12 w-auto mb-4 brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                <span className="font-bold text-slate-300">{cloud.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Cloud Deployments We Handle</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Tailored deployment strategies for your unique business needs.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentModels.map((model, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-blue-500/30 transition-all group text-center"
              >
                <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <model.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{model.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Application Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Cloud Application Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive support for every aspect of your cloud application journey.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appServiceScope.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Must-Have Attributes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Must-Have Attributes of Our Apps</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">We build cloud solutions that are scalable, resilient, and secure by design.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudAttributes.map((attr, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100"
              >
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <attr.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{attr.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{attr.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Migration Deep Dive */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Cloud Migration Expertise</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Reliable migration of applications and data warehouses with zero business disruption.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {migrationStages.slice(0, 3).map((stage, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-8 text-blue-400">0{idx + 1}. {stage.title}</h3>
                <ul className="space-y-4">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {[
              { title: "Rehost", desc: "Quick and cheap migration to IaaS without code modifications. 15-20% savings.", icon: CloudDownload },
              { title: "Replatform", desc: "Migration of modified workloads to PaaS for improved performance and scalability. Up to 450% ROI.", icon: CloudSync },
              { title: "Re-architect", desc: "Making workloads cloud-native for full scope of capabilities. 50% faster deployments.", icon: CloudLightning }
            ].map((strat, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-3xl text-center group hover:bg-blue-600/20 transition-all"
              >
                <strat.icon size={40} className="mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-4">{strat.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{strat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Techs & Architecture Patterns</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Leveraging the latest technologies for high-performing cloud solutions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Clouds", items: ["AWS", "Azure", "GCP", "DigitalOcean", "Rackspace"] },
              { title: "Databases", items: ["S3", "Redshift", "DynamoDB", "Cosmos DB", "SQL Database", "Cloud SQL"] },
              { title: "DevOps", items: ["Docker", "Kubernetes", "OpenShift", "Terraform", "Ansible", "Terraform"] },
              { title: "CI/CD & Monitoring", items: ["Azure DevOps", "GitLab CI/CD", "Prometheus", "Grafana", "Datadog", "Zabbix"] }
            ].map((group, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-blue-600 mb-6 uppercase tracking-widest text-sm">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimation Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-12 rounded-[4rem] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Calculator size={200} className="text-blue-600" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Cloud App Project Cost</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  For accurate cost estimation, we take into account feature complexity, development method, user roles, integration needs, and compliance requirements.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs text-slate-400 uppercase mb-1">Medium App</p>
                    <p className="text-xl font-bold text-slate-900">₹17L - ₹2.1Cr</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs text-slate-400 uppercase mb-1">Large Modernization</p>
                    <p className="text-xl font-bold text-slate-900">₹4.2Cr+</p>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl hover:bg-blue-700 transition-all shadow-lg group">
                  Request Cost Estimate <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 mb-4">Pricing Options</h4>
                {[
                  { title: "Fixed Price", desc: "Best for feasibility studies, PoCs, and small projects with stable requirements." },
                  { title: "Time & Material", desc: "Best for advisory activities, agile development, and solution evolution." },
                  { title: "Per-ticket Pricing", desc: "Best for L1, L2 cloud application support based on incident volume." },
                  { title: "Fixed Monthly Fee", desc: "Best for L3 support including defect fixes and functional changes." }
                ].map((price, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IndianRupee size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm mb-1">{price.title}</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">{price.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Your Cloud Implementation Right On the First Try!</h2>
          <p className="text-xl text-blue-50 mb-12">
            GnJ Worldwide offers well-established agile processes and latest design patterns for safe, swift, and financially sound cloud development.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold py-5 px-12 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Request Cloud App Development <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CloudPage;