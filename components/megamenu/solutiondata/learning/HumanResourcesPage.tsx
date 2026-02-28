import React, { useEffect, useState } from 'react';
import { Users, Heart, Calendar, Award, Briefcase, Smile, CheckCircle, UserPlus, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HumanResourcesPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-20 font-sans text-slate-800">
      
      {/* Organic Hero */}
      <div className="relative pt-24 pb-32 overflow-hidden bg-emerald-50">
          {/* Animated Blobs */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_reverse]"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className={`lg:w-1/2 transition-all duration-1000 ${active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-emerald-700 font-bold text-sm mb-6 border border-emerald-100">
                      <Heart size={16} className="fill-current" /> People First Technology
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
                      Human Capital <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Management</span>
                  </h1>
                  <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                      Automate the mundane, focus on the human. From recruitment to retirement, we build HR systems that nurture talent and culture.
                  </p>
                  <div className="flex gap-4">
                      <Link to="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all hover:-translate-y-1 shadow-lg shadow-emerald-200">
                          Modernize HR
                      </Link>
                  </div>
              </div>

              {/* Visual - Employee Lifecycle Wheel */}
              <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="relative w-96 h-96">
                      <div className="absolute inset-0 border-2 border-dashed border-emerald-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                      
                      {/* Central Hub */}
                      <div className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-full shadow-xl flex flex-col items-center justify-center z-10">
                          <Users size={32} className="text-emerald-600 mb-1" />
                          <span className="font-bold text-xs text-slate-500 uppercase tracking-widest">HRMS</span>
                      </div>

                      {/* Orbiting Items */}
                      {[
                          { icon: UserPlus, label: "Recruit", bg: "bg-blue-100 text-blue-600", top: "0%", left: "50%" },
                          { icon: Briefcase, label: "Onboard", bg: "bg-purple-100 text-purple-600", top: "50%", left: "100%" },
                          { icon: TrendingUp, label: "Develop", bg: "bg-orange-100 text-orange-600", top: "100%", left: "50%" },
                          { icon: Award, label: "Retain", bg: "bg-pink-100 text-pink-600", top: "50%", left: "0%" },
                      ].map((item, i) => (
                          <div 
                            key={i}
                            className={`absolute w-20 h-20 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center border border-slate-100 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer z-20`}
                            style={{ top: item.top, left: item.left }}
                          >
                              <div className={`p-2 rounded-full mb-1 ${item.bg}`}>
                                  <item.icon size={16} />
                              </div>
                              <span className="text-[10px] font-bold text-slate-600">{item.label}</span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Feature Cards - "Unfolding" Animation */}
      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Calendar, title: "Time & Attendance", desc: "Biometric integration, geofencing for remote teams, and automated timesheet approvals.", delay: 200 },
                  { icon: Smile, title: "Employee Experience", desc: "Self-service portals for leave requests, payslips, and internal communication.", delay: 400 },
                  { icon: TrendingUp, title: "Performance Mgmt", desc: "360-degree feedback loops, goal setting (OKRs), and continuous appraisal cycles.", delay: 600 }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-500 group transform origin-bottom ${active ? 'opacity-100 rotate-0 translate-y-0' : 'opacity-0 rotate-6 translate-y-20'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                          <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>
      </div>

      {/* Interactive Payroll Section */}
      <div className="bg-white py-24 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Payroll Without the Pain</h2>
                  <p className="text-slate-600 text-lg mb-8">
                      Compliance is hard. We make it easy. Our payroll engines handle tax calculations, deductions, and multi-country regulations automatically.
                  </p>
                  <ul className="space-y-4">
                      {["One-click Processing", "Tax Compliance (Global)", "Benefits Administration", "Direct Deposit Integration"].map((feat, i) => (
                          <li key={i} className="flex items-center gap-3">
                              <CheckCircle className="text-emerald-500" size={20} />
                              <span className="font-medium text-slate-700">{feat}</span>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="flex-1 w-full">
                  <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-[60px] opacity-20"></div>
                      <div className="space-y-4 relative z-10">
                          <div className="flex justify-between items-center border-b border-white/10 pb-4">
                              <span className="text-slate-400">Total Payroll</span>
                              <span className="text-2xl font-bold font-mono">$142,500.00</span>
                          </div>
                          <div className="flex justify-between items-center">
                              <span className="text-slate-400">Employees</span>
                              <span className="font-bold">45 Active</span>
                          </div>
                          <div className="flex justify-between items-center">
                              <span className="text-slate-400">Taxes</span>
                              <span className="font-bold text-red-400">-$28,400.00</span>
                          </div>
                          <div className="mt-6">
                              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 rounded-lg transition-colors">
                                  Process Batch
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HumanResourcesPage;