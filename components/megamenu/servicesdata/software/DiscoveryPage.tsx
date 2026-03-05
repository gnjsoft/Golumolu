import React, { useEffect } from 'react';
import { Terminal, Search, Lightbulb, Target, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const DiscoveryPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const phases = [
    {
      icon: Search,
      title: "Market Research",
      desc: "We analyze your industry landscape, competitors, and target audience to identify unique opportunities and potential pitfalls.",
      color: "bg-blue-500"
    },
    {
      icon: Target,
      title: "Requirement Gathering",
      desc: "Detailed workshops with stakeholders to define functional and non-functional requirements, user stories, and business goals.",
      color: "bg-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Solution Architecture",
      desc: "Designing the technical blueprint, selecting the right tech stack, and planning for scalability and security from day one.",
      color: "bg-amber-500"
    },
    {
      icon: Terminal,
      title: "Feasibility Study",
      desc: "Validating technical assumptions and creating a proof of concept (PoC) for high-risk features to ensure project viability.",
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#002B49] relative overflow-hidden text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services/software-development" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Software Development
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discovery Phase</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The foundation of every successful software project. We dive deep into your vision to build a roadmap for excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Discovery Matters?</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Skipping the discovery phase is like building a house without a blueprint. Our discovery process ensures that we understand your business objectives, user needs, and technical constraints before a single line of code is written.
            </p>
            <ul className="space-y-4">
              {[
                "Reduced development risks and costs",
                "Clear project scope and timeline",
                "Alignment between stakeholders",
                "Optimized technical architecture",
                "User-centric design foundation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-500 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-inner"
          >
            <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
              <Terminal className="text-blue-400 w-24 h-24 animate-pulse" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <div className="flex gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-blue-200">
                  $ gnjs-cli init discovery --project="YourVision"
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Phases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 ${phase.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <phase.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your discovery?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Let's turn your abstract ideas into a concrete technical roadmap.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-500 transition-all shadow-xl">
            Book a Discovery Workshop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPage;
