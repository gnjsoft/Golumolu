import React, { useEffect, useState } from 'react';
import { 
  Cloud, 
  ArrowRight, 
  Check, 
  BarChart3, 
  Shield, 
  Box, 
  Zap, 
  Globe, 
  Lock, 
  Search, 
  Target, 
  Settings, 
  Layers,
  Cpu,
  Database,
  Network,
  BrainCircuit,
  Terminal,
  Server,
  Workflow,
  ShieldCheck,
  Layout
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const GoogleConsultingPage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShow(true);
  }, []);

  const allServices = [
    {
      category: "Compute",
      icon: Cpu,
      color: "text-blue-600",
      bg: "bg-blue-50",
      services: [
        { name: "Compute Engine", desc: "Scalable virtual machines with custom configurations and high-performance computing." },
        { name: "GKE", desc: "Enterprise-grade managed Kubernetes for containerized application orchestration." },
        { name: "Cloud Run", desc: "Fully managed serverless platform for running containerized applications." },
        { name: "Cloud Functions", desc: "Event-driven serverless functions for building microservices." }
      ]
    },
    {
      category: "Storage & Databases",
      icon: Database,
      color: "text-green-600",
      bg: "bg-green-50",
      services: [
        { name: "Cloud Storage", desc: "Durable and scalable object storage for unstructured data." },
        { name: "Cloud SQL", desc: "Managed relational database service for MySQL, PostgreSQL, and SQL Server." },
        { name: "Cloud Spanner", desc: "Globally distributed, strongly consistent relational database." },
        { name: "Firestore", desc: "NoSQL document database built for automatic scaling and high performance." }
      ]
    },
    {
      category: "Data & Analytics",
      icon: BarChart3,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      services: [
        { name: "BigQuery", desc: "Serverless data warehouse for petabyte-scale analytics." },
        { name: "Pub/Sub", desc: "Ingest and deliver events for stream analytics and microservices." },
        { name: "Dataflow", desc: "Unified stream and batch data processing service." },
        { name: "Looker", desc: "Modern BI and data modeling platform for actionable insights." }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: BrainCircuit,
      color: "text-red-600",
      bg: "bg-red-50",
      services: [
        { name: "Vertex AI", desc: "Unified platform for training and deploying ML models." },
        { name: "AutoML", desc: "Build custom ML models with minimal effort and expertise." },
        { name: "Vision AI", desc: "Derive insights from images with pre-trained models." },
        { name: "Natural Language AI", desc: "Analyze and derive meaning from unstructured text." }
      ]
    },
    {
      category: "Networking",
      icon: Network,
      color: "text-purple-600",
      bg: "bg-purple-50",
      services: [
        { name: "VPC", desc: "Managed networking for your cloud resources." },
        { name: "Cloud Load Balancing", desc: "High-performance, scalable load balancing." },
        { name: "Cloud CDN", desc: "Low-latency content delivery network." },
        { name: "Cloud DNS", desc: "Reliable, resilient, low-latency DNS service." }
      ]
    },
    {
      category: "Operations & Security",
      icon: ShieldCheck,
      color: "text-slate-600",
      bg: "bg-slate-50",
      services: [
        { name: "Cloud Monitoring", desc: "Gain visibility into the performance and health of your apps." },
        { name: "Cloud IAM", desc: "Fine-grained access control for cloud resources." },
        { name: "Security Command Center", desc: "Comprehensive security management and risk platform." },
        { name: "Cloud Build", desc: "Serverless CI/CD platform for building and testing." }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-50 text-slate-900 py-32 px-4 flex flex-col items-center text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-center bg-no-repeat pointer-events-none"
          style={{ 
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg')", 
            backgroundSize: '1000px' 
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-slate-50/80"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mx-auto w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl"
          >
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-16 h-16 object-contain" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
              Google Cloud Consulting
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-2xl"
          >
              Unlock the power of GCP with our certified experts. We help you navigate the entire Google Cloud ecosystem.
          </motion.p>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="max-w-7xl mx-auto px-4 py-24">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our GCP Capabilities</h2>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
             {[
                 { title: "Cloud Migration", icon: Cloud, color: "text-blue-500", delay: 0.1 },
                 { title: "BigQuery Analytics", icon: BarChart3, color: "text-yellow-500", delay: 0.2 },
                 { title: "Kubernetes (GKE)", icon: Box, color: "text-blue-500", delay: 0.3 },
                 { title: "AI & Machine Learning", icon: Zap, color: "text-red-500", delay: 0.4 },
                 { title: "Google Workspace", icon: Globe, color: "text-green-500", delay: 0.5 },
                 { title: "Security & IAM", icon: Shield, color: "text-slate-500", delay: 0.6 }
             ].map((item, i) => (
                 <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                    className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                 >
                     <div className={`w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                        <item.icon size={24} />
                     </div>
                     <h3 className="font-bold text-xl mb-3 text-slate-800">{item.title}</h3>
                     <p className="text-slate-500 leading-relaxed">
                        Specialized implementation and optimization services tailored to your business needs.
                     </p>
                 </motion.div>
             ))}
         </div>
      </section>

      {/* --- ALL SERVICES SECTION --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Google Cloud Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We provide end-to-end consulting and implementation across the entire Google Cloud portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 p-8 rounded-[2rem] backdrop-blur-sm hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl ${group.bg} ${group.color} flex items-center justify-center shadow-lg`}>
                    <group.icon size={24} />
                  </div>
                  <h4 className="text-2xl font-bold">{group.category}</h4>
                </div>
                <div className="space-y-6">
                  {group.services.map((service, i) => (
                    <div key={i} className="group">
                      <h5 className="font-bold text-blue-400 mb-1 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        {service.name}
                      </h5>
                      <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE GOOGLE CLOUD --- */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose Google Cloud?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Google Cloud Platform (GCP) offers unparalleled infrastructure, data analytics, and machine learning capabilities. As your consulting partner, we help you leverage these tools to innovate faster and scale efficiently.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Industry-Leading AI & ML", desc: "Access the same machine learning infrastructure that powers Google's own products.", icon: Zap, color: "text-red-500", bg: "bg-red-50" },
                  { title: "Global Network Infrastructure", desc: "Benefit from Google's massive, highly secure, and low-latency global network.", icon: Globe, color: "text-blue-500", bg: "bg-blue-50" },
                  { title: "Advanced Data Analytics", desc: "Process petabytes of data in seconds with BigQuery and other serverless analytics tools.", icon: BarChart3, color: "text-yellow-500", bg: "bg-yellow-50" },
                  { title: "Robust Security", desc: "Protect your data with Google's custom-built hardware and comprehensive security protocols.", icon: Lock, color: "text-green-500", bg: "bg-green-50" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                        <item.icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-red-50 rounded-[3rem] transform rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                alt="Google Cloud Infrastructure" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Check size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">Certified</div>
                  <div className="text-sm text-slate-500 font-medium">GCP Professionals</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CONSULTING PROCESS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Consulting Process</h2>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              A structured, proven approach to ensure your Google Cloud journey is seamless, secure, and optimized for ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "We analyze your current infrastructure, workloads, and business goals to determine GCP readiness.",
                icon: Search
              },
              {
                step: "02",
                title: "Architecture Design",
                desc: "Our certified architects design a scalable, secure, and cost-effective GCP environment.",
                icon: Target
              },
              {
                step: "03",
                title: "Migration & Deployment",
                desc: "We execute the migration plan with minimal downtime, utilizing tools like Migrate for Compute Engine.",
                icon: Settings
              },
              {
                step: "04",
                title: "Optimization",
                desc: "Continuous monitoring, cost optimization, and performance tuning to maximize your cloud investment.",
                icon: Layers
              }
            ].map((process, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="text-5xl font-extrabold text-slate-100 absolute top-6 right-6 group-hover:text-blue-50 transition-colors">{process.step}</div>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <process.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{process.title}</h3>
                <p className="text-slate-600 relative z-10 leading-relaxed">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-white text-center">
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
         >
           <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1">
              Discuss your GCP Project <ArrowRight className="ml-2" size={20} />
           </Link>
         </motion.div>
      </section>
    </div>
  );
};

export default GoogleConsultingPage;