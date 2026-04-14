import React, { useEffect } from 'react';
import { 
  Database, 
  Globe, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  BarChart4, 
  UserPlus, 
  Package, 
  Wrench, 
  Home, 
  UserSquare2, 
  Search, 
  Image as ImageIcon, 
  HeartPulse, 
  Lightbulb, 
  Rocket, 
  Zap, 
  ShieldCheck, 
  MousePointer2, 
  Link2, 
  LifeBuoy,
  ChevronRight,
  Monitor
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const DatabaseDevelopmentPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const whatYouGet = [
    {
      title: "A web application",
      icon: Globe,
      desc: "Allows you to use data in a fast and convenient way with basic CRUD operations, rich search, filter, and reporting functionality."
    },
    {
      title: "A database",
      icon: Database,
      desc: "Carefully shelves your data in a secure environment and can be integrated with other data sources to avoid manual input."
    },
    {
      title: "A mobile application (optionally)",
      icon: Smartphone,
      desc: "Allows you to access the database and leverage its features wherever you are, reflecting today's on-the-go life."
    }
  ];

  const softwareTypes = [
    { title: "Customer database", icon: Users, desc: "Deliver exceptional service through quick management of customer profiles and contacts.", cta: "Go for it" },
    { title: "Marketing database", icon: BarChart4, desc: "Back up your marketing strategy with the deepest customer insights.", cta: "Go for it" },
    { title: "Membership database", icon: UserPlus, desc: "Keep track of members, manage fees and events, and coordinate volunteers with ease.", cta: "Go for it" },
    { title: "Inventory database", icon: Package, desc: "Maintain accurate records and make quick, informed inventory management decisions.", cta: "Learn more" },
    { title: "Equipment database", icon: Wrench, desc: "Track performance to minimize downtimes and stay proactive with scheduled maintenance.", cta: "Go for it" },
    { title: "Real estate database", icon: Home, desc: "Find the best match for any request with handy management of property profiles.", cta: "Learn more" },
    { title: "Employee database", icon: UserSquare2, desc: "Keep employee info organized, monitor time off, and manage payments in one place.", cta: "Learn more" },
    { title: "Recruitment database", icon: Search, desc: "Boost your onboarding process and find the perfect candidate for any position.", cta: "Learn more" },
    { title: "Image database", icon: ImageIcon, desc: "Store digital images in multiple formats with fast retrieval via indexing.", cta: "Learn more" },
    { title: "Patient database", icon: HeartPulse, desc: "Manage medical data securely with full compliance (HIPAA, HL7, etc.).", cta: "Go for it" }
  ];

  const guidingPrinciples = [
    { title: "Fast development", icon: Zap, desc: "Using Microsoft Power Apps and low-code software to create robust solutions quickly." },
    { title: "Data consistency & safety", icon: ShieldCheck, desc: "Building solid foundations for clean and secure storage at the database level." },
    { title: "Swift response time", icon: MousePointer2, desc: "Optimizing your database for your most frequent read and write requests." },
    { title: "Sleek UX", icon: Monitor, desc: "Keeping applications intuitive and logical to ensure quick user adoption and effectiveness." },
    { title: "Spotless integration", icon: Link2, desc: "Seamlessly integrating your database software with other information sources." },
    { title: "Profound support", icon: LifeBuoy, desc: "Ensuring deep technical help and the quickest response to any software problem." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Database size={14} />
              Database Development
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Clean, Secure & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Organized Data</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              GnJ Worldwide creates custom database solutions that keep data clean, organized, secure, and easily accessible for authorized users from multiple devices.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/50 flex items-center group">
                Request Database Solution <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHAT YOU GET --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What You Get</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We build the database for organization and the applications for seamless access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatYouGet.map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 shadow-sm">
                  <item.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOFTWARE WE DELIVER --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Database Software We Deliver</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We develop database software for a wide range of business purposes and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {softwareTypes.map((type, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <type.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{type.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{type.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors group">
                  {type.cta} <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONSULTING & DEVELOPMENT --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-8">
                <Lightbulb size={32} />
              </div>
              <h4 className="text-3xl font-bold mb-6">Database Software Consulting</h4>
              <ul className="space-y-4 mb-10 flex-grow">
                {["Define functionality & tech stack", "Develop business case & ROI", "Design high-perf architecture", "Deliver UX/UI mock-ups", "Project cost & time estimates"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 size={18} className="text-indigo-400 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all text-center">
                Request Consulting
              </Link>
            </div>

            <div className="p-10 rounded-3xl bg-indigo-600 text-white shadow-2xl flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-white text-indigo-600 flex items-center justify-center mb-8">
                <Rocket size={32} />
              </div>
              <h4 className="text-3xl font-bold mb-6">Full-cycle Development</h4>
              <ul className="space-y-4 mb-10 flex-grow">
                {["Solution consulting & planning", "Database, web & mobile development", "Third-party integrations", "User training & support", "Continuous software management"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-indigo-100">
                    <CheckCircle2 size={18} className="text-white mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="bg-white text-indigo-600 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-xl font-bold transition-all text-center">
                Request Development
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- GUIDING PRINCIPLES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What We're Guided By</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our principles ensure we deliver robust, high-performance, and user-friendly database solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidingPrinciples.map((principle, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <principle.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{principle.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH MARQUEE --- */}
      <div className="bg-white py-12 border-y border-slate-100 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[
            "PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Oracle", "Redis", "Cassandra", "DynamoDB", "Power Apps", "Low-Code", "ETL", "Data Warehousing", "BI Reporting"
          ].map((tech, idx) => (
            <span key={idx} className="text-2xl font-bold text-slate-200 mx-12 hover:text-indigo-600 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to organize your data?</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Let our architects build a structured foundation that scales with your business and keeps your data secure.
          </p>
          <Link to="/contact" className="inline-block bg-white text-indigo-600 font-bold py-5 px-12 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl transform hover:-translate-y-1">
            Speak with an Architect
          </Link>
        </div>
      </section>

    </div>
  );
};

export default DatabaseDevelopmentPage;
