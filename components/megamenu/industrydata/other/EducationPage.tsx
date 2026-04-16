import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, BookOpen, Users, MonitorPlay, 
  ArrowRight, Laptop, Globe, CheckCircle2,
  Video, Bell, LayoutDashboard, FileBarChart,
  Link as LinkIcon, Smartphone, Settings,
  Award, ShieldCheck, Database, MessageSquare,
  Calendar, HeartPulse
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const edtechSolutions = [
    {
      title: "Learning management",
      icon: BookOpen
    },
    {
      title: "Video & audio whiteboards",
      icon: Video
    },
    {
      title: "Custom notifications and alerts",
      icon: Bell
    },
    {
      title: "Campus portal support",
      icon: LayoutDashboard
    },
    {
      title: "Supplemental instruction reporting",
      icon: FileBarChart
    },
    {
      title: "Integration with meeting channels like zoom, Google Meet",
      icon: LinkIcon
    }
  ];

  const elearningFeatures = [
    { title: "Drag & drop course creation", icon: Settings },
    { title: "Virtual classrooms with AR/VR interaction", icon: MonitorPlay },
    { title: "E-Learning assessment tools", icon: FileBarChart },
    { title: "Resource Library", icon: Database },
    { title: "Compliance & certification support", icon: ShieldCheck },
    { title: "Multi-device usage", icon: Smartphone }
  ];

  const assessmentFeatures = [
    { title: "Multi-type & multi-series tests" },
    { title: "College/school search" },
    { title: "Certification & evaluation system" },
    { title: "Comprehensive reports & in-depth analysis" },
    { title: "Anti-cheating module" },
    { title: "Multi-user login & role-based access" }
  ];

  const selfLearningFeatures = [
    { title: "Multi-user collaboration" },
    { title: "Gamified learning approach" },
    { title: "Robust reporting" },
    { title: "Assignment-based peer learning" },
    { title: "Customized earning paths with personalized feedback" },
    { title: "Real-time communication capabilities" }
  ];

  const childcareFeatures = [
    { title: "Program management", icon: LayoutDashboard },
    { title: "Reporting & feedback", icon: FileBarChart },
    { title: "Dedicated parent portal", icon: Users },
    { title: "Regular updates & emergency alerts", icon: Bell },
    { title: "Staff management & scheduling", icon: Calendar },
    { title: "Health & immunization records", icon: HeartPulse }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="relative bg-[#1e1b4b] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <GraduationCap size={14} /> Education Software Development
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
              Powering <span className="text-indigo-400">Digital Education</span>.
            </h1>
            <p className="text-xl text-indigo-100/80 mb-6 leading-relaxed max-w-2xl">
              Helping educational institutions with personalized and engaging eLearning solutions that foster learning capabilities.
            </p>
            <p className="text-lg text-indigo-200/70 mb-10 leading-relaxed max-w-3xl">
              With over a decade of experience in EdTech, we excel at building learning management systems, virtual classrooms, and eLearning platforms tailored for web and mobile applications. Our built-to-order solutions enable collaborative learning by facilitating real-time interactions and seamless global access to training content anytime, anywhere.
            </p>
            <Link to="/contact" className="bg-indigo-500 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center inline-flex group hover:bg-indigo-400">
              Transform Your Institution <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Education Software Solutions Development for Diverse eLearning Needs</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Adapt to evolving educational needs and meet your unique L&D goals. As a prominent education software development company, GnJ Worldwide Software partners with universities, Edtech startups, and corporate training providers across the globe to build robust, scalable education ecosystems.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Through our platforms, users have access to analytics and automation capabilities that enable real-time student performance tracking, data-driven decision-making, and efficient process management. Drive impactful learning outcomes and create future-ready education solutions powered by technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EdTech Solutions */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Build-to-order EdTech software development solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              We help in improving student outreach by leveraging technical expertise in building personalized online tutor management systems. Our extensive knowledge helps manage end-to-end teacher-student interaction to craft the right learning path for students.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {edtechSolutions.map((feature, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mt-2">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Learning App Development */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Build-to-order e-learning software</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We develop applications that create seamless digital experiences for students & teachers. Our mobile-first approach enables building content for the mobile experience first and then transitioning to a desktop user experience.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The tailor-built learning and education software solution can offer scalability and sustainability. It eliminates manual errors, promotes flexible tutor-student interactions, and delivers exceptional learner outcomes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {elearningFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-500 shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{feature.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <div className="aspect-square bg-indigo-600 rounded-[3rem] overflow-hidden relative p-12 flex flex-col justify-center text-center text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <Smartphone size={64} className="mx-auto mb-8 text-indigo-300" />
                <h3 className="text-3xl font-bold mb-4">Mobile-First Learning</h3>
                <p className="text-indigo-100 text-lg">
                  Equipping businesses, universities, publishers, and training companies to impart high-quality educational content anywhere.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Assessment & Self-Learning */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6">Simplify candidate performance & monitoring</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We can build and implement unified and AI-enabled online exam management systems that make assessments & evaluations automation-driven. Our education software development services drastically reduce the TAT of conducting tests and publishing results.
              </p>
              <ul className="space-y-4">
                {assessmentFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 size={18} className="text-indigo-400" />
                    </div>
                    <span className="text-slate-200">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold mb-6">Intuitive learning solution for self-improvement</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                GnJ Worldwide helps develop self-learning management systems that benefit businesses, schools & universities. A custom-built LMS ensures collaborative online learning sessions between mentors and learners.
              </p>
              <ul className="space-y-4">
                {selfLearningFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 size={18} className="text-indigo-400" />
                    </div>
                    <span className="text-slate-200">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Childcare Management */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Seamless communication between parents & teachers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              GnJ Worldwide can help build tailor-made childcare management solutions to manage daily operations and modernize how schools conduct daycare initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {childcareFeatures.map((feature, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:shadow-xl transition-all text-center group"
              >
                <div className="w-16 h-16 bg-white text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1e1b4b] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.2),transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Build Your EdTech Solution?</h2>
          <p className="text-xl text-indigo-200 mb-12 leading-relaxed">
            Let's discuss how our technology solutions can transform your educational offerings and administrative processes.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-indigo-500 text-white font-bold py-5 px-12 rounded-2xl hover:bg-indigo-400 transition-all shadow-2xl transform hover:-translate-y-1 group">
            Schedule a Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
