import React, { useEffect } from 'react';
import { Database, Server, BarChart, ArrowRight, Save, HardDrive, FileSpreadsheet, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

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

      {/* Stacked Cards Layout for Services */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-12">
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