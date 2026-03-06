import React, { useEffect, useState } from 'react';
import { Infinity, ArrowRight, Server, GitBranch, Terminal, ArrowLeft, Shield, Cloud, Activity, Settings, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevOpsConsultingPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#0f172a] text-white py-24 px-4 text-center overflow-hidden relative">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
        
        <div className={`relative z-10 transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Link to="/services/software-development" className="inline-flex items-center text-blue-400 hover:text-white mb-8 transition-colors font-bold">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Software Development
            </Link>
            <Infinity size={80} className="mx-auto text-blue-500 mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DevOps Consulting</h1>
            <p className="text-xl text-slate-400">Streamline your development pipeline and accelerate delivery.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
               
               <div className="flex gap-4">
                   <div className="mt-1"><GitBranch className="text-blue-600" size={24}/></div>
                   <div>
                       <h2 className="text-2xl font-bold text-slate-900 mb-2">CI/CD Automation</h2>
                       <p className="text-slate-600">
                           We implement robust Continuous Integration and Continuous Deployment pipelines using tools like Jenkins, GitLab CI, and GitHub Actions to ensure rapid, reliable releases.
                       </p>
                   </div>
               </div>

               <div className="flex gap-4">
                   <div className="mt-1"><Terminal className="text-blue-600" size={24}/></div>
                   <div>
                       <h2 className="text-2xl font-bold text-slate-900 mb-2">Infrastructure as Code</h2>
                       <p className="text-slate-600">
                           Manage your infrastructure with the same version control and testing practices as your application code using Terraform and Ansible.
                       </p>
                   </div>
               </div>

            </div>

            {/* Interactive Card */}
            <div className={`bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col justify-center items-center text-center shadow-xl transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                    <Server size={40} className="text-slate-800" />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-slate-900">Reduce Downtime</h3>
                <p className="text-slate-500 mb-8">Automated recovery and scalable architecture for 99.99% uptime.</p>
                <Link to="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                    Start DevOps Transformation
                </Link>
            </div>
         </div>
      </div>

      {/* Our DevOps Capabilities */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our DevOps Capabilities</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              We bridge the gap between development and operations, fostering a culture of collaboration, automation, and continuous improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Containerization & Orchestration", desc: "Deploying and managing scalable applications using Docker and Kubernetes.", icon: Cloud },
              { title: "Continuous Monitoring", desc: "Implementing proactive observability with Prometheus, Grafana, and ELK stack.", icon: Activity },
              { title: "DevSecOps Integration", desc: "Embedding security checks directly into the CI/CD pipeline to identify vulnerabilities early.", icon: Shield },
              { title: "Cloud Architecture", desc: "Designing highly available, fault-tolerant cloud environments on AWS, Azure, or GCP.", icon: Server },
              { title: "Configuration Management", desc: "Automating server provisioning and configuration with Chef, Puppet, or Ansible.", icon: Settings },
              { title: "Performance Optimization", desc: "Tuning infrastructure and applications for maximum speed and resource efficiency.", icon: Zap }
            ].map((capability, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <capability.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{capability.title}</h3>
                <p className="text-slate-600 leading-relaxed">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Business Value of DevOps */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3rem] transform -rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="DevOps Team Collaboration" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">5x</div>
                  <div className="text-sm text-slate-500 font-medium">Faster Deployments</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Business Value of DevOps</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Adopting DevOps isn't just a technical upgrade; it's a strategic business transformation. By breaking down silos and automating repetitive tasks, we help organizations achieve unprecedented agility and reliability.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Accelerated Time-to-Market", desc: "Release new features and bug fixes to your customers faster and more frequently." },
                  { title: "Improved Reliability", desc: "Automated testing and deployment reduce human error, resulting in fewer production failures." },
                  { title: "Enhanced Security", desc: "Automated compliance policies and security scans ensure your infrastructure remains secure by default." },
                  { title: "Cost Optimization", desc: "Efficient resource utilization and automated scaling reduce unnecessary cloud infrastructure spending." }
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <CheckCircle size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{value.title}</h4>
                      <p className="text-slate-600 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DevOpsConsultingPage;