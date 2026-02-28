import React, { useEffect, useState } from 'react';
import { Wrench, Zap, Shield, Bug, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationMaintenancePage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-orange-50 py-24 px-4 text-center border-b border-orange-100">
          <Wrench size={64} className="mx-auto text-orange-500 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Application Maintenance</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Keep your software secure, stable, and up-to-date with our proactive maintenance services.
          </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-16">
              <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Maintenance Matters?</h2>
                  <p className="text-slate-600 mb-8 text-lg">
                      Software isn't "set it and forget it". Without regular updates, performance degrades, and security vulnerabilities emerge. We handle the dirty work so you don't have to.
                  </p>
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <div className="mt-1 bg-orange-100 p-2 rounded text-orange-600"><Bug size={20}/></div>
                          <div>
                              <h4 className="font-bold text-slate-900">Corrective Maintenance</h4>
                              <p className="text-sm text-slate-500">Fixing bugs and errors reported by users.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="mt-1 bg-blue-100 p-2 rounded text-blue-600"><Zap size={20}/></div>
                          <div>
                              <h4 className="font-bold text-slate-900">Adaptive Maintenance</h4>
                              <p className="text-sm text-slate-500">Updating apps to work with new OS versions or hardware.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="mt-1 bg-green-100 p-2 rounded text-green-600"><Activity size={20}/></div>
                          <div>
                              <h4 className="font-bold text-slate-900">Perfective Maintenance</h4>
                              <p className="text-sm text-slate-500">Enhancing performance and user experience.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl flex flex-col justify-center">
                  <div className="mb-8">
                      <div className="flex justify-between mb-2">
                          <span className="font-bold">System Health</span>
                          <span className="text-green-400">99.9%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-[99.9%]"></div>
                      </div>
                  </div>
                  <div className="mb-8">
                      <div className="flex justify-between mb-2">
                          <span className="font-bold">Bugs Resolved</span>
                          <span className="text-yellow-400">450+</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full w-[85%]"></div>
                      </div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                      <Shield className="text-blue-400 mb-2" />
                      <p className="text-sm text-slate-300">Security Patch Level: <span className="text-white font-bold">Latest</span></p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ApplicationMaintenancePage;