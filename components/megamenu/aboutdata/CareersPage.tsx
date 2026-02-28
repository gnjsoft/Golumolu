import React, { useEffect, useState } from 'react';
import { Search, MapPin, ArrowRight, Briefcase, Zap, Globe, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "DevOps Specialist",
      department: "Engineering",
      location: "Hamburg, Germany",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Singapore",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "Mumbai, India",
      type: "Full-time",
      posted: "Just now"
    },
    {
      id: 5,
      title: "Enterprise Sales Executive",
      department: "Sales",
      location: "Singapore",
      type: "Full-time",
      posted: "2 weeks ago"
    },
    {
      id: 6,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Germany",
      type: "Part-time",
      posted: "1 month ago"
    },
    {
      id: 7,
      title: "React Native Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Contract",
      posted: "5 days ago"
    }
  ];

  const departments = ["All", ...Array.from(new Set(jobs.map(j => j.department)))];

  const filteredJobs = jobs.filter(job => {
    const matchesFilter = filter === "All" || job.department === filter;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#002B49] relative overflow-hidden text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className={`relative z-10 max-w-7xl mx-auto px-4 text-center transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wider uppercase mb-6">
            We are hiring
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Build the Future With Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Join a global team of innovators, dreamers, and doers. We are solving complex problems with cutting-edge technology.
          </p>
          <div className="flex justify-center gap-4">
             <button onClick={() => document.getElementById('jobs')?.scrollIntoView({behavior: 'smooth'})} className="bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors">
                View Openings
             </button>
             <Link to="/about/team" className="bg-white/10 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                Meet the Team
             </Link>
          </div>
        </div>
      </div>

      {/* Benefits Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className={`text-center mb-16 transition-opacity duration-1000 delay-300 ${active ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why GnJ Worldwide?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">More than just a job. We offer an environment where you can grow, lead, and make an impact.</p>
         </div>
         <div className="grid md:grid-cols-4 gap-8">
            {[
                { icon: Globe, title: "Global Exposure", desc: "Work with clients from Fortune 500 companies across 3 continents." },
                { icon: Zap, title: "Cutting-Edge Tech", desc: "Access to the latest tools, AI models, and cloud infrastructure." },
                { icon: Users, title: "Inclusive Culture", desc: "A diverse team that celebrates different perspectives and ideas." },
                { icon: Clock, title: "Flexible Work", desc: "Hybrid and remote options to help you maintain work-life balance." }
            ].map((perk, idx) => (
                <div key={idx} className={`p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${400 + (idx * 100)}ms` }}>
                    <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm mb-4">
                        <perk.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{perk.title}</h3>
                    <p className="text-sm text-slate-600">{perk.desc}</p>
                </div>
            ))}
         </div>
      </div>

      {/* Job Board Section */}
      <div id="jobs" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-4 transition-all duration-1000 delay-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Open Positions</h2>
                    <p className="text-slate-600">Find your next role.</p>
                </div>
                
                {/* Search Bar */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search by role or location..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-1000 delay-800 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {departments.map((dept, idx) => (
                    <button
                        key={idx}
                        onClick={() => setFilter(dept)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                            filter === dept 
                            ? 'bg-blue-600 text-white border-blue-600' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                    >
                        {dept}
                    </button>
                ))}
            </div>

            {/* Job List */}
            <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, idx) => (
                        <div key={job.id} className={`bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between group cursor-pointer ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${900 + (idx * 100)}ms` }}>
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                                    {job.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                    <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">{job.type}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                                <span className="text-xs text-slate-400 font-medium">{job.posted}</span>
                                <Link 
                                    to="/contact" 
                                    className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-yellow-400 hover:text-slate-900 transition-colors flex items-center"
                                >
                                    Apply <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300 animate-fade-in">
                        <Briefcase className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-400">No positions found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters.</p>
                    </div>
                )}
            </div>

            {/* General Application */}
            <div className={`mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 delay-[1200ms] ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Don't see the right fit?</h3>
                    <p className="text-slate-600">We are always looking for talent. Send us your resume and we'll keep you in mind.</p>
                </div>
                <Link to="/contact" className="bg-white text-blue-600 border border-blue-200 font-bold py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap shadow-sm">
                    Send Open Application
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;