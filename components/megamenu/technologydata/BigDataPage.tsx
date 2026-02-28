import React, { useEffect, useState } from 'react';
import { Database, Server, BarChart, ArrowRight, HardDrive, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const BigDataPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-orange-600 text-white py-24 px-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-12 transform origin-top-right"></div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
              <div className="md:w-1/2">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">Big Data</h1>
                  <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                      Volume, Velocity, Variety. We engineer pipelines to ingest, process, and store massive datasets for real-time analytics.
                  </p>
                  <Link to="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors inline-flex items-center">
                      Handle Scale <ArrowRight className="ml-2" />
                  </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                  <Database size={240} className="text-orange-300 opacity-80" strokeWidth={0.5} />
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Server, title: "Data Lakes", desc: "Scalable storage for structured and unstructured data using Hadoop, S3, or Azure Blob." },
                  { icon: Layers, title: "ETL Pipelines", desc: "Robust extraction, transformation, and loading processes using Apache Spark and Kafka." },
                  { icon: BarChart, title: "Real-time Analytics", desc: "Processing streams of data for instant business intelligence and decision making." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-slate-200 rounded-2xl hover:border-orange-400 transition-colors group">
                      <item.icon className="w-12 h-12 text-slate-400 group-hover:text-orange-500 mb-6 transition-colors" />
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default BigDataPage;