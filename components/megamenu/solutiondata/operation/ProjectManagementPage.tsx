import React, { useEffect, useState } from 'react';
import { Kanban, List, Calendar, Users, ArrowRight, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectManagementSolutionPage: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 font-sans">
      <div className="bg-indigo-600 text-white py-24 px-4 text-center">
          <div className={`transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Project Management Software</h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
                  Plan, track, and deliver. Custom PM tools tailored to your team's workflow, whether Agile, Waterfall, or Hybrid.
              </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { icon: Kanban, title: "Task Boards", desc: "Visual Kanban boards for dragging and dropping tasks through stages." },
                  { icon: Calendar, title: "Gantt Charts", desc: "Timeline views for managing dependencies and critical paths." },
                  { icon: Users, title: "Resource Allocation", desc: "Workload management tools to prevent burnout and optimize capacity." },
                  { icon: List, title: "Backlog Management", desc: "Prioritize features and bugs effectively for sprint planning." },
                  { icon: CheckSquare, title: "Time Tracking", desc: "Integrated timesheets for accurate billing and project costing." },
                  { icon: Users, title: "Collaboration", desc: "In-context comments, file sharing, and real-time notifications." }
              ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-500 transform ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                  >
                      <item.icon size={32} className="text-indigo-600 mb-4" />
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                  </div>
              ))}
          </div>

          <div className="mt-16 text-center">
              <Link to="/contact" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 text-lg">
                  Build Your Solution <ArrowRight className="ml-2" />
              </Link>
          </div>
      </div>
    </div>
  );
};

export default ProjectManagementSolutionPage;