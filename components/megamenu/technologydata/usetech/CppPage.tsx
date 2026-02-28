import React, { useEffect } from 'react';
import { Cpu, HardDrive, Gamepad2, Settings, ArrowRight, Activity, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const CppPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-[#00599C] text-white py-24 px-4 text-center">
          <div className="inline-block p-4 bg-white/10 rounded-xl mb-6 backdrop-blur-md border border-white/20">
              <Settings size={48} className="animate-spin-slow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">C++ Development</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              When performance is non-negotiable. High-frequency trading, game engines, embedded systems, and real-time applications.
          </p>
          <Link to="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-[#00599C] transition-colors inline-flex items-center">
              Optimize Performance <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                      <Terminal className="text-blue-400" />
                      <h3 className="text-2xl font-bold">System-Level Control</h3>
                  </div>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                      We harness the raw power of C++ for applications requiring direct hardware manipulation and memory management.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-800 p-4 rounded-lg">
                          <Activity className="text-green-400 mb-2" />
                          <h4 className="font-bold">Real-Time</h4>
                          <p className="text-xs text-slate-400">Low latency systems</p>
                      </div>
                      <div className="bg-slate-800 p-4 rounded-lg">
                          <HardDrive className="text-yellow-400 mb-2" />
                          <h4 className="font-bold">Embedded</h4>
                          <p className="text-xs text-slate-400">Firmware & IoT</p>
                      </div>
                  </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex flex-col justify-center items-center text-center">
                  <Gamepad2 size={48} className="text-[#00599C] mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Graphics & Gaming</h3>
                  <p className="text-slate-600">Unreal Engine development and high-performance graphics rendering.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default CppPage;