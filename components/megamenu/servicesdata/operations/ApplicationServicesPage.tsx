import React, { useEffect } from 'react';
import { 
  AppWindow, 
  Layers, 
  RefreshCw, 
  Settings, 
  ArrowRight, 
  Code, 
  ShieldCheck, 
  TestTube, 
  Cpu, 
  Users, 
  Zap, 
  CheckCircle2, 
  Activity, 
  Lock, 
  Globe, 
  Smartphone, 
  Cloud, 
  Terminal,
  Search,
  BarChart3,
  Server,
  Workflow,
  Shield,
  FileSearch,
  Scaling,
  Box,
  Headphones,
  MessageSquare,
  MousePointer2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ApplicationServicesPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: Code, title: "Application Development", desc: "Designing and delivering web, mobile, and cloud business applications with focus on flexibility and speed." },
    { icon: Layers, title: "Application Management", desc: "Maintaining and monitoring servers and databases to ensure performance, sustainability, and stability." },
    { icon: RefreshCw, title: "Application Modernization", desc: "Reviving legacy applications to increase efficiency and incorporate them into modern IT strategies." },
    { icon: Settings, title: "Application Integration", desc: "Transforming independent applications into a coherently working system for increased efficiency." },
    { icon: ShieldCheck, title: "Application Security", desc: "Making applications resistant to security threats while ensuring compliance with HIPAA, GDPR, etc." },
    { icon: TestTube, title: "Application Testing", desc: "Comprehensive manual and automated testing across the entire application life cycle." }
  ];

  const modernizationTypes = [
    { title: "Re-hosting", desc: "Moving applications to the cloud without significant code changes." },
    { title: "Re-platforming", desc: "Moving to the cloud with small optimizations for cloud capabilities." },
    { title: "Re-architecting", desc: "Changing architecture for better scalability and flexibility." },
    { title: "Re-engineering", desc: "Redesigning components to update performance or functionality." },
    { title: "Re-coding", desc: "Rewriting legacy apps with modern technologies and tools." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#9333ea_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-bold tracking-widest mb-8 backdrop-blur-sm">
              <AppWindow size={16} /> END-TO-END APPLICATION SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Driving Goals Through <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Application Excellence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Achieving project goals in spite of constraints is our top priority. You set the goals, we drive the project to fulfill them with modern tech and disciplined processes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-purple-500/20 flex items-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONCEPT SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">GnJ Worldwide's Concept</h2>
              <div className="space-y-8">
                {[
                  { icon: Cpu, title: "Modern Technologies", desc: "IoT, Big Data, ML, AI, AR, and DevOps/CD combined with long-trusted technologies." },
                  { icon: Users, title: "Flexible Cooperation", desc: "Ready to cooperate with third-party vendors and adjust responsibility scope on the go." },
                  { icon: BarChart3, title: "TCO Focus", desc: "Optimizing operational and maintenance costs throughout the solution's life cycle." },
                  { icon: Shield, title: "Disciplined Processes", desc: "ISO 9001, ISO 27001, and ISO 13485 certified quality and security management." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-indigo-50 rounded-[3rem] transform rotate-3 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                alt="Application Development Team" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[500px] w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Application Services We Offer</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions for midsized and big enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-200 hover:border-purple-500 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">{service.desc}</p>
                <Link to="/contact" className="text-purple-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPLICATION DEVELOPMENT --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Application Development</h2>
              <p className="text-lg text-slate-600 mb-8">
                We design and deliver web, mobile, and cloud business applications with special attention to flexibility, security, speed, and integration potential.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Actual Value", desc: "Architecture choices that answer specific business requirements." },
                  { title: "Stable Work", desc: "Loose-coupled and readable code for easy maintenance." },
                  { title: "ISO 9001 Quality", desc: "Reliable solutions provided within established deadlines." },
                  { title: "Agile Delivery", desc: "DevOps and CD practices for frequent feature releases." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="text-purple-600 mb-2" size={20} />
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-purple-600 h-48 rounded-3xl flex items-center justify-center text-white">
                  <Globe size={48} />
                </div>
                <div className="bg-slate-100 h-64 rounded-3xl flex items-center justify-center text-slate-400">
                  <Smartphone size={48} />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-900 h-64 rounded-3xl flex items-center justify-center text-slate-400">
                  <Cloud size={48} />
                </div>
                <div className="bg-purple-100 h-48 rounded-3xl flex items-center justify-center text-purple-600">
                  <Terminal size={48} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- APPLICATION MANAGEMENT --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Application Management</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ensuring increased business flexibility and optimized IT costs through latest process management practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Activity, title: "Remote Monitoring", desc: "Continuous diagnostics of critical applications and performance tracking." },
              { icon: Headphones, title: "Remote Support", desc: "Treating problems, managing modifications, and advising on app optimization." },
              { icon: MessageSquare, title: "24/7 Help Desk", desc: "Single point of contact for users through email, phone, chat, and tickets." },
              { icon: Workflow, title: "CD Pipeline", desc: "Automating development, testing, and deployment for quick feature delivery." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <item.icon className="text-purple-600 mb-4" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODERNIZATION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-600/10 skew-x-12 transform origin-top-right"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-12">Application Modernization</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {modernizationTypes.map((type, idx) => (
                  <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    <h4 className="text-xl font-bold text-purple-400 mb-2">{type.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{type.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-purple-400" size={20} />
                  <span className="text-sm text-slate-300">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-purple-400" size={20} />
                  <span className="text-sm text-slate-300">Legacy Code Extraction</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-purple-400" size={20} />
                  <span className="text-sm text-slate-300">Infrastructure Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTEGRATION & SECURITY --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                <Scaling className="text-purple-600" size={32} /> Application Integration
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold mb-2">Pattern Selection</h4>
                  <p className="text-sm text-slate-600">SOA, ESB, and Shared Database approaches tailored to your business strategy.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold mb-2">Risk Mitigation</h4>
                  <p className="text-sm text-slate-600">Ensuring appropriate response time, security levels, and data quality across systems.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold mb-2">End-to-End Process</h4>
                  <p className="text-sm text-slate-600">From architecture design to solution implementation and legacy modernization.</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-4">
                <Lock className="text-purple-600" size={32} /> Application Security
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                  <h4 className="font-bold mb-2">Compliance Expertise</h4>
                  <p className="text-sm text-slate-600">Adhering to HIPAA, GDPR, PCI DSS, and ISO 27001 principles.</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                  <h4 className="font-bold mb-2">Resilient Design</h4>
                  <p className="text-sm text-slate-600">Compiling security requirements and recommending design patterns to address risks.</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                  <h4 className="font-bold mb-2">Vulnerability Audit</h4>
                  <p className="text-sm text-slate-600">White box and black box testing with detailed remediation reports.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TESTING SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Application Testing</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive manual and automated testing vital for Continuous Delivery.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Functional", icon: Box },
              { title: "Performance", icon: Zap },
              { title: "Usability", icon: MousePointer2 },
              { title: "Integration", icon: Workflow },
              { title: "Compatibility", icon: Globe }
            ].map((test, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl text-center border border-slate-200 shadow-sm hover:border-purple-500 transition-all">
                <test.icon className="mx-auto mb-4 text-purple-600" size={24} />
                <h4 className="font-bold text-slate-900">{test.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-purple-600 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Drive Your Project?</h2>
          <p className="text-xl text-purple-100 mb-12">
            Let's discuss how our end-to-end application services can fulfill your business goals.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-purple-600 font-bold py-5 px-12 rounded-2xl hover:bg-purple-50 transition-all shadow-xl transform hover:-translate-y-1">
            Consult an Expert <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ApplicationServicesPage;