import React, { useEffect, useState } from 'react';
import { Kanban, List, Calendar, Users, ArrowRight, CheckSquare, Zap, Clock, TrendingUp, ShieldCheck, LayoutGrid, BarChart3, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectManagementSolutionPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-600 text-white py-24 px-4 text-center relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-lg rotate-12"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>
          </div>

          <div className={`relative z-10 transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="inline-block p-4 bg-white/10 rounded-2xl mb-6 backdrop-blur-md border border-white/20">
                  <Rocket size={48} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Project Management Software</h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Plan, track, and deliver. Custom PM tools tailored to your team's workflow, whether Agile, Waterfall, or Hybrid.
              </p>
              <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl inline-flex items-center">
                  Get Started <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Kanban, title: "Task Boards", desc: "Visual Kanban boards for dragging and dropping tasks through stages with custom statuses." },
                  { icon: Calendar, title: "Gantt Charts", desc: "Interactive timeline views for managing complex dependencies and critical paths." },
                  { icon: Users, title: "Resource Allocation", desc: "Workload management tools to prevent burnout and optimize team capacity." },
                  { icon: List, title: "Backlog Management", desc: "Prioritize features, bugs, and tasks effectively for sprint and milestone planning." },
                  { icon: CheckSquare, title: "Time Tracking", desc: "Integrated timesheets and timers for accurate billing and detailed project costing." },
                  { icon: BarChart3, title: "Real-time Reporting", desc: "Custom dashboards providing instant visibility into project health and team velocity." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group transform ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <div className="bg-indigo-50 p-3 rounded-xl w-fit mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <item.icon size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
          </div>

          {/* Strategic Benefits Section */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Strategic Benefits</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Empower your teams to work smarter, not harder, with a project management system built for clarity and speed.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: <Zap className="text-yellow-500" />, title: "Increased Velocity", desc: "Eliminate bottlenecks and streamline handoffs to deliver projects up to 40% faster." },
                      { icon: <Target className="text-indigo-600" />, title: "Better Alignment", desc: "Ensure every team member knows exactly what to work on and how it contributes to the goal." },
                      { icon: <ShieldCheck className="text-green-500" />, title: "Risk Mitigation", desc: "Identify potential delays early with automated alerts and predictive timeline analysis." },
                      { icon: <TrendingUp className="text-blue-600" />, title: "Improved ROI", desc: "Optimize resource usage and reduce project overhead through better planning and tracking." },
                      { icon: <Clock className="text-orange-500" />, title: "Reduced Meetings", desc: "Replace status update meetings with real-time dashboards and automated notifications." },
                      { icon: <LayoutGrid className="text-purple-600" />, title: "Scalable Processes", desc: "Standardize your project delivery methodology across the entire organization." }
                  ].map((benefit, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-indigo-50 transition-colors">
                              {benefit.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Implementation Roadmap */}
          <div className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Implementation Roadmap</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">A structured approach to deploying your custom project management environment.</p>
              </div>
              
              <div className="relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
                  
                  <div className="grid md:grid-cols-4 gap-8 relative z-10">
                      {[
                          { step: "01", title: "Discovery", desc: "Mapping your current workflows, team structures, and reporting needs." },
                          { step: "02", title: "Configuration", desc: "Setting up custom fields, automation rules, and project templates." },
                          { step: "03", title: "Integration", desc: "Connecting your PM tool with Slack, GitHub, ERP, and other essential apps." },
                          { step: "04", title: "Adoption", desc: "Team-wide training and iterative refinement based on real-world usage." }
                      ].map((item, idx) => (
                          <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg text-center">
                              <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg">
                                  {item.step}
                              </div>
                              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                              <p className="text-slate-400 text-sm">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Industry Applications */}
          <div className="mt-32">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Industry Applications</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">Our project management solutions adapt to the unique challenges of your industry.</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                  {[
                      { title: "Software Dev", desc: "Agile sprints, bug tracking, and seamless CI/CD integrations." },
                      { title: "Construction", desc: "Site management, subcontractor tracking, and safety audits." },
                      { title: "Marketing", desc: "Campaign management, creative approvals, and asset tracking." },
                      { title: "Professional Services", desc: "Client project tracking, billable hours, and resource planning." }
                  ].map((industry, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:border-indigo-200 transition-all">
                          <h4 className="font-bold text-slate-900 mb-2">{industry.title}</h4>
                          <p className="text-slate-500 text-sm">{industry.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Final CTA */}
          <div className="mt-32 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to deliver projects on time, every time?</h2>
                  <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                      Stop struggling with fragmented tools and manual status updates. Build a unified project management environment today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
                          Start Your Free Audit
                      </Link>
                      <Link to="/contact" className="bg-indigo-800 text-white border border-indigo-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-900 transition-all">
                          Talk to a PM Expert
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProjectManagementSolutionPage;