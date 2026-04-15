import React, { useEffect, useState } from 'react';
import { 
  Watch, Heart, Activity, Smartphone, Play, Zap, 
  ArrowRight, Dumbbell, Apple, Smile, Moon, RefreshCw, 
  Settings, Bot, Brain, Video, Glasses, 
  CheckCircle2, ShieldCheck, Lock, Globe, Building2, 
  UserCog, HeartPulse, Stethoscope, Clock, HardDrive, 
  UserPlus, AlertTriangle, Radio, Layout, Headphones, 
  Pill, BarChart3, Bot as BotIcon, Video as VideoIcon, 
  Brain as BrainIcon, Scale, Target, Layers, Database, 
  Share2, BookOpen, Boxes, Truck, CreditCard, Kanban, 
  Terminal, ClipboardList, ClipboardCheck, Warehouse, 
  Microscope, Image as ImageIcon, Activity as ActivityIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const FitnessWellnessPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const appSolutions = [
    { title: "Fitness Apps", icon: Dumbbell, desc: "Workout tracking, exercise libraries, and personalized training plans for all levels." },
    { title: "Wellness Apps", icon: Heart, desc: "Holistic health platforms focusing on mindfulness, stress reduction, and lifestyle habits." },
    { title: "Diet & Nutrition Apps", icon: Apple, desc: "Calorie tracking, meal planning, and macro calculation tools for healthy eating." },
    { title: "Mental Health Apps", icon: Smile, desc: "Digital therapeutics, mood tracking, and teletherapy platforms for emotional well-being." },
    { title: "Meditation Apps", icon: Moon, desc: "Guided meditation, breathing exercises, and soundscapes for relaxation and focus." },
    { title: "Rehabilitation Apps", icon: RefreshCw, desc: "Physical therapy support, injury recovery tracking, and guided rehab exercises." },
    { title: "Sleep Tracking Apps", icon: Clock, desc: "Analysis of sleep patterns, quality metrics, and personalized sleep hygiene tips." },
    { title: "Wearable Device Apps", icon: Watch, desc: "Custom companion apps for Apple Watch, Fitbit, Garmin, and other smart wearables." },
    { title: "Gym Management Software", icon: Settings, desc: "Back-office automation for membership, scheduling, billing, and facility operations." }
  ];

  const advancedTech = [
    {
      title: "AI Chatbots & Assistants",
      icon: Bot,
      desc: "Intelligent virtual assistants for 24/7 user support, motivation, and triage."
    },
    {
      title: "AI Personalization",
      icon: Brain,
      desc: "Machine learning models for tailored training programs and dynamic diet plans."
    },
    {
      title: "Telefitness",
      icon: Video,
      desc: "Live-streamed classes and real-time virtual training sessions with interactive feedback."
    },
    {
      title: "Real-time Vitals Monitoring",
      icon: Activity,
      desc: "Seamless integration with wearables for continuous tracking of heart rate, SpO2, and more."
    },
    {
      title: "Telehealth for Therapy",
      icon: Stethoscope,
      desc: "Secure video platforms for mental and physical therapy sessions with licensed professionals."
    },
    {
      title: "VR for Rehabilitation",
      icon: Glasses,
      desc: "Immersive virtual reality environments for engaging and effective physical rehabilitation."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-rose-700 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-400 rounded-full blur-[128px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-400 rounded-full blur-[128px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <Activity size={14} /> Fitness & Wellness IT
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight italic">
                    Move. Track. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-300 uppercase not-italic">Thrive.</span>
                </h1>
                <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-xl">
                    GnJ Worldwide assists fitness and wellness companies in engineering reliable apps that achieve high user engagement and retention rates.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-bold transition-all shadow-xl flex items-center">
                        Launch Your MVP <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] shadow-2xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070" 
                      alt="Fitness Technology" 
                      className="rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Watch className="text-orange-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-orange-200">Wearables</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Smartphone className="text-rose-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-rose-200">Mobile</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-white/10 rounded-xl">
                            <Zap className="text-yellow-400 mb-1" size={24} />
                            <span className="text-[10px] uppercase tracking-wider text-yellow-200">Speed</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* MVP Timeline Section */}
      <section className="py-16 bg-orange-50 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
              <Zap size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Rapid Market Entry</h2>
              <p className="text-lg text-slate-600">We typically deliver a high-quality MVP within <span className="font-bold text-orange-600">1–4 months</span>, helping you validate your vision faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Fitness & Wellness Apps We Deliver</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Creating engaging digital experiences that keep users motivated and committed to their health goals.
            </p>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appSolutions.map((app, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-white text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                  <app.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{app.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Tech Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Advanced Technologies We Implement</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Leveraging AI, IoT, and Telehealth to build the next generation of wellness products.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedTech.map((tech, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:border-orange-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <tech.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{tech.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Energize Your Wellness Brand?</h2>
          <p className="text-xl text-slate-400 mb-12">
            Partner with GnJ Worldwide for high-engagement fitness apps and scalable wellness platforms.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-orange-600 text-white font-bold py-5 px-12 rounded-2xl hover:bg-orange-500 transition-all shadow-xl transform hover:-translate-y-1">
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FitnessWellnessPage;