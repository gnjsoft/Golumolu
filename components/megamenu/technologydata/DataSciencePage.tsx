import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Database, BrainCircuit, LineChart, Activity, Truck, Factory, Cpu, 
  Layers, Globe, Users, BarChart, PieChart, ShieldCheck, Search, 
  FileText, FileCode, Settings, Zap, CheckCircle2, Wallet, Stethoscope, Eye, 
  FlaskConical, Boxes, RefreshCw, Cloud, Lock, Server, HardDrive, 
  ClipboardList, Map, Filter, Clock, ArrowUpRight, TrendingUp, 
  Binary, Terminal, Microscope, Share2, MousePointer2, Briefcase, 
  Gauge, Network, LifeBuoy
} from 'lucide-react';

const DataSciencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const useCases = [
    { title: "Operational intelligence", icon: Activity, desc: "Optimizing process performance by detecting deviations and undesirable patterns using performance prediction and root-cause analysis." },
    { title: "Supply chain management", icon: Truck, desc: "Reliable demand predictions, inventory optimization recommendations, and supplier risk assessment." },
    { title: "Product quality", icon: Factory, desc: "Proactively identifying production process deviations affecting product quality and process disruptions." },
    { title: "Predictive maintenance", icon: Settings, desc: "Monitoring machinery and reporting on patterns leading to pre-failure and failure states." },
    { title: "Dynamic route optimization", icon: Map, desc: "ML-based route optimization based on maintenance, GPS, traffic, and weather data." },
    { title: "Personalization", icon: Users, desc: "Identifying customer behavior patterns and segmentation to build recommendation engines and personalized services." },
    { title: "Customer churn", icon: TrendingUp, desc: "Identifying potential churners by building predictions based on customers' behavior." },
    { title: "Sales process optimization", icon: Briefcase, desc: "Advanced lead scoring, next-step recommendations, and alerting on negative sentiments." },
    { title: "Financial risk management", icon: Wallet, desc: "Forecasting project earnings, evaluating financial risks, and assessing creditworthiness." },
    { title: "Patient treatment", icon: Stethoscope, desc: "Identifying at-risk patients, enabling personalized treatment, and predicting symptom development." },
    { title: "Image analysis", icon: Eye, desc: "Minimizing human error with automated visual inspection, facial recognition, and counting." }
  ];

  const complementaryServices = [
    { title: "Machine learning consulting", icon: BrainCircuit, desc: "Advising on and developing ML-powered solutions to find hidden patterns in massive data." },
    { title: "Big data services", icon: Database, desc: "Consulting, implementation, and support for real-time processing of huge datasets." },
    { title: "Image analysis services", icon: Eye, desc: "Designing and developing custom image analysis software." },
    { title: "Data mining services", icon: Search, desc: "Retrieving insights from heterogeneous datasets without in-house talent investment." },
    { title: "Business intelligence", icon: BarChart, desc: "Helping companies achieve informed decision-making through data-driven insights." },
    { title: "Data warehousing", icon: Server, desc: "Consolidating disparate data into a single point of truth for enterprise analytics." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              Data Science <span className="text-blue-500">Consulting</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
              Data science services help companies run experiments on their data in search of business insights. As an experienced partner, <span className="text-white font-medium">GnJ Worldwide</span> leverages machine learning, artificial intelligence, and deep learning technologies to meet our clients’ most ambitious analytics needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
                Discuss my case <ArrowUpRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Use Cases We Cover</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <useCase.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-slate-600 leading-relaxed">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8">Complementary Data Science Services We Offer</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our competence and experience are not limited to the described use cases. Drop us a line, and our consultants will outline how data science can be applied in your case.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {complementaryServices.map((service, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:bg-blue-50/50 transition-colors">
                    <div className="text-blue-600 shrink-0"><service.icon size={24} /></div>
                    <div>
                      <h4 className="font-bold mb-1 text-slate-900">{service.title}</h4>
                      <p className="text-sm text-slate-500 leading-snug">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white relative">
                <div className="absolute top-10 right-10 opacity-20"><BrainCircuit size={80} /></div>
                <h3 className="text-3xl font-bold mb-6">Discuss Your Project</h3>
                <p className="text-slate-400 mb-8">Ready to turn information overload into actionable insights? Our team is standing by.</p>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-slate-800 border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full bg-slate-800 border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none" />
                  <textarea placeholder="Tell us about your case..." rows={4} className="w-full bg-slate-800 border-slate-700 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                  <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 font-bold rounded-xl transition-all">Submit Case</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study - Invention Machine */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 border border-blue-500/30">Case Study</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Turning Information Overload into <span className="text-blue-400">Actionable Insights</span></h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                GnJ Worldwide helped Invention Machine create a semantic search engine that transformed how enterprises innovate. By turning vast, unstructured knowledge bases into actionable insights, the solution empowered engineers and researchers to accelerate R&D and maximize ROI.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Semantic indexing of documents",
                  "Precise Subject-Action-Object search",
                  "Automated Cross-Domain search",
                  "R&D cost & time reduction"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-blue-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h4 className="text-blue-400 font-bold mb-4 uppercase text-sm">Client Challenges</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-2 font-medium">1. Huge, heterogeneous knowledge bases</li>
                  <li className="flex gap-2 font-medium">2. Manual information discovery slows innovation</li>
                  <li className="flex gap-2 font-medium">3. Risk of reinventing existing solutions</li>
                </ul>
              </div>
              <div className="bg-blue-900/40 p-8 rounded-2xl border border-blue-800/50">
                <h4 className="text-blue-400 font-bold mb-4 uppercase text-sm">Our Solution Impact</h4>
                <p className="text-slate-300 italic mb-4">"Accelerated idea-to-product conversion through analytics-driven decision support."</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-400">30.6%</div>
                    <div className="text-xs text-slate-500 uppercase">Growth Potential</div>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-400">L1-L3</div>
                    <div className="text-xs text-slate-500 uppercase">System Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How the Data Science Process Unfolds</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A structured approach to transforming raw data into business value.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative">
             <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            {[
              { num: "1", title: "Business needs analysis", items: ["Outlining objectives", "Defining existing issues", "Data deliverables"] },
              { num: "2", title: "Data preparation", items: ["Determining sources", "Data collection", "Cleaning & Transformation"] },
              { num: "3", title: "ML model development", items: ["Optimal techniques selection", "Evaluation criteria", "Training & Deployment"] },
              { num: "4", title: "Evaluation and tuning", items: ["Model accuracy checks", "Hyperparameter tuning", "Validation"] },
              { num: "5", title: "Delivering output", items: ["Reports & Dashboards", "ML-driven applications", "API integrations"] },
              { num: "6", title: "Training & Support", items: ["User & Admin training", "Support consultations", "Iterative evolution"] }
            ].map((step, idx) => (
              <motion.div key={idx} {...fadeIn} transition={{ delay: idx * 0.1 }} className="relative z-10 bg-white p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-600/30">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-slate-500 text-sm italic">
                      <span>•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "Lower Costs", label: "Equipment maintenance", desc: "Due to AI-powered replacement recommendations." },
              { val: "Minimized Errors", label: "Human factor errors", desc: "Due to process automation via custom AI algorithms." },
              { val: "95% Accuracy", label: "Precise image recognition", desc: "Validated ML model for visual inspection." },
              { val: "Sales Increase", label: "Forecasting algorithm", desc: "Case-specific algorithms for demand identification." }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.val}</div>
                <div className="font-bold text-slate-900 mb-2">{benefit.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{benefit.desc}</p>
                <button className="text-blue-600 font-bold text-sm inline-flex items-center group">
                  Check project <ArrowUpRight className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods & Technologies */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Methods and Technologies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Applying proven statistical methods and intricate deep learning techniques.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="bg-slate-50 p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2"><FlaskConical className="text-blue-600" /> Statistics</h4>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2 leading-tight"><span>•</span> Descriptive statistics for summaries</li>
                <li className="flex gap-2 leading-tight"><span>•</span> ARMA and ARIMA for forecasting</li>
                <li className="flex gap-2 leading-tight"><span>•</span> Bayesian inference for failures</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border-2 border-blue-100">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2"><BrainCircuit className="text-blue-600" /> Machine Learning</h4>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2 leading-tight"><span>•</span> Supervised learning (Classification)</li>
                <li className="flex gap-2 leading-tight"><span>•</span> Unsupervised learning (Clustering)</li>
                <li className="flex gap-2 leading-tight"><span>•</span> Reinforcement learning (Engines)</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2"><Binary className="text-blue-600" /> Neural Networks</h4>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-2 leading-tight"><span>•</span> CNN for image analysis</li>
                <li className="flex gap-2 leading-tight"><span>•</span> RNN / LSTM for NLP tasks</li>
                <li className="flex gap-2 leading-tight"><span>•</span> GANs for data generation</li>
                <li className="flex gap-2 leading-tight"><span>•</span> DQN for energy optimization</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "Scala", "Java", "C++", "R", "TensorFlow", "Keras", "Torch", "OpenCV", "Scikit Learn", "Apache Spark", "Matlab"].map((tech) => (
              <span key={tech} className="px-6 py-2 bg-white border border-slate-200 rounded-full text-slate-600 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Estimates */}
      <section className="py-24 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Data Science Initiative Cost</h2>
            <p className="text-blue-100">Estimated project complexity based on service tiers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Separate DS Component</h3>
              <div className="text-5xl font-bold mb-8">₹25L – ₹1.6Cr</div>
              <p className="text-blue-100 mb-8 leading-relaxed">Developing specific modules, algorithms, or predictive components for integration into existing systems.</p>
              <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors">See Cost Breakdown</button>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">End-to-End Development</h3>
              <div className="text-5xl font-bold mb-8">₹1.6Cr – ₹5Cr+</div>
              <p className="text-blue-100 mb-8 leading-relaxed">Full-cycle solution including data warehouse, analytics platform, and integrated DS components.</p>
              <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors">See Cost Breakdown</button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-24 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-4xl font-bold mb-8">Data Visualization Services</h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-8">
                 Transform large and complex datasets into appealing visuals. GnJ Worldwide provides data visualization advisory, implementation, and support services to help you make data-driven decisions promptly.
               </p>
               <div className="space-y-6">
                 {[
                   { title: "Reports & Dashboards", desc: "Interactive tactical and strategic dashboards for C-suite to operational levels." },
                   { title: "Analytics Platform Dev", desc: "Aggregating data via ETL/ELT into centralized repositories with OLAP cubes." },
                   { title: "Visual Optimization", desc: "Upgrading visualizations at architectural, data model, and layer levels." }
                 ].map((s, idx) => (
                   <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                     <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                       <LineChart size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900">{s.title}</h4>
                       <p className="text-sm text-slate-500 italic">{s.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2 bg-slate-50 p-10 rounded-3xl border border-slate-200">
               <h3 className="text-2xl font-bold mb-8 text-slate-900 border-b pb-4">Visualization Techniques</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                 {["Symbol map", "Line chart", "Bar chart", "Pie chart", "Donut chart", "Heat map", "Funnel chart", "Scatterplot", "Sparkline", "Matrix", "Pivot table", "Gauge chart", "Waterfall", "Custom"].map(tech => (
                   <div key={tech} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                     <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                     {tech}
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 bg-orange-600 rounded-2xl text-white">
                  <h4 className="font-bold text-xl mb-2">Watch a BI Demo</h4>
                  <p className="text-orange-100 text-sm mb-6">Discover how we turn raw data into meaningful stories.</p>
                  <button className="bg-white text-orange-600 font-bold px-6 py-2.5 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2">
                    Start Demo <MousePointer2 size={18} />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Management Section */}
      <section className="py-24 px-4 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Data Management Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Ensuring high quality, regulatory compliance, and security throughout the data lifecycle.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: "Data Governance", icon: ShieldCheck },
              { title: "Data Architecture", icon: Cpu },
              { title: "Data Integration", icon: Share2 },
              { title: "Data Quality", icon: CheckCircle2 },
              { title: "Storage Dev", icon: HardDrive },
              { title: "Master Data", icon: Database },
              { title: "Metadata Management", icon: FileCode },
              { title: "Security Protocols", icon: Lock },
              { title: "Migration & Backup", icon: RefreshCw }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center group hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform"><item.icon size={32} /></div>
                <h4 className="font-bold text-slate-800">{item.title}</h4>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-900 rounded-3xl text-white">
              <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Data Quality Standards</h4>
              <ul className="space-y-4 text-blue-100 leading-snug">
                <li>• <strong>Consistency:</strong> No contradictions within stores.</li>
                <li>• <strong>Accuracy:</strong> Reliable and error-free info.</li>
                <li>• <strong>Timeliness:</strong> Real-world representation timing.</li>
                <li>• <strong>Completeness:</strong> Sufficient for business answers.</li>
                <li>• <strong>Uniqueness:</strong> No duplicates in records.</li>
              </ul>
            </div>
            <div className="md:col-span-2">
               <h4 className="text-2xl font-bold mb-8 text-slate-900">Cooperation Models</h4>
               <div className="grid sm:grid-cols-2 gap-6">
                 {[
                   { title: "Consulting", desc: "Expert guidance for choosing optimal tech and TCO/ROI estimates.", link: "Go for consulting" },
                   { title: "Implementation", desc: "Building robust software ensuring full-cycle data management.", link: "Go for implementation" },
                   { title: "Support", desc: "Organizing 99.99% cloud service availability and total security.", link: "Go for support" },
                   { title: "Evolution", desc: "Rearchitecting solutions and auditing software for new capabilities.", link: "Go for evolution" }
                 ].map((model, idx) => (
                   <div key={idx} className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between">
                     <div>
                       <h5 className="font-bold text-lg mb-2">{model.title}</h5>
                       <p className="text-sm text-slate-500 mb-6">{model.desc}</p>
                     </div>
                     <button className="text-blue-600 font-bold text-sm inline-flex items-center group">
                       {model.link} <ArrowUpRight className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                     </button>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Integration Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-600/10 blur-[120px]"></div>
             <div className="relative z-10">
               <h2 className="text-4xl font-bold mb-8">Data Integration Services</h2>
               <p className="text-xl text-slate-400 max-w-4xl mb-12">
                 Consolidate multi-source enterprise data in centralized storage optimized for accuracy and availability. 
                 We offer full-cycle integration from technology consulting to pipeline dev and legacy modernization.
               </p>
               
               <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                   <h3 className="text-2xl font-bold mb-4 text-blue-400 underline underline-offset-8 decoration-2">ETL</h3>
                   <p className="text-sm text-slate-400 mb-6 font-light leading-relaxed">Best for batch processing and structured data like sales reporting solutions.</p>
                   <ul className="space-y-2 text-xs text-slate-500 italic">
                     <li>• Optimized for Batch</li>
                     <li>• Heavy Transformation</li>
                     <li>• Clean Data Loading</li>
                   </ul>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                   <h3 className="text-2xl font-bold mb-4 text-blue-400 underline underline-offset-8 decoration-2">ELT</h3>
                   <p className="text-sm text-slate-400 mb-6 font-light leading-relaxed">Best for real-time and big data processing, like ecommerce inventory synchronization.</p>
                   <ul className="space-y-2 text-xs text-slate-500 italic">
                     <li>• Real-time Streaming</li>
                     <li>• Raw Data Storing</li>
                     <li>• Late Transformation</li>
                   </ul>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                   <h3 className="text-2xl font-bold mb-4 text-blue-400 underline underline-offset-8 decoration-2">Virtualization</h3>
                   <p className="text-sm text-slate-400 mb-6 font-light leading-relaxed">Creating virtual databases for unified views without physically moving data.</p>
                   <ul className="space-y-2 text-xs text-slate-500 italic">
                     <li>• Zero Movement</li>
                     <li>• Real-time View</li>
                     <li>• Hybrid Connectivity</li>
                   </ul>
                 </div>
               </div>

               <div className="mt-16 bg-blue-600/20 border border-blue-500/20 p-8 rounded-3xl grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold">₹58L – ₹1.6Cr</div>
                    <div className="text-xs text-blue-300 uppercase mt-1">Small Companies</div>
                  </div>
                  <div className="text-center border-x border-white/10 px-8">
                    <div className="text-3xl font-bold">₹1.6Cr – ₹3.3Cr</div>
                    <div className="text-xs text-blue-300 uppercase mt-1">Midsize Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">₹3.3Cr – ₹8.3Cr</div>
                    <div className="text-xs text-blue-300 uppercase mt-1">Large Companies</div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Data Quality Assurance (Deep Dive) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <div className="sticky top-28">
                <h2 className="text-3xl font-bold mb-6">Data Quality Assurance</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  GnJ Worldwide handles duplicates and inconsistencies, designs key metrics, and implements robust governance.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-sm mb-1 uppercase text-slate-400">Security Commitment</h5>
                    <p className="text-xs text-slate-500 italic">We practice a three-level security approach including NDA, secure infrastructure, and strict internal policies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-12">
                {[
                  { title: "Managed QA", icon: ClipboardList, desc: "Monthly monitoring, issue resolution, and regular standards definition." },
                  { title: "Assessment", icon: Filter, desc: "Defining thresholds, root cause analysis, and rules implementation." },
                  { title: "DWH Migration", icon: RefreshCw, desc: "Relocating data safely during system upgrades with validation." },
                  { title: "Auditability", icon: Clock, desc: "Ensuring data is accessible and changes are fully traceable." }
                ].map((s, idx) => (
                  <div key={idx} className="group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <s.icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm mb-4">{s.desc}</p>
                    <ul className="text-xs font-bold text-blue-600 flex gap-2">
                      <li>• Consistency</li>
                      <li>• Accuracy</li>
                      <li>• Timeliness</li>
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-20 p-10 bg-slate-900 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-8">Data consolidation in 7 steps</h3>
                <div className="space-y-6">
                  {[
                    "1. Identify objectives (Analytics vs Compliance)",
                    "2. Review data sources to be integrated",
                    "3. Choose optimal integration technique (ETL/ELT)",
                    "4. Develop risk mitigation strategy",
                    "5. Design architectural layers & quality frameworks",
                    "6. Code and test pipelines",
                    "7. Launch and stabilize performance"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-300">
                      <div className="w-6 h-6 rounded-full border border-blue-500 flex items-center justify-center text-[10px] text-blue-400 shrink-0">{i+1}</div>
                      <span className="text-sm font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic text-slate-800">Ready to derive value from <span className="text-blue-600">Complex Data?</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
            Our experts are ready to plan and deliver cutting-edge solutions fully in line with your domain trends.
          </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 px-12 rounded-full transition-all flex items-center gap-2 mx-auto">
            Discuss my case <ArrowUpRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DataSciencePage;
