import React, { useEffect, useState } from 'react';
import { BrainCircuit, Cog, Zap, ArrowRight, Bot, Cpu, Search, PenTool, Database, Code, BarChart, LifeBuoy, Lightbulb, Rocket, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MachineLearningPage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShow(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      {/* Neon/Cyber Hero */}
      <div className="relative py-32 overflow-hidden bg-black text-white">
         <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070" 
                alt="Neural Network" 
                className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-purple-900/50"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
             <div className={`md:w-1/2 transition-all duration-1000 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                 <span className="text-purple-400 font-bold tracking-wider uppercase mb-4 block flex items-center gap-2">
                    <Cpu size={18} className="animate-pulse" /> Intelligent Automation
                 </span>
                 <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                     Machine <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Learning</span>
                 </h1>
                 <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                     Build systems that learn and improve from experience. From recommendation engines to fraud detection, we deploy ML models that drive efficiency.
                 </p>
                 <Link to="/contact" className="group bg-white text-black font-bold py-4 px-8 rounded-full transition-all hover:bg-purple-50 inline-flex items-center">
                     Start Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </Link>
             </div>
             
             {/* Visual - Glowing Brain */}
             <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                 <div className="relative w-80 h-80">
                     <div className="absolute inset-0 bg-purple-600 rounded-full blur-[80px] opacity-30 animate-pulse"></div>
                     <BrainCircuit size={320} className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" strokeWidth={1} />
                     <Cog size={100} className="text-purple-400 absolute top-0 right-0 animate-spin-slow opacity-80" />
                     <Cog size={60} className="text-pink-500 absolute bottom-10 left-0 animate-spin-reverse opacity-80" />
                 </div>
             </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 hover:border-purple-200 transition-all hover:shadow-xl group">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Bot className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">NLP & Chatbots</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                      Natural Language Processing models that understand and generate human language for customer support, sentiment analysis, and automated documentation.
                  </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 hover:border-blue-200 transition-all hover:shadow-xl group">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Cog className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Predictive Maintenance</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                      Analyze equipment sensor data to predict failures before they happen, saving millions in maintenance costs and preventing downtime.
                  </p>
              </div>
          </div>

          {/* Scope of Services Section */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Scope of Our ML Services</h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                      Depending on your unique requirements and existing infrastructure, our comprehensive machine learning consulting covers the entire lifecycle.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      {
                          step: "1",
                          title: "Business Analysis & Strategy",
                          desc: "We identify your core business challenges and evaluate your current ML readiness. Our team outlines regulatory requirements, formulates a strategic roadmap, and defines clear deliverables.",
                          icon: Search,
                          color: "text-purple-600",
                          bg: "bg-purple-100"
                      },
                      {
                          step: "2",
                          title: "Architecture & Technical Design",
                          desc: "We design robust, scalable, and secure ML architectures. This includes selecting the right technology stack, engineering optimal features, and creating intuitive user interfaces.",
                          icon: PenTool,
                          color: "text-blue-600",
                          bg: "bg-blue-100"
                      },
                      {
                          step: "3",
                          title: "Data Processing & Preparation",
                          desc: "We conduct exploratory data analysis to understand your sources. Our experts handle data collection, cleansing, and structuring while establishing precise evaluation metrics.",
                          icon: Database,
                          color: "text-green-600",
                          bg: "bg-green-100"
                      },
                      {
                          step: "4",
                          title: "Model Development & Deployment",
                          desc: "We build, test, and refine machine learning models. Through rigorous evaluation and hyperparameter tuning, we ensure high accuracy before seamless production deployment.",
                          icon: Code,
                          color: "text-pink-600",
                          bg: "bg-pink-100"
                      },
                      {
                          step: "5",
                          title: "Insights & Reporting",
                          desc: "We present the model's outputs in clear, actionable formats. If needed, we integrate these insights directly into your applications to enable self-service analytics.",
                          icon: BarChart,
                          color: "text-orange-600",
                          bg: "bg-orange-100"
                      },
                      {
                          step: "6",
                          title: "Ongoing Support & Optimization",
                          desc: "We provide continuous monitoring to maintain model accuracy. By feeding new data and retraining algorithms, we ensure your ML solutions evolve alongside your business.",
                          icon: LifeBuoy,
                          color: "text-teal-600",
                          bg: "bg-teal-100"
                      }
                  ].map((service, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
                          <div className="absolute top-6 right-6 text-6xl font-black text-slate-50 opacity-50 group-hover:text-slate-100 transition-colors z-0">
                              {service.step}
                          </div>
                          <div className="relative z-10">
                              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg} ${service.color}`}>
                                  <service.icon size={28} />
                              </div>
                              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                              <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Choose Your Service Option */}
          <div className="mt-32 bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
              
              <div className="relative z-10 text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Choose Your Service Option</h2>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                      Whether you need strategic guidance, full-scale development, or optimization of existing systems, we have a tailored engagement model for you.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  {[
                      {
                          title: "ML Consulting",
                          desc: "Ideal for organizations looking for expert strategic direction across the entire lifecycle of their machine learning initiatives.",
                          icon: Lightbulb,
                          btnText: "Go for consulting",
                          link: "/contact"
                      },
                      {
                          title: "ML Implementation",
                          desc: "Perfect for businesses ready to architect, build, and deploy a high-performing, end-to-end machine learning solution.",
                          icon: Rocket,
                          btnText: "Go for implementation",
                          link: "/contact",
                          highlight: true
                      },
                      {
                          title: "ML Support & Optimization",
                          desc: "Designed for companies needing to resolve existing inefficiencies, fine-tune current models, and elevate the quality of their data insights.",
                          icon: Wrench,
                          btnText: "Get support",
                          link: "/contact"
                      }
                  ].map((option, idx) => (
                      <div key={idx} className={`rounded-2xl p-8 flex flex-col h-full ${option.highlight ? 'bg-gradient-to-b from-purple-600 to-indigo-700 text-white shadow-2xl transform md:-translate-y-4' : 'bg-white text-slate-900'}`}>
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${option.highlight ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'}`}>
                              <option.icon size={28} />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                          <p className={`flex-grow mb-8 leading-relaxed ${option.highlight ? 'text-indigo-100' : 'text-slate-600'}`}>
                              {option.desc}
                          </p>
                          <Link to={option.link} className={`inline-flex items-center justify-center font-bold py-3 px-6 rounded-xl transition-all ${option.highlight ? 'bg-white text-purple-700 hover:bg-slate-50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                              {option.btnText} <ArrowRight className="ml-2" size={18} />
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default MachineLearningPage;