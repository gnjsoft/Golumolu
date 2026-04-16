import React, { useEffect } from 'react';
import { 
  Cloud, Server, Database, Shield, Zap, ArrowRight, Activity, 
  Globe, CheckCircle2, Cpu, Network, HardDrive, Layout, 
  BarChart3, Share2, Rocket, Settings, ShieldCheck, 
  Users, RefreshCw, LifeBuoy, DollarSign, Microscope,
  Briefcase, Handshake, Sparkles, Monitor, Terminal,
  MessageSquare, FileText, Search, Layers, Repeat,
  Clock, Calculator, UserCheck, HelpCircle, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const AwsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const techCategories = [
    {
      title: "Compute and Containers",
      icon: Cpu,
      items: ["Amazon EC2", "AWS Lambda", "AWS Batch", "Amazon ECS", "Amazon EKS (AKS)"]
    },
    {
      title: "Networking",
      icon: Network,
      items: ["Elastic Load Balancing", "Amazon VPC", "Amazon Route 53", "AWS Direct Connect"]
    },
    {
      title: "Storage and Database",
      icon: Database,
      items: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon Aurora"]
    },
    {
      title: "Serverless",
      icon: Zap,
      items: ["AWS Lambda", "Amplify", "AWS CDK"]
    },
    {
      title: "Big Data and Analytics",
      icon: BarChart3,
      items: ["Amazon Kinesis", "AWS Data Pipeline", "Amazon Redshift", "Amazon OpenSearch", "Amazon QuickSight", "AWS Lake Formation", "Amazon EMR", "Amazon MSK"]
    },
    {
      title: "Application Integration",
      icon: Share2,
      items: ["Amazon API Gateway", "AWS AppSync", "Amazon EventBridge", "Amazon SNS", "Amazon SQS", "Amazon MQ", "Amazon AppFlow", "AWS Step Functions", "Amazon MWAA"]
    }
  ];

  const mainServices = [
    {
      title: "Development of Web and Mobile Apps",
      icon: Layout,
      desc: "From robust enterprise software to sleek customer-facing applications, we plan, build, test, and deploy efficient AWS-based solutions.",
      benefits: ["Deep knowledge of latest AWS features", "Expertise in AI/ML, IoT, AR/VR", "High-performance architecture", "1–4 months for MVP"],
      cta: "Go for App Development"
    },
    {
      title: "Migration to AWS",
      icon: Rocket,
      desc: "Safe and efficient migration of applications, databases, or whole IT infrastructures to AWS cloud with architecture adjustments.",
      benefits: ["Legacy database assessments", "Cloud-native modernizations", "Zero-downtime strategies"],
      cta: "Check Details"
    },
    {
      title: "DevOps Implementation",
      icon: Settings,
      desc: "Build and deliver software more rapidly and reliably using AWS services and DevOps practices.",
      benefits: ["Infrastructure automation", "CI/CD pipelines", "Performance monitoring"],
      cta: "Check Details"
    },
    {
      title: "Security & Compliance",
      icon: ShieldCheck,
      desc: "Set up a secure and compliant cloud environment from scratch or enhance protection of existing assets.",
      benefits: ["Identity & Access Management", "Data Encryption", "Network Security", "Compliance Audits"],
      cta: "Enhance Security"
    }
  ];

  const rdsServices = [
    { title: "App Development", desc: "Building apps backed by fast, secure, cost-efficient cloud-native databases." },
    { title: "Data Warehousing", desc: "Building midsize DWH based on PostgreSQL or SQL Server." },
    { title: "Database Migration", desc: "Legacy assessments, migrations, and modernizations to Amazon RDS." },
    { title: "Optimization", desc: "Cost and performance optimization of existing RDS solutions." },
    { title: "Security & Compliance", desc: "Management, penetration testing, and 24/7 monitoring." }
  ];

  const projectManagement = [
    { 
      title: "Delivering on the Goal", 
      desc: "We maintain ongoing collaboration and apply strict management to ensure functional and architectural alignment.",
      link: "Learn more: Organizing communication, Eliciting requirements"
    },
    { 
      title: "Effective Cost Management", 
      desc: "Precise estimates and budget discipline to meet strategic goals even under constraints.",
      link: "Learn more: Cost estimation and management"
    },
    { 
      title: "Risk Identification", 
      desc: "Proactive identification and addressing of operational, technological, and business risks.",
      link: "Learn more: Risk management"
    },
    { 
      title: "Balanced Rigidity & Flexibility", 
      desc: "Maintaining a work plan while staying flexible for emerging risks and requirements.",
      link: "Learn more: Change management"
    },
    { 
      title: "Task Prioritization", 
      desc: "Integrating strategic planning with agile management using tools like Jira or Asana.",
      link: "Focus on high-priority tasks"
    },
    { 
      title: "Stakeholder Reporting", 
      desc: "Regular tracking of success metrics and KPIs with clear, concise progress reports.",
      link: "Learn more: Project success management"
    }
  ];

  const appIntegrationSteps = [
    { title: "Analysis", desc: "Analyzing applications, estimating ROI, and defining business metrics.", duration: "1-3 Weeks" },
    { title: "Design", desc: "Mapping workflows, designing architecture, and choosing integration approaches.", duration: "1-3 Weeks" },
    { title: "Implementation", desc: "Code-level changes, connecting apps (API or Message-based), and testing.", duration: "Variable" }
  ];

  const managedServicesScope = [
    { title: "Administration", desc: "Configuration, high availability, backups, and log investigation.", icon: Settings },
    { title: "24/7 Monitoring", desc: "Predicting and preventing issues using CloudWatch, Zabbix, or Nagios.", icon: Activity },
    { title: "Usage Optimization", desc: "Right-sizing services and utilizing capacities more efficiently.", icon: TrendingUp },
    { title: "Cybersecurity", desc: "Network architecture, intrusion detection, and vulnerability scans.", icon: ShieldCheck },
    { title: "Compliance", desc: "Regular checks for HIPAA, GDPR, ISO 27001, and PCI DSS.", icon: FileText },
    { title: "Infrastructure Evolution", desc: "Planning and implementing changes without downtime.", icon: RefreshCw }
  ];

  const industries = [
    "Healthcare", "Banking", "Insurance", "Lending", "Investment", "Retail", 
    "Manufacturing", "Professional Services", "Oil and Gas", "Telecoms", 
    "Logistics & Transportation", "Engineering & Construction"
  ];

  const migrationSteps = [
    { title: "Defining Scope", desc: "Analyzing infrastructure elements, interdependencies, and data models.", duration: "1-2 Weeks" },
    { title: "Strategy & Model", desc: "Choosing between Rehosting, Replatforming, Repurchasing, or Refactoring.", duration: "3-4 Weeks" },
    { title: "Project Planning", desc: "Developing resource plans, timelines, and risk mitigation strategies.", duration: "1-2 Weeks" },
    { title: "Execution", desc: "Creating production environments and migrating workloads and data.", duration: "10-12 Weeks" },
    { title: "Test & Optimize", desc: "Performance testing, compliance audits, and cloud monitoring setup.", duration: "3-4 Weeks" }
  ];

  const migrationSoftware = [
    { category: "Discovery & Planning", tools: ["AWS Application Discovery Service", "Migration Evaluator"] },
    { category: "Migration Execution", tools: ["AWS Application Migration Service", "AWS Database Migration Service"] },
    { category: "Data Transfer", tools: ["AWS Snow Family", "AWS DataSync", "AWS Transfer Family"] }
  ];

  const integrationRoles = [
    "Project Manager", "Solution Architect", "AWS Developer", "DevOps Engineer", "QA Engineer"
  ];

  const managedPricing = [
    { model: "Per-resource", desc: "Monthly fee based on the number of managed AWS instances/services." },
    { model: "Fixed monthly fee", desc: "Predetermined fee for a defined scope of managed services." },
    { model: "Tiered pricing", desc: "Fee based on the volume of data or number of users." }
  ];

  const featuredInsights = [
    { title: "AWS Migration: The Essence", desc: "A guide to duration, steps, costs, and team roles.", icon: FileText },
    { title: "Cloud Infrastructure Setup", desc: "Best practices for a secure and scalable AWS environment.", icon: Layers },
    { title: "Healthcare Data Warehouse", desc: "Case study on building a HIPAA-compliant DWH on AWS.", icon: Microscope }
  ];

  const teamRoles = [
    { role: "AWS Architect", skills: "Cloud architecture, security, scalability" },
    { role: "DevOps Engineer", skills: "CI/CD, automation, monitoring" },
    { role: "AWS Developer", skills: "Serverless, APIs, database integration" },
    { role: "Security Specialist", skills: "Compliance, encryption, IAM" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#232F3E] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#FF9900] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Cloud size={14} className="animate-pulse" /> AWS Select Tier Services Partner
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Individually Superior. <br/> <span className="text-[#FF9900]">Together Unmatched.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              GnJ Worldwide offers end-to-end services to deliver AWS-based solutions that drive digital transformation and bring enterprise-wide business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#FF9900] text-[#232F3E] px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center group hover:bg-[#ffac33]">
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
            <div className="relative z-10 bg-[#19222d] p-10 rounded-[3rem] border border-slate-700 shadow-2xl overflow-hidden group">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Terminal size={20} />
                    <span className="font-mono text-sm">AWS Infrastructure Monitor</span>
                  </div>
                  <span className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest">
                    <Activity size={14} className="animate-pulse" /> Healthy
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Compute Efficiency", val: 88, color: "bg-blue-500" },
                    { label: "Storage Optimization", val: 72, color: "bg-[#FF9900]" },
                    { label: "Network Latency", val: 15, color: "bg-green-500" }
                  ].map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>{metric.label}</span>
                        <span>{metric.val}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.val}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                          className={`h-full ${metric.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-[#232F3E] rounded-2xl border border-slate-700">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Uptime SLA</p>
                    <p className="text-lg font-bold text-[#FF9900]">99.99%</p>
                  </div>
                  <div className="p-4 bg-[#232F3E] rounded-2xl border border-slate-700">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Cost Savings</p>
                    <p className="text-lg font-bold text-blue-400">30-70%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Experienced in All Major AWS Technologies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive expertise across the entire AWS ecosystem.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((cat, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white text-[#FF9900] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#FF9900] group-hover:text-white transition-all">
                  <cat.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckCircle2 size={14} className="text-[#FF9900]" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How GnJ Worldwide Makes AWS Work for You</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">End-to-end services to drive your AWS initiatives to success.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="w-16 h-16 bg-slate-50 text-[#FF9900] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
                <div className="space-y-3 mb-10 flex-grow">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" /> {benefit}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center bg-[#232F3E] text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all group">
                  {service.cta} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* RDS Section */}
          <motion.div {...fadeIn} className="mt-20 p-12 bg-[#232F3E] text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9900] rounded-full blur-[100px] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-[#FF9900]">Amazon RDS Services</h3>
              <p className="text-slate-300 mb-10 leading-relaxed max-w-3xl">
                GnJ Worldwide works with seven Amazon RDS database engines to build fast, secure, and highly available cloud-native solutions.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rdsServices.map((service, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <h4 className="font-bold mb-2 text-[#FF9900]">{service.title}</h4>
                    <p className="text-sm text-slate-400">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Management Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How We Manage Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Our team includes over 40 certified project managers (PSM, PMP, PMI-ACP) dedicated to driving your AWS initiative to success.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectManagement.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-[#FF9900] transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                <p className="text-xs font-bold text-[#FF9900]">{item.link}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Integration Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Application Integration on AWS</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Reliable, secure, and convenient integrations using SNS, SQS, API Gateway, and EventBridge.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {appIntegrationSteps.map((step, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-[#FF9900] font-bold text-sm mb-2 uppercase tracking-widest">{step.duration}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-white rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-bold mb-6">Integration Consulting</h3>
              <ul className="space-y-4">
                {["Architecture design", "Compliance (HIPAA, SOC2)", "Roadmap planning", "Legacy modifications"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-[#FF9900]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-white rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-bold mb-6">Integration Implementation</h3>
              <ul className="space-y-4">
                {["API development", "Event-driven setup", "Workflow automation", "Support & Evolution"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-[#FF9900]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">AWS Managed Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">End-to-end management for non-IT enterprises and SaaS providers.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {managedServicesScope.map((item, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <item.icon className="text-[#FF9900] mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-bold mb-8">Pricing Models</h3>
              <div className="space-y-6">
                {managedPricing.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <DollarSign size={20} className="text-[#FF9900]" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{item.model}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 bg-[#232F3E] text-white rounded-[3rem]">
              <h3 className="text-2xl font-bold mb-8 text-[#FF9900]">Who It's For</h3>
              <div className="space-y-4">
                {[
                  "Non-IT enterprises focused on core business.",
                  "SaaS providers needing 24/7 infrastructure support.",
                  "Companies with complex AWS environments.",
                  "Businesses requiring strict compliance management."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={18} className="text-[#FF9900]" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#232F3E] text-white p-12 rounded-[3rem] relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Buy AWS from GnJ Worldwide?</h3>
                <p className="text-slate-400 max-w-xl">We go beyond billing. Get certified architects, DevOps engineers, and custom solutions with built-in cost efficiency.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-sm font-bold">Optimizing Infrastructure</div>
                <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-sm font-bold">Expert Support</div>
                <div className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-sm font-bold">Custom Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Transformation Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Using AWS to Transform Every Major Industry</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Excelled experience across a wide range of industries.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#FF9900] hover:text-[#232F3E] hover:border-[#FF9900] transition-all cursor-default font-bold"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">5 Steps of AWS Migration</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">A distilled, iterative approach to moving your infrastructure to the cloud.</p>
          </motion.div>

          <div className="space-y-8 mb-20">
            {migrationSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center p-10 bg-slate-50 rounded-[3rem] border border-slate-200 relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF9900]"></div>
                <div className="w-20 h-20 bg-white text-[#FF9900] rounded-3xl flex items-center justify-center text-3xl font-bold shadow-sm shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    <span className="px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-widest">
                      <Clock size={12} className="inline mr-1" /> {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-900 text-white rounded-[3rem]">
              <h3 className="text-2xl font-bold mb-8 text-[#FF9900]">Recommended Migration Software</h3>
              <div className="space-y-6">
                {migrationSoftware.map((item, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">{item.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, j) => (
                        <span key={j} className="px-3 py-1 bg-white/10 rounded-lg text-xs">{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200">
              <h3 className="text-2xl font-bold mb-8">Migration Costs</h3>
              <div className="space-y-4">
                {[
                  { t: "Planning & Design", d: "Architecture, strategy, and roadmap development." },
                  { t: "Infrastructure Setup", d: "AWS resource provisioning and configuration." },
                  { t: "Refactoring", d: "Code changes for cloud-native optimization." },
                  { t: "Data Migration", d: "Secure transfer and validation of datasets." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 bg-[#FF9900] rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-bold text-slate-900">{item.t}</p>
                      <p className="text-sm text-slate-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value & Consulting Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-8">What You Get from AWS Consulting</h2>
              <div className="space-y-6">
                {[
                  "Project feasibility assessment with TCO/ROI reports",
                  "Design of cloud architectures for apps and DWH",
                  "Detailed migration strategy and risk management plan",
                  "Knowledge transfer to DevOps and IT support teams",
                  "Guidance on operating procedures and policies",
                  "Infrastructure configuration and code reviews"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 bg-yellow-50 text-[#FF9900] rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold mb-8">Tangible Value</h2>
              <div className="grid gap-6">
                {[
                  { title: "Reduced Costs", desc: "Cut development efforts and resource consumption through DevOps and native services.", icon: DollarSign },
                  { title: "Fault-Tolerant Operation", desc: "Failsafe app architectures and performance management workflows.", icon: Activity },
                  { title: "Enhanced Security", desc: "Proper adjustment of AWS-driven environment on component and access levels.", icon: ShieldCheck }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <item.icon className="text-[#FF9900] mb-4" size={32} />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Advance Your Cloud Processes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Real results from real AWS initiatives.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Performance Boost", val: "100x", desc: "Faster reporting after migrating analytics systems." },
              { title: "Reliability Gains", val: "98%", desc: "Fewer runtime errors and zero-downtime migration." },
              { title: "Cost Savings", val: "30-70%", desc: "Reduction in monthly AWS infrastructure bills." }
            ].map((metric, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-slate-900 text-white rounded-[3rem] text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9900] rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-lg font-bold text-slate-400 mb-4">{metric.title}</h3>
                <div className="text-6xl font-bold text-[#FF9900] mb-6">{metric.val}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Insights</h2>
            <p className="text-slate-600">Expert knowledge from our AWS consultants.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredInsights.map((insight, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-md transition-all">
                <insight.icon className="text-[#FF9900] mb-4" size={24} />
                <h3 className="font-bold mb-2">{insight.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{insight.desc}</p>
                <Link to="#" className="text-[#FF9900] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-8">Our AWS Experts</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Our team consists of certified AWS professionals who bring deep technical expertise to every project. We ensure your infrastructure is built to the highest standards of the AWS Well-Architected Framework.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {teamRoles.map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-1">{item.role}</h4>
                    <p className="text-xs text-slate-500">{item.skills}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <div className="aspect-square bg-[#232F3E] rounded-[3rem] overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/aws-team/800/800" 
                  alt="AWS Team" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232F3E] to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#FF9900] rounded-full flex items-center justify-center font-bold text-[#232F3E]">15+</div>
                    <p className="text-sm font-bold">Years of Cloud Experience</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">50+</div>
                    <p className="text-sm font-bold">AWS Certifications</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#232F3E] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,0,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Cloud?</h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Our certified AWS architects and DevOps engineers are ready to help you architect, migrate, and optimize your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="inline-flex items-center bg-[#FF9900] text-[#232F3E] font-bold py-5 px-12 rounded-2xl hover:bg-[#ffac33] transition-all shadow-2xl transform hover:-translate-y-1 group">
              Discuss Your AWS Needs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <div className="inline-flex items-center bg-white/5 border border-white/10 text-white font-bold py-5 px-12 rounded-2xl hover:bg-white/10 transition-all">
              <Calculator className="mr-2" size={20} /> Get Cost Estimate
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwsPage;