import React, { useEffect } from 'react';
import { Hammer, Clock, ArrowLeft, Settings, Cpu, HardDrive, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ComingSoonPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        <div className="inline-flex items-center justify-center p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl mb-8 shadow-2xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Settings size={48} className="text-blue-500" />
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
          Hardware Solutions <br />
          <span className="text-blue-500">Coming Soon</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
          We're currently assembling our premium hardware catalog. Our team is working with top global partners to bring you the best in enterprise computing, infrastructure, and networking.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Cpu, label: "Computing" },
            { icon: HardDrive, label: "Storage" },
            { icon: Network, label: "Networking" },
            { icon: Clock, label: "Launching Q2" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm flex flex-col items-center gap-2"
            >
              <item.icon size={24} className="text-blue-400" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/40">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Notify Me
          </Link>
        </div>
      </motion.div>

      {/* Decorative Grid */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export default ComingSoonPage;
