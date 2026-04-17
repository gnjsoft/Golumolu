import React, { useEffect, useState } from 'react';
import { 
  BookOpen, Video, Award, TrendingUp, Smartphone, PlayCircle, Star, 
  Zap, Check, BrainCircuit, Cpu, ArrowRight, CheckCircle2, 
  Layers, Settings, Users, BarChart3, Clock, IndianRupee, Rocket, 
  ShieldCheck, Search, PenTool, Monitor, Globe, Smartphone as Mobile,
  MessageSquare, GraduationCap, FileText, Layout, RefreshCw, Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ElearningPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const solutionTypes = [
    { title: "Learning Management Systems (LMS)", icon: Layout },
    { title: "eLearning Portals", icon: Globe },
    { title: "Learning Experience Platforms (LXP)", icon: Zap },
    { title: "Remote Proctoring Software", icon: ShieldCheck },
    { title: "Learning Content Management Systems (LCMS)", icon: FileText },
    { title: "Mobile Learning Solutions", icon: Mobile },
    { title: "Knowledge Management Solutions", icon: BookOpen }
  ];

  const features = [
    {
      category: "Learning Content Development & Management",
      icon: PenTool,
      points: [
        "Multiple content types (Text, Images, Video, Audio, AR/VR)",
        "Built-in content authoring & course development",
        "Learner-generated & third-party content aggregation",
        "Reusable content and templates",
        "Content tagging and intelligent search",
        "Support for SCORM, AICC, xAPI, and LTI",
        "Compliance with HIPAA, SOX, GLBA"
      ]
    },
    {
      category: "Learning Process Administration & Delivery",
      icon: Settings,
      points: [
        "Instructor-led, blended, micro, and self-paced learning",
        "Automated enrollment based on roles and skills",
        "Learning event scheduling (workshops, exams)",
        "Automated reminders and notifications",
        "AI-driven personalized learning paths",
        "Performance assessment & Online proctoring",
        "VR and AR simulators"
      ]
    },
    {
      category: "Social Features",
      icon: Users,
      points: [
        "Learners' profile pages",
        "Learning communities",
        "Discussion boards, chats, and forums",
        "Likes, shares, and comments",
        "Gamification (scores, badges, leaderboards, rewards)"
      ]
    },
    {
      category: "Analytics and Reporting",
      icon: BarChart3,
      points: [
        "Learning history tracking",
        "Learners' feedback gathering",
        "Content usage & user activity dashboards",
        "Performance assessment dashboards",
        "User regulatory compliance reporting"
      ]
    }
  ];

  const benefits = [
    {
      title: "Quick Software Launch",
      desc: "Mature Agile and DevOps cultures allow us to introduce an MVP in just 1–5 months.",
      icon: Rocket
    },
    {
      title: "Excellent Solution Quality",
      desc: "Well-thought-out design, standardized coding, and rigorous parallel testing.",
      icon: Award
    },
    {
      title: "Optimized Development Budget",
      desc: "Advice on optimal architecture, pragmatic tech stack, and right-sized team composition.",
      icon: IndianRupee
    },
    {
      title: "High User Adoption",
      desc: "Rich functional capabilities, engaging features, and user-friendly role-based UX.",
      icon: Users
    }
  ];

  const services = [
    {
      title: "Custom eLearning Development",
      desc: "End-to-end development from needs analysis to implementation and support.",
      icon: Code,
      action: "I need this"
    },
    {
      title: "Revamp of Legacy Learning Software",
      desc: "Redesign of processes, cloud migration, and implementing new functionality.",
      icon: RefreshCw,
      action: "I need this"
    },
    {
      title: "Adding Advanced Functionality",
      desc: "Transforming processes with innovative techs like AI, VR, AR, and Big Data.",
      icon: Zap,
      action: "I need this"
    },
    {
      title: "Customization of Open-Source Platforms",
      desc: "Advising on and customizing platforms to support unique assessments and workflows.",
      icon: Settings,
      action: "I need this"
    }
  ];

  const stats = [
    { label: "Annual ROI", val: "120–430%", desc: "Due to optimal feature value/cost ratio and innovative techs." },
    { label: "Learning Costs", val: "-20–50%", desc: "Savings on materials, equipment, staff, and trainers." },
    { label: "Employee Productivity", val: "+30–60%", desc: "Improved skills and on-demand access to learning." },
    { label: "Knowledge Retention", val: "+25–60%", desc: "Diversity of content and higher learning impact." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900 overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative bg-indigo-900 py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <div className={`lg:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
                      <GraduationCap size={14} /> eLearning Software Development
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                      Digital Transformation of <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Corporate Learning</span>
                  </h1>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                      GnJ Worldwide builds eLearning solutions that drive digital transformation, resulting in human capital ROI growth and reduced learning costs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center">
                          Start Your Project <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>
              
              <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                              <BrainCircuit size={24} />
                          </div>
                          <div>
                              <div className="text-slate-900 font-bold">Smart Learning</div>
                              <div className="text-xs text-slate-500">AI-Driven Personalization</div>
                          </div>
                      </div>
                      <div className="space-y-6">
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                              <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
                                  <span>Course Completion</span>
                                  <span>94%</span>
                              </div>
                              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-indigo-500 w-[94%] transition-all duration-1000 delay-500"></div>
                              </div>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                              <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
                                  <span>Learner Engagement</span>
                                  <span>+60%</span>
                              </div>
                              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-purple-500 w-[60%] transition-all duration-1000 delay-700"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl font-bold text-slate-900 mb-8">Streamline Your Corporate Learning</h2>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          The goal of eLearning development is creating tools like LMS, LCMS, and LXP to help organizations increase learning efficiency and cut learning costs.
                      </p>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          Our services cover consulting on implementation, solution design, coding, modernization of legacy systems, and customization of market-available platforms.
                      </p>
                      <div className="flex gap-4">
                          <div className="flex items-center gap-2 text-indigo-600 font-bold">
                              <CheckCircle2 size={20} /> Increased Efficiency
                          </div>
                          <div className="flex items-center gap-2 text-purple-600 font-bold">
                              <CheckCircle2 size={20} /> Reduced Costs
                          </div>
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      {solutionTypes.slice(0, 4).map((type, i) => (
                          <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center hover:bg-indigo-50 transition-colors group">
                              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 mx-auto mb-4 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                  <type.icon size={24} />
                              </div>
                              <h4 className="font-bold text-slate-900 text-sm">{type.title}</h4>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Key Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Key Features We Deliver</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive functionality designed to support every aspect of the modern eLearning experience.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
              {features.map((group, gIdx) => (
                  <div key={gIdx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                      <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                              <group.icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900">{group.category}</h3>
                      </div>
                      <ul className="space-y-3">
                          {group.points.map((point, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                                  <CheckCircle2 size={16} className="text-indigo-500 mt-0.5 shrink-0" />
                                  <span>{point}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Benefits with GnJ Worldwide</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">Partner with us to ensure high-quality, cost-effective, and widely adopted learning solutions.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all">
                          <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                              <benefit.icon size={24} />
                          </div>
                          <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                          <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Service Options */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Choose Your Service Option</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">From custom development to legacy revamp, we offer tailored engagement models.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-start">
                      <div className="shrink-0 w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                          <service.icon size={32} />
                      </div>
                      <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                          <Link to="/contact" className="inline-flex items-center text-indigo-600 font-bold hover:gap-2 transition-all">
                              {service.action} <ArrowRight size={18} className="ml-1" />
                          </Link>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Timeframes & Pricing */}
      <div className="bg-indigo-50 py-24 border-y border-indigo-100">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16">
                  {/* Timeframes */}
                  <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                          <Clock className="text-indigo-600" /> Development Timeframes
                      </h2>
                      <div className="space-y-4">
                          {[
                              { label: "MVP Development", time: "3–5 months" },
                              { label: "MVP with Innovative Component", time: "4–6 months" },
                              { label: "Basic Module / Process Automation", time: "1–3 months" },
                              { label: "Investment Payback Period", time: "0.1–0.9 years" },
                              { label: "Regular Releases", time: "Every 2–6 weeks" }
                          ].map((item, i) => (
                              <div key={i} className="flex justify-between items-center p-5 bg-white rounded-2xl border border-indigo-100 shadow-sm">
                                  <span className="font-bold text-slate-700 text-sm">{item.label}</span>
                                  <span className="text-indigo-600 font-bold text-sm">{item.time}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                  {/* Pricing */}
                  <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                          <IndianRupee className="text-indigo-600" /> Pricing Models
                      </h2>
                      <div className="space-y-6">
                          {[
                              { title: "T&M with a cap", desc: "Used for midsize and big projects with unclear scope and agile development to react to user feedback." },
                              { title: "Fixed-price", desc: "Used for small projects with a well-defined and stable scope. Can be divided into estimated phases." }
                          ].map((item, i) => (
                              <div key={i} className="p-6 bg-white rounded-2xl border border-indigo-100 shadow-sm">
                                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                  <p className="text-sm text-slate-600">{item.desc}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Why Opt Now Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Opt for eLearning Now?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Professionally implemented solutions deliver measurable business benefits and competitive advantage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center group hover:bg-indigo-600 transition-all duration-500">
                      <div className="text-4xl font-black text-indigo-600 mb-4 group-hover:text-white transition-colors">{stat.val}</div>
                      <h4 className="font-bold text-slate-900 mb-2 group-hover:text-white transition-colors">{stat.label}</h4>
                      <p className="text-xs text-slate-500 group-hover:text-indigo-100 transition-colors leading-relaxed">{stat.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              </div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to transform your learning?</h2>
                  <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Partner with GnJ Worldwide to build an eLearning solution that drives growth and efficiency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
                          Get a Free Consultation
                      </Link>
                      <Link to="/contact" className="bg-indigo-900 text-white border border-indigo-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-800 transition-all">
                          Talk to an Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ElearningPage;
