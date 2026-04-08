import React, { useEffect } from 'react';
import { Database, Server, BarChart, ArrowRight, Save, HardDrive, FileSpreadsheet, RefreshCw, Check, Cloud, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const DatabaseDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      
      {/* 3D Data Hero */}
      <div className="bg-indigo-900 text-white py-24 relative overflow-hidden">
        {/* Isometric Grid Background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,#ffffff_12px,transparent_12px)] bg-[size:20px_20px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-indigo-800 rounded-full flex items-center justify-center mb-8 border-4 border-indigo-700 shadow-2xl">
                <Database size={40} className="text-indigo-300" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Data <span className="text-indigo-400">Architecture</span>
            </h1>
            <p className="text-xl text-indigo-200 max-w-2xl mb-12">
                We design, optimize, and manage the structured foundations that power your intelligent applications.
            </p>
            
            <div className="flex gap-6">
                <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-white">SQL</div>
                    <div className="text-xs text-indigo-400 uppercase tracking-widest mt-1">Relational</div>
                </div>
                <div className="h-12 w-px bg-indigo-700"></div>
                <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-white">NoSQL</div>
                    <div className="text-xs text-indigo-400 uppercase tracking-widest mt-1">Document</div>
                </div>
                <div className="h-12 w-px bg-indigo-700"></div>
                <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold text-white">Graph</div>
                    <div className="text-xs text-indigo-400 uppercase tracking-widest mt-1">Network</div>
                </div>
            </div>
        </div>
      </div>

      {/* Strategies Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
         <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900">Our Modernization Strategies</h2>
             <p className="text-slate-600 mt-4">We assess your specific needs to determine the best path forward.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
             {[
                 { 
                     title: "Rehost (Lift & Shift)", 
                     desc: "Migrating your existing applications to the cloud with minimal code changes.",
                     color: "bg-blue-50 text-blue-600"
                 },
                 { 
                     title: "Replatform", 
                     desc: "Moving to a managed platform (PaaS) to reduce operational overhead.",
                     color: "bg-green-50 text-green-600"
                 },
                 { 
                     title: "Refactor / Re-architect", 
                     desc: "Re-engineering applications into microservices for full cloud-native benefits.",
                     color: "bg-orange-50 text-orange-600"
                 }
             ].map((item, idx) => (
                 <div key={idx} className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all bg-white">
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold text-lg ${item.color}`}>
                         {idx + 1}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
             ))}
         </div>
      </div>

      {/* Visual Transformation Flow */}
      <div className="bg-slate-50 py-24 relative overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

          <div className="max-w-5xl mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                  {/* Animated Data Packets */}
                  <motion.div 
                      className="hidden md:block absolute top-1/2 left-1/3 z-20 text-orange-400"
                      initial={{ x: 0, opacity: 0, y: "-50%" }}
                      whileInView={{ 
                          x: ["0%", "150%", "300%"], 
                          opacity: [0, 1, 0] 
                      }}
                      transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "linear" 
                      }}
                  >
                      <Database size={20} />
                  </motion.div>
                  <motion.div 
                      className="hidden md:block absolute top-1/2 left-1/3 z-20 text-blue-400"
                      initial={{ x: 0, opacity: 0, y: "-150%" }}
                      whileInView={{ 
                          x: ["0%", "150%", "300%"], 
                          opacity: [0, 1, 0] 
                      }}
                      transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: 0.5
                      }}
                  >
                      <FileSpreadsheet size={20} />
                  </motion.div>
                  <motion.div 
                      className="hidden md:block absolute top-1/2 left-1/3 z-20 text-green-400"
                      initial={{ x: 0, opacity: 0, y: "50%" }}
                      whileInView={{ 
                          x: ["0%", "150%", "300%"], 
                          opacity: [0, 1, 0] 
                      }}
                      transition={{ 
                          duration: 1.8, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: 1.2
                      }}
                  >
                      <HardDrive size={20} />
                  </motion.div>

                  {/* Before */}
                  <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 w-full md:w-[40%] relative z-10"
                  >
                      <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                          <Server size={24} className="text-slate-400" />
                          <span className="font-bold text-slate-500 text-lg">On-Premise Server</span>
                      </div>
                      <div className="space-y-3">
                          <div className="h-5 bg-slate-100 rounded-md w-full"></div>
                          <div className="h-5 bg-slate-100 rounded-md w-full"></div>
                          <div className="h-5 bg-slate-100 rounded-md w-2/3"></div>
                      </div>
                  </motion.div>

                  {/* Arrow */}
                  <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex flex-col items-center text-orange-500 relative z-10"
                  >
                      <div className="text-sm font-bold uppercase tracking-widest mb-2">MIGRATION</div>
                      <ArrowRight size={32} strokeWidth={2.5} className="hidden md:block" />
                      <ArrowRight size={32} strokeWidth={2.5} className="md:hidden rotate-90" />
                  </motion.div>

                  {/* After */}
                  <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-white p-8 rounded-2xl shadow-md w-full md:w-[40%] border-t-4 border-orange-500 relative z-10"
                  >
                      <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                          <Cloud size={24} className="text-orange-500" />
                          <span className="font-bold text-slate-900 text-lg">Cloud Microservices</span>
                      </div>
                      <div className="flex gap-3 flex-wrap">
                          <motion.div whileHover={{ scale: 1.1 }} className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500"><Database size={16} /></motion.div>
                          <motion.div whileHover={{ scale: 1.1 }} className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center text-green-500"><Server size={16} /></motion.div>
                          <motion.div whileHover={{ scale: 1.1 }} className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-500"><FileSpreadsheet size={16} /></motion.div>
                          <motion.div whileHover={{ scale: 1.1 }} className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500"><HardDrive size={16} /></motion.div>
                      </div>
                  </motion.div>
              </div>

              {/* Migration Capabilities as Visual Flows */}
              <div className="mt-24 grid lg:grid-cols-2 gap-8 relative z-10">
                  {/* Flow 1: Cloud to On-Premises */}
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between gap-4"
                  >
                      <div className="flex-1 bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                          <Cloud size={24} className="mx-auto text-slate-400 mb-2" />
                          <span className="font-bold text-slate-600 text-sm">Cloud</span>
                      </div>
                      <div className="flex flex-col items-center text-orange-500 px-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider mb-1 text-center">Reverse<br/>Migration</span>
                          <ArrowRight size={20} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 bg-orange-50 p-4 rounded-xl text-center border border-orange-100">
                          <Server size={24} className="mx-auto text-orange-500 mb-2" />
                          <span className="font-bold text-slate-900 text-sm">On-Premises</span>
                      </div>
                  </motion.div>

                  {/* Flow 2: Cloud Providers */}
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between gap-4"
                  >
                      <div className="flex-1 bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                          <Database size={24} className="mx-auto text-slate-400 mb-2" />
                          <span className="font-bold text-slate-600 text-sm">Legacy DB</span>
                      </div>
                      <div className="flex flex-col items-center text-blue-500 px-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider mb-1 text-center">Cloud<br/>Migration</span>
                          <ArrowRight size={20} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 bg-blue-50 p-4 rounded-xl text-center border border-blue-100">
                          <Cloud size={24} className="mx-auto text-blue-500 mb-2" />
                          <span className="font-bold text-slate-900 text-sm">AWS / Azure / GCP</span>
                      </div>
                  </motion.div>

                  {/* Flow 3: VMware Management */}
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between gap-4"
                  >
                      <div className="flex-1 bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                          <Layers size={24} className="mx-auto text-slate-400 mb-2" />
                          <span className="font-bold text-slate-600 text-sm">Standard VMware</span>
                      </div>
                      <div className="flex flex-col items-center text-green-500 px-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider mb-1 text-center">Optimize</span>
                          <ArrowRight size={20} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 bg-green-50 p-4 rounded-xl text-center border border-green-100">
                          <Zap size={24} className="mx-auto text-green-500 mb-2" />
                          <span className="font-bold text-slate-900 text-sm">Managed VMware</span>
                      </div>
                  </motion.div>

                  {/* Flow 4: Oracle Migration */}
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between gap-4"
                  >
                      <div className="flex-1 bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                          <Database size={24} className="mx-auto text-slate-400 mb-2" />
                          <span className="font-bold text-slate-600 text-sm">Oracle DB</span>
                      </div>
                      <div className="flex flex-col items-center text-purple-500 px-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider mb-1 text-center">Modernize</span>
                          <ArrowRight size={20} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 bg-purple-50 p-4 rounded-xl text-center border border-purple-100">
                          <RefreshCw size={24} className="mx-auto text-purple-500 mb-2" />
                          <span className="font-bold text-slate-900 text-sm">Modern RDBMS</span>
                      </div>
                  </motion.div>
              </div>
          </div>
      </div>

      {/* Benefits List */}
      <div className="py-24 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">The ROI of Modernization</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                  "Reduced Infrastructure Costs",
                  "Faster Time-to-Market",
                  "Enhanced Security Compliance",
                  "Improved Scalability",
                  "Better Developer Productivity",
                  "Superior User Experience"
              ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                      <div className="bg-green-100 text-green-600 rounded-full p-1">
                          <Check size={16} />
                      </div>
                      <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                  </div>
              ))}
          </div>
      </div>

      {/* Stacked Cards Layout for Services */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
         <div className="space-y-6">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-indigo-500 flex flex-col md:flex-row items-center gap-8 transform transition-transform hover:-translate-y-1">
                <div className="bg-indigo-50 p-4 rounded-full text-indigo-600">
                    <FileSpreadsheet size={32} />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Schema Design & Architecture</h3>
                    <p className="text-slate-600">We create normalized, efficient database schemas that reduce redundancy and ensure data integrity for your specific use case.</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-blue-500 flex flex-col md:flex-row items-center gap-8 transform transition-transform hover:-translate-y-1">
                <div className="bg-blue-50 p-4 rounded-full text-blue-600">
                    <BarChart size={32} />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Tuning</h3>
                    <p className="text-slate-600">Optimization of queries, indexing strategies, and caching layers (Redis/Memcached) to ensure millisecond response times.</p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-teal-500 flex flex-col md:flex-row items-center gap-8 transform transition-transform hover:-translate-y-1">
                <div className="bg-teal-50 p-4 rounded-full text-teal-600">
                    <RefreshCw size={32} />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Migration & ETL</h3>
                    <p className="text-slate-600">Seamless data migration services from legacy systems to modern cloud databases with zero downtime and full data integrity.</p>
                </div>
            </div>

         </div>
      </div>

      {/* Technology Grid */}
      <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-center text-3xl font-bold text-slate-900 mb-16">Supported Technologies</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                     { name: "PostgreSQL", type: "RDBMS" },
                     { name: "MongoDB", type: "Document" },
                     { name: "MySQL", type: "RDBMS" },
                     { name: "Redis", type: "Cache" },
                     { name: "SQL Server", type: "Enterprise" },
                     { name: "Oracle", type: "Enterprise" },
                     { name: "Cassandra", type: "Wide Column" },
                     { name: "DynamoDB", type: "Cloud" },
                  ].map((db, idx) => (
                      <div key={idx} className="border border-slate-200 p-6 rounded-lg text-center hover:border-indigo-500 transition-colors group">
                          <div className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">{db.name}</div>
                          <div className="text-xs text-slate-400 mt-1">{db.type}</div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Data is your most valuable asset.</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Treat it that way. Let our architects build a foundation that scales with your business.</p>
          <Link to="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Speak with an Architect
          </Link>
      </div>
    </div>
  );
};

export default DatabaseDevelopmentPage;