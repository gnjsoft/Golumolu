import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  BrainCircuit, Truck, Activity, Settings, Map, Briefcase, Wallet, 
  MessageSquare, Eye, ChevronRight, CheckCircle2, ShieldCheck, 
  Factory, Zap, Globe, Cpu, Database, PieChart, LineChart, 
  Layout, Search, Layers, Bot, Terminal, FileText, Smartphone,
  Users, TrendingUp, FlaskConical, Binary, Share2, MousePointer2,
  LifeBuoy, Gauge, Network, ArrowUpRight
} from 'lucide-react';

const MachineLearningPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const useCaseCategories = [
    {
      title: "Supply Chain & Logistics",
      icon: Truck,
      items: [
        { label: "Demand Forecasting", desc: "Inventory planning, management, and preventive alerting." },
        { label: "Supplier Selection", desc: "Relationship management based on smart selection algorithms." },
        { label: "Logistics Optimization", desc: "Predicting vehicle demand and fuel consumption patterns." },
        { label: "Traceability", desc: "Identifying fraudulent transactions and credential abuse." }
      ]
    },
    {
      title: "Production & Maintenance",
      icon: Factory,
      items: [
        { label: "Manufacturing Defects", desc: "Automated recognition and reduction of output loss." },
        { label: "Predictive Maintenance", desc: "Predicting remaining useful life and failure probability." },
        { label: "Power Forecasting", desc: "Forecasting and optimizing energy consumption." },
        { label: "Anomalous Behavior", desc: "Flagging deviations in process parameters early." }
      ]
    },
    {
      title: "Finance & Operations",
      icon: Wallet,
      items: [
        { label: "Financial Planning", desc: "Algorithmic trading, hedging, and dynamic pricing." },
        { label: "Fraud Detection", desc: "Detecting malicious financial transactions in real-time." },
        { label: "Operational Intelligence", desc: "Recognizing bottlenecks and forecasting performance metrics." },
        { label: "Wealth Management", desc: "Intelligent advisory and financial document processing." }
      ]
    },
    {
      title: "Customer & Marketing",
      icon: Users,
      items: [
        { label: "Customer Analytics", desc: "Sentiment analysis and behavior prediction models." },
        { label: "Recommendation Engines", desc: "Context-aware marketing and digital assistants." },
        { label: "Sales Forecasting", desc: "Predicting market trends and individual sales trajectories." }
      ]
    },
    {
      title: "NLP & Computer Vision",
      icon: Eye,
      items: [
        { label: "Speech & Text", desc: "Chatbots, sentiment analysis, and speech-to-text conversion." },
        { label: "Medical Vision", desc: "Complex image analysis for diagnostics and verification." },
        { label: "Retail Monitoring", desc: "Tracking customer patterns and biometric verification." }
      ]
    }
  ];

  const servicesScope = [
    { num: "1", title: "Business Analysis", desc: "Defining needs, analyzing existing environments, and designing implementation roadmaps." },
    { num: "2", title: "Technical Design", desc: "Architecting scalable systems and selecting optimal technology frameworks." },
    { num: "3", title: "Data Preparation", desc: "Exploratory analysis, cleansing, and defining evaluation criteria." },
    { num: "4", title: "Implementation", desc: "Model exploration, refinement, testing, and acceptable fine-tuning." },
    { num: "5", title: "Reporting", desc: "Delivering outputs in agreed formats and user self-service integration." },
    { num: "6", title: "Maintenance", desc: "Continuous monitoring and adding new data for deeper insights." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-indigo-950 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500 rounded-full blur-[150px] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-bold uppercase tracking-wider mb-8">
              <BrainCircuit size={16} /> Intelligent Automation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              Machine Learning <span className="text-indigo-400">Consulting</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-10 leading-relaxed font-light">
              We help you seamlessly avail machine learning capabilities for predictive analytics, process automation, and cognitive decision-making. Leverage decades of ML expertise to build solutions that learn and evolve.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/40 transform hover:-translate-y-1">
                Discuss My ML Solution <ArrowUpRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Bento */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Machine Learning Use Cases</h2>
            <p className="text-slate-600 max-w-2xl mx-auto italic">Eager to share our expert knowledge to help you seamlessly avail ML for your specific business needs.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {useCaseCategories.map((cat, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className={`${idx === 0 || idx === 4 ? 'lg:col-span-2' : ''} bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <cat.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{cat.title}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {cat.items.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                        {item.label}
                      </div>
                      <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Services */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold mb-8">Scope of Our ML Services</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Depending on your needs and current ML environment (if any), our machine learning consulting services may include:
              </p>
              <div className="bg-indigo-900 p-8 rounded-3xl text-white">
                <h4 className="font-bold text-xl mb-6">Choose Your Option</h4>
                <div className="space-y-4">
                  {[
                    { title: "ML Consulting", desc: "Strategic guidance for the whole development cycle." },
                    { title: "Implementation", desc: "Designing, developing, and launching smooth solutions." },
                    { title: "ML Support", desc: "Fixing inefficiencies and increasing insight quality." }
                  ].map((opt, i) => (
                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer transition-colors group">
                       <h5 className="font-bold text-indigo-400 mb-1 flex items-center justify-between">
                         {opt.title} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                       </h5>
                       <p className="text-xs text-slate-300">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {servicesScope.map((service, idx) => (
                <motion.div key={idx} {...fadeIn} className="relative p-8 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="absolute top-4 right-6 text-6xl font-black text-indigo-100 opacity-50 z-0">{service.num}</div>
                  <h4 className="text-xl font-bold mb-4 relative z-10">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics Case Study */}
      <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-indigo-600/5 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold tracking-widest uppercase mb-4 border border-blue-500/30">ML in Action</div>
            <h2 className="text-4xl md:text-5xl font-bold">Diagnostics Software Acceleration</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-slate-400 leading-relaxed">
                GnJ Worldwide helped a US biotech company accelerate the launch of its lung cancer detection software. By turning a proprietary R-based ML algorithm into a full-fledged desktop application in just <span className="text-white font-bold">two months</span>.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-slate-800 rounded-3xl border border-slate-700">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">92%</div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Sensitivity</div>
                </div>
                <div className="p-6 bg-slate-800 rounded-3xl border border-slate-700">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">87%</div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Specificity</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "IVDR & FDA compliance documentation",
                  "C++ core business logic implementation",
                  "HL7-based laboratory integration",
                  "100% stable diagnostic report generation"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-500" size={20} />
                    <span className="text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-indigo-900/30 p-1 rounded-3xl backdrop-blur-sm">
               <div className="bg-slate-900 border border-indigo-500/20 rounded-[1.4rem] p-8">
                  <h4 className="text-indigo-400 font-bold mb-6 text-sm uppercase">Transformation Journey</h4>
                  <div className="space-y-8 relative">
                    <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-indigo-500/20"></div>
                    <div className="relative pl-12">
                       <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm">1</div>
                       <h5 className="font-bold mb-1">Algorithm Maturity</h5>
                       <p className="text-sm text-slate-400">Proprietary R-script limited to lab environments.</p>
                    </div>
                    <div className="relative pl-12">
                       <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm">2</div>
                       <h5 className="font-bold mb-1">High-Perf Core</h5>
                       <p className="text-sm text-slate-400">Rewriting logic in C++ for cytometry data speed.</p>
                    </div>
                    <div className="relative pl-12">
                       <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm">3</div>
                       <h5 className="font-bold mb-1">Full Launch</h5>
                       <p className="text-sm text-slate-400">LIS integrated & FDA compliant solution ready for clinical use.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Security */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-8">KPIs-Based Service Delivery</h3>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We follow project management practices polished for 36 years to drive projects to their goals regardless of time and budget constraints.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Output Quality", items: ["Forecast accuracy", "Missing alerts rate"] },
                  { title: "Business Results", items: ["Churn decrease", "Cost reduction"] },
                  { title: "User Satisfaction", items: ["UX feedback scores", "Self-service adoption"] },
                  { title: "In-Value Insights", items: ["High/Avg/Low value classification"] }
                ].map((kpi, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h5 className="font-bold text-indigo-600 mb-4">{kpi.title}</h5>
                    <ul className="space-y-2">
                       {kpi.items.map((item, i) => (
                         <li key={i} className="text-xs text-slate-500 font-medium italic">• {item}</li>
                       ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-slate-200 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 text-indigo-100"><ShieldCheck size={120} /></div>
               <h3 className="text-3xl font-bold mb-8 relative z-10">Guaranteed Data Security</h3>
               <p className="text-slate-600 mb-10 relative z-10">To secure your data utilized for machine learning projects, we implement enterprise-grade protection.</p>
               <div className="space-y-6 relative z-10">
                 {[
                   { label: "Secure Cloud Facilities", desc: "Processing on Azure, AWS, and Google Cloud with strict isolation." },
                   { label: "24/7 Monitoring", desc: "In-house data security monitoring for potential threats." },
                   { label: "Secure Transfer", desc: "FTP and VPN methods controlled via regular health checks." }
                 ].map((s, idx) => (
                   <div key={idx} className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                       <CheckCircle2 size={20} />
                     </div>
                     <div>
                       <div className="font-bold text-slate-900">{s.label}</div>
                       <p className="text-sm text-slate-500">{s.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Methods */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-16 italic">Comprehensive stack for reliable and performant AI solutions.</p>
            
            <div className="grid md:grid-cols-2 gap-16 mb-20 text-left">
              <div>
                 <h4 className="text-xl font-bold mb-8 border-b pb-4">Machine Learning Methods</h4>
                 <div className="grid gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h5 className="font-bold text-indigo-600 mb-2">Classical ML</h5>
                      <p className="text-sm text-slate-500">Supervised, Unsupervised, and Reinforcement learning methods (SVM, K-means, Q-learning, SARSA).</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-indigo-100">
                      <h5 className="font-bold text-indigo-600 mb-2">Deep Learning</h5>
                      <p className="text-sm text-slate-500">CNN, RNN (LSTM/GRU), Autoencoders (VAE/DAE), GANs, and Deep Q-Networks.</p>
                    </div>
                 </div>
              </div>
              <div>
                 <h4 className="text-xl font-bold mb-8 border-b pb-4">Tech Stack Highlights</h4>
                 <div className="space-y-6">
                    <div>
                      <h5 className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-3">Platforms</h5>
                      <div className="flex flex-wrap gap-2">
                        {["Azure ML", "AWS SageMaker", "Google AI Platform", "Watson"].map(t => (
                          <span key={t} className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-3">Frameworks</h5>
                      <div className="flex flex-wrap gap-2">
                        {["TensorFlow", "Keras", "PyTorch", "Caffe", "MXNet", "Mahout"].map(t => (
                          <span key={t} className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-3">Languages</h5>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "Scala", "Java", "C++", "R"].map(t => (
                          <span key={t} className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* Pricing / Cost */}
      <section className="py-24 px-4 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-6 italic">Investment Overview</h2>
              <p className="text-indigo-100 leading-relaxed mb-8">
                The cost of machine learning services varies based on project scope. Yearly support typically amounts to 15–25% of development costs.
              </p>
              <button className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-xl hover:bg-slate-50 transition-colors">
                Calculate My Costs
              </button>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20">
                <h4 className="text-xl font-bold mb-2">Separate ML Component</h4>
                <div className="text-5xl font-bold mb-6 whitespace-nowrap">₹25L – ₹1.6Cr</div>
                <p className="text-sm text-indigo-100">Strategic modules, specific forecasting algorithms, or standalone models.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20">
                <h4 className="text-xl font-bold mb-2">End-to-End Solution</h4>
                <div className="text-5xl font-bold mb-6 whitespace-nowrap">₹1.6Cr – ₹5Cr+</div>
                <p className="text-sm text-indigo-100">Full-cycle system development from architecture to training and global launch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Turn to ML Now */}
      <section className="py-24 px-4 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Implementing ML Brings <span className="text-indigo-600 underline">Considerable Benefits</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Employee Productivity", desc: "Automating repetitive tasks with computer vision and NLP." },
              { title: "Customer Experience", desc: "AI-powered chatbots facilitating real-time communication." },
              { title: "Accelerated Sales", desc: "Improved opportunity insights and better lead prioritization." },
              { title: "Maintenance Savings", desc: "Predictive monitoring preventing expensive equipment failures." },
              { title: "Production Efficiency", desc: "Demand forecasting and production process optimization." },
              { title: "Competitive Edge", desc: "Availing ML capabilities before your industry competitors do." }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed italic">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <motion.div whileHover={{ scale: 1.02 }} className="inline-block p-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl">
              <div className="px-12 py-8 bg-white rounded-[1.4rem] text-center max-w-2xl mx-auto border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Request ML Services Today</h3>
                <p className="text-slate-500 mb-8">Turn to GnJ Worldwide’s consultants to get powerful machine learning capabilities now.</p>
                <button className="bg-slate-900 text-white font-bold py-4 px-12 rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-2 mx-auto">
                  Contact Our ML Experts <MousePointer2 size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachineLearningPage;
