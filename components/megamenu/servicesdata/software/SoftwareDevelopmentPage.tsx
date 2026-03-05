import React, { useEffect } from 'react';
import { 
  Code2, 
  GitBranch, 
  Terminal, 
  Cpu, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Layers 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const SoftwareDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const navigate = useNavigate();

  const handleStepClick = (title: string) => {
    const routes: Record<string, string> = {
      "Discovery": "/services/software-development/discovery",
      "Development": "/services/web-development",
      "Testing": "/services/testing-and-qa",
      "Deployment": "/services/devops-consulting"
    };
    
    const target = routes[title];
    if (target) {
      // Small delay for animation feedback
      setTimeout(() => {
        navigate(target);
      }, 300);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HERO SECTION (Unique to this page) --- */}
      <div className="relative overflow-hidden bg-slate-900 text-white pb-20 pt-16 lg:pt-32">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Code2 size={14} />
              Engineering Excellence
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              We Build Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">That Scales.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              From complex enterprise platforms to consumer-facing apps, we engineer robust digital solutions tailored to your unique business logic.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="px-8 py-4 rounded-lg font-bold text-white border border-slate-700 hover:bg-slate-800 transition-all">
                View Tech Stack
              </button>
            </div>
          </div>
          
          {/* Hero Visual - Code Window */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-xl bg-[#1e1e1e] border border-slate-700 shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono ml-4">App.tsx</div>
              </div>
              <div className="p-6 font-mono text-sm overflow-hidden">
                <div className="text-purple-400">const <span className="text-yellow-300">Success</span> = <span className="text-blue-400">async</span> () =&gt; {'{'}</div>
                <div className="pl-4 text-slate-300">
                  <span className="text-purple-400">const</span> solution = <span className="text-blue-400">await</span> <span className="text-green-400">GnJ</span>.build({'{'}
                </div>
                <div className="pl-8 text-blue-300">scalability: <span className="text-orange-300">true</span>,</div>
                <div className="pl-8 text-blue-300">security: <span className="text-orange-300">"Enterprise-Grade"</span>,</div>
                <div className="pl-8 text-blue-300">performance: <span className="text-orange-300">"Optimized"</span></div>
                <div className="pl-4 text-slate-300">{'}'});</div>
                <div className="pl-4 mt-2 text-slate-300"><span className="text-blue-400">return</span> solution.launch();</div>
                <div className="text-purple-400">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PROCESS SECTION --- */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Development Lifecycle</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { icon: Terminal, title: "Discovery", desc: "Requirement gathering & architecture planning.", linkText: "Explore Phase" },
                    { icon: Code2, title: "Development", desc: "Agile sprints with bi-weekly updates.", linkText: "View Services" },
                    { icon: CheckCircle, title: "Testing", desc: "Automated QA & security auditing.", linkText: "QA Solutions" },
                    { icon: Rocket, title: "Deployment", desc: "CI/CD pipelines & cloud infrastructure.", linkText: "DevOps Stack" }
                ].map((step, idx) => (
                    <motion.div 
                        key={idx} 
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleStepClick(step.title)}
                        className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer ring-2 ring-blue-600/0 hover:ring-blue-600/50"
                    >
                        <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm mb-6 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <step.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                        {idx !== 3 && (
                            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                <ArrowRight className="text-slate-300" />
                            </div>
                        )}
                        <div className="mt-auto flex items-center text-blue-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            {step.linkText} <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>

      {/* --- FEATURED CAPABILITIES (Grid Layout) --- */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Full-Cycle Development Services</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        We don't just write code; we build digital assets. Whether you are transforming a legacy system or building a SaaS product from scratch, our engineering team acts as your strategic partner.
                    </p>
                    
                    <div className="space-y-4">
                        {[
                            "Custom Enterprise Software",
                            "SaaS Product Development",
                            "Legacy Software Modernization",
                            "API Integration & Development",
                            "Cloud-Native Solutions"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <div className="p-1 rounded-full bg-green-100 text-green-600">
                                    <CheckCircle size={16} />
                                </div>
                                <span className="font-semibold text-slate-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 translate-y-8">
                        <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
                            <Layers size={32} className="mb-4 text-blue-200" />
                            <h4 className="text-xl font-bold mb-2">Scalable Architecture</h4>
                            <p className="text-blue-100 text-sm">Microservices ready & cloud agnostic.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                            <GitBranch size={32} className="mb-4 text-slate-400" />
                            <h4 className="text-xl font-bold mb-2 text-slate-800">Clean Code</h4>
                            <p className="text-slate-500 text-sm">Maintainable & well-documented.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                            <Cpu size={32} className="mb-4 text-slate-400" />
                            <h4 className="text-xl font-bold mb-2 text-slate-800">High Performance</h4>
                            <p className="text-slate-500 text-sm">Optimized for speed & efficiency.</p>
                        </div>
                        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
                            <Terminal size={32} className="mb-4 text-slate-400" />
                            <h4 className="text-xl font-bold mb-2">Secure by Design</h4>
                            <p className="text-slate-400 text-sm">OWASP compliant development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to engineer your vision?</h2>
            <p className="text-xl text-blue-100 mb-10">
                Book a free technical consultation with our solution architects.
            </p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl">
                Schedule Call
            </Link>
        </div>
      </div>

    </div>
  );
};

export default SoftwareDevelopmentPage;