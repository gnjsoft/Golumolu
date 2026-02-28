import React, { useEffect } from 'react';
import { Cpu, HardDrive, Monitor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkstationsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-black text-white py-24 px-4 text-center">
          <Cpu size={64} className="mx-auto mb-6 text-purple-500" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">High-Performance Workstations</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Built for engineering, design, and data science. Extreme power for demanding applications.
          </p>
          <Link to="/contact" className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-500 transition-colors inline-flex items-center">
              Configure Now <ArrowRight className="ml-2" />
          </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tower Workstations</h3>
              <p className="text-slate-600 mb-6">Maximum expandability and power. Dual processors, multiple GPUs, and massive storage capacity.</p>
              <ul className="space-y-2 text-slate-700">
                  <li>• Dell Precision Tower</li>
                  <li>• HP Z Workstations</li>
                  <li>• Lenovo ThinkStation</li>
              </ul>
          </div>
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobile Workstations</h3>
              <p className="text-slate-600 mb-6">Desktop-class performance in a portable form factor for creators on the go.</p>
              <ul className="space-y-2 text-slate-700">
                  <li>• Dell Precision Mobile</li>
                  <li>• HP ZBook</li>
                  <li>• Lenovo ThinkPad P Series</li>
              </ul>
          </div>
      </div>
    </div>
  );
};

export default WorkstationsPage;