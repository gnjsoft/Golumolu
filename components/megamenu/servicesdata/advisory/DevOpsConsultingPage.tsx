import React, { useEffect, useState } from 'react';
import { Infinity, ArrowRight, Server, GitBranch, Terminal } from 'lucide-react';
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
    </div>
  );
};

export default DevOpsConsultingPage;