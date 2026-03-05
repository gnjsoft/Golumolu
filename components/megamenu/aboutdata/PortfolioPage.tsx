import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(true);
  }, []);

  const projects = [
    {
      title: "Fintech Banking App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      desc: "A secure and intuitive mobile banking application serving over 1M users.",
      stat: "4.8/5 App Store Rating"
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1000",
      desc: "Scalable marketplace solution with AI-driven product recommendations.",
      stat: "150% Increase in Sales"
    },
    {
      title: "Healthcare Portal",
      category: "Enterprise Software",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
      desc: "Patient management system streamlining appointments and records.",
      stat: "30% Operational Efficiency"
    },
    {
      title: "Logistics Dashboard",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      desc: "Real-time fleet tracking and supply chain optimization tool.",
      stat: "20% Cost Reduction"
    },
    {
      title: "Smart Home IoT",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=1000",
      desc: "Integrated control system for modern smart home devices.",
      stat: "50k+ Connected Devices"
    },
    {
      title: "Education LMS",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
      desc: "Comprehensive learning management system for universities.",
      stat: "10k+ Active Students"
    }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pt-20">
        <div className="bg-slate-50 py-24">
            <div className={`max-w-7xl mx-auto px-4 text-center transition-all duration-1000 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Portfolio</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    A showcase of our successful projects and the value we've delivered to clients worldwide.
                </p>
            </div>
        </div>

        {/* Filter Section */}
        <div className={`max-w-7xl mx-auto px-4 pt-12 transition-all duration-1000 delay-200 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                            filter === cat 
                            ? 'bg-blue-600 text-white border-blue-600' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, idx) => (
                    <div key={`${filter}-${idx}`} className={`group cursor-pointer flex flex-col h-full animate-fade-in-up`} style={{ animationDelay: `${idx * 100}ms` }}>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold flex items-center gap-2">
                                    View Case Study <ArrowUpRight size={18} />
                                </span>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{project.category}</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{project.desc}</p>
                            <div className="pt-4 border-t border-slate-100">
                                <span className="text-sm font-bold text-slate-800">Impact: <span className="text-green-600">{project.stat}</span></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Call to Action */}
        <div className={`bg-blue-900 py-16 text-center text-white transition-opacity duration-1000 delay-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
                <p className="text-blue-100 mb-8 text-lg">Let's build the next success story together.</p>
                <Link to="/contact" className="inline-block bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors">
                    Start Your Project
                </Link>
            </div>
        </div>
    </div>
  );
};

export default PortfolioPage;