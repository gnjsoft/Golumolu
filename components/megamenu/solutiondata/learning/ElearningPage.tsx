import React, { useEffect, useState } from 'react';
import { BookOpen, Video, Award, TrendingUp, Smartphone, PlayCircle, Star, Zap, Check, Bot, BrainCircuit, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElearningPage: React.FC = () => {
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
    const timer = setTimeout(() => setProgress(85), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans">
      
      {/* Hero with AI Imagery */}
      <div className="bg-[#1e1b4b] text-white py-24 px-4 overflow-hidden relative">
          <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965" 
                alt="AI Learning Background" 
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b] via-[#1e1b4b]/90 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
              <div className={`md:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-indigo-400/30 text-indigo-300 font-bold text-sm mb-6">
                      <BrainCircuit size={16} className="text-indigo-400" /> AI-Powered Education
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                      Intelligent <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Learning</span>
                  </h1>
                  <p className="text-xl text-indigo-100 mb-8 max-w-lg leading-relaxed">
                      Adaptive Learning Management Systems (LMS) that use AI to personalize the journey. Engaging, scalable, and data-driven.
                  </p>
                  <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/50 inline-flex items-center">
                      Explore EdTech <PlayCircle className="ml-2" size={20} />
                  </Link>
              </div>

              {/* Visual - Gamified Card */}
              <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl w-80 relative transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-slate-200">
                      <div className="absolute -top-6 -right-6 bg-yellow-400 p-4 rounded-full shadow-lg border-4 border-white animate-bounce">
                          <Star size={32} className="text-white fill-current" />
                      </div>
                      
                      <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                              <Bot size={24} />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold">AI Tutor</h3>
                              <p className="text-slate-500 text-xs">Personalized Plan</p>
                          </div>
                      </div>
                      
                      <div className="space-y-6">
                          <div>
                              <div className="flex justify-between text-sm font-bold mb-2">
                                  <span>Python Basics</span>
                                  <span className="text-green-500">Complete</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-green-500 w-full"></div>
                              </div>
                          </div>
                          <div>
                              <div className="flex justify-between text-sm font-bold mb-2">
                                  <span>Machine Learning</span>
                                  <span className="text-indigo-500">{progress}%</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-indigo-500 transition-all duration-[1500ms] ease-out" 
                                    style={{ width: `${progress}%` }}
                                  ></div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="mt-8 flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                          <div className="flex -space-x-2">
                              {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>)}
                          </div>
                          <span className="text-xs font-bold text-slate-500">+120 Learners</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* AI Tools & Imagery Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Powered by Next-Gen AI Tools</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Leveraging cutting-edge artificial intelligence to create immersive, adaptive, and efficient learning environments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { 
                      title: "Smart Video Analytics", 
                      desc: "AI indexes content, making lectures searchable by spoken word and creating auto-summaries.",
                      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800",
                      tag: "Computer Vision"
                  },
                  { 
                      title: "Adaptive Assessments", 
                      desc: "Quizzes that adjust difficulty in real-time based on student performance to maintain flow state.", 
                      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
                      tag: "Predictive AI"
                  },
                  { 
                      title: "Automated Grading", 
                      desc: "Save hours with AI that grades assignments, essays, and code, providing instant feedback.", 
                      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
                      tag: "NLP"
                  }
              ].map((item, idx) => (
                  <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-indigo-900/30 group-hover:bg-indigo-900/10 transition-colors"></div>
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-indigo-900 shadow-sm">
                              {item.tag}
                          </div>
                      </div>
                      <div className="p-8">
                          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                          <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                          <div className="flex items-center text-indigo-600 font-bold text-sm">
                              Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Analytics & Reporting Section */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                  <div className="inline-block p-3 bg-white/10 rounded-xl mb-6">
                      <TrendingUp size={32} className="text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Data-Driven Insights</h2>
                  <p className="text-slate-400 text-lg mb-8">
                      Don't just train—measure the impact. Our analytics engine provides deep insights into learner progress, course effectiveness, and ROI.
                  </p>
                  <ul className="space-y-4">
                      {["Completion Rates", "Assessment Scores", "Time Spent Learning", "Skill Gap Analysis"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                              <div className="bg-green-500 rounded-full p-1"><Check size={12} className="text-black" /></div>
                              <span className="font-medium text-slate-200">{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="flex-1 w-full">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative backdrop-blur-sm">
                      {/* Bar Chart Simulation */}
                      <div className="flex items-end justify-between h-40 gap-4">
                          {[40, 60, 30, 80, 55, 90, 70].map((h, i) => (
                              <div key={i} className="w-full bg-gradient-to-t from-indigo-600 to-purple-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                          ))}
                      </div>
                      <div className="h-px bg-white/20 w-full mt-2"></div>
                      <div className="mt-4 text-center text-sm text-slate-400 uppercase tracking-widest">Weekly Engagement</div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ElearningPage;