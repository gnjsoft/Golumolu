import React, { useEffect } from 'react';
import { 
  Network, 
  Share2, 
  Shield, 
  Lock, 
  Zap, 
  Database, 
  ArrowRight, 
  Code, 
  Key, 
  Globe, 
  RefreshCw, 
  Users2, 
  ShieldAlert, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  ClipboardList, 
  ChevronRight,
  Settings,
  Search,
  PenTool,
  Activity,
  LifeBuoy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ApiDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const successFactors = [
    { 
      title: "Collaboration management", 
      icon: Users2, 
      desc: "We design an organized matrix that maps out the roles and responsibilities of everyone involved in the project." 
    },
    { 
      title: "Forward-thinking risk mitigation", 
      icon: ShieldAlert, 
      desc: "Anticipating risks, designing mitigation plans, and actively monitoring risk factors as the project unfolds." 
    },
    { 
      title: "Controlled project scope", 
      icon: Target, 
      desc: "Structured process rigorously assesses and prioritizes change requests, effectively preventing budget escalation." 
    },
    { 
      title: "KPI-based performance", 
      icon: BarChart3, 
      desc: "Impartial evaluation of project success using tailored success criteria and quantitative KPIs for every project." 
    },
    { 
      title: "ISO 9001 Quality Management", 
      icon: ShieldCheck, 
      desc: "Rigorous quality control protocols throughout the SDLC to ensure timely detection and handling of concerns." 
    },
    { 
      title: "ISO 27001 Security Management", 
      icon: Lock, 
      desc: "Unwavering commitment to security, ensuring the safety of project environment, IP, and business assets." 
    },
    { 
      title: "Structured reporting", 
      icon: ClipboardList, 
      desc: "Transparent reporting with defined types, schedules, and depth to keep all stakeholders informed." 
    }
  ];

  const serviceOptions = [
    {
      title: "API Consulting",
      icon: Search,
      desc: "Plan an API that perfectly corresponds to your business needs and goals and brings max revenue.",
      cta: "Get my API concept"
    },
    {
      title: "API Design and Implementation",
      icon: PenTool,
      desc: "Get a scalable, trusted and easy-to-use API designed, implemented, and smoothly integrated with back-end services.",
      cta: "Implement my API"
    },
    {
      title: "API Management",
      icon: Activity,
      desc: "Have your APIs high-performing and stable on a daily basis with an eye on scalability.",
      cta: "Keep my APIs at their best"
    },
    {
      title: "End-to-end Implementation & Support",
      icon: LifeBuoy,
      desc: "Get your API designed, developed, integrated with back-end solutions and continuously supported for smooth and safe work.",
      cta: "Take full care of my API"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-green-100 selection:text-green-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-green-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/50 border border-green-700 text-green-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Network size={14} />
              Custom API Services
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Custom API <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Development Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              GnJ Worldwide designs, integrates and manages custom APIs to personalize UX and simplify workflows. We deliver safe and well-documented APIs for your applications to seamlessly connect and collaborate.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/50 flex items-center group">
                Start API Integration <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Facilitate Cooperation & Data Sharing</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Custom API development services help businesses facilitate cooperation and data sharing of their custom apps with each other or with third-party apps. We deliver safe and well-documented APIs for your applications to seamlessly connect and collaborate with your clients, vendors, and partners and drive new revenues.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Secure Endpoints</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">REST/SOAP</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Protocol Expertise</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 font-mono text-sm overflow-hidden">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="text-slate-500 text-xs mb-4">// API Documentation snippet</div>
                  <div className="text-green-400">GET /api/v1/integration</div>
                  <div className="text-blue-400">Authorization: Bearer {'{token}'}</div>
                  <div className="text-slate-300 mt-4">{'{'}</div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-purple-400">"status"</span>: <span className="text-green-400">"success"</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    <span className="text-purple-400">"data"</span>: {'{'}
                  </div>
                  <div className="pl-8 text-slate-300">
                    <span className="text-purple-400">"workflow"</span>: <span className="text-green-400">"optimized"</span>,
                  </div>
                  <div className="pl-8 text-slate-300">
                    <span className="text-purple-400">"sync"</span>: <span className="text-green-400">"real-time"</span>
                  </div>
                  <div className="pl-4 text-slate-300">{'}'}</div>
                  <div className="text-slate-300">{'}'}</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUCCESS FACTORS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How We Secure Success in Development</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We leverage trusted project management techniques to strategically plan around time and budget limitations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {successFactors.map((factor, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                  <factor.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{factor.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{factor.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-green-600 font-bold hover:text-green-800 transition-colors group">
                  Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICE OPTIONS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Choose Your API Service Option</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored engagement models to fit your specific integration and development needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceOptions.map((option, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-white text-green-600 flex items-center justify-center shadow-sm shrink-0">
                  <option.icon size={32} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{option.title}</h4>
                  <p className="text-slate-600 mb-8 leading-relaxed">{option.desc}</p>
                  <Link to="/contact" className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors group">
                    {option.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH MARQUEE --- */}
      <div className="bg-slate-900 py-12 overflow-hidden border-y border-slate-800">
        <div className="flex whitespace-nowrap animate-marquee">
          {[
            "RESTful APIs", "GraphQL", "gRPC", "SOAP", "WebSockets", "OAuth 2.0", "OpenID Connect", "JWT", "Swagger / OpenAPI", "Postman", "AWS API Gateway", "Azure API Management", "Apigee", "Kong"
          ].map((tech, idx) => (
            <span key={idx} className="text-2xl font-bold text-slate-700 mx-12 hover:text-green-500 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to open your endpoints?</h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            Build a secure, scalable, and well-documented API ecosystem that drives business growth.
          </p>
          <Link to="/contact" className="inline-block bg-white text-green-600 font-bold py-5 px-12 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl transform hover:-translate-y-1">
            Talk to an API Architect
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ApiDevelopmentPage;
