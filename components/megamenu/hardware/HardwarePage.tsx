
import React, { useEffect } from 'react';
import { Server, Monitor, HardDrive, Cpu, ArrowRight, Printer, Droplet, Keyboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const HardwarePage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-slate-900 text-white py-24 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Enterprise Hardware</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Procurement, installation, and maintenance of mission-critical infrastructure. We partner with global leaders like Dell, HP, and Cisco.
          </p>
          <div className="flex justify-center gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center">
                  Request Quote <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-8">
          <Link to="/hardware/servers" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <Server size={48} className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Servers & Storage</h3>
              <p className="text-slate-600">Rack, Tower, and Blade servers customized for your workload.</p>
          </Link>
          <Link to="/hardware/desktops" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <Monitor size={48} className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Computing</h3>
              <p className="text-slate-600">Business-grade desktops, laptops, and high-performance workstations.</p>
          </Link>
          <Link to="/hardware/networking" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <Cpu size={48} className="text-purple-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Networking</h3>
              <p className="text-slate-600">Switches, routers, and firewalls to keep your team connected and secure.</p>
          </Link>
          <Link to="/hardware/printers" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <Printer size={48} className="text-slate-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Printers</h3>
              <p className="text-slate-600">Laser, Inkjet, and Multifunction devices for efficient document management.</p>
          </Link>
          <Link to="/hardware/cartridges" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <Droplet size={48} className="text-cyan-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ink & Toner</h3>
              <p className="text-slate-600">Genuine supplies for all major printer brands ensuring high-quality prints.</p>
          </Link>
          <Link to="/hardware/accessories" className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <Keyboard size={48} className="text-slate-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Accessories</h3>
              <p className="text-slate-600">Keyboards, mice, headsets, and cables to complete your workstation.</p>
          </Link>
      </div>
    </div>
  );
};

export default HardwarePage;
