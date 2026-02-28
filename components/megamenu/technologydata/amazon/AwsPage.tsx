import React, { useEffect, useState } from 'react';
import { Cloud, Server, Database, Shield, Zap, ArrowRight, Activity, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AwsPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#232F3E] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        {/* AWS Orange Accent Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#FF9900] rounded-full blur-[150px] opacity-20 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="inline-flex items-center gap-2 border border-[#FF9900] text-[#FF9900] px-4 py-1 rounded-full text-sm font-bold mb-6 bg-[#FF9900]/10">
                    <Cloud size={16} /> Advanced Cloud Partner
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Amazon Web Services</h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Architect, migrate, and optimize your infrastructure on the world's most comprehensive and broadly adopted cloud platform.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-[#FF9900] text-[#232F3E] px-8 py-3 rounded-lg font-bold hover:bg-[#ffac33] transition-all shadow-lg inline-flex items-center">
                        Start Migration <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>
            
            <div className={`md:w-1/2 w-full transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                <div className="bg-[#19222d] border border-slate-700 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9900] to-yellow-200"></div>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-mono text-slate-400">EC2 Instance Monitor</span>
                        <span className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase"><Activity size={14} className="animate-pulse"/> Running</span>
                    </div>
                    
                    <div className="space-y-4">
                        {[
                            { label: "CPU Utilization", val: 45, color: "bg-blue-500" },
                            { label: "Memory Usage", val: 62, color: "bg-purple-500" },
                            { label: "Network I/O", val: 28, color: "bg-green-500" },
                            { label: "Disk Latency", val: 12, color: "bg-[#FF9900]" }
                        ].map((metric, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between text-xs text-slate-300 mb-1">
                                    <span>{metric.label}</span>
                                    <span>{metric.val}%</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full ${metric.color} transition-all duration-[2000ms] ease-out`} 
                                        style={{ width: active ? `${metric.val}%` : '0%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
                        <div className="bg-[#232F3E] p-3 rounded-lg text-center">
                            <div className="text-[#FF9900] font-bold text-xl">99.99%</div>
                            <div className="text-xs text-slate-500">Uptime SLA</div>
                        </div>
                        <div className="bg-[#232F3E] p-3 rounded-lg text-center">
                            <div className="text-blue-400 font-bold text-xl">Global</div>
                            <div className="text-xs text-slate-500">Availability Zones</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Server, title: "Compute (EC2)", desc: "Scalable virtual servers tailored to your workload requirements." },
                  { icon: Database, title: "Databases (RDS)", desc: "Managed relational databases including Aurora, PostgreSQL, and MySQL." },
                  { icon: Zap, title: "Serverless (Lambda)", desc: "Run code without provisioning or managing servers." },
                  { icon: Shield, title: "Security (IAM)", desc: "Identity and access management to secure your cloud resources." },
                  { icon: Globe, title: "Content Delivery", desc: "CloudFront CDN for low-latency content delivery globally." },
                  { icon: Activity, title: "Auto Scaling", desc: "Automatically adjust capacity to maintain steady performance." }
              ].map((item, idx) => (
                  <div key={idx} className="p-8 border border-slate-200 rounded-2xl hover:border-[#FF9900] hover:shadow-lg transition-all group bg-white">
                      <item.icon className="w-10 h-10 text-slate-400 group-hover:text-[#FF9900] mb-4 transition-colors" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default AwsPage;