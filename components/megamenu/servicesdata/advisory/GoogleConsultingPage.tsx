import React, { useEffect, useState } from 'react';
import { Cloud, ArrowRight, Check, BarChart3, Shield, Box, Zap, Globe, Lock, Search, Target, Settings, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoogleConsultingPage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShow(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Header */}
      <div className="relative bg-slate-50 text-slate-900 py-32 px-4 flex flex-col items-center text-center overflow-hidden">
        {/* Google Logo Background Watermark */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg')", backgroundSize: '800px' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-slate-50"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className={`mx-auto w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform duration-[800ms] ${show ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-16 h-16 object-contain" />
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Google Cloud Consulting
          </h1>
          <p className={`text-xl text-slate-600 max-w-2xl transition-all duration-700 delay-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Unlock the power of GCP with our certified experts.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our GCP Capabilities</h2>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
             {[
                 { title: "Cloud Migration", icon: Cloud, color: "text-blue-500", delay: 400 },
                 { title: "BigQuery Analytics", icon: BarChart3, color: "text-yellow-500", delay: 500 },
                 { title: "Kubernetes (GKE)", icon: Box, color: "text-blue-500", delay: 600 },
                 { title: "AI & Machine Learning", icon: Zap, color: "text-red-500", delay: 700 },
                 { title: "Google Workspace", icon: Globe, color: "text-green-500", delay: 800 },
                 { title: "Security & IAM", icon: Shield, color: "text-slate-500", delay: 900 }
             ].map((item, i) => (
                 <div 
                    key={i} 
                    className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                 >
                     <div className={`w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 ${item.color}`}>
                        <item.icon size={24} />
                     </div>
                     <h3 className="font-bold text-lg mb-2 text-slate-800">{item.title}</h3>
                     <p className="text-sm text-slate-500">
                        Specialized implementation and optimization services tailored to your business needs.
                     </p>
                 </div>
             ))}
         </div>
      </div>

      {/* Why Choose Google Cloud? */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose Google Cloud?</h2>
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
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center ${item.color}`}>
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
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-red-50 rounded-[3rem] transform rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                alt="Google Cloud Infrastructure" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Check size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">Certified</div>
                  <div className="text-sm text-slate-500 font-medium">GCP Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our GCP Consulting Process */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Consulting Process</h2>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
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
              <div key={idx} className="relative bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
                <div className="text-5xl font-extrabold text-slate-200 absolute top-6 right-6 group-hover:text-blue-100 transition-colors">{process.step}</div>
                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <process.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{process.title}</h3>
                <p className="text-slate-600 relative z-10">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`text-center pb-24 transition-opacity duration-1000 delay-[1200ms] ${show ? 'opacity-100' : 'opacity-0'}`}>
         <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
            Discuss your GCP Project <ArrowRight className="ml-2" size={18} />
         </Link>
      </div>
    </div>
  );
};

export default GoogleConsultingPage;